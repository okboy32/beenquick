<template>
  <div class="header">
    <div class="content">
      <div class="address">上海市政府 商铺</div>
    </div>
    <router-link tag="div" class="header-icon" to="/search"><span class="iconfont search-icon">&#xe627;</span><div class="search">搜索</div></router-link>
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
  background $headerBgColor
  height $headerHeight
  .content
    height 1.2rem
    text-align center
    display flex
    position absolute
    top 0
    bottom 0
    left 2rem
    right 2rem
    white-space nowrap
    line-height 1.24rem
    font-size .36rem
    .address
      padding 0 .1rem
      &:after
        content '▼'
        font-size .3rem
  .header-icon
    line-height .3rem
    text-align right
    position absolute
    top 0
    right .2rem
    width 1.6rem
    height 1.2rem
    font-size .3rem
    .search-icon
      flex right
      font-size .6rem
      line-height .8rem
</style>
