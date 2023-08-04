import { createWebHashHistory, createRouter } from 'vue-router'

const Home = () => import('../views/About.vue')
const Links = () => import('../views/Links.vue')
const Setu = () => import('../views/Setu.vue')

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/Home',
        },
        {
            path: '/Home',
            name: "Home",
            component: Home,
            meta: {
                title: "关于"
            }
        },
        {
            path: '/Links',
            name: "Links",
            component: Links,
            meta: {
                title: "友情链接"
            }
        },
        {
            path: '/Setu',
            name: "Setu",
            component: Setu,
            meta: {
                title: "瑟图"
            }
        }
    ]
})

export default router