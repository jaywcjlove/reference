npm 备忘清单
===

这个 [npm](https://www.npmjs.com/) 快速参考备忘单显示了它的常用命令使用清单

常用命令
----
<!--rehype:body-class=cols-2-->

### 包管理

命令 | 描述
:- |:-
`npm init -y`                      | 创建 `package.json` 文件
`npm install` 或 `npm i`           | 安装 `package.json` 中的所有内容
`npm install --production`         | 安装 `package.json` 中的所有内容 <br /> _(除了 `devDependecies`)_
`npm install lodash`               | 安装一个包
`npm install --save-dev lodash`    | 安装为 `devDependency`
`npm install --save-exact lodash`  | 准确安装
`npm install @scope/package-name`  | 安装一个作用域的公共包
`npm install <package_name>@<tag>` | 使用 `dist-tags` 安装包
`npm install -g <package_name>`    | 全局安装包
`npm uninstall <package_name>`     | 卸载包
<!--rehype:class=auto-wrap-->

### 安装
<!--rehype:wrap-class=row-span-3-->

命令 | 描述
:- |:-
`npm i sax`                          | `NPM` 包 
`npm i sax@latest`                   | 指定标签 `最新`
`npm i sax@3.0.0`                    | 指定版本 `3.0.0`
`npm i sax@">=1 <2.0"`               | 指定版本范围 
`npm i @org/sax`                     | 范围内的 `NPM` 包 
`npm i user/repo`                    | GitHub 
`npm i user/repo#master`             | GitHub 
`npm i github:user/repo`             | GitHub 
`npm i gitlab:user/repo`             | GitLab 
`npm i /path/to/repo`                | 绝对路径 
`npm i ./archive.tgz`                | 压缩包 
`npm i https://site.com/archive.tgz` | 通过 `HTTP` 压缩包 
<!--rehype:class=auto-wrap-->

安装依赖的可用参数

- `-P`, `--save-prod` 包将出现在您的依赖项中，这是默认值(npm v8)，除非存在 `-D` 或 `-O`
- `-D`, `--save-dev` 包会出现在你的 `devDependencies` 中
- `-O`, `--save-optional` 包将出现在您的 `optionalDependencies` 中
- `--no-save` 防止保存到依赖项
- `-E`, `--save-exact` 依赖项将使用精确的版本进行配置，而不是使用 `npm` 的默认 [`semver`](./semver.md) 范围运算符
- `-B`, `--save-bundle` 依赖项也将添加到您的 [`bundleDependencies`](./package.json.md#bundleddependencies) 列表中
<!--rehype:className=style-arrow-->

命令 `npm i` 是 `npm install` 的别名

### 清单

命令 | 描述
:- |:-
`npm list`              | 列出此软件中所有依赖项的已安装版本
`npm list -g --depth 0` | 列出所有全局安装包的安装版本
`npm view`              | 列出此软件中所有依赖项的最新版本
`npm outdated`          | 仅列出此软件中已过时的依赖项
<!--rehype:class=auto-wrap-->

### 缓存 cache

```bash
$ npm cache add <package-spec>    # 将指定的包添加到本地缓存
$ npm cache clean [<key>]         # 删除缓存文件夹中的所有数据
$ npm cache ls [<name>@<version>]
$ npm cache verify # 验证缓存文件夹的内容，垃圾收集任何不需要的数据，
                 # 并验证缓存索引和所有缓存数据的完整性
```

用于添加、列出或清理 [npm](https://www.npmjs.com/) 缓存文件夹

### 更新

命令 | 描述 
:- | - 
`npm version <version>` | 要更改 `package.json` 中的版本号
`npm update`            | 更新生产包
`npm update --dev`      | 更新开发包
`npm update -g`         | 更新全局包
`npm update lodash`     | 更新 `lodash` 包


### 杂项功能
<!--rehype:wrap-class=row-span-2-->


```bash
# 将某人添加为所有者
$ npm owner add USERNAME PACKAGENAME
# 列出包
$ npm ls
# 向安装旧版本软件包的用户添加警告(弃用)
$ npm deprecate PACKAGE@"< 0.2.0" "critical bug fixed in v0.2.0"
# 更新所有包或选定的包
$ npm update [-g] PACKAGE
# 检查过时的包
$ npm outdated [PACKAGE]
```

### 取消发布包

```bash
$ npm unpublish <package-name> -f
# 取消指定版本
$ npm unpublish <package-name>@<version>
```

注意：如果您取消发布整个包，则必须在 24 小时后才能发布该包的任何新版本

### 更改包裹可见性

```bash
# 将公共包设为私有
$ npm access restricted <package-name>
# 公开私有包
$ npm access public <package-name>
# 授予私有包访问权限
$ npm owner add <user> <your-package-name>
```

### 要将包转移到 npm 用户帐户

```bash
# 新维护者接受邀请
$ npm owner add <their-username> <package-name>
# 删除维护者
$ npm owner rm <your-username> <package-name>
# 写入启用了双因素身份验证
$ npm owner add <their-username> <package-name> --otp=123456
```

### 发布包 npmjs.org

```bash
$ npm publish
# 第一次需要指定公开参数
$ npm publish --access public
```

发布公开包，到 [npmjs.org](https://docs.npmjs.com)

### 使用 nrm 切换 registry

```bash
$ npm install -g nrm # 安装 nrm 包
# 查看 registry 列表
$ nrm ls             
# 将注册表切换到 cnpm
$ nrm use cnpm       
```

配置
---

### .npmrc

:- | :-
:- | :-
`/path/to/project/.npmrc` | 每个项目的配置文件
`~/.npmrc` | 每个用户的配置文件
`$PREFIX/etc/npmrc` | 全局配置文件
`/path/to/npm/npmrc` | npm 内置配置文件


### 配置内容

```ini
# last modified: 01 Jan 2016
; Set a new registry for a scoped package
@myscope:registry=https://registry.npmmirror.com
```
<!--rehype:className=wrap-text -->

注释使用 `#`, `;` 放置到一行的开头， [`.npmrc`](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc) 文件由指定此注释语法的 [`npm/ini`](https://github.com/npm/ini) 解析


### registry

:- | :-
:- | :-
`npm` | https://registry.npmjs.org/
`yarn` | https://registry.yarnpkg.com/
`tencent` | https://mirrors.cloud.tencent.com/npm/
`cnpm` | https://r.cnpmjs.org/
`taobao` | https://registry.npmmirror.com/
`npmMirror` | https://skimdb.npmjs.com/registry/

### `.npmignore`

将下面内容存放到 `.npmignore` 文件中，放置在项目的根目录中。

```gitignore
.git
.svn
# 忽略 .swp 后缀的文件
.*.swp
/logs/*

# “！” 意思是不要忽视
!logs/.gitkeep
```

`.npmignore` 文件就像 [`.gitignore`](./git.md#忽略文件) 一样工作。它不能覆盖 `package.json#files` 字段。

### 中国镜像站安装
<!--rehype:wrap-class=col-span-2 row-span-2-->

```bash
# 临时使用
$ npm install -g <package-name> --registry=https://registry.npmmirror.com
```

将配置放置在 [`.npmrc`](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc) 全局配置文件中，或者在项目的根目录中。

```ini
; registry=https://registry.npmjs.org/
registry=https://registry.npmmirror.com
```

或者配置到 [`package.json#publishConfig`](./package.json.md#publishconfig) 字段上

```json
"publishConfig":{
  "registry": "https://registry.npmmirror.com"
}
```

替换 npm 仓库地址为 npmmirror(淘宝) 镜像地址

```bash
$ npm config set registry https://registry.npmmirror.com
```

请参阅：[npmmirror 中国镜像站](https://npmmirror.com/)

#### electronjs 镜像和缓存

```ini
ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
ELECTRON_BUILDER_BINARIES_MIRROR=https://npmmirror.com/mirrors/electron-builder-binaries/
; ELECTRON_CUSTOM_DIR="{{ version }}"
```
<!--rehype:className=wrap-text -->

### 身份验证相关配置

```ini
//registry.npmjs.org/:_authToken=MYTOKEN
; 将适用于 @myorg 和 @another
//somewhere.com/:_authToken=MYTOKEN
; 将适用于 @myorg
//somewhere.com/myorg/:_authToken=MYTOKEN1
; 将适用于 @another
//somewhere.com/another/:_authToken=MYTOKEN2
```

另见
----

- [npm 仓库、网站和命令行界面的文档](https://docs.npmjs.com/) _(npmjs.com)_
- [npmmirror 中国镜像站](https://npmmirror.com/) _(npmmirror.com)_