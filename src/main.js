import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const site = {
    title: "EcyPink"
}

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = site['title'] + " - " + to.meta.title
    }
    next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
