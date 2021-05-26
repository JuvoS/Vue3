<template>
  <div>
    <comps-category></comps-category>
    <div class="vray-search">
      <input class="vray-input" />
    </div>
    <div class="vray-search">
      <span class="vray-title">相关搜索</span>
      <span class="vray-info">搜索内容</span>
    </div>
  </div>
</template>
<script>
import CompsCategory from "/@/components/library/category.vue";
export default {
  components: {
    "comps-category": CompsCategory,
  },
};
</script>
<style lang="less" scoped>
.vray-search {
  width: 300px;
  margin: 5px 10px;
}
.vray-input {
  display: block;
  width: 100%;
  padding: 0.4rem 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0;
  font-family: inherit;
  box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 5%) inset;
  font-size: 12px;
}

.vray-title {
  color: #9b9ea0;
  font-size: 12px;
}
.vray-info {
  color: #333;
  font-size: 12px;
}
</style>
