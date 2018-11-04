<template>
    <div>
      加载完毕就能看到我了
    </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("showLoading");
    setTimeout(() => {
      return new Promise(resolve => {
        this.$store.dispatch("hideLoading");
        resolve();
      });
    }, 3000);
  }
};
</script>

<style lang="scss">
</style>
