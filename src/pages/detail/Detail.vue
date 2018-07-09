<template>
    <div class="Detail">
      <detail-header :title="productName" :specifics="specifics"></detail-header>
      <detail-content :detailInfo="detailInfo"></detail-content>
      <detail-footer :id="id"></detail-footer>
    </div>
</template>

<script>
import axios from 'axios'
import DetailHeader from './components/Header'
import DetailContent from './components/Content'
import DetailFooter from './components/Footer'
export default {
  name: 'Detail',
  props: ['id'],
  data () {
    return {
      productName: '',
      detailInfo: {},
      specifics: ''
    }
  },
  components: {
    DetailHeader,
    DetailContent,
    DetailFooter
  },
  mounted () {
    axios.get('http://localhost:8000/products/' + this.id).then((response) => {
      const data = response.data
      if (data) {
        this.productName = data.name
        this.specifics = data.specifics
        this.detailInfo = data
      }
    }).catch((error) => {
      console.info(error)
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>
