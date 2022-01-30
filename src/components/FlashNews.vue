<template>
  <swiper ref="mySwiper2" v-bind:options="swiperOptions">
    <swiper-slide class="swiper-slide" v-for="(item, index) in news" v-bind:key="index">
      <h3 class="title">{{ item.title }}</h3>
      <div class="datetime">{{ item.createTime }}</div>
    </swiper-slide>
  </swiper>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: 'FlashNews',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    news: []
  },
  data() {
    return {
      swiperOptions: {
        // slidesPerView: 2,
        // direction: 'vertical',
        // freeMode: true,
        // speed: 3000,
        // loop: true,
        // autoplay: {
        //   delay: 0,
        //   disableOnInteraction: false // 就算触摸了也继续滚动
        // }
      }
    }
  }
}
</script>

<style scoped>
  .swiper-container{
    width: 100%;
    height: 100%;
  }
</style>
