<template>
  <div id="app">
    <router-view/>
    <k-loading></k-loading>
  </div>
</template>

<script>
import KLoading from "@/components/loading";
export default {
  name: "App",
  components: {
    KLoading
  }
};
</script>


<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
