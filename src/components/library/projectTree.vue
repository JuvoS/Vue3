<template>
  <a-menu
    style="width: 256px"
    :default-selected-keys="['1']"
    mode="inline"
    @click="handleClick"
  >
    <span><a-icon type="mail" /><span>项目管理</span></span>
    <a-menu-item-group key="g1">
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <template #title> <a-icon type="qq" /><span>默认项目</span> </template>
        <a-menu-item key="1"> 演示项目</a-menu-item>
        <a-menu-item key="2"> 演示项目A</a-menu-item>
      </a-sub-menu>
    </a-menu-item-group>
    <a-menu-item-group key="g2">
      <a-sub-menu key="sub2">
        <template #title> <a-icon type="qq" /><span>湖北项目</span> </template>
        <a-menu-item key="3"> 湖北子项目</a-menu-item>
        <a-menu-item key="4"> 演示项目A</a-menu-item>
        <a-sub-menu key="sub3" title="湖北子项目">
          <a-menu-item key="7">子项目A</a-menu-item>
          <a-menu-item key="8">子项目B</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu-item-group>
    <a-menu-item-group key="g3">
      <a-sub-menu key="sub4">
        <template #title> <a-icon type="qq" /><span>江西项目</span> </template>
        <a-menu-item key="5"> 江西子项目</a-menu-item>
        <a-menu-item key="6"> 江西子项目A</a-menu-item>
      </a-sub-menu>
    </a-menu-item-group>
  </a-menu>
</template>
<script>
export default {
  data() {
    return {
      current: ["mail"],
      openKeys: ["sub1"],
    };
  },
  watch: {
    openKeys(val) {
      console.log("openKeys", val);
    },
  },
  methods: {
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    },
  },
};
</script>
