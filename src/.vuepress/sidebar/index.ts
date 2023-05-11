import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [

        {
            collapsible:true,
            text: "Java基础",
            icon: "note",
            prefix: "java/",
            children: "structure",
        },
        {
            collapsible:true,
            text: "文章",
            icon: "note",
            prefix: "posts/",
            children:"structure",
        },
        "intro"

    ],
});
