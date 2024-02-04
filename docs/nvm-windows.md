nvm-windows 备忘清单
===

[nvm-windows](https://github.com/coreybutler/nvm-windows) 是一个用于管理windows电脑上多个node.js版本的程序
<!--rehype:style=padding-top: 12px;-->

入门
-----

### 安装

最新的node-windows可以通过[nvm-windows发行版下载](https://github.com/coreybutler/nvm-windows/releases)地址下载安装程序
双击setup程序按照提示操作即可完成安装。

### 常用指令

展示当前使用版本

```
nvm current
```

安装指定版本的node程序版本，version设置为"latest"安装最新版本或者设置为"lts"安装最近的LTS（长期支持）版本。arch可以指定32或者64位版本（默认跟随系统），设置为"all"同时安装32和64位版本。在命令最后添加--insecure将跳过远程下载服务器的SSL验证。

```
nvm install <version> [arch]
```

列出node.js已安版本。可选输入 available 显示可获取的版本下载列表。

```
nvm list [available]
```

卸载指定版本

```
nvm uninstall <version>
```

切换使用指定版本。version可选设置latest、lts以及newest,启用newest指定最近安装版本。arch可选指定32/64位架构。nvm use <arch>将继续使用当前版本，但是将切换为指定架构程序。

```
nvm use <version> [arch]
```

### 基础指令

管理应用程序状态很简单，这里是命令

查看node程序是运行在32位还是64位模式下，指定32或者64覆盖默认运行架构模式

```
nvm arch [32|64]
```

检查NVM4W进程已知问题

```
nvm check
```

启用node.js版本管理

```
nvm on
```

关闭node.js版本管理。（不会执行任何卸载操作）

```
nvm off
```

设置下载代理。可选url留空查看当前使用代理，设置为"none"移除代理设置。

```
nvm proxy [url]
```

设置nvm储存不同版本的node.js的目录。如果未设置path，将展示当前存储目录。

```
nvm root <path>
```

展示当前nvm-windows使用版本。

```
nvm version
```

指定node镜像

```
nvm node_mirror <node_mirror_url>
```

指定npm镜像

```
nvm npm_mirror <npm_mirror_url>
```
