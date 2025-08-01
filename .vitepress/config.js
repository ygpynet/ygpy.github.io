import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import head from './theme/config/head';
import themeConfig from './theme/themeConfig';

// 不要“/”结尾
const webSiteUrl = 'https://ygpy.github.io';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一个朋友",
  description: "出海工具推荐网站。涵盖机场推荐、软件列表、网址导航。一站式解决你的出海难题。",
  head,
  lang: 'zh-CN',
  srcDir: './src',
  metaChunk: true,
  lastUpdated: true,
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    image: {
      lazyLoading: true
    }
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  sitemap: {
    hostname: webSiteUrl,
    lastmodDateOnly: false
  },
  transformPageData(pageData) {
    const canonicalUrl = `${webSiteUrl}/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  },
  themeConfig
})