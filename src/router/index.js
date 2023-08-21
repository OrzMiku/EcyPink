import { createWebHashHistory, createRouter } from "vue-router";
import pinia from "@/stores";
import { useSiteConfigStore } from "@/stores/siteConfig.js";

const site = useSiteConfigStore(pinia);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/Home",
    },
    {
      path: "/Home",
      name: "Home",
      component: () => import("../views/About/About.vue"),
      meta: {
        title: "关于",
        description: "神奇の赵贰的个人主页",
      },
    },
    {
      path: "/Links",
      name: "Links",
      component: () => import("../views/Links/Links.vue"),
      meta: {
        title: "友情链接",
        description: "EcyPink - 友情链接",
        keywords: "友情链接",
      },
    },
    {
      path: "/Setu",
      name: "Setu",
      component: () => import("../views/Setu/Setu.vue"),
      meta: {
        title: "瑟图",
        description: "瑟瑟哒咩！",
        keywords: "瑟图",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
    ? site["title"] + " - " + to.meta.title
    : site["title"];
  document
    .querySelector('meta[name="description"]')
    .setAttribute(
      "content",
      to.meta.description ? to.meta.description : site["description"]
    );
  document
    .querySelector('meta[name="keywords"]')
    .setAttribute(
      "content",
      to.meta.keywords
        ? site["keywords"] + "," + to.meta.keywords
        : site["keywords"]
    );
  next();
});

export default router;
