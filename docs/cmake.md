CMake 备忘清单
===

这份快速参考备忘单整理了 CMake 项目配置、生成、构建、测试、安装、目标管理与 Presets 的常用命令和写法

入门
---

### CMake 是什么

CMake 用来描述项目如何配置和生成构建系统。它不会直接替代编译器，而是为 Ninja、Makefile、Visual Studio、Xcode 等生成对应的构建文件。

```text
.
├── CMakeLists.txt
├── include/
│   └── hello.hpp
└── src/
    ├── hello.cpp
    └── main.cpp
```

推荐把源码目录和构建目录分离，避免把生成文件写进源码树。

### 最小项目
<!--rehype:wrap-class=row-span-2-->

```cmake
cmake_minimum_required(VERSION 3.20)

project(hello_cmake
  VERSION 1.0
  LANGUAGES CXX
)

add_executable(hello_cmake)

target_sources(hello_cmake
  PRIVATE
    src/main.cpp
    src/hello.cpp
)

target_include_directories(hello_cmake
  PRIVATE
    include
)

target_compile_features(hello_cmake
  PRIVATE
    cxx_std_17
)

set_target_properties(hello_cmake PROPERTIES
  RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/bin"
)
```

优先使用 `target_*` 命令给目标设置属性，让包含目录、编译特性和链接依赖跟随目标传播。

### 配置与构建

```shell
$ cmake -S . -B build
$ cmake --build build
$ ./build/bin/hello_cmake
```

`-S` 指定源码目录，`-B` 指定构建目录。后续构建直接使用 `cmake --build build`。

### 指定生成器

```shell
$ cmake -S . -B build -G Ninja
$ cmake -S . -B build -G "Unix Makefiles"
$ cmake -S . -B build -G "Visual Studio 17 2022"
```

生成器决定 CMake 输出哪一种构建系统。Windows 上 Visual Studio 生成器通常是多配置生成器。

命令行
---

### 常用命令
<!--rehype:wrap-class=col-span-2-->

命令 | 说明
:- | :-
`cmake -S . -B build` | 配置项目并生成构建系统
`cmake --build build` | 构建项目
`cmake --build build --target app` | 构建指定目标
`cmake --build build --parallel` | 并行构建
`cmake --install build` | 安装项目
`ctest --test-dir build` | 运行测试
`cmake -P script.cmake` | 执行 CMake 脚本
`cmake -E <command>` | 运行跨平台辅助命令
`cmake --open build` | 用关联 IDE 打开生成的项目
`cmake --help` | 查看帮助
<!--rehype:className=show-header-->

### 配置变量

```shell
$ cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
$ cmake -S . -B build -DCMAKE_INSTALL_PREFIX=/opt/myapp
$ cmake -S . -B build -DBUILD_TESTING=ON
```

`-D名称=值` 会写入 CMake cache。重新配置同一构建目录时，cache 中的值会被复用。

### 单配置与多配置
<!--rehype:wrap-class=row-span-2-->

```shell
$ cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug
$ cmake --build build
```

Ninja、Unix Makefiles 等单配置生成器通常用 `CMAKE_BUILD_TYPE` 选择 `Debug`、`Release`、`RelWithDebInfo` 或 `MinSizeRel`。

```shell
$ cmake -S . -B build -G "Visual Studio 17 2022"
$ cmake --build build --config Release
$ ctest --test-dir build -C Release
```

Visual Studio、Xcode、Ninja Multi-Config 等多配置生成器通常在构建或测试阶段用 `--config` / `-C` 选择配置。

### 工具链与编译器

```shell
$ cmake -S . -B build -DCMAKE_TOOLCHAIN_FILE=/path/to/toolchain.cmake
$ cmake -S . -B build -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
```

工具链文件和编译器通常应在第一次配置构建目录时指定。已配置过的构建目录更换工具链时，建议新建构建目录。

### 安装

```shell
$ cmake --install build
$ cmake --install build --prefix /tmp/package
$ cmake --install build --config Release
```

`--prefix` 可在安装阶段临时覆盖 `CMAKE_INSTALL_PREFIX`。

CMakeLists
---

### 项目声明

```cmake
cmake_minimum_required(VERSION 3.20)
project(myapp VERSION 1.2.0 LANGUAGES C CXX)
```

`cmake_minimum_required()` 应放在顶层 `CMakeLists.txt` 靠前位置，用来声明所需最低 CMake 版本并设置策略。

### 可执行文件

