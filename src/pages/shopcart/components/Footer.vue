<template>
    <div class="footer">
        <router-link tag="div" :style="homeBackground" class="nav-item" to="/">
          <span class="name">首页</span>
        </router-link>
        <router-link tag="div"  :style="marketBackground" class="nav-item"  to="/market">
          <span class="name">闪卖超市</span>
        </router-link>
        <router-link tag="div"  :style="shopcartBackground" class="nav-item" to="/shopcart">
          <span class="name">购物车</span>
          <span class="count" v-if="totalCount">{{this.totalCount}}</span>
        </router-link>
        <router-link tag="div"  :style="mineBackground" class="nav-item" to="mine">
          <span class="name">我的</span>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Footer',
  data () {
    return {
      homeBackground: {
        backgroundImage: 'url(' + require('../../../assets/img/home.png') + ')'
      },
      marketBackground: {
        backgroundImage: 'url(' + require('../../../assets/img/market.png') + ')'
      },
      shopcartBackground: {
        backgroundImage: 'url(' + require('../../../assets/img/shopcart_selected.png') + ')'
      },
      mineBackground: {
        backgroundImage: 'url(' + require('../../../assets/img/mine.png') + ')'
      }
    }
  },
  computed: {
    ...mapState(['totalCount'])
  }
}
</script>

<style lang="stylus" scoped>
.footer
  display flex
  position absolute
  bottom 0
  left 0
  right 0
  height 1.2rem
  background #f6f6f6
  width 100%
  .nav-item
    position relative
    background no-repeat center top
    background-size .56rem .56rem
    float left
    height .5rem
    margin auto
    margin-top .2rem
    line-height 1.5rem
    color #555
    .count
      position absolute
      top -.1rem
      right -.3rem
      width .4rem
      height .4rem
      border-radius .2rem
      line-height .4rem
      text-align center
      color white
      background #f40

</style>
