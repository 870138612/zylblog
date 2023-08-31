import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [

    {
      collapsible: true,
      text: "Java",
      icon: "java",
      prefix: "java/",
      children: "structure",
    },
    {
      collapsible: true,
      text: "数据库",
      icon: "database",
      prefix: "database/",
      children: "structure",
    },
    {
      collapsible: true,
      text: "探索",
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
    "friendLinks",
    "intro"

  ],
});
