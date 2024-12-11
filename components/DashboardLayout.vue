<template>
  <div class="dashboard-layout">
    <Topbar />
    <div class="main-content">
      <Sidebar />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue';
import Topbar from '~/components/Topbar.vue';
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main-content {
  display: flex;
  flex: 1;
}
main {
  flex: 1;
  padding: 1rem;
  background-color: #f5f5f5;
}
</style>
