<script setup>
import MaterialIcon from '@/components/ui/icons/MaterialIcon.vue'
import Breadcrumb from '@/components/ui/navigations/Breadcrumb.vue'

const breadcrumbItems = [
  { label: 'Home', path: '/admin/home' },
  { label: 'Integrations', path: '/admin/integrations' },
  { label: 'Edit', path: '/admin/integrations/edit' }
]
</script>

<template>
  <div class="min-w-full h-12 flex items-center justify-between px-4">
    <h1 class="text-lg font-semibold">Integrations</h1>
    <div class="flex items-center gap-2">
      <RouterLink to="/admin/integrations">
        <n-button>
          <MaterialIcon icon="ArrowBackRound" class="w-4 h-4 mr-2" />
          <span class="text-xs">Back</span>
        </n-button>
      </RouterLink>
    </div>
  </div>
  <div class="flex-1">
    <Breadcrumb :items="breadcrumbItems" />

    <div class="space-y-3 px-4">
      <n-card size="small" class="space-y-4">
        <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
          <div class="flex items-center col-span-12 md:col-span-3">
            <label>Integration</label>
          </div>
          <div class="col-span-12 md:col-span-9">
            <n-select size="small" />
          </div>
        </div>
      </n-card>

      <n-card size="small" class="space-y-4">
        <div class="space-y-3">
          <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
            <div class="flex items-center col-span-12 md:col-span-3">
              <label>Name</label>
            </div>
            <div class="col-span-12 md:col-span-9">
              <n-input size="small" placeholder="Name" />
            </div>
          </div>
          <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
            <div class="flex items-center col-span-12 md:col-span-3">
              <label>URL</label>
            </div>
            <div class="col-span-12 md:col-span-9">
              <n-input size="small" placeholder="Server URL" />
            </div>
          </div>
          <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
            <div class="flex items-center col-span-12 md:col-span-3">
              <label>API Key</label>
            </div>
            <div class="col-span-12 md:col-span-9">
              <n-input size="small" placeholder="API Key" />
            </div>
          </div>
          <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
            <div class="col-span-12 md:col-span-2 md:col-start-4">
              <RouterLink to="/admin/integrations">
                <n-button size="small" class="w-full">
                  <span>Save Changes</span>
                </n-button>
              </RouterLink>
            </div>
          </div>
        </div>
      </n-card>
    </div>
  </div>
</template>
