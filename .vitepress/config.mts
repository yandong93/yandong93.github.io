import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "衍东",
  description: "Notebook",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yandong93/yandong93.github.io' }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lightModeSwitchTitle: '浅色模式',
    darkModeSwitchTitle: '深色模式',
    returnToTopLabel: '返回顶部'
  }
})
