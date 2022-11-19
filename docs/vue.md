Vue 3 备忘清单
===

渐进式 JavaScript 框架 [Vue 3](https://cn.vuejs.org/) 备忘清单的快速参考列表，包含常用 API 和示例。

入门
---

### 介绍

Vue 是一套用于构建用户界面的渐进式框架

- [Vue 3.x 官方文档](https://cn.vuejs.org/) _(cn.vuejs.org)_
- [Vue Router 4.x 官方文档](https://router.vuejs.org/zh/) _(router.vuejs.org)_
- [Vue 2 备忘清单](./vue2.md)
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
<!--rehype:className=wrap-text-->

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
<div>{{ state.count }}</div>
```

---

```js {6,7,11}
import { defineComponent, reactive } from 'vue';

// `defineComponent`用于IDE推导类型
export default defineComponent({
  // `setup` 是一个专门用于组合式 API 的特殊钩子函数
  setup() {
    const state = reactive({ count: 0 });

    // 暴露 state 到模板
    return {
      state
    };
  },
});
```

### 声明方法

```html
<button @click="increment">
  {{ state.count }}
</button>
```

---

```js {7-9,14}
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({ count: 0 });

    function increment() {
      state.count++;
    }

    // 不要忘记同时暴露 increment 函数
    return {
      state,
      increment
    };
  },
})
```

### `<script setup>` setup语法糖

```html {1}
<script setup>
import { reactive } from 'vue';

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>
```

**`setup`** 语法糖用于简化代码，尤其是当需要暴露的状态和方法越来越多时

### 用 `ref()` 定义响应式变量

```js
// `reactive`只能用于对象、数组和 Map、Set 这样的集合类型，对 string、number 和 boolean 这样的原始类型则需要使用`ref`
import { ref } from 'vue';

const count = ref(0);

console.log(count); // { value: 0 }
console.log(count.value); // 0

count.value++;
console.log(count.value); // 1

const objectRef = ref({ count: 0 });

// 这是响应式的替换
objectRef.value = { count: 1 };

const obj = {
  foo: ref(1),
  bar: ref(2)
};

// 该函数接收一个 ref
// 需要通过 .value 取值
// 但它会保持响应性
callSomeFunction(obj.foo);

// 仍然是响应式的
const { foo, bar } = obj;
```

```html
<!-- PS: 在html模板中不需要带.value就可以使用 -->
<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>
```

### 有状态方法

```js
import { reactive, defineComponent, onUnmounted } from 'vue';
import { debounce } from 'lodash-es';

export default defineComponent({
  setup() {
    // 每个实例都有了自己的预置防抖的处理函数
    const debouncedClick = debounce(click, 500);

    function click() {
      // ... 对点击的响应 ...
    }

    // 最好是在组件卸载时
    // 清除掉防抖计时器
    onUnmounted(() => {
      debouncedClick.cancel();
    });
  },
});
```

### 响应式样式

```js
<script setup>
import { ref } from 'vue'
const open = ref(false);
</script>

<template>
  <button @click="open = !open">Toggle</button>
  <div>Hello Vue!</div>  
</template>

<style scope>
  div{
    transition: height 0.1s linear;
    overflow: hidden;
    height: v-bind(open ? '30px' : '0px');
  }
</style>
```

响应式进阶 —— watch和computed
---

### 监听状态

```js
<script setup>
import { ref, watch } from 'vue';

const count = ref(0)
const isEvent = ref(false)

function increment() {
  state.count++
}

watch(count, function() {
  isEvent.value = count.value % 2 === 0
})
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
  <p>is event: {{ isEvent ? 'yes' : 'no' }}</p>
</template>
```

### 立即监听状态

```js
watch(count, function() {
  isEvent.value = count.value % 2 === 0
}, {
  // 上例中的 watch 不会立即执行，导致 isEvent 状态的初始值不准确。配置立即执行，会在一开始的时候立即执行一次
  immediate: true
})
```

### 计算状态

```js
<script setup>
import { ref, computed } from 'vue';

const text = ref('')

// computed 的回调函数里，会根据已有并用到的状态计算出新的状态
const capital = computed(function(){
  return text.value.toUpperCase();
})
</script>

<template>
  <input v-model="text" />
  <p>to capital: {{ capital }}</p>
