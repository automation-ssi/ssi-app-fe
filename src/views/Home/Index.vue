<script setup>
import MaterialIcon from '@/components/ui/icons/MaterialIcon.vue'
import Breadcrumb from '@/components/ui/Breadcrumb.vue'

const breadcrumbItems = [
  { label: 'Home', path: '/admin/home' },
  { label: 'Instana', path: '/admin/home/instana' }
]

const options = [
  { label: 'Instana', disabled: true },
  { label: 'Turbonomic', disabled: false }
]
</script>

<template>
  <div class="min-w-full h-12 flex items-center px-4">
    <h1 class="text-lg font-semibold">Home</h1>
  </div>
  <div class="flex-1">
    <Breadcrumb :items="breadcrumbItems" />

    <div class="space-y-3 px-4">
      <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
        <div class="col-span-12 md:col-span-3">
          <div class="cursor-pointer border">
            <n-dropdown trigger="click" placement="bottom-start" :options="options">
              <div class="flex items-end justify-between gap-1.5 px-3 py-1.5">
                <span class="font-semibold">Instana Dashboard</span>
                <MaterialIcon icon="ArrowForwardIosRound" class="w-3 h-3 rounded-sm rotate-45" />
              </div>
            </n-dropdown>
          </div>
        </div>
        <div class="col-span-12 md:col-span-2 md:col-start-11">
          <n-button class="w-full">
            <span class="text-xs">Go to Instana</span>
            <MaterialIcon icon="ArrowForwardRound" class="w-4 h-4 ml-2" />
          </n-button>
        </div>
      </div>

      <n-card style="margin-bottom: 16px">
        <n-tabs type="line" animated>
          <n-tab-pane name="wnm" tab="Websites & Mobile Apps"> Wonderwall </n-tab-pane>
          <n-tab-pane name="apps" tab="Applications"> Hey Jude </n-tab-pane>
          <n-tab-pane name="infra" tab="Infrastructure"> Qilixiang </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
  </div>
</template>
