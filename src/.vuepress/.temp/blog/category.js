export const categoryMap = {"category":{"/":{"path":"/category/","map":{"摄影":{"path":"/category/%E6%91%84%E5%BD%B1/","keys":["v-5e93fa4a"]},"Java":{"path":"/category/java/","keys":["v-78803d47"]}}}},"tag":{"/":{"path":"/tag/","map":{"平潭":{"path":"/tag/%E5%B9%B3%E6%BD%AD/","keys":["v-5e93fa4a"]},"旅拍":{"path":"/tag/%E6%97%85%E6%8B%8D/","keys":["v-5e93fa4a"]},"Java":{"path":"/tag/java/","keys":["v-78803d47"]},"八股":{"path":"/tag/%E5%85%AB%E8%82%A1/","keys":["v-78803d47"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


