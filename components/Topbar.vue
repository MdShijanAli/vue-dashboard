<template>
  <header class="topbar">
    <button @click="toggleSidebar" class="sidebar-toggle">
      <i :class="isSidebarOpen ? 'fas fa-chevron-left' : 'fas fa-chevron-right'"></i>
    </button>
    <div class="topbar-actions">
      <NotificationButton />
      <DarkModeToggle />
      <FullScreenToggle />
      <ProfileMenu />
    </div>
  </header>
</template>

<script setup>
import DarkModeToggle from '~/components/topbar/DarkModeToggle.vue';
import FullScreenToggle from '~/components/topbar/FullScreenToggle.vue';
import NotificationButton from '~/components/topbar/NotificationButton.vue';
import ProfileMenu from '~/components/topbar/ProfileMenu.vue';
import { useSidebarToggle } from '~/composables/useSidebarToggle';

const { isSidebarOpen, toggleSidebar } = useSidebarToggle();
</script>

<style scoped>
.topbar {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  color: #333;
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.sidebar-toggle {
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
}
.topbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>