export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-184f4da6","v-2e25198a","v-71b3ae87","v-7d72c4ac","v-14b0a7d7","v-14c69af4","v-7499d82d","v-15054f24","v-5e93fa4a","v-e2acc714","v-78803d47","v-2cfca4b0","v-649aac6c","v-64a8bef6"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