</template>
```

组件通信
---

### defineProps

```js
<script setup>
import { defineProps } from 'vue';

// 这里可以将 `username` 解构出来，但是一旦解构出来再使用，就不具备响应式能力
defineProps({
  username: String
})
</script>

<template>
  <p>username: {{ username }}</p>
</template>
```

子组件定义需要的参数

```js
<script setup>
const username = 'vue'
</script>

<template>
  <children :username="username" />
</template>
```

父组件参入参数

### defineEmits

```js
<script setup>
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['search'])
  
const keyword = ref('')

const onSearch = function() {
  emit('search', keyword.value)
}
</script>

<template>
  <input v-model="keyword" />
  <button @click="onSearch">search</button>
</template>
```

子组件定义支持 `emit` 的函数

```js
<script setup>
const onSearch = function(keyword){
  console.log(keyword)
}
</script>

<template>
  <children @search="onSearch" />
</template>
```

父组件绑定子组件定义的事件

### defineExpose

```js
<script setup>
import { defineExpose, ref } from 'vue';

const keyword = ref('')

const onSearch = function() {
  console.log(keyword.value)
}

defineExpose({ onSearch })
</script>

<template>
  <input v-model="keyword" />
</template>
```

子组件对父组件暴露方法

```js
<script setup>
import { ref } from 'vue'  

const childrenRef = ref(null)

const onSearch = function(){
  childrenRef.value.onSearch()
}
</script>

<template>
  <children ref='childrenRef' />
  <button @click="onSearch">search</button>
</template>
```

父组件调用子组件的方法

### Provide / Inject

```ts
// types
import type { InjectionKey, Ref } from 'vue'

export const ProvideKey = Symbol() as InjectionKey<Ref<string>>
```

```ts
<script setup lang="ts">
import { provide, ref } from 'vue'
import { ProvideKey } from './types'

const text = ref<string>('123')
provide(ProvideKey, text)
</script>

<template>
  <input v-model="text" />
</template>
```

父组件为后代组件提供数据

```ts
<script setup lang="ts">
import { inject } from 'vue'
import { ProvideKey } from './types'

const value = inject(ProvideKey)
</script>

<template>
  <h4>{{value}}</h4>
