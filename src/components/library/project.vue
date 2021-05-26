<template>
  <a-row type="flex" justify="start">
    <a-col :span="6">
      <project-tree></project-tree>
    </a-col>
    <a-col :span="18"> col-4 </a-col>
  </a-row>
</template>
<script>
import ProjectTree from "./projectTree.vue";
export default {
  components: {
    "project-tree": ProjectTree,
  },
  data() {
    return {};
  },
};
</script>
