import { defineClientConfig } from "@vuepress/client";
import "C:/Users/zyl/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.206_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import Tabs from "C:/Users/zyl/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.206_react-dom@16.14.0_react@16.14.0_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Tabs", Tabs);
  },
});
