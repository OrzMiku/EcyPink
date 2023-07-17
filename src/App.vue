<template>
    <Miku />
    <div class="app">
        <h1>EcyPink</h1>
        <GG>
            <hitokoto />
        </GG>
        <Links :links="links" />
        <Footer text="www.miku.show" icp="萌ICP备20233993号"></Footer>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const GG = defineAsyncComponent(() => import('./components/GG.vue'))
const Miku = defineAsyncComponent(() => import('./components/Miku.vue'));
const Links = defineAsyncComponent(() => import('./views/Links.vue'));
const hitokoto = defineAsyncComponent(() => import('./components/Hitokoto.vue'));
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'));
import links from './data/links'
</script>

<style  scoped>
.app {
    max-width: 720px;
    padding: 20px;
    margin: auto;
}
</style>