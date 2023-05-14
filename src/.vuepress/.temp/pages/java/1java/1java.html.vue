<template><div><div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>知识点来自B站黑马程序员</p>
</div>
<Tabs id="5" :data='[{"title":"标题1"},{"title":"标题2"}]' :active="0">
<template #tab0="{ title, value, isActive }">
<p>需要填入文字才能生效</p>
</template>
<template #tab1="{ title, value, isActive }">
<p>需要填入文字才能生效</p>
</template>
</Tabs>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>java测试代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


