<template>
  <svg :class="kIconClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import "@/assets/font/iconfont.js";
export default {
  name: "k-icon",
  data() {
    return {};
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    iconClass: {
      type: String
    }
  },
  computed: {
    iconName() {
      return `#k-${this.icon}`;
    },
    kIconClass() {
      return this.iconClass ? "k-icon " + this.iconClass : "k-icon";
    }
  }
};
</script>

<style lang="scss">
.k-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
