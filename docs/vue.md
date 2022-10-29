Vue 3 备忘清单
===

渐进式 JavaScript 框架 [Vue 3](https://cn.vuejs.org/) 备忘清单的快速参考列表，包含常用 API 和示例。


入门
---

### 介绍

Vue 是一套用于构建用户界面的渐进式框架

- [Vue 3.x 官方文档](https://cn.vuejs.org/)
- [Vue Router 4.x 官方文档](https://router.vuejs.org/zh/)
<!--rehype:className=style-round-->

注意：Vue 3.x 版本对应 Vue Router 4.x 路由版本

### 创建应用
<!--rehype:wrap-class=row-span-3-->

已安装 `16.0` 或更高版本的 Node.js

```bash
$ npm init vue@latest
```

指令将会安装并执行 [create-vue](https://www.npmjs.com/package/create-vue)，它是 Vue 官方的项目脚手架工具

```bash
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No/Yes
✔ Add JSX Support? … No/Yes
✔ Add Vue Router for Single Page Application development? … No/Yes
✔ Add Pinia for state management? … No/Yes
✔ Add Vitest for Unit testing? … No/Yes
✔ Add Cypress for both Unit and End-to-End testing? … No/Yes
✔ Add ESLint for code quality? … No/Yes
✔ Add Prettier for code formatting? … No/Yes

Scaffolding project in ./<your-project-name>...
Done.
```
<!--rehype:className=wrap-text -->

安装依赖并启动开发服务器

```bash
$ cd <your-project-name>
$ npm install
$ npm run dev
```

当你准备将应用发布到生产环境时，请运行：

```bash
$ npm run build
```

此命令会在 `./dist` 文件夹中为你的应用创建一个生产环境的构建版本

### 应用实例
<!--rehype:wrap-class=row-span-2-->

```js
import { createApp } from 'vue'

const app = createApp({
  data() {
    return { count: 0 }
  }
})
app.mount('#app')
```

挂载应用

```html
<div id="app">
  <button @click="count++">
    {{ count }}
  </button>
</div>
```

### 通过 CDN 使用 Vue

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<div id="app">{{ message }}</div>
<script>
  const { createApp } = Vue
  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```
<!--rehype:className=wrap-text -->

### 使用 ES 模块构建版本

```html
<div id="app">{{ message }}</div>
<script type="module">
  import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```
<!--rehype:className=wrap-text -->

模板语法
---

### 文本插值

```html
<span>Message: {{ msg }}</span>
```

使用的是 `Mustache` 语法 (即双大括号)，每次 `msg` 属性更改时它也会同步更新 

### 原始 HTML
<!--rehype:wrap-class=col-span-2-->

```html
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

双大括号`{{}}`会将数据解释为纯文本，使用 `v-html` 指令，将插入 HTML

### Attribute 绑定

```html
<div v-bind:id="dynamicId"></div>
```

简写

```html
<div :id="dynamicId"></div>
```

### 布尔型 Attribute

```html
<button :disabled="isButtonDisabled">
  Button
</button>
```
<!--rehype:className=wrap-text -->

### 动态绑定多个值
<!--rehype:wrap-class=row-span-2-->

```js
data() {
  return {
    objectOfAttrs: {
      id: 'container',
      class: 'wrapper'
    }
  }
}
```

通过不带参数的 `v-bind`，你可以将它们绑定到单个元素上

```html
<div v-bind="objectOfAttrs"></div>
```

### 使用 JavaScript 表达式

```html
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```

### 仅支持表达式(例子都是无效)

```html
<!-- 这是一个语句，而非表达式 -->
{{ var a = 1 }}
<!-- 条件控制也不支持，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

### 调用函数

```html
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>
```


### 指令 Directives

```html
<p v-if="seen">Now you see me</p>
```

### 参数 Arguments

```html
<a v-bind:href="url"> ... </a>
<!-- 简写 -->
<a :href="url"> ... </a>
```

### 绑定事件

```html
<a v-on:click="doSomething"> ... </a>
<!-- 简写 -->
<a @click="doSomething"> ... </a>
```

### 动态参数

```html
<a v-bind:[attributeName]="url"> ... </a>
<!-- 简写 -->
<a :[attributeName]="url"> ... </a>
```

这里的 `attributeName` 会作为一个 JS 表达式被动态执行

### 动态的事件名称

```html
<a v-on:[eventName]="doSomething"> ... </a>
<!-- 简写 -->
<a @[eventName]="doSomething">
```

### 修饰符 Modifiers

```html
<form @submit.prevent="onSubmit">
  ...
</form>
```

`.prevent` 修饰符会告知 `v-on` 指令对触发的事件调用 `event.preventDefault()`

### 指令语法

```bash
v-on:submit.prevent="onSubmit"
──┬─ ─┬──── ─┬─────  ─┬──────
  ┆   ┆      ┆        ╰─ Value 解释为JS表达式
  ┆   ┆      ╰─ Modifiers 由前导点表示
  ┆   ╰─ Argument 跟随冒号或速记符号
  ╰─ Name 以 v- 开头使用速记时可以省略
```