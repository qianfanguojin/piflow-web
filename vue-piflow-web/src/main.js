import Vue from 'vue';
import App from './App.vue';

//引入 iview
import iView from 'view-design';
import 'view-design/dist/styles/iview.css';
import en from 'view-design/dist/locale/en-US';
import zh from 'view-design/dist/locale/zh-CN';
import VueI18n from 'vue-i18n'
Vue.use(VueI18n); // 通过插件的形式挂载
// Vue.use(iView);
Vue.use(iView, {
  i18n: function (path, options) {
    let value = i18n.t(path, options)
    if (value !== null && value !== undefined) {
      return value
    }
    return ''
  }
});
Vue.locale = () => {};

let lang = window.sessionStorage.getItem("lang");
const i18n = new VueI18n({ //this.$i18n.locale // 通过切换locale的值来实现语言切换
  locale: lang ? lang : 'en', // 语言标识
  messages: {
    'zh': Object.assign(require('./assets/language/zh-CN'), zh), // 中文语言包
    'en': Object.assign(require('./assets/language/en-US'), en) // 英文语言包
  }
});

// import './assets/style/theme_1.scss'

// 引入echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts;

import './assets/style/gloable.scss';
// import 'font-awesome/css/font-awesome.css'

import event from './utils/event';
Vue.prototype.$event = event;

//实例化 store
import store from './store'; // this.$store.commit("setUser", user); 

//引入axios
import axios from 'axios';
import qs from 'qs';
axios.defaults.withCredentials = true; //让ajax携带cookie
axios.interceptors.request.use(
  config => {
    // 这里的config包含每次请求的内容
    let token = store.state.variable.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
axios.defaults.baseURL = process.env.VUE_APP_URL;
window.sessionStorage.setItem("basePath",process.env.VUE_APP_URL)
Vue.prototype.$url = process.env.VUE_APP_URL;
Vue.prototype.$axios = axios; //全局注册，使用方法为:this.$axios
Vue.prototype.$qs = qs; //全局注册，使用方法为:this.$qs

//全局引入模拟数据
// import mock from './mock'
// Vue.prototype.$mock = mock
// import './utils/flexible' //rem 转换

Vue.config.productionTip = false;


//引入路由文件
import router from './router';
//// 路由拦截
const whiteList = ['/task']; //不需要登录能访问的path
router.beforeEach((to, from, next) => {
  // let userInfo = JSON.parse(sessionStorage.getItem('state'));//获取缓存看是否登录过
  let state = window.sessionStorage.getItem('state'); //获取缓存看是否登录过
  // if (whiteList.indexOf(to.path) < 0) {//访问了需要登录才能访问的页面
  if (state == 'jwtok') { //登录过来直接进去
    next();
  } else {
    if (to.path == '/login') {
      next();
    } else {
      next('/login');
    }
  }
  // } else {
  //   next();
  // }
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');