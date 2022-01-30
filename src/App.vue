<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/assets/css/reset.css'

export default {
  name: 'App'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, STHeiti, WenQuanYi Micro Hei, Helvetica, Arial, sans-serif;
}
a {
  cursor: pointer;
}
a:hover {
  color: #4370f5;
}

.mask {
  transition: 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, .05) 5%, rgba(0, 0, 0, .65));
}
</style>
