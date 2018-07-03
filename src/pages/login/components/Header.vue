<template>
    <div class="header">
      <router-link tag="span" class="header-left iconfont" to="/">&#xe637;</router-link>
      <div class="header-content">
        验证手机
      </div>
      <div class="header-right"></div>
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
  background #f9fafd
  width 100%
  height $headerHeight
  .header-left
    float left
    margin-left .2rem
    font-size .5rem
    line-height $headerHeight
  .header-content
    flex 1
    text-align center
    line-height $headerHeight
    font-size $headerFontSize
    font-weight bold
  .header-right
    width 25px
    height $headerHeight
</style>
