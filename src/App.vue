<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <router-view/>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

interface TempModel {
  name: string;
}
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {

    }
  },
  mounted(){
    this.initApp();
  },
  methods: {
    initApp(): void {
      let temp: TempModel = {
        name: "TEMP ->"
      };
      console.log(temp);
    }
  }
}
</script>
<style lang="less" scoped>
img {
  width: 200px;
}
</style>
