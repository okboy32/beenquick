<template>
    <div class="categroup">
      <div class="group-name">闪送超市
        <div class="group-buy">凑单专区</div>
      </div>
      <div class="msg border-bottom">¥0起送，22点前满¥39免运费，不满¥39收¥5运费</div>
      <div class="group-wrap border-bottom">
        <div class="group-receive">收货时间
          <div class="right">可预订 <span class="iconfont">&#xe9d8;</span></div>
        </div>
        <select id="received_time" v-model="receive_time">
          <optgroup label="今天" v-if="showtoday">
            <option v-for="(item, index) of options['今天']" :key="index" :value="item.value" :selected="item.selected">{{item.str}}</option>
          </optgroup>
          <optgroup label="明天">
            <option v-for="(item, index) of options['明天']" :key="index" :value="item.value" :selected="item.selected">{{item.str}}</option>
          </optgroup>
          <optgroup label="后天">
            <option v-for="(item, index) of options['后天']" :key="index" :value="item.value" :selected="item.selected">{{item.str}}</option>
          </optgroup>
        </select>
      </div>
      <div class="group-wrap border-bottom">
        <div class="group-note">收获备注
        <input type="text" class="note-input" placeholder="可输入100字以内特殊要求" v-model="note"/>
        </div>
      </div>
      <div class="group-product">
        <div class="item border-bottom" v-for="(item, index) of shopcart_list" :key="item.product.id">
          <div :class="{'checkbox': !item.selected, 'checkbox-selected': item.selected}" @click="handleClickCheckbox(index)"></div>
          <div class="icon"><img :src="item.product.img" /></div>
          <div class="meta">
            <div class="name meta-item" v-bind:style="{ selectedStyle: item.selected }">{{item.product.name}}</div>
            <div class="price meta-item">￥ {{item.product.partner_price}}</div>
            <div class="operation">
              <div class="inner sub" @click="handleCilckSub(index)"></div>
              <div class="count">{{item.count}}</div>
              <div class="inner add" @click="handleCilckAdd(index)"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="figure border-bottom" v-if="showFigure">
        <div :class="{'checkbox': !selected_all, 'checkbox-selected': selected_all}" @click="handleCilckSelectAll"></div>
        <div class="select_all">全选</div>
        <div class="amount">共: <div>￥{{this.amount}}</div> </div>
        <div class="submit" @click="handleClickSubmit">选好了</div>
      </div>
    </div>
</template>

<script>
import cookie from '../../../../static/js/cookie'
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Categroup',
  props: ['deltime'],
  data () {
    return {
      note: '',
      showtoday: true,
      shopcart_list: [],
      selected_all: true,
      amount: 0,
      selectedStyle: {
        background: 'red'
      },
      showFigure: false,
      receive_time: this.deltime
    }
  },
  watch: {
    shopcart_list (val) {
      this.showFigure = val.length
    }
  },
  methods: {
    ...mapActions(['setShopCart', 'changeShopCart', 'getTotalcount']),
    handleClickSubmit () {
      if (this.receive_time === -1) {
        console.info('今天无法送达，请重新选择送货时间')
        return
      }
      if (this.amount === 0) {
        console.info('请选择商品')
        return
      }
      const token = cookie.getCookie('token')
      axios.post('http://120.79.0.254/order/', {
        'delivery_time': this.receive_time,
        'order_amount': this.amount,
        'shopcart': this.shopcart,
        'signer_name': 'zl',
        'signer_mobile': '18915779180',
        'address': 'shanghai',
        'note': this.note
      }, {
        headers: {
          'Authorization': 'JWT ' + token
        }
      }).then((response) => {
        this.asyncShopcart()
      })
    },
    asyncShopcart () {
      axios.get('http://120.79.0.254/api/shopcart/?format=json').then((response) => {
        console.info(response)
        const data = response.data
        this.shopcart_list = data
        var temp = {}
        for (var i = 0; i < this.shopcart_list.length; i++) {
          temp[this.shopcart_list[i].product.id] = this.shopcart_list[i].count
        }
        if (temp !== this.shopcart) {
          this.setShopCart(temp)
        }
        this.showFigure = data.length
        this.figureOutAmount()
      })
    },
    handleClickCheckbox (index) {
      this.shopcart_list[index].selected = !this.shopcart_list[index].selected
      const id = this.shopcart_list[index].product.id
      this.changeShopcart(id, 0, this.shopcart_list[index].selected)
      this.figureSelectedAll()
      this.figureOutAmount()
    },
    figureSelectedAll () {
      this.selected_all = true
      for (var i = 0; i < this.shopcart_list.length; i++) {
        this.selected_all = this.shopcart_list[i].selected & this.selected_all
      }
    },
    handleCilckSelectAll () {
      this.selected_all = !this.selected_all
      for (var i = 0; i < this.shopcart_list.length; i++) {
        this.shopcart_list[i].selected = this.selected_all
      }
      this.changeShopcart(this.shopcart_list[0].product.id, 0, this.selected_all, 'SECLCTEDALL')
      this.figureOutAmount()
    },
    handleCilckSub (index) {
      const id = this.shopcart_list[index].product.id
      const selected = this.shopcart_list[index].selected
      this.changeShopcart(id, -1, selected)
      const count = --this.shopcart_list[index].count
      if (count === 0) {
        this.removeProduct(index)
      }
      this.figureOutAmount()
      this.changeShopCart({'product': id, 'count': count})
    },
    handleCilckAdd (index) {
      const count = ++this.shopcart_list[index].count
      this.figureOutAmount()
      const id = this.shopcart_list[index].product.id
      const selected = this.shopcart_list[index].selected
      this.changeShopcart(id, 1, selected)
      this.changeShopCart({'product': id, 'count': count})
    },
    figureOutAmount () {
      let amount = 0
      for (var i = 0; i < this.shopcart_list.length; i++) {
        if (this.shopcart_list[i].selected) {
          amount += this.shopcart_list[i].count * this.shopcart_list[i].product.partner_price
        }
      }
      this.amount = amount
    },
    changeShopcart (id, num, selected, op = '') {
      const token = cookie.getCookie('token')
      axios.post('http://120.79.0.254/api/shopcart/', {
        'product': id,
        'count': num,
        'selected': selected,
        'op': op
      },
      {
        headers: {
          'Authorization': 'JWT ' + token
        }
      }
      ).then((response) => {
        if (op !== 'SELECTEDALL') {
          const data = response.data
        }
      })
    },
    removeProduct (index) {
      this.shopcart_list.splice(index, 1)
    }
  },
  computed: {
    ...mapState(['shopcart']),
    options: function () {
      var curdata = new Date()
      var dethour = 0
      curdata = curdata.getHours()
      var options = {'今天': [], '明天': [], '后天': []}
      if (curdata > 23) {
        options['今天'] = [{
          'value': -1,
          'str': '今天无法配送',
          'select': 'selected'
        }]
      } else {
        options['今天'] = [{
          'value': 0,
          'str': '30分钟内送达',
          'select': 'selected'
        }]
        while (curdata < 22) {
          dethour++
          curdata++
          if (curdata > 9) {
            curdata++
            const item = {
              'value': dethour,
              'str': '今天 ' + String(curdata) + ':00-' + String(curdata + 1) + ':00'
            }
            options['今天'].push(item)
          }
        }
      }
      curdata = 9
      dethour += 10
      var option = []
      while (curdata < 23) {
        dethour++
        option.push({
          'value': dethour,
          'str': '明天' + String(curdata) + ':00-' + String(curdata + 1) + ':00'
        })
        curdata++
      }
      options['明天'] = option
      option = []
      curdata = 9
      dethour += 10
      while (curdata < 23) {
        dethour++
        option.push({
          'value': dethour,
          'str': '后天' + String(curdata) + ':00-' + String(curdata + 1) + ':00'
        })
        curdata++
      }
      options['后天'] = option
      return options
    }
  },
  mounted () {
    this.asyncShopcart()
    this.figureSelectedAll()
  }
}
</script>

