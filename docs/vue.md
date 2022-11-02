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

响应式基础
---

### 声明状态

```html
<div>{{ count }}</div>
```

---

```js {2,4}
export default {
  data() {
    return {
      count: 0
    }
  },
}
```

### 声明方法

```html
<button @click="increment">
  {{ count }}
</button>
```

---

```js {8-10}
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
```

### 有状态方法

```js
import { debounce } from 'lodash-es'
export default {
  created() {
    // 每个实例都有了自己的预置防抖的处理函数
    this.debouncedClick = debounce(this.click, 500)
  },
  unmounted() {
    // 最好是在组件卸载时
    // 清除掉防抖计时器
    this.debouncedClick.cancel()
  },
  methods: {
    click() {
      // ... 对点击的响应 ...
    }
  }
}
```
<!--rehype:className=wrap-text -->

API 参考
---

### 应用实例 - (全局 API)
<!--rehype:wrap-class=row-span-3-->

:- | :-
:- | :-
`createApp()` | [#](https://cn.vuejs.org//api/application.html#create-app)
`createSSRApp()` | [#](https://cn.vuejs.org//api/application.html#create-ssr-app)
`app.mount()` | [#](https://cn.vuejs.org//api/application.html#app-mount)
`app.unmount()` | [#](https://cn.vuejs.org//api/application.html#app-unmount)
`app.provide()` | [#](https://cn.vuejs.org//api/application.html#app-provide)
`app.component()` | [#](https://cn.vuejs.org//api/application.html#app-component)
`app.directive()` | [#](https://cn.vuejs.org//api/application.html#app-directive)
`app.use()` | [#](https://cn.vuejs.org//api/application.html#app-use)
`app.mixin()` | [#](https://cn.vuejs.org//api/application.html#app-mixin)
`app.version` | [#](https://cn.vuejs.org//api/application.html#app-version)
`app.config` | [#](https://cn.vuejs.org//api/application.html#app-config)
`app.config.errorHandler` | [#](https://cn.vuejs.org//api/application.html#app-config-errorhandler)
`app.config.warnHandler` | [#](https://cn.vuejs.org//api/application.html#app-config-warnhandler)
`app.config.performance` | [#](https://cn.vuejs.org//api/application.html#app-config-performance)
`app.config.compilerOptions` | [#](https://cn.vuejs.org//api/application.html#app-config-compileroptions)
`app.config.globalProperties` | [#](https://cn.vuejs.org//api/application.html#app-config-globalproperties)
`app.config.optionMergeStrategies` | [#](https://cn.vuejs.org//api/application.html#app-config-optionmergestrategies)

### 通用 - (全局 API)

:- | :-
:- | :-
`version` | [#](https://cn.vuejs.org//api/general.html#version)
`nextTick()` | [#](https://cn.vuejs.org//api/general.html#nexttick)
`defineComponent()` | [#](https://cn.vuejs.org//api/general.html#definecomponent)
`defineAsyncComponent()` | [#](https://cn.vuejs.org//api/general.html#defineasynccomponent)
`defineCustomElement()` | [#](https://cn.vuejs.org//api/general.html#definecustomelement)

### setup() - (组合式 API)

:- | :-
:- | :-
`基本使用` | [#](https://cn.vuejs.org//api/composition-api-setup.html#basic-usage)
`访问 Props` | [#](https://cn.vuejs.org//api/composition-api-setup.html#accessing-props)
`Setup 上下文` | [#](https://cn.vuejs.org//api/composition-api-setup.html#setup-context)
`与渲染函数一起使用` | [#](https://cn.vuejs.org//api/composition-api-setup.html#usage-with-render-functions)

### 响应式: 工具 - (组合式 API)

:- | :-
:- | :-
`isRef()` | [#](https://cn.vuejs.org//api/reactivity-utilities.html#isref)
`unref()` | [#](https://cn.vuejs.org//api/reactivity-utilities.html#unref)
`toRef()` | [#](https://cn.vuejs.org//api/reactivity-utilities.html#toref)
`toRefs()` | [#](https://cn.vuejs.org//api/reactivity-utilities.html#torefs)
`isProxy()` | [#](https://cn.vuejs.org//api/reactivity-utilities.html#isproxy)
`isReactive()` | [#](https://cn.vuejs.org//api/reactivity-utilities.html#isreactive)
`isReadonly()` | [#](https://cn.vuejs.org//api/reactivity-utilities.html#isreadonly)

### 生命周期钩子 - (组合式 API)
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`onMounted()` | [#](https://cn.vuejs.org//api/composition-api-lifecycle.html#onmounted)
`onUpdated()` | [#](https://cn.vuejs.org//api/composition-api-lifecycle.html#onupdated)
`onUnmounted()` | [#](https://cn.vuejs.org//api/composition-api-lifecycle.html#onunmounted)
`onBeforeMount()` | [#](https://cn.vuejs.org//api/composition-api-lifecycle.html#onbeforemount)
`onBeforeUpdate()` | [#](https://cn.vuejs.org//api/composition-api-lifecycle.html#onbeforeupdate)
`onBeforeUnmount()` | [#](https://cn.vuejs.org//api/composition-api-lifecycle.html#onbeforeunmount)
`onErrorCaptured()` | [#](https://cn.vuejs.org//api/composition-api-lifecycle.html#onerrorcaptured)
`onRenderTracked()` | [#](https://cn.vuejs.org//api/composition-api-lifecycle.html#onrendertracked)
`onRenderTriggered()` | [#](https://cn.vuejs.org//api/composition-api-lifecycle.html#onrendertriggered)
`onActivated()` | [#](https://cn.vuejs.org//api/composition-api-lifecycle.html#onactivated)
`onDeactivated()` | [#](https://cn.vuejs.org//api/composition-api-lifecycle.html#ondeactivated)
`onServerPrefetch()` | [#](https://cn.vuejs.org//api/composition-api-lifecycle.html#onserverprefetch)

### 依赖注入 - (组合式 API)

:- | :-
:- | :-
`provide()` | [#](https://cn.vuejs.org//api/composition-api-dependency-injection.html#provide)
`inject()` | [#](https://cn.vuejs.org//api/composition-api-dependency-injection.html#inject)

### 响应式: 核心 - (组合式 API)

:- | :-
:- | :-
`ref()` | [#](https://cn.vuejs.org//api/reactivity-core.html#ref)
`computed ()` | [#](https://cn.vuejs.org//api/reactivity-core.html#computed)
`reactive()` | [#](https://cn.vuejs.org//api/reactivity-core.html#reactive)
`readonly()` | [#](https://cn.vuejs.org//api/reactivity-core.html#readonly)
`watchEffect()` | [#](https://cn.vuejs.org//api/reactivity-core.html#watcheffect)
`watchPostEffect()` | [#](https://cn.vuejs.org//api/reactivity-core.html#watchposteffect)
`watchSyncEffect()` | [#](https://cn.vuejs.org//api/reactivity-core.html#watchsynceffect)
`watch()` | [#](https://cn.vuejs.org//api/reactivity-core.html#watch)

### 状态选项 - (选项式 API)

:- | :-
:- | :-
`data` | [#](https://cn.vuejs.org//api/options-state.html#data)
`props` | [#](https://cn.vuejs.org//api/options-state.html#props)
`computed` | [#](https://cn.vuejs.org//api/options-state.html#computed)
`methods` | [#](https://cn.vuejs.org//api/options-state.html#methods)
`watch` | [#](https://cn.vuejs.org//api/options-state.html#watch)
`emits` | [#](https://cn.vuejs.org//api/options-state.html#emits)
`expose` | [#](https://cn.vuejs.org//api/options-state.html#expose)

### 生命周期选项 - (选项式 API)
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`beforeCreate` | [#](https://cn.vuejs.org//api/options-lifecycle.html#beforecreate)
`created` | [#](https://cn.vuejs.org//api/options-lifecycle.html#created)
`beforeMount` | [#](https://cn.vuejs.org//api/options-lifecycle.html#beforemount)
`mounted` | [#](https://cn.vuejs.org//api/options-lifecycle.html#mounted)
`beforeUpdate` | [#](https://cn.vuejs.org//api/options-lifecycle.html#beforeupdate)
`updated` | [#](https://cn.vuejs.org//api/options-lifecycle.html#updated)
`beforeUnmount` | [#](https://cn.vuejs.org//api/options-lifecycle.html#beforeunmount)
`unmounted` | [#](https://cn.vuejs.org//api/options-lifecycle.html#unmounted)
`errorCaptured` | [#](https://cn.vuejs.org//api/options-lifecycle.html#errorcaptured)
`renderTracked` | [#](https://cn.vuejs.org//api/options-lifecycle.html#rendertracked)
`renderTriggered` | [#](https://cn.vuejs.org//api/options-lifecycle.html#rendertriggered-sup-classvt-badge-dev-only)
`activated` | [#](https://cn.vuejs.org//api/options-lifecycle.html#activated)
`deactivated` | [#](https://cn.vuejs.org//api/options-lifecycle.html#deactivated)
`serverPrefetch` | [#](https://cn.vuejs.org//api/options-lifecycle.html#serverprefetch)

### 其他杂项 - (选项式 API)

:- | :-
:- | :-
`name` | [#](https://cn.vuejs.org//api/options-misc.html#name)
`inheritAttrs` | [#](https://cn.vuejs.org//api/options-misc.html#inheritattrs)
`components` | [#](https://cn.vuejs.org//api/options-misc.html#components)
`directives` | [#](https://cn.vuejs.org//api/options-misc.html#directives)

### 渲染选项 - (选项式 API)

:- | :-
:- | :-
`template` | [#](https://cn.vuejs.org//api/options-rendering.html#template)
`render` | [#](https://cn.vuejs.org//api/options-rendering.html#render)
`compilerOptions` | [#](https://cn.vuejs.org//api/options-rendering.html#compileroptions)

### 组件实例 - (选项式 API)
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`$data` | [#](https://cn.vuejs.org//api/component-instance.html#data)
`$props` | [#](https://cn.vuejs.org//api/component-instance.html#props)
`$el` | [#](https://cn.vuejs.org//api/component-instance.html#el)
`$options` | [#](https://cn.vuejs.org//api/component-instance.html#options)
`$parent` | [#](https://cn.vuejs.org//api/component-instance.html#parent)
`$root` | [#](https://cn.vuejs.org//api/component-instance.html#root)
`$slots` | [#](https://cn.vuejs.org//api/component-instance.html#slots)
`$refs` | [#](https://cn.vuejs.org//api/component-instance.html#refs)
`$attrs` | [#](https://cn.vuejs.org//api/component-instance.html#attrs)
`$watch()` | [#](https://cn.vuejs.org//api/component-instance.html#watch)
`$emit()` | [#](https://cn.vuejs.org//api/component-instance.html#emit)
`$forceUpdate()` | [#](https://cn.vuejs.org//api/component-instance.html#forceupdate)
`$nextTick()` | [#](https://cn.vuejs.org//api/component-instance.html#nexttick)

### 组合选项 - (选项式 API)

:- | :-
:- | :-
`provide` | [#](https://cn.vuejs.org//api/options-composition.html#provide)
`inject` | [#](https://cn.vuejs.org//api/options-composition.html#inject)
`mixins` | [#](https://cn.vuejs.org//api/options-composition.html#mixins)
`extends` | [#](https://cn.vuejs.org//api/options-composition.html#extends)

### 指令 - (内置内容)
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`v-text` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-text)
`v-html` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-html)
`v-show` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-show)
`v-if` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-if)
`v-else` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-else)
`v-else-if` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-else-if)
`v-for` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-for)
`v-on` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-on)
`v-bind` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-bind)
`v-model` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-model)
`v-slot` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-slot)
`v-pre` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-pre)
`v-once` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-once)
`v-memo` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-memo)
`v-cloak` | [#](https://cn.vuejs.org//api/built-in-directives.html#v-cloak)

### 组件 - (内置内容)

:- | :-
:- | :-
`<Transition>` | [#](https://cn.vuejs.org//api/built-in-components.html#transition)
`<TransitionGroup>` | [#](https://cn.vuejs.org//api/built-in-components.html#transitiongroup)
`<KeepAlive>` | [#](https://cn.vuejs.org//api/built-in-components.html#keepalive)
`<Teleport>` | [#](https://cn.vuejs.org//api/built-in-components.html#teleport)
`<Suspense>` | [#](https://cn.vuejs.org//api/built-in-components.html#suspense)

### 特殊 Attributes - (内置内容)

:- | :-
:- | :-
`key` | [#](https://cn.vuejs.org//api/built-in-special-attributes.html#key)
`ref` | [#](https://cn.vuejs.org//api/built-in-special-attributes.html#ref)
`is` | [#](https://cn.vuejs.org//api/built-in-special-attributes.html#is)

### 特殊元素 - (内置内容)

:- | :-
:- | :-
`<component>` | [#](https://cn.vuejs.org//api/built-in-special-elements.html#component)
`<slot>` | [#](https://cn.vuejs.org//api/built-in-special-elements.html#slot)

### 语法定义 - (单文件组件)
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`总览` | [#](https://cn.vuejs.org//api/sfc-spec.html#overview)
`相应语言块` | [#](https://cn.vuejs.org//api/sfc-spec.html#language-blocks)
`自动名称推导` | [#](https://cn.vuejs.org//api/sfc-spec.html#automatic-name-inference)
`预处理器` | [#](https://cn.vuejs.org//api/sfc-spec.html#pre-processors)
`Src 导入` | [#](https://cn.vuejs.org//api/sfc-spec.html#src-imports)
`注释` | [#](https://cn.vuejs.org//api/sfc-spec.html#comments)

### \<script setup> - (单文件组件)
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`基本语法` | [#](https://cn.vuejs.org//api/sfc-script-setup.html#basic-syntax)
`响应式` | [#](https://cn.vuejs.org//api/sfc-script-setup.html#reactivity)
`使用组件` | [#](https://cn.vuejs.org//api/sfc-script-setup.html#using-components)
`使用自定义指令` | [#](https://cn.vuejs.org//api/sfc-script-setup.html#using-custom-directives)
`defineProps() 和 defineEmits()` | [#](https://cn.vuejs.org//api/sfc-script-setup.html#defineprops-defineemits)
`defineExpose` | [#](https://cn.vuejs.org//api/sfc-script-setup.html#defineexpose)
`useSlots() 和 useAttrs()` | [#](https://cn.vuejs.org//api/sfc-script-setup.html#useslots-useattrs)
`与普通的 &lt;script&gt; 一起使用` | [#](https://cn.vuejs.org//api/sfc-script-setup.html#usage-alongside-normal-script)
`顶层 await` | [#](https://cn.vuejs.org//api/sfc-script-setup.html#top-level-await)
`针对 TypeScript 的功能` | [#](https://cn.vuejs.org//api/sfc-script-setup.html#typescript-only-features)
`限制` | [#](https://cn.vuejs.org//api/sfc-script-setup.html#restrictions)

### CSS 功能 - (单文件组件)

:- | :-
:- | :-
`组件作用域 CSS` | [#](https://cn.vuejs.org//api/sfc-css-features.html#scoped-css)
`CSS Modules` | [#](https://cn.vuejs.org//api/sfc-css-features.html#css-modules)
`CSS 中的 v-bind()` | [#](https://cn.vuejs.org//api/sfc-css-features.html#v-bind-in-css)

### 渲染函数 - (进阶 API)

:- | :-
:- | :-
`h()` | [#](https://cn.vuejs.org//api/render-function.html#h)
`mergeProps()` | [#](https://cn.vuejs.org//api/render-function.html#mergeprops)
`cloneVNode()` | [#](https://cn.vuejs.org//api/render-function.html#clonevnode)
`isVNode()` | [#](https://cn.vuejs.org//api/render-function.html#isvnode)
`resolveComponent()` | [#](https://cn.vuejs.org//api/render-function.html#resolvecomponent)
`resolveDirective()` | [#](https://cn.vuejs.org//api/render-function.html#resolvedirective)
`withDirectives()` | [#](https://cn.vuejs.org//api/render-function.html#withdirectives)
`withModifiers()` | [#](https://cn.vuejs.org//api/render-function.html#withmodifiers)

### 服务端渲染 - (进阶 API)

:- | :-
:- | :-
`renderToString()` | [#](https://cn.vuejs.org//api/ssr.html#rendertostring)
`renderToNodeStream()` | [#](https://cn.vuejs.org//api/ssr.html#rendertonodestream)
`pipeToNodeWritable()` | [#](https://cn.vuejs.org//api/ssr.html#pipetonodewritable)
`renderToWebStream()` | [#](https://cn.vuejs.org//api/ssr.html#rendertowebstream)
`pipeToWebWritable()` | [#](https://cn.vuejs.org//api/ssr.html#pipetowebwritable)
`renderToSimpleStream()` | [#](https://cn.vuejs.org//api/ssr.html#rendertosimplestream)
`useSSRContext()` | [#](https://cn.vuejs.org//api/ssr.html#usessrcontext)

### TypeScript 工具类型 - (进阶 API)

:- | :-
:- | :-
`PropType<T>` | [#](https://cn.vuejs.org//api/utility-types.html#proptypet)
`ComponentCustomProperties` | [#](https://cn.vuejs.org//api/utility-types.html#componentcustomproperties)
`ComponentCustomOptions` | [#](https://cn.vuejs.org//api/utility-types.html#componentcustomoptions)
`ComponentCustomProps` | [#](https://cn.vuejs.org//api/utility-types.html#componentcustomprops)
`CSSProperties` | [#](https://cn.vuejs.org//api/utility-types.html#cssproperties)

### 自定义渲染 - (进阶 API)

:- | :-
:- | :-
`createRenderer()` | [#](https://cn.vuejs.org//api/custom-renderer.html#create-renderer)


另见
---

- [Vue 3.x 官方文档](https://cn.vuejs.org/)
- [Vue Router 4.x 官方文档](https://router.vuejs.org/zh/)