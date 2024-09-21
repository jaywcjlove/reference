React Router 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/react-router-dom.svg?style=flat)](https://npmjs.org/package/react-router-dom)
[![Downloads](https://img.shields.io/npm/dm/react-router-dom.svg?style=flat)](https://www.npmjs.com/package/react-router-dom)
[![Repo Dependents](https://badgen.net/github/dependents-repo/remix-run/react-router)](https://github.com/remix-run/react-router/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/remix-run/react-router)

适合初学者的综合 [React Router 6.x](https://reactrouter.com/en/main/start/overview) 备忘清单
<!--rehype:style=padding-top: 12px;-->

入门
----

### 安装使用

```bash
$ npm create vite@latest myApp --\
     --template react
# 按照提示操作
$ cd <myApp>
$ npm install react-router-dom \
    localforage \
    match-sorter \
    sort-by
$ npm run dev
```

### 添加路由器
<!--rehype:wrap-class=row-span-2-->

```jsx {3-6,8-13,19}
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const root=document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

### 根路由

```jsx {1,6}
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
```

### 处理未找到错误

```jsx {1,7}
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
```

### `contacts` 用户界面

```jsx {1,9-12}
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);
```

### 嵌套路由

`src/main.jsx`

```jsx {6-11}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```

`src/routes/root.jsx`

```jsx {1,8}
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      {/* 所有其他元素 */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
```

### 客户端路由

```jsx {2,9,14}
import {
  Outlet, Link
} from "react-router-dom";

export default function Root() {
  return (
    <ul>
      <li>
        <Link to={`contacts/1`}>
          Your Name
        </Link>
      </li>
      <li>
        <Link to={`contacts/2`}>
          Your Friend
        </Link>
      </li>
    </ul>
  );
}
```

### 创建联系人
<!--rehype:wrap-class=row-span-2-->

创建动作并将 `<form>` 更改为 `<Form>`

```jsx {5,8,11-14,20-22}
import {
  Outlet,
  Link,
  useLoaderData,
  Form,
} from "react-router-dom";
import {
  getContacts, createContact
} from "../contacts";

export async function action() {
  const contact = await createContact();
  return { contact };
}
export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <div id="sidebar">
      <h1>React Router Contacts</h1>
      <Form method="post">
        <button type="submit">New</button>
      </Form>
    </div>
  );
}
```

导入并设置路由上的 `action`

```jsx {3,12}
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```

### 加载程序中的 URL 参数
<!--rehype:wrap-class=row-span-3-->

```jsx {3}
[
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
];
```

`:contactId` URL 段。 冒号（<pur>:</pur>）具有特殊含义，将其变成“`动态段`”

```jsx {1-4,6-8,11}
import {
  useLoaderData
} from "react-router-dom";
import { getContact } from "../contacts";

export async function loader({ params }) {
  return getContact(params.contactId);
}

export default function Contact() {
  const contact = useLoaderData();
  // existing code
}
```

在路由上配置 `loader`

```jsx {2,16}
import Contact, {
  loader as contactLoader,
} from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  },
]);
```

### 更新数据
<!--rehype:wrap-class=row-span-3-->

```jsx
import {
  Form, useLoaderData
} from "react-router-dom";

export default function EditContact() {
  const contact = useLoaderData();

  return (
    <Form method="post" id="contact-form">
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">保存</button>
        <button type="button">取消</button>
      </p>
    </Form>
  );
}
```

添加新的编辑路由

```jsx {1,16-20}
import EditContact from "./routes/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
      },
    ],
  },
]);
```

### 活动链接样式

```jsx {2,7-8}
import {
  NavLink,
} from "react-router-dom";

<NavLink
  to={`contacts/${contact.id}`}
  className={({ isActive, isPending }) =>
    isActive
      ? "active"
      : isPending
      ? "pending"
      : ""
  }
>
  {/* other code */}
</NavLink>
```

### 全局待定用户界面

```jsx {7,13-14}
import {
  useNavigation,
} from "react-router-dom";

export default function Root() {
  const { contacts } = useLoaderData();
  const navigation = useNavigation();

  return (
    <div
      id="detail"
      className={
        navigation.state === 'loading'
          ? 'loading' : ''
      }
    >
      <Outlet />
    </div>
  );
}
```

### 使用 FormData 更新联系人
<!--rehype:wrap-class=col-span-2-->

向编辑模块添加一个动作

```jsx {4,6,8-13}
import {
  Form,
  useLoaderData,
  redirect,
} from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
```

将动作连接到路由

```jsx {2,22}
import EditContact, {
  action as editAction,
} from "./routes/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);
```

### 删除记录

```jsx {3}
<Form
  method="post"
  action="destroy"
  onSubmit={(event) => {
    if (!confirm("请确认您要删除此记录")) {
      event.preventDefault();
    }
  }}
