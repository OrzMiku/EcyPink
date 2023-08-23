<template>
  {{ msg }}
</template>
<script setup>
import { ref } from 'vue';
import getHitokoto from '../utils/hitokoto';
const params = {
  c: 'd',
};
const msg = ref('一言获取中...');
getHitokoto(params).then((res) => {
  msg.value = res.hitokoto;
});
</script>
