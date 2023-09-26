# 前言
    在了解前Vue3源码之前，我们需要了解一下几个概念。
## 前端主流两种编程范式
### 命令式编程

```js
    // 命令式
// 1. 获取到第一层的 div
const divEle = document.querySelector('#app')
// 2. 获取到它的子 div
const subDivEle = divEle.querySelector('div')
// 3. 获取第三层的 p
const subPEle = subDivEle.querySelector('p')
// 4. 定义变量 msg
const msg = 'hello world'
// 5. 为该 p 元素设置 innerHTML 为 hello world
subPEle.innerHTML = msg

```

