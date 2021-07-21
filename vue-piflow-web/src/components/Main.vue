
<template>
  <div class="main">
    <Header :width="width"></Header>
    <router-view></router-view>
    <Footer />
    <transition name="show">
      <div class="fullScreen" v-if="loading">
        <div style="margin-top: 15%;">
          <p><img src="../assets/img/loading.gif" /></p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Header from "./compon/Header";
import Footer from "./compon/Footer";
export default {
  name: "mains",
  components: {
    Footer,
    Header
  },
  data() {
    return {
      loading: false,
      width: "250px"
    };
  },
  created() {
    //接收组件的loading事件结果来影响加载动画的显示
    this.$event.on("loading", val => {
    
      this.loading = val;
    });
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
}
</style>