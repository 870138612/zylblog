export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"主页\",\"icon\":\"home\",\"heroImage\":null,\"heroText\":\"Liang Blog\",\"tagline\":\"✨\",\"actions\":[{\"text\":\"⭐️ 逛逛 ⭐️\",\"link\":\"/home\",\"type\":\"primary\"}],\"features\":[{\"title\":\"学习笔记\",\"icon\":\"alias\",\"details\":\"java学习笔记\",\"link\":\"/home\"},{\"title\":\"面经记录\",\"icon\":\"community\",\"details\":\"秋招面经记录\",\"link\":\"/home\"},{\"title\":\"摄影日常\",\"icon\":\"pic\",\"details\":\"秋招面经记录\",\"link\":\"/home\"}],\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.23,\"words\":68},\"filePathRelative\":\"README.md\",\"excerpt\":\"\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