>
  <button type="submit">删除</button>
</Form>
```

添加销毁动作

```jsx
import {redirect} from "react-router-dom";
import {deleteContact} from "../contacts";

export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}
```

将 `destroy` 路由添加到路由配置中

```jsx {2,9-12}
import {
  action as destroyAction
} from "./routes/destroy";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
       path: "contacts/:contactId/destroy",
       action: destroyAction,
      },
    ],
  },
]);
```

### 上下文错误

```jsx {2}
export async function action({ params }) {
  throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}
```

让我们为 `destroy` 路由创建上下文错误消息：

```jsx {5}
[
  {
    path: "contacts/:contactId/destroy",
    action: destroyAction,
    errorElement: <div>哎呀！有一个错误</div>,
  },
];
```

### 首页路由

```jsx {1,11}
import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
    ],
  },
]);
```

### 取消按钮

```jsx {5,10,18-20}
import {
  Form,
  useLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";

export default function Edit() {
  const contact = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <div>
        <button type="submit">保存</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          取消
        </button>
      </div>
    </Form>
  );
}
```

### 使用客户端路由获取提交
<!--rehype:wrap-class=row-span-2-->

将 `<form>` 更改为 `<Form>`

```jsx {1,9}
<Form id="search-form" role="search">
  <input
    id="q"
    aria-label="Search contacts"
    placeholder="Search"
    type="search"
    name="q"
  />
</Form>
```

如果有 `URLSearchParams` 过滤列表

```jsx {1,4}
export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts };
}
```

### 将 URL 同步到表单状态
<!--rehype:wrap-class=row-span-2-->

```jsx {5,9,20}
export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

export default function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();

  return (
    <Form id="search-form" role="search">
      <input
        id="q"
        aria-label="Search contacts"
        placeholder="Search"
        type="search"
        name="q"
        defaultValue={q}
      />
      {/* existing code */}
    </Form>
  );
}
```

### 将输入值与 URL 搜索参数同步

```jsx {1,7-9}
import { useEffect } from "react";

export default function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);
}
```

### 提交变更 Forms

```jsx {2,8,19-21}
import {
  useSubmit,
} from "react-router-dom";

export default function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  return (
    <Form id="search-form" role="search">
      <input
        id="q"
        aria-label="Search contacts"
        placeholder="Search"
        type="search"
        name="q"
        defaultValue={q}
        onChange={(event) => {
          submit(event.currentTarget.form);
        }}
      />
      {/* existing code */}
    </Form>
  );
}
```

Routers
---

### 挑选路由器

在 v6.4 中，引入了支持新数据 API 的新路由器：

:-- | --
:-- | --
`createBrowserRouter` | [#](https://reactrouter.com/en/main/routers/create-browser-router)
`createMemoryRouter` | [#](https://reactrouter.com/en/main/routers/create-memory-router)
`createHashRouter` | [#](https://reactrouter.com/en/main/routers/create-hash-router)

以下路由器不支持数据 `data` API：

:-- | --
:-- | --
`<BrowserRouter>` | [#](https://reactrouter.com/en/main/router-components/browser-router)
`<MemoryRouter>` | [#](https://reactrouter.com/en/main/router-components/memory-router)
`<HashRouter>` | [#](https://reactrouter.com/en/main/router-components/hash-router)
`<NativeRouter>` | [#](https://reactrouter.com/en/main/router-components/native-router)
`<StaticRouter>` | [#](https://reactrouter.com/en/main/router-components/static-router)

### 路由示例
<!--rehype:wrap-class=col-span-2-->

快速更新到 v6.4 的最简单方法是从 createRoutesFromElements 获得帮助，因此您无需将 `<Route>` 元素转换为路由对象

```jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="dashboard" element={<Dashboard />} />
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

### createBrowserRouter
<!--rehype:wrap-class=row-span-2-->

```jsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root, {rootLoader} from "./root";
import Team, {teamLoader} from "./team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]);

const root=document.getElementById('root');

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
```

Type Declaration

```jsx
function createBrowserRouter(
  routes: RouteObject[],
  opts?: {
    basename?: string;
    window?: Window;
  }
): RemixRouter;
```

routes

```jsx
createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "events/:id",
        element: <Event />,
        loader: eventLoader,
      },
    ],
  },
]);
```

`basename` 用于您无法部署到域的根目录，而是部署到子目录的情况

