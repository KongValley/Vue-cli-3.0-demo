<template>
    <div>
      全局loading样式
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
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
