export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"meta\",{\"name\":\"robots\",\"content\":\"all\"}],[\"meta\",{\"http-equiv\":\"Cache-Control\",\"content\":\"no-cache, no-store, must-revalidate\"}],[\"meta\",{\"http-equiv\":\"Pragma\",\"content\":\"no-cache\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"http-equiv\":\"Expires\",\"content\":\"0\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"LIANG\",\"description\":\"LiangBlog\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
