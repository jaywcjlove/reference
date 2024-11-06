React 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/react.svg?style=flat)](https://npmjs.org/package/react)
[![Downloads](https://img.shields.io/npm/dm/react.svg?style=flat)](https://www.npmjs.com/package/react)
[![Repo Dependents](https://badgen.net/github/dependents-repo/facebook/react)](https://github.com/facebook/react/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/facebook/react)

适合初学者的综合 React 备忘清单
<!--rehype:style=padding-top: 12px;-->

入门
----

### 介绍

React 是一个用于构建用户界面的 JavaScript 库

- [React 官方文档](https://reactjs.org/) _(reactjs.org)_
- [Styled Components 备忘清单](./styled-components.md) _(jaywcjlove.github.io)_
- [TypeScript JSX 备忘清单](./typescript.md#jsx) _(jaywcjlove.github.io)_

```js
import {createRoot} from 'react-dom/client'
import App from './App'
```

-----

```jsx
const elm = document.getElementById('app')
const root = createRoot(elm);
root.render(<App />);
```

#### 快速创建 **React** 项目 ([CRA](https://github.com/facebook/create-react-app))

```shell
npx create-react-app my-app
```

### 导入多个导出

```jsx
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
```

-----

```jsx
export class Hello extends Component {
  ...
}
export default function World() {
  /* ... */
}
```

使用 `export` 导出 **`Hello`**，`export default` 导出 **`World`** 组件

```jsx
import World, { Hello } from './hello.js';
```

使用 `import` 导入 `Hello` 组件，在示例中使用。

### React 组件中的 CSS

```jsx {2,5}
import React from "react";
import "./Student.css";

export const Student = (
  <div className="Student"></div>
);
```

注意：类属性 `className`

```jsx
const divStyle = {
  backgroundImage: 'url(' + imgUrl + ')',
};
export const Student = (
  <div style={divStyle}></div>
);
```

### 属性

```jsx
<Student name="Julie" age={23}
  pro={true} />
```

函数组件 `Student` 中访问属性

```jsx
function Student(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Class 组件 `Student` 中访问属性

```jsx
class Student extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}
```

`class` 组件使用 `this.props` 访问传递给组件的属性。

### Children
<!--rehype:wrap-class=row-span-2-->

```jsx
function Example() {
  return (
    <AlertBox>
      <h1>您有待处理的通知</h1>
    </AlertBox>
  )
}
```

函数 `AlertBox` 组件

```jsx {4}
function AlertBox(props) {
  return (
    <div className="alert-box">
      {props.children}
    </div>
  );
}
```

-----

```jsx
{props.children}
```

Class `AlertBox` 组件，与函数组件 `AlertBox` 组件相同

```jsx {5}
class AlertBox extends React.Component {
  render () {
    return (
      <div className="alert-box">
        {this.props.children}
      </div>
    );
  }
}
```

-----

```jsx
{this.props.children}
```

`children` 作为子组件的的属性传递。

### State
<!--rehype:wrap-class=row-span-3-->

函数中的 State，Hook 是 React 16.8 的新增特性

```jsx {4,8}
import { useState } from 'react';

function Student() {
  const [count, setCount] = useState(0);
  const click = () => setCount(count + 1);
  return (
    <div>
      <p>您点击了 {count} 次</p>
      <button onClick={click}>
        点击我
      </button>
    </div>
  );
}
```

使用 `setState` 更新状态，下面是函数组件读取状态

```jsx
<p>您点击了 {count} 次</p>
```

#### Class 中的 State

```jsx {6,12,20}
import React from 'react';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
    // 确保函数可以访问组件属性（ES2015）
    this.click = this.click.bind(this);
  }
  click() {
    const count = this.state.count;
    this.setState({ count: count + 1})
  }
  render() {
    return (
      <div>
        <button onClick={this.click}>
          点击我
        </button>
        <p>您点击了{this.state.count}次</p>
      </div>
    );
  }
}
```

使用 `setState` 更新状态，`class` 组件中不能使用 <yel>~~hooks~~</yel>。下面是 `class` 组件读取状态

```jsx
<p>您点击了{this.state.count}次</p>
```

### 循环

```jsx
const elm = ['one', 'two', 'three'];
function Student() {
  return (
    <ul>
      {elm.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
}
```

`key` 值在兄弟节点之间必须唯一

### 事件监听

```jsx
export default function Hello() {
  function handleClick(event) {
    event.preventDefault();
    alert("Hello World");
  }

  return (
    <a href="/" onClick={handleClick}>
      Say Hi
    </a>
  );
}
```

### 函数注入

```jsx
function addNumbers(x1, x2) {
  return x1 + x2;
}

const element = (
  <div>
    {addNumbers(2, 5)}
  </div>
);
```

### 嵌套

```jsx
import { useState } from 'react'
import Avatar from './Avatar';
import Profile from './Profile';

function Student() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Avatar src={count} />
      <Profile username={count} />
    </div>
  );
}
```

### Portals

React 并_没有_创建一个新的 `div`。它只是把子元素渲染到 `domNode` 中。`domNode` 是一个可以在任何位置的有效 DOM 节点。

```jsx
render() {
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```

提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案

### Fragment
<!--rehype:wrap-class=row-span-2-->

```jsx {1,6,9}
import { Fragment } from 'react'
import Avatar from './Avatar';
import Profile from './Profile';

const Student = () => (
  <Fragment>
    <Avatar src="./demo.jpg" />
    <Profile username="name" />
  </Fragment>
);
```

从 `v16.2.0` 开始 `Fragment` 可用于返回多个子节点，而无需向 DOM 添加额外的包装节点。或者使用 `<></>` 效果是一样的。

```jsx {2,5}
const Student = () => (
  <>
    <Avatar src="./demo.jpg" />
    <Profile username="name" />
  </>
);
```

查看: [Fragments & strings](https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings)

### 返回字符串

```jsx {2}
render() {
  return 'Look ma, no spans!';
}
```

您可以只返回一个字符串。查看: [Fragments & strings](https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings)

### 返回数组

```jsx
const Student = () => [
  <li key="A">First item</li>,
  <li key="B">Second item</li>
];
```

不要忘记 `key`！查看: [Fragments & strings](https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings)

### Refs 转发

```jsx
const FancyButton = React.forwardRef(
  (props, ref) => (
    <button ref={ref} className="btn">
      {props.children}
    </button>
  )
);
```

#### 使用

```jsx
// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();

<FancyButton ref={ref}>
  点击我
</FancyButton>;
```

### Class 组件内部使用 ref 属性

```jsx {6,10}
import {Component,createRef} from 'react'

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
  }

  render() {
    return <div ref={this.myRef} />;
  }
}
```

提示：Refs 适用于类组件，但不适用于函数组件（除非您使用 useRef hook，请参阅[hooks](#hooks)）

### 函数组件内部使用 ref 属性

```jsx {3,9}
function CustomTextInput(props) {
  // 这里必须声明 $input，这样 ref 才可以引用它
  const $input = useRef(null);
  function handleClick() {
    $input.current.focus();
  }
  return (
    <div>
      <input type="text" ref={$input} />
      <input
        type="button" value="聚焦文本输入"
        onClick={handleClick}
      />
    </div>
  );
}
```

### 严格模式 StrictMode

```jsx {3,8}
<div>
  <Header />
  <React.StrictMode>
    <div>
      <ComponentOne />
      <ComponentTwo />
    </div>
  </React.StrictMode>
  <Footer />
</div>
```

-----

- [识别不安全的生命周期](https://zh-hans.reactjs.org/docs/strict-mode.html#identifying-unsafe-lifecycles)
- [关于使用过时字符串 ref API 的警告](https://zh-hans.reactjs.org/docs/strict-mode.html#warning-about-legacy-string-ref-api-usage)
- [关于使用废弃的 findDOMNode 方法的警告](https://zh-hans.reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage)
- [检测意外的副作用](https://zh-hans.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
- [检测过时的 context API](https://zh-hans.reactjs.org/docs/strict-mode.html#detecting-legacy-context-api)
- [确保可复用的状态](https://zh-hans.reactjs.org/docs/strict-mode.html#ensuring-reusable-state)

突出显示应用程序中潜在问题的工具。请参阅：[严格模式](https://zh-hans.reactjs.org/docs/strict-mode.html)

### Profiler
<!--rehype:wrap-class=col-span-2-->

测量一个 React 应用多久渲染一次以及渲染一次的 `代价`

```jsx
<Profiler id="Navigation" onRender={callback}>
  <Navigation {...props} />
</Profiler>
```

为了分析 `Navigation` 组件和它的子代。应该在需要时才去使用它。

:- | :-
:- | :-
`id(string)` | 发生提交的 `Profiler` 树的 `id`
`onRender(function)` | 组件树任何组件 “提交” 一个更新的时候调用这个函数

#### onRender 回调函数

:- | :-
:- | :-
`phase: "mount" \| "update"` |  判断是由 `props`/`state`/`hooks` 改变 或 “第一次装载” 引起的重渲染
`actualDuration: number` | 本次更新在渲染 Profiler 和它的子代上花费的时间
`baseDuration: number` | 在 Profiler 树中最近一次每一个组件 render 的持续时间
`startTime: number` | 本次更新中 React 开始渲染的时间戳
`commitTime: number` | 本次更新中 React commit 阶段结束的时间戳
`interactions: Set` | 当更新被制定时，“[interactions](https://fb.me/react-interaction-tracing)” 的集合会被追踪

默认值
---

### Class 组件默认 props
<!--rehype:wrap-class=row-span-2-->

```jsx
class CustomButton extends React.Component {
  // ...
}
CustomButton.defaultProps = {
  color: 'blue'
};
```

#### 使用

```jsx
<CustomButton /> ;
```

不传值 `props.color` 将自动设置为 `blue`

### Class 组件默认 state
<!--rehype:wrap-class=row-span-2-->

```jsx
class Hello extends Component {
  constructor (props) {
    super(props)
    this.state = { visible: true }
  }
}
```

在构造 `constructor()`中设置默认状态。

```jsx
class Hello extends Component {
  state = { visible: true }
}
```

### 函数组件默认 props

```jsx
function CustomButton(props) {
  const { color = 'blue' } = props;
  return <div>{color}</div>
}
```

### 函数组件默认 state

```jsx
function CustomButton() {
  const [color, setColor]=useState('blue')
  return <div>{color}</div>
}
```

Props
---

### Props 的 Spread 运算符

扩展运算符可用于一次传递所有 Props。

```jsx
function Profile(props) {
  return <p>{props.name}, {props.age}</p>;
}

const user = { name: "John", age: 25 };
<Profile {...user}/>
```

### 什么是 Props？

- Props（“properties”的缩写）用于将数据从父组件传递到子组件。
- 它们是只读的，不能在子组件内修改。

```jsx
<MyComponent propName="value" />
```

### 将 Pros 传递给组件

您可以通过 JSX 中的属性将 props 从父组件传递到子组件。

```jsx
function ParentComponent() {
  return <ChildComponent name="John" age={25} />;
}

function ChildComponent (props) {
  return <div>Hello，{props.name}. You are {props.age} years old. </div>;
}
```

### 解构 props

props 可以解构以便于访问。

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### 访问功能组件中的 Props

可以使用 props 对象在功能组件中访问 Props。

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### 使用 Pros 进行条件渲染

道具可用于组件内部的条件渲染。

```jsx
function Greeting({ name, isLoggedIn }) {
  return isLoggedIn ? <hl>Welcome back, {name}</h1>: <h1>Please log in</h1>;
}
```

### Prop Drilling（属性传递）
<!--rehype:wrap-class=row-span-2-->

```js
function Parent() {
  const name = "John";
  return <Child name={name}/>;
}

function Child({ name }) {
  return <Grandchild name={name} />
}

function Grandchild({ name }) {
  return <p>{name}</p>;
}
```

将属性（props）在多个组件层级中逐层传递可能会变得繁琐。这种方式称为属性传递（prop drilling）。

### Props 与 State
<!--rehype:wrap-class=row-span-2-->

- `props` 被传递给组件并且是不可变的。
- `State` 是组件的本地状态，可以更改。

```jsx
function ChildComponent({ name }) {
  return <h2>Hi,my name is {name}.</h2>;
}

function ParentComponent() {
  // State to manage the name value
  const ［name, setName］= usestate('John');
  const changeName = () => {
    setName('Jane');
  };
  return (
    <div>
      <ChildComponent name={name}/>
      <button onClick={changeName}>
        Change Names
      </button>
    </div>
  );
}
```

### 默认 props

```jsx
function Greeting({ name = "Bob" } = 0}) {
  return <h1>Hello, {name}!</h1>;
}
// Renders "Hello, Bob!"
< Greeting />
```

您可以为 `props` 设置默认值。

### 使用 prop 处理事件

你可以将事件处理程序作为 props 传递给 handle 用户交互。

```jsx
function Button({ onClick }) {
  return < button onClick={onClick}>Click me</button>;
}

function App() {
  const handleClick = () => alert("Button clicked!"):
  return <Button onClick={handleClick} />;
}
```

JSX
---

### 介绍
<!--rehype:wrap-class=row-span-2-->

`JSX` 仅仅只是 `React.createElement(component, props, ...children)` 函数的语法糖

```jsx
<MyButton color="blue" shadowSize={2}>
  点击我
</MyButton>
```

会编译为

```js
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  '点击我'
);
```

没有子节点

```jsx
<div className="sidebar" />
```

会编译为

```js
React.createElement(
  'div',
  {className: 'sidebar'}
)
```

### JSX 点语法

```jsx
const Menu = ({ children }) => (
  <div className="menu">{children}<div>
);

Menu.Item = ({ children }) => (
  <div>{children}<div>
);

<Menu>
  <Menu.Item>菜单一</Menu.Item>
  <Menu.Item>菜单二</Menu.Item>
<Menu>
```

### JSX Element

```jsx
let element = <h1>Hello, world!</h1>;
let emptyHeading = <h1 />;

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const element = <h1>Hello, world</h1>;
root.render(element);
```

参考：[渲染元素](https://reactjs.org/docs/rendering-elements.html)

### JSX 属性

```jsx
const avatarUrl = "img/picture.jpg"
const element = <img src={avatarUrl} />;

const element = (
  <button className="btn">
    点击我
  </button>
);
```

注意：类属性 `className`

### JSX 表达式

```jsx
let name = '张三';
let element = <h1>Hello, {name}</h1>;

function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
let element = (
  <h1>
    Hello, {fullName('三', '张')}
  </h1>
);
```

### JSX style

```jsx
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};
function MyComponent() {
  return <div style={divStyle}>组件</div>;
}
```

### JSX dangerouslySetInnerHTML

```jsx
const markup = {__html: '我 &middot; 你' };

