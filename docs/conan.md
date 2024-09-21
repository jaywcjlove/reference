Conan 备忘清单
===

这个 [Conan](https://conan.io/) 快速参考备忘清单显示了它的常用命令使用清单

入门
---

### 介绍

Conan 是开源、去中心化和多平台的软件包，管理器来创建和共享您的所有本机二进制文件

- [Conan 官网](https://conan.io/)

#### 安装

```bash
$ pip install conan
$ pip install conan --upgrade
```

初始化配置文件

```bash
$ conan config init
```

### 显示本地客户端配置

Conan 应用配置

```bash
# 查看 Conan 主目录
$ conan config home
# 显示部分或全部配置项
$ conan config get [<section>.<config>]
# 显示完整的 conan.conf 文件
$ conan config get
# 在“日志”部分显示“级别”项
$ conan config get log.level
```

配置文件的内容（例如默认值）

```bash
$ conan profile show default
```

远程存储库

```bash
$ conan remote list
```

### 添加和修改配置

安装配置集合

```bash
$ conan config install <url>
$ conan config install ./my_config.conf
```

更改单个配置值

```bash
$ conan config set general.revisions_enabled=1
```
<!--rehype:className=wrap-text -->

添加遥控器

```bash
$ conan remote add my_remote <url>
```

提供远程凭据

```bash
$ conan user -p <password> -r my_remote <username>
```
<!--rehype:className=wrap-text -->

### 显示来自 inspect 或 reference 的信息

显示 `conanfile.py` 的属性

```bash
$ conan inspect <path> -a <attribute>
```

显示 `conanfile.py` 的内容以供参考

```bash
$ conan get <reference>
```

显示 `recipe` 的依赖关系图信息

```bash
$ conan info <path_or_reference>
```

### 搜索包
<!--rehype:wrap-class=col-span-2-->

在远程搜索包

```bash
# 列出本地缓存中的包名称
$ conan search 
$ conan search <package>/<revision>@<user>/<channel>  # 输出取决于给出了多少包引用。
                                          # 支持通配符
               [--table=file.html]        # 将输出保存在 HTML 文件中
               [-r=<remote>]              # 查看远程存储库（默认为本地缓存）

$ conan search mylib/1.0@user/channel     # 显示本地缓存中 mylib/1.0@user/channel 的所有包
$ conan search "zlib/*" -r=all            # 在所有远程中显示所有版本的 zlib

$ conan search zlib -r conan-center

# 显示包的修订：
$ conan search <package>/<revision>@<user>/<channel> --revisions
```

### 安装包
<!--rehype:wrap-class=row-span-2-->

仅使用参考安装包

```bash
$ conan install <package_reference>
```

从 conanfile 安装软件包列表

```bash
$ cat conanfile.txt
[requires]
zlib/1.2.11
$ conan install <path_to_conanfile>
```

通过生成器在构建系统中使用包

```bash
$ cat conanfile.txt
[requires]
zlib/1.2.11
[generators]
cmake_find_package
msbuild
make
```

安装需求并生成文件

```bash
$ mkdir build && cd build
$ conan install ..
```

运行您的构建系统（以下之一）

```bash
$ cmake .. && cmake --build .
$ msbuild myproject.sln
$ make
```

### 创建一个包

从模板创建配方 (conanfile.py)

```bash
$ conan new <reference> -m <template>
```

只需将配方导出到本地缓存

```bash
$ conan export <path_to_conanfile>
```

从 recipe 为一种配置创建包
也隐含地安装和导出步骤

```bash
$ conan create . -pr <profile>
```

### 检查包裹

完整打印包装配方：

```bash
$ conan get <package>/<revision>@<user>/<channel>
$ conan get boost/1.74.0
```
<!--rehype:className=wrap-text -->

包装配方的打印属性：

```bash
$ conan inspect <package>/<revision>@<user>/<channel>
$ conan inspect boost/1.74.0
```
<!--rehype:className=wrap-text -->

请参阅 [conan get](https://docs.conan.io/en/latest/reference/commands/consumer/get.html) 和 [conan inspect](https://docs.conan.io/en/latest/reference/commands/misc/inspect.html) 参考

### Lockfiles

创建一个锁文件：

```bash
$ conan lock create <package>/conanfile.py --user=<user> --channel=<channel>
```
<!--rehype:className=wrap-text -->

在 `conan create` 或 `conan install` 期间使用 lockfile：

```bash
$ conan <command> --lockfile conan.lock
```

查看 [conan lock](https://docs.conan.io/en/latest/reference/commands/misc/lock.html) 参考
