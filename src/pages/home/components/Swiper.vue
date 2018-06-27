<template>
    <div class="homeswiper">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item of swiper_list" :key="item.trackid" >
            <img class="img" :src="item.img"/>
          </swiper-slide>
          <!-- Optional controls -->
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
        loop: true,
        autoplay: 3000
      },
      swiper_list: [{
        'trackid': '21870',
        'img': 'http://img01.bqstatic.com//upload/activity/2017112416473259.jpg@90Q.jpg',
        'name': '缤纷酒饮'
      }, {
        'trackid': '21869',
        'img': 'http://img01.bqstatic.com//upload/activity/2018051618053240.png@90Q.png',
        'name': '馋嘴零食'
      }, {
        'trackid': '21862',
        'img': 'http://img01.bqstatic.com//upload/activity/2018051617560148.png@90Q.png',
        'name': '美味速食'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .homeswiper
    overflow hidden
    width 100%
    padding-bottom 43%
    height 0
    background #ccc
    .img
      z-index -1
      width 100%
</style>
