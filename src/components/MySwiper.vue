<template>
  <swiper ref="mySwiper" v-bind:options="swiperOptions">
    <swiper-slide class="swiper-slide" v-for="(item, index) in bannerList" v-bind:key="index">
      <img :src="item.image" alt=""/>
      <i class="mask"></i>
      <h3 class="title">{{ item.title }}</h3>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: 'MySwiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    bannerList: []
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 允许分页点击跳转
        }
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
.swiper-slide:hover img {
  transform: scale(1.1);
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  transition: transform .5s;
  transform-origin: bottom center;
}

.swiper-slide .title {
  position: absolute;
  bottom: 15px;
  left: 0;
  font-weight: 700;
  color: #fff;
  width: 100%;
  font-size: 18px;
  line-height: 1.6;
  padding: 0 40px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
}

.swiper-slide .mask {
  transition: 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, .05) 5%, rgba(0, 0, 0, .65));
}

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  width: 100px;
  right: 0;
  left: auto;
  bottom: 24px;
}
</style>