const MyComponent = () => (
  <div dangerouslySetInnerHTML={markup} />
);
```

`dangerouslySetInnerHTML` 是 React 为浏览器 DOM 提供 `innerHTML` 的替换方案。

### JSX htmlFor

```jsx
const MyComponent = () => (
  <div>
    <input type="radio" id="ab" name="v">
    <label for="ab">HTML</label>
  </div>
);
```

`for` 在 `JS` 中是保留字，JSX 元素使用了 `htmlFor` 代替

### JSX defaultValue

非受控组件的属性，设置组件第一次挂载时的 `value`

```jsx
<textarea defaultValue="Hello" />
```

`<input>`、`<select>` 和 `<textarea>` 支持 value 属性

### JSX defaultChecked

非受控组件的属性，设置组件是否被选中

```jsx
<input type="radio" defaultChecked />
```

类型为 `checkbox` 或 `radio` 时，组件支持 checked 属性

### JSX className

属性用于指定 `CSS` 的 `class`

```jsx
<div className="warp">...</div>
```

React 中使用 [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components) 使用 `class` 属性代替

### JSX 条件渲染
<!--rehype:wrap-class=row-span-2-->

```jsx
import React from "react";

function formatName(user) {
  return user.firstName 
    + ' ' 
    + user.lastName;
}

