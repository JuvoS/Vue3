<template>
  <flex-box class="project-info">
    <flex-box></flex-box>
  </flex-box>
</template>
<script>
import FlexBox from "../flex/box";
export default {
  components: {
    "flex-box": FlexBox,
  },
};
</script>
<style lang="less" scoped>
.project-info {
  flex: 1;
}
</style>
