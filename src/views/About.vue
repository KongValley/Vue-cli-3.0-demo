<template>
  <div>
    <tree-menu :data="menu"></tree-menu>
  </div>
</template>

<script>
import TreeMenu from "@/components/TreeMenu";
export default {
  name: "",
  data() {
    return {
      menu: [
        {
          title: "首页",
          children: [
            {
              title: "首页一"
            },
            {
              title: "首页二"
            }
          ]
        },
        {
          title: "关于"
        }
      ]
    };
  },
  components: {
    TreeMenu
  }
};
</script>

<style lang="scss" scoped>
</style>
