import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {searchProPlugin} from "vuepress-plugin-search-pro";
export default defineUserConfig({
  base: "/",
  head: [
    // 设置 favor.ico，.vuepress/public 下
    [
      'link', { rel: 'icon', href: 'https://blog-1312634242.cos.ap-shanghai.myqcloud.com/markdown/image-20230513213019295.png' }
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
  plugins: [
    searchProPlugin({
      // // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          // @ts-ignore
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          // @ts-ignore
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),

  ]
});
