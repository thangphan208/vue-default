import {createRouter , createWebHistory} from "vue-router";

import defaultLayout from '../components/layout/defaultLayout'
import login from '../views/Auth/login.vue'

const routes = [
    {
        path : '/',
        component:defaultLayout,
    },
    {
        path:'/login',
        meta:{
            layout: 'blank'
        },
        component: login,
    }

]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router