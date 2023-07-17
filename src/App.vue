<template>
    <div class="app">
        <Miku />
        <h1>友情链接</h1>
        <GG>君埋泉下泥销骨，我寄人间雪满头。</GG>
        <template v-for="item in links" :key="item">
            <LinkCard :title="item.title" :description="item.description" :url="item.url" />
        </template>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const LinkCard = defineAsyncComponent(() => import('./components/LinkCard.vue'))
const GG = defineAsyncComponent(() => import('./components/GG.vue'))
const Miku = defineAsyncComponent(() => import('./components/Miku.vue'));
import links from './data/links'
</script>

<style  scoped>
.app {
    max-width: 720px;
    padding: 20px;
    margin: auto;
}
</style>