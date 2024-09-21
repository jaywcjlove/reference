Cargo 备忘清单
===

此快速参考备忘清单 [Cargo](https://conan.io/) 提供了编译 [Rust](./rust.md) 常用命令和示例

入门
--------

### 安装/升级 Rust 和 Cargo

```bash
$ curl -sSf https://static.rust-lang.org/rustup.sh | sh
```
<!--rehype:className=wrap-text-->

在 Linux 和 macOS 系统上，这可以通过以上方命令完成

- [Cargo 开源仓库](https://github.com/rust-lang/cargo) _(github.com)_
- [Cargo 官网](https://doc.rust-lang.org/cargo) _(doc.rust-lang.org)_
- [Cargo 官网(中文)](https://www.rustwiki.org.cn/zh-CN/cargo/index.html) _(rustwiki.org.cn)_
- [Rust 社区的 crate 仓库](https://crates.io/) _(crates.io)_

### 命令说明
<!--rehype:wrap-class=col-span-2-->

:- | :-
:- | :-
`cargo version` | 显示版本信息以确认 Cargo 已安装
`cargo new` | 创建一个新项目
`cargo test` | 在项目中运行单元测试
`cargo check` | 快速编译项目，无需生成二进制文件来检查错误
`cargo fmt` | 自动格式化代码
`cargo build` | 编译一个项目
`cargo run` | 一步编译和运行项目
`cargo clippy --all-targets -- --D warnings` | Linter 检查错误
`cargo tarpaulin --ignore-tests` | 检查代码覆盖率

### 切换源
<!--rehype:wrap-class=col-span-2&style=background:#e91e63;--->

```bash
$ touch ~/.cargo/config # 添加配置文件
$ vim ~/.cargo/config   # 编辑配置文件
```

配置文件 `config` 内容

```toml
[source.crates-io]
registry = "https://github.com/rust-lang/crates.io-index"
replace-with = 'tuna' # 👈 如果需要提交包注释配置源

[source.tuna]
registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"
# registry = "git://mirrors.ustc.edu.cn/crates.io-index"
```

💥 注意切换源需要删除缓存目录

```bash
$ rm -rf ~/.cargo/.package-cache   # ⚠️ 删除缓存目录内容
```

### 创建新项目
<!--rehype:wrap-class=row-span-3-->

```bash
$ cargo new hello_world --bin
```

---

- `--bin` 正在制作一个二进制程序
- `--lib` 正在创建一个库(lib)

得到如下目录:

```bash
$ cd hello_world
$ tree .
.
├── Cargo.toml
└── src
    └── main.rs
```

`Cargo.toml` 被称为一个 `manifest` 元清单，它包含了 `Cargo` 编译项目所需的所有元数据

```toml
[package]
name = "hello_world"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]
edition = "2018"

[dependencies]
```

入口文件 `src/main.rs`

```rust
fn main() {
    println!("Hello, world!");
}
```

运行编译生成 `hello_world` 二进制文件

```bash
$ cargo build
# 文件放入 `target/release` 目录
$ cargo build --release
```

然后运行它:

```bash
$ ./target/debug/hello_world
Hello, world!
```

也可以直接使用 `cargo run`，它会自行`编译`并`运行`它:

```bash
$ cargo run
   Running `target/hello_world`
Hello, world!
```

### 来源配置

```toml
# `source` 表下，就是存储有关要更换的来源名称
[source]

# 在`source` 表格之下的，可为一定数量的有关来源名称. 示例下面就，定义了一个新源， 叫 `my-awesome-source`，其内容来自本地，`vendor`目录 ，其相对于包含 `.cargo/config` 文件的目录
[source.my-awesome-source]
directory = "vendor"

# Git sources 也指定一个 branch/tag/rev
git = "https://example.com/path/to/repo"
# branch = "master"
# tag = "v1.0.1"
# rev = "313f44e8"

# crates.io 默认源 在"crates-io"名称下，且在这里我们使用 `replace-with` 字段指明 默认源更换成"my-awesome-source"源
[source.crates-io]
replace-with = "my-awesome-source"
```
<!--rehype:className=wrap-text -->

### 编译测试

```bash
# 编译输出二进制文件，放入 `target/debug` 目录
$ cargo build
# 输出二进制文件，放入 `target/release` 目录
$ cargo build --release
$ cargo run      # 编译并运行
```

#### 测试

```bash
$ cargo test     # 运行你的所有测试
# 指定函数过滤器
$ cargo test test_foo # 开头是 test_foo 的函数都会运行，例如(test_foo_bar)
# 指定特定模块中的测试函数(通常可以简写 cargo test foo::bar::tests::test_foo)
$ cargo test --package rustt --lib -- foo::bar::tests::test_foo --exact --nocapture

# 指定特定测试的模块(通常可以简写 cargo test foo::bar::tests)
$ cargo test --package rustt --lib -- foo::bar::tests --nocapture
```
<!--rehype:className=wrap-text-->

### 配置目标
<!--rehype:wrap-class=row-span-2-->

```toml
[package]
# ...
[lib]
# 生成目标与库的名称. 本该默认是包名, 替换所有破折号为 下划线. (Rust `extern crate` 声明会参考该名；因此，该值必须是可用的有效Rust标识符)
name = "foo"
# 该字段，指向 crate 的入口(位置), 路径相对于 `Cargo.toml`.
path = "src/lib.rs"
# 一个给目标启用单元测试 的 标志. 会被 `cargo test`使用.
test = true
# 一个给目标启用文档测试 的 标志. 只与库相关, 不会影响其他部分。会被 `cargo test`使用.
doctest = true
# 一个给目标启用基准 的 标志. 会被 `cargo bench`使用.
bench = true
# 一个给目标启用文档 的 标志. 会被 `cargo doc`使用.
doc = true
# 若该目标为 编译器扩展, 那要把该字段设为 true，以让 Cargo 正确编译和，可用于所有依赖项.
plugin = false
# 若该目标为 "macros 1.1" 程序宏, 那要把该字段设为 true
proc-macro = false
# 若设为 false, `cargo test` 会为 rustc 省略 `--test` 标志, 这阻止它生成测试工具 这在二进制存在，构建管理测试运行器本身的情况下，有用.
harness = true
# 若设置了，那 目标会使用一个与`[package]`配置不同的版本, 也许是，编译一个库 2018年版本或，编译单元测试的2015年版本. 默认情况下所有目标都使用`[package]`中指定的版本进行编译。
edition = '2015'
```
<!--rehype:className=wrap-text-->

### 项目目录

```bash
.
├── Cargo.lock
├── Cargo.toml
├── benches     # 基准目录
│   └── large-input.rs
├── examples    # 示例
│   └── simple.rs
├── src         # 源代码
│   ├── bin
│   │   └── another_executable.rs
│   ├── lib.rs  # 默认库
│   └── main.rs # 入口文件
└── tests       # 集成测试
    └── some-integration-tests.rs
```

### 配置

```toml
# 每个源都有自己的表格，名称即是表名
[source.the-source-name]

# 命令 `the-source-name` 会被 `another-source`取代
replace-with = "another-source"

# 有几种可用的源定义(接下来有所描述)
registry = "https://example.com/path/to/index"
local-registry = "path/to/registry"
directory = "path/to/vendor"
```
<!--rehype:className=wrap-text -->

更换源的配置通过完成 `.cargo/config`，上面是全套可用字段

包相关命令
---

### init/new
<!--rehype:wrap-class=row-span-2-->

创建一个新的 `cargo` 包

```bash
$ cargo init [options] [path]
$ cargo new [options] [path]
```

- `--bin` 创建具有二进制目标 (src/main.rs) 的包(默认行为)
- `--lib` 使用库目标 (src/lib.rs) 创建一个包
- `--edition edition` 指定要使用的 Rust 版本。默认值为 `2021`。可能的值：2015、2018、2021
- `--name name` 设置包名。默认为目录名称
- `--vcs vcs` 为给定的版本控制系统（git、hg、pijul 或fossil）初始化一个新的 VCS 存储库，或者根本不初始化任何版本控制（无）
- `--registry registry` 限制仅发布到该注册表
<!--rehype:className=style-arrow-->

```bash
$ cargo new foo
```

### 安装包
<!--rehype:wrap-class=row-span-2-->

```bash
# 从 crates.io 安装或升级软件包：
$ cargo install ripgrep
# 在当前目录安装或重新安装包：
$ cargo install --path .
# 查看已安装包的列表：
$ cargo install --list
```

---

- `--vers version`
- `--version version` 指定要安装的版本
- `--git url` 用于安装指定 crate 的 Git URL
- `--branch branch` 从 git 安装时要使用的分支
- `--tag tag` 从 git 安装时使用的标记
- `--rev sha` 从 git 安装时使用的特定提交
- `--path path` 要安装的本地 crate 的文件系统路径
- `--list` 列出所有已安装的软件包及其版本
- `-f`, `--force` 强制覆盖现有的 crate 或二进制文件

### 搜索包

```bash
$ cargo search [options] [query...]
```

- `--limit limit` 限制结果数量(默认值：10，最大值：100)
- `--index index` 要使用的注册表索引的 URL
- `--registry registry` 要使用的注册表的名称

```bash
$ cargo search serde
```

### 卸载包

```bash
$ cargo uninstall [options] [spec...]
```

- `-p`, `--package spec...` 要卸载的软件包
- `--bin name...` 仅卸载二进制名称
- `--root dir` 从中卸载软件包的目录

```bash
$ cargo uninstall ripgrep
```

发布命令
---

### 登录

```bash
$ cargo login [options] [token]
```

---

:-|:-
:-|:-
`--registry` | 要使用的注册表的名称

---

:-|:-
:-|:-
`-v`, `--verbose` | 启用更加详细的输出
`-q`, `--quiet` | 不输出Cargo的日志信息
`--color when` | 输出内容的颜色 `auto`, `always`, `never`

### 所有者

```bash
# 列出包的所有者：
$ cargo owner --list foo
# 邀请所有者加入包：
$ cargo owner --add username foo
# 从包中删除所有者：
$ cargo owner --remove username foo
```

---

:-|:-
:-|:-
`--token token` | 身份验证时使用的 API 令牌
`--index index` | 要使用的注册表索引的 URL

### 打包 & 发布公共选项
<!--rehype:wrap-class=row-span-3-->

选择包

- `-p spec...`, `--package spec...` Package 指定包
- `--workspace` Package 工作区中的全体成员
- `--exclude SPEC...` 排除指定包

编译选项

- `--target triple` 为指定架构执行 Package
- `--target-dir directory` 用于存放生成的工件以及中间文件的目录

特性选择

- `--features features` 传递以空格或者逗号分隔的列表，其中给出要启用的特性
- `--all-features` 为给定的包启用全部可用特性
- `--no-default-features` 不启用给定包的default特性

清单选项

- `--manifest-path path` 用于指定 Cargo.toml 文件的路径
- `--frozen`, `--locked` 这两个选项用于保证Cargo.lock文件是最新的
- `--offline` 禁止Cargo访问网络

混杂选项

- `-j N`, `--jobs N` 要并行运行的作业数量

### 打包

将本地包打包为可分发的压缩文件

```bash
$ cargo package [options]
```

---

- `-l`, `--list` 输出包中包含的文件(不实际进行打包)。
- `--no-verify` 构建包时不进行校验。
- `--no-metadata` 忽略 缺少可读的元信息(如描述信息或采用的授权协议) 时产生的警告。
- `--allow-dirty` 允许打包 在版本控制系统中仍有未提交内容 的包。

### 发布
<!--rehype:wrap-class=row-span-2-->

```bash
$ cargo publish [options]
```

发布选项

- `--dry-run` 在不上传的情况下执行所有检查
- `--token token` 身份验证时使用的 API 令牌
- `--no-verify` 不要通过构建内容来验证内容
- `--allow-dirty` 允许打包具有未提交的 VCS 更改的工作目录
- `--index index` 要使用的注册表索引的 URL
- `--registry registry` 要发布到的注册表的名称

打包选择

- `-p spec`, `--package spec` 要发布的包

### yank

从服务器的索引中删除以前发布的 crate 版本

```bash
$ cargo yank --vers 1.0.7 foo
```

- `--vers version` 要 yank 或 un-yank 的版本
- `--undo` 撤消 yank，将版本放回索引中
- `--token token` 身份验证时使用的 API 令牌
- `--index index` 要使用的注册表索引的 URL
- `--registry registry` 要使用的注册表名称

另见
---

- [The Cargo Book](https://doc.rust-lang.org/stable/cargo/) _(doc.rust-lang.org)_
- [Cargo 手册 中文版](https://www.rustwiki.org.cn/zh-CN/cargo/index.html) _(rustwiki.org.cn)_
