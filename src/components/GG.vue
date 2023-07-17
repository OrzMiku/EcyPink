<template>
    <div class="gg">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>
.gg {
    margin: 10px 0;
    border-left: 5px solid #505050;
    padding: 10px;
    transition: 0.2s;
}

.gg:hover {
    background-color: #eeeeee;
}
</style>