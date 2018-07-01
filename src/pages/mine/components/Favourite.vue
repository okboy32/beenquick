<template>
    <div class="favourite">
      <div class="product-fav">
        <div class="inner-item">商品收藏</div>
      </div>
      <div class="split"></div>
      <div class="shop-fav">
        <div class="inner-item">商品收藏</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'favourite'
}
</script>

<style lang="stylus" scoped>
.favourite
  background #f3c800
  width 100%
  height .9rem
  .product-fav
    display -webkit-box
    -webkit-box-align center
    -webkit-box-pack center
    float left
    width 49%
    height .9rem
    .inner-item
      background url('../img/product-fav.png') no-repeat
      background-size .46rem
      color #ffffff
      font-size .32rem
      height .5rem
      padding-left .7rem
      line-height .5rem
  .split
    margin .2rem 0
    float left
    width .02rem
    height 60%
    background #ffffff
    align-self center
  .shop-fav
    display -webkit-box
    -webkit-box-align center
    -webkit-box-pack center
    float left
    width 49%
    height .9rem
    .inner-item
      background url('../img/shop-fav.png') no-repeat
      background-size .46rem
      color #ffffff
      font-size .32rem
      height .5rem
      padding-left .7rem
      line-height .5rem
</style>
