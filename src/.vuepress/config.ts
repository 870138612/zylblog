import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import { searchPlugin} from "@vuepress/plugin-search";
import {mdEnhance, sitemap} from "vuepress-theme-hope";


export default defineUserConfig({

  base: "/",
  head: [
    ["meta", {name: "robots", content: "all"}],
    ["meta", {"http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate",}],
    ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
    ["meta", {"http-equiv": "Expires", content: "0"}],
    // 设置 favor.ico，.vuepress/public 下
    [
      'link', {rel: 'icon', href: '/assets/icon/favicon.ico'}
    ]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "LIANG",
      description: "LiangBlog",
    },
  },
  theme,
  shouldPrefetch: false,
  plugins: [
    searchPlugin({
      // https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
      // 排除首页
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
      hotKeys: ["s", "/"],
      // 用于在页面的搜索索引中添加额外字段
      getExtraFields: () => [],
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
});
