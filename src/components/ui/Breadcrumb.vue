<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [{ label: 'Home', path: '/admin/home' }]
  }
})
</script>

<template>
  <div class="w-full px-4 py-1.5">
    <div class="text-xs text-gray-500 bg-gray-100 rounded-sm px-2 py-1">
      <span v-for="(item, index) in items" :key="index">
        <RouterLink :to="item.path">{{ item.label }}</RouterLink>
        <span v-if="index !== items.length - 1" class="mx-1.5">/</span>
      </span>
    </div>
  </div>
</template>
