<template>
  <div class="g-loading-cnt" v-if="isLoading">
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {};
  },
  computed: {
    isLoading() {
      return this.$store.getters.loadingVisible;
    }
  }
};
</script>

<style lang="scss">
.g-loading-cnt {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center center;
  background-image: url("~@/assets/image/loading.gif");
  background-size: cover;
}
</style>
