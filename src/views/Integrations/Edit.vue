<script setup>
import MaterialIcon from '@/components/ui/icons/MaterialIcon.vue'
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
        <div class="w-full px-4 py-1.5">
            <div class="text-xs text-gray-500 bg-gray-100 rounded-sm space-x-1.5 px-2 py-1">
                <RouterLink to="/admin/home">Home</RouterLink>
                <span>/</span>
                <RouterLink to="/admin/integrations">Integrations</RouterLink>
                <span>/</span>
                <RouterLink to="/admin/integrations/edit">Edit</RouterLink>
            </div>
        </div>

        <div class="space-y-3 px-4">
            <n-card class="space-y-4">
                <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
                    <div class="flex items-center col-span-12 md:col-span-3">
                        <label>Integration</label>
                    </div>
                    <div class="col-span-12 md:col-span-9">
                        <n-select size="small" />
                    </div>
                </div>
            </n-card>

            <n-card class="space-y-4">
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
