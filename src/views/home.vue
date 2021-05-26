<template>
  <div class="vray-home">
    <div class="vray-header">
      <div class="vray-welcome">WELCOME TO DATAV</div>
    </div>
    <div class="vray-content">
      <a-tabs type="card" default-active-key="3">
        <a-tab-pane key="1" tab="项目库">
          <project-lirary></project-lirary>
        </a-tab-pane>
        <a-tab-pane key="2" tab="模板库">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </a-tab-pane>
        <a-tab-pane key="3" tab="组件库">
          <comps-lirary></comps-lirary>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
import ProjectLirary from "/@/components/library/project.vue";
import CompsLirary from "/@/components/library/components.vue";
export default {
  components: {
    "project-lirary": ProjectLirary,
    "comps-lirary": CompsLirary,
  },
};
</script>
<style lang="less" scoped>
.vray {
  &-welcome {
    font-size: 40px;
    font-weight: bold;
    color: #2a68c9;
  }
}
</style>
