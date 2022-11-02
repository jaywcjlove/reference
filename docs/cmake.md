CMake 备忘清单
===

本清单提供了对 CMake 的入门简要概述，以及 CMake 常用示例

入门
---

### Hello CMake

CMake 是一个用于配置跨平台源代码项目应该如何配置的工具建立在给定的平台上。

```bash
├┈ CMakeLists.txt # 希望运行的 CMake 命令
╰┈ main.cpp # 带有 main 的源文件
```

在此项目上运行 `CMake` 时，系统会要求您提供二进制目录，运行 `CMake` 不会创建最终的可执行文件，而是会为 `Visual Studio`、`XCode` 或 `makefile` 生成项目文件。 使用这些工具构建该项目

#### CMakeLists.txt

```cmake
# 设置可以使用的最低 CMake 版本
cmake_minimum_required(VERSION 3.5)
# 设置项目名称
project (hello_cmake)
# 添加可执行文件
add_executable(hello_cmake main.cpp)
```

#### main.cpp

```c
#include <iostream>

int main(int argc, char *argv[])
{
  std::cout << "Hello CMake!" << std::endl;
  return 0;
}
```

#### 编译示例

```bash
$ mkdir build   # 创建 build 目录
$ cd build      # 进入目录
$ cmake ..      # 目录的上一级目录运行命令
$ ./hello_cmake # 运行生成的 hello_cmake
Hello CMake!
```

### cmake
<!--rehype:wrap-class=col-span-2-->

生成项目构建系统

```bash
$ cmake [<options>] <path-to-source | path-to-existing-build>bash
$ cmake [<options>] -S <path-to-source> -B <path-to-build>
```

建立一个项目

```bash
$ cmake --build <dir> [<options>] [-- <build-tool-options>]
```

安装项目

```bash
$ cmake --install <dir> [<options>]
```

打开一个项目

```bash
$ cmake --open <dir>
```

运行脚本

```bash
$ cmake [-D <var>=<value>]... -P <cmake-script-file>
```

运行命令行工具

```bash
$ cmake -E <command> [<options>]
```

运行查找包工具

```bash
$ cmake --find-package [<options>]
```

运行工作流预设

```bash
$ cmake --workflow [<options>]
```

查看帮助

```bash
$ cmake --help[-<topic>]
```

另见
----

- [CMake Examples](http://ttroy50.github.io/cmake-examples/) _(ttroy50.github.io)_