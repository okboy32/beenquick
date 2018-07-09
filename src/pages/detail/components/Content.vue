<template>
  <div class="contentier" ref="wrapper">
    <div>
      <div class="product-img-wrap">
        <div class="product-img">
          <img :src="detailInfo.img" />
        </div>
      </div>
      <div class="product-name-wrap">
        <div class="product-name">{{detailInfo.name}}{{detailInfo.specifics}}</div>
        <div class="product-price border-bottom" >￥{{detailInfo.partner_price}}</div>
      </div>
      <div class="product-properties">
        <div class="properties-item detail-title">商品详情</div>
        <div class="properties-item">
          <div class="leading-word">品牌</div>
          <div class="content-word">{{detailInfo.brand_name}}</div>
        </div>
        <div class="properties-item"></div>
        <div class="properties-item">
          <div class="leading-word">产品规格</div>
          <div class="content-word">{{detailInfo.specifics}}</div>
        </div>
        <div class="properties-item" v-if="show_safe_day">
          <div class="leading-word">保质期限</div>
          <div class="content-word">{{detailInfo.safe_day}}{{safe_unit}}</div>
        </div>
      </div>
      <div class="detail-pull">
        <div class="detail-pull-title">图文详情</div>
        <img src="../../../assets/img/detail_default.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'contentier',
  props: {
    detailInfo: Object
  },
  components: {
  },
  computed: {
    show_safe_day: function () {
      const show = this.detailInfo.safe_day !== '0'
      return show
    },
    safe_unit: function () {
      const unitid = this.detailInfo.safe_unit
      let unit = ''
      if (unitid === '1') {
        unit = '天'
      } else if (unitid === '2') {
        unit = '月'
      } else if (unitid === '3') {
        unit = '年'
      }
      return unit
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.contentier
  overflow hidden
  z-index -1
  position absolute
  top 1.2rem
  bottom 0
  left 0
  rigth 0
  width 100%
  .product-img-wrap
    background white
    padding .24rem
    .product-img
      padding-bottom 100%
      height 0
      img
        width 100%
  .product-name-wrap
    margin-top .2rem
    background white
    padding .2rem
    .product-name
      width 100%
      height 1rem
      font-size .5rem
      line-height 1rem
      text-align center
    .product-price
      padding-bottom 1rem
      color red
      width 100%
      height 1rem
      font-size .5rem
      line-height 1rem
      text-align center
  .product-properties
    padding .4rem
    background white
    font-size .36rem
    .properties-item
      display float
      width 100%
      height .8rem
      text-align left
      line-height .8rem
    .detail-title
      color #e0bd6a
      background url('../../../assets/img/detail_title.png') no-repeat center center
      background-size auto .05rem
      text-align center
      padding-bottom .2rem
    .leading-word
      float left
      width 25%
      color #848c99
    .content-word
      float right
      width 75%
  .detail-pull
    margin-top .2rem
    background white
    .detail-pull-title
      display flex
      -webkit-box-align center
      align-items center
      -webkit-box-pack center
      justify-content center
      height 1.2rem
      line-height 1.2rem
      text-align center
      padding-bottom .2rem
      width 100%
      font-size .4rem
      &:before
        margin-right .2rem
        display block
        content ''
        width 1rem
        border-top .05rem solid #c9c9c9
        transform scaleY(.5)
      &:after
        margin-left .2rem
        display block
        content ''
        width 1rem
        border-top .05rem solid #c9c9c9
        border-bottom .05rem solid #d6d6d6
        transform scaleY(.5)
    img
      width 100%
      padding-bottom 50%
</style>
