<template>
  <Miku />
  <div class="app">
    <h1>EcyPink</h1>
    <Nav :navs="navs" />
    <GG>
      <hitokoto />
    </GG>
    <RouterView></RouterView>
    <Footer text="www.miku.show" icp="萌ICP备20233993号"></Footer>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { useSiteConfigStore } from "@/stores/siteConfig.js";
import GG from "./components/GG.vue";
import Miku from "./components/Miku.vue";
import Hitokoto from "./components/Hitokoto.vue";
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
import navs from "./data/navs";

onMounted(() => {
  const site = useSiteConfigStore();
  // 控制台输出
  const title = site.title;
  const description = site.description;

  const style = `
    background-color: rgba(57, 197, 187, 0.2);
    border-radius: 5px;
    padding: 20px;
    color: #39c5bb;
    font-size: 30px;
`;

  console.log(`%c${title} - ${description}`, style);
});
</script>

<style scoped>
.app {
  max-width: 720px;
  padding: 20px;
  margin: auto;
}
</style>
