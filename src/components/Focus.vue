<template>
  <div class="focus-container">
    <img :src="thumbs" alt="">
    <i class="mask"></i>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Focus',
  props: {
    title: String,
    thumbs: String
  }
}
</script>

<style scoped>
.focus-container:hover img {
  transform: scale(1.1);
}

.focus-container, .focus-container img {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: transform .5s;
}

.focus-container .title {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px;
  color: #ffffff;;
}

</style>