export function Greeting(user) {
  if (user) {
    return (
      <h1>你好, {formatName(user)}!</h1>
    );
  }
  return (
    <h1>你好, 先生。</h1>
  );
}
```

注意：组件必须总是返回一些东西。

#### 使用

```jsx
<Greeting firstName="三" lastName="张" />
```

### JSX 三目运算符 / 与运算符 &&

```jsx
export default function Weather(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      <b>{isLoggedIn ? '已' : '未'}</b>登录。
    </div>
  );
}
```

-----

```js
{isShow && <div>内容</div>}
```

### JSX 组件

```jsx
<Dropdown>
  下拉列表
  <Menu>
    <Menu.Item>菜单一</Menu.Item>
    <Menu.Item>菜单二</Menu.Item>
    <Menu.Item>菜单三</Menu.Item>
  </Menu>
</Dropdown>
```

组件名称以大驼峰式命名。

### JSX 元素变量

```jsx
function Greeting(props) {
  let button;
  if (props.isLoggedIn) {
    button = <UserGreeting />;
  } else {
    button = <GuestGreeting />;
  }
  return <div>{button}</div>;
}
```

### JSX 注释

```jsx
function Student() {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      {/* 这里写注释 */}
    </Fragment>
  );
}
```

组件
----

### 函数组件
<!--rehype:wrap-class=row-span-2-->

```jsx
import React from 'react';

