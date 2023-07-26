import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "主页", icon: "discovery", link: "/" },
  { text: "文章", icon: "articlelist", link: "/article/" },
  { text: "分类", icon: "fenlei", link: "/category/" },
  { text: "标签", icon: "tag", link: "/tag/" },
  { text: "时间轴", icon: "timeline", link: "/timeline/" },
  {
    text: "友链",
    icon: "youlian",
    link:"/friendLinks"
  },
]);
