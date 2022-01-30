<template>
  <div class="wrapper">
    <div class="title">{{ title }}</div>
    <div class="sub-bar" v-show="subBar">more</div>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    subBar: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '最新文章'
    }
  }
}
</script>

<style scoped>
.wrapper {
  background: #ffffff;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #eee;
  height: 50px;
  /*width: 100%;*/
}
.wrapper .title{
  font-weight: 700;
  border-bottom: 3px solid #4370f5;
  padding:11px 10px;
  transform: translate3d(0,3px,0);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  font-size: 18px;
  line-height: 1;
}
.wrapper .sub-bar{
  margin-left: auto;
  font-size: 14px;
  color: rgba(0,0,0,.55);
  padding: 0 10px;
}
</style>