```cmake
add_executable(app)

target_sources(app
  PRIVATE
    src/main.cpp
)
```

可先创建目标，再用 `target_sources()` 追加源文件，便于大型项目分块维护。

### 静态库与共享库

```cmake
add_library(core STATIC)
target_sources(core PRIVATE src/core.cpp)

add_library(plugin SHARED)
target_sources(plugin PRIVATE src/plugin.cpp)
```

`STATIC` 生成静态库，`SHARED` 生成动态库。不指定类型时由 `BUILD_SHARED_LIBS` 影响默认行为。

### 链接目标

```cmake
add_executable(app src/main.cpp)
add_library(core src/core.cpp)

target_link_libraries(app
  PRIVATE
    core
)
```

链接 CMake 目标时，目标的公开包含目录、编译定义等用法需求会按 `PUBLIC` / `INTERFACE` 传播。

### 作用域
<!--rehype:wrap-class=col-span-2-->

作用域 | 含义
:- | :-
`PRIVATE` | 只用于当前目标本身
`PUBLIC` | 用于当前目标，并传播给依赖它的目标
`INTERFACE` | 不用于当前目标，只传播给依赖它的目标
<!--rehype:className=show-header-->

### 包含目录

```cmake
target_include_directories(core
  PUBLIC
    include
  PRIVATE
    src
)
```

库的公共头文件目录通常使用 `PUBLIC` 或 `INTERFACE`，内部实现目录使用 `PRIVATE`。

### 编译特性

```cmake
target_compile_features(core PUBLIC cxx_std_20)
```

相比手动设置 `CMAKE_CXX_STANDARD`，`target_compile_features()` 更适合按目标声明需要的语言特性。

### 编译定义

```cmake
target_compile_definitions(core
  PRIVATE CORE_BUILDING
  PUBLIC CORE_ENABLE_LOGGING
)
```

这会为目标添加预处理宏，相当于编译器参数中的 `-DCORE_BUILDING`。

### 编译选项

```cmake
target_compile_options(core
  PRIVATE
    $<$<CXX_COMPILER_ID:GNU,Clang>:-Wall;-Wextra>
    $<$<CXX_COMPILER_ID:MSVC>:/W4>
)
```

生成器表达式可按编译器、平台、配置等条件启用不同选项。

依赖
---

### 查找包

```cmake
find_package(OpenGL REQUIRED)

target_link_libraries(app
  PRIVATE
    OpenGL::GL
)
```

现代 CMake 包通常提供导入目标，例如 `OpenGL::GL`。优先链接导入目标，而不是手动拼 include 路径和库路径。

### 可选依赖

```cmake
find_package(ZLIB)

if(ZLIB_FOUND)
  target_link_libraries(app PRIVATE ZLIB::ZLIB)
  target_compile_definitions(app PRIVATE HAVE_ZLIB)
endif()
```

未加 `REQUIRED` 时，找不到包不会立即失败，可以用 `<PackageName>_FOUND` 判断。

### 子目录

```cmake
add_subdirectory(third_party/fmt)
target_link_libraries(app PRIVATE fmt::fmt)
```

`add_subdirectory()` 会把子项目加入当前构建，适合 vendored 依赖或同仓库子模块。

### FetchContent
<!--rehype:wrap-class=row-span-2-->

```cmake
include(FetchContent)

FetchContent_Declare(
  fmt
  GIT_REPOSITORY https://github.com/fmtlib/fmt.git
  GIT_TAG 10.2.1
)

FetchContent_MakeAvailable(fmt)

target_link_libraries(app PRIVATE fmt::fmt)
```

`FetchContent` 会在配置阶段获取依赖。生产项目建议固定版本标签或提交哈希，避免构建结果随远端变化。

测试与安装
---

### CTest

```cmake
include(CTest)

add_executable(core_tests tests/core_tests.cpp)
target_link_libraries(core_tests PRIVATE core)

add_test(NAME core_tests COMMAND core_tests)
```

```shell
$ cmake -S . -B build -DBUILD_TESTING=ON
$ cmake --build build
$ ctest --test-dir build --output-on-failure
```

`include(CTest)` 会定义 `BUILD_TESTING` 选项，常用于统一开关测试目标。

### 安装目标

```cmake
install(TARGETS app core
  RUNTIME DESTINATION bin
  LIBRARY DESTINATION lib
  ARCHIVE DESTINATION lib
)

install(DIRECTORY include/
  DESTINATION include
)
```

