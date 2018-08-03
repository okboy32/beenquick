<template>
    <div class="Order">
      <order-header @flush="handleClickFlush"></order-header>
      <order-tab @changeIndex="handleClickTab" :index="status"></order-tab>
      <div class="scroll-wrap" ref="wrapper" v-show="show_data.length">
        <div>
          <order-item v-for="(item, index) of show_data" :key="index" :item="item"></order-item>
          <div class="img-wrap">
          </div>
        </div>
      </div>
      <div class="no-order-wrap" v-if="!show_data.length">
          没有找到你的订单哦！
      </div>
    </div>
</template>

<script>
import OrderHeader from './components/Header'
import OrderTab from './components/Tab'
import OrderItem from './components/OrderItem'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'Order',
  props: ['status'],
  data () {
    return {
      order_data: [],
      order_wait_pay_list: [],
      show_data: []
    }
  },
  components: {
    OrderHeader,
    OrderTab,
    OrderItem
  },
  methods: {
    handleClickTab (index) {
      this.show_data = this.order_data[index]
    },
    handleClickFlush () {
      this.show_data = []
      this.order_data = []
      this.fetchOrderData()
    },
    fetchOrderData () {
      axios.get('http://120.79.0.254/api/order/').then((response) => {
        const data = response.data
        this.order_data[0] = data
        var waitPayTemp = []
        var waitReceiveTemp = []
        var waitCommentTemp = []
        var afterSaleTemp = []
        for (var i = 0; i < data.length; i++) {
          if (data[i].status === '待付款') {
            waitPayTemp.push(data[i])
          }
          if (data[i].status === '待收货') {
            waitReceiveTemp.push(data[i])
          }
          if (data[i].status === '待评价') {
            waitCommentTemp.push(data[i])
          }
          if (data[i].status === '售后中') {
            afterSaleTemp.push(data[i])
          }
        }
        this.order_data[1] = waitPayTemp
        this.order_data[2] = waitReceiveTemp
        this.order_data[3] = waitCommentTemp
        this.order_data[4] = afterSaleTemp
        if (this.status === undefined) {
          this.status = 0
        }
        this.show_data = this.order_data[this.status]
      })
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {click: true})
    this.fetchOrderData()
  }
}
</script>

<style lang="stylus" scoped>
.scroll-wrap
  position absolute
  top 2.22rem
  bottom 0
  right 0
  left 0
  overflow hidden
  .img-wrap
    width 100%
    height 1.4rem
    background url("../../assets/img/bg_bee.png") no-repeat center
    background-size auto 1.2rem
.no-order-wrap
  width 100%
  position absolute
  top 30%
  background url("../../assets/img/no_order.png") no-repeat center
  background-size auto 2.1rem
  padding-top 2.7rem
  height 0
  text-align center
  font-size .35rem
  color #999
</style>
