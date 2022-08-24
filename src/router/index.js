import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import('@/views/LoginPage'),
        meta: {
            name: 'Login'
        }
    },
    {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: () => import('@/views/PrivacyPolicy'),
        meta: {
            name: 'PrivacyPolicy'
        }
    },
    {
        path: '/terms-of-service',
        name: 'termsOfService',
        component: () => import('@/views/TermsOfService'),
        meta: {
            name: 'termsOfService'
        }
    },
    {
        path: '/withdraw-page',
        name: 'WithdrawPage',
        component: () => import('@/views/WithdrawPage'),
        meta: {
            name: 'WithdrawPage'
        }
    },
    {
        path: '/profile',
        name: 'ProfilePage',
        component: () => import('@/views/ProfilePage'),
        beforeEach: (to, from, next) => {
            if (!localStorage.getItem('jwt')) {
                next({name: 'Login'})
            } else {
                next()
            }
        }
    },
    {
        path: '/terminal/:id',
        name: 'TerminalPage',
        component: () => import('@/views/Terminal')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
