<template>
  <div class="editor-box">
    <flex-column>
      <div class="editor-left"></div>
      <div class="editor-center"></div>
      <div class="editor-right"></div>
    </flex-column>
    <!-- <dv-decoration-1 style="width: 200px; height: 50px" /> -->
    <!-- <dv-decoration-12 style="width:150px;height:150px;" /> -->
  </div>
</template>
<script lang="ts">
import DvDecoration1 from "/~/decoration1.vue";
import Column from "/~/flex/column.vue";
// import DvDecoration12 from "/~/decoration12.vue"
export default {
  components: {
    "dv-decoration-1": DvDecoration1,
    "flex-column": Column,
    // "dv-decoration-12": DvDecoration12,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.editor {
  &-box {
    background: #313239;
    height: 100%;
  }
  &-left {
    width: 360px;
    height: 100%;
    background: #24242b;
    box-shadow: 0 0 5px rgba(255, 102, 102, 0.2);
  }
  &-center {
    flex: 1;
    height: 100%;
  }
  &-right {
    width: 360px;
    height: 100%;
    background: #24242b;
    box-shadow: 0 0 5px rgba(102, 102, 102, 0.2);
  }
}
</style>
