CMake 备忘清单
===

本清单提供了对 CMake 的入门简要概述，以及 CMake 常用示例

入门
---

### Hello CMake

CMake 是一个用于配置跨平台源代码项目应该如何配置的工具建立在给定的平台上。

```bash
├── CMakeLists.txt  # 希望运行的 CMake命令
├── main.cpp        # 带有main 的源文件
├── include         # 头文件目录
│   └── header.h
└── src             # 源代码目录
    ├── a.c
    └── b.c
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
# 添加头文件目录
target_include_directories(hello_cmake PRIVATE ./include)
# 批量添加源文件
file(GLOB SRCS CONFIGURE_DEPENDS ./src/*.cpp)
target_sources(hello_cmake PUBLIC ${SRCS})
# 添加第三方库
find_package(OpenGL CONFIG REQUIRED)
# 链接第三方库
target_link_libraries(hello_cmake PRIVATE OpenGL)
# 指定输出路径
set_property(TARGET hello_cmake ${CMAKE_SOURCE_DIR}/bin)

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
$ make          # 使用对应的编译工具
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

运行指定项目

```bash
cmake --build <dir> --target <project>
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

#### 常用参数

- 方式一: 在`CMakeLists.txt`中使用`set(KEY VAL)`函数
- 方式二: 在执行`cmake ...` -D<arg> 指定(只需一次,推荐)

```cmake
# 指定编译参数(Debug/Release/MinSizeRel/RelWithDebInfo)
$ cmake ... -D CMAKE_BUILD_TYPE=DEBUG
# 指定编译链工具(windows下vcpkg需要)
$ cmake ... -D CMAKE_TOOLCHAIN_FILE=<vcpkg_path>/scripts/buildsystems/vcpkg.cmake
# 指定编译器
$ cmake ... -D CAMKE_C_COMPILER=...
$ cmake ... -D CAMKE_CXX_COMPILER=...
# 指定生成器
$ cmake .. -G "Unix Makefile"
$ cmake .. -G "Ninja"
$ cmake .. -G "Visual Studio 17 2022"

# 设置Cpp标准
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON) # 在检测到不支持时出错
set(CMAKE_CXX_EXTENSIONS ON) #一般设为off，否则在msvc上没有特性会出错
```

另见
----

- [CMake Examples](http://ttroy50.github.io/cmake-examples/) _(ttroy50.github.io)_
