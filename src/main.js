import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const site = {
    title: "EcyPink",
    description: "神奇の赵贰的个人主页",
    keywords: "神奇の赵贰,OrzMiku,个人主页,EcyPink,MikuShow",
}

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? site['title'] + " - " + to.meta.title : site['title'];
    document.querySelector('meta[name="description"]').setAttribute('content', to.meta.description ? to.meta.description : site['description'])
    document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.keywords ? site['keywords'] + ',' + to.meta.keywords : site['keywords'])
    next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
