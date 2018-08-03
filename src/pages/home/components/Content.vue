<template>
  <div class="contentier" ref="wrapper">
    <div>
      <div>
          <home-swiper></home-swiper>
          <home-categorys></home-categorys>
          <home-categorys></home-categorys>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSwiper from './Swiper'
import BScroll from 'better-scroll'
import HomeCategorys from './Categorys'
export default {
  name: 'contentier',
  components: {
    HomeSwiper,
    HomeCategorys
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.contentier
  overflow hidden
  z-index -1
  position absolute
  top 1.2rem
  bottom 1.2rem
  left 0
  rigth 0
  width 100%
</style>
