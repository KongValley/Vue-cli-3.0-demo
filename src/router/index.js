import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const Icon = () => import("@/views/Icons");
const Slides = () => import("@/views/Slides");
// const Loading = () => import("@/views/Loading");
Vue.use(Router);

export const routerMap = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/icon-font",
    name: "icon",
    component: Icon
  },
  {
    path: "/slides",
    name: "slides",
    component: Slides
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
