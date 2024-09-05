<script setup>
import Breadcrumb from '@/components/ui/Breadcrumb.vue'

const breadcrumbItems = [
  { label: 'Home', path: '/admin/home' },
  { label: 'Settings', path: '/admin/settings' }
]
</script>

<template>
  <div class="min-w-full h-12 flex items-center px-4">
    <h1 class="text-lg font-semibold">Settings</h1>
  </div>
  <div class="flex-1">
    <Breadcrumb :items="breadcrumbItems" />
  </div>
</template>
