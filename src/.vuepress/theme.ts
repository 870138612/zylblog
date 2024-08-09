import { hopeTheme } from "vuepress-theme-hope";

import {zhNavbar} from "./navbar/index.js";
import {zhSidebar} from "./sidebar/index.js";
import { catalogPlugin } from '@vuepress/plugin-catalog'


export default hopeTheme({

  extendsPage: (page) => {
    // 在 routeMeta 中设置目录信息
    page.routeMeta = {
      // 目录标题
      title: page.title,
      icon: page.icon
      // ... 其他信息
    }
  },
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  logo: "/logo.png",

  author: {
    name: "Zzz",
    url: "https://ylzhong.top",
  },
  //

  contributors: false,
  iconAssets: "//at.alicdn.com/t/c/font_4062992_b2cz8b2tqwo.css",
  docsDir: "src",
  repo: "https://github.com/870138612/870138612.github.io",
  //根据文件的名称进行排序
  sidebarSorter: ["readme", "order", "filename"],

      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: "终将美好，我们的春夏秋冬。",
      copyright: "Copyright © 2023-present Liang",
      displayFooter: true,
      pageInfo: [
        "Author",
        "Category",
        "Tag",
        "Date",
        "Original",
        "Word",
        "ReadingTime",
      ],

    /**
     * Chinese locale config
     */
    blog: {
      sidebarDisplay:"mobile",
      intro: "/intro.html",
      // medias: {
      //   Gitee: "https://gitee.com/SnailClimb",
      // },
    },

  plugins: {

    blog: true,
    mdEnhance: {
      katex: true,
      // 使用 mathjax 启用 TeX 支持
      mathjax: true,

      align: true,
      hint: true,
    },
    // comment: {
    //   provider: "Giscus",
    //   lazyLoading: false,
    //   repo: "870138612/zyl",
    //   repoId: "R_kgDOJw1i1g",
    //   category:"Announcements",
    //   categoryId:"DIC_kwDOJw1i1s4CXSr9"
    // },

  },
});
