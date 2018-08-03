<template>
    <div class="Mine">
      <mine-userinfo :user="user"></mine-userinfo>
      <mine-favourite></mine-favourite>
      <mine-content></mine-content>
      <mine-footer></mine-footer>
    </div>
</template>

<script>
import MineUserinfo from './components/Userinfo'
import MineFooter from './components/Footer'
import MineFavourite from './components/Favourite'
import MineContent from './components/Content'
import { mapState } from 'vuex'
export default {
  name: 'Mine',
  data () {
    return {
      user: Object
    }
  },
  components: {
    MineFooter,
    MineUserinfo,
    MineFavourite,
    MineContent
  },
  computed: {
    ...mapState(['userInfo'])
  },
  mounted () {
    this.user = this.userInfo
    console.info(this.user)
  }
}
</script>

<style lang="stylus" scoped>
.Mine
  background #efefef
</style>
