<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100%">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <!-- <a-icon type="user" /> -->
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <!-- <a-icon type="video-camera" /> -->
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <!-- <a-icon type="upload" /> -->
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <!-- <MenuUnfoldOutlined
          class="trigger"
          v-if="collapsed"
          @click="() => (collapsed = !collapsed)"
        ></MenuUnfoldOutlined>
        <MenuFoldOutlined
          class="trigger"
          v-if="!collapsed"
          @click="() => (collapsed = !collapsed)"
        ></MenuFoldOutlined> -->
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
        }"
      >
        <h3 class="section" id="section-3">图片/文档/视频处理</h3>
        <Card></Card>

        <user-outlined />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { UserOutlined } from "@ant-design/icons-vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import Card from "/~/Card/card.vue";
import axios from "axios";
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    "user-outlined": UserOutlined,
    Card,
  },
  mounted() {
    axios
      .get("api/site.json", {})
      .then((data) => {
        console.log("site ->", data);
      })
      .catch((e) => {
        console.log("e ->", e);
      });
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
