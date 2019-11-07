##
浏览器收到 html 解析为 DOM 
遇到 CSS 解析为 cssom
把 dom cssom 合在一起 生成一棵渲染树
根据 样式 计算位置 开始渲染 布局

domContentloaded 就是i当 html 解析完之后发生的

有一些标签 img link script 会引入外部资源, 会在 解析完 html 之后， 开始请求资源