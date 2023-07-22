<template>
    <Miku />
    <div class="app">
        <h1>EcyPink</h1>
        <Nav :navs="navs" @changed="changePage" />
        <GG>
            <hitokoto />
        </GG>
        <GG>
            <p>
                关注 <a href="https://space.bilibili.com/517141742">BiliBili@尹阿泡Apo</a> 喵。
            </p>
            <p>
                关注 <a href="https://space.bilibili.com/517141742">BiliBili@尹阿泡Apo</a> 谢谢喵。
            </p>
            一起玩剑三加QQ群748860669。
        </GG>
        <KeepAlive>
            <component :is="currentActivePage" :links="links"></component>
        </KeepAlive>
        <Footer text="www.miku.show" icp="萌ICP备20233993号"></Footer>
    </div>
</template>

<script setup>
import { defineAsyncComponent, shallowRef } from 'vue';
const GG = defineAsyncComponent(() => import('./components/GG.vue'))
const Miku = defineAsyncComponent(() => import('./components/Miku.vue'));
const Links = defineAsyncComponent(() => import('./views/Links.vue'));
const Setu = defineAsyncComponent(() => import('./views/Setu.vue'));
const About = defineAsyncComponent(() => import('./views/About.vue'));
const hitokoto = defineAsyncComponent(() => import('./components/Hitokoto.vue'));
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'));
const Nav = defineAsyncComponent(() => import('./components/Nav.vue'));
import navs from './data/navs'
import links from './data/links'
const pages = [About, Links, Setu];
const currentActivePage = shallowRef(pages[0]);
function changePage(index) {
    currentActivePage.value = pages[index];
}
</script>

<style  scoped>
.app {
    max-width: 720px;
    padding: 20px;
    margin: auto;
}

a,
a:visited,
a:hover,
a:active {
    color: #39c5bb;
}
</style>