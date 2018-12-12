<template>
  <button class="k-button" :class="{}">
    <k-icon
      :icon="icon" 
      class="icon"
      v-if="icon && !loading">
    </k-icon>
    <k-icon 
      icon="reload"
      class="loading icon"
      v-if="loading">
    </k-icon>
    <div class="k-button-content">
      <slot></slot>  
    </div>
  </button>
</template>

<script>
import KIcon from "_c/icon";
export default {
  name: "k-button",
  data() {
    return {};
  },
  components: {
    KIcon
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
@import "@/style/_var.scss";
.k-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  // 父元素会变成inline，并且可以根据子元素大小自适应
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .k-button-content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }

  &.icon-right {
    > .k-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