</template>
```

后代组件注入父组件提供的数据

<!--rehype:className=wrap-text -->

API 参考
---

### 全局 API - 应用实例
<!--rehype:wrap-class=row-span-3-->

:- | :-
:- | :-
`createApp()` | 创建一个应用实例 [#](https://cn.vuejs.org/api/application.html#create-app)
`createSSRApp()` | 以 [SSR 激活](https://cn.vuejs.org/guide/scaling-up/ssr.html#client-hydration)模式创建一个应用实例 [#](https://cn.vuejs.org/api/application.html#create-ssr-app)
`app.mount()` | 将应用实例挂载在一个容器元素中 [#](https://cn.vuejs.org/api/application.html#app-mount)
`app.unmount()` | 卸载一个已挂载的应用实例 [#](https://cn.vuejs.org/api/application.html#app-unmount)
`app.provide()` | 提供一个可以在应用中的所有后代组件中注入使用的值 [#](https://cn.vuejs.org/api/application.html#app-provide)
`app.component()` | 注册或获取全局组件 [#](https://cn.vuejs.org/api/application.html#app-component)
`app.directive()` | 注册或获取全局指令 [#](https://cn.vuejs.org/api/application.html#app-directive)
`app.use()` | 安装一个插件 [#](https://cn.vuejs.org/api/application.html#app-use)
`app.mixin()` | 全局注册一个混入 [#](https://cn.vuejs.org/api/application.html#app-mixin)
`app.version` | 当前应用所使用的 Vue 版本号 [#](https://cn.vuejs.org/api/application.html#app-version)
`app.config` | 获得应用实例的配置设定 [#](https://cn.vuejs.org/api/application.html#app-config)
`app.config.errorHandler` | 为应用内抛出的未捕获错误指定一个全局处理函数 [#](https://cn.vuejs.org/api/application.html#app-config-errorhandler)
`app.config.warnHandler` | 为 Vue 的运行时警告指定一个自定义处理函数 [#](https://cn.vuejs.org/api/application.html#app-config-warnhandler)
`app.config.performance` | 在浏览器开发工具中追踪性能表现 [#](https://cn.vuejs.org/api/application.html#app-config-performance)
`app.config.compilerOptions` | 配置运行时编译器的选项 [#](https://cn.vuejs.org/api/application.html#app-config-compileroptions)
`app.config.globalProperties` | 注册全局属性对象 [#](https://cn.vuejs.org/api/application.html#app-config-globalproperties)
`app.config.optionMergeStrategies` | 定义自定义组件选项的合并策略的对象 [#](https://cn.vuejs.org/api/application.html#app-config-optionmergestrategies)

### 全局 API - 通用

:- | :-
:- | :-
`version` | Vue 版本号 [#](https://cn.vuejs.org/api/general.html#version)
`nextTick()` | 等待下一次 DOM 更新后执行回调 [#](https://cn.vuejs.org/api/general.html#nexttick)
`defineComponent()` | 在定义 Vue 组件时提供类型推导的辅助函数 [#](https://cn.vuejs.org/api/general.html#definecomponent)
`defineAsyncComponent()` | 定义一个异步组件 [#](https://cn.vuejs.org/api/general.html#defineasynccomponent)
`defineCustomElement()` | [#](https://cn.vuejs.org/api/general.html#definecustomelement)

### 组合式 API - setup()

:- | :-
:- | :-
`基本使用` | [#](https://cn.vuejs.org/api/composition-api-setup.html#basic-usage)
`访问 Props` | [#](https://cn.vuejs.org/api/composition-api-setup.html#accessing-props)
`Setup 上下文` | [#](https://cn.vuejs.org/api/composition-api-setup.html#setup-context)
`与渲染函数一起使用` | [#](https://cn.vuejs.org/api/composition-api-setup.html#usage-with-render-functions)

### 组合式 API - 响应式: 工具

:- | :-
:- | :-
`isRef()` | 判断是否为 ref [#](https://cn.vuejs.org/api/reactivity-utilities.html#isref)
`unref()` | 是 ref，返回内部值，否则返回参数本身 [#](https://cn.vuejs.org/api/reactivity-utilities.html#unref)
`toRef()` | 创建一个属性对应的 ref [#](https://cn.vuejs.org/api/reactivity-utilities.html#toref)
`toRefs()` | 将对象上的每一个可枚举属性转换为 ref [#](https://cn.vuejs.org/api/reactivity-utilities.html#torefs)
`isProxy()` | 检查一个对象是否是由 `reactive()`、`readonly()`、`shallowReactive()` 或 `shallowReadonly()` 创建的代理 [#](https://cn.vuejs.org/api/reactivity-utilities.html#isproxy)
`isReactive()` | 检查一个对象是否是由 `reactive()` 或 `shallowReactive()` 创建的代理。  [#](https://cn.vuejs.org/api/reactivity-utilities.html#isreactive)
`isReadonly()` | 检查传入的值是否为只读对象 [#](https://cn.vuejs.org/api/reactivity-utilities.html#isreadonly)

### 组合式 API - 生命周期钩子
<!--rehype:wrap-class=row-span-3-->

:- | :-
:- | :-
`onMounted()` | 组件挂载完成后执行 [#](https://cn.vuejs.org/api/composition-api-lifecycle.html#onmounted)
`onUpdated()` | 状态变更而更新其 DOM 树之后调用 [#](https://cn.vuejs.org/api/composition-api-lifecycle.html#onupdated)
`onUnmounted()` | 组件实例被卸载之后调用 [#](https://cn.vuejs.org/api/composition-api-lifecycle.html#onunmounted)
`onBeforeMount()` | 组件被挂载之前被调用 [#](https://cn.vuejs.org/api/composition-api-lifecycle.html#onbeforemount)
`onBeforeUpdate()` | 状态变更而更新其 DOM 树之前调用 [#](https://cn.vuejs.org/api/composition-api-lifecycle.html#onbeforeupdate)
`onBeforeUnmount()` | 组件实例被卸载之前调用 [#](https://cn.vuejs.org/api/composition-api-lifecycle.html#onbeforeunmount)
`onErrorCaptured()` | 捕获了后代组件传递的错误时调用 [#](https://cn.vuejs.org/api/composition-api-lifecycle.html#onerrorcaptured)
`onRenderTracked()` | 组件渲染过程中追踪到响应式依赖时调用 [#](https://cn.vuejs.org/api/composition-api-lifecycle.html#onrendertracked)
`onRenderTriggered()` | 响应式依赖的变更触发了组件渲染时调用 [#](https://cn.vuejs.org/api/composition-api-lifecycle.html#onrendertriggered)
`onActivated()` | 若组件实例是 \<KeepAlive> 缓存树的一部分，当组件被插入到 DOM 中时调用 [#](https://cn.vuejs.org/api/composition-api-lifecycle.html#onactivated)
`onDeactivated()` | 若组件实例是 \<KeepAlive> 缓存树的一部分，当组件从 DOM 中被移除时调用 [#](https://cn.vuejs.org/api/composition-api-lifecycle.html#ondeactivated)
`onServerPrefetch()` | 组件实例在服务器上被渲染之前调用 [#](https://cn.vuejs.org/api/composition-api-lifecycle.html#onserverprefetch)
<!--rehype:className=style-list-->

### 组合式 API - 依赖注入

:- | :-
:- | :-
`provide()` | 提供一个可以被后代组件中注入使用的值 [#](https://cn.vuejs.org/api/composition-api-dependency-injection.html#provide)
`inject()` | 注入一个由祖先组件提供的值 [#](https://cn.vuejs.org/api/composition-api-dependency-injection.html#inject)

### 组合式 API - 响应式: 核心

:- | :-
:- | :-
`ref()` | 返回一个 ref 对象 [#](https://cn.vuejs.org/api/reactivity-core.html#ref)
`computed ()` | 定义一个计算属性 [#](https://cn.vuejs.org/api/reactivity-core.html#computed)
`reactive()` | 返回一个对象的响应式代理 [#](https://cn.vuejs.org/api/reactivity-core.html#reactive)
`readonly()` | 返回一个原值的只读代理 [#](https://cn.vuejs.org/api/reactivity-core.html#readonly)
`watchEffect()` | 立即运行一个函数，同时监听 [#](https://cn.vuejs.org/api/reactivity-core.html#watcheffect)
`watchPostEffect()` | `watchEffect()` 使用 `flush: 'post'` 选项时的别名。 [#](https://cn.vuejs.org/api/reactivity-core.html#watchposteffect)
`watchSyncEffect()` | `watchEffect()` 使用 `flush: 'sync'` 选项时的别名。 [#](https://cn.vuejs.org/api/reactivity-core.html#watchsynceffect)
`watch()` | 侦听一个或多个响应式数据源 [#](https://cn.vuejs.org/api/reactivity-core.html#watch)

### 选项式 API - 状态选项

:- | :-
:- | :-
`data` | 声明组件初始响应式状态 [#](https://cn.vuejs.org/api/options-state.html#data)
`props` | 声明一个组件的 props [#](https://cn.vuejs.org/api/options-state.html#props)
`computed` | 声明要在组件实例上暴露的计算属性 [#](https://cn.vuejs.org/api/options-state.html#computed)
`methods` | 声明要混入到组件实例中的方法 [#](https://cn.vuejs.org/api/options-state.html#methods)
`watch` | 声明在数据更改时调用的侦听回调 [#](https://cn.vuejs.org/api/options-state.html#watch)
`emits` | 声明由组件触发的自定义事件 [#](https://cn.vuejs.org/api/options-state.html#emits)
`expose` | 声明当组件实例被父组件通过模板引用访问时暴露的公共属性 [#](https://cn.vuejs.org/api/options-state.html#expose)

### 选项式 API - 生命周期选项
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`beforeCreate` | 组件实例初始化完成之后立即调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#beforecreate)
`created` | 组件实例处理完所有与状态相关的选项后调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#created)
`beforeMount` | 组件被挂载之前调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#beforemount)
`mounted` | 组件被挂载之后调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#mounted)
`beforeUpdate` | 状态变更而更新其 DOM 树之前调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#beforeupdate)
`updated` | 状态变更而更新其 DOM 树之后调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#updated)
`beforeUnmount` | 组件实例被卸载之前调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#beforeunmount)
`unmounted` | 组件实例被卸载之后调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#unmounted)
`errorCaptured` | 捕获了后代组件传递的错误时调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#errorcaptured)
`renderTracked` _Dev only_ | 组件渲染过程中追踪到响应式依赖时调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#rendertracked)
`renderTriggered` _Dev only_ | 响应式依赖的变更触发了组件渲染时调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#rendertriggered-sup-classvt-badge-dev-only)
`activated` | 若组件实例是 <KeepAlive> 缓存树的一部分，当组件被插入到 DOM 中时调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#activated)
`deactivated` | 若组件实例是 <KeepAlive> 缓存树的一部分，当组件从 DOM 中被移除时调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#deactivated)
`serverPrefetch` _SSR only_ | 组件实例在服务器上被渲染之前调用 [#](https://cn.vuejs.org/api/options-lifecycle.html#serverprefetch)

### 选项式 API - 其他杂项

:- | :-
:- | :-
`name` | 显式声明组件展示时的名称 [#](https://cn.vuejs.org/api/options-misc.html#name)
`inheritAttrs` | 是否启用默认的组件 `attribute` 透传行为 [#](https://cn.vuejs.org/api/options-misc.html#inheritattrs)
`components` | 注册对当前组件实例可用的组件 [#](https://cn.vuejs.org/api/options-misc.html#components)
`directives` | 注册对当前组件实例可用的指令 [#](https://cn.vuejs.org/api/options-misc.html#directives)

### 选项式 API - 渲染选项

:- | :-
:- | :-
`template` | 声明组件的字符串模板 [#](https://cn.vuejs.org/api/options-rendering.html#template)
`render` | 编程式地创建组件虚拟 DOM 树的函数 [#](https://cn.vuejs.org/api/options-rendering.html#render)
`compilerOptions` | 配置组件模板的运行时编译器选项 [#](https://cn.vuejs.org/api/options-rendering.html#compileroptions)

### 选项式 API - 组件实例
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`$data` | 观察的数据对象 [#](https://cn.vuejs.org/api/component-instance.html#data)
`$props` | 组件已解析的 props 对象 [#](https://cn.vuejs.org/api/component-instance.html#props)
`$el` | 实例管理的 DOM 根节点 [#](https://cn.vuejs.org/api/component-instance.html#el)
`$options` | 实例的初始化选项 [#](https://cn.vuejs.org/api/component-instance.html#options)
`$parent` | 父实例 [#](https://cn.vuejs.org/api/component-instance.html#parent)
`$root` | 当前组件树的根实例 [#](https://cn.vuejs.org/api/component-instance.html#root)
`$slots` | 访问被插槽分发的内容 [#](https://cn.vuejs.org/api/component-instance.html#slots)
`$refs` | DOM 元素和组件实例 [#](https://cn.vuejs.org/api/component-instance.html#refs)
`$attrs` | 包含了组件所有[透传 attributes](https://cn.vuejs.org/guide/components/attrs.html) [#](https://cn.vuejs.org/api/component-instance.html#attrs)
`$watch()` | 观察 Vue 实例上的一个表达式或者一个函数计算结果的变化 [#](https://cn.vuejs.org/api/component-instance.html#watch)
`$emit()` | 触发一个自定义事件 [#](https://cn.vuejs.org/api/component-instance.html#emit)
`$forceUpdate()` | 强制该组件重新渲染 [#](https://cn.vuejs.org/api/component-instance.html#forceupdate)
`$nextTick()` | 回调延迟执行 [#](https://cn.vuejs.org/api/component-instance.html#nexttick)

### 选项式 API - 组合选项

:- | :-
:- | :-
`provide` | 提供可以被后代组件注入的值 [#](https://cn.vuejs.org/api/options-composition.html#provide)
`inject` | 注入一个由祖先组件提供的值 [#](https://cn.vuejs.org/api/options-composition.html#inject)
`mixins` | 接收一个混入对象的数组 [#](https://cn.vuejs.org/api/options-composition.html#mixins)
`extends` | 要继承的“基类”组件 [#](https://cn.vuejs.org/api/options-composition.html#extends)

### 内置内容 - 指令
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`v-text` | 更新元素的 `textContent` [#](https://cn.vuejs.org/api/built-in-directives.html#v-text)
`v-html` | 更新元素的 `innerHTML` [#](https://cn.vuejs.org/api/built-in-directives.html#v-html)
`v-show` | 切换元素的 `display` css 属性 [#](https://cn.vuejs.org/api/built-in-directives.html#v-show)
`v-if` | 有条件地渲染元素 [#](https://cn.vuejs.org/api/built-in-directives.html#v-if)
`v-else` | [#](https://cn.vuejs.org/api/built-in-directives.html#v-else)
`v-else-if` | [#](https://cn.vuejs.org/api/built-in-directives.html#v-else-if)
`v-for` | 多次渲染元素或模板块 [#](https://cn.vuejs.org/api/built-in-directives.html#v-for)
`v-on` | 绑定事件监听器 [#](https://cn.vuejs.org/api/built-in-directives.html#v-on)
`v-bind` | 动态地绑定一个或多个属性 [#](https://cn.vuejs.org/api/built-in-directives.html#v-bind)
`v-model` | 创建双向绑定 [#](https://cn.vuejs.org/api/built-in-directives.html#v-model)
`v-slot` | 提供插槽或接收 props 的插槽 [#](https://cn.vuejs.org/api/built-in-directives.html#v-slot)
`v-pre` | 跳过元素和它的子元素编译过程 [#](https://cn.vuejs.org/api/built-in-directives.html#v-pre)
`v-once` | 只渲染元素和组件一次 [#](https://cn.vuejs.org/api/built-in-directives.html#v-once)
`v-memo` _(3.2+)_ | 缓存一个模板的子树 [#](https://cn.vuejs.org/api/built-in-directives.html#v-memo)
`v-cloak` | 保持在元素上直到实例结束编译 [#](https://cn.vuejs.org/api/built-in-directives.html#v-cloak)

### 内置内容 - 组件

:- | :-
:- | :-
`<Transition>` | 单个元素/组件的过渡效果 [#](https://cn.vuejs.org/api/built-in-components.html#transition)
`<TransitionGroup>` | 多个元素/组件的过渡效果 [#](https://cn.vuejs.org/api/built-in-components.html#transitiongroup)
`<KeepAlive>` | 缓存包裹在其中的动态切换组件 [#](https://cn.vuejs.org/api/built-in-components.html#keepalive)
`<Teleport>` | 将其插槽内容渲染到 DOM 中的另一个位置 [#](https://cn.vuejs.org/api/built-in-components.html#teleport)
`<Suspense>` _(Experimental)_ | 协调对组件树中嵌套的异步依赖的处理 [#](https://cn.vuejs.org/api/built-in-components.html#suspense)

### 内置内容 - 特殊 Attributes

:- | :-
:- | :-
`key` | 用在 Vue 的虚拟 DOM 算法 [#](https://cn.vuejs.org/api/built-in-special-attributes.html#key)
`ref` | 元素或子组件注册引用信息 [#](https://cn.vuejs.org/api/built-in-special-attributes.html#ref)
`is` | 绑定动态组件 [#](https://cn.vuejs.org/api/built-in-special-attributes.html#is)

### 内置内容 - 特殊元素

:- | :-
:- | :-
`<component>` | 渲染一个“元组件”用于动态组件或元素 [#](https://cn.vuejs.org/api/built-in-special-elements.html#component)
`<slot>` | 组件模板中的插槽内容出口 [#](https://cn.vuejs.org/api/built-in-special-elements.html#slot)

### 单文件组件 - 语法定义
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`总览` | [#](https://cn.vuejs.org/api/sfc-spec.html#overview)
`相应语言块` | [#](https://cn.vuejs.org/api/sfc-spec.html#language-blocks)
`自动名称推导` | [#](https://cn.vuejs.org/api/sfc-spec.html#automatic-name-inference)
`预处理器` | [#](https://cn.vuejs.org/api/sfc-spec.html#pre-processors)
`Src 导入` | [#](https://cn.vuejs.org/api/sfc-spec.html#src-imports)
`注释` | [#](https://cn.vuejs.org/api/sfc-spec.html#comments)

### 单文件组件 - \<script setup>
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`基本语法` | [#](https://cn.vuejs.org/api/sfc-script-setup.html#basic-syntax)
`响应式` | [#](https://cn.vuejs.org/api/sfc-script-setup.html#reactivity)
`使用组件` | [#](https://cn.vuejs.org/api/sfc-script-setup.html#using-components)
`使用自定义指令` | [#](https://cn.vuejs.org/api/sfc-script-setup.html#using-custom-directives)
`defineProps() 和 defineEmits()` | [#](https://cn.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits)
`defineExpose` | [#](https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose)
`useSlots() 和 useAttrs()` | [#](https://cn.vuejs.org/api/sfc-script-setup.html#useslots-useattrs)
`与普通的 &lt;script&gt; 一起使用` | [#](https://cn.vuejs.org/api/sfc-script-setup.html#usage-alongside-normal-script)
`顶层 await` | [#](https://cn.vuejs.org/api/sfc-script-setup.html#top-level-await)
`针对 TypeScript 的功能` | [#](https://cn.vuejs.org/api/sfc-script-setup.html#typescript-only-features)
`限制` | [#](https://cn.vuejs.org/api/sfc-script-setup.html#restrictions)

### 单文件组件 - CSS 功能

:- | :-
:- | :-
`组件作用域 CSS` | [#](https://cn.vuejs.org/api/sfc-css-features.html#scoped-css)
`CSS Modules` | [#](https://cn.vuejs.org/api/sfc-css-features.html#css-modules)
`CSS 中的 v-bind()` | [#](https://cn.vuejs.org/api/sfc-css-features.html#v-bind-in-css)

### 进阶 API - 渲染函数

:- | :-
:- | :-
`h()` | 创建虚拟 DOM 节点 [#](https://cn.vuejs.org/api/render-function.html#h)
`mergeProps()` | 合并多个 props 对象 [#](https://cn.vuejs.org/api/render-function.html#mergeprops)
`cloneVNode()` | 克隆一个 vnode [#](https://cn.vuejs.org/api/render-function.html#clonevnode)
`isVNode()` | 判断一个值是否为 vnode 类型 [#](https://cn.vuejs.org/api/render-function.html#isvnode)
`resolveComponent()` | 按名称手动解析已注册的组件 [#](https://cn.vuejs.org/api/render-function.html#resolvecomponent)
`resolveDirective()` | 按名称手动解析已注册的指令 [#](https://cn.vuejs.org/api/render-function.html#resolvedirective)
`withDirectives()` | 用于给 vnode 增加自定义指令 [#](https://cn.vuejs.org/api/render-function.html#withdirectives)
`withModifiers()` | 用于向事件处理函数添加内置 `v-on 修饰符` [#](https://cn.vuejs.org/api/render-function.html#withmodifiers)

### 进阶 API - 服务端渲染

:- | :-
:- | :-
`renderToString()` | [#](https://cn.vuejs.org/api/ssr.html#rendertostring)
`renderToNodeStream()` | [#](https://cn.vuejs.org/api/ssr.html#rendertonodestream)
`pipeToNodeWritable()` | [#](https://cn.vuejs.org/api/ssr.html#pipetonodewritable)
`renderToWebStream()` | [#](https://cn.vuejs.org/api/ssr.html#rendertowebstream)
`pipeToWebWritable()` | [#](https://cn.vuejs.org/api/ssr.html#pipetowebwritable)
`renderToSimpleStream()` | [#](https://cn.vuejs.org/api/ssr.html#rendertosimplestream)
`useSSRContext()` | [#](https://cn.vuejs.org/api/ssr.html#usessrcontext)

### 进阶 API - TypeScript 工具类型

:- | :-
:- | :-
`PropType<T>` | 在用运行时 props 声明时给一个 prop 标注更复杂的类型定义 [#](https://cn.vuejs.org/api/utility-types.html#proptypet)
`ComponentCustomProperties` | 增强组件实例类型以支持自定义全局属性 [#](https://cn.vuejs.org/api/utility-types.html#componentcustomproperties)
`ComponentCustomOptions` | 扩展组件选项类型以支持自定义选项 [#](https://cn.vuejs.org/api/utility-types.html#componentcustomoptions)
`ComponentCustomProps` | 扩展全局可用的 TSX props [#](https://cn.vuejs.org/api/utility-types.html#componentcustomprops)
`CSSProperties` | 扩展在样式属性绑定上允许的值的类型 [#](https://cn.vuejs.org/api/utility-types.html#cssproperties)

### 进阶 API - 自定义渲染

:- | :-
:- | :-
`createRenderer()` | 创建一个自定义渲染器 [#](https://cn.vuejs.org/api/custom-renderer.html#create-renderer)

另见
---

- [Vue 3.x 官方文档](https://cn.vuejs.org/)
- [Vue Router 4.x 官方文档](https://router.vuejs.org/zh/)
