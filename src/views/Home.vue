<template>
  <div class="g-home-cnt">
    <icon-font icon="like" :size="Number(50)" color="#42b983"></icon-font>
    <router-link 
      class="cnt-a"
      v-for="router in routerMap" 
      :key="router.path" 
      :to="router.path">
        {{router.name}}
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
  }
}
</style>
