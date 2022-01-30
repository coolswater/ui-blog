<template>
  <ul class="news-wrapper">
    <li v-for="(item,index) in news" :key="index">
      <img :src="item.thumb" alt="">
      <h3>{{ item.title }}</h3>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NewsBar',
  props: {
    news: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [
        {
          'title': '2022，陌生人社交的钱还好赚吗？',
          'thumb': 'https://image.yunyingpai.com/wp/2022/01/7iqtzoqjiA9Es240iaSe.jpg!/both/472x286'
        },
        {
          'title': '2022，陌生人社交的钱还好赚吗？',
          'thumb': 'https://image.yunyingpai.com/wp/2022/01/7iqtzoqjiA9Es240iaSe.jpg!/both/472x286'
        },
        {
          'title': '2022，陌生人社交的钱还好赚吗？',
          'thumb': 'https://image.yunyingpai.com/wp/2022/01/7iqtzoqjiA9Es240iaSe.jpg!/both/472x286'
        },
        {
          'title': '2022，陌生人社交的钱还好赚吗？',
          'thumb': 'https://image.yunyingpai.com/wp/2022/01/7iqtzoqjiA9Es240iaSe.jpg!/both/472x286'
        },
        {
          'title': '2022，陌生人社交的钱还好赚吗？',
          'thumb': 'https://image.yunyingpai.com/wp/2022/01/7iqtzoqjiA9Es240iaSe.jpg!/both/472x286'
        }
      ]
    }
  }
}
</script>

<style scoped>
.news-wrapper {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 15px;
  font-size: 14px;
}

.news-wrapper li {
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  padding: 15px 0;
  border-bottom: 1px dashed #eeeeee;
  line-height: 1.3;
}

.news-wrapper li img {
  width: 100px;
  height: 60px;
  border-radius: 3px;
  margin-right: 8px;
}

.news-wrapper li:first-child {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 0;
}

.news-wrapper li:first-child h3{
  margin-top: 10px;
}

.news-wrapper li:first-child img {
  width: 100%;
  height: 100%;
}
.news-wrapper li:last-child{
  padding-bottom: 0;
  border: 0;
}
</style>
