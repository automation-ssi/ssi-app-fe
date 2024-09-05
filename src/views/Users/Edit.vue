<script setup>
import MaterialIcon from '@/components/ui/icons/MaterialIcon.vue'
import Breadcrumb from '@/components/ui/navigations/Breadcrumb.vue'

const breadcrumbItems = [
  { label: 'Home', path: '/admin/home' },
  { label: 'Users', path: '/admin/users' },
  { label: 'Edit', path: '/admin/users/edit' }
]
</script>

<template>
  <div class="min-w-full h-12 flex items-center justify-between px-4">
    <h1 class="text-lg font-semibold">Users</h1>
    <div class="flex items-center gap-2">
      <RouterLink to="/admin/users">
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
        <div class="space-y-3">
          <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
            <div class="flex items-center col-span-12 md:col-span-3">
              <label>Name</label>
            </div>
            <div class="col-span-12 md:col-span-9">
              <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
                <div class="col-span-12 md:col-span-6">
                  <n-input size="small" placeholder="Firstname" />
                </div>
                <div class="col-span-12 md:col-span-6">
                  <n-input size="small" placeholder="Lastname" />
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
            <div class="flex items-center col-span-12 md:col-span-3">
              <label>Username</label>
            </div>
            <div class="col-span-12 md:col-span-9">
              <n-input size="small" placeholder="Username" />
            </div>
          </div>
          <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
            <div class="flex items-center col-span-12 md:col-span-3">
              <label>Email</label>
            </div>
            <div class="col-span-12 md:col-span-9">
              <n-input type="email" size="small" placeholder="Email address" />
            </div>
          </div>
          <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
            <div class="flex items-center col-span-12 md:col-span-3">
              <label>Password</label>
            </div>
            <div class="col-span-12 md:col-span-9">
              <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
                <div class="col-span-12 md:col-span-4">
                  <n-input
                    type="password"
                    placeholder="Current Password"
                    show-password-on="click"
                    size="small"
                    :maxlength="8"
                  />
                </div>
                <div class="col-span-12 md:col-span-4">
                  <n-input
                    type="password"
                    placeholder="Password"
                    show-password-on="click"
                    size="small"
                    :maxlength="8"
                  />
                </div>
                <div class="col-span-12 md:col-span-4">
                  <n-input
                    type="password"
                    placeholder="Confirm Password"
                    show-password-on="click"
                    size="small"
                    :maxlength="8"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
            <div class="col-span-12 md:col-span-2 md:col-start-4">
              <RouterLink to="/admin/users">
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
