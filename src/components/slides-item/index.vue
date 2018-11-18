<template>
  <transition name="slide">
    <div class="k-slides-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
  
</template>

<script>
export default {
  name: "slides-item",
  data() {
    return {
      visible: false
    };
  }
};
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}

.slide-enter {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
