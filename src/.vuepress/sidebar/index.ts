import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      collapsible: true,
      text: "探索408",
      icon: "discovery",
      prefix: "discovery/",
      children: "structure",
    },
    {
      collapsible: true,
      text: "笔记",
      icon: "note",
      prefix: "note/",
      children: "structure",
    },
    "intro"
  ],
});
