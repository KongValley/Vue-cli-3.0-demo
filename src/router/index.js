import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@/views/Home.vue");
const Icon = () => import("@/views/Icons");
// const Slides = () => import("@/views/Slides");
const Button = () => import("@/views/Button");
const Input = () => import("@/views/Input");

Vue.use(Router);

export const routerMap = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/icon-font",
    name: "icon",
    component: Icon,
    meta: {
      title: "icon组件"
    }
  },
  // {
  //   path: "/slides",
  //   name: "slides",
  //   component: Slides
  // }
  {
    path: "/button",
    name: "button",
    component: Button,
    meta: {
      title: "button组件"
    }
  },
  {
    path: "/input",
    name: "input",
    component: Input,
    meta: {
      title: "input组件"
    }
  }
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
});
