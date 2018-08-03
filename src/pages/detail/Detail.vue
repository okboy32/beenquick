<template>
    <div class="Detail">
      <detail-header :title="productName" :specifics="specifics"></detail-header>
      <detail-content :detailInfo="detailInfo"></detail-content>
      <detail-footer :id="id" :isLogin="isLogin"></detail-footer>
    </div>
</template>

<script>
import axios from 'axios'
import DetailHeader from './components/Header'
import DetailContent from './components/Content'
import DetailFooter from './components/Footer'
import store from '../../store'
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
  computed: {
    isLogin: function () {
      return store.state.userInfo.token
    }
  },
  mounted () {
    axios.get('http://120.79.0.254/api/products/' + this.id).then((response) => {
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
