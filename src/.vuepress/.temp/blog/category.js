export const categoryMap = {"category":{"/":{"path":"/category/","map":{"中间件":{"path":"/category/%E4%B8%AD%E9%97%B4%E4%BB%B6/","keys":["v-7273d1ac","v-d8f9caa6"]},"摄影":{"path":"/category/%E6%91%84%E5%BD%B1/","keys":["v-5e93fa4a"]},"Java":{"path":"/category/java/","keys":["v-e26068d4","v-f9cd8696"]}}}},"tag":{"/":{"path":"/tag/","map":{"Nginx":{"path":"/tag/nginx/","keys":["v-7273d1ac","v-d8f9caa6"]},"中间件":{"path":"/tag/%E4%B8%AD%E9%97%B4%E4%BB%B6/","keys":["v-7273d1ac","v-d8f9caa6"]},"平潭":{"path":"/tag/%E5%B9%B3%E6%BD%AD/","keys":["v-5e93fa4a"]},"旅拍":{"path":"/tag/%E6%97%85%E6%8B%8D/","keys":["v-5e93fa4a"]},"Java基础":{"path":"/tag/java%E5%9F%BA%E7%A1%80/","keys":["v-e26068d4","v-f9cd8696"]},"八股":{"path":"/tag/%E5%85%AB%E8%82%A1/","keys":["v-e26068d4","v-f9cd8696"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


