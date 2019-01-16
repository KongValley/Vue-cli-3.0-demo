<template>
  <div class="k-progress">
    <div class="k-progress-bar">
      <div class="k-progress-bar__wrapper" :style="strokeStyle">
        <div class="k-progress-bar__inner" :style="percentStyle" :class="statusStyle">
          <div class="k-progress-bar__innerText" v-if="textInside">
            <k-icon :icon="iconType" :class="iconStyle" v-if="isShowIcon"></k-icon>
            <span v-if="!currentStatus">{{percentText}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="k-progress__text" v-if="!textInside">
      <k-icon :icon="iconType" :class="iconStyle" v-if="isShowIcon"></k-icon>
      <span v-if="!currentStatus">{{percentText}}</span>
    </div>
  </div>
</template>

<script>
import KIcon from "_c/icon";
export default {
  name: "KProgress",
  components: {
    KIcon
  },
  props: {
    percent: {
      type: Number,
      default: 0,
      required: true,
      validator: val => val >= 0 && val <= 100
    },
    strokeWidth: {
      type: Number,
      default: 18
    },
    status: {
      type: String,
      default: "",
      validator: val => ["success", "error", ""].indexOf(val) !== -1
    },
    textInside: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentStatus: this.status
    };
  },
  computed: {
    strokeStyle() {
      return {
        height: this.strokeWidth + "px"
      };
    },
    percentStyle() {
      return {
        width: this.percent + "%"
      };
    },
    percentText() {
      return this.percent + "%";
    },
    statusStyle() {
      return {
        "is-success-bg": this.currentStatus === "success",
        "is-error-bg": this.currentStatus === "error"
      };
    },
    isShowIcon() {
      return this.currentStatus === "success" || this.currentStatus === "error";
    },
    iconType() {
      if (this.currentStatus === "success") {
        return "check-circle-fill";
      } else if (this.currentStatus === "error") {
        return "close-circle-fill";
      }
    },
    iconStyle() {
      return {
        "is-success-text": this.currentStatus === "success",
        "is-error-text": this.currentStatus === "error"
      };
    }
  },
  watch: {
    percent(val) {
      this.handleChange(val | 0);
    }
  },
  methods: {
    handleChange(val) {
      if (val === 100) {
        this.currentStatus = "success";
        this.$emit("on-status-success", this.percent);
      } else {
        this.currentStatus = this.status;
      }
    }
  },
  mounted() {
    this.handleChange(this.percent);
  }
};
</script>

<style lang="scss" scoped>
@import "~@/style/_var";
@import "~@/style/mixin";
.k-progress {
  position: relative;
  line-height: 1;
  &-bar {
    display: inline-block;
    width: 100%;
    vertical-align: middle;
    margin-right: -55px;
    padding-right: 50px;
    &__wrapper {
      position: relative;
      background-color: $progress-wrapper;
      border-radius: $progress-radius;
      vertical-align: middle;
      overflow: hidden;
      @include statusBgColor;
    }
    &__inner {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      border-radius: $progress-radius;
      background-color: $progress-loading-color;
      line-height: 1;
      text-align: right;
      transition: width 0.3s;
    }
    &__innerText {
      display: inline-block;
      vertical-align: middle;
      color: $progress-innerText-color;
      font-size: 12px;
      margin: 0 5px;
    }
  }
  &__text {
    color: $progress-text-color;
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    line-height: 1;
    @include statusTextColor;
  }
}
</style>
