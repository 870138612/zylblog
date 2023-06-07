import { defineClientConfig } from "@vuepress/client";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "C:/Users/zyl/Desktop/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.206_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { BlogCategory, BlogHome, BlogType, BloggerInfo, Timeline, setupBlog } from "C:/Users/zyl/Desktop/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.206_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "C:/Users/zyl/Desktop/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.206_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";

import "C:/Users/zyl/Desktop/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.206_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // render icon for auto-catalog
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
});