<template>
    <div class="homeswiper">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item of swiper_list" :key="item.trackid" >
            <img class="img" :src="item.img"/>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiper_list: [{
        'trackid': '21870',
        'img': 'http://img01.bqstatic.com//upload/activity/2017031716035274.jpg@90Q.jpg',
        'name': '酸奶女王'
      }, {
        'trackid': '21869',
        'img': 'http://img01.bqstatic.com//upload/activity/2017031710450787.jpg@90Q.jpg',
        'name': '优选圣女果'
      }, {
        'trackid': '21862',
        'img': 'http://img01.bqstatic.com//upload/activity/2017030714522982.jpg@90Q.jpg',
        'name': '伊利酸奶大放价'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .homeswiper
    width 100%
    padding-bottom 550%
    height 0
    background #ccc
    .img
      width 100%
</style>
