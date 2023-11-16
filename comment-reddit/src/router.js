import { createRouter, createWebHistory } from "vue-router"
import app from '../src/App.vue'

const routes = [
    { 
        path: '/thread/:id',
        name:'thread-router',
        component: app
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;