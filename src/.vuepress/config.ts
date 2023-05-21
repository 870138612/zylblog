import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {searchProPlugin} from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",
  head: [
      // ["meta", {name: "robots", content: "all"}],
    // ["meta", {"http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate",}],
    // ["meta", {"http-equiv": "Pragma", content: "no-cache"}],

    // ["meta", {"http-equiv": "Expires", content: "0"}],
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
    searchProPlugin({
      // // 索引全部内容
      indexContent: true,
    }),
  ]
});
