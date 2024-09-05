import { createRouter, createWebHistory } from 'vue-router'

import Guest from '@/components/layouts/guest/App.vue'
import Admin from '@/components/layouts/auth/App.vue'

import Setup from '@/views/Users/SetupView.vue'
import Login from '@/views/Users/LoginView.vue'

import Home from '@/views/Home/IndexView.vue'

import Users from '@/views/Users/IndexView.vue'
import CreateUser from '@/views/Users/CreateView.vue'
import EditUser from '@/views/Users/EditView.vue'

import RolesAndPermission from '@/views/RolesAndPermission/IndexView.vue'

import Integrations from '@/views/Integrations/IndexView.vue'
import CreateIntegration from '@/views/Integrations/CreateView.vue'
import EditIntegration from '@/views/Integrations/EditView.vue'

import Settings from '@/views/Settings/IndexView.vue'

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
