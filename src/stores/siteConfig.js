import site from "@/site.config.js";
import { defineStore } from "pinia";

export const useSiteConfigStore = defineStore("siteConfig", {
  state: () => {
    return site;
  },
});