```jsx
createBrowserRouter(routes, {
  basename: "/app",
});

createBrowserRouter(routes, {
  basename: "/app",
});
<Link to="/" />;
// results in <a href="/app" />

createBrowserRouter(routes, {
  basename: "/app/",
});
<Link to="/" />;
// results in <a href="/app/" />
```

### createHashRouter

```jsx {4,11}
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { rootLoader } from "./root";
import Team, { teamLoader } from "./team";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]);

const root=document.getElementById('root');

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
```

### createMemoryRouter
<!--rehype:wrap-class=row-span-2-->

```jsx {2-3,24-27}
import {
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import * as React from "react";
import {
  render,
  waitFor,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import CalendarEvent from "./event";

test("event route", async () => {
  const FAKE_EVENT = { name: "测试事件" };
  const routes = [
    {
      path: "/events/:id",
      element: <CalendarEvent />,
      loader: () => FAKE_EVENT,
    },
  ];

  const router=createMemoryRouter(routes,{
    initialEntries: ["/", "/events/123"],
    initialIndex: 1,
  });

  render(
    <RouterProvider router={router} />
  );

  await waitFor(
    () => screen.getByRole("heading")
  );
  expect(screen.getByRole("heading"))
    .toHaveTextContent(
    FAKE_EVENT.name
  );
});
```

initialEntries

```jsx
createMemoryRouter(routes, {
  initialEntries: ["/", "/events/123"],
});
```

initialIndex

```jsx {3}
createMemoryRouter(routes, {
  initialEntries: ["/", "/events/123"],
  initialIndex: 1,
  // start at "/events/123"
});
```

### \<RouterProvider>

```jsx {26}
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const root=document.getElementById('root');

ReactDOM.createRoot(root).render(
  <RouterProvider
    router={router}
    fallbackElement={<BigSpinner />}
  />
);
```

`fallbackElement` 如果您不是服务器渲染您的应用程序，DataBrowserRouter 将在安装时启动所有匹配的路由加载器。 在此期间，您可以提供一个 fallbackElement 来向用户表明该应用程序正在运行

```jsx {3}
<RouterProvider
  router={router}
  fallbackElement={<SpinnerOfDoom />}
/>
```

Router Components
---

### \<BrowserRouter>

```jsx {4}
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter
} from "react-router-dom";

const root=document.getElementById('root');
ReactDOM.createRoot(root).render(
  <HashRouter>
    {/* 你的应用程序的其余部分在这里 */}
  </HashRouter>,
);
```

`<BrowserRouter>` 使用干净的 `URL` 将当前位置存储在浏览器的地址栏中，并使用浏览器的内置历史堆栈进行导航

### \<HashRouter>

```jsx {4}
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  HashRouter
} from "react-router-dom";

const root=document.getElementById('root');
ReactDOM.createRoot(root).render(
  <HashRouter>
    {/* 你的应用程序的其余部分在这里 */}
  </HashRouter>,
);
```

`<HashRouter>` 用于 Web 浏览器，因为某些原因不应（或不能）将 URL 发送到服务器

### \<NativeRouter>

```jsx {3}
import * as React from "react";
import {
  NativeRouter
} from "react-router-native";

function App() {
  return (
    <NativeRouter>
      {/* 你的应用程序的其余部分在这里 */}
    </NativeRouter>
  );
}
```

`<NativeRouter>` 是在 React Native 应用程序中运行 React Router 的推荐接口

### \<MemoryRouter>
<!--rehype:wrap-class=col-span-2 row-span-2-->

```jsx
import * as React from "react";
import { create } from "react-test-renderer";
import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";

describe("My app", () => {
  it("renders correctly", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/users/mjackson"]}>
        <Routes>
          <Route path="users" element={<Users />}>
            <Route path=":id" element={<UserProfile />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
```

`<MemoryRouter>` 在内部将其位置存储在一个数组中。 与 `<BrowserHistory>` 和 `<HashHistory>` 不同，它不依赖于外部源，例如浏览器中的历史堆栈。 这使得它非常适合需要完全控制历史堆栈的场景，例如测试

### \<Router>

`<Router>` 是所有路由器组件（如 `<BrowserRouter>` 和 `<StaticRouter>`）共享的低级接口。 就 React 而言，`<Router>` 是一个上下文提供者，它向应用程序的其余部分提供路由信息

### \<StaticRouter>

```jsx
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import http from "http";

function requestHandler(req, res) {
  let html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      {/* 你的应用程序的其余部分在这里 */}
    </StaticRouter>
  );

  res.write(html);
  res.end();
}

http.createServer(requestHandler)
    .listen(3000);
```
<!--rehype:className=wrap-text-->

另见
---

- [React Router 官网](https://reactrouter.com/)
