<script setup>
import MaterialIcon from '@/components/ui/icons/MaterialIcon.vue'
import Breadcrumb from '@/components/ui/Breadcrumb.vue'

const breadcrumbItems = [
  { label: 'Home', path: '/admin/home' },
  { label: 'Roles and Permission', path: '/admin/roles-and-permission' }
]
</script>

<template>
  <div class="min-w-full h-12 flex items-center justify-between px-4">
    <h1 class="text-lg font-semibold">Roles and Permission</h1>
    <div class="flex items-center gap-2">
      <RouterLink to="/admin/roles-and-permission">
        <n-button>
          <MaterialIcon icon="SaveRound" class="w-4 h-4 mr-2" />
          <span class="text-xs">Update</span>
        </n-button>
      </RouterLink>
    </div>
  </div>
  <div class="flex-1">
    <Breadcrumb :items="breadcrumbItems" />

    <div class="space-y-3 px-4">
      <n-card class="space-y-4">
        <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
          <div class="flex items-center col-span-12 md:col-span-3">
            <label>Role</label>
          </div>
          <div class="col-span-12 md:col-span-9">
            <n-select size="small" />
          </div>
        </div>
      </n-card>

      <n-card>
        <n-collapse>
          <n-collapse-item title="Users" name="1">
            <n-checkbox-group>
              <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
                <div class="col-span-12 md:col-span-4">
                  <n-checkbox value="View" label="View" />
                </div>
                <div class="col-span-12 md:col-span-4">
                  <n-checkbox value="Create" label="Create" />
                </div>
                <div class="col-span-12 md:col-span-4">
                  <n-checkbox value="Update" label="Update" />
                </div>
                <div class="col-span-12 md:col-span-4">
                  <n-checkbox value="Remove" label="Remove" />
                </div>
              </div>
            </n-checkbox-group>
            <template #header-extra>
              <span>1/4</span>
            </template>
          </n-collapse-item>
          <n-collapse-item title="Roles and Permission" name="2">
            <n-checkbox-group>
              <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
                <div class="col-span-12 md:col-span-4">
                  <n-checkbox value="View" label="View" />
                </div>
                <div class="col-span-12 md:col-span-4">
                  <n-checkbox value="Update" label="Update" />
                </div>
              </div>
            </n-checkbox-group>
            <template #header-extra>
              <span>1/2</span>
            </template>
          </n-collapse-item>
          <n-collapse-item title="Integrations" name="3">
            <n-checkbox-group>
              <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
                <div class="col-span-12 md:col-span-4">
                  <n-checkbox value="View" label="View" />
                </div>
                <div class="col-span-12 md:col-span-4">
                  <n-checkbox value="Create" label="Create" />
                </div>
                <div class="col-span-12 md:col-span-4">
                  <n-checkbox value="Update" label="Update" />
                </div>
                <div class="col-span-12 md:col-span-4">
                  <n-checkbox value="Remove" label="Remove" />
                </div>
              </div>
            </n-checkbox-group>
            <template #header-extra>
              <span>1/4</span>
            </template>
          </n-collapse-item>
        </n-collapse>
      </n-card>
    </div>
  </div>
</template>
