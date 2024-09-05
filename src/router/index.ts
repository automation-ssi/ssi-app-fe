import { createRouter, createWebHistory } from 'vue-router'

import Guest from '@/components/layouts/guest/App.vue'
import Admin from '@/components/layouts/auth/App.vue'

import Setup from '@/views/Users/Setup.vue'
import Login from '@/views/Users/Login.vue'

import Home from '@/views/Home/Index.vue'

import Users from '@/views/Users/Index.vue'
import CreateUser from '@/views/Users/Create.vue'
import EditUser from '@/views/Users/Edit.vue'

import RolesAndPermission from '@/views/RolesAndPermission/Index.vue'

import Integrations from '@/views/Integrations/Index.vue'
import CreateIntegration from '@/views/Integrations/Create.vue'
import EditIntegration from '@/views/Integrations/Edit.vue'

import Settings from '@/views/Settings/Index.vue'

const routes = [
  {
    path: '/',
    component: Guest,
    children: [
      {
        name: 'setup',
        path: 'setup',
        component: Setup
      },
      {
        name: 'login',
        path: '',
        component: Login
      }
    ]
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        name: 'admin.home',
        path: 'home',
        component: Home
      },
      {
        name: 'admin.users',
        path: 'users',
        children: [
          {
            name: 'admin.users',
            path: '',
            component: Users
          },
          {
            name: 'admin.users.create',
            path: 'create',
            component: CreateUser
          },
          {
            name: 'admin.users.edit',
            path: 'edit',
            component: EditUser
          }
        ]
      },
      {
        name: 'admin.roles-and-permission',
        path: 'roles-and-permission',
        component: RolesAndPermission
      },
      {
        name: 'admin.integrations',
        path: 'integrations',
        children: [
          {
            name: 'admin.integrations',
            path: '',
            component: Integrations
          },
          {
            name: 'admin.integrations.create',
            path: 'create',
            component: CreateIntegration
          },
          {
            name: 'admin.integrations.edit',
            path: 'edit',
            component: EditIntegration
          }
        ]
      },
      {
        name: 'admin.settings',
        path: 'settings',
        component: Settings
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
