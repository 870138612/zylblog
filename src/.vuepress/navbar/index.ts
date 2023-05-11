import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    { text: "分类", icon: "context", link: "/category/" },
    { text: "标签", icon: "tag", link: "/tag/" },
    { text: "时间轴", icon: "flow", link: "/timeline/" },
]);
