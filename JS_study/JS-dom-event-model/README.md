## 事件模型
  捕获
  冒泡
  三个阶段： 捕获阶段 目标阶段 冒泡阶段
  addEventListener
  第三个参数：默认为 false -> 冒泡阶段 true -> 捕获阶段 
## 请用 DOM2 级别的事件。。
  DOM0 onClick
  DOM2 addEventListener
  DOM3 addEventListener 增加了很多 键盘 鼠标事件

- event.target 找i到触发这个事件的节点
  event.currentTarget 找到绑定这个事件的节点

