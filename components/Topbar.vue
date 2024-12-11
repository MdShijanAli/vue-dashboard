<template>
  <header class="topbar">
    <button @click="toggleSidebar">
      <i :class="isSidebarOpen ? 'fas fa-chevron-left' : 'fas fa-chevron-right'"></i>
    </button>
    <h1>Dashboard</h1>
  </header>
</template>

<script setup>
import { useSidebarToggle } from '~/composables/useSidebarToggle';

const { isSidebarOpen, toggleSidebar } = useSidebarToggle();
</script>

<style scoped>
.topbar {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; /* Full width of the main content area */
  box-sizing: border-box;
}
button {
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}
h1 {
  margin-left: 1rem;
}
</style>
