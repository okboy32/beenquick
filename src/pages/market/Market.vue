<template>
  <keep-alive>
    <div id="market">
      <market-header></market-header>
      <market-categoryswrap :categorys="categorys" @changeCurrentId="changeCurrentId"></market-categoryswrap>
      <market-filter></market-filter>
      <market-product-list :products="products[currentid]"></market-product-list>
      <market-footer></market-footer>
    </div>
  </keep-alive>
</template>

<script>
import MarketFooter from './components/Footer'
import MarketHeader from './components/Header'
import MarketCategoryswrap from './components/Categoryswrap'
import MarketFilter from './components/Filter'
import MarketProductList from './components/ProductsList'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Market',
  data () {
    return {
      categorys: [],
      currentid: '104751'
    }
  },
  computed: {
    ...mapState(['products'])
  },
  components: {
    MarketFooter,
    MarketHeader,
    MarketCategoryswrap,
    MarketFilter,
    MarketProductList
  },
  methods: {
    getCategorys () {
      axios.get('http://120.79.0.254/api/category/').then((reponse) => {
        this.categorys = reponse.data
      }).catch((error) => {
        console.info(error)
      })
    },
    changeCurrentId (id) {
      this.currentid = ''
      this.currentid = id
    }
  },
  mounted () {
    this.getCategorys()
  }
}
</script>

<style lang="stylus" scoped>
.market
  position: relatives
</style>
