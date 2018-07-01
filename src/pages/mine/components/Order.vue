<template>
    <div class="order">
      <div class="myorder border-bottom">我的订单
        <span class="myoeder-right">查看全部订单</span>
      </div>
      <div class="order-type">
        <div class="order-type-item"
             v-for="item of order_type_list"
             :style="item.styles"
             :key ='item.name'
        >{{item.name}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Order',
  props: {
    order_type_list: Array
  }

}
</script>

<style lang="stylus" scoped>
  .border-bottom
    &:before
      border solid .02rem #aaa
.order
  width 100%
  height 3.12rem
  background white
  margin-bottom .3rem
  .myorder
    padding .36rem .61rem .36rem .38rem
    font-size .34rem
    line-height .54rem
    background url('../img/arrow-right-gray.png')  no-repeat
    background-position right center
    background-size auto .2rem
    .myoeder-right
      float right
      height .8rem
      color #999
      background-size .3rem
  .order-type
    width 100%
    height 1.8rem
    .order-type-item
      height .76rem
      line-height .76rem
      float left
      text-align center
      font-size .31rem
      width 25%
      padding-top 1.06rem

</style>
