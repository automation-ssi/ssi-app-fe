<script setup>
import MaterialIcon from '@/components/ui/icons/MaterialIcon.vue'
</script>

<template>
    <div class="flex items-center justify-center h-screen">
        <n-card class="w-[350px] py-10">
            <div class="space-y-6">
                <div
                    class="flex items-center justify-center w-16 h-16 bg-secondary border rounded-full"
                >
                    <MaterialIcon icon="DashboardRound" class="w-14 h-14 rotate-45" />
                </div>
                <div class="space-y-3">
                    <n-input type="text" placeholder="Username" />
                    <n-input
                        type="password"
                        placeholder="Password"
                        show-password-on="click"
                        :maxlength="8"
                    />
                </div>

                <div class="grid grid-cols-12 gap-x-3 gap-y-1.5">
                    <div class="col-span-12 md:col-span-6 md:col-start-7">
                        <RouterLink to="/admin/home">
                            <n-button class="w-full">
                                <span>Login</span>
                                <MaterialIcon icon="ArrowForwardRound" class="w-4 h-4 ml-2" />
                            </n-button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </n-card>
    </div>
</template>
