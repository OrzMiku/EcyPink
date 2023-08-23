<template>
  <div class="tag">
    {{ text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.tag {
  display: inline-block;
  box-shadow: 0 0 2px #f3f3f3;
  color: #050505;
  padding: 4px 10px;
  margin: 8px 4px 0 4px;
  transition: 0.2s;
  border: 1px solid #050505;
}

.tag:hover {
  background: #050505;
  color: white;
}
</style>
