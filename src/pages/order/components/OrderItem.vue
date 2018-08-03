<template>
    <div class="OrderItem" @click="handleClickOrderItem(item.id)">
      <div class="order_sn border-bottom">No.{{item.order_sn}}<div class="state">{{item.status}}</div></div>
      <div class="products border-bottom">
        <img class="product-img" v-for="products of item.products" :key="products.id" :src="products.products.img"/>
      </div>
      <div class="discription">共{{item.products.length}}件商品 ￥{{item.order_amount + item.freight}}元</div>
    </div>
</template>

<script>
export default {
  name: 'OrderItem',
  props: ['item'],
  methods: {
    handleClickOrderItem (id) {
      console.info(id)
      this.$router.push({name: 'OrderDetail', params: {id: id}})
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-bottom
  &:before
    border solid 0.02rem #aaa
.OrderItem
  margin-bottom .2rem
  width 100%
  height 3.4rem
  background white
  padding 0 3%
  .order_sn
    width 94%
    background white
    height .9rem
    line-height .9rem
    font-size .3rem
    .state
      float right
      color #f80
  .products
    width 94%
    height 1.6rem
    background white
    line-height 1.6rem
    .product-img
      padding-top .2rem
      width 1.2rem
      height 1.2rem
      float left
  .discription
    height .9rem
    width 94%
    line-height .9rem
    font-size .3rem
</style>