const UserName = () => <h1>Kenny</h1>;

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <div>Hello</div>  
      <UserName />
    </div>
  );
}
```

注意：每个组件都需要一个根元素，[更多说明](https://reactjs.org/docs/components-and-props.html)。

### Class 组件

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

### Class 组件 API
<!--rehype:wrap-class=row-span-2-->

#### 额外的 API

:- | -
:- | -
`this.forceUpdate()` | 强制重新渲染
`this.setState({ ... })` | 更新状态
`this.setState(state =>{ ... })` | 更新状态

#### 属性

:- | -
:- | -
`defaultProps` | 默认 props
`displayName` | 显示组件名称(用于调试)

#### 实例属性

:- | -
:- | -
`this.props` | 组件接受参数
`this.state` | 组件内状态

### Pure 组件

```jsx
import React, {PureComponent} from 'react'

class MessageBox extends PureComponent {
  ···
}
```

### 高阶组件

```jsx
import React, { Component } from 'react';
// 高阶组件 with
const with = data => WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <WrappedComponent data={data} />
      )
    }
  }
}
```

使用高阶组件

```jsx
const LowComponent = (props) => (
  <div>{props.data}</div>
);

const MyComp = with('Hello')(LowComponent)
```

### 包含关系

```jsx
function FancyBorder(props) {
  return (
    <div className={'Fancy'+props.color}>
      {props.children}
    </div>
  );
}
```

组件可以通过 JSX 嵌套

```jsx
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="title">欢迎</h1>
      <p className="message">
        感谢您访问我们的宇宙飞船
      </p>
    </FancyBorder>
  );
}
```

### 作为参数传递

```jsx
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="left">
        {props.left}
      </div>
      <div className="right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={<Contacts />}
      right={<Chat />}
    />
  );
}
```

给组件 `SplitPane` 传递 `left` 和 `right` 两个组件参数

### 嵌入内部组件

```jsx {2}
import React from 'react';
import UserAvatar from "./UserAvatar";

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <UserAvatar />
      <UserAvatar />
    </div>
  );
}
```

注意：假设 `UserAvatar` 在 `UserAvatar.js` 中声明

### 嵌入外部组件

```jsx {2}
import React from 'react';
import {Button} from 'uiw';
export default function UserProfile() {
  return (
    <div className="UserProfile">
      <Button type="primary">
        主要按钮
      </Button>
    </div>
  );
}
```

注意：[uiw](http://npmjs.com/uiw) 组件在 [npmjs.com](https://www.npmjs.com) 上找到，需要先安装导入

### 点组件语法技巧

```jsx
const Menu = ({ children }) => (
  <div className="menu">{children}<div>
);

