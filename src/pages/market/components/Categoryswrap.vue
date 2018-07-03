<template>
    <div class="categoryswrap">
      <div class="categorys border-bottom"
           :class="{select:current==index}"
           v-for="(item, index) of categorys"
           :key="item.id"
           @click="handleClick(index)"
      >
        {{item.name}}
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'Categoryswrap',
  props: {
    categorys: Array
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    handleClick (index) {
      this.current = index
      this.getProducts(this.categorys[index].id)
    },
    getProducts (id) {
      axios.get('http://10.11.51.50:8000/products/?pid=' + id).then((response) => {
        const products = response.data
        this.changeCurrentId(id)
        this.changeProducts(products)
        this.$emit('changeCurrentId', id)
      }).catch((error) => {
        console.info(error)
      })
    },
    ...mapActions(['changeProducts', 'changeCurrentId'])
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    categorys: function (newCategorys, oldCategorys) {
      this.getProducts(newCategorys[0].id)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-bottom
  &:before
    border solid 2px #ddd
.categoryswrap
  background #f6f6f6
  position absolute
  top $headerHeight
  left 0
  bottom 1.2rem
  width 23%
  .categorys
    width 100%
    height 1.04rem
    font-size .32rem
    line-height 1.04rem
    text-align center
.select
  &:before
    content ''
    position absolute
    width 0
    height .8rem
    left 0
    top 50%
    -webkit-transform translateY(-50%)
    border-left .1rem solid #ffd600
</style>
