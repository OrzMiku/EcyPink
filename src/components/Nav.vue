<template>
    <nav class="nav">
        <template v-for="item in navs" :key="item">
            <template v-if="item.path">
                <router-link :to="item.path" class="nav-item"> {{ item.text }}</router-link>
            </template>
            <template v-else-if="item.url">
                <a class="nav-item extra-links" :href="item.url"> {{ item.text }}</a>
            </template>
        </template>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    navs: {
        type: Array,
        default: () => []
    }
});
</script>

<style>
a {
    text-decoration: none;
}

.nav {
    margin: 10px 0;
}

.nav-item {
    display: inline-block;
    flex: 2;
    padding: 0 5px;
    margin: 0 2px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    color: var(--theme-accent-color);
}

.nav-item:hover {
    background-color: #f3f3f3;
    box-shadow: 1px 1px 1px var(--theme-bg-color);
}

.router-link-active {
    border-bottom: 2px solid var(--theme-accent-color);
}

.extra-links::before{
    content: "➥";
    color: --theme-light-color;
    font-size: 10px;
}
</style>