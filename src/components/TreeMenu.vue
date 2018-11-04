<template>
  <div>
    <div v-for="item in data" :key="item.title">{{item.title}}
      <tree-menu :data="item.children"></tree-menu>  
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeMenu",
  data() {
    return {};
  },
  props: {
    data: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
