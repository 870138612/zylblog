export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-5d9220f4","v-963daf62","v-bb6c4e5a","v-9116a676","v-55e78bb4","v-579c6453","v-5432b315","v-527dda76","v-50c901d7","v-4a7a7835","v-48c59f96","v-4710c6f7","v-455bee58","v-184f4da6","v-2e25198a","v-7d72c4ac","v-14b0a7d7","v-14c69af4","v-15054f24"]}},"star":{"/":{"path":"/star/","keys":["v-527dda76","v-5d9220f4","v-4710c6f7"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-5d9220f4","v-963daf62","v-bb6c4e5a","v-9116a676","v-55e78bb4","v-579c6453","v-5432b315","v-527dda76","v-50c901d7","v-4a7a7835","v-48c59f96","v-4710c6f7","v-455bee58"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

