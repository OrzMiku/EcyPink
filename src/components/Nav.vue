<template>
    <nav class="nav">
        <template v-for="(item, index) in navs" :key="item">
            <div @click="navClick(index)" :class="{ active: currentActiveId === index }" class="nav-item">{{ item.text }}
            </div>
        </template>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const emits = defineEmits(['changed']);
const props = defineProps({
    navs: {
        type: Array,
        default: () => []
    }
});
const currentActiveId = ref(0);
function navClick(index) {
    currentActiveId.value = index;
    emits('changed', index);
}
</script>

<style>
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
}

.nav-item:hover {
    background-color: #f3f3f3;
    box-shadow: 1px 1px 1px grey;
}

.nav-item.active {
    border-bottom: 2px solid black;
}
</style>