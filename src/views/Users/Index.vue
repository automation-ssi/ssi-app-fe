<script setup>
import MaterialIcon from '@/components/ui/icons/MaterialIcon.vue'
import Breadcrumb from '@/components/ui/navigations/Breadcrumb.vue'

const breadcrumbItems = [
  { label: 'Home', path: '/admin/home' },
  { label: 'Users', path: '/admin/users' }
]
</script>

<template>
  <div class="min-w-full h-12 flex items-center justify-between px-4">
    <h1 class="text-lg font-semibold">Users</h1>
    <div class="flex items-center gap-2">
      <RouterLink to="/admin/users/create">
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
      <n-card size="small" class="space-y-4">
        <div class="space-y-3">
          <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
            <div class="col-span-12 md:col-span-4">
              <span class="text-xs">Search</span>
              <n-input type="text" placeholder="Search" size="small" />
            </div>
            <div class="col-span-12 md:col-span-2">
              <span class="text-xs">Role</span>
              <n-select size="small" />
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
                <th>Username</th>
                <th>Role</th>
                <th>Status</th>
                <th>Date Created</th>
                <th width="200">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>[text]</td>
                <td>[text]</td>
                <td>[text]</td>
                <td>[text]</td>
                <td>[text]</td>
                <td>
                  <div class="space-x-1">
                    <n-button size="small">
                      <MaterialIcon icon="SecurityRound" class="w-4 h-4 mr-2" />
                      <span>Permissions</span>
                    </n-button>
                    <RouterLink to="/admin/users/edit">
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
