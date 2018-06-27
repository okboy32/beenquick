<template>
    <div class="content">
      <div class="hotSearch">
        <div class="type">热门搜索</div>
        <div class="hot-list">
          <div class="item">矿泉水</div>
          <div class="item">矿泉水</div>
          <div class="item">矿泉水</div>
          <div class="item">矿泉水</div>
          <div class="item">矿泉水</div>
        </div>
        <div class="type">历史记录</div>
        <div class="history-list">
          <div class="item">矿泉水</div>
        </div>
        <button class="clearBtn" >清除历史记录</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.content
  position absolute
  top $headerHeight
  bottom 0
  left 0
  right 0
  background #efefef
  .hotSearch
    width 100%
    padding .2rem 0 .75rem .32rem
    .type
      margin-top .8rem
      width 100%
      float left
      font-size .32rem
      color rgb(136,136,136)
    .hot-list
      box-sizing content-box
      display float
      padding .2rem 0
      float left
      width 100%
      .item
        float left
        background white
        text-align center
        padding 0 .3rem
        height .92rem
        border-radius .6rem
        line-height .92rem
        font-size .35rem
        margin-right .3rem
        margin-top .2rem
    .history-list
      box-sizing content-box
      display float
      padding .2rem 0
      float left
      width 100%
      .item
        float left
        background white
        text-align center
        padding 0 .3rem
        height .92rem
        border-radius .6rem
        line-height .92rem
        font-size .35rem
        margin-right .3rem
        margin-top .2rem
  .clearBtn
    margin-left 14%
    margin-top 1rem
    width 65%
    height 1rem
    border solid 0.02rem #cacaca
    border-radius .2rem
    background #efefef
    color #aaa
</style>
