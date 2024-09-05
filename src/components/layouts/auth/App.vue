<script setup>
import Topbar from '@/components/layouts/auth/TopbarView.vue'
import Sidebar from '@/components/layouts/auth/SidebarView.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen divide-y bg-primary">
    <Topbar />
    <div class="flex-1 min-w-full flex flex-row divide-x">
      <Sidebar />
      <div class="flex-1 divide-y">
        <RouterView />
      </div>
    </div>
  </div>
</template>
