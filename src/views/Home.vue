<template>
  <div class="g-home-cnt">
    <k-icon icon="smile" icon-class="cnt-logo"></k-icon>
    <router-link 
      class="cnt-a"
      v-for="router in routerMap" 
      :key="router.path" 
      :to="router.path">
        {{router.name}}组件
    </router-link>
  </div>
</template>

<script>
import { routerMap } from "@/router";
export default {
  name: "home",
  data() {
    return {
      routerMap: routerMap
    };
  }
};
</script>
<style lang="scss">
.g-home-cnt {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .cnt-a {
    color: #42b983;
    text-decoration: none;
    font-size: 24px;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .cnt-logo {
    font-size: 150px;
    color: #42b983;
  }
}
</style>
