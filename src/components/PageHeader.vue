<template>
  <div class="container">
    <div class="main-container">
      <div class="logo">
        <img src="../assets/logo.png" alt="logo">
      </div>
      <ui class="menu">
        <li>首页</li>
        <li>编程开发</li>
        <li>深度学习</li>
        <li>策略回测</li>
        <li>Python量化交易</li>
        <li>精品收藏</li>
        <li>答疑解惑</li>
      </ui>
      <div class="sub_menu">
        <div class="search_bar">搜索</div>
        <div class="login">
          <span>登录</span>
          <span class="line">|</span>
          <span>注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  background: #1d2431;
  justify-content: center;
}

.container .main-container {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  width: 1250px;
  height: 60px;
  color: #fff;
  font-size: 14px;
}

.container .main-container .logo {
  height: 60px;
  overflow: hidden;
  width: 200px;
}

.container .main-container .menu, .container .main-container .sub_menu {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
}

.container .main-container .menu li {
  padding: 0 15px;
}

.container .main-container .sub_menu .search_bar {
  margin-right: 20px;
}

.container .main-container .sub_menu .login .line {
  padding: 0 3px;
}
</style>
