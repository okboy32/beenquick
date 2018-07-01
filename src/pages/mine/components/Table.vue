<template>
    <table class="table">
      <tr v-for="(page, index) of pages" :key="index" class="border-bottom">
        <td v-for="item of page" :key="item.id" :style="item.styles">{{item.name}}</td>
      </tr>
    </table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    item_list: Array
  },
  computed: {
    pages () {
      const pages = []
      this.item_list.forEach((item, index) => {
        const page = Math.floor(index / 4)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
table
  background white
  width 100%
  tr
    display table-row
    vertical-align inherit
    border-color inherit
    border-bottom solid 1px #eee
    td
      padding-top 1.55rem
      padding-bottom .5rem
      text-align center
</style>
