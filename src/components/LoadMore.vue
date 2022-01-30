<template>
  <div class="loadmore" @click="loadmore">加载更多</div>
</template>

<script>
export default {
  name: 'LoadMore',
  methods: {
    loadmore: function () {
      this.$parent.loadmore()
    }
  }
}
</script>

<style scoped>
.loadmore {
  cursor: pointer;
  color: #4370f5;
}
</style>
