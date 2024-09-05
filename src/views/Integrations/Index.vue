<script setup>
import MaterialIcon from '@/components/ui/icons/MaterialIcon.vue'
import Breadcrumb from '@/components/ui/Breadcrumb.vue'

const breadcrumbItems = [
  { label: 'Home', path: '/admin/home' },
  { label: 'Integrations', path: '/admin/integrations' }
]
</script>

<template>
  <div class="min-w-full h-12 flex items-center justify-between px-4">
    <h1 class="text-lg font-semibold">Integrations</h1>
    <div class="flex items-center gap-2">
      <RouterLink to="/admin/integrations/create">
        <n-button>
          <MaterialIcon icon="AddRound" class="w-4 h-4 mr-2" />
          <span class="text-xs">Create</span>
        </n-button>
      </RouterLink>
    </div>
  </div>
  <div class="flex-1">
    <Breadcrumb :items="breadcrumbItems" />

    <div class="px-4">
      <n-card class="space-y-4">
        <div class="space-y-3">
          <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
            <div class="col-span-12 md:col-span-4">
              <span class="text-xs">Search</span>
              <n-input type="text" placeholder="Search" size="small" />
            </div>
            <div class="col-span-12 md:col-span-2">
              <span class="text-xs">Status</span>
              <n-select size="small" />
            </div>
          </div>
          <n-table size="small" :single-line="false">
            <thead>
              <tr>
                <th>Name</th>
                <th>API Key</th>
                <th>Status</th>
                <th width="157">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>
                  <div class="space-x-1">
                    <RouterLink to="/admin/home">
                      <n-button size="small">
                        <MaterialIcon icon="RemoveRedEyeOutlined" class="w-4 h-4 mr-2" />
                        <span>View</span>
                      </n-button>
                    </RouterLink>
                    <RouterLink to="/admin/integrations/edit">
                      <n-button size="small">
                        <MaterialIcon icon="EditRound" class="w-4 h-4 mr-2" />
                        <span>Edit</span>
                      </n-button>
                    </RouterLink>
                  </div>
                </td>
              </tr>
            </tbody>
          </n-table>
        </div>
      </n-card>
    </div>
  </div>
</template>
