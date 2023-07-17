<template>
    <div class="app">
        <h1>友情链接</h1>
        <gg />
        <template v-for="item in links" :key="item">
            <LinkCard :title="item.title" :description="item.description" :url="item.url" />
        </template>
    </div>
</template>

<script setup>
import LinkCard from './components/LinkCard.vue';
import gg from './components/gg.vue';
import links from './data/links'
console.log(links)
</script>

<style  scoped>
.app {
    max-width: 720px;
    padding: 20px;
    margin: auto;
}
</style>