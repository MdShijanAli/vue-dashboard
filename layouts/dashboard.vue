<template>
  <div class="layout">
    <Sidebar />
    <div class="main-content">
      <Topbar />
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue';
import Topbar from '~/components/Topbar.vue';
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow-y: auto;
}
</style>
