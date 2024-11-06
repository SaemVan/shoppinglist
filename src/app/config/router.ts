import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Landing.vue'
import DeleteItemForm from '../pages/DeleteItemForm.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, props: true },
        { path: '/delete', component: DeleteItemForm, props: true }
    ]
})

export default router