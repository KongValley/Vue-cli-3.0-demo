<template>
	<k-progress :percent="100" :textInside="true"></k-progress>
</template>

<script>
import KProgress from "_c/progress";
export default {
  name: "progress_page",
  components: {
    KProgress
  }
};
</script>

<style lang="scss" scoped>
</style>