Menu.Item = ({ children }) => (
  <div>{children}<div>
);
```

-----

```jsx
<Menu>
  <Menu.Item>菜单一</Menu.Item>
  <Menu.Item>菜单二</Menu.Item>
<Menu>
```

Hooks
---

### Hooks API 参考
<!--rehype:wrap-class=row-span-2-->

#### 基础 Hook

方法 | 描述
:- | -
`useState` | 返回一个 `state`，更新 `state` 的函数 [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate)
`useEffect` | 可能有副作用代码的函数 [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect)
`useContext` | 接收并返回该 `context` 的当前值 [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext)

#### 额外的 Hook

方法 | 描述
:- | -
`useReducer` | `useState` 的替代方案 [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate)
`useCallback` | 返回一个回调函数 [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback)
`useMemo` | 返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 值[#](https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo)
`useRef` | 返回一个可变的 `ref` 对象 [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#useref)
`useImperativeHandle` | 暴露给父组件的实例值 [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle)
`useLayoutEffect` | DOM 变更后同步调用函数 [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect)
`useDebugValue` | 开发者工具中显示标签 [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#usedebugvalue)
`useDeferredValue` | 接受并返回该值的新副本 [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#usedeferredvalue)
`useTransition` | 过渡任务的等待状态 [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#usetransition)
`useId` | 用于生成唯一 ID [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#useid)

#### Library Hooks

方法 | 描述
:- | -
`useSyncExternalStore` | 读取和订阅外部数据源 [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#usesyncexternalstore)
`useInsertionEffect` |  DOM 突变之前 同步触发 [#](https://zh-hans.reactjs.org/docs/hooks-reference.html#usesyncexternalstore)

### 函数式更新
<!--rehype:wrap-class=col-span-2-->

```jsx
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count} <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

