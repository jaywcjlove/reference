React 备忘清单
===

适合初学者的综合 React 备忘清单。


入门
----

### 介绍

React 是一个用于构建用户界面的 JavaScript 库。

- [React 官方文档](https://reactjs.org/) _(reactjs.org)_

```js
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
```

-----

```jsx
const elm = document.getElementById('app')
const root = createRoot(elm);
root.render(<App />);
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
```

使用 `export` 或者 `export default` 导出 `Hello` 组件

```jsx
import { Hello } from './hello.js';

const Example = <Hello />;
```

使用 `import` 导入 `Hello` 组件，在示例中使用。


### React 组件中的 CSS

```jsx
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

```jsx
function AlertBox(props) {
  return (
    <div className="alert-box">
      {props.children}
    </div>
  );
}
```

----

```jsx
{props.children}
```

Class `AlertBox` 组件，与函数组件 `AlertBox` 组件相同

```jsx
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

----

```jsx
{this.props.children}
```

`children` 作为子组件的的属性传递。

### State
<!--rehype:wrap-class=row-span-3-->

函数中的 State，Hook 是 React 16.8 的新增特性

```jsx
import { useState } from 'react';

function Student() {
  // 声明一个叫 "count" 的 state 变量
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

```jsx
import React from 'react';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
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
  <div>{addNumbers(2, 5)}</div>
)
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

### Fragment

```jsx
import { Fragment } from 'react'
import Avatar from './Avatar';
import Profile from './Profile';

const Student = () => (
  <Fragment>
    <Avatar src="./demo.jpg" />
    <Profile username="name" />
  </Fragment>
)
```

从 `v16.2.0` 开始 `Fragment` 可用于返回多个子节点，而无需向 DOM 添加额外的包装节点。或者使用 `<></>` 效果是一样的。

### Portals

React 并*没有*创建一个新的 `div`。它只是把子元素渲染到 `domNode` 中。`domNode` 是一个可以在任何位置的有效 DOM 节点。

```jsx
render() {
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```

提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案

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

```jsx
import { Component,createRef } from 'react';

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

```jsx
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

----

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
### 嵌入内部组件

```jsx
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

注意：假设 `UserAvatar` 在 `UserAvatar.js` 中声明。

### 嵌入外部组件

```jsx
import React from 'react';
import CompName from 'component-name';

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <CompName />
    </div>
  );
}
```

注意：外部组件在 [npmjs.com](https://www.npmjs.com) 上找到，需要先安装导入。

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

生命周期
---

Hooks
---


另见
----

- [React 官方中文文档](https://zh-hans.reactjs.org/) _(zh-hans.reactjs.org)_
- [反应生命周期方法图](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) _(projects.wojtekmaj.pl)_
- [React 16 Cheat Sheet](https://reactcheatsheet.com)
- [Awesome React](https://github.com/enaqx/awesome-react) _(github.com)_