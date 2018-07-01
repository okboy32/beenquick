<template>
    <div class="Mine">
      <mine-userinfo></mine-userinfo>
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
export default {
  name: 'Mine',
  components: {
    MineFooter,
    MineUserinfo,
    MineFavourite,
    MineContent
  }
}
</script>

<style lang="stylus" scoped>
.Mine
  background #efefef
</style>
