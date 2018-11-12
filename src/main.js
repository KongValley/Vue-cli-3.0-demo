import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/scss/index.scss";
import kIcon from "@/components/icon";

Vue.config.productionTip = false;

// 注册为全局组件
Vue.component("k-icon", kIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
