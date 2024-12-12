<template>
  <button class="notification-button" @click="viewNotifications">
    <i class="fas fa-bell"></i>
  </button>
</template>

<script setup>
const viewNotifications = () => {
  alert("Viewing notifications...");
};
</script>

<style scoped>
.notification-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
}
</style>
