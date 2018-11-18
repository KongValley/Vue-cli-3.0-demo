<template>
  <div class="k-slides">
    <div class="k-slides-window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    let first = this.$children[0];
    let second = this.$children[1];
    first.visible = true;
    setTimeout(() => {
      first.visible = false;
      second.visible = true;
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.k-slides {
  display: inline-block;
  &-window {
  }
}
</style>
