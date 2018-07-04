<template>
    <div class="search">
      <search-header
        @search="clicksearch"
      >
      </search-header>
      <search-content :searchHisory="searchHisory"></search-content>
      <search-lisr v-if="show" :search_list="search_list"></search-lisr>
    </div>
</template>

<script>
import SearchHeader from './components/Header'
import SearchContent from './components/Content'
import SearchLisr from './components/SearchList'
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Search',
  data () {
    return {
      show: false,
      search_list: []
    }
  },
  components: {
    SearchHeader,
    SearchContent,
    SearchLisr
  },
  computed: {
    ...mapState(['searchHisory'])
  },
  methods: {
    clicksearch: function (keywords) {
      axios.get('http://10.11.51.50:8000/products/?search=' + keywords).then((response) => {
        console.info(response)
        this.search_list = response.data
        this.show = true
      }).catch((error) => {
        console.info(error)
      })
      this.changeSearchHistory(keywords)
    },
    ...mapActions(['changeSearchHistory'])
  }
}
</script>

<style lang="stylus" scoped>
</style>
