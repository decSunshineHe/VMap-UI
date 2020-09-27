
<template>
  <header class="page-header">
    <div class="header-container">
      <router-link :to="{ name: 'index' }">
        <img src="../assets/img/banner.png" width="100"
      /></router-link>
      <router-link :to="{ name: 'giud' }">组件</router-link>
    </div>
    <div class="under-line"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style type="text/less" lang="less">
@import "../assets/less/index";
.page-header {
  background-color: #fff;
  opacity: 0.98;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  z-index: 100;

  .header-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
  }

  .under-line {
    width: 90%;
    border-bottom: 1px solid #dcdfe6;
    margin: 0 auto;
  }
}
</style>
