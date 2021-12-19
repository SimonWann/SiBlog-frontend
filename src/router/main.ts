import {createWebHistory, createRouter} from "vue-router"


const routes = [
    {
        path: '/',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/article',
        component: () => import('@/pages/Articles.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})