<style lang="stylus" scoped>
.border-bottom
  &:before
    border solid .02rem #cacaca
.categroup
  overflow hidden
  width 100%
  background white
  padding-top .1rem
  .group-name
    position relative
    padding-left .4rem
    color #999
    height .8rem
    line-height .8rem
    font-size .3rem
    &:before
      content ''
      background #ffd600
      display inline-block
      width .1rem
      height .3rem
      margin-right .1rem
    .group-buy
      position absolute
      top 0
      bottom 0.1rem
      right .2rem
      width 1.8rem
      line-height .7rem
      color #e64f1a
      border solid .02rem #ff3800
      text-align center
      border-radius .3rem
      font-size .32rem
  .msg
    padding-left .4rem
    color #999
    padding-bottom .1rem
  .group-wrap
    position relative
    width 100%
    font-size .36rem
    background white
    height 1.28rem
    line-height 1.28rem
    .group-receive
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      padding-right .4rem
      padding-left .4rem
      .right
        float right
    select
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      width 100%
      background transparent
      padding-left 30%
      color #E64F1A
      font-size .4rem
      padding-bottom .1rem
      -webkit-appearance none
    .group-note
      padding-left .4rem
      padding-right .6rem
      .note-input
        float right
        width 60%
        height .8rem
        margin-top .2rem
        border solid .02rem #acacac
        padding-left .2rem
        border-radius .2rem
  .group-product
    .item
      display flex
      width 1005
      height 2.04rem
      .icon
        float left
        width 1.2rem
        height 1.2rem
        padding .41rem 0
        img
          width 100%
      .meta
        flex 1
        height 2.04rem
        position relative
        .meta-item
          height 1.02rem
          line-height 1.02rem
          font-size .34rem
        .operation
          position absolute
          bottom .2rem
          right .2rem
          width 1.9rem
          height .66rem
          .count
            float left
            width .6rem
            height .6rem
            text-align center
            line-height .6rem
          .inner
            float left
            width .6rem
            height .6rem
            border-radius .3rem
            border solid 0.02rem #ff4300
          .sub
            background #ff4300 url('../../../assets/img/product_operation.png') no-repeat left center
            background-origin border-box
            background-size 200% 100%
          .add
            background #ff4300 url('../../../assets/img/product_operation.png') no-repeat right center;
            background-origin border-box
            background-size 200% 100%
.checkbox
  float left
  height 100%
  width 1.2rem
  background url("../../../assets/img/select.png") no-repeat center center
  background-size 40%
.checkbox-selected
  float left
  height 100%
  width 1.2rem
  background url("../../../assets/img/selected.png") no-repeat center center
  background-size 40%
.figure
  width 100%
  height 1.31rem
  .select_all
    float left
    height 1.31rem
    line-height 1.31rem
    font-size .34rem
    margin-right .8rem
  .amount
    float left
    font-size .34rem
    height 1.31rem
    line-height 1.31rem
    div
      float right
      color #e64f1a
  .submit
    text-align center
    float right
    background #ffd600
    font-size .34rem
    height 1.31rem
    line-height 1.31rem
    width 2.5rem
</style>
