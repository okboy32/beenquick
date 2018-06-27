<template>
    <div class="header">
      <router-link to="/" class="back-icon iconfont">&#xe637;</router-link>
      <div class="search-input">
        <span class="iconfont search-icon">&#xe627;</span>
        <input class="input" placeholder="请输入商品名称">
      </div>
      <div class="search-btn" >搜索</div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display flex
  height $headerHeight
  background #f9fafd
  .back-icon
    float left
    line-height $headerHeight
    font-size .5rem
    padding 0 .3rem
  .search-input
    position relative
    flex 1
    margin .25rem
    border-radius .1rem
    border solid 0.02rem #aaa
    padding 0rem 0.2rem
    .search-icon
      position absolute
      top .18rem
      left .1rem
    .input
      position absolute
      left .5rem
      top .1rem
      background #f9fafd
  .search-btn
    float right
    margin-right .1rem
    text-align center
    line-height $headerHeight
    width $headerHeight
    font-size .36rem
</style>
