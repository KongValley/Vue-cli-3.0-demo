import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./style/index.scss";
import kIcon from "./components/icon";

// 设置为生产环境下不提示
Vue.config.productionTip = false;

// 注册为全局组件
Vue.component("k-icon", kIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
