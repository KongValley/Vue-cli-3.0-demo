import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/scss/index.scss";
import IconFont from "@/components/icon-font";

Vue.config.productionTip = false;

// 注册为全局组件
Vue.component("icon-font", IconFont);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
