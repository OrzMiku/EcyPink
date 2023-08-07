<template>
    <div class="gg">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>
.gg {
    background-color: var(--textarea-bg-color);
    margin: 10px 0;
    border-left: 5px solid var(--theme-bg-color);
    padding: 10px;
    transition: 0.2s;
}

.gg:hover {
    background-color: var(--textarea-bg-color-hover);
}
</style>