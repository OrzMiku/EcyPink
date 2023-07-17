<template>
    <div class="gg">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>
.gg {
    background-color: #f3f3f3;
    margin: 10px 0;
    border-left: 5px solid #505050;
    padding: 10px;
    transition: 0.2s;
}

.gg:hover {
    background-color: #f7f7f7;
}
</style>