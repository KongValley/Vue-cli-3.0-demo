<template>
  <div class="wrapper" :class="{error}">
    <label>
      <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
        @change="$emit('change',$event.target.value)"
        @input="$emit('input',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)"
      >
    </label>
    <template v-if="error">
      <k-icon icon="error" class="icon-error"></k-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: "k-input",
  data() {
    return {};
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/style/_var.scss";
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 0.5em;
  }

  > input {
    height: $input-height;
    border: 1px solid $border-color;
    border-radius: $input-radius;
    padding: 4px 11px;
    font-size: inherit;

    transition: all 0.3s;

    &:hover,
    &:focus {
      border-color: $input-border-color-hover;
    }

    &:focus {
      box-shadow: $input-active-shadow;
      outline: none;
    }

    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }

    &::selection {
      background: $input-selection-bg;
      color: #ffffff;
    }
  }

  &.error {
    > input {
      border-color: $red;
    }
  }

  .icon-error {
    fill: $red;
  }

  .errorMessage {
    color: $red;
  }
}
</style>
