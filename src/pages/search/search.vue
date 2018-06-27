<template>
    <div class="search">
      <search-header></search-header>
      <search-content></search-content>
    </div>
</template>

<script>
import SearchHeader from './components/Header'
import SearchContent from './components/Content'
export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchContent
  }
}
</script>

<style lang="stylus" scoped>
</style>
