<template>
    <div class="categorys border-bottom">
      <div class="title">
        <span class="redblock"></span>
        <p style="color:#eb1d2e">休闲零食</p>
        <div class="btn-more">更多<span class="iconfont icon-arrow-r">&#xe9d8;</span></div>
      </div>
    <img class="categorys-img" src="http://img01.bqstatic.com//upload/activity/2017112711015136.png@90Q.png"/>
    <div class="categoty-products">
      <div class="product border-right">
        <img class="product-img" src="http://img01.bqstatic.com/upload/goods/000/001/0002/0000010002.jpg@200w_200h_90Q" />
        <div class="product-name">
          口水娃香辣味口水鱼
        </div>
        <div class="production-promation"></div>
        <div class="product-operations">
          <div class="product-price">
            <span class="specifications">15g</span>
            <span class="price">￥ 1.5</span>
          </div>
          <div class="add-btn iconfont">
            &#xe63c;
          </div>
        </div>
      </div>
      <div class="product border-right">
        <img class="product-img" src="http://img01.bqstatic.com/upload/goods/000/001/0002/0000010002.jpg@200w_200h_90Q" />
        <div class="product-name">
          口水娃香辣味口水鱼
        </div>
        <div class="production-promation"></div>
        <div class="product-operations">
          <div class="product-price">
            <span class="specifications">15g</span>
            <span class="price">￥ 1.5</span>
          </div>
          <div class="add-btn iconfont">
            &#xe63c;
          </div>
        </div>
      </div>
      <div class="product border-right">
        <img class="product-img" src="http://img01.bqstatic.com/upload/goods/000/001/0002/0000010002.jpg@200w_200h_90Q" />
        <div class="product-name">
          口水娃香辣味口水鱼
        </div>
        <div class="production-promation"></div>
        <div class="product-operations">
          <div class="product-price">
            <span class="specifications">15g</span>
            <span class="price">￥ 1.5</span>
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
export default {
  name: 'Categorys',
  props: {
    actCategorys: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.border-right
  &:before
    border-color #aaaaaa
.border-bottom
  &:before
    border solid .1rem #cacaca
.categorys
  width 100%
  height 0
  padding-bottom 105%
  background white
  .title
    width 100%
    font-weight bold
    display flex
    line-height .8rem
    font-size 0.36rem
    .redblock
      margin .2rem .1rem
      width 2%
      background #eb1d2e
      float left
    .btn-more
      position absolute
      right 0
      padding 0 .2rem
      color #99999
      font-size .32rem
      font-weight normal
      .icon-arrow-r
        padding-left .2rem
        font-size .36rem
  .categorys-img
    width 100%
  .product
    float left
    width 33%
    height 0
    padding-bottom 60%
    padding-top .2rem
    .product-img
      width 100%
    .product-name
      padding .2rem 0.1rem
      font-size .32rem
      ellips()
    .production-promation
      padding-bottom .4rem
    .product-operations
      position relative
      width 100%
      font-size .32rem
      .add-btn
        position absolute
        top 0
        bottom 0
        right .3rem
        font-size .8rem
        line-height 1.6rem
        color red
      .product-price
        width 50%
        .specifications
          width 50%
          float left
          margin .25rem 0
        .price
          float left
          color red
  .category-footer
    background #cacaca
    width 100%
    height 0.5rem
</style>
