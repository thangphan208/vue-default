import {createRouter, createWebHistory} from "vue-router";

import defaultLayout from '../components/layout/defaultLayout'
import login from '../views/Auth/login.vue'
import index from '../views/post/index'
const routes = [
    {
        path: '/',
        component: defaultLayout,
    },
    {
        path: '/login',
        meta: {
            layout: 'blank'
        },
        component: login,
    },
    {
        path: '/post',
        meta: {
            layout: 'blank'
        },
        component: index,
    }

]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router