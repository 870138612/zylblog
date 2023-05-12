import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "C:/Users/zyl/Desktop/vuepress-theme-hope-main/my-docs/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "C:/Users/zyl/Desktop/vuepress-theme-hope-main/my-docs/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "C:/Users/zyl/Desktop/vuepress-theme-hope-main/my-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "C:/Users/zyl/Desktop/vuepress-theme-hope-main/my-docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "C:/Users/zyl/Desktop/vuepress-theme-hope-main/my-docs/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "C:/Users/zyl/Desktop/vuepress-theme-hope-main/my-docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_4062992_fvckciw09.css");
`);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
