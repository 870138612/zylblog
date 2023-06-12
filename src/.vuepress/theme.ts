import {hopeTheme} from "vuepress-theme-hope";
import {zhNavbar} from "./navbar/index.js";
import {zhSidebar} from "./sidebar/index.js";


export default hopeTheme({
  logo: "/logo.jpg",

  author: {
    name: "ZYL1210",
    url: "https://localhost",
  },
  // pure: true,
  contributors: false,
  iconAssets: "//at.alicdn.com/t/c/font_4062992_6rftfgxadsq.css",
  docsDir: "src",
  repo: "https://github.com/870138612/870138612.github.io.git",
  //根据文件的名称进行排序
  sidebarSorter: ["readme", "order", "filename"],

  // navbar
  navbar: zhNavbar,
  // sidebar
  sidebar: zhSidebar,
  footer: "Copyright © 2023-present Liang",
  copyright: false,
  displayFooter: true,
  blog: {
    sidebarDisplay:"mobile",
    description: "Java菜鸟",
    intro: "/intro.html",
  },

  plugins: {
    blog: true,
    mdEnhance: {
      container: true,
      tabs: true,
      align: true,

    },
    comment: {
      provider: "Giscus",
      repo: "870138612/zyl",
      repoId: "MDEwOlJlcG9zaXRvcnkyNDAwOTMxMzE=",
      category:"Announcements",
      categoryId:"DIC_kwDODk-Hy84CWgpw"
    },
  },
});
