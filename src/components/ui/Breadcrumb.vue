<template>
  <div class="w-full px-4 py-1.5">
    <div class="text-xs text-gray-500 bg-gray-100 rounded-sm space-x-1.5 px-2 py-1">
      <RouterLink v-for="(item, index) in items" :key="index" :to="item.path">
        {{ item.label }}
      </RouterLink>
      <template v-if="index !== items.length - 1">
        <span>/</span>
      </template>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>
