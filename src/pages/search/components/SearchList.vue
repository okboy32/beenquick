<template>
    <div class="searchlist" ref="wrapper">
      <div class="coontent">
        <div class="item" v-for="(item,index) of search_list" :key="index">
          <div class="img-wrap">
            <img class="item-img" :src="item.img"/>
          </div>
          <div class="item-name meta">{{item.name}}</div>
          <div class="meta"></div>
          <div class="item-specifice meta">{{item.specifics}}</div>
          <div class="item_price meta">￥{{item.partner_price}}</div>
          <div class="add-btn iconfont">
            &#xe63c;
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BScorll from 'better-scroll'
export default {
  name: 'SearchList',
  props: {
    search_list: Array
  },
  mounted () {
    this.scroll = new BScorll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.meta
  margin-left 4%
  width 96%
  height .5rem
  line-height .5rem
  font-size .32rem
.searchlist
  position absolute
  top $headerHeight
  bottom 0
  left 0
  right 0
  background #eee
  z-index -1
  .coontent
    overflow hidden
    .item
      position relative
      float left
      margin-left 3.3%
      margin-top 3.3%
      width 45%
      height 5.5rem
      background white
      .img-wrap
        margin 2%
        width 96%
        height 60%
        overflow hidden
        .item-img
          width 100%
    .item-specifice
      color gray
      margin-left .2rem
    .item_price
      color red
    .add-btn
      position absolute
      bottom 0
      right 0
      width 1rem
      height 1.4rem
      font-size .8rem
      line-height 1.6rem
      color red
</style>
