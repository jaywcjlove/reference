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

Vue 2 API
---

### 全局配置
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`silent` | 取消所有的日志与警告 [#](https://v2.cn.vuejs.org/v2/api/#silent)
`optionMergeStrategies` | 自定义合并策略的选项 [#](https://v2.cn.vuejs.org/v2/api/#optionMergeStrategies)
`devtools` | 是否允许 [devtools](https://github.com/vuejs/vue-devtools) 检查 [#](https://v2.cn.vuejs.org/v2/api/#devtools)
`errorHandler` | 未捕获错误的处理函数 _(开发模式生效)_ [#](https://v2.cn.vuejs.org/v2/api/#errorHandler)
`warnHandler` _(2.4.0)_ | 运行时警告处理函数 [#](https://v2.cn.vuejs.org/v2/api/#warnHandler)
`ignoredElements` | 忽略 Vue 之外的 _(自定义元素)_ [#](https://v2.cn.vuejs.org/v2/api/#ignoredElements)
`keyCodes` | `v-on` 自定义键位别名 [#](https://v2.cn.vuejs.org/v2/api/#keyCodes)
`performance` _(2.2.0)_ | 性能追踪 [#](https://v2.cn.vuejs.org/v2/api/#performance)
`productionTip` _(2.2.0)_ | 是否生成生产提示 [#](https://v2.cn.vuejs.org/v2/api/#productionTip)

### 全局 API
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`Vue.extend` | Vue 构造器，创建一个“子类” [#](https://v2.cn.vuejs.org/v2/api/#Vue-extend)
`Vue.nextTick` | 执行延迟回调 [#](https://v2.cn.vuejs.org/v2/api/#Vue-nextTick)
`Vue.set` | 向响应式对象中添加一个属性 [#](https://v2.cn.vuejs.org/v2/api/#Vue-set)
`Vue.delete` | 删除对象的 property [#](https://v2.cn.vuejs.org/v2/api/#Vue-delete)
`Vue.directive` | 注册或获取全局指令 [#](https://v2.cn.vuejs.org/v2/api/#Vue-directive)
`Vue.filter` | 注册或获取全局过滤器 [#](https://v2.cn.vuejs.org/v2/api/#Vue-filter)
`Vue.component` | 注册或获取全局组件 [#](https://v2.cn.vuejs.org/v2/api/#Vue-component)
`Vue.use` | 安装 Vue.js 插件 [#](https://v2.cn.vuejs.org/v2/api/#Vue-use)
`Vue.mixin` | 全局注册一个混入 [#](https://v2.cn.vuejs.org/v2/api/#Vue-mixin)
`Vue.compile` | 将模板字符串编译成 render 函数 [#](https://v2.cn.vuejs.org/v2/api/#Vue-compile)
`Vue.observable` _(2.6.0)_ | 让一个对象可响应 [#](https://v2.cn.vuejs.org/v2/api/#Vue-observable)
`Vue.version` | Vue 安装版本号 [#](https://v2.cn.vuejs.org/v2/api/#Vue-version)

### 数据

:- | :-
:- | :-
`data` | 实例的数据对象 [#](https://v2.cn.vuejs.org/v2/api/#data)
`props` | 接收来自父组件的数据 [#](https://v2.cn.vuejs.org/v2/api/#props)
`propsData` | 创建实例时传递 props [#](https://v2.cn.vuejs.org/v2/api/#propsData)
`computed` | 计算属性将被混入到 Vue 实例中 [#](https://v2.cn.vuejs.org/v2/api/#computed)
`methods` | 将被混入到 Vue 实例中 [#](https://v2.cn.vuejs.org/v2/api/#methods)
`watch` | 对象键是观察的表达式，值是回调函数 [#](https://v2.cn.vuejs.org/v2/api/#watch)

### DOM

:- | :-
:- | :-
`el` | 实例的挂载目标 [#](https://v2.cn.vuejs.org/v2/api/#el)
`template` | 字符串模板作为 Vue 实例的标识使用 [#](https://v2.cn.vuejs.org/v2/api/#template)
`render` | 字符串模板的代替方案 [#](https://v2.cn.vuejs.org/v2/api/#render)
`renderError` _(2.2.0)_ | `render`错误时提供另一种渲染 [#](https://v2.cn.vuejs.org/v2/api/#renderError)

### 生命周期钩子
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`beforeCreate` | 实例初始化之后 [#](https://v2.cn.vuejs.org/v2/api/#beforeCreate)
`created` | 实例创建完成后被立即同步调用 [#](https://v2.cn.vuejs.org/v2/api/#created)
`beforeMount` | 在挂载开始之前被调用 [#](https://v2.cn.vuejs.org/v2/api/#beforeMount)
`mounted` | 实例被挂载后调用 [#](https://v2.cn.vuejs.org/v2/api/#mounted)
`beforeUpdate` | 数据改变后 DOM 更新之前调用 [#](https://v2.cn.vuejs.org/v2/api/#beforeUpdate)
`updated` | 数据更改更新完毕之后被调用 [#](https://v2.cn.vuejs.org/v2/api/#updated)
`activated` | keep-alive 缓存组件激活时调用 [#](https://v2.cn.vuejs.org/v2/api/#activated)
`deactivated` | keep-alive 缓存的组件失活时调用 [#](https://v2.cn.vuejs.org/v2/api/#deactivated)
`beforeDestroy` | 实例销毁之前调用 [#](https://v2.cn.vuejs.org/v2/api/#beforeDestroy)
`destroyed` | 实例销毁后调用 [#](https://v2.cn.vuejs.org/v2/api/#destroyed)
`errorCaptured` _(2.5.0)_ | 来自后代组件的错误时被调用 [#](https://v2.cn.vuejs.org/v2/api/#errorCaptured)

### 资源

:- | :-
:- | :-
`directives` | 包含 Vue 实例可用指令的哈希表 [#](https://v2.cn.vuejs.org/v2/api/#directives)
`filters` | 包含 Vue 实例可用过滤器的哈希表 [#](https://v2.cn.vuejs.org/v2/api/#filters)
`components` | 包含 Vue 实例可用组件的哈希表 [#](https://v2.cn.vuejs.org/v2/api/#components)

### 组合

:- | :-
:- | :-
`parent` | 指定已创建的实例之父实例 [#](https://v2.cn.vuejs.org/v2/api/#parent)
`mixins` | 接收一个混入对象的数组 [#](https://v2.cn.vuejs.org/v2/api/#mixins)
`extends` | 声明扩展另一个组件 [#](https://v2.cn.vuejs.org/v2/api/#extends)
`provide/inject` _(2.2.0)_ | 祖组件向所有子孙后代注入依赖 [#](https://v2.cn.vuejs.org/v2/api/#provide-inject)

### 其它

:- | :-
:- | :-
`name` | 允许组件模板递归地调用自身 [#](https://v2.cn.vuejs.org/v2/api/#name)
`delimiters` | 改变纯文本插入分隔符 [#](https://v2.cn.vuejs.org/v2/api/#delimiters)
`functional` | 使组件无状态和无实例 [#](https://v2.cn.vuejs.org/v2/api/#functional)
`model` _(2.2.0)_ | 使用 v-model 时定制 prop 和 event [#](https://v2.cn.vuejs.org/v2/api/#model)
`inheritAttrs` _(2.4.0)_ | [#](https://v2.cn.vuejs.org/v2/api/#inheritAttrs)
`comments` _(2.4.0)_ | 是否保留模板中的`HTML`注释 [#](https://v2.cn.vuejs.org/v2/api/#comments)

### 实例方法 / 数据

:- | :-
:- | :-
`vm.$watch` | 观察 Vue 实例上的一个表达式<br/>或者一个函数计算结果的变化 [#](https://v2.cn.vuejs.org/v2/api/#vm-watch)
`vm.$set` | 全局 `Vue.set` 的别名 [#](https://v2.cn.vuejs.org/v2/api/#vm-set)
`vm.$delete` | 全局 `Vue.delete` 的别名 [#](https://v2.cn.vuejs.org/v2/api/#vm-delete)

### 实例 property
<!--rehype:wrap-class=row-span-3-->

:- | :-
:- | :-
`vm.$data` | [#](https://v2.cn.vuejs.org/v2/api/#vm-data)
`vm.$props` _(2.2.0)_ | [#](https://v2.cn.vuejs.org/v2/api/#vm-props)
`vm.$el` | [#](https://v2.cn.vuejs.org/v2/api/#vm-el)
`vm.$options` | [#](https://v2.cn.vuejs.org/v2/api/#vm-options)
`vm.$parent` | [#](https://v2.cn.vuejs.org/v2/api/#vm-parent)
`vm.$root` | [#](https://v2.cn.vuejs.org/v2/api/#vm-root)
`vm.$children` | [#](https://v2.cn.vuejs.org/v2/api/#vm-children)
`vm.$slots` | [#](https://v2.cn.vuejs.org/v2/api/#vm-slots)
`vm.$scopedSlots` _(2.1.0)_ | [#](https://v2.cn.vuejs.org/v2/api/#vm-scopedSlots)
`vm.$refs` | [#](https://v2.cn.vuejs.org/v2/api/#vm-refs)
`vm.$isServer` | [#](https://v2.cn.vuejs.org/v2/api/#vm-isServer)
`vm.$attrs` _(2.4.0)_ | [#](https://v2.cn.vuejs.org/v2/api/#vm-attrs)
`vm.$listeners` _(2.4.0)_ | [#](https://v2.cn.vuejs.org/v2/api/#vm-listeners)

### 实例方法 / 事件

:- | :-
:- | :-
`vm.$on` | 监听当前实例上的自定义事件 [#](https://v2.cn.vuejs.org/v2/api/#vm-on)
`vm.$once` | 监听一个自定义事件，只触发一次 [#](https://v2.cn.vuejs.org/v2/api/#vm-once)
`vm.$off` | 移除自定义事件监听器 [#](https://v2.cn.vuejs.org/v2/api/#vm-off)
`vm.$emit` | 触发当前实例上的事 [#](https://v2.cn.vuejs.org/v2/api/#vm-emit)

### 实例方法 / 生命周期

:- | :-
:- | :-
`vm.$mount` | 手动地挂载一个未挂载的实例 [#](https://v2.cn.vuejs.org/v2/api/#vm-mount)
`vm.$forceUpdate` | 迫使 Vue 实例重新渲染 [#](https://v2.cn.vuejs.org/v2/api/#vm-forceUpdate)
`vm.$nextTick` | 回调延迟执行 [#](https://v2.cn.vuejs.org/v2/api/#vm-nextTick)
`vm.$destroy` | 完全销毁一个实例 [#](https://v2.cn.vuejs.org/v2/api/#vm-destroy)

### 指令
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`v-text` | [#](https://v2.cn.vuejs.org/v2/api/#v-text)
`v-html` | [#](https://v2.cn.vuejs.org/v2/api/#v-html)
`v-show` | [#](https://v2.cn.vuejs.org/v2/api/#v-show)
`v-if` | [#](https://v2.cn.vuejs.org/v2/api/#v-if)
`v-else` | [#](https://v2.cn.vuejs.org/v2/api/#v-else)
`v-else-if` _(2.1.0)_ | [#](https://v2.cn.vuejs.org/v2/api/#v-else-if)
`v-for` | [#](https://v2.cn.vuejs.org/v2/api/#v-for)
`v-on` | [#](https://v2.cn.vuejs.org/v2/api/#v-on)
`v-bind` | [#](https://v2.cn.vuejs.org/v2/api/#v-bind)
`v-model` | [#](https://v2.cn.vuejs.org/v2/api/#v-model)
`v-slot` | [#](https://v2.cn.vuejs.org/v2/api/#v-slot)
`v-pre` | [#](https://v2.cn.vuejs.org/v2/api/#v-pre)
`v-cloak` | [#](https://v2.cn.vuejs.org/v2/api/#v-cloak)
`v-once` | [#](https://v2.cn.vuejs.org/v2/api/#v-once)

### 特殊 attribute

:- | :-
:- | :-
`key` | [#](https://v2.cn.vuejs.org/v2/api/#key)
`ref` | [#](https://v2.cn.vuejs.org/v2/api/#ref)
`is` | [#](https://v2.cn.vuejs.org/v2/api/#is)
~~`slot`~~ | 推荐 2.6.0 新增的 `v-slot` [#](https://v2.cn.vuejs.org/v2/api/#slot-废弃)
~~`slot-scope`~~ | 推荐 2.6.0 新增的 `v-slot` [#](https://v2.cn.vuejs.org/v2/api/#slot-scope-废弃)
~~`scope`~~ | `2.5.0` 新增的 `slot-scope` 取代 [#](https://v2.cn.vuejs.org/v2/api/#scope-移除)

### 内置的组件

:- | :-
:- | :-
`component` | [#](https://v2.cn.vuejs.org/v2/api/#component)
`transition` | [#](https://v2.cn.vuejs.org/v2/api/#transition)
`transition-group` | [#](https://v2.cn.vuejs.org/v2/api/#transition-group)
`keep-alive` | [#](https://v2.cn.vuejs.org/v2/api/#keep-alive)
`slot` | [#](https://v2.cn.vuejs.org/v2/api/#slot)

### v-on (事件)修饰符
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`v-on:click.stop` [#](https://v2.cn.vuejs.org/v2/api/#v-on) | 调用 event.stopPropagation()。
`v-on:click.prevent` [#](https://v2.cn.vuejs.org/v2/api/#v-on) | 调用 event.preventDefault()。
`v-on:click.capture` [#](https://v2.cn.vuejs.org/v2/api/#v-on) | 添加事件侦听器时使用 capture 模式。
`v-on:click.self` [#](https://v2.cn.vuejs.org/v2/api/#v-on) | 只当事件是从侦听器绑定的元素本身触发时才触发回调。
`v-on:click.{keyCode\|keyAlias}` [#](https://v2.cn.vuejs.org/v2/api/#v-on) | 只当事件是从特定键触发时才触发回调。
`v-on:click.native` [#](https://v2.cn.vuejs.org/v2/api/#v-on) | 监听组件根元素的原生事件。
`v-on:click.once` [#](https://v2.cn.vuejs.org/v2/api/#v-on) | 只触发一次回调。
`v-on:click.passive` _(2.3.0)_ [#](https://v2.cn.vuejs.org/v2/api/#v-on) | 以 { passive: true } 模式添加侦听器
<!--rehype:className=style-list-->


### v-on (鼠标)修饰符

:- | :-
:- | :-
`v-on:click.left` [#](https://v2.cn.vuejs.org/v2/api/#v-on) | 只当点击鼠标左键时触发
`v-on:click.right` [#](https://v2.cn.vuejs.org/v2/api/#v-on) | 只当点击鼠标右键时触发
`v-on:click.middle` [#](https://v2.cn.vuejs.org/v2/api/#v-on) | 只当点击鼠标中键时触发

在 _(2.2.0)_ 中新增

### 系统修饰键

:- | :-
:- | :-
`v-on:keyup.ctrl` _(2.1.0)_ | [#](https://v2.cn.vuejs.org/v2/guide/events.html#系统修饰键)
`v-on:keyup.alt` _(2.1.0)_ | [#](https://v2.cn.vuejs.org/v2/guide/events.html#系统修饰键)
`v-on:keyup.shift` _(2.1.0)_ | [#](https://v2.cn.vuejs.org/v2/guide/events.html#系统修饰键)
`v-on:keyup.meta` _(2.1.0)_ | [#](https://v2.cn.vuejs.org/v2/guide/events.html#系统修饰键)

### Keyboard 按键修饰符

:- | :-
:- | :-
`v-on:keyup.enter` | [#](https://v2.cn.vuejs.org/v2/guide/events.html#按键修饰符)
`v-on:keyup.tab` | [#](https://v2.cn.vuejs.org/v2/guide/events.html#按键修饰符)
`v-on:keyup.delete ` | 捕获“删除”和“退格”键 [#](https://v2.cn.vuejs.org/v2/guide/events.html#按键修饰符)
`v-on:keyup.esc` | [#](https://v2.cn.vuejs.org/v2/guide/events.html#按键修饰符)
`v-on:keyup.space` | [#](https://v2.cn.vuejs.org/v2/guide/events.html#按键修饰符)
`v-on:keyup.up` | [#](https://v2.cn.vuejs.org/v2/guide/events.html#按键修饰符)
`v-on:keyup.down` | [#](https://v2.cn.vuejs.org/v2/guide/events.html#按键修饰符)
`v-on:keyup.left` | [#](https://v2.cn.vuejs.org/v2/guide/events.html#按键修饰符)
`v-on:keyup.right` | [#](https://v2.cn.vuejs.org/v2/guide/events.html#按键修饰符)

### v-bind 修饰符

:- | :-
:- | :-
`v-bind.prop` [#](https://v2.cn.vuejs.org/v2/api/#v-bind) | 作为一个 DOM property 绑定而不是作为 attribute 绑定。([差别在哪里？](https://stackoverflow.com/questions/6003819/properties-and-attributes-in-html#answer-6004028))
`v-bind.camel` _(2.1.0+)_ [#](https://v2.cn.vuejs.org/v2/api/#v-bind) | 将 kebab-case attribute 名转换为 camelCase。
`v-bind.sync` _(2.3.0+)_ [#](https://v2.cn.vuejs.org/v2/api/#v-bind) | 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器。
<!--rehype:className=style-list-->

另见
---

- [Vue Essentials Cheat-Sheet.pdf](https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf) _(vuemastery.com)_
- [Vue 2 官方文档](https://v2.cn.vuejs.org/) _(vuejs.org)_
- [Vue 2 实例方法事件](https://marozed.com/vue-cheatsheet#Instance-Methods-Events) _(marozed.com)_
