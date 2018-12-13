import router from './router'

router.beforeEach((to, from, next) => {
  /* 路由变化后修改页面title */
  if(to.meta.title) {
    document.title = to.meta.title
  }
})