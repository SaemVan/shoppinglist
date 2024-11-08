import { createApp } from 'vue'
import '../themes/index.sass'
import router from './router'
import App from './App.vue'

const app = createApp(App)
    .use(router)

router.isReady().then(() => {
    app.mount('#app')
})
