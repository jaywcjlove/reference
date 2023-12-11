NestJS 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/@nestjs/core.svg?style=flat)](https://www.npmjs.com/package/@nestjs/core)
[![Downloads](https://img.shields.io/npm/dm/@nestjs/core.svg?style=flat)](https://www.npmjs.com/package/@nestjs/core)
[![Repo Dependents](https://badgen.net/github/dependents-repo/nestjs/nest)](https://github.com/nestjs/nest/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/nestjs/nest)

[NestJS](https://docs.nestjs.com/) 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的开发框架
<!--rehype:style=padding-top: 12px;-->

创建应用
---

### NestCLI

[NestJS](https://docs.nestjs.com/) 需要 [Node.js >= 12](https://nodejs.org)

```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```

[Nest CLI](https://docs.nestjs.com/cli/overview) 是一个命令行界面工具，可以帮助你初始化、开发和维护你的Nest应用程序，安装依赖并启动开发服务器

```bash
$ cd <your-project-name>
$ npm run start
```

当你准备将应用发布到生产环境时，请运行：

```bash
$ npm run build
```

此命令会在 `./dist` 文件夹中为你的应用创建一个生产环境的构建版本

### CLI指令

命令 | 别名 | 描述
:-|-|-
`new` | n | 使用模板快速创建应用
`generate` | g | 自动生成`Controller`、`Providers` 和 `Modules`
`build` | | 打包并输出./dist目录
`start` | | 打包并运行
`add`   | | 安装一个符合Nest的库，同`npm install`
`info`  | i | 输出系统信息、CLI版本和Nest Package信息
<!--rehype:className=show-header left-align-->

### Platform(平台)
<!--rehype:wrap-class=row-span-2-->

目前 `NestJS` 支持两个 `Node HTTP` 平台：[Express](https://expressjs.com/) 和 [Fastify](https://www.fastify.io/)。从技术上讲，一旦创建了适配器，Nest 便可以使用任何 Node HTTP 框架

#### platform-express

```ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  await app.listen(3000)
}
bootstrap()
```
<!--rehype:className=wrap-text-->

#### platform-fastify

```ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestFastifyApplication } from '@nestjs/platform-fastify'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule)
  app.enableCors() // 开启Cors
  app.register(fastifyCsrf)
  await app.listen(4000, '0.0.0.0')
  
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
```
<!--rehype:className=wrap-text-->

### 目录

```bash
├── src      # 源代码目录
│   ├── app.module.ts          # 应用程序的根模块
│   ├── app.controller.spec.ts # 控制器的单元测试
│   ├── app.controller.ts      # 单个路由的基本控制器
│   ├── app.service.ts         # 具有单一方法的基本服务
│   └── main.ts # 应用程序的入口文件
│               # 它使用核心函数 NestFactory 
│               # 来创建 Nest 应用程序的实例
└── test      # 测试目录
    ├── app.e2e-spec.ts
    └── jest-e2e.json
```

### JavaScript

`NestCLI` 默认是使用`TypeScript`进行初始化项目的，如果需要使用`JavaScript`请使用以下指令

```bash
$ git clone https://github.com/nestjs/javascript-starter.git

$ cd <javascript-starter>
$ npm install
$ npm run start
```
<!--rehype:className=wrap-text-->

需要[注意](<https://docs.nestjs.com/first-steps#language>)的一点是，`JavaScript` 的版本是需要 `Babel` 的

另见
---

[NestJs 官方文档](https://docs.nestjs.com/)