### useRef

```jsx
function TextInputWithFocusButton() {
  const $input = useRef(null);
  const onButtonClick = () => {
    $input.current.focus();
  };
  return (
    <>
      <input ref={$input} type="text" />
      <button onClick={onButtonClick}>
        聚焦输入
      </button>
    </>
  );
}
```

`current` 指向已挂载到 DOM 上的文本输入元素

### useImperativeHandle

```jsx
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} />;
}
FancyInput = forwardRef(FancyInput);
```

父组件使用

```jsx
<FancyInput ref={inputRef} />
inputRef.current.focus()
```

### useEffect

```jsx
useEffect(() => {
  const subs = props.source.subscribe();
  return () => {
    subs.unsubscribe();
  };
}, [props.source]);
```

### useCallback

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

### useMemo

```jsx
const memoizedValue = useMemo(
  () => {
    return computeExpensiveValue(a, b)
  },
  [a, b]
);
```

### useId

```jsx
function Checkbox() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>
        你喜欢React吗？
      </label>
      <input id={id} type="checkbox" />
    </>
  );
};
```

用于生成跨服务端和客户端稳定的唯一 `ID` 的同时避免 `hydration` 不匹配

### useDebugValue

```jsx
function useFriendStatus(friendID) {
  const [
    isOnline, setIsOnline
  ] = useState(null);
  // ...
  // 在开发者工具中的这个 Hook 旁边显示标签
  // e.g. "FriendStatus: Online"
  useDebugValue(
    isOnline ? 'Online' : 'Offline'
  );
  return isOnline;
}
```
<!--rehype:className=wrap-text -->

不推荐你向每个自定义 `Hook` 添加 `debug` 值

### componentDidMount & componentWillUnmount

```jsx
useEffect(
  () => {
    // componentDidMount
    // 组件挂载时，可以在这里完成你的任务
    return () => {
      // componentWillUnmount
      // 卸载时执行，清除 effect
    };
  },
  [ ]
);
```

这是一个类似 `class` 组件中 `componentDidMount` & `componentWillUnmount` 两个生命周期函数的写法。

生命周期
---
<!--rehype:body-class=cols-2-->

### 挂载
<!--rehype:wrap-class=row-span-2-->

