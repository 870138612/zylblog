import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import { searchPlugin} from "@vuepress/plugin-search";
import {blog, mdEnhance} from "vuepress-theme-hope";
// @ts-ignore
import {autoCatalogPlugin} from "vuepress-plugin-auto-catalog";
import {RouteMeta} from "vue-router";

// @ts-ignore
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
    autoCatalogPlugin({
      index:true,
      locales:{
        "/":{
          title:" "
        }
      },
      iconGetter:(page)=>page.frontmatter.icon,
      orderGetter:(page)=> 1
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "标题搜索",
        }
      },
      maxSuggestions: 10
    }),
  ],
});
