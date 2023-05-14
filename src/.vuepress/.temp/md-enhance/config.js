import { defineClientConfig } from "@vuepress/client";
import "C:/Users/zyl/Desktop/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import Tabs from "C:/Users/zyl/Desktop/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Tabs", Tabs);
  },
});
