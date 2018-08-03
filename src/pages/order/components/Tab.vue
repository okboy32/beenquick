<template>
    <div class="Tab">
      <div
        class="tabItem"
        v-for="(item, index) of item_list"
        :key="index" @click="handleClickTabItem(index)"
        :class="{selected:selected_index === index}"
      >
        {{item}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'Tab',
  props: ['index'],
  data () {
    return {
      selected_index: this.index,
      item_list: ['全部订单', '待付款', '待收货', '待评价', '退款/售后']
    }
  },
  methods: {
    handleClickTabItem (index) {
      this.selected_index = index
      this.$emit('changeIndex', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.Tab
  background white
  height 1rem
  margin-bottom .2rem
  .tabItem
    float left
    width 20%
    line-height 1rem
    text-align center
    font-size .3rem
.selected
  position relative
  color #ff3800
  &:before
    content ''
    position absolute
    display block
    width 60%
    height 0
    bottom 0
    left 20%
    border-bottom solid .05rem #ff3800
</style>
