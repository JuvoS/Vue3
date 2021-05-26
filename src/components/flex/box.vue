<template>
  <div class="flex-box" :style="sty">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    direction: {
      type: String,
    },
    column: {
      type: Boolean,
      default: false,
    },
    justify: {
      type: String,
      default: "space-around",
    },
  },
  data() {
    return {
      sty: {},
    };
  },
  mounted() {
    this.sty = {
      "flex-direction": this.direction
        ? this.direction
        : this.column
        ? "column"
        : "row",
      "justify-content": this.justify,
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.flex-box {
  display: flex;
}
</style>
