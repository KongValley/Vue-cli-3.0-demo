<template>
  <div>
    <k-slides>
      <k-slides-item>
        <div class="box">1</div>
      </k-slides-item>
      <k-slides-item>
        <div class="box">2</div>
      </k-slides-item>
      <k-slides-item>
        <div class="box">3</div>
      </k-slides-item>
    </k-slides>
  </div>
</template>

<script>
import KSlides from "@/components/slides";
import KSlidesItem from "@/components/slides-item";
export default {
  name: "slides_page",
  components: {
    KSlides,
    KSlidesItem
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 150px;
  background: #ddd;
  border: 1px solid red;
}
</style>
