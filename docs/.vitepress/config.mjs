import { defineConfig } from "vitepress";
// Constantes
import { nav } from "./constants/nav";
import { sidebar } from "./constants/sidebar";
import { socialLinks } from "./constants/socialLinks";

const siteTitle = "LucasTMartins";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: siteTitle,
  description: "Meu blog pessoal de tecnologia!",
  themeConfig: {
    lastUpdatedText: "Última atualização em",
    logo: "/LogoBlog.svg",
    siteTitle: siteTitle,
    nav,
    sidebar,
    socialLinks,
    search: {
      provider: 'local'
    },
  },
  base: "/blog/",
  head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]]
});