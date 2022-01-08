import {createWebHistory, createRouter} from "vue-router"


const routes = [
    {
        path: '/',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/article',
        component: () => import('@/pages/Articles.vue')
    },
    {
        path: '/edit',
        component: () => import('@/pages/EditArea.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router