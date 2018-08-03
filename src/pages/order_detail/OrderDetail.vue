<template>
    <div class="OrdeDetail">
      <order-detail-header @flush="handleClickFlush"></order-detail-header>
      <div class="scroll-wapper" ref="wrapper">
        <div>
          <div class="block">
            <div class="item">
              <div class="key">订单号</div>
              <div class="value">{{orderDetailData.order_sn}}</div>
            </div>
            <div class="item">
              <div class="key">下单时间</div>
              <div class="value">{{orderDetailData.add_time}}</div>
            </div>
            <div class="item">
              <div class="key">收货时间</div>
              <div class="value">{{orderDetailData.delivery_time}}</div>
            </div>
            <div class="item">
              <div class="key">备注</div>
              <div class="value">{{orderDetailData.note}}</div>
            </div>
          </div>
          <div class="block">
            <div class="item">
              <div class="key">收货人</div>
              <div class="value">{{orderDetailData.signer_name}}</div>
            </div>
            <div class="item">
              <div class="key">下单时间</div>
              <div class="value">{{orderDetailData.signer_mobile}}</div>
            </div>
            <div class="item">
              <div class="key">收货时间</div>
              <div class="value">{{orderDetailData.address}}</div>
            </div>
          </div>
          <div class="block">
            <div class="item pad border-bottom">费用明细</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import OrderDetailHeader from './components/Header'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'OrdeDetail',
  props: ['id'],
  data () {
    return {
      orderDetailData: {}
    }
  },
  components: {
    OrderDetailHeader
  },
  methods: {
    handleClickFlush () {
      this.fetchOrderDetailData()
    },
    fetchOrderDetailData () {
      console.info('fetchOrderDetailData')
      axios.get('http://120.79.0.254/api/order/' + this.id).then((response) => {
        this.orderDetailData = response.data
      })
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
    this.fetchOrderDetailData()
  }
}
</script>

<style lang="stylus" scoped>
.border-bottom
  &:before
    border solid 0.02rem #cacaca
    width 94%
.scroll-wrap
  position absolute
  top 1.22rem
  bottom 0
  right 0
  left 0
  overflow hidden
.block
  width 100%
  padding 3%
  background white
  margin-bottom .02rem
  .pad
    padding-bottom .2rem
  .item
    height .6rem
    line-height .6rem
    font-size .3rem
    .key
      float left
      width 20%
      &:after
        float right
        content '：'
    .value
      padding-left .2rem
      float left
</style>
