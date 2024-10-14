import { hopeTheme } from "vuepress-theme-hope";

import {zhNavbar} from "./navbar.js";
import {zhSidebar} from "./siderbar.js";


export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  logo: "/logo.png",
  author: {
    name: "Zzz",
    url: "https://ylzhong.top",
  },
  fullscreen: true,
  contributors: false,
  iconAssets: "//at.alicdn.com/t/c/font_4062992_y928sk4fsqe.css",
  docsDir: "src",
  repo: "https://github.com/870138612/870138612.github.io",
  //根据文件的名称进行排序
  sidebarSorter: ["readme", "order", "filename"],
      navbar: zhNavbar,
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
    blog: {
      sidebarDisplay:"mobile",
      intro: "/intro.html",
    },
  plugins: {
    git: true,
    blog: true,
  },
});
