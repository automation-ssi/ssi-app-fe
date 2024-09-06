<script setup>
import MaterialIcon from '@/components/ui/icons/MaterialIcon.vue'
import Breadcrumb from '@/components/ui/navigations/Breadcrumb.vue'

const breadcrumbItems = [
  { label: 'Home', path: '/admin/home' },
  { label: 'Instana', path: '/admin/home/instana' },
  { label: 'Websites', path: '/admin/home/instana/websites' }
]

const options = [
  { label: 'Instana', disabled: true },
  { label: 'Turbonomic', disabled: false }
]
</script>

<template>
  <div class="min-w-full h-12 flex items-center justify-between px-4">
    <h1 class="text-lg font-semibold">Instana Websites</h1>
    <div class="flex items-center gap-2">
      <n-button class="w-full">
        <span class="text-xs">Go to Instana</span>
        <MaterialIcon icon="ArrowForwardRound" class="w-4 h-4 ml-2" />
      </n-button>
    </div>
  </div>
  <div class="flex-1">
    <Breadcrumb :items="breadcrumbItems" />

    <div class="space-y-3 px-4">
      <n-tabs type="line" animated>
        <n-tab-pane name="summary" tab="Summary">
          <div class="space-y-3">
            <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
              <div class="col-span-12 md:col-span-6">
                <n-card size="small" title="Calls Per Second">
                  <div>
                    <h3 class="font-semibold text-lg">[percentage]</h3>
                    <span>[count / description]</span>
                  </div>
                </n-card>
              </div>
              <div class="col-span-12 md:col-span-6">
                <n-card size="small" title="Erroneous Call Rate">
                  <div>
                    <h3 class="font-semibold text-lg">[percentage]</h3>
                    <span>[count / description]</span>
                  </div>
                </n-card>
              </div>
            </div>

            <n-card size="small" title="Page Loads">
              <div class="space-y-1.5">
                <div>
                  <n-card size="small">
                    <div class="flex items-center justify-between">
                      <span>[resource_name]</span>
                      <span class="text-xs">[count] ms</span>
                    </div>
                  </n-card>
                </div>
                <div class="flex items-center gap-3">
                  <MaterialIcon icon="SubdirectoryArrowRightRound" class="w-4 h-4" />
                  <n-card size="small" class="flex-1">
                    <div class="flex items-center justify-between">
                      <span>[resource_name]</span>
                      <span class="text-xs">[count] ms</span>
                    </div>
                  </n-card>
                </div>
              </div>
            </n-card>
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>
