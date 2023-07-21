import {createRouter, createWebHistory} from "vue-router"

import HomePage from "../views/HomePage.vue"
import ItemPage from "../views/ItemPage.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {   
            path:'/',
            name:'Home',
            component: HomePage
        },
        {   
            path:'/item',
            name:'Item',
            component: ItemPage
        }
    ]
})

export default router