import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "分类", icon: "discover", link: "/category/" },
    { text: "标签", icon: "discover", link: "/tag/" },
    { text: "时间轴", icon: "discover", link: "/timeline/" },

]);
