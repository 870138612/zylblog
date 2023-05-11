import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [

        {
            collapsible:true,
            text: "Java",
            icon: "java",
            prefix: "java/",
            children: "structure",
        },
        {
            collapsible:true,
            text: "数据库",
            icon: "mysql",
            prefix: "database/",
            children:"structure",
        },
        {
            collapsible:true,
            text: "框架",
            icon: "categoryselected",
            prefix: "framework/",
            children:"structure",
        },
        {
            collapsible:true,
            text: "学习笔记",
            icon: "repo",
            prefix: "note/",
            children:"structure",
        },
        "intro"

    ],
});
