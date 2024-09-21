Next.js 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/next.svg?style=flat)](https://www.npmjs.com/package/next)
[![Downloads](https://img.shields.io/npm/dm/next.svg?style=flat)](https://www.npmjs.com/package/next)
[![Repo Dependents](https://badgen.net/github/dependents-repo/vercel/next.js)](https://github.com/vercel/next.js/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/vercel/next.js)

这是一份快速参考备忘单，包含 [Next.js](https://nextjs.org/) 的 API 参考列表和一些示例
<!--rehype:style=padding-top: 12px;-->

入门
----

### 创建项目

```shell
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
```

或者创建 [TypeScript](./typescript.md) 项目

```shell
npx create-next-app@latest --typescript
# or
yarn create next-app --typescript
# or
pnpm create next-app --typescript
```

运行 `npm run dev` 或 `yarn dev` 或 `pnpm dev` 以在 <http://localhost:3000> 上启动开发服务器

### 添加首页

使用以下内容填充 `pages/index.js`：

```jsx
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
```

`Next.js` 是围绕页面的概念构建的。 页面是从 `pages` 目录中的 `.js`、`.jsx`、`.ts` 或 `.tsx` 文件导出的 `React` 组件

### getServerSideProps
<!--rehype:wrap-class=row-span-2-->

```jsx
function Page({ data }) {
  // 渲染数据...
}

// 每个请求都会调用它
export async function getServerSideProps() {
  // 从外部 API 获取数据
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // 通过 props 向页面传递数据
  return { props: { data } }
}

export default Page
```

如果您从页面导出一个名为 `getServerSideProps`（服务器端渲染）的函数，`Next.js` 将使用 `getServerSideProps` 返回的数据在每个请求上预渲染该页面

- 当您直接请求此页面时，`getServerSideProps` 在请求时运行，此页面将使用返回的 props 进行预渲染
- 当您通过 `next/link` 或 `next/router` 在客户端页面转换上请求此页面时，`Next.js` 会向服务器发送 API 请求，服务器运行 `getServerSideProps`

### getStaticPaths
<!--rehype:wrap-class=row-span-2-->

```jsx
// pages/posts/[id].js
export async function getStaticPaths() {
  // 当这是真的时（在预览环境中）不要预呈现任何静态页面（更快的构建，但更慢的初始页面加载）
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  // 调用外部 API 端点以获取帖子
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // 根据帖子获取我们要预渲染的路径 在生产环境中，预渲染所有页面
  // （构建速度较慢，但初始页面加载速度较快）
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // { fallback: false } 表示其他路由应该 404
  return { paths, fallback: false }
}
```

如果页面具有动态路由并使用 `getStaticProps`，则需要定义要静态生成的路径列表

- 数据来自无头 CMS
- 数据来自数据库
- 数据来自文件系统
- 数据可以公开缓存（非用户特定）
- 页面必须预渲染（用于 SEO）并且速度非常快 —— `getStaticProps` 生成 HTML 和 JSON 文件，这两种文件都可以由 CDN 缓存以提高性能

### getStaticProps
<!--rehype:wrap-class=row-span-2-->

```jsx
// 帖子将在构建时由 getStaticProps() 填充
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

// 这个函数在服务器端的构建时被调用。
// 它不会在客户端调用，因此您甚至可以直接进行数据库查询。
export async function getStaticProps() {
  // 调用外部 API 端点以获取帖子。 您可以使用任何数据获取库
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // 通过返回 { props: { posts } }，Blog 组件将在构建时接收 `posts` 作为 prop
  return {
    props: {
      posts,
    },
  }
}

export default Blog
```

在服务器端的构建时被调用

### 增量静态再生
<!--rehype:wrap-class=row-span-2-->

```jsx
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

// 这个函数在服务器端的构建时被调用
// 如果启用了重新验证并且有新请求进入，它可能会在无服务器功能上再次调用
export async function getStaticProps() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    // Next.js 将尝试重新生成页面：
    // - 当请求进来时
    // - 最多每 10 秒一次
    revalidate: 10, // 片刻之间
  }
}

// 这个函数在服务器端的构建时被调用
// 如果尚未生成路径，则可能会在无服务器函数上再次调用它
export async function getStaticPaths() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // 根据帖子获取我们要预渲染的路径
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // 我们将在构建时仅预渲染这些路径
  // { fallback: blocking } 如果路径不存在，服务器将按需呈现页面
  return { paths, fallback: 'blocking' }
}

export default Blog
```

- 在初始请求之后和 10 秒之前对页面的任何请求也会被缓存和即时
- 在 10 秒窗口之后，下一个请求仍将显示缓存的（陈旧的）页面
- Next.js 在后台触发页面的重新生成
- 一旦页面生成成功，Next.js 将使缓存失效并显示更新后的页面。如果后台重新生成失败，旧页面仍将保持不变

### 使用 useEffect 客户端数据获取

```jsx
import { useState, useEffect } from 'react'

function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/profile-data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}
```

### 使用 SWR 获取客户端数据

```jsx
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Profile() {
  const { data, error } = useSWR('/api/profile-data', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}
```

### 静态文件服务

Next.js 可以在根目录中名为 `public` 的文件夹下提供静态文件，如图像。 然后，您的代码可以从基本 URL (`/`) 开始引用 `public` 中的文件

```jsx
import Image from 'next/image'

function Avatar() {
  return (
    <Image
      src="/me.png"
      alt="me"
      width="64"
      height="64"
    />
  )
}

export default Avatar
```

### 支持的浏览器和功能

Next.js 支持零配置的现代浏览器

- Chrome 64+
- Edge 79+
- Firefox 67+
- Opera 51+
- Safari 12+
<!--rehype:className=cols-3-->

Next.js 支持在 `package.json` 文件中配置 `Browserslist`

```js
{
  "browserslist": [
    "chrome 64",
    "edge 79",
    "firefox 67",
    "opera 51",
    "safari 12"
  ]
}
```

内置 CSS 支持
---

### 添加全局样式表
<!--rehype:wrap-class=row-span-2-->

如果不存在，请创建一个 `pages/_app.js` 文件。 然后，导入 `styles.css` 文件

```jsx
import '../styles.css';

// 在新的“pages/_app.js”文件中需要此默认导出
export default function MyApp({
  Component, pageProps
}) {
  return <Component {...pageProps} />
}
```

例如，考虑以下名为 `styles.css` 的样式表

```css
body {
  font-family:
    'SF Pro Text', 'SF Pro Icons',
    'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  margin: 0 auto;
}
```

### 从 node_modules 导入样式

对于全局样式表，如 `bootstrap` 或 `nprogress`，您应该在 `pages/_app.js` 中导入文件

```jsx
// pages/_app.js
import 'bootstrap/dist/css/bootstrap.css'

export default function MyApp({
  Component, pageProps
}) {
  return <Component {...pageProps} />
}
```

从 <red>Next.js 9.5.4</red> 开始，您的应用程序中的任何地方都允许从 `node_modules` 导入 CSS 文件

### 添加组件级 CSS (CSS Modules)
<!--rehype:wrap-class=row-span-2-->

您无需担心 .error {} 与任何其他 `.css` 或 `.module.css` 文件！他将被生成 `hash` 名称

```css
.error {
  color: white;
  background-color: red;
}
```

然后，创建 `components/Button.js`，导入并使用上面的 CSS 文件：

```jsx
import styles from './Button.module.css'

export function Button() {
  return (
    <button
      type="button"
      // 请注意“error”类
      // 是如何作为导入的“styles”对象的属性访问的
      className={styles.error}
    >
      Destroy
    </button>
  )
}
```

### Sass 支持

Next.js 允许您使用 `.scss` 和 `.sass` 扩展名导入 Sass，可以通过 CSS 模块和 `.module.scss` 或 `.module.sass` 扩展名使用组件级 `Sass`

```shell
$ npm install --save-dev sass
```

在使用 Next.js 的内置 `Sass` 支持之前，请务必<pur>安装 `sass`</pur>

### 自定义 Sass 选项
<!--rehype:wrap-class=col-span-2-->

通过在 `next.config.js` 中使用 `sassOptions` 来实现配置 `Sass` 编译器。例如添加 `includePaths`：

```js
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths:
        [path.join(__dirname, 'styles')],
  },
}
```

#### Sass 变量

```sass
/* variables.module.scss */
$primary-color: #64ff00;

:export {
  primaryColor: $primary-color;
}
```

在 `pages/_app.js` 中导入 `variables.module.scss`

```jsx
import variables from '../styles/variables.module.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout color={variables.primaryColor}>
      <Component {...pageProps} />
    </Layout>
  )
}
```

### CSS-in-JS

最简单的一种是内联样式：

```jsx
function HiThere() {
  return (
    <p style={{ color: 'red' }}>hi 这里</p>
  )
}

export default HiThere
```

使用 [styled-jsx](https://github.com/vercel/styled-jsx) 的组件如下所示：

```jsx
function HelloWorld() {
  return (
    <div>
      Hello world
      <p>scoped!</p>
      <style jsx>{`
        p { color: blue; }
        div { background: red; }
        @media (max-width: 600px) {
          div { background: blue; }
        }
      `}</style>
      <style global jsx>{`
        body { background: black; }
      `}</style>
    </div>
  )
}

export default HelloWorld
```

当然，你也可以使用 [styled-components](./styled-components.md)

Layouts
---

### 基础示例

```jsx
// components/layout.js
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
```

### 带有自定义应用程序的单一共享布局

```jsx
// pages/_app.js
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
```

### 使用 TypeScript
<!--rehype:wrap-class=row-span-2-->

```jsx
// pages/index.tsx
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}

export default Page
```

```jsx
// pages/_app.tsx

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // 使用在页面级别定义的布局（如果可用）
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
```

### 每页布局

```jsx
// pages/index.js
import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'

export default function Page() {
  return (
    /** Your content */
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
```

```jsx
// pages/_app.js
export default function MyApp({ Component, pageProps }) {
  // 使用在页面级别定义的布局（如果可用）
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}
```

### 数据请求

```jsx
// components/layout.js
import useSWR from 'swr'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  const { data, error } = useSWR('/api/navigation', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <>
      <Navbar links={data.links} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
```

图片优化
---

### 本地图片

```jsx
import Image from 'next/image'
import profilePic from '../public/me.png'

function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src={profilePic}
        alt="Picture of the author"
        // width={500} 自动提供
        // height={500} 自动提供
        // blurDataURL="data:..." 自动提供
        // placeholder="blur" // 加载时可选的模糊处理
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}
```

### 远程图片

```jsx
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}
```

要使用远程图像，`src` 属性应该是一个 `URL` 字符串，可以是相对的也可以是绝对的

### Priority

您应该将优先级属性添加到将成为每个页面的 [Largest Contentful Paint (LCP) 元素](https://web.dev/lcp/#what-elements-are-considered)的图像。 这样做允许 Next.js 专门确定要加载的图像的优先级（例如，通过预加载标签或优先级提示），从而显着提高 LCP

```jsx
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
        priority
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}
```

优化字体
---

### Google 字体
<!--rehype:wrap-class=row-span-2-->

自动托管任何 Google 字体。 字体包含在部署中，并从与您的部署相同的域提供服务。 浏览器不会向 Google 发送任何请求

```jsx
// pages/_app.js
import { Inter } from '@next/font/google'

// 如果加载可变字体，则无需指定字体粗细
const inter = Inter({ subsets: ['latin'] })

export default function MyApp({
  Component, pageProps
}) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

### 指定粗细
<!--rehype:wrap-class=row-span-2-->

如果不能使用可变字体，则需要指定粗细：

```jsx {5}
// pages/_app.js
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function MyApp({
  Component, pageProps
}) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

### 数组指定多个 weight 或 style

```jsx
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})
```

### 在 \<head> 中应用字体

```jsx
// pages/_app.js
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
```

### 单页使用

```jsx
// pages/index.js
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <p>Hello World</p>
    </div>
  )
}
```

### 指定一个子集

```jsx
// pages/_app.js
const inter = Inter({ subsets: ['latin'] })
```

在 `next.config.js` 中全局使用所有字体

```js
// next.config.js
module.exports = {
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { subsets: ['latin'] }
      },
    ],
  },
}
```

如果两者都配置，则使用函数调用中的子集

### 本地字体
<!--rehype:wrap-class=row-span-2-->

```jsx
// pages/_app.js
import localFont from '@next/font/local'

// 字体文件可以位于“pages”内
const myFont = localFont({
  src: './my-font.woff2'
})

export default function MyApp({
  Component, pageProps
}) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

如果要为单个字体系列使用多个文件，`src` 可以是一个数组：

```jsx
const roboto = localFont({
  src: [
    {
      path: './Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Roboto-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})
```

### 使用 Tailwind CSS
<!--rehype:wrap-class=col-span-2-->

```jsx
// pages/_app.js
import { Inter } from '@next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
```

最后，将 CSS 变量添加到您的 Tailwind CSS 配置中：

```jsx
// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
```

优化 Scripts
---

### 页面脚本

```jsx
import Script from 'next/script'

export default function Dashboard() {
  return (
    <>
      <Script
        src="https://example.com/script.js"
      />
    </>
  )
}
```

### App 脚本
<!--rehype:wrap-class=row-span-2-->

要为所有路由加载第三方脚本，导入 `next/script` 并将脚本直接包含在 `pages/_app.js` 中

```jsx
import Script from 'next/script'

export default function MyApp({
  Component, pageProps
}) {
  return (
    <>
      <Script
        src="https://example.com/script.js"
      />
      <Component {...pageProps} />
    </>
  )
}
```

### 将脚本卸载到 Web Worker（实验性的）
<!--rehype:wrap-class=row-span-2-->

此策略仍处于试验阶段，只有在 `next.config.js` 中启用了 `nextScriptWorkers` 标志时才能使用：

```js
module.exports = {
  experimental: {
    nextScriptWorkers: true,
  },
}
```

设置完成后，定义 `strategy="worker"` 将自动在您的应用程序中实例化 `Partytown` 并将脚本卸载到网络工作者

```jsx
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script
        src="https://example.com/script.js"
        strategy="worker"
      />
    </>
  )
}
```

### 其他属性

```jsx
import Script from 'next/script'

export default function Page() {
  return (
    <>
      <Script
        src="https://example.com/script.js"
        id="example-script"
        nonce="XUENAJFW"
        data-test="script"
      />
    </>
  )
}
```

### 内联脚本
<!--rehype:wrap-class=col-span-2-->

```jsx
<Script id="show-banner">
  {`document.getElementById('banner').classList.remove('hidden')`}
</Script>
```

```jsx
<Script
  id="show-banner"
  dangerouslySetInnerHTML={{
    __html: `document.getElementById('banner').classList.remove('hidden')`,
  }}
/>
```

### 执行附加代码

```jsx
import Script from 'next/script'

export default function Page() {
  return (
    <>
      <Script
        src="https://example.com/script.js"
        onLoad={() => {
          console.log('Script has loaded')
        }}
      />
    </>
  )
}
```

ESLint
---

### 集成 ESLint

```json
"scripts": {
  "lint": "next lint"
}
```

然后运行 `npm run lint` 或 `yarn lint`：

```shell
yarn lint
# 你会看到这样的提示：
#
# ? 您想如何配置 ESLint？
#
# ❯   基本配置 + Core Web Vitals 规则集（推荐）
#     基本配置
#     None
```

### Strict

Strict 严格配置：包括 Next.js 的基本 ESLint 配置以及更严格的 [Core Web Vitals 规则集](https://nextjs.org/docs/basic-features/eslint#core-web-vitals)

```js
{
  "extends": "next/core-web-vitals"
}
```

Base 基础配置：包括 Next.js 的基本 ESLint 配置

```js
{
  "extends": "next"
}
```

项目的根目录中创建一个包含所选配置的 `.eslintrc.json` 文件

### 自定义设置

```js
{
  "extends": "next",
  "settings": {
    "next": {
      "rootDir": "packages/my-app/"
    }
  }
}
```

`rootDir` 可以是路径（相对或绝对）、glob（即“`packages/*/`”）或路径和/或 `glob` 数组

### 对自定义目录和文件进行检查
<!--rehype:wrap-class=row-span-2-->

```js
module.exports = {
  eslint: {
    dirs: ['pages', 'utils'],
  },
}
```

在生产构建期间（`next build`）仅在“`pages`”和“`utils`”目录上运行 `ESLint`，或者使用命令

```bash
$ next lint --dir pages --dir utils --file bar.js
```
<!--rehype:className=wrap-text-->

### 禁用规则
<!--rehype:wrap-class=row-span-2-->

您可以使用 `.eslintrc` 中的 `rules` 属性直接更改它们：

```js
{
  "extends": "next",
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  }
}
```

修改或禁用受支持的插件（`react`、`react-hooks`、`next`）提供的任何规则

### Core Web Vitals

```js
{
  "extends": "next/core-web-vitals"
}
```

### Prettier

```bash
npm install -S eslint-config-prettier
# or
yarn add --dev eslint-config-prettier
```

---

```js
{
  "extends": ["next", "prettier"]
}
```

### lint-staged
<!--rehype:wrap-class=col-span-2-->

```js
const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
```

内容添加到项目根目录中的 `.lintstagedrc.js` 文件中，以指定 `--file` 标志

TypeScript
---

### create-next-app

```bash
npx create-next-app@latest --ts
# or
yarn create next-app --typescript
# or
pnpm create next-app --ts
```

### 静态生成和服务端渲染
<!--rehype:wrap-class=col-span-2 row-span-2-->

```tsx
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
export const getStaticProps: GetStaticProps = async (context) => {
  // ...
}
export const getStaticPaths: GetStaticPaths = async () => {
  // ...
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
}
```

### 现有项目添加 ts 配置

```bash
touch tsconfig.json
```

您还可以通过在 `next.config.js` 文件中设置 `typescript.tsconfigPath` 属性来提供 `tsconfig.json` 文件的相对路径

### API 路由
<!--rehype:wrap-class=row-span-2-->

```tsx
import type {
  NextApiRequest, NextApiResponse
} from 'next'

export default (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  res.status(200).json({ name:'John Doe' })
}
```

您还可以键入响应数据：

```tsx
import type {
  NextApiRequest, NextApiResponse
} from 'next'

type Data = {
  name: string
}

export default (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  res.status(200).json({ name:'John Doe' })
}
```

### 自定义应用

使用内置类型 `AppProps` 并将文件名更改为 `./pages/_app.tsx`，如下所示：

```tsx
import type { AppProps } from 'next/app'

export default function MyApp({
  Component, pageProps
}: AppProps) {
  return <Component {...pageProps} />
}
```

### 类型检查 next.config.js

```tsx
// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* 配置选项在这里 */
}

module.exports = nextConfig
```

### 忽略 TypeScript 错误

```tsx {3}
module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
}
```

危险地允许生产构建成功完成，即使您的项目有类型错误

环境变量
---

### 加载环境变量

将环境变量从 `.env.local` 加载到 `process.env` 中

```ini
DB_HOST=localhost
DB_USER=myuser
DB_PASS=mypassword
```

使用环境变量

```js
// pages/index.js
export async function getStaticProps() {
  const db = await myDB.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  })
  // ...
}
```

### 自动扩展 .env* 文件中的变量

```bash
# .env
HOSTNAME=localhost
PORT=8080
HOST=http://$HOSTNAME:$PORT
```

如果您尝试使用实际值中带有 `$` 的变量，则需要像这样对其进行转义：`\$`

```bash
# .env
A=abc

# becomes "preabc"
WRONG=pre$A

# becomes "pre$A"
CORRECT=pre\$A
```

### 向浏览器公开环境变量

为了向浏览器公开变量，您必须在变量前加上 `NEXT_PUBLIC_` 前缀

```bash
NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk
```

`NEXT_PUBLIC_ANALYTICS_ID` 可以在此处使用，因为它的前缀是 `NEXT_PUBLIC_`

```jsx
// pages/index.js
import setupAnalyticsService from '../lib/my-analytics-service'

//
// 它将在构建时转换为 `setupAnalyticsService('abcdefghijk')`
setupAnalyticsService(process.env.NEXT_PUBLIC_ANALYTICS_ID)

function HomePage() {
  return <h1>Hello World</h1>
}

export default HomePage
```

路由
---

### 介绍
<!--rehype:wrap-class=row-span-2-->

路由器将自动将名为 `index` 的文件路由到目录的根目录

:-- | --
:-- | --
`pages/index.js` | <pur>`/`</pur>
`pages/blog/index.js` | <pur>`/blog`</pur>

路由器支持嵌套文件。如果创建嵌套文件夹结构，文件将以同样的方式自动路由

:-- | --
:-- | --
`pages/blog/first-post.js` | <pur>`/blog/first-post`</pur>
`pages/dashboard/settings/username.js` | <pur>`/dashboard/settings/username`</pur>
<!--rehype:className=style-list-->

动态路由

:-- | --
:-- | --
`pages/blog/[slug].js` | <pur>`/blog/:slug`</pur> (<yel>`/blog/hello-world`</yel>)
`pages/[username]/settings.js` | <pur>`/:username/settings`</pur> (<yel>`/foo/settings`</yel>)
`pages/post/[...all].js` | <pur>`/post/*`</pur> (<yel>`/post/2020/id/title`</yel>)
<!--rehype:className=style-list-->

### 具有动态路由的页面

如果您创建一个名为 `pages/posts/[pid].js` 的文件，那么它可以在 `posts/1`、`posts/2` 等处访问

```jsx
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post
```

使用 `useRouter` 获取动态路由参数 `pid`

### 页面之间的链接
<!--rehype:wrap-class=row-span-2-->

```jsx
import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/">首页</Link>
      </li>
      <li>
        <Link href="/about">关于我们</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          博文
        </Link>
      </li>
    </ul>
  )
}
```

---

:-- | --
:-- | --
`/` | <pur>`pages/index.js`</pur>
`/about` | <pur>`pages/about.js`</pur>
`/blog/hello-world` | <pur>`pages/blog/[slug].js`</pur>

### 链接到动态路径

```jsx
import Link from 'next/link'

export default function Posts({ posts }) {
  return (
    <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
      标题
    </Link>
  )
}
```

### URL 对象

```jsx
import Link from 'next/link'

export default function Posts({ posts }) {
  return (
    <Link
      href={{
        pathname: '/blog/[slug]',
        query: { slug: posts.slug },
      }}
    >
      标题
    </Link>
  )
}
```

### 动态路由
<!--rehype:wrap-class=row-span-2-->

考虑以下页面 `pages/post/[pid].js`：

```jsx
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post
```

到动态路由的客户端导航由 `next/link` 处理

```jsx
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/post/abc">
        转到 pages/post/[pid].js
      </Link>
      <Link href="/post/abc?foo=bar">
        也转到 pages/post/[pid].js
      </Link>
      <Link href="/post/abc/a-comment">
        转到 pages/post/[pid]/[comment].js
      </Link>
    </div>
  )
}
```

### 多个动态路由

工作方式相同。 页面 `pages/post/[pid]/[comment].js` 将匹配路由 `/post/abc/a-comment` 并且它的查询对象将是：

```js
{ "pid": "abc", "comment": "a-comment" }
```

### 捕捉所有路由

可以通过在括号内添加三个点 (`...`) 来扩展动态路由以捕获所有路径，`pages/post/[...slug].js` 匹配 `/post/a`，也匹配 `/post/a/b`、`/post/a/b/c` 等

```js
// /post/a
{ "slug": ["a"] }

// /post/a/b
{ "slug": ["a", "b"] }
```

### 可选捕获所有路由

使用 `[[...slug]]`，`pages/post/[[...slug]].js` 将匹配 `/post`、`/post/a`、`/post/a/b` 等

```js
// GET `/post` (empty object)
{ }
// `GET /post/a` (single-element array)
{ "slug": ["a"] }
// `GET /post/a/b` (multi-element array)
{ "slug": ["a", "b"] }
```

### 事件执行调整页面

```jsx
import { useRouter } from 'next/router'

export default function ReadMore() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/about')}
    >
      点击这里阅读更多
    </button>
  )
}
```

### 浅路由
<!--rehype:wrap-class=col-span-2-->

```jsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// 当前网址为“/”
export default function Page() {
  const router = useRouter()

  useEffect(() => {
    // 始终在第一次渲染后进行导航
    router.push('/?counter=10', undefined, { shallow: true })
  }, [])

  useEffect(() => {
    // counter 变了！
  }, [router.query.counter])
}
```

#### 注意事项

浅路由仅适用于当前页面中的 URL 更改。 例如，假设我们有另一个名为 `pages/about.js` 的页面，并且您运行以下命令：

```jsx
router.push('/?counter=10', '/about?counter=10', { shallow: true })
```

由于这是一个新页面，它会卸载当前页面，加载新页面并等待数据获取，即使我们要求进行浅层路由

另见
---

- [Next.js 文档](https://nextjs.org/docs/getting-started)
