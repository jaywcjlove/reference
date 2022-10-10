Vue2 备忘清单
===

渐进式 JavaScript 框架 Vue 2 备忘清单的快速参考列表，包含常用 API 和示例。

入门
---

### 介绍

Vue 是一套用于构建用户界面的渐进式框架

- [Vue 2.x 官方文档](https://v2.cn.vuejs.org/)
- [Vue Router 3.x 官方文档](https://v3.router.vuejs.org/)

### 声明式渲染

```html
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

### 基础例子
<!--rehype:wrap-class=row-span-2-->

```html
<div id="example">
  <p>原始信息: "{{ message }}"</p>
  <p>
    计算的反向信息: "{{ reversedMessage }}"
  </p>
</div>
```

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('')
          .reverse().join('')
    }
  }
})
```

结果

```
原始信息:  "Hello"
计算的反向信息:  "olleH"
```

### 绑定元素属性

```html
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
```

```js
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date()
        .toLocaleString()
  }
})
```

### 条件

```html
<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>
```

```js
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```

控制切换一个元素是否显示

### 循环

```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```js
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
```

### 点击事件处理

```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">
    反转消息
  </button>
</div>
```

```js
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('')
            .reverse().join('')
    }
  }
})
```

### 输入事件处理

```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```

`v-model` 指令，它能轻松实现表单输入和应用状态之间的双向绑定

```js
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
```

模板语法
---

### 文本

```html
<span>Message: {{ msg }}</span>
<span v-once>
  这个将不会改变: {{ msg }}
</span>
```

使用 `v-once` 指令，执行一次性地插值，当数据改变时，插值处的内容不会更新

### 原始 HTML

```html
<p>解释为普通文本: {{ rawHtml }}</p>
<p>
  使用 v-html 指令: 
  <span v-html="rawHtml"></span>
</p>
```

使用 `v-html` 指令，输出真正的 `HTML`

### 属性

```html
<div v-bind:id="dynamicId"></div>
<button v-bind:disabled="isDisabled">
  Button
</button>
```

如果 `isDisabled` 的值是 null/undefined/false 则 `disabled` 不会被渲染出来

### JavaScript 表达式

```html
<div id="app">
  <span>消息: {{ msg }}</span>
  <span>{{ msg + '这是字符串' }}</span>
  <span>{{ isWorking ? '是':'否' }}</span>
  <span>{{ msg.getDetials() }}</span>
  <div v-bind:id="'list-' + id"></div>
<div>
```

### 指令

```html
<p v-if="seen">
  现在你看到我了
</p>
```

`v-if` 指令将根据表达式 `seen` 的值的真假来插入/移除 \<p> 元素

### 指令参数

```html
<a v-bind:href="url">...</a>
```

`v-bind` 指令将该元素 `href` 属性与表达式 `url` 的值绑定

```html
<a v-on:click="doSomething">...</a>
```

`v-on` 指令，用于监听 DOM 事件，oSomething 是事件名

### 指令动态参数 **v2.6**

```html
<a v-on:[eventName]="doSomething">...</a>
```

当 `eventName` 的值为 `focus` 时，`v-on:[eventName]` 将等价于 `v-on:focus` 

### 指令修饰符

```html
<form v-on:submit.prevent="onSubmit">
  ...
</form>
```

`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`

### 指令缩写

```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>
<!-- 缩写 -->
<a :href="url">...</a>
<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
```

Class 与 Style 绑定
---

### 对象语法

```html
<div v-bind:class="{ active: isActive }">

</div>
```

传给 `v-bind:class` 一个对象，以动态地切换 `class`

### 与普通的 class 属性共存
<!--rehype:wrap-class=row-span-3-->

```html {2}
<div
  class="static"
  v-bind:class="{
    active: isActive,
    'text-danger': hasError
  }"
></div>
```

如下 data

```js
data: {
  isActive: true,
  hasError: false
}
```

结果渲染为

```html
<div class="static active"></div>
```

### 绑定的数据对象不必内联定义在模板里
<!--rehype:wrap-class=row-span-3-->

```html
<div v-bind:class="classObject"></div>
```

如下 data

```js
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

结果渲染为

```html
<div class="static active"></div>
```

### 三元表达式

```html
<div v-bind:class="[
  isActive ? activeClass : ''
]">
</div>
```

### 数组

```html
<div v-bind:class="[
  { active: isActive }, errorClass
]"></div>
```

### 数组语法

```html
<div v-bind:class="[
  activeClass, errorClass
]">
</div>
```

如下 data

```js
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

结果渲染为

```html
<div class="active text-danger"></div>
```

### 内联样式

```html
<div v-bind:style="{
    color: activeColor,
    fontSize: fontSize + 'px'
}"></div>
```

如下 data

```js
data: {
  activeColor: 'red',
  fontSize: 30
}
```

结果渲染为

```html
<div style="color: red; font-size: 30px;"></div>
```

### 内联样式对象通常更好

```html
<div v-bind:style="styleObject"></div>
```

如下 data

```js
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

同样的，对象语法常常结合返回对象的计算属性使用

### 内联样式数组语法

```html
<div v-bind:style="[
  baseStyles, overridingStyles
]"></div>
```

### 内联样式多重值

```html
<div :style="{
  display: ['-webkit-box', 'flex']
}"></div>
```

条件渲染
---

### v-if

```html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

### v-else-if
<!--rehype:wrap-class=row-span-2-->

```html
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>
  Not A/B/C
</div>
```

`@2.1.0` 新增，必须紧跟在带 `v-if` 或者 `v-else-if` 的元素之后

### v-else
<!--rehype:wrap-class=row-span-2-->

```html
<div v-if="Math.random() > 0.5">
  现在你看到我了
</div>
<div v-else>
  现在你看不见我了
</div>
```

`v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面

### \<template> 上使用 v-if 条件渲染分组

```html
<template v-if="ok">
  <p>Paragraph 1</p>
</template>
```

### 用 key 管理可复用的元素
<!--rehype:wrap-class=col-span-2-->

```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="输入用户名" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="输入邮箱" key="email-input">
</template>
```

### v-show

```html
<h1 v-show="ok">
  Hello!
</h1>
```

带有 `v-show` 的元素始终会被渲染并保留在 DOM 中，只是简单地切换元素的 `CSS` 属性 `display`

另见
---

- [Vue Essentials Cheat-Sheet.pdf](https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf) _(vuemastery.com)_
- [Vue 2 官方文档](https://v2.cn.vuejs.org/) _(vuejs.org)_