方法 | 描述
:- | -
`constructor` _(props)_  | 渲染前 [#](https://zh-hans.reactjs.org/docs/react-component.html#constructor)
`static getDerivedStateFromProps()` | 调用 `render` 方法之前调用 [#](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
`render()`               |  `class` 组件中唯一必须实现的方法 [#](https://reactjs.org/docs/react-component.html#render)
`componentDidMount()`    | 在组件挂载后(插入 DOM 树中)立即调用 [#](https://reactjs.org/docs/react-component.html#componentdidmount)
`UNSAFE_componentWillMount()` | 在挂载之前被调用，建议使用 `constructor()` [#](https://zh-hans.reactjs.org/docs/react-component.html#unsafe_componentwillmount)

在 `constructor()` 上设置初始状态。在 `componentDidMount()` 上添加 DOM 事件处理程序、计时器(等），然后在 `componentWillUnmount()` 上删除它们。

### 卸载

方法 | 描述
:- | -
`componentWillUnmount()` | 在组件卸载及销毁之前直接调用 [#](https://zh-hans.reactjs.org/docs/react-component.html#componentwillunmount)

### 过时 API

过时方法 | 新方法
:- | -
~~`componentWillMount()`~~ | `UNSAFE_componentWillMount()`  [#](https://zh-hans.reactjs.org/docs/react-component.html#unsafe_componentwillmount)
~~`componentWillReceiveProps()`~~ | `UNSAFE_componentWillReceiveProps()`  [#](https://zh-hans.reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops)
~~`componentWillUpdate()`~~ | `UNSAFE_componentWillUpdate()`  [#](https://zh-hans.reactjs.org/docs/react-component.html#unsafe_componentwillupdate)

17+ 之后不再支持，在 `17` 版本之后，只有新的 `UNSAFE_` 生命周期名称可以使用。

### 更新
<!--rehype:wrap-class=col-span-2-->

方法 | 描述
:- | -
`static getDerivedStateFromProps(props, state)` | 调用 `render` 之前调用，在初始挂载及后续更新时都会被调用 [#](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
`shouldComponentUpdate(nextProps, nextState)` | 如果返回 `false`，则跳过 `render()` [#](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
`render()` | 在不修改组件 `state` 的情况下，每次调用时都返回相同的结果 [#](https://zh-hans.reactjs.org/docs/react-component.html#render)
`getSnapshotBeforeUpdate()` | 在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置） [#](https://zh-hans.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)
`componentDidUpdate()` | 这里使用 `setState()`，但记得比较 `props`。首次渲染不会执行此方法 [#](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate)

### 错误处理
<!--rehype:wrap-class=col-span-2-->

方法 | 描述
:- | -
`static getDerivedStateFromError(error)` | 后代组件抛出错误后被调用，它将抛出的错误作为参数，并返回一个值以更新 `state` [#](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromerror)
`componentDidCatch(error, info)` | 在后代组件抛出错误后被调用，会在“提交”阶段被调用，因此允许执行副作用 [#](https://zh-hans.reactjs.org/docs/react-component.html#componentdidcatch)

### render()

```jsx {2}
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### constructor()

```jsx {1}
constructor(props) {
  super(props);
  // 不要在这里调用 this.setState()
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

### static getDerivedStateFromError()
<!--rehype:wrap-class=row-span-2-->

```jsx {7,13}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显降级 UI
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级  UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

### componentDidUpdate()

```jsx {1}
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.uid !== prevProps.uid) {
    this.fetchData(this.props.uid);
  }
}
```

### getSnapshotBeforeUpdate()

```jsx
getSnapshotBeforeUpdate(prevProps, prevState) {
  // 我们是否在 list 中添加新的 items ？
  // 捕获滚动​​位置以便我们稍后调整滚动位置。
  if (prevProps.list.length < this.props.list.length) {
    const list = this.listRef.current;
    return list.scrollHeight - list.scrollTop;
  }
  return null;
}
```

PropTypes 属性类型检查
---

### PropTypes
<!--rehype:wrap-class=row-span-3-->

```jsx
import PropTypes from 'prop-types'
```

-----

:- | -
:- | -
`any` | 任意类型
`(props, propName, 组件名称)=>{}` | 自定义验证器

#### _基础_

:- | -
:- | -
`string` | 字符串
`number` | 数组
`func` | 函数
`bool` | 布尔值
`symbol` | -

#### _枚举 Enum_

:- | -
:- | -
`oneOf(any)` | 枚举类型
`oneOfType([type])` | 几种类型中的任意一个类型

#### _数组 Array_

:- | -
:- | -
`array` | 数组
`arrayOf` | 数组由某一类型的元素组成

#### _对象 Object_

:- | -
:- | -
`object` | 对象
`objectOf` | 对象由某一类型的值组成
`instanceOf(...)` | 类的实例
`shape` | 对象由特定的类型值组成
`exact` | 有额外属性警告

#### _元素 Elements_

:- | -
:- | -
`element` | React 元素
`elementType` | React 元素类型(即 `MyComponent`)
`node` | DOM 节点

#### _必需的_

:- | -
:- | -
`(···).isRequired` | 必需的

请参阅：[使用 PropTypes 进行类型检查](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html)

### 基本类型

```jsx
MyComponent.propTypes = {
  email:      PropTypes.string,
  seats:      PropTypes.number,
  callback:   PropTypes.func,
  isClosed:   PropTypes.bool,
  any:        PropTypes.any
  symbol:     PropTypes.symbol,
}
```

你可以将属性声明为 JS 原生类型，默认都是可选的。

### 必需的

```jsx
MyComponent.propTypes = {
  // 确保这个 prop 没有被提供时，会打印警告信息
  requiredFunc: PropTypes.func.isRequired,

  // 任意类型的必需数据
  requiredAny: PropTypes.any.isRequired,
}
```

你可以在任何 `PropTypes` 属性后面加上 `isRequired`。

### 枚举

```js
MyComponent.propTypes = {
  // 只能是特定的值，枚举类型。
  optionalEnum: PropTypes.oneOf([
    'News', 'Photos'
  ]),
  // 一个对象可以是几种类型中的任意一个类型
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),
}
```

### 元素 Elements

```jsx
MyComponent.propTypes = {
  // 任何可被渲染的元素
  // (包括数字、字符串、元素或数组)
  // (或 Fragment) 也包含这些类型。
  node: PropTypes.node,

  // 一个 React 元素。
  element: PropTypes.element,

  // 一个 React 元素类型（即，MyComponent）
  elementType: PropTypes.elementType,
}
```

### 对象 Object

```jsx
MyComponent.propTypes = {
  // 可以指定一个对象由某一类型的值组成
  objectOf: PropTypes.objectOf(
    PropTypes.number
  ),
  // 可以指定一个对象由特定的类型值组成
  objectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
  // 带有额外属性警告的对象
  objectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
  }),
}
```

### 自定义验证器

```jsx
MyComponent.propTypes = {
  custom: (props, propName, compName) => {
    if (!/matchm/.test(props[propName])) {
      // 它在验证失败时应返回一个 Error 对象
      return new Error(
        '无效的prop `'
        ` \`${propName}\` 提供给` + 
        ` \`${compName}\`。验证失败。`
      );

    }
  },
}
```

请不要使用 `console.warn` 或抛出异常，因为这在 `oneOfType` 中不会起作用。

### 自定义的 `arrayOf` 或 `objectOf` 验证器
<!--rehype:wrap-class=col-span-2 row-span-2-->

```jsx
MyComponent.propTypes = {
  arrayProp: PropTypes.arrayOf((propValue, key, componentName, location, propFullName) => {
    if (!/matchme/.test(propValue[key])) {
      // 它应该在验证失败时返回一个 Error 对象。
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
}
```

`propValue` 是数组或对象本身，`key` 是他们当前的键。

### 数组

```jsx
MyComponent.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.number),
};
```

可以指定一个数组由某一类型的元素组成

### 验证类的实例

```jsx
MyComponent.propTypes = {
  message: PropTypes.instanceOf(Message),
};
```

声明 `message` 为类的实例

另见
----

- [React 官方中文文档](https://zh-hans.reactjs.org/) _(zh-hans.reactjs.org)_
- [反应生命周期方法图](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) _(projects.wojtekmaj.pl)_
- [React 16 Cheat Sheet](https://reactcheatsheet.com)
- [Awesome React](https://github.com/enaqx/awesome-react) _(github.com)_
