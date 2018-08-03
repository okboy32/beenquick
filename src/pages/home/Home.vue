<template>
    <div class="home">
      <home-header></home-header>
      <home-content></home-content>
      <home-footer></home-footer>
    </div>
</template>
<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeContent from './components/Content'
import HomeFooter from './components/Footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeContent,
    HomeFooter
  }
}
</script>

<style lang="stylus" scoped>
</style>
