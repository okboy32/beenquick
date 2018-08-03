<template>
  <div>
    <div class="footer border-top">
      <div class="operation-wrap">
        <span>添加商品:</span>
        <div class="operation">
          <div class="inner sub" @click="handleClickSub"></div>
          <div class="count">{{this.count}}</div>
          <div class="inner add" @click="handleCilckAdd"></div>
        </div>
      </div>
      <div class="fav">收藏</div>
    </div>
    <div class="cart-btn-wrap">
    </div>
    <div class="cart-btn" @click="handleCilckShopcart"></div>
    <div class="count-icon" v-show="this.totalCount">{{this.totalCount}}</div>
  </div>
</template>

<script>
import axios from 'axios'
import cookie from '../../../../static/js/cookie'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Footer',
  props: ['id', 'isLogin'],
  data () {
    return {
      count: 0
    }
  },
  computed: {
    ...mapState(['shopcart', 'totalCount'])
  },
  methods: {
    handleCilckShopcart: function () {
      this.$router.push({name: 'Shopcart'})
    },
    handleClickSub: function () {
      if (!this.isLogin) {
        this.$router.push({name: 'Login'})
        return
      }
      if (this.count === 0) return
      const token = cookie.getCookie('token')
      this.count--
      this.changeShopCart({'product': this.id, 'count': this.count})
      axios.post('http://120.79.0.254:8000/shopcart/', {
        'product': this.id,
        'count': '-1'
      },
      {
        headers: {
          'Authorization': 'JWT ' + token
        }
      }
      ).then((response) => {
        const data = response.data
        this.count = data.count
      })
    },
    handleCilckAdd: function () {
      if (!this.isLogin) {
        this.$router.push({name: 'Login'})
        return
      }
      const token = cookie.getCookie('token')
      this.count++
      this.changeShopCart({'product': this.id, 'count': this.count})
      axios.post('http:/120.79.0.254/api/shopcart/', {
        'product': this.id,
        'count': '1'
      },
      {
        headers: {
          'Authorization': 'JWT ' + token
        }
      }
      ).then((response) => {
        const data = response.data
        this.count = data.count
      })
    },
    ...mapActions(['changeShopCart'])
  },
  mounted () {
    const record = this.shopcart[this.id]
    if (record !== undefined) {
      this.count = record
    } else {
      this.count = 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-top
  &:before
    border solid 0.02rem #cacaca
.footer
  z-index 99
  position absolute
  bottom 0
  height 1.2rem
  left 0
  right 0
  width 100%
  background white
  display flex
  justify-content center
  align-items center
  .fav
    position absolute
    left 0
    width 1.02rem
    height .46rem
    top 10%
    padding-top .7rem
    text-align center
    background url('../../../assets/img/fav.png') no-repeat center top .1rem
    background-size .5rem .5rem
  .operation-wrap
    display float
    flex-direction column
    width 100%
    height .8rem
    line-height .8rem
    font-size .36rem
    padding-left 1.5rem
    span
      float left
    .operation
      margin-top .1rem
      margin-left .4rem
      float left
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
.cart-btn-wrap
  z-index -1
  position absolute
  width 1.42rem
  height 1.42rem
  bottom .14rem
  right .2rem
  border solid .02rem #cacaca
  border-radius .71rem .71rem 0 0
.cart-btn
  z-index 99
  position absolute
  width 1.36rem
  height 1.36rem
  bottom .15rem
  right .24rem
  background #ffd600 url('../../../assets/img/detail_shopcart.png') no-repeat center center
  background-size 100%
  border-radius .7rem
.count-icon
  z-index 100
  position absolute
  background #ff4300
  bottom 1.0rem
  right .2rem
  height .5rem
  width .5rem
  border-radius .25rem
  color white
  line-height .5rem
  text-align center
</style>
