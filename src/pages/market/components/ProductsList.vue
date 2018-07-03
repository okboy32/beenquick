<template>
    <div class="productslist" ref="wrapper">
      <div class="scroll-wrapper">
        <div class="product border-topbottom" v-for="(item,index) of products" :key="index">
          <div class="product-img-warp"><img class="product-img" :src="item.img" /></div>
          <div class="product-meta-warp">
            <div class="product-name product-mate">{{item.name}}</div>
            <div class="product-promotion product-mate">&nbsp;</div>
            <div class="product-specifics product-mate">{{item.specifics}}</div>
            <div class="product-price-warp product-mate">
              <div class="product-current-price">￥{{item.partner_price}}</div>
              <div class="product-market-price">￥{{item.market_price}}</div>
            </div>
            <div class="add-btn iconfont">
              &#xe63c;
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BScorll from 'better-scroll'
export default {
  name: 'ProductsList',
  props: {
    products: Array
  },
  mounted () {
    this.scroll = new BScorll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
 &:before
  border solid 1px #acacac
 &:after
  border solid 1px #acacac
.productslist
  z-index -1
  position absolute
  top $headerHeight
  bottom 0
  right 0
  left 23%
  background white
  padding-top 1.04rem
  .scroll-wrapper
    z-index 0
    padding-top 1.04rem
    .product
      position relative
      width 96%
      height 2.34rem
      margin .12rem
      .product-img-warp
        float left
        width 2.1rem
        height 2.1rem
        .product-img
          width 100%
          overflow hidden
      .product-meta-warp
        position absolute
        margin-left .1rem
        height 2.1rem
        top 0.12rem
        right 0.12rem
        left 2.24rem
        .product-specifics
          color #777
        .product-price-warp
          .product-current-price
            float left
            color red
          .product-market-price
            float left
            color #777
            text-decoration line-through
        .add-btn
          position absolute
          width .8rem
          height .8rem
          bottom .4rem
          right 0
          font-size .8rem
          line-height 1.6rem
          color red
          border #cacaca
.product-mate
  height 25%
  width 100%
  line-height .52rem
  font-size .32rem
</style>
