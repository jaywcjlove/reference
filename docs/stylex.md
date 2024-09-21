StyleX 备忘清单
====

这是 [StyleX](https://github.com/facebook/stylex) 用户界面的样式系统的快速参考指南备忘单

入门 StyleX
---

### 介绍
<!--rehype:wrap-class=row-span-2-->

StyleX 是一个 CSS In JS 的用户界面的样式系统

- [StyleX Intellisense](https://marketplace.visualstudio.com/items?itemName=yash-singh.stylex) _VSCode 插件_

#### Vite
<!--rehype:style=text-align: left;color: var(--primary-color)-->

- [vite-plugin-stylex](https://www.npmjs.com/package/vite-plugin-stylex)
- [vite-plugin-stylex-dev](https://www.npmjs.com/package/vite-plugin-stylex-dev)

#### Babel 插件
<!--rehype:style=text-align: left;color: var(--primary-color)-->

- [tailwind-to-stylex](https://www.npmjs.com/package/tailwind-to-stylex) 支持在 Tailwind CSS 中使用
- [@stylex-extend/babel-plugin](https://github.com/nonzzz/stylex-extend/tree/main/packages/babel-plugin) 使用 JSX 属性定义 StyleX

#### Prettier
<!--rehype:style=text-align: left;color: var(--primary-color)-->

- [prettier-plugin-stylex-key-sort](https://github.com/nedjulius/prettier-plugin-stylex-key-sort)

#### Bun
<!--rehype:style=text-align: left;color: var(--primary-color)-->

- [bun-plugin-stylex](https://www.npmjs.com/package/bun-plugin-stylex)

#### 入门模板
<!--rehype:style=text-align: left;color: var(--primary-color)-->

- [next.js](https://github.com/nmn/nextjs-app-dir-stylex) _支持 StyleX 的 next.js 项目_
- [qwik](https://github.com/nmn/qwik-stylex) _使用 StyleX 和 tailwind-to-stylex 的 Qwik 项目_
- [docusaurus 3](https://github.com/nmn/docusaurus-stylex) _支持 StyleX 的 docusaurus 3 项目_
- [SvelteKit](https://github.com/nmn/sveltekit-stylex) _支持 StyleX 的 SvelteKit 项目_

### 配置编译器

```js
import plg from '@stylexjs/rollup-plugin';

const config = () => ({
  plugins: [
    plg({ ...options })
  ]
})

export default config;
```

### 使用样式
<!--rehype:wrap-class=row-span-2-->

```js
import * as React from 'react';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({ ... });
const colorStyles = stylex.create({ ... });
```

在 [React](./react.md) 中使用

```jsx
function ReactDemo(
    { color,isActive,style }
) {
  return (
    <div {...stylex.props(
        styles.main,
        // 有条件地应用样式
        isActive && styles.active,
        // 根据属性选择样式变体
        colorStyles[color],
        // 将样式作为 props 传递
        style,
      )}
    />
  );
}
```

### 定义样式

```js
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  root: {
    width: '100%',
    maxWidth: 800,
    minHeight: 40,
  },
});
```

样式是使用对象语法和 `create()` API 定义的

安装
----
<!--rehype:body-class=cols-4-->

### StyleX 运行时包
<!--rehype:wrap-class=col-span-2-->

```bash
npm install --save @stylexjs/stylex
```

### 编译器(生产) Rollup
<!--rehype:wrap-class=col-span-2 row-span-2-->

```bash
npm install --save-dev @stylexjs/rollup-plugin
```

修改 Rollup 配置 _rollup.config.js_

```js
import stylexPlugin from '@stylexjs/rollup-plugin';

const config = {
  input: './index.js',
  output: {
    file: './.build/bundle.js',
    format: 'es',
  },
  // 确保在 Babel 之前使用 stylex 插件
  plugins: [stylexPlugin({
    // 必需项。生成的 CSS 文件的文件路径。
    fileName: './.build/stylex.css',
    // 默认值：false
    dev: false,
    // 所有生成的类名的前缀
    classNamePrefix: 'x',
    // CSS 变量支持所必需
    unstable_moduleResolution: {
      // 类型：'commonJS' | 'haste'
      // 默认值：'commonJS'
      type: 'commonJS',
      // 项目根目录的绝对路径
      rootDir: __dirname,
    },
  })],
};

export default config;
```

### 编译器(开发)
<!--rehype:wrap-class=col-span-2-->

```bash
npm install --save-dev @stylexjs/babel-plugin
```

修改 Babel 配置 _(babel.config.js)_

```js
import styleX from '@stylexjs/babel-plugin';

const config = {
  plugins: [
    [styleX, {
        dev: true,
        // 设置为 true 以进行快照测试
        // 默认值：false
        test: false,
        // CSS 变量支持所必需
        unstable_moduleResolution: {
          // 类型：'commonJS' | 'haste'
          // 默认值：'commonJS'
          type: 'commonJS',
          // 项目根目录的绝对路径
          rootDir: __dirname,
        }
    }],
  ],
};

export default config;
```

### 编译器(生产) Webpack
<!--rehype:wrap-class=col-span-2-->

```bash
npm install --save-dev @stylexjs/webpack-plugin
```

修改 Webpack 配置 _webpack.config.js_

```js
const StylexPlugin = require('@stylexjs/webpack-plugin');
const path = require('path');

const config = (env, argv) => ({
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '.build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    // 确保在 Babel 之前使用 stylex 插件
    new StylexPlugin({
      filename: 'styles.[contenthash].css',
      // 获取 webpack 的模式并为开发设置值
      dev: argv.mode === 'development',
      // 使用静态生成的 CSS 文件，而不是运行时注入的 CSS。
      // 即使在开发环境中也是如此。
      runtimeInjection: false,
      // 可选的。默认值：'x'
      classNamePrefix: 'x',
      // CSS 变量支持所必需
      unstable_moduleResolution: {
        // 类型：'commonJS' | 'haste'
        // 默认值：'commonJS'
        type: 'commonJS',
        // 项目根目录的绝对路径
        rootDir: __dirname,
      },
    }),
  ],
  cache: true,
});

module.exports = config;
```

### 编译器(生产) Next.js
<!--rehype:wrap-class=col-span-2-->

```bash
npm install --save-dev @stylexjs/nextjs-plugin \
                       @stylexjs/babel-plugin rimraf
```

在 `package.json` 添加配置

```js
{
  "scripts": {
    ...,
    "predev": "rimraf .next",
    "prebuild": "rimraf .next"
  }
}
```

修改 Babel 配置 _.babelrc.js_

```js
module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "@stylexjs/babel-plugin", {
        dev: process.env.NODE_ENV === "development",
        test: process.env.NODE_ENV === "test",
        runtimeInjection: false,
        genConditionalClasses: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: "commonJS",
          rootDir: __dirname,
        },
      },
    ],
  ],
};
```

修改 Next.js 配置 _next.config.mjs_

```js
/** @type {import('next').NextConfig} */
import stylexPlugin from "@stylexjs/nextjs-plugin";

const nextConfig = {};

const __dirname = new URL(".", import.meta.url).pathname;
export default stylexPlugin({
  rootDir: __dirname,
})(nextConfig);
```

### 仅限本地开发
<!--rehype:wrap-class=col-span-2-->

要开始使用 `StyleX` 而无需配置编译器和构建过程，您可以安装本地开发运行时

```bash
npm install --save-dev @stylexjs/dev-runtime
```

开发运行时必须导入到应用程序的 `JavaScript` 入口点并进行配置

```js
import inject from '@stylexjs/dev-runtime';

inject({
  classNamePrefix: 'x',
  dev: true,
  test: false,
});
```

### 用 ESLint 捕捉错误
<!--rehype:wrap-class=col-span-2-->

```bash
npm install --save-dev @stylexjs/eslint-plugin
```

StyleX 编译器不会验证您的样式，并且会编译许多无效样式。当您创作样式时，您应该使用 ESLint 插件来捕获这些错误。修改 ESLint 配置 `.eslintrc.js`

```js
module.exports = {
  plugins: ["@stylexjs"],
  rules: {
    "@stylexjs/valid-styles": "error",
  },
};
```

定义样式
----

### 创建样式

```js
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: 'rgb(60,60,60)',
  },
  highlighted: {
    color: 'rebeccapurple',
  },
});
```

### 伪类
<!--rehype:wrap-class=row-span-2-->

```js
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  button: {
    backgroundColor: 'lightblue',
  },
});
```

样式名为 `button` 的背景样式上添加 `:hover` 和 `:active` 伪类

```js
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  button: {
    backgroundColor: {
      default: 'lightblue',
      ':hover': 'blue',
      ':active': 'darkblue',
    },
  },
});
```

### 伪元素
<!--rehype:wrap-class=row-span-2-->

```js
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  input: {
    // 伪元素
    '::placeholder': {
      color: '#999',
    },
    color: {
      default: '#333',
      // 伪类
      ':invalid': 'red',
    },
  },
});
```

### 媒体查询（和其他@规则）

```js
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    width: {
      default: 800,
      '@media (max-width: 800px)': '100%',
      '@media (min-width: 1540px)': 1366,
    },
  },
});
```

同样，媒体查询也可以作为样式值中的 "条件"

### 组合条件

```js
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  button: {
    color: {
      default: 'var(--blue-link)',
      ':hover': {
        default: null,
        '@media (hover: hover)': 'scale(1.1)',
      },
      ':active': 'scale(0.9)',
    },
  },
});
```

当您需要组合媒体查询和伪选择器时，嵌套超过`一层`

### 后备样式
<!--rehype:wrap-class=col-span-2-->

```css
.header {
  position: fixed;
  position: -webkit-sticky;
  position: sticky;
}
```

使用 `firstThatWorks` 函数来实现相同的目的

```js
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  header: {
    position: stylex.firstThatWorks('sticky', '-webkit-sticky', 'fixed'),
  },
});
```

### 关键帧动画

```js
import * as stylex from '@stylexjs/stylex';

const fadeIn = stylex.keyframes({
  from: {opacity: 0},
  to: {opacity: 1},
});

const styles = stylex.create({
  base: {
    animationName: fadeIn,
    animationDuration: '1s',
  },
});
```

使用 `stylex.keyframes()` 函数来定义关键帧动画

### 动态样式
<!--rehype:wrap-class=col-span-2&style=background:#d7a100;-->

```js
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  // 函数参数必须是简单标识符
  // -- 不允许解构或默认值
  bar: (height) => ({
    height,
    // 函数体必须是对象字面量
    // -- 不允许使用 { return {} }
  }),
});

function MyComponent() {
  // `height` 的值在编译时不能确定。
  const [height, setHeight] = useState(10);
  return <div {...stylex.props(styles.bar(height))} />;
}
```

注意：动态样式是一项高级功能，应谨慎使用。对于大多数用例，条件样式应该足够了。

使用样式
----

### 合并样式
<!--rehype:wrap-class=row-span-2-->

```jsx
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: 'grey',
  },
  highlighted: {
    color: 'rebeccapurple',
  },
});

<div {...stylex.props(
  styles.base, styles.highlighted
  )}
/>;
```

如果样式的顺序颠倒，文本将为灰色

```jsx
<div {...stylex.props(
    styles.highlighted, styles.base
  )}
/>
```

### 条件样式

```jsx
<div
  {...stylex.props(
    styles.base,
    props.isHighlighted && styles.highlighted,
    isActive ? styles.active : styles.inactive,
  )}
/>
```

通过使用常见的 JavaScript 模式（例如三元表达式和 `&&` 运算符），可以在运行时有条件地应用样式。 `stylex.props` 忽略虚假值，例如 `null`、`undefined` 或 `false`

### 样式变体
<!--rehype:wrap-class=row-span-2-->

```js
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  violet: {
    backgroundColor: {
      default: 'blueviolet',
      ':hover': 'darkviolet',
    },
    color: 'white',
  },
  gray: {
    backgroundColor: {
      default: 'gainsboro',
      ':hover': 'lightgray',
    },
  },
  // ... more variants here ...
});
```

然后，通过使用 `variant` 属性作为样式对象上的键来应用适当的样式

```jsx
function Button({variant, ...props}) {
  return (
    <button {...props}
      {...stylex.props(styles[variant])}
    />
  );
}
```

### 样式作为道具

```jsx
<CustomComponent style={styles.base} />
```

`stylex.props` 函数返回具有 `className` 和 `style` 的对象。当样式要合并到组件内时不要使用它：

```jsx
// ❌ 不要这样使用! ⚠️
<CustomComponent
  style={stylex.props(styles.base)}
/>
```
<!--rehype:style=background: #ff00002b;-->

```jsx
<CustomComponent
  style={[
    styles.base,
    isHighlighted && styles.highlighted
  ]}
/>
```

### 接受组件中的样式

```jsx
import * as stylex from '@stylexjs/stylex';

// Local Styles
const styles = stylex.create({
  base: {
    /*...*/
  },
});

function CustomComponent({style}) {
  return (
    <div
      {...stylex.props(styles.base, style)}
    />
  );
}
```

将其与 `stylex.props` 函数一起应用

### “取消设置”样式

```jsx
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    color: null,
  },
});
```

将样式属性设置为 `null` 会删除 StyleX 之前为其应用的任何样式。

主题
----

### 使用媒体查询
<!--rehype:wrap-class=col-span-2-->

```js
import * as stylex from '@stylexjs/stylex';

// 可以使用常量来避免重复媒体查询
const DARK = '@media (prefers-color-scheme: dark)';

export const colors = stylex.defineVars({
  primaryText: {default: 'black', [DARK]: 'white'},
  secondaryText: {default: '#333', [DARK]: '#ccc'},
  accent: {default: 'blue', [DARK]: 'lightblue'},
  background: {default: 'white', [DARK]: 'black'},
  lineColor: {default: 'gray', [DARK]: 'lightgray'},
});
```

### 定义变量

```js
import * as stylex from '@stylexjs/stylex';

export const tokens = stylex.defineVars({
  primaryText: 'black',
  secondaryText: '#333',
  borderRadius: '4px',
  fontFamily: 'system-ui, sans-serif',
  fontSize: '16px',
});
```

这定义了 HTML 文档的 `:root` 处的变量。它们可以作为常量导入并在 `stylex.create` 调用中使用。

### 使用变量
<!--rehype:wrap-class=col-span-2-->

```jsx
import * as stylex from '@stylexjs/stylex';

// 可以使用常量来避免重复媒体查询
const DARK = '@media (prefers-color-scheme: dark)';

export const colors = stylex.defineVars({
  primaryText: {default: 'black', [DARK]: 'white'},
  secondaryText: {default: '#333', [DARK]: '#ccc'},
  accent: {default: 'blue', [DARK]: 'lightblue'},
  background: {default: 'white', [DARK]: 'black'},
  lineColor: {default: 'gray', [DARK]: 'lightgray'},
});

export const spacing = stylex.defineVars({
  none: '0px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
  xxlarge: '48px',
  xxxlarge: '96px',
});
```

然后就可以像这样导入和使用这些样式：

```js
import * as stylex from '@stylexjs/stylex';
import {colors, spacing} from '../tokens.stylex';

const styles = stylex.create({
  container: {
    color: colors.primaryText,
    backgroundColor: colors.background,
    padding: spacing.medium,
  },
});
```

### 定义变量时的规则

变量必须定义在 `.stylex.js` 文件中，变量必须位于具有以下扩展名之一的文件中：

- .stylex.js
- .stylex.mjs
- .stylex.cjs
- .stylex.ts
- .stylex.tsx
- .stylex.jsx

变量必须命名为 `exports`

```js
// ✅ - 命名导出
export const colors = stylex.defineVars({
  /* ... */
});

const sizeVars = { ... };
// ✅ - 另一个命名导出
export const sizes = stylex.defineVars(sizeVars);
```

不允许：

```js
// ❌ - 只允许命名导出
export default stylex.defineVars({
  /* ... */
});

// ❌ - 变量必须直接导出
const x = stylex.defineVars({
  /* ... */
});
export const colors = x;

// ❌ - 变量不能嵌套在另一个对象内部
export const colors = {
  foregrounds: stylex.defineVars({
    /* ... */
  }),
  backgrounds: stylex.defineVars({
    /* ... */
  }),
};
```
<!--rehype:style=background: #ff00001a;-->

### 创建主题
<!--rehype:wrap-class=col-span-2 row-span-2-->

```js
import * as stylex from '@stylexjs/stylex';
import {colors, spacing} from './tokens.stylex';

// 可以使用常量来避免重复媒体查询
const DARK = '@media (prefers-color-scheme: dark)';

// Dracula 主题
export const dracula = stylex.createTheme(colors, {
  primaryText: {default: 'purple', [DARK]: 'lightpurple'},
  secondaryText: {default: 'pink', [DARK]: 'hotpink'},
  accent: 'red',
  background: {default: '#555', [DARK]: 'black'},
  lineColor: 'red',
});
```

应用主题，主题对象类似于使用 `stylex.create()` 创建的样式对象。使用 `stylex.props()` 将它们应用于元素，以覆盖该元素及其所有后代的变量。

```jsx
<div {...stylex.props(dracula, styles.container)}>
  {children}
</div>;
```

- 创建主题时必须覆盖变量组中的所有变量。这一选择是为了帮助发现意外遗漏
- 主题可以在代码库中的任何位置使用 `stylex.createTheme()` 创建，并在文件或组件之间传递
- 如果同一变量组的多个主题应用于同一 HTML 元素，则最后应用的主题获胜

### 变量类型

```js
import * as stylex from '@stylexjs/stylex';

export const tokens = stylex.defineVars({
  primaryTxt: stylex.types.color('black'),
  secondaryTxt: stylex.types.color('#333'),
  borderRadius: stylex.types.length('4px'),
  angle: stylex.types.angle('0deg'),
  int: stylex.types.integer(2),
});
```

所有值都可以是任意字符串。要将类型分配给变量，可以使用适当的类型函数包装它们

### 变量类型 & 条件值

```js
/// tokens.stylex.js
import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  primaryText: stylex.types.color({
    default: 'black', [DARK]: 'white'
  }),
});
```

用法保持不变，以上内容完全有效

### 源代码中的类型安全

```js
// tokens.stylex.js
import * as stylex from '@stylexjs/stylex';
import {tokens} from './tokens.stylex.js';

export const high = stylex.defineVars({
  primaryTxt: stylex.types.color('black'),
  secondaryTxt: stylex.types.color('#222'),
  borderRadius: stylex.types.length('8px'),
  angle: stylex.types.angle('0deg'),
  int: stylex.types.integer(4),
});
```

当在 `stylex.defineVars` 中使用特定类型声明变量时，静态类型将强制在 `stylex.createTheme` 调用中为该变量设置主题时使用相同类型的函数

### 动画渐变
<!--rehype:wrap-class=col-span-2 row-span-2-->

```js
import * as stylex from '@stylexjs/stylex';
import {tokens} from './tokens.stylex';

const rotate = stylex.keyframes({
  from: { [tokens.angle]: '0deg' },
  to: { [tokens.angle]: '360deg' },
});

const styles = stylex.create({
  gradient: {
    backgroundImage: `conic-gradient(from ${tokens.angle}, ...colors)`,
    animationName: rotate,
    animationDuration: '10s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
})
```

可以通过对其中使用的角度进行动画处理来对渐变进行动画处理

### 模拟 round()

现代浏览器开始支持 CSS 中的 [round()](https://developer.mozilla.org/en-US/docs/Web/CSS/round) 函数。

```js
const styles = stylex.create({
  gradient: {
    // Math.floor
    [tokens.int]: `calc(16 / 9)`

    // Math.round
    [tokens.int]: `calc((16 / 9) + 0.5)`
  },
})
```

该功能通过一个整数类型的变量来模拟

TypeScript 类型
---

### StyleXStyles 样式 props 类型

```ts
import type {StyleXStyles} from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

type Props = {
  ...
  style?: StyleXStyles,
};

function MyComponent(
  { style, ...otherProps }: Props
) {
  return (
    <div
      {...stylex.props(
        localStyles.foo,
        localStyles.bar, style
      )}
    >
      {/* ... */}
    </div>
  );
}
```
<!--rehype:className=wrap-text-->

### StyleXStylesWithout 禁止属性
<!--rehype:wrap-class=col-span-2 row-span-3-->

```ts
import type {StyleXStylesWithout} from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

type NoLayout = StyleXStylesWithout<{
  position: unknown,
  display: unknown,
  top: unknown,
  start: unknown,
  end: unknown,
  bottom: unknown,
  border: unknown,
  borderWidth: unknown,
  borderBottomWidth: unknown,
  borderEndWidth: unknown,
  borderStartWidth: unknown,
  borderTopWidth: unknown,
  margin: unknown,
  marginBottom: unknown,
  marginEnd: unknown,
  marginStart: unknown,
  marginTop: unknown,
  padding: unknown,
  paddingBottom: unknown,
  paddingEnd: unknown,
  paddingStart: unknown,
  paddingTop: unknown,
  width: unknown,
  height: unknown,
  flexBasis: unknown,
  overflow: unknown,
  overflowX: unknown,
  overflowY: unknown,
}>;

type Props = {
  // ...
  style?: NoLayout,
};

function MyComponent({style, ...}: Props) {
  return (
    <div
      {...stylex.props(localStyles.foo, localStyles.bar, style)}
    >
      {/* ... */}
    </div>
  );
}
```

此处对象类型中列出的属性将被禁止，但所有其他样式仍将被接受。

### 从一组样式属性中接受

```ts
import type {StyleXStyles} from '@stylexjs/stylex';

type Props = {
  // ...
  style?: StyleXStyles<{
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderTopColor?: string;
    borderEndColor?: string;
    borderBottomColor?: string;
    borderStartColor?: string;
  }>;
};
```
<!--rehype:className=wrap-text-->

### 限制样式的可能值

```ts
import type {StyleXStyles} from '@stylexjs/stylex';

type Props = {
  ...
  // 只接受 marginTop 的样式，其他不接受。
  // marginTop 的值只能是 0、4、8 或 16。
  style?: StyleXStyles<{
    marginTop: 0 | 4 | 8 | 16
  }>,
};
```
<!--rehype:className=wrap-text-->

### VarGroup

```ts
import * as stylex from '@stylexjs/stylex';

export const vars = stylex.defineVars({
  color: 'red',
  backgroundColor: 'blue',
});

export type Vars = typeof vars;
/*
  Vars = VarGroup<{
    color: string,
    backgroundColor: string,
  }>
*/
```

VarGroup 是调用 `stylex.defineVars` 生成的对象的类型。它将键映射到 CSS 自定义属性的引用

### StaticStyles

```ts
import type {StaticStyles} from '@stylexjs/stylex';

type Props = {
  // ...
  style?: StaticStyles<{
    color?: 'red' | 'blue' | 'green';
    padding?: 0 | 4 | 8 | 16 | 32;
    backgroundColor?: string;
    borderColor?: string;
    borderTopColor?: string;
    borderEndColor?: string;
    borderBottomColor?: string;
    borderStartColor?: string;
  }>;
};
```

不允许使用函数定义的动态样式

### Theme

```ts
import type {VarGroup} from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

import {vars} from './vars.stylex';

export const theme: Theme<typeof vars> = stylex.createTheme(vars, {
  color: 'red', // OK
  backgroundColor: 'blue', // OK
});
```
