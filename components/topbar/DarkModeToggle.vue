<template>
  <button class="dark-mode-toggle" @click="toggleDarkMode">
    <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
  </button>
</template>

<script setup>
import { ref } from "vue";

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle("dark-mode", isDarkMode.value);
};
</script>

<style scoped>
.dark-mode-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
}
</style>
