<template>
  <button class="fullscreen-toggle" @click="toggleFullScreen">
    <i class="fas fa-expand"></i>
  </button>
</template>

<script setup>
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};
</script>

<style scoped>
.fullscreen-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
}
</style>
