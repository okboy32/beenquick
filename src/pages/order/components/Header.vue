<template>
  <div class="header border-bottom">
    <router-link tag="div" class="leftbtn iconfont" to="/mine">&#xe637;</router-link>
    <div class="title">我的订单</div>
    <div class="rightbtn iconfont" @click="clickFlush">&#xe6ea;</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    clickFlush () {
      this.$emit('flush')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-bottom
  &:before
    border solid 0.02rem #cacaca
.header
  display flex
  height $headerHeight
  text-align center
  font-size .34rem
  font-weight bold
  width 100%
  background #F9FAFD
  line-height $headerHeight
  .leftbtn
    color #999
    float left
    font-size .5rem
    padding-left .3rem
  .title
    flex 1
  .rightbtn
    color #999
    float right
    font-size .5rem
    padding-right .3rem
</style>
