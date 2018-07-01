<template>
    <div class="content" ref="wrapper">
      <div class="contentier">
        <mine-order :order_type_list="order_type_list"></mine-order>
        <mine-table :item_list="function_list"></mine-table>
        <button class="logoutBtn">推出当前帐号</button>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import MineOrder from './Order'
import MineTable from './Table'
export default {
  name: 'Content',
  components: {
    MineOrder,
    MineTable
  },
  data () {
    return {
      function_list: [{
        id: '001',
        name: '积分商城',
        image: '../img/point-shop.png',
        styles: {
          background: 'url(' + require('../img/point-shop.png') + ') center 40% no-repeat',
          backgroundSize: 'auto 30%'
        }
      }, {
        id: '002',
        name: '优惠券',
        image: '',
        styles: {
          background: 'url(' + require('../img/discount.png') + ') center 40% no-repeat',
          backgroundSize: 'auto 30%'
        }
      }, {
        id: '003',
        name: '收货地址',
        image: '',
        styles: {
          background: 'url(' + require('../img/receive-address.png') + ') center 40% no-repeat',
          backgroundSize: 'auto 30%'
        }
      }, {
        id: '004',
        name: '客服/反馈',
        image: '',
        styles: {
          background: 'url(' + require('../img/connect-us.png') + ') center 40% no-repeat',
          backgroundSize: 'auto 30%'
        }
      }, {
        id: '005',
        name: '关于我们',
        image: '',
        styles: {
          background: 'url(' + require('../img/about-us.png') + ') center 40% no-repeat',
          backgroundSize: 'auto 30%'
        }
      }],
      order_type_list: [{
        name: '待付款',
        image: '../img/wait-pay.png',
        styles: {
          background: 'url(' + require('../img/wait-pay.png') + ') center 40% no-repeat',
          backgroundSize: 'auto 25%'
        }
      }, {
        name: '待收货',
        image: '../img/wait-receive.png',
        styles: {
          background: 'url(' + require('../img/wait-receive.png') + ') center 40% no-repeat',
          backgroundSize: 'auto 25%'
        }
      }, {
        name: '待评价',
        image: '../img/wait-commit.png',
        styles: {
          background: 'url(' + require('../img/wait-commit.png') + ') center 40% no-repeat',
          backgroundSize: 'auto 25%'
        }
      }, {
        name: '售后',
        image: '../img/after-sale.png',
        styles: {
          background: 'url(' + require('../img/after-sale.png') + ') center 40% no-repeat',
          backgroundSize: 'auto 25%'
        }
      }]
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.content
  overflow hidden
  position absolute
  right 0
  left 0
  top 3.5rem
  bottom 1.2rem
  .contentier
    width 100%
    padding .3rem 0
  button
    margin-top .8rem
    margin-bottom .24rem
    height 1.16rem
    width 100%
    background #fff
    line-height 1.16rem
    font-size .38rem
    color rgb(51,51,51)
</style>
