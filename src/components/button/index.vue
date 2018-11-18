<template>
  <button>
    <k-icon
      :icon="icon" 
      v-if="icon && !loading">
    </k-icon>
    <k-icon 
      icon="reload" 
      v-if="loading">
    </k-icon>
    <div>
      <slot></slot>  
    </div>
  </button>
</template>

<script>
export default {
  name: "button",
  data() {
    return {};
  },
  props: {
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/variable.scss";
</style>
