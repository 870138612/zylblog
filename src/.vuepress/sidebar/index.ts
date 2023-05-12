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
            icon: "framework",
            prefix: "framework/",
            children:"structure",
        },
        {
            collapsible:true,
            text: "学习笔记",
            icon: "note",
            prefix: "note/",
            children:"structure",
        },
        {
          collapsible:true,
          text: "面经",
          icon: "ask",
          prefix: "interview/",
          children:"structure",
        },
       {
        collapsible:true,
        text: "随处拍拍",
        icon: "photo",
        prefix: "photo/",
        children:"structure",
       },
        "intro"

    ],
});
