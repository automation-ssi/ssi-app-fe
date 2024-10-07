<script setup>
import MaterialIcon from '@/components/ui/icons/MaterialIcon.vue'
import Breadcrumb from '@/components/ui/navigations/Breadcrumb.vue'

const breadcrumbItems = [{ label: 'Home', path: '/admin/home' }]

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
          <div class="bg-white cursor-pointer border rounded-sm">
            <n-dropdown trigger="click" placement="bottom-start" :options="options">
              <div class="flex items-end justify-between gap-1.5 px-3 py-1.5">
                <span class="font-semibold">Instana Dashboard</span>
                <MaterialIcon icon="ArrowForwardIosRound" class="w-3 h-3 rounded-sm rotate-45" />
              </div>
            </n-dropdown>
          </div>
        </div>
        <div class="col-span-12 md:col-span-2 md:col-start-11">
          <a href="https://172.1.87.254/#/home" target="_blank">
            <n-button class="w-full">
              <span class="text-xs">Go to Instana</span>
              <MaterialIcon icon="ArrowForwardRound" class="w-4 h-4 ml-2" />
            </n-button>
          </a>
        </div>
      </div>

      <n-tabs type="line" animated>
        <n-tab-pane name="wnm" tab="Websites & Mobile Apps">
          <div class="space-y-3">
            <n-card size="small" title="Websites">
              <n-table size="small" :single-line="false">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Page views</th>
                    <th>OnLoad times</th>
                    <th>Health</th>
                    <th width="85">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>[text]</td>
                    <td>[graph / count]</td>
                    <td>[graph / count]</td>
                    <td>[icon]</td>
                    <td>
                      <div class="space-x-1">
                        <RouterLink to="/admin/instana/websites">
                          <n-button size="small">
                            <MaterialIcon icon="RemoveRedEyeOutlined" class="w-4 h-4 mr-2" />
                            <span>View</span>
                          </n-button>
                        </RouterLink>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </n-table>
            </n-card>

            <n-card size="small" title="Mobile Apps">
              <n-table size="small" :single-line="false">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Sessions</th>
                    <th>Views</th>
                    <th>Health</th>
                    <th width="85">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>[text]</td>
                    <td>[count]</td>
                    <td>[graph / count]</td>
                    <td>[icon]</td>
                    <td>
                      <div class="space-x-1">
                        <n-button size="small">
                          <MaterialIcon icon="RemoveRedEyeOutlined" class="w-4 h-4 mr-2" />
                          <span>View</span>
                        </n-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </n-table>
            </n-card>
          </div>
        </n-tab-pane>
        <n-tab-pane name="apps" tab="Applications">
          <div class="space-y-3">
            <n-card size="small" title="Applications">
              <n-table size="small" :single-line="false">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Services</th>
                    <th>Calls</th>
                    <th>Latency</th>
                    <th>Health</th>
                    <th width="85">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>[text]</td>
                    <td>[count]</td>
                    <td>[graph / count]</td>
                    <td>[graph / count]</td>
                    <td>[icon]</td>
                    <td>
                      <div class="space-x-1">
                        <n-button size="small">
                          <MaterialIcon icon="RemoveRedEyeOutlined" class="w-4 h-4 mr-2" />
                          <span>View</span>
                        </n-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </n-table>
            </n-card>
          </div>
        </n-tab-pane>
        <n-tab-pane name="infra" tab="Infrastructure">
          <div class="space-y-3">
            <n-card size="small" title="Infrastructure">
              <n-table size="small" :single-line="false">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Zone</th>
                    <th>Technologies</th>
                    <th>OS</th>
                    <th>Number of CPUs</th>
                    <th>CPU usage</th>
                    <th>Health</th>
                    <th width="85">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>[text]</td>
                    <td>[text]</td>
                    <td>[text]</td>
                    <td>[text]</td>
                    <td>[count]</td>
                    <td>[graph / count]</td>
                    <td>[icon]</td>
                    <td>
                      <div class="space-x-1">
                        <n-button size="small">
                          <MaterialIcon icon="RemoveRedEyeOutlined" class="w-4 h-4 mr-2" />
                          <span>View</span>
                        </n-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </n-table>
            </n-card>
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>
