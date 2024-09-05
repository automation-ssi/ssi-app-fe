<script setup>
import MaterialIcon from '@/components/ui/icons/MaterialIcon.vue'
</script>

<template>
  <div class="min-w-full h-8 flex items-center justify-end bg-accent px-4">
    <RouterLink to="/login">
      <MaterialIcon icon="LogOutRound" class="text-primary w-4 h-4 cursor-pointer" />
    </RouterLink>
  </div>
</template>
