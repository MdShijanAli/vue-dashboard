<template>
  <aside :class="{ 'sidebar-open': isSidebarOpen, 'sidebar-closed': !isSidebarOpen }">
    <ul>
      <li v-for="item in menuItems" :key="item.name">
        <i :class="item.icon"></i>
        <span v-if="isSidebarOpen">{{ item.name }}</span>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import { useSidebarToggle } from '~/composables/useSidebarToggle';

const { isSidebarOpen } = useSidebarToggle();
const menuItems = ref([
  { name: 'Home', icon: 'fas fa-home' },
  { name: 'Settings', icon: 'fas fa-cog' },
  { name: 'Profile', icon: 'fas fa-user' },
  { name: 'Logout', icon: 'fas fa-sign-out-alt' },
]);
</script>

<style scoped>
aside {
  background-color: #222;
  color: #fff;
  height: 100vh;
  overflow: hidden;
  transition: width 0.3s;
}
.sidebar-open {
  width: 200px;
}
.sidebar-closed {
  width: 50px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
}
li:hover {
  background-color: #333;
}
i {
  font-size: 1.2rem;
  margin-right: 1rem;
}
.sidebar-closed i {
  margin-right: 0;
}
.sidebar-closed span {
  display: none;
}
</style>
