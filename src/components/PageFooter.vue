<template>
  <div class="footer-wrapper">
    <ul class="links">
      <div>友情链接：</div>
      <li v-for="(link,index) in links" :key="index">
        <a :href="link.url" target="_blank">{{ link.name }}</a>
      </li>
    </ul>
    <div class="copyright">
      <span>©2010-2020 - 孤独行者 - 粤ICP备14037330号-粤公网安备 44030502001309号 版权所有 © 深圳聚力创想信息科技有限公司</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
  props: {
    links: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [
        {
          name: '流程牛',
          url: 'http://www.baidu.com'
        },
        {
          name: '百度',
          url: 'http://www.baidu.com'
        },
        {
          name: '百度',
          url: 'http://www.baidu.com'
        },
        {
          name: 'luotianchang',
          url: 'http://www.baidu.com'
        },
        {
          name: '百度',
          url: 'http://www.baidu.com'
        },
        {
          name: '百度',
          url: 'http://www.baidu.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
.footer-wrapper {
  width: 1250px;
  background-color: #1d2431;
  font-size: 12px;
  padding: 20px 0;
  color: #818394;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-wrapper a {
  color: #818394;
  text-decoration: none;
}

.footer-wrapper .links {
  margin-bottom: 20px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
}

.footer-wrapper .links li {
  padding: 0 5px;
}
</style>
