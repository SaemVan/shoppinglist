import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Landing.vue'
import DeletedItems from '../pages/DeletedItems.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, props: true },
        { path: '/delete', component: DeletedItems, props: true }
    ]
})

export default router