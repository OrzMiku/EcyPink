<template>
    <div class="footer">
        <template v-if="hasText">{{ text }}</template>
        <template v-else>配置错误</template>
        <template v-if="hasIcp"> | {{ icp }}</template>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    icp: {
        type: String,
        default: "",
    },
    text: {
        type: String,
        default: ""
    }
});

const hasText = computed(() => {
    return props.text === "" ? false : true;
})
const hasIcp = computed(() => {
    return props.icp === "" ? false : true;
})
</script>

<style scoped>
.footer {
    text-align: center;
    color: #606060;
    font-weight: bolder;
}
</style>