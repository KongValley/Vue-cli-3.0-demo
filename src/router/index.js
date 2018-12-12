import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@/views/Home.vue");
const Icon = () => import("@/views/Icons");
// const Slides = () => import("@/views/Slides");
const Button = () => import("@/views/Button");

Vue.use(Router);

export const routerMap = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/icon-font",
    name: "icon",
    component: Icon
  },
  // {
  //   path: "/slides",
  //   name: "slides",
  //   component: Slides
  // }
  {
    path: "/button",
    name: "button",
    component: Button
  }
  // {
  //   path: "/loading",
  //   name: "loading",
  //   component: Loading
  // }
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
});
