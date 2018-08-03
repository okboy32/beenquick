<template>
    <div class="shopcart">
      <div class="header">购物车</div>
      <div class="list" ref="wrapper">
        <div class="content">
          <table id="addr-table">
            <tr>
              <td class="key">收&nbsp;&nbsp;货&nbsp;&nbsp;人</td>
              <td>zl&nbsp;先生</td>
              <td width="17%" rowspan="3" class="more">修改 <span class="iconfont">&#xe9d8;</span></td>
            </tr>
            <tr>
              <td class="key">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</td>
              <td>18915779180</td>
            </tr>
            <tr>
              <td class="key">收货地址</td>
              <td>上海市</td>
            </tr>
          </table>
          <shop-cart-cate-group :deltime="deltime"></shop-cart-cate-group>
        </div>
      </div>
      <shopcart-footer></shopcart-footer>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import ShopcartFooter from './components/Footer'
import ShopCartCateGroup from './components/Categroup'
export default {
  name: 'Shopcart',
  components: {
    ShopcartFooter,
    ShopCartCateGroup
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  },
  computed: {
    deltime: function () {
      var curdata = new Date()
      curdata = curdata.getHours()
      if (curdata < 9 || curdata > 23) {
        return -1
      } else {
        return 0
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    height $headerHeight
    text-align center
    font-size .34rem
    font-weight bold
    width 100%
    background #F9FAFD
    line-height $headerHeight
  .list
    overflow hidden
    z-index -1
    position absolute
    top $headerHeight
    bottom 1.2rem
    left 0
    right 0
    .content
      #addr-table
        background white
        width 100%
        background-image url('../../assets/img/top-border.png'), url("../../assets/img/bottom-border.png")
        background-repeat repeat-x
        background-position left top,left bottom
        background-size auto .1rem
        margin-bottom .2rem
        tr
          width 100%
          td
            height .35rem
            font-size .34rem
          .key
            padding .2rem .3rem .2rem .4rem
            width 28%
</style>
