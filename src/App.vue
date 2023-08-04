<template>
    <Miku />
    <div class="app">
        <h1>EcyPink</h1>
        <Nav :navs="navs" />
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
        <RouterView></RouterView>
        <Footer text="www.miku.show" icp="萌ICP备20233993号"></Footer>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { RouterView } from 'vue-router'
const GG = defineAsyncComponent(() => import('./components/GG.vue'))
const Miku = defineAsyncComponent(() => import('./components/Miku.vue'));
const hitokoto = defineAsyncComponent(() => import('./components/Hitokoto.vue'));
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'));
const Nav = defineAsyncComponent(() => import('./components/Nav.vue'));
import navs from './data/navs'
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