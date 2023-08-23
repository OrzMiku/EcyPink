<template>
  <div class="link-card" @click="goto">
    <div class="header">
      {{ title }}
    </div>
    <div class="body">
      {{ description }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
});

const goto = () => {
  window.open(props.url, '_blank');
};
</script>

<style scoped>
.link-card {
  border: 3px solid #505050;
  padding: 20px;
  margin: 10px 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  transition: 0.2s;
}

.link-card > .header {
  font-size: 28px;
  margin-bottom: 6px;
}

.link-card > .body {
  color: #505050;
}

.link-card:hover {
  background-color: #505050;
  color: white;
}

.link-card:focus {
  background-color: #505050;
  color: white;
}

.link-card:hover > .body {
  color: white;
}

.link-card:focus > .body {
  color: white;
}
</style>
