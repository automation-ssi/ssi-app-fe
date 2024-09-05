<script setup>
import { ref } from 'vue'
import MaterialIcon from '@/components/ui/icons/MaterialIcon.vue'

const sidebar = ref(true)

const navigations = ref([
    {
        name: 'Home',
        href: '/admin/home',
        icon: 'HomeRound'
    },
    {
        name: 'Users',
        href: ['/admin/users', '/admin/roles-and-permission'],
        open: false,
        icon: 'SupervisedUserCircleFilled',
        children: [
            {
                name: 'Lists',
                href: '/admin/users',
                icon: 'FormatListBulletedRound'
            },
            {
                name: 'Roles and Permission',
                href: '/admin/roles-and-permission',
                icon: 'SecurityRound'
            }
        ]
    },
    {
        name: 'Integrations',
        href: '/admin/integrations',
        icon: 'IntegrationInstructionsOutlined'
    }
])
</script>

<template>
    <div class="flex divide-x text-sm z-10">
        <div v-show="sidebar" class="w-64 divide-y flex flex-col h-full">
            <div class="min-w-full h-12 flex items-center relative">
                <MaterialIcon
                    icon="MenuRound"
                    v-on:click="sidebar = false"
                    class="bg-primary absolute -right-2 w-4 h-4 border rounded-sm cursor-pointer"
                />
            </div>
            <div class="flex-1 overflow-y-auto">
                <nav>
                    <ul class="space-y-1 my-2">
                        <li v-for="nav in navigations" class="px-4" :key="nav.name">
                            <div v-if="nav.children" class="space-y-1">
                                <div
                                    v-on:click="nav.open = !nav.open"
                                    v-bind:class="[
                                        nav.href.includes($route.href) ? '' : 'hover:bg-zinc-100',
                                        'flex items-center justify-between rounded-md cursor-pointer px-3 py-1.5'
                                    ]"
                                >
                                    <div class="flex items-center gap-2">
                                        <MaterialIcon :icon="nav.icon" class="w-5 h-5" />
                                        <span>{{ nav.name }}</span>
                                    </div>

                                    <MaterialIcon
                                        icon="ArrowForwardIosRound"
                                        v-bind:class="
                                            nav.open || (nav.open && nav.href.includes($route.href))
                                                ? 'rotate-90'
                                                : ''
                                        "
                                        class="w-3 h-3 rounded-sm"
                                    />
                                </div>
                                <ul
                                    v-show="
                                        nav.open || (nav.open && nav.href.includes($route.href))
                                    "
                                    class="space-y-1"
                                >
                                    <li v-for="sub_nav in nav.children" :key="sub_nav.name">
                                        <RouterLink :to="sub_nav.href">
                                            <div
                                                v-bind:class="[
                                                    $route.path == sub_nav.href
                                                        ? 'bg-accent text-primary'
                                                        : 'hover:bg-zinc-100',
                                                    'flex items-center gap-2 rounded-md cursor-pointer px-3 py-1.5'
                                                ]"
                                            >
                                                <MaterialIcon
                                                    :icon="sub_nav.icon"
                                                    class="w-5 h-5"
                                                />
                                                <span>{{ sub_nav.name }}</span>
                                            </div>
                                        </RouterLink>
                                    </li>
                                </ul>
                            </div>
                            <div v-else>
                                <RouterLink :to="nav.href">
                                    <div
                                        v-bind:class="[
                                            $route.path == nav.href
                                                ? 'bg-accent text-primary'
                                                : 'hover:bg-zinc-100',
                                            'flex items-center gap-2 rounded-md cursor-pointer px-3 py-1.5'
                                        ]"
                                    >
                                        <MaterialIcon :icon="nav.icon" class="w-5 h-5" />
                                        <span>{{ nav.name }}</span>
                                    </div>
                                </RouterLink>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="min-w-full h-12 flex items-center">
                <nav class="w-full">
                    <ul class="space-y-1">
                        <li class="px-4">
                            <RouterLink to="/admin/settings">
                                <div
                                    v-bind:class="[
                                        $route.path == '/admin/settings'
                                            ? 'bg-accent text-primary'
                                            : 'hover:bg-zinc-100',
                                        'flex items-center gap-2 rounded-md cursor-pointer px-3 py-1.5'
                                    ]"
                                >
                                    <MaterialIcon icon="SettingsRound" class="w-5 h-5" />
                                    <span>Settings</span>
                                </div>
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div v-show="sidebar == false" class="w-16 divide-y flex flex-col">
            <div class="min-w-full h-12 flex items-center justify-center relative">
                <div
                    class="flex items-center justify-center w-8 h-8 bg-secondary border rounded-full"
                >
                    <MaterialIcon icon="DashboardRound" class="w-6 h-6 rotate-45" />
                </div>
                <MaterialIcon
                    icon="MenuRound"
                    v-on:click="sidebar = true"
                    class="bg-primary absolute -right-2 w-4 h-4 border rounded-sm cursor-pointer"
                />
            </div>
            <div class="flex-1">
                <nav>
                    <ul class="space-y-1 my-2">
                        <li v-for="nav in navigations" class="group relative px-2" :key="nav.name">
                            <div v-if="nav.children">
                                <div
                                    v-bind:class="[
                                        nav.href.includes($route.href)
                                            ? 'bg-accent text-primary'
                                            : 'group-hover:bg-zinc-100',
                                        'flex items-center justify-center rounded-md cursor-pointer py-1.5'
                                    ]"
                                >
                                    <MaterialIcon :icon="nav.icon" class="w-5 h-5" />
                                </div>

                                <div
                                    v-bind:class="[
                                        nav.href.includes($route.href) ? '' : 'text-black',
                                        'bg-primary absolute space-y-1 hidden shadow-md rounded-r-md overflow-hidden w-48 top-0 left-16 group-hover:block'
                                    ]"
                                >
                                    <div
                                        class="flex justify-between items-center gap-x-3 rounded-r-md px-4 py-2"
                                    >
                                        <div class="flex items-center gap-2">
                                            <span>{{ nav.name }}</span>
                                        </div>
                                        <MaterialIcon
                                            icon="ArrowForwardIosRound"
                                            class="w-3 h-3 rounded-sm"
                                        />
                                    </div>

                                    <ul class="space-y-1">
                                        <li v-for="sub_nav in nav.children" :key="sub_nav.name">
                                            <RouterLink :to="sub_nav.href">
                                                <div
                                                    class="flex items-center gap-2 rounded-md cursor-pointer px-4 py-2"
                                                >
                                                    <span>{{ sub_nav.name }}</span>
                                                </div>
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div v-else>
                                <RouterLink :to="nav.href">
                                    <div
                                        v-bind:class="[
                                            $route.path == nav.href
                                                ? 'bg-accent text-primary'
                                                : 'group-hover:bg-zinc-100',
                                            'flex items-center justify-center rounded-md cursor-pointer py-1.5'
                                        ]"
                                    >
                                        <MaterialIcon :icon="nav.icon" class="w-5 h-5" />
                                    </div>
                                </RouterLink>

                                <div
                                    v-bind:class="[
                                        $route.path == nav.href ? '' : 'text-black',
                                        'bg-primary absolute hidden shadow-md rounded-r-md w-48 top-0 left-16 group-hover:block'
                                    ]"
                                >
                                    <label
                                        class="flex justify-between items-center gap-x-3 rounded-r-md px-4 py-2"
                                    >
                                        <span>{{ nav.name }}</span>
                                    </label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="min-w-full h-12 flex items-center">
                <nav class="w-full">
                    <ul class="space-y-1">
                        <li class="group relative px-2">
                            <RouterLink to="/admin/settings">
                                <div
                                    v-bind:class="[
                                        $route.path == '/admin/settings'
                                            ? 'bg-accent text-primary'
                                            : 'group-hover:bg-zinc-100',
                                        'flex items-center justify-center rounded-md cursor-pointer py-1.5'
                                    ]"
                                >
                                    <MaterialIcon icon="SettingsRound" class="w-5 h-5" />
                                </div>
                            </RouterLink>

                            <div
                                v-bind:class="[
                                    $route.path == '/admin/settings' ? '' : 'bg-primary text-black',
                                    'absolute hidden shadow-md rounded-r-md w-48 top-0 left-16 group-hover:block'
                                ]"
                            >
                                <label
                                    class="flex justify-between items-center gap-x-3 rounded-r-md px-4 py-2"
                                >
                                    <span>Settings</span>
                                </label>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
