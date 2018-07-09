<template>
    <div class="header">
      <router-link to="/market" class="back-icon iconfont">&#xe637;</router-link>
      <div class="title">{{title}}{{specifics}}</div>
      <div class="header-right">&nbsp;</div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    specifics: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display float
    height $headerHeight
    background #F9FAFD
    width 100%
    font-size .34rem
    line-height $headerHeight
    font-weight bold
    text-align center
    .back-icon
      float left
      width 10%
      line-height $headerHeight
      font-size .5rem
      padding 0 .3rem
    .title
      float left
      flex 1
    .header-right
      width 10%
      float right

</style>
