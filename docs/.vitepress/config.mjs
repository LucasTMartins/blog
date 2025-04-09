import { defineConfig } from "vitepress";
// Constantes
import { nav } from "./constants/nav";
import { sidebar } from "./constants/sidebar";
import { socialLinks } from "./constants/socialLinks";
import { footer } from "./constants/footer";

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
    footer
  },
  base: "/",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]]
});