Pinia 备忘清单
===

这是一份 [`Pinia`](https://pinia.vuejs.org/) 状态管理库的备忘单，列出了 Pinia 的常用命令和操作。

入门
---

### 安装 Pinia

```bash
npm install pinia
# or
yarn add pinia
# or
pnpm add pinia
```

### 定义 Store
<!--rehype:wrap-class=col-span-2 row-span-2-->

创建一个 store 文件（例如 `src/stores/counter.js`），并定义 `store`

```javascript
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
})
```

### 创建 Pinia 实例

```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
```

在你的 [Vue](./vue.md) 应用中创建一个 Pinia 实例并将其传递给 [Vue](./vue.md)

### 热重载 Store

使用 Vite 时，你可以启用热重载功能：

```javascript
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
```

### 使用 Store
<!--rehype:wrap-class=row-span-2-->

在组件中使用 `store`

```javascript
<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double Count: {{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment">Increment</button>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counterStore = useCounterStore()

    return {
      counterStore
    }
  }
}
</script>
```

### Modules 模式
<!--rehype:wrap-class=row-span-2-->

Pinia 不使用传统的 Vuex 模块模式。相反，推荐使用独立的 store 文件：

```javascript
// src/stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Alice',
    age: 25
  }),
  actions: {
    setName(name) {
      this.name = name
    }
  },
  getters: {
    isAdult: (state) => state.age >= 18
  }
})
```

### 使用 Options API

如果你更喜欢 Options API，可以这样使用 Pinia：

```javascript
<script>
import { defineComponent } from 'vue'
import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  setup() {
    const counterStore = useCounterStore()

    return {
      counterStore
    }
  }
})
</script>
```

高级用法
---

### 使用组合函数

你可以将 store 与组合函数一起使用：

```javascript
// src/composables/useCounter.js
import { useCounterStore } from '@/stores/counter'

export function useCounter() {
  const counterStore = useCounterStore()

  return {
    count: counterStore.count,
    doubleCount: counterStore.doubleCount,
    increment: counterStore.increment
  }
}
```

### 插件
<!--rehype:wrap-class=col-span-2-->

Pinia 支持插件。你可以编写插件来扩展 Pinia 的功能：

```javascript
// src/plugins/piniaPlugin.js
export function piniaPlugin({ store }) {
  store.$onAction(({ name, store, args, after, onError }) => {
    console.log(`Action ${name} was called with args:`, args)
  })
}

// main.js
import { createPinia } from 'pinia'
import { piniaPlugin } from './plugins/piniaPlugin'

const pinia = createPinia()
pinia.use(piniaPlugin)
```

### 持久化状态
<!--rehype:wrap-class=row-span-4 col-span-2-->

#### 1. 安装  `pinia-plugin-persist`
<!--rehype:style=color:#228e6c;font-weight: bold;text-align: left;-->

```bash
npm  pinia-plugin-persist
```

#### 2. 配置 Pinia 和 `pinia-plugin-persist`
<!--rehype:style=color:#228e6c;font-weight: bold;text-align: left;-->

在你的入口文件中配置 Pinia 和 `pinia-plugin-persist`。

**⚠️ Vue 2 项目**

```javascript
import Vue from 'vue'
import vueCompositionApi from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import App from './App.vue'

Vue.use(vueCompositionApi)
Vue.use(PiniaVuePlugin)

const pinia = createPinia()
pinia.use(piniaPersist)

new Vue({
  pinia,
  render: h => h(App)
}).$mount('#app')
```

**Vue 3 项目：**

```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App)
  .use(pinia)
  .mount('#app')
```

#### 3. 创建 Store 并启用持久化
<!--rehype:style=color:#228e6c;font-weight: bold;text-align: left;-->

创建一个 Pinia store，并启用持久化存储。

```javascript
// stores/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    firstName: 'S',
    lastName: 'L',
    accessToken: 'xxxxxxxxxxxxx'
  }),
  actions: {
    setToken(value) {
      this.accessToken = value
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ['accessToken']
      }
    ]
  }
})
```

#### 4. 使用 Store
<!--rehype:style=color:#228e6c;font-weight: bold;text-align: left;-->

在组件中使用创建好的 store。

```javascript
// src/components/SomeComponent.vue
<template>
  <div>
    <p>{{ userStore.firstName }} {{ userStore.lastName }}</p>
    <p>{{ userStore.accessToken }}</p>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/userStore'

export default {
  setup() {
    const userStore = useUserStore()
    
    return { userStore }
  }
}
</script>
```

### SSR 支持

Pinia 支持服务端渲染 (SSR)。在你的 SSR 入口文件中创建 Pinia 实例：

```javascript
import { createPinia } from 'pinia'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()

  app.use(pinia)
  return { app, pinia }
}
```

明白了，让我们来结合 `pinia-plugin-persist` 插件完善 Pinia 备忘清单。

### 使用 Vue Devtools

Pinia 可以与 Vue Devtools 一起使用。确保你安装了最新版本的 Vue Devtools，然后你可以在 Devtools 中查看和调试你的 Pinia store。

### 使用异步 Actions

Pinia 支持在 actions 中使用异步代码：

```javascript
// src/stores/todo.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    async fetchTodos() {
      const response = await axios.get('/api/todos')
      this.todos = response.data
    }
  }
})
```

### 测试 Pinia Store

你可以使用 Vue Test Utils 和 Jest 来测试你的 Pinia store：

```javascript
// __tests__/counterStore.test.js
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments the count', () => {
    const counterStore = useCounterStore()
    expect(counterStore.count).toBe(0)
    counterStore.increment()
    expect(counterStore.count).toBe(1)
  })

  it('returns double count', () => {
    const counterStore = useCounterStore()
    counterStore.count = 2
    expect(counterStore.doubleCount).toBe(4)
  })
})
```

另见
---

- [Pinia 官方文档](https://pinia.vuejs.org/)
- [Pinia GitHub 仓库](https://github.com/vuejs/pinia)
- [Pinia 快速上手](https://pinia.vuejs.org/getting-started.html)
- [pinia-plugin-persist 官方文档](https://seb-l.github.io/pinia-plugin-persist/basic-usage.html)
