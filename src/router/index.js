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
                title: "关于",
                description: "神奇の赵贰的个人主页",
            }
        },
        {
            path: '/Links',
            name: "Links",
            component: Links,
            meta: {
                title: "友情链接",
                description: "EcyPink - 友情链接",
            }
        },
        {
            path: '/Setu',
            name: "Setu",
            component: Setu,
            meta: {
                title: "瑟图",
                description: "瑟瑟哒咩！"
            }
        }
    ]
})

export default router