// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar/index.ts
import { navbar } from "vuepress-theme-hope";
var zhNavbar = navbar([
  { text: "\u5BFC\u822A", icon: "daohang", link: "/home.md" },
  { text: "\u6587\u7AE0", icon: "articlelist", link: "/article/" },
  { text: "\u5206\u7C7B", icon: "fenlei", link: "/category/" },
  { text: "\u6807\u7B7E", icon: "tag", link: "/tag/" },
  { text: "\u65F6\u95F4\u8F74", icon: "timeline", link: "/timeline/" }
]);

// src/.vuepress/sidebar/index.ts
import { sidebar } from "vuepress-theme-hope";
var zhSidebar = sidebar({
  "/": [
    {
      collapsible: true,
      text: "Java",
      icon: "java",
      prefix: "java/",
      children: "structure"
    },
    {
      collapsible: true,
      text: "\u6570\u636E\u5E93",
      icon: "database",
      prefix: "database/",
      children: "structure"
    },
    {
      collapsible: true,
      text: "\u63A2\u7D22",
      icon: "discovery",
      prefix: "discovery/",
      children: "structure"
    },
    {
      collapsible: true,
      text: "\u7B14\u8BB0",
      icon: "note",
      prefix: "note/",
      children: "structure"
    },
    "friendLinks",
    "intro"
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  logo: "/logo.png",
  author: {
    name: "ZYL1210",
    url: "https://ylzhong.top"
  },
  // pure: true,
  contributors: false,
  iconAssets: "//at.alicdn.com/t/c/font_4062992_b2cz8b2tqwo.css",
  docsDir: "src",
  repo: "https://github.com/870138612/870138612.github.io.git",
  //根据文件的名称进行排序
  sidebarSorter: ["readme", "order", "filename"],
  // navbar
  navbar: zhNavbar,
  // sidebar
  sidebar: zhSidebar,
  footer: '<a href="https://beian.miit.gov.cn/">\u7696ICP\u59072023007292\u53F7</a>',
  copyright: "Copyright \xA9 2023-present Liang",
  displayFooter: true,
  pageInfo: [
    "Author",
    "Category",
    "Tag",
    "Date",
    "Original",
    "Word",
    "ReadingTime"
  ],
  blog: {
    sidebarDisplay: "mobile",
    intro: "/intro.html"
    // medias: {
    //   Gitee: "https://gitee.com/SnailClimb",
    // },
  },
  plugins: {
    blog: true,
    mdEnhance: {
      container: true,
      tabs: true,
      align: true,
      card: true
    },
    comment: {
      provider: "Giscus",
      lazyLoading: false,
      repo: "870138612/zyl",
      repoId: "R_kgDOJw1i1g",
      category: "Announcements",
      categoryId: "DIC_kwDOJw1i1s4CXSr9"
    }
  }
});

// src/.vuepress/config.ts
import { searchPlugin } from "@vuepress/plugin-search";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
var config_default = defineUserConfig({
  base: "/",
  head: [
    ["meta", { name: "robots", content: "all" }],
    ["meta", { "http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate" }],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    // 设置 favor.ico，.vuepress/public 下
    [
      "link",
      { rel: "icon", href: "/assets/icon/favicon.ico" }
    ]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "LIANG",
      description: "LiangBlog"
    }
  },
  theme: theme_default,
  shouldPrefetch: false,
  plugins: [
    autoCatalogPlugin({
      index: true,
      locales: {
        "/": {
          title: " "
        }
      },
      iconGetter: (page) => page.frontmatter.icon,
      orderGetter: (page) => 1
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "\u6807\u9898\u641C\u7D22"
        }
      },
      maxSuggestions: 10
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci9pbmRleC50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOi9Vc2Vycy96eWwvRGVza3RvcC84NzAxMzg2MTIuZ2l0aHViLmlvL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHp5bFxcXFxEZXNrdG9wXFxcXDg3MDEzODYxMi5naXRodWIuaW9cXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3p5bC9EZXNrdG9wLzg3MDEzODYxMi5naXRodWIuaW8vc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQge2RlZmluZVVzZXJDb25maWd9IGZyb20gXCJ2dWVwcmVzc1wiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcclxuaW1wb3J0IHsgc2VhcmNoUGx1Z2lufSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1zZWFyY2hcIjtcclxuaW1wb3J0IHtibG9nLCBtZEVuaGFuY2V9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHthdXRvQ2F0YWxvZ1BsdWdpbn0gZnJvbSBcInZ1ZXByZXNzLXBsdWdpbi1hdXRvLWNhdGFsb2dcIjtcclxuaW1wb3J0IHtSb3V0ZU1ldGF9IGZyb20gXCJ2dWUtcm91dGVyXCI7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xyXG5cclxuICBiYXNlOiBcIi9cIixcclxuICBoZWFkOiBbXHJcbiAgICBbXCJtZXRhXCIsIHtuYW1lOiBcInJvYm90c1wiLCBjb250ZW50OiBcImFsbFwifV0sXHJcbiAgICBbXCJtZXRhXCIsIHtcImh0dHAtZXF1aXZcIjogXCJDYWNoZS1Db250cm9sXCIsIGNvbnRlbnQ6IFwibm8tY2FjaGUsIG5vLXN0b3JlLCBtdXN0LXJldmFsaWRhdGVcIix9XSxcclxuICAgIFtcIm1ldGFcIiwge1wiaHR0cC1lcXVpdlwiOiBcIlByYWdtYVwiLCBjb250ZW50OiBcIm5vLWNhY2hlXCJ9XSxcclxuICAgIFtcIm1ldGFcIiwge1wiaHR0cC1lcXVpdlwiOiBcIkV4cGlyZXNcIiwgY29udGVudDogXCIwXCJ9XSxcclxuICAgIC8vIFx1OEJCRVx1N0Y2RSBmYXZvci5pY29cdUZGMEMudnVlcHJlc3MvcHVibGljIFx1NEUwQlxyXG4gICAgW1xyXG4gICAgICAnbGluaycsIHtyZWw6ICdpY29uJywgaHJlZjogJy9hc3NldHMvaWNvbi9mYXZpY29uLmljbyd9XHJcbiAgICBdXHJcbiAgXSxcclxuXHJcbiAgbG9jYWxlczoge1xyXG4gICAgXCIvXCI6IHtcclxuICAgICAgbGFuZzogXCJ6aC1DTlwiLFxyXG4gICAgICB0aXRsZTogXCJMSUFOR1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJMaWFuZ0Jsb2dcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aGVtZSxcclxuICBzaG91bGRQcmVmZXRjaDogZmFsc2UsXHJcbiAgcGx1Z2luczogW1xyXG4gICAgYXV0b0NhdGFsb2dQbHVnaW4oe1xyXG4gICAgICBpbmRleDp0cnVlLFxyXG4gICAgICBsb2NhbGVzOntcclxuICAgICAgICBcIi9cIjp7XHJcbiAgICAgICAgICB0aXRsZTpcIiBcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaWNvbkdldHRlcjoocGFnZSk9PnBhZ2UuZnJvbnRtYXR0ZXIuaWNvbixcclxuICAgICAgb3JkZXJHZXR0ZXI6KHBhZ2UpPT4gMVxyXG4gICAgfSksXHJcbiAgICBzZWFyY2hQbHVnaW4oe1xyXG4gICAgICBsb2NhbGVzOiB7XHJcbiAgICAgICAgXCIvXCI6IHtcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlx1NjgwN1x1OTg5OFx1NjQxQ1x1N0QyMlwiLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbWF4U3VnZ2VzdGlvbnM6IDEwXHJcbiAgICB9KSxcclxuICBdLFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOi9Vc2Vycy96eWwvRGVza3RvcC84NzAxMzg2MTIuZ2l0aHViLmlvL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHp5bFxcXFxEZXNrdG9wXFxcXDg3MDEzODYxMi5naXRodWIuaW9cXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvenlsL0Rlc2t0b3AvODcwMTM4NjEyLmdpdGh1Yi5pby9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHtob3BlVGhlbWV9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcbmltcG9ydCB7emhOYXZiYXJ9IGZyb20gXCIuL25hdmJhci9pbmRleC5qc1wiO1xyXG5pbXBvcnQge3poU2lkZWJhcn0gZnJvbSBcIi4vc2lkZWJhci9pbmRleC5qc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XHJcbiAgbG9nbzogXCIvbG9nby5wbmdcIixcclxuXHJcbiAgYXV0aG9yOiB7XHJcbiAgICBuYW1lOiBcIlpZTDEyMTBcIixcclxuICAgIHVybDogXCJodHRwczovL3lsemhvbmcudG9wXCIsXHJcbiAgfSxcclxuICAvLyBwdXJlOiB0cnVlLFxyXG4gIGNvbnRyaWJ1dG9yczogZmFsc2UsXHJcbiAgaWNvbkFzc2V0czogXCIvL2F0LmFsaWNkbi5jb20vdC9jL2ZvbnRfNDA2Mjk5Ml9iMmN6OGIydHF3by5jc3NcIixcclxuICBkb2NzRGlyOiBcInNyY1wiLFxyXG4gIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tLzg3MDEzODYxMi84NzAxMzg2MTIuZ2l0aHViLmlvLmdpdFwiLFxyXG4gIC8vXHU2ODM5XHU2MzZFXHU2NTg3XHU0RUY2XHU3Njg0XHU1NDBEXHU3OUYwXHU4RkRCXHU4ODRDXHU2MzkyXHU1RThGXHJcbiAgc2lkZWJhclNvcnRlcjogW1wicmVhZG1lXCIsIFwib3JkZXJcIiwgXCJmaWxlbmFtZVwiXSxcclxuXHJcbiAgLy8gbmF2YmFyXHJcbiAgbmF2YmFyOiB6aE5hdmJhcixcclxuICAvLyBzaWRlYmFyXHJcbiAgc2lkZWJhcjogemhTaWRlYmFyLFxyXG4gIGZvb3RlcjogXCI8YSBocmVmPVxcXCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1xcXCI+XHU3Njk2SUNQXHU1OTA3MjAyMzAwNzI5Mlx1NTNGNzwvYT5cIixcclxuICBjb3B5cmlnaHQ6IFwiQ29weXJpZ2h0IFx1MDBBOSAyMDIzLXByZXNlbnQgTGlhbmdcIixcclxuICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxyXG4gIHBhZ2VJbmZvOiBbXHJcbiAgICBcIkF1dGhvclwiLFxyXG4gICAgXCJDYXRlZ29yeVwiLFxyXG4gICAgXCJUYWdcIixcclxuICAgIFwiRGF0ZVwiLFxyXG4gICAgXCJPcmlnaW5hbFwiLFxyXG4gICAgXCJXb3JkXCIsXHJcbiAgICBcIlJlYWRpbmdUaW1lXCIsXHJcbiAgXSxcclxuICBibG9nOiB7XHJcbiAgICBzaWRlYmFyRGlzcGxheTpcIm1vYmlsZVwiLFxyXG4gICAgaW50cm86IFwiL2ludHJvLmh0bWxcIixcclxuICAgIC8vIG1lZGlhczoge1xyXG4gICAgLy8gICBHaXRlZTogXCJodHRwczovL2dpdGVlLmNvbS9TbmFpbENsaW1iXCIsXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcblxyXG4gIHBsdWdpbnM6IHtcclxuXHJcbiAgICBibG9nOiB0cnVlLFxyXG4gICAgbWRFbmhhbmNlOiB7XHJcbiAgICAgIGNvbnRhaW5lcjogdHJ1ZSxcclxuICAgICAgdGFiczogdHJ1ZSxcclxuICAgICAgYWxpZ246IHRydWUsXHJcbiAgICAgIGNhcmQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBjb21tZW50OiB7XHJcbiAgICAgIHByb3ZpZGVyOiBcIkdpc2N1c1wiLFxyXG4gICAgICBsYXp5TG9hZGluZzogZmFsc2UsXHJcbiAgICAgIHJlcG86IFwiODcwMTM4NjEyL3p5bFwiLFxyXG4gICAgICByZXBvSWQ6IFwiUl9rZ0RPSncxaTFnXCIsXHJcbiAgICAgIGNhdGVnb3J5OlwiQW5ub3VuY2VtZW50c1wiLFxyXG4gICAgICBjYXRlZ29yeUlkOlwiRElDX2t3RE9KdzFpMXM0Q1hTcjlcIlxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOi9Vc2Vycy96eWwvRGVza3RvcC84NzAxMzg2MTIuZ2l0aHViLmlvL3NyYy8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx6eWxcXFxcRGVza3RvcFxcXFw4NzAxMzg2MTIuZ2l0aHViLmlvXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy96eWwvRGVza3RvcC84NzAxMzg2MTIuZ2l0aHViLmlvL3NyYy8udnVlcHJlc3MvbmF2YmFyL2luZGV4LnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB6aE5hdmJhciA9IG5hdmJhcihbXHJcbiAgeyB0ZXh0OiBcIlx1NUJGQ1x1ODIyQVwiLCBpY29uOiBcImRhb2hhbmdcIiwgbGluazogXCIvaG9tZS5tZFwiIH0sXHJcbiAgeyB0ZXh0OiBcIlx1NjU4N1x1N0FFMFwiLCBpY29uOiBcImFydGljbGVsaXN0XCIsIGxpbms6IFwiL2FydGljbGUvXCIgfSxcclxuICB7IHRleHQ6IFwiXHU1MjA2XHU3QzdCXCIsIGljb246IFwiZmVubGVpXCIsIGxpbms6IFwiL2NhdGVnb3J5L1wiIH0sXHJcbiAgeyB0ZXh0OiBcIlx1NjgwN1x1N0I3RVwiLCBpY29uOiBcInRhZ1wiLCBsaW5rOiBcIi90YWcvXCIgfSxcclxuICB7IHRleHQ6IFwiXHU2NUY2XHU5NUY0XHU4Rjc0XCIsIGljb246IFwidGltZWxpbmVcIiwgbGluazogXCIvdGltZWxpbmUvXCIgfSxcclxuXHJcbl0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzL3p5bC9EZXNrdG9wLzg3MDEzODYxMi5naXRodWIuaW8vc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx6eWxcXFxcRGVza3RvcFxcXFw4NzAxMzg2MTIuZ2l0aHViLmlvXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvenlsL0Rlc2t0b3AvODcwMTM4NjEyLmdpdGh1Yi5pby9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvaW5kZXgudHNcIjtpbXBvcnQge3NpZGViYXJ9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgemhTaWRlYmFyID0gc2lkZWJhcih7XHJcbiAgXCIvXCI6IFtcclxuXHJcbiAgICB7XHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICB0ZXh0OiBcIkphdmFcIixcclxuICAgICAgaWNvbjogXCJqYXZhXCIsXHJcbiAgICAgIHByZWZpeDogXCJqYXZhL1wiLFxyXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICB0ZXh0OiBcIlx1NjU3MFx1NjM2RVx1NUU5M1wiLFxyXG4gICAgICBpY29uOiBcImRhdGFiYXNlXCIsXHJcbiAgICAgIHByZWZpeDogXCJkYXRhYmFzZS9cIixcclxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgdGV4dDogXCJcdTYzQTJcdTdEMjJcIixcclxuICAgICAgaWNvbjogXCJkaXNjb3ZlcnlcIixcclxuICAgICAgcHJlZml4OiBcImRpc2NvdmVyeS9cIixcclxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgdGV4dDogXCJcdTdCMTRcdThCQjBcIixcclxuICAgICAgaWNvbjogXCJub3RlXCIsXHJcbiAgICAgIHByZWZpeDogXCJub3RlL1wiLFxyXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcclxuICAgIH0sXHJcbiAgICBcImZyaWVuZExpbmtzXCIsXHJcbiAgICBcImludHJvXCJcclxuXHJcbiAgXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1YsU0FBUSx3QkFBdUI7OztBQ0FqQyxTQUFRLGlCQUFnQjs7O0FDQUYsU0FBUyxjQUFjO0FBRXRYLElBQU0sV0FBVyxPQUFPO0FBQUEsRUFDN0IsRUFBRSxNQUFNLGdCQUFNLE1BQU0sV0FBVyxNQUFNLFdBQVc7QUFB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
