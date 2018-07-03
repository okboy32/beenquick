<template>
    <div class="filter">
      <div class="filter-title">全部分类<span class="iconfont">&#xe61a;</span></div>
      <span class="split"></span>
      <div class="filter-title">综合排序<span class="iconfont">&#xe61a;</span></div>
    </div>
</template>

<script>
export default {
  name: 'filte'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.filter
  z-index 99
  position absolute
  opacity .6
  background white
  top $headerHeight
  right 0
  width 77%
  .filter-title
    float left
    width 49.8%
    height 1.04rem
    line-height 1.04rem
    font-size .32rem
    text-align center
    color #000
  .split
    float left
    margin .2rem 0
    background #acacac
    width 1px
    height .64rem
</style>
