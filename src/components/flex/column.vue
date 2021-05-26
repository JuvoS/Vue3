<template>
  <div class="flex-column" :style="sty">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
  },
  data() {
    return {};
  },
  computed() {
    sty: {
      return {
        width: this.width,
        height: this.height,
      };
    }
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
