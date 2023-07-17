<template>
    {{ msg }}
</template>
<script setup>
import { ref } from 'vue';
import { getHitokoto } from '../utils/hitokoto'
const msg = ref("一言获取中...");
getHitokoto().then(v => msg.value = v.hitokoto)
</script>