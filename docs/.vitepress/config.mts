import { defineConfig } from 'vitepress'
import { nav } from './relaConf';
import { sidebar } from './relaConf';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-demo-hjhblog/',
  title: "A Lazy Web Worker",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'/logo.webp',

    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    outline: {
      level: [2, 6],
      label: '目录'
    }
  }
})
