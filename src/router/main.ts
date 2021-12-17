import {createWebHistory, createRouter} from "vue-router"


const routes = [
    {
        path: '/',
        component: () => import('@/pages/Home.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})