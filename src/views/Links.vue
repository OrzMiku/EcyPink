<template>
    <h2>友情链接</h2>
    <template v-for="item in links" :key="item">
        <LinkCard :title="item.title" :description="item.description" :url="item.url" />
    </template>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const LinkCard = defineAsyncComponent(() => import('../components/LinkCard.vue'))
const props = defineProps({
    links: {
        type: Object,
        default: () => { }
    }
})
</script>