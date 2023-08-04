import { createWebHashHistory, createRouter } from 'vue-router'

const Home = () => import('../views/About.vue')
const Links = () => import('../views/Links.vue')
const Setu = () => import('../views/Setu.vue')

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/Home',
            name: "Home",
            component: Home
        },
        {
            path: '/Links',
            name: "Links",
            component: Links
        },
        {
            path: '/Setu',
            name: "Setu",
            component: Setu
        }
    ]
})

export default router