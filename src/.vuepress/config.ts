import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {searchProPlugin} from "vuepress-plugin-search-pro";
export default defineUserConfig({
  base: "/",
  head: [
    // 设置 favor.ico，.vuepress/public 下
    [
      'link', { rel: 'icon', href: '/favicon.ico' }
    ]
  ],
    "/": {
      lang: "zh-CN",
      title: "LIANG",
      description: "LiangBlog",
    },
  theme,
  plugins: [
    searchProPlugin({
      // // 索引全部内容
      indexContent: true,
     
    }),
  ]
});
