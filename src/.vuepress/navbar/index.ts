import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    { text: "分类", icon: "fenlei", link: "/category/" },
    { text: "标签", icon: "tag", link: "/tag/" },
    { text: "时间轴", icon: "timeAxis", link: "/timeline/" },
]);