`RUNTIME` 对应可执行文件，`LIBRARY` 对应共享库，`ARCHIVE` 对应静态库或导入库。

### 生成配置头

```cmake
configure_file(
  config.hpp.in
  generated/config.hpp
)

target_include_directories(app
  PRIVATE
    "${CMAKE_CURRENT_BINARY_DIR}/generated"
)
```

`configure_file()` 可把版本号、开关等配置写入生成头文件。

Presets
---

### CMakePresets.json
<!--rehype:wrap-class=row-span-2-->

```json
{
  "version": 3,
  "configurePresets": [
    {
      "name": "dev",
      "displayName": "Dev",
      "generator": "Ninja",
      "binaryDir": "${sourceDir}/build/dev",
      "cacheVariables": {
        "CMAKE_BUILD_TYPE": "Debug",
        "BUILD_TESTING": "ON"
      }
    }
  ],
  "buildPresets": [
    {
      "name": "dev",
      "configurePreset": "dev"
    }
  ],
  "testPresets": [
    {
      "name": "dev",
      "configurePreset": "dev",
      "output": {
        "outputOnFailure": true
      }
    }
  ]
}
```

Presets 用来共享常用配置。团队可提交 `CMakePresets.json`，把个人路径和本地偏好放进 `CMakeUserPresets.json`。

### 使用 Presets

```shell
$ cmake --list-presets
$ cmake --preset dev
$ cmake --build --preset dev
$ ctest --preset dev
```

Presets 可覆盖配置、构建、测试、打包和工作流等常用步骤。

常见模式
---

### 选项开关

```cmake
option(MYAPP_BUILD_TOOLS "Build command line tools" ON)

if(MYAPP_BUILD_TOOLS)
  add_executable(mytool tools/mytool.cpp)
  target_link_libraries(mytool PRIVATE core)
endif()
```

`option()` 会创建布尔 cache 变量，用户可通过 `-DMYAPP_BUILD_TOOLS=OFF` 覆盖。

### 源文件收集

```cmake
target_sources(app
  PRIVATE
    src/main.cpp
    src/app.cpp
    src/app.hpp
)
```

显式列出源文件最稳定。`file(GLOB CONFIGURE_DEPENDS ...)` 可减少维护成本，但新增文件触发重新配置的行为依赖生成器支持。

### 平台判断

```cmake
if(WIN32)
  target_compile_definitions(app PRIVATE APP_PLATFORM_WINDOWS)
elseif(APPLE)
  target_compile_definitions(app PRIVATE APP_PLATFORM_APPLE)
elseif(UNIX)
  target_compile_definitions(app PRIVATE APP_PLATFORM_UNIX)
endif()
```

平台条件适合处理系统 API、路径和链接库差异。

### 构建类型判断

```cmake
target_compile_definitions(app
  PRIVATE
    $<$<CONFIG:Debug>:APP_DEBUG_BUILD>
)
```

用生成器表达式判断配置，比读取 `CMAKE_BUILD_TYPE` 更适合多配置生成器。

排错
---

### 查看 Cache

```shell
$ cmake -S . -B build -LAH
```

`-L` 列出 cache 变量，`-A` 显示高级变量，`-H` 显示帮助说明。

### 清理重新配置

```shell
$ cmake --fresh -S . -B build
```

`--fresh` 会删除已有 `CMakeCache.txt` 和 `CMakeFiles/` 后重新配置，适合解决 cache 污染。

### 输出调试信息

```cmake
message(STATUS "CMAKE_CXX_COMPILER=${CMAKE_CXX_COMPILER}")
message(STATUS "CMAKE_BUILD_TYPE=${CMAKE_BUILD_TYPE}")
```

`message(STATUS ...)` 适合在配置阶段打印变量，定位路径、选项和依赖查找问题。

### 跟踪变量来源

```shell
$ cmake -S . -B build --trace-expand
$ cmake -S . -B build --debug-find
```

`--trace-expand` 用于查看 CMake 脚本执行过程，`--debug-find` 用于排查 `find_package()` 和 `find_*()` 的搜索路径。

另见
----

- [CMake 官方文档](https://cmake.org/cmake/help/latest/)
- [cmake(1) 命令行手册](https://cmake.org/cmake/help/latest/manual/cmake.1.html)
- [CMake Tutorial](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)
- [cmake-presets(7)](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html)
- [cmake-toolchains(7)](https://cmake.org/cmake/help/latest/manual/cmake-toolchains.7.html)
