Justfile 备忘清单
===

[![Repo Dependents](https://badgen.net/github/dependents-repo/casey/just)](https://github.com/casey/just/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/casey/just)

[`just`](https://github.com/casey/just) 为您提供一种保存和运行项目特有命令的便捷方式

入门
----

### 简单的 justfile

```bash
#!/usr/bin/env just --justfile

# hello 是配方(recipe)的名字
hello:
  echo "Hello World!"
```

### 带参数的配方
<!--rehype:wrap-class=row-span-2-->

```bash
filter PATTERN:
   echo {{PATTERN}}

# 带有默认值的 param
email address='master@example.com':
   echo {{address}}

# 带表达式的参数
test triple=(arch() + "-unknown-unknown"):
  ./test {{triple}}

# 变量参数：“+”接受一个或多个值
backup +FILES:
  scp {{FILES}} me@example.com

# 带*的可变参数：零个或多个值
commit MESSAGE *FLAGS:
  git commit {{FLAGS}} -m "{{MESSAGE}}"
```

### 变量和子变量

```bash
version := "0.2.7"
tardir  := "awesomesauce-" + version
tarball := tardir + ".tar.gz"

test:
   echo {{version}}

# 仅从命令行设置/覆盖变量
$ just --set version 1.1.0
```

### 默认配置

```bash
default: lint build test
# 显示帮助信息的默认配方
default:
  @just --list
# 如果没有默认配方，则默认第一个配方
```

### 命令的环境变量

```bash
export RUST_BACKTRACE := "1"

test:
    # 如果堆栈崩溃，将打印堆栈跟踪
    cargo test
```

### backtick-从评估中捕获输出
<!--rehype:wrap-class=row-span-2-->

```bash
JAVA_HOME := `jbang jdk home 11`
# Backtick 代码块
stuff := \```
   foo="hello"
   echo $foo "world"
\```

done BRANCH=`git rev-parse --abbrev-ref HEAD`:
  git checkout master

sloc:
    @echo "`wc -l *.c` lines of code"

# Backtick 在任何地方工作：字符串/变量/参数
```

注意： 上面示例中 <code>\\`</code> 没有转义过来

### 别名

```bash
alias t := test
alias c := check
```

### 带有命令 env 变量配置

```bash
# recipe 参数作为$符号的Env变量
hello $name:
   echo $name
```

### 设置

```bash
set shell := ["zsh", "-cu"] 

set dotenv-load := true
serv: 
   echo "$DATABASE_ADDRESS from .env"

set positional-arguments := true
foo:
  echo $0
  echo $1
```

### 配置依赖性-之前、之后和周围

```bash
# 执行序列：A-> B-> C-> D
b: a && c d
# 执行配方(recipe)“A”
b:
  echo 'B start!'
  just a
  echo 'B end!'
# 通过表达式依赖参数
default: (build "main")

build target:
  @echo 'Building {{target}}...'
```

### Just 函数

```shell
hello name:
   echo {{os()}}
   echo {{uppercase(name)}}

# 函数类别
* 系统信息
* 系统信息
* Justfile 和 Justfile目录
* 字符串操纵
* 路径操纵

# String contact:  (key + ":" + value)
```

### 字符串-用双引号转义

```bash
tring-with-tab := "\t"
string-with-newline := "\n"
escapes := '\t\n\r\"\\'

# 该字符串将评估为`foo\nbar\n`
x := '''
  foo
  bar
'''
```

### 命令注释：quiet(@)、suppre­ss(-)、invert(!)

```bash
hello:
  @ echo "command will not be echoed"
  - echo "ignore none-zero exit status and continue"

@hello2:
  echo "command will not be echoed"

# 反转命令退出状态！- shell 功能
hello3:
  # 如果命令成功（退出状态为0），请仅退出
  ! git branch | grep '* master'
```

### 条件表达式：if、loop 和 while
<!--rehype:wrap-class=row-span-2-->

```shell
# 正则表达匹配
fo := if "hi" =~ 'h.+' { "match" } else { "mismatch" }

test:
   if true; then echo 'True!'; fi
   for file in `ls .`; do echo $file; done
   while `server-is-dead`; do ping -c 1 server; done

foo bar:
  echo {{ if bar == "bar" { "hello" } else { "bye" } }}
```

### Just 命令行
<!--rehype:wrap-class=row-span-2-->

```bash
# 运行配方(recipe)
$ just hello param1

# 按字母顺序列出配方(recipe)
$ just --list
$ just --summary

# 显示有关配方(recipe)的完整信息
just --show test

# 选择以交互方式运行的配方(recipe)
$ just --choose

# shell 完成
just --comp­letions zsh
```

### 其他语言的配置

```bash
bash-test:
    #!/usr/bin/env bash
    set -euxo pipefail
    hello='Yo'
    echo "$hello from bash!"
```

### 私人配置 - 名称以开头 _

```bash
test: _test-helper
  ./bin/test

# ommited from 'just --list'
_test-helper:
  ./bin/super-secret-test-helper-stuff
```

### 注意

```bash
# 每个命令行都由一个新的 shell 执行
# 如果一个命令行执行失败，just会退出
# 后面的命令行不会执行
change-working-dir:
   cd bar && pwd
   # 多行构造 - 用斜线转义换行符
   if true; then \
        echo 'True!'; \
   fi

# justfile 不区分大小写：Justfile、JUSTFILE 等
# justfile 可以被隐藏：'.justfile'
# 从子目录调用配方：`~/app1/target>$ just build`
```

### 作为 shell 别名的配置

```bash
for recipe in `just -f ~/.justfile --summary`; do
  alias $recipe="just -f ~/.justfile -d. $recipe"
done
```

### IDE 集成

- VS Code: <https:­//m­ark­etp­lac­e.v­isu­als­tud­io.c­om­/it­ems­?it­emN­ame­=sk­ell­ock.just>
- JetBrains: <https:­//p­lug­ins.je­tbr­ain­s.c­om/­plu­gin­/18­658­-just>
