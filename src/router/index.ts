import { createRouter, createWebHistory } from 'vue-router'

const Guest = () => import('@/components/layouts/guest/App.vue')
const Admin = () => import('@/components/layouts/auth/App.vue')

const Setup = () => import('@/views/Users/Setup.vue')
const Login = () => import('@/views/Users/Login.vue')

const Home = () => import('@/views/Home/Index.vue')

const Users = () => import('@/views/Users/Index.vue')
const CreateUser = () => import('@/views/Users/Create.vue')
const EditUser = () => import('@/views/Users/Edit.vue')

const RolesAndPermission = () => import('@/views/RolesAndPermission/Index.vue')

const Integrations = () => import('@/views/Integrations/Index.vue')
const CreateIntegration = () => import('@/views/Integrations/Create.vue')
const EditIntegration = () => import('@/views/Integrations/Edit.vue')

const Settings = () => import('@/views/Settings/Index.vue')

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
        path: 'login',
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
