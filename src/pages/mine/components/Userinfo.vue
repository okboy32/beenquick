<template>
    <div class="mine_user_info">
      <div class="user">
        <div class="user-name">{{this.user.username}}</div>
        <div class="user-level">V{{this.user.level}}</div>
        <div class="tap-action"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MineUserinfo',
  props: ['user']
}
</script>

<style lang="stylus" scoped>
.mine_user_info
  height 2.6rem
  background #ffd600
  width 100%
  .user
    padding-top .12rem
    background url('../img/user.png') .38rem bottom no-repeat
    background-size auto 1.54rem
    width 100%
    height 1.95rem
    .user-name
      margin-top .58rem
      float right
      width 72%
      color #fff
      font-weight bold
      font-size .38rem
      margin-bottom .2rem
      height .4rem
    .user-level
      float right
      width 60%
      height 0.72rem
      background url('../img/user-level.png') no-repeat
      background-size 2rem auto
      color #e64f1a
      font-weight bold
      font-size .32rem
      line-height .72rem
      padding-left 1rem
    .tap-action
      background url('../img/arrow-right.png') no-repeat
      background-size .3rem
      position absolute
      right .5rem
      top 1rem
      bottom 1rem
      width 0.3rem
</style>
