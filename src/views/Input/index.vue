<template>
  <div class="input-page-g">
    <div class="title">v-model测试</div>
    <k-input v-model="data"></k-input>
    <div class="result">{{data}}</div>
  </div>
</template>

<script>
import KInput from "@/components/input";
export default {
  name: "",
  data() {
    return {
      data: ""
    };
  },
  components: {
    KInput
  }
};
</script>

<style lang="scss" scoped>
.input-page-g {
  padding-left: 10px;
}
</style>
