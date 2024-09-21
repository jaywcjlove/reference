Ruby 备忘清单
===

入门
---

### 安装
<!--rehype:wrap-class=row-span-4-->

```bash
# Debian, Ubuntu
$ sudo apt-get install ruby-full
# Windows
$ winget install RubyInstallerTeam.Ruby 
$ brew install ruby # macOS
$ docker run -it --rm ruby:latest # Docker
$ docker run -it --rm ruby:2.7
```

使用包管理器安装 [rbenv](https://github.com/rbenv/rbenv#readme)

```bash
$ brew install rbenv ruby-build # macOS
# Debian、ubuntu 和其他衍生产品
$ sudo apt install rbenv
```

使用 [rbenv](https://github.com/rbenv/rbenv#readme) 安装 ruby

```bash
# 列出最新的稳定版本
$ rbenv install -l
# 列出所有本地版本
$ rbenv install -L
# 安装 Ruby 版本
$ rbenv install 3.1.2
$ rbenv global 3.1.2 # 为这台机器设置默认Ruby版本
# 或者
$ rbenv local 3.1.2 # 设置此目录的 Ruby 版本
$ rbenv local --unset
$ rbenv version # 显示当前活动的 Ruby 版本
=> 1.9.3-p327 (set by /Users/sam/.rbenv/version)
```

使用 [RVM](https://www.ruby-lang.org/en/documentation/installation/#rvm) 安装 ruby

```bash
$ curl -sSL https://get.rvm.io | bash -s stable
$ rvm list          # Ruby 版本列表
$ rvm install 3.0.1 # 安装 3.0.1
$ rvm use 3.0.1     # 使用 3.0.1
```

如何安装 ruby gem 管理器, [bundler](https://bundler.io/) gem

```bash
# 访问 bash 以执行以下命令
$ docker run -it --rm ruby:latest bash
$ gem install bundler
$ bundle -v
$ gem update bundler
$ gem uninstall bundler
```

### 什么是 Gemfile 和 Gemfile.lock
<!--rehype:wrap-class=row-span-2-->

[Gemfile](https://bundler.io/v2.3/man/gemfile.5.html) 是 Bundler(也是 gem)的配置文件，其中包含项目的 gem 列表(依赖项)

```ruby
# 在项目根目录的 Gemfile 中指定 gem
ruby '2.5.6'

source 'https://rubygems.org'
gem 'nokogiri'
gem 'rack', '~>1.1'
gem 'rspec', :require => 'spec'
```

安装 Gemfile 中的所有 gem

```bash
$ bundle install
```

解决开发用 mac，生产用 linux 出现的 Gemfile.lock 不一致问题

```bash
bundle lock --add-platform x86_64-linux
```

### 安装特定 ruby gem 的特定版本

```bash
$ gem install bundler -v 1.17
$ gem install minitest -v 5.8.4
```

### 使用 Bundler 更新 gem

```bash
# 使用 Bundler 更新单个 gem
$ bundle update nokogiri
# 使用 Bundler 更新 Gemfile 中的每个 gem
$ bundle update
```

### 保留字
<!--rehype:wrap-class=row-span-5-->

保留字 | 描述
:-|-
| `__ENCODING__` | 当前文件的脚本编码
| `__LINE__`     | 当前文件中此关键字的行号
| `__FILE__`     | 当前文件的路径
| `BEGIN`        | 包含在 `{ }` 中的代码在程序运行之前运行
| `END`          | 包含在 `{ }` 中以在程序结束时运行
| `alias`        | 为现有方法、运算符、全局变量创建别名
| `and`          | 逻辑与运算符
| `begin`        | 开始一段代码
| `break`        | 终止循环
| `case`         | 将表达式与匹配的 `when` 子句进行比较，其中 <br/> 以 `end` 结束
| `class`        | 定义一个类
| `def`          | 定义函数/方法
| `defined?`     | 检查某个变量、函数是否存在
| `do`           | 开始一个代码块并执行块中的代码，以<br/> **end关键字**结束
| `else`         | 如果先前的条件不成立，则执行以下代码
| `elsif`        | if 表达式的替代条件
| `end`          | 用于结束以 `begin`、`class`、`def`、`do`、`if` 等关键字开头的代码块
| `ensure`       | 总是在块终止时执行
| `false`        | 逻辑布尔假值
| `for`          | 开始一个 `for` 循环
| `if`           | 如果 `if` 的条件语句为 `true`，则执行代码块
| `in`           | 与 `for` 循环一起使用
| `module`       | 定义一个模块
| `next`         | 跳转到循环条件评估之前的点
| `nil`          | 为空或无效或始终为假
| `not`          | 逻辑否定运算符
| `or`           | 逻辑或运算符
| `redo`         | 条件循环后跳转
| `rescue`       | 在引发异常后评估表达式
| `retry`        | • 在救援之外调用时，重复方法调用<br/>• 在救援内部调用时，跳转到块顶部
| `return`       | 从方法或代码块返回值
| `self`         | 当前对象
| `super`        | 调用超类中的同名方法
| `then`         | 与 `if`、`unless`、`when`、`case`、`rescue` 一起使用的分隔符
| `true`         | 逻辑布尔真
| `undef`        | 使当前类中的方法/函数未定义
| `until`        | 在条件语句为假时执行代码块
| `when`         | 在 case 语句下开始一个子句
| `while`        | 执行代码块，直到条件语句变为假
| `yield`        | 执行传递给方法的代码块

### 注释

```ruby
# 单行注释
=begin
多行
注释
=end
=begin 注释第 1 行 =end
puts "Hello world!"  # 代码的内联注释
```

### 运算符
<!--rehype:wrap-class=row-span-7-->

#### 逻辑运算符

- `and`
- `or`
- `not`
- `&&`
- `||`
- `!`
<!--rehype:className=cols-3 style-none-->

#### 位运算符

- `&`
- `|`
- `^`
- `~`
- `<<`
- `>>`
<!--rehype:className=cols-3 style-none-->

#### 算术运算符

- `+`
- `-`
- `*`
- `/`
- `%`
- `**`
<!--rehype:className=cols-3 style-none-->

#### 比较运算符

- `==`
- `!=`
- `>`
- `<`
- `>=`
- `<=`
- `<=>`
- `===`
- `eql?`
- `equal?`
<!--rehype:className=cols-3 style-none-->

#### 运算符示例

```bash
# 添加
1 + 1   #=> 2
# 减法
2 - 1   #=> 1
# 乘法
2 * 2   #=> 4
# 分配
10 / 5  #=> 2
17 / 5    #=> 3, not 3.4
17 / 5.0  #=> 3.4
# 指数
2 ** 2  #=> 4
3 ** 4  #=> 81
# 模数(求除法的余数)
8 % 2   #=> 0  (8 / 2 = 4; 没有剩余)
10 % 4  #=> 2  (10 / 4 = 2 余数为 2)
a = 10
b = 20
a == b #=> false
a != b #=> true
a > b #=> false
a < b #=> true
a >= b #=> false
a <= b #=> true

# 比较运算符
a <=> b #=> -1
c = 20
c <=> b #=> 0
c <=> a  #=> 1
# 用于测试 case 语句的 when 子句中的相等性
(1...10) === 5 #=> true
# 如果接收者和参数具有相同的类型和相等的值，则为真
1.eql?(1.0) #=> false
c = a + b  #=> 30
c += a #=> 40
c -= a #=> 30
c *= a #=> 300
c /= a #=> 30
c %= a #=> 3
c **= a #=> 59049

# Ruby 并行赋值
a = 10
b = 20
c = 30
a, b, c = 10, 20, 30
# Ruby 位运算符
a = 60
b = 13
# & 如果两个操作数中都存在，则二进制 AND 运算符将位复制到结果中。
a & b #=> 12
# | 如果二进制或运算符存在于任一操作数中，则复制一个位。
a | b #=> 61
# ^ 二元异或操作符如果在一个操作数中设置，则复制该位，但不能同时在两个操作数中设置。
a ^ b #=> 49
# ~ 二进制补码运算符是一元的，具有“翻转”位的效果。
~a
# << 二进制左移运算符。 左操作数的值被移动
# 左操作数指定的位数。
a << 2
# >> 二进制右移运算符。 左操作数的值被移动
# 右操作数指定的位数。
a >> 2

# Ruby 逻辑运算符
a and b #=> true.
a or b #=> true.
a && b #=> true.
(a || b) #=> true.
!(a && b) #=> false.
not(a && b) #=> false.
# Ruby 三元运算符
# ? :
# 如果条件为真？ 然后值 X ：否则值 Y
a == 10 ? puts 'Right' : puts 'Wrong'
# Ruby 范围运算符
# .. 创建从起点到终点的范围(含)
1..10 #=> 创建从 1 到 10 的范围(包括 1 到 10)
# ... 创建一个从起点到终点的范围，不包括在内
1...10 #=> 创建一个从 1 到 10 的独占范围
```

### 运算符优先级表
<!--rehype:wrap-class=row-span-3-->

- `!`, `~`, `unary +`
- `**`
- `unary -`
- `*`, `/`, `%`
- `+`, `-`
- `<<`, `>>`
- `&`
- `^`
- `>`, `>=`, `<`, `<=`
- `<=>`, `==`, `===`, `!=`, `=~`, `!~`
- `&&`
- `?`, `:`
- `modifier-rescue`
- `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- `defined`
- `not`
- `or`, `and`
- `modifier-if`, `modifier-unless`, `modifier-while`, `modifier-until`
- `{ }` 块
- `do ... end` 块
<!--rehype:className=style-timeline-->

### 变量和范围
<!--rehype:wrap-class=col-span-2-->

名字 | 范围 | 示例 | 说明
:---- | ---- | ---- | -----
`[a-z]` 或 `_` | 本地的 | `count = 10` 或 `_count = 10` | 必须初始化局部变量
`@`           | 实例变量 | `@id = []`                   | 实例变量在初始化之前具有“nil”值
`@@`          | 类变量 | `@@name = []`                | 必须初始化类变量
`$`           | 全局变量 | `$version = "0.8.9"`         | 全局变量在初始化之前具有“nil”值
`[A-Z]`       | 持续的 | `PI = 3.14`                  | 常量变量必须初始化，您可以更改常量，但您会收到警告

有五种不同类型的变量。第一个字符确定范围

### 局部变量

```ruby
current_weather = "rainy"
_weather = "sunny"
```

必须以下划线或小写字母开头

### 实例变量

```ruby
# 实例类变量
@current_weather = "rainy"
# 全局变量
$current_weather = "rainy"
# 常量变量
WEATHER = "rainy".freeze
```

### 伪变量

名字 | 说明
:-- | --
`self`     | 当前方法的接收者对象
`true`     | `TrueClass` 的实例
`false`    | `FalseClass` 的实例
`nil`      | `NilClass` 的实例
`__FILE__` | 当前源文件名
`__LINE__` | 当前源文件的当前行号

### 选项变量

名字 | 说明
:-- | --
`$-0`  | `$/` 的别名
`$-a`  | 如果设置了选项 `-a`，则为真。只读变量
`$-d`  | `$DEBUG` 的别名
`$-F`  | `$;` 的别名
`$-i`  | 在就地编辑模式下，此变量保存扩展，否则为零<br/>可以指定启用（或禁用）就地编辑模式
`$-I`  | `$:` 的别名
`$-l`  | 如果选项 `-lis` 设置为真。只读变量
`$-p`  | 如果选项 `-pi` 设置为真。只读变量
`$-v`  | `$VERBOSE` 的别名

### 预定义变量
<!--rehype:wrap-class=col-span-3-->

名字 | 说明
:-- | --
`$!`         | 异常信息消息。raise 设置此变量
`$@`         | 最后一个异常的回溯，它是 String 的数组，指示调用方法的位置。格式中的元素如：“filename:line”或“filename:line:in \`methodname'”(助记符：发生异常的地方)
`$&`         | 与此范围内最后一次成功的模式匹配匹配的字符串，如果最后一次模式匹配失败，则返回 nil。 (助记符：在某些编辑器中类似于 &)这个变量是只读的
<code>$\`</code>         | 当前范围内最后一次成功的模式匹配所匹配的任何内容之前的字符串，如果最后一次模式匹配失败，则为 nil。 (助记符：\` 通常在带引号的字符串之前)此变量是只读的
`$'`         | 当前范围内最后一次成功的模式匹配所匹配的字符串后面的字符串，如果最后一次模式匹配失败，则为 nil。 (助记符：' 通常跟在带引号的字符串之后)
`$+`         | 最后一个成功的搜索模式匹配的最后一个括号，如果最后一个模式匹配失败，则为 nil。如果您不知道一组替代模式中的哪一个匹配，这很有用。 (助记：积极向上)
`$1`, `$2...`  | 包含上一次成功匹配的模式中相应括号集中的子模式，不计算已经退出的嵌套块中匹配的模式，或者如果最后一次模式匹配失败，则为 nil。 (助记符：如 \digit)这些变量都是只读的
`$~`         | 当前范围内最后一个匹配的信息。设置此变量会影响匹配变量，如 `$&、$+、$1、$2..` 等。第 n 个子表达式可以通过 `$~[nth]` 检索。 (助记符：`~` 用于匹配)这个变量是局部作用域的
`$=`         | 不区分大小写的标志，默认为 nil。 (助记符：= 用于比较)
`$/`         | 输入记录分隔符，默认为换行符。像 awk 的 RS 变量一样工作。如果设置为 nil，则将立即读取整个文件。 (助记符：/ 用于在引用诗歌时划定行界)
`$\`         | print 和 IO#write 的输出记录分隔符。默认值为无。 (助记符：它就像 /，但它是你从 Ruby 中“返回”的东西)
`$,`         | 打印的输出字段分隔符。此外，它是 Array#join 的默认分隔符。 (助记符：当您的打印语句中有 , 时打印的内容)
`$;`         | String#split 的默认分隔符。
`$.`         | 读取的最后一个文件的当前输入行号。
`$<`         | 由命令行参数或标准输入给出的文件的虚拟连接文件(如果没有提供参数文件)。 `$<.file` 返回当前文件名。 (助记符：`$<` 是一个 shell 输入源)
`$>`         | `print` 的默认输出，`printf`。 `$stdout` 默认情况下。 (助记符：`$>` 用于 shell 输出)
`$_`        | 通过gets或readline输入String的最后一行。如果gets/readline 遇到EOF，它被设置为nil。这个变量是局部作用域的。 (助记符：部分与 Perl 相同)
`$0`         | 包含包含正在执行的 Ruby 脚本的文件的名称。在某些操作系统上，分配给 $0 会修改 ps(1) 程序看到的参数区域。作为一种指示当前程序状态的方式，这比隐藏您正在运行的程序更有用。 (助记符：与 sh 和 ksh 相同)
`$*`        | 为脚本提供的命令行参数。 Ruby 解释器的选项已被删除。 (助记符：与 sh 和 ksh 相同)
`$$`         | 运行此脚本的 Ruby 的进程号。(助记符：与贝壳相同)
`$?`         | 最后执行的子进程的状态。
`$:`         | 该数组包含通过 load 或 require 查找 Ruby 脚本和二进制模块的位置列表。 它最初由任何 `-I` 命令行开关的参数组成，然后是默认的 Ruby 库，probabl `"/usr/local/lib/ruby"`，然后是 `"."`，表示当前目录 . (助记符：冒号是 PATH 环境变量的分隔符)
`$"`         | 该数组包含由 require 加载的模块名称。 用于防止 require 两次加载模块。助记符：防止文件被双引号(加载)
`$DEBUG`     | `-d` 开关的状态。
`$FILENAME`  | 与`$<.filename` 相同
`$LOAD_PATH` | `$:` 的别名
`$stdin`     | 当前的标准输入
`$stdout`    | 当前的标准输出
`$stderr`    | 当前标准错误输出
`$VERBOSE`   | 详细标志，由 `-v` 开关设置到 Ruby 解释器

### 预定义的全局常量
<!--rehype:wrap-class=col-span-2-->

名字 | 说明
:-- | --
`TRUE`              | 典型的真值。在 Ruby 中，所有非 `false` 值（除了 `nil` 和 `false` 之外的所有值）都是 `true`
`FALSE`             | 虚假本身
`NIL`               | 零本身
`STDIN`             | 标准输入。`$stdin` 默认值
`STDOUT`            | 标准输出。`$stdout` 默认值
`STDERR`            | 标准错误输出。`$stderr` 默认值
`ENV`               | 类哈希对象包含当前环境变量。 在 ENV 中设置值会更改子进程的环境
`ARGF`              | `$<` 的别名
`ARGV`              | `$*` 的别名
`DATA`              | 脚本的文件对象，就在 **END** 之后。 除非未从文件中读取脚本，否则未定义
`VERSION`           | Ruby 版本字符串
`RUBY_RELEASE_DATE` | 发布日期字符串
`RUBY_PLATFORM`     | 平台标识符

### 检查变量的范围

```ruby
defined? count
"local-variable"
defined? @id
"instance-variable"
defined? @@name
"class variable"
defined? $version
"global-variable"
defined? PI
"constant"
```

### 数据类型
<!--rehype:wrap-class=col-span-2 row-span-3-->

类型    | 示例 | Class | 文档
:-- | -- | -- | --
`Integer` | a = 17                       | a.class > Integer <br>a.class.superclass > Numeric | [#][2]
`Float`   | a = 87.23                    | a.class > Float <br>a.class.superclass > Numeric   | [#][3]
`String`  | a = "Hello universe"         | a.class > String                                   | [#][4]
`Array`   | a = [12, 34]                 | a.class > Array                                    | [#][5]
`Hash`    | a = {type: "tea", count: 10} | a.class > Hash                                     | [#][6]
`Boolean` | a = false<br>a = true        | a.class > FalseClass <br>a.class > TrueClass       | [TrueClass][7] [FalseClass][8]
`Symbol`  | a = :status                  | a.class > Symbol                                   | [#][9]
`Range`   | a = 1..3                     | a.class > Range                                    | [#][10]
`Nil`     | a = nil                      | a.class > NilClass                                 | [#][11]
<!--rehype:className=show-header-->

[进一步阅读](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-ruby)

### 检查数据类型

```ruby
# 两者都是同义词
a = 37
a.kind_of? Integer
# true
a.is_a? Integer
# true
```

### Symbol

```ruby
week_days = {sunday: 11, monday: 222}
```

### 整数有用的方法

```ruby
2.even?
# true
3.even?
# false
```

### 范围

`..` 用于创建包含范围

```ruby
range = 1..10
range.to_a
# 输出 => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

`...` 用于创建专属范围

```ruby
range = 1...10
range.to_a
# 输出 => [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

一些有用的方法

Method name | Output
:----------- | -----
`cover?`      | `(1..5).cover?(5)` => `true`
`end`         | `('a'..'z').end` => `"z"`
`first`       | `(1..5).first` => `1`
`first(3)`    | `('A'..'Z').first(2)` => `["A", "B"]`
`eql?`        | `((0..2).eql?(0..5)` => `false`

### 在 Range 中使用 step

```ruby
(1..20).step(2) { |number| puts "#{number}"}
# 输出
# 1
# 3
# 5
# 7
# 9
# 11
# 13
# 15
# 17
# 19
```

条件结构
---

### if 修饰符

```ruby
num = 2
puts 'two' if num == 2 
```

如果条件为真，则执行代码

### if elsif else 语句

```ruby
temp = 19
if temp >= 25
  puts "hot"
elsif temp < 25 && temp >= 18
  puts "normal"
else
  puts "cold"
end
# 输出 => normal
```

### 除非语句

```ruby
# 除非与 if 相反，当语句为假时进行评估
name = "rob"
# if name != "bob"
unless name == "bob"
  puts "hello stranger"
else
  puts "hello bob"
end
# 输出 => hello stranger
num = 6
puts 'not two' unless num == 2
# 输出 => not two
```

### case 陈述
<!--rehype:wrap-class=row-span-2-->

```ruby
# case 返回最后执行的表达式的值
case input
# 检查一个整数，19
when 19
  puts "It's 19"
  # 检查浮点数，33.3
when 33.3
  puts "It's 33.3"
  # 检查一个确切的字符串，“Zaman”
when "Zaman"
  puts "Hi Zaman"
when 10
  puts "It's 10"
  # 检查范围
when 7..11
  puts "It's between 7 and 11"
  # 检查多个值，“咖啡”
when "tea", "coffee"
  puts "Happy days"
  # 检查正则表达式“aA6”
when /^a[A-Z]+[0-6]+$/
  puts "It's a valid match"
  # 通过与 String 类“任何字符串”
  # 进行比较来检查任何字符串
when String
  puts "It's a String"
end
```

### case 简短的语法

```ruby
case input
  when 19 then puts "It's 19"
end
```

### case 可选的失败

```ruby
case input
  when 19 then puts "It's 19"
else
  puts "It's not 19"
end
```

### case 获取返回值

```ruby
marks = 86
result = case marks
        when 0..49 then "Fail"
        when 50..64 then "Pass"
        when 65..74 then "Credit"
        when 75..84 then "Distinction"
        when 85..100 then "High Distinction"
        else "Invalid marks"
        end

puts result
# High Distinction
```

字符串
---

### 字符串插值

```ruby
name = "World"
puts "Hello #{name}"
puts "The total is #{1+1}"
# "the total is 2"
```

字符串插值允许您将字符串组合在一起

### 提取子字符串

```ruby
string = "abc123"
string[0,3]
# "abc"
string[3,3]
# "123"
string[0..-2]
# "abc12"
#remove or replace the substring
string[0..2] = ""
puts string
# "123"
```

子字符串是字符串的一小部分，如果你只想要那个特定的部分，它会很有用，比如开头、中间或结尾

### 将字符串转换为小写或大写

```ruby
"HELLO World".downcase  # "hello world"
"hello worlD".upcase    # "HELLO WORLD"
"hEllo wOrlD".capitalize # "Hello world"
"hEllo WOrlD".swapcase  # "HeLLO woRLd"
```

### 有用的方法
<!--rehype:wrap-class=col-span-3-->

函数名称 | Output | Note
:--- | ----- | ------
length or size                   | `"HELLO World".length` => `11` <br> `"HELLO World".size` => `11`                                    | 返回字符串的长度
reverse                          | `"hello worlD".reverse` => `"Dlrow olleh"`                                                            | 返回反转的字符串
include? other_str               | `"hEllo wOrlD".include? "w"` => `true`                                                                | 如果字符串或字符存在则返回 true，否则返回 false
gsub(pattern, replacement)       | `"hEllo wOrlD".gsub(" ", "_")` => `"hEllo_wOrlD"`                                                     | gsub 或全局替换用提供的字符串替换一个或多个字符串
gsub(pattern, hash)              | `"organization".gsub("z", 'z' => 's')` => `"organisation"`                                            | gsub 或全局替换用提供的哈希替换一个或多个字符串
gsub(pattern) { \|match\| block} | `"Price of the phone is 1000 AUD".gsub(/\d+/) { \|s\| '$'+s }` <br> `"Price of the phone is $1000 AUD"` | gsub 或全局替换用提供的块替换一个或多个字符串
strip                            | `" hEllo WOrlD ".strip` <br> `"hEllo WOrlD"` | 它将删除（修剪）以下任何前导和尾随字符：null（“\x00”）、水平制表符（“\t”）、换行符（\n）、垂直制表符（“\v”）、换页符(f)、回车(\r)、空格(" ")
prepend                          | `a = "world" <br> a.prepend("hello ")` <br> `"hello world"`                                             | 在另一个字符串之前添加字符串
insert                           | `a = "hello" <br> a.insert(a.length, " world")` <br> `"hello world"`                                    | 在特定位置插入字符串
start_with?                      | `string = "ruby programming"` <br> `string.start_with? "ruby"` <br> `true`                                | 检查字符串是否以特定前缀开头
end_with?                        | `string = "ruby programming"` <br> `string.end_with? "ruby"` <br> `false`                                 | 检查字符串是否以特定前缀结尾
delete_suffix                    | `string = "sausage is expensive"` <br> `string.delete_suffix(" is expensive")` <br> `"sausage"`           | 从字符串中删除后缀
delete_prefix                    | `string = "sausage is expensive"` <br> `string.delete_prefix("sausage")` <br> `" is expensive"`           | 从字符串中删除前缀
split                            | `string = "a b c d" <br> string.split` <br> `["a", "b", "c", "d"]`                                      | 将字符串转换为字符数组
join                             | `arr = ['a', 'b', 'c'] <br> arr.join`  => `"abc"`                                                      | 将数组转换为字符串
to_i                             | `a = "49" <br> a.to_i` => `49`                               | 将字符串转换为整数
chop                             | `"abcd?".chop("?")` => `"abcd"`                              | 从字符串中删除最后一个字符
count                            | `str = "aaab" <br> str.count("a")` <br> `3`                  | 计算字符串中的字符
to_f                             | `a = "49"` <br> `a.to_f` <br> `49.0`                         | 将字符串转换为浮点数
to_sym                           | `a = "key"` <br> `a.to_sym` <br> `:key`                      | 将字符串转换为符号
match                            | `"abcd?".match(/ab/)` => `#<MatchData "ab">`                 | 将模式转换为正则表达式并在字符串上调用其匹配方法
empty?                           | `"hello".empty?` => `false`                                  | 如果字符串的长度为零，则返回 true
squeeze                          | `"Booook".squeeze` => `"Bok"`                                | 返回字符串的副本，其中相同字符的运行被单个字符替换
\*                               | `puts "Ruby " * 4` => `Ruby Ruby Ruby Ruby`                  | 返回多个 self 副本的串联
\+                                | `"sammy " + "shark"` => `"sammyshark"`                      | 返回 self 和给定的其他字符串的连接
eql?                             | `s = 'foo'` => `true` <br> `s.eql?('foo')` => `true`         | 如果对象具有相同的长度和内容，则返回 true；作为自己；否则为假
\+                                | `"sammy " + "shark"` => `"sammyshark"`                      | 返回 self 和给定的其他字符串的连接
\+                                | `"sammy " + "shark"` => `"sammyshark"`                      | 返回 self 和给定的其他字符串的连接

方法
---

### 声明一个方法
<!--rehype:wrap-class=row-span-2-->

```ruby
def method_name(parameter1, parameter2)
    puts "#{parameter1} #{parameter2}"
    parameter1 + parameter2
end
```

---

```ruby
res = method_name(20, 10)
# 输出 => 30
def method_name(parameter1, parameter2)
    puts "#{parameter1} #{parameter2}"
    return parameter1 + parameter2
end
# 输出 => 30
```

### 调用方法

```ruby
res = method_name(parameter1, parameter2)
# 可以调用不带括号的方法
res = method_name parameter1, parameter2
```

### 类方法
<!--rehype:wrap-class=row-span-4-->

类方法是类级别的方法。 有多种定义类方法的方法

```ruby
class Mobile
    def self.ring
        "ring ring ring..."
    end
end

Mobile.ring
```

---

```ruby
class Mobile
    def Mobile.ring
        "ring ring ring..."
    end
end
Mobile.ring
```

---

```ruby
class Mobile
    class << self
    def ring
        "ring ring ring..."
       end
    end
end
Mobile.ring
```

类方法是类对象的实例方法。 当创建一个新类时，“Class”类型的对象被初始化并分配给一个全局常量（在本例中为 Mobile）

```ruby
Mobile = Class.new do
    def self.ring
        "ring ring ring..."
    end
end
Mobile.ring
```

```ruby
Mobile = Class.new
class << Mobile
    def ring
        "ring ring ring..."
    end
end
Mobile.ring
```

### 使用另一个参数作为默认值

```ruby
def method_name(num1, num2 = num1)
    return num1 + num2
end
res = method_name(10)
# 输出 => 20
```

### 为方法参数定义默认值

```ruby
def method_name(parameter1, parameter2, type = "ADD")
    puts "#{parameter1} #{parameter2}"
    return parameter1 + parameter2 if type == "ADD"
    return parameter1 - parameter2 if type == "SUB"
end
res = method_name(20, 10)
# 输出 => 30
```

### 将可变长度参数传递给方法参数

```ruby
def method_name(type, *values)
    return values.reduce(:+) if type == "ADD"
    return values.reduce(:-) if type == "SUB"
end
numbers = [2, 2, 2, 3, 3, 3]
res = method_name("ADD", *numbers)
# 输出 => 15
res = method_name("SUB", *numbers)
# 输出 => -11
# 或者您可以提供这样的值
res = method_name("ADD", 2, 2, 2, 3, 3, 3)
# 输出 => 15
```

### 修改对象

```ruby
a = ["Drama", "Mystery", "Crime",
"Sci-fi", "Disaster", "Thriller"]
a.sort
puts a
# 我们没有修改对象
# Drama
# Mystery
# Crime
# Sci-fi
# Disaster
# Thriller
a.sort!
puts a
# 修改对象
# Crime
# Disaster
# Drama
# Mystery
# Sci-fi
# Thriller
```

当您要修改对象时，在方法之后使用 `!`

### 布尔方法

在 ruby 中，以问号 (?) 结尾的方法称为布尔方法，它返回 true 或 false

```ruby
"some text".nil?
# false
nil.nil?
# true
```

您可以拥有自己的布尔方法

```ruby
def is_vowel?(char)
    ['a','e','i','o','u'].include? char
end
is_vowel? 'a'
# true
is_vowel? 'b'
# false
```

Blocks (块)
---

### 块示例

```ruby
# return value
def give_me_data
    data = yield
    puts "data = #{data}"
end
give_me_data { "Big data" }
# 输出 => data = Big data
```

`do` 和 `end`（用于多行）或花括号 `{` 和 `}`（用于单行）之间的代码称为块，它们可以在两个管道之间定义多个参数 `(|arg1, arg2|)`

### 单行块

```ruby
salary = [399, 234, 566, 533, 233]
salary.each { |s| puts s }
# puts s = block body
# |s| = block arugments
```

### 多行块

```ruby
salary.each do |s|
    a = 10
    res = a * s
    puts res
end
# 块体
# a = 10
# res = a * s
# puts res
# 块参数
# |s|
```

块可以作为方法参数传递，也可以与方法调用相关联。 块返回最后评估的语句

### 隐式传递一个块

```ruby
def give_me_data
    puts "I am inside give_me_data method"
    yield
    puts "I am back in give_me_data method"
end

give_me_data { puts "Big data" }

# 输出
# I am inside give_me_data method
# Big data
# I am back in give_me_data method
```

### 多次调用

```ruby
def give_me_data
    yield
    yield
    yield
end

give_me_data { puts "Big data" }

# 输出
# Big data
# Big data
# Big data
```

### 使用块参数调用

```ruby
def give_me_data
    yield 10
    yield 100
    yield 30
end

give_me_data { |data| puts "Big data #{data} TB" }

# 输出
# Big data 10 TB
# Big data 100 TB
# Big data 30 TB
```

### 使用多个块参数调用

```ruby
def give_me_data
    yield "Big data", 10, "TB"
    yield "Big data", 100, "GB"
    yield "Big data", 30, "MB"
end

give_me_data { |text, data, unit| puts "#{text} #{data} #{unit}" }

# 输出
# Big data 10 TB
# Big data 100 GB
# Big data 30 MB
```

### 块将尝试从当前上下文返回

```ruby
give_me_data
    puts "我在 give_me_data 方法里面"
end

def test
  puts "我在测试方法里面"
  give_me_data { return 10 } # 代码从这里返回
  puts "I am back in test method"
end

return_value = test

# 输出
# 我在测试方法里面
# 我在 give_me_data 方法里面
# 10
```

### 通过使用 & 参数显式传递块

```ruby
def give_me_data(&block)
    block.call
    block.call
end

give_me_data { puts "Big data" }

# 输出
# Big data
# Big data
```

### 检查是否给出了块

```ruby
def give_me_data
    yield
end

give_me_data

# 输出
# LocalJumpError: no block given (yield)
```

### 处理异常并使块可选的方法

```ruby
def give_me_data
    return "no block" unless block_given?
    yield
end

give_me_data { puts "Big data" }
give_me_data

# 输出
# Big data
```

Procs
---

### Procs 示例
<!--rehype:wrap-class=row-span-2-->

```ruby
p = Proc.new { puts "Hello World" }

def give_me_data(proc)
    proc.call
end

give_me_data p

# 输出
# Hello World
```

proc 就像一个可以存储在变量中的块

### 任意参数
<!--rehype:wrap-class=row-span-2-->

```ruby
p = Proc.new { |count| "Hello World " * count }

def give_me_data(proc)
    proc.call 5, 2
end

give_me_data p

# 输出
# "Hello World Hello World Hello World Hello World Hello World "
```
<!--rehype:className=wrap-text-->

### proc 将尝试从当前上下文返回

```ruby
p = Proc.new { return 10 }
p.call
# 输出
LocalJumpError: unexpected return
```

### 不能从顶级上下文返回

```ruby
def give_me_data
    puts "我在 give_me_data 方法里面"
    p = Proc.new { return 10 }
    p.call # 代码从这里返回
    puts "I am back in give_me_data method"
end

return_value = give_me_data
puts return_value

# 输出
# 我在 give_me_data 方法里面
# 10
```

Lambdas
----

### 声明一个 lambda
<!--rehype:wrap-class=row-span-2-->

```ruby
l = lambda { puts "Hello World" }
# 速记
l = -> { puts "Hello World" }
# 调用 lambda
l.call
# 输出 => Hello World
```

有多种方法可以调用 lambda

```ruby
l.()
l[]
```

### 严格的 arguments

```ruby
l = -> (count) { "Hello World " * count }
l.call 5
# 输出
# "Hello World Hello World Hello World Hello World Hello World "
l.call 5, 2
# 输出
wrong number of arguments (given 2, expected 1)
```

### 块中声明一个 lambda
<!--rehype:wrap-class=row-span-2-->

```ruby
def give_me_data
    puts "I am inside give_me_data method"
    l = -> { return 10 }
    l.call
    puts "I am back in give_me_data method"
end

return_value = give_me_data
puts return_value

# 输出
# I am inside give_me_data method
# I am back in give_me_data method
# nil # because puts return nil
```

### lambdas 从 lambda 本身返回，就像常规方法一样

```ruby
l = -> { return 10 }
l.call

# 输出 => 10
```

数组
---

### 初始化一个空数组

```ruby
array = Array.new   #=> []
# or
array = []
```

### 包含不同类型的对象的数组

```ruby
array = [1, "two", 3.0] 
#=> [1, "two", 3.0]
```

### 用初始大小和默认对象填充数组
<!--rehype:wrap-class=row-span-2-->

```ruby
numbers = Array.new(3)       
#=> [nil, nil, nil]
numbers = Array.new(3, 7)    
#=> [7, 7, 7]
numbers = Array.new(3, true) 
#=> [true, true, true]
numbers = []
numbers.fill(7, 0..2)   #=> [7, 7, 7]
```

### 不同哈希值的数组
<!--rehype:wrap-class=col-span-2-->

```ruby
array_with_hashes = Array.new(2) { {} } #=> [{}, {}]
array_with_hashes[0][:name] = "Bob"
array_with_hashes[0][:id] = 10          #=> [{:name=>"Bob", :id=>10}, {}]
```

### 二维数组

```ruby
temperature_data = [
              ["A908", 38],
              ["A909", 37],
              ["A910", 38],
          ]
temperature_data[0]    #=> ["A908", 38]
temperature_data[0][0] #=> "A908"
temperature_data[0][1] #=> 38
```

### 数组索引

```ruby
str_array = [
  "This", "is", "a", "small", "array"
]
str_array[0]            #=> "This"
str_array[1]            #=> "is"
str_array[4]            #=> "array"
```
<!--rehype:className=wrap-text-->

### 负索引

```ruby
str_array = [
  "This", "is", "a", "small", "array"
]
# 索引 -1 表示最后一个元素
str_array[-1]        #=> "array"
# 索引 -2 表示倒数第二个元素
str_array[-2]        #=> "small"
str_array[-6]        #=> nil
```
<!--rehype:className=wrap-text-->

### 数组方法 at

```ruby
str_array = [
  "This", "is", "a", "small", "array"
]

puts str_array.at(0)      #=> "This"
```

### 范围获取

```ruby
arr = [1, 2, 3, 4, 5, 6]
arr[100]                  #=> nil
arr[-3]                   #=> 4
arr[2, 3]                 #=> [3, 4, 5]
arr[1..4]                 #=> [2, 3, 4, 5]
arr[1..-3]                #=> [2, 3, 4]
```

### 数组方法 fetch

```ruby
arr = ['a', 'b', 'c', 'd', 'e', 'f']
arr.fetch(100)
#=> IndexError: 数组边界外的索引 100：-6...6
arr.fetch(100, "oops")    #=> "oops"
```

超出边界，给默认值

### 获取数组元素

```ruby
arr = [1, 2, 3, 4, 5, 6]

arr.first     # 第一个值 => 1
arr.last      # 最后一个值 => 6
# take 返回前 n 个元素
arr.take(3)   #=> [1, 2, 3]
# drop 在 n 个元素被删除之后
arr.drop(3)   #=> [4, 5, 6]
```

### 在数组末尾添加值 push

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.push(11)          
#=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
numbers.push(12, 13, 14)  
#=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
```

### 数组末尾删除值 pop

```ruby
num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num_array.pop             #=> 10
num_array
#=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
<!--rehype:className=wrap-text-->

### 在数组的开头添加值 unshift

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.unshift(0)          
#=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.unshift(-3, -2, -1) 
#=> [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 检索并同时删除第一个元素 shift

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.shift #=> 1
numbers
#=> [2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 删除特定索引处的元素 delete_at

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.delete_at(2) #=> 4
numbers             
#=> [2, 3, 5, 6, 7, 8, 9, 10]
```

### 删除数组中任意位置的特定元素

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.delete(2) #=> 2
numbers           #=> [3, 5, 6, 7, 8, 9, 10]
```

### 在给定索引处插入值 insert
<!--rehype:wrap-class=row-span-2-->

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.insert(0, 0)           
#=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.insert(0, -3, -2, -1)  
#=> [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.insert(-1, 12, 13, 14) 
#=> [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14]
numbers.insert(-4, 11)         
#=> [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
```
<!--rehype:className=wrap-text-->

### 一个块来填充数组的值

```ruby
numbers = Array.new(10) { |n| n = n * 2 } 
#=> [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

### 填充数组变得更容易

```ruby
numbers = Array(100..110)
#=> [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]

# 或者我们可以将范围转换为数组
(100..110).to_a 
#=> [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]
```
<!--rehype:className=wrap-text-->

### 从数组中删除 nil 值

```ruby
arr = ['foo', 0, nil, 'bar', 7, nil]
arr.compact  #=> ['foo', 0, 'bar', 7]
arr      #=> ['foo', 0, nil, 'bar', 7, nil]
arr.compact! #=> ['foo', 0, 'bar', 7]
arr      #=> ['foo', 0, 'bar', 7]
```
<!--rehype:className=wrap-text-->

### 去重 uniq

```ruby
arr = [2, 5, 6, 556, 6, 6, 8, 9, 0, 123, 556]
arr.uniq #=> [2, 5, 6, 556, 8, 9, 0, 123]
```
<!--rehype:className=wrap-text-->

### 检查数组中是否存在值（`include？`）

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.include? "Mars"
# 输出 => true
planets.include? "Pluto"
# 输出 => false
```

### 获取数组大小

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.size
# 输出 => 8
planets.length
# 输出 => 8
```

您可以使用大小或长度，两者都是同义词

### 清除数组

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.clear
# 输出 => []
```

### 获取数组的第一个元素

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers[0]
# or
numbers.first
# 输出 => 1
```

### 获取数组的最后一个元素

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers[-1]
# or
numbers.last
# 输出 => 10
```

### 合并两个数组

```ruby
a = ["tom", "mot", "otm"]
b = [2, 3, 5]
a.zip(b)
# 输出
# [["tom", 2], ["mot", 3], ["otm", 5]]
```

### 对数组进行排序
<!--rehype:wrap-class=row-span-3-->

```ruby
primes = [7, 2, 3, 5]
sorted_primes = primes.sort
puts "#{sorted_primes}"
# 输出 => [2, 3, 5, 7]
```

or in-place sort

```ruby
primes = [7, 2, 3, 5]
primes.sort!
puts "#{primes}"
# 输出 => [2, 3, 5, 7]
```

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.sort
# 输出
# ["Earth", "Jupiter", "Mars", "Mercury", "Neptune", "Saturn", "Uranus", "Venus"]
planets.sort_by { |p| p }
# 输出
# ["Earth", "Jupiter", "Mars", "Mercury", "Neptune", "Saturn", "Uranus", "Venus"]
planets.sort_by { |p| p.length }
# 输出
# ["Mars", "Earth", "Venus", "Saturn", "Uranus", "Neptune", "Jupiter", "Mercury"]
```

### 从数组中获取最大值

```ruby
primes = [7, 2, 3, 5]
primes.max_by { |p| p }
# 输出 => 7
```

### 使用范围获取数组元素
<!--rehype:wrap-class=row-span-2-->

```ruby
# numbers[start..end], both index are inclusive
puts numbers[0..3]
# 1
# 2
# 3
# 4
# numbers[start..end], end index is exclusive
puts numbers[0...3]
# 1
# 2
# 3
# or numbers[start..length]
puts numbers[0, 1]
# 1
```

### 获取数组的前n个元素

```ruby
primes = [7, 2, 3, 5]
primes.take(3)
# [7, 2, 3]
```

### 访问元素

```ruby
primes = [7, 2, 3, 5]
primes.fetch(3)
# 5
# Fetch will throw an error if the element does not exist
primes.fetch(10)
# (index 10 outside of array bounds: -4...4)
# or get an default value
primes.fetch(10, -1)
# -1
```

### 从数组中删除重复元素

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 1]
numbers.uniq
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 删除前 n 个元素

```ruby
primes = [7, 2, 3, 5]
primes.drop(3)
# [5]
```

### 删除第一个元素

```ruby
primes = [7, 2, 3, 5]
primes.shift
# [2, 3, 5]
```

### 删除最后一个元素

```ruby
primes = [7, 2, 3, 5]
primes.pop
# [7, 2, 3]
```

### 删除带有索引的元素

```ruby
primes = [7, 2, 3, 5]
primes.delete_at(-1)
# [7, 2, 3]
```

### 删除所有出现的元素

```ruby
primes = [7, 2, 3, 5, 5]
primes.delete(5)
# [7, 2, 3]
```

### each
<!--rehype:wrap-class=row-span-3-->

```ruby
# 当你有单行块时
salary = [399, 234, 566, 533, 233]
salary.each { |s| puts s }
# 输出
# 399
# 234
# 566
# 533
# 233
```

当你有一个多行块时，你可以用 `do` 和 `end` 替换花括号 `{}`

```ruby
salary.each do |s|
  a = 10
  res = a * s
  puts res
end
# 输出
# 3990
# 2340
# 5660
# 5330
# 2330
```

或者您可以使用大括号 {} 和分号作为分隔符而不是换行符来做同样的事情

```ruby
salary.each { |s| a = 10 ; res = a * s ; puts res }
```

### each_with_index

```ruby
salary = [399, 234, 566, 533, 233]
salary.each_with_index { |value, index| puts "#{index} #{value}" }
# 输出
# 0 399
# 1 234
# 2 566
# 3 533
# 4 233
```

### each_index

```ruby
salary = [399, 234, 566, 533, 233]
salary.each_index { |i| puts i}
# 输出
# 0
# 1
# 2
# 3
# 4
```

### map

```ruby
salary = [399, 234, 566, 533, 233]
salary.map { |s|  s * 10  }
# 返回
# [3990, 2340, 5660, 5330, 2330]
# 另一方面，每个都返回原始值
salary = [399, 234, 566, 533, 233]
salary.each { |s|  s * 10  }
# 返回
# [399, 234, 566, 533, 233]
```

### collect

```ruby
salary = [399, 234, 566, 533, 233]
salary.collect { |s| s > 400 }
# 输出
# [false, false, true, true, false]
```

### for

```ruby
for value in [2, 3, 5, 7]
    puts value
end
```

### each_with_object
<!--rehype:wrap-class=col-span-2-->

```ruby
colors = [
  {color: "red", count: 3}, {color: "red", count: 5}, {color: "black", count: 4}
]
colors.each_with_object(Hash.new(0)) { |color, hash| hash["color_"+color[:color]] = color[:color].upcase; hash["count_"+color[:color]] += color[:count] }
# 输出
{"color_red"=>"RED", "count_red"=>8, "color_black"=>"BLACK", "count_black"=>4}

[1, 2, 3].each_with_object(0) { |number, sum| sum += number}
# 输出
# 0
# 因为0是不可变的，由于初始对象是0，所以方法返回0
```
<!--rehype:className=wrap-text-->

### while

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
index = 0
while index < planets.size
    puts "#{planets[index]}"
    index += 1
end
```
<!--rehype:className=wrap-text-->
---

```ruby
a = 1
star = '*'
while a <= 10
    puts star
    star += '*'
    a += 1
end
```

### do while

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
index = 0
loop do
    puts "#{planets[index]}"
    index += 1
    break if planets[index] == "Mars" or index > planets.size
end
```
<!--rehype:className=wrap-text-->

### until

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
index = planets.size - 1
until index < 0
    puts "#{planets[index]}"
    index -= 1
end
```
<!--rehype:className=wrap-text-->
```ruby
a = 1
star = '*'
until star.length > 10
    puts star
    star += '*'
    a += 1
end
```

### times

```ruby
10.times { puts "#{rand(1..100)}"}
# 输出
# 将打印 10 个随机数
```

仅仅因为你可以并不意味着你应该像这样迭代一个数组

```ruby
data_sample = [2, 3, 5, 7]
data_sample.size.times { |index| puts "#{data_sample[index]}" }
# 输出
# 2
# 3
# 5
# 7
```
<!--rehype:className=wrap-text-->

### upto

```ruby
data_sample = [2, 3, 5, 7]
0.upto((data_sample.size - 1) / 2) { |index| puts "#{data_sample[index]}" }
# 输出
# 2
# 3
```
<!--rehype:className=wrap-text-->

### downto

```ruby
data_sample = [2, 3, 5, 7]
(data_sample.size - 1).downto(data_sample.size / 2) { |index| puts "#{data_sample[index]}" }
# 输出
# 7
# 5
```
<!--rehype:className=wrap-text-->

### step
<!--rehype:wrap-class=row-span-2-->

```ruby
1.step(20, 2) { |number| puts "#{number}"}
# 输出
# 1
# 3
# 5
# 7
# 9
# 11
# 13
# 15
# 17
# 19
```

---

```ruby
19.step(1, -2) { |number| puts "#{number}"}
# 输出
# 19
# 17
# 15
# 13
# 11
# 9
# 7
# 5
# 3
# 1
```

### inject
<!--rehype:wrap-class=row-span-2-->

```ruby
numbers = [2, 2, 2, 2, 2]
numbers.inject{ |res, n| res + n }
# 输出是所有数字之和的结果
# 如果不给res设置初始值，则数组的第一个元素作为res的初始值
# 10
# 现在将 res 的值设置为 11
numbers = [2, 2, 2, 2, 2]
numbers.inject(11) { |res, n| res + n }
# so 11 + 2, 13 + 2, 15 + 2, 17 + 2 and 19 + 2
# 21
# using symbol
numbers = [2, 2, 2, 2, 2]
numbers.inject(:+)
# 输出
# 10
```

使用初始值和符号

```ruby
numbers = [2, 2, 2, 2, 2]
numbers.inject(11, :+)
# 输出
# 21
```

### reduce

```ruby
numbers = [2, 2, 2, 2, 2]
numbers.reduce(11, :+)
# 输出
# 21
```

### detect

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.detect { |name| name.start_with?("E") and name.end_with?("h") }
# output
# Earth
salary = [399, 234, 566, 533, 233]
salary.detect { |s| s > 1000 }
# output
# nil
```
<!--rehype:className=wrap-text-->

### find

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.find { |name| name.start_with?("E") and name.end_with?("h") }
# output
# Earth
```
<!--rehype:className=wrap-text-->

### select

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.select { |n| n % 2 == 0 }
# 现在你有一个偶数数组
# [2, 4, 6, 8, 10]
# 如果没有满足您的逻辑的值，则返回一个空数组
[1, 1, 1].select { |n| n % 2 == 0 }
# no even numbers
# []
```
<!--rehype:className=wrap-text-->

### reject

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.reject { |n| n % 2 == 0 }
# 如果数字是偶数则拒绝，所以现在我们有一个奇数数组
# [1, 3, 5, 7, 9]
```
<!--rehype:className=wrap-text-->

### keep_if

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.keep_if { |n| n % 2 == 0 }
# numbers 数组仅包含偶数
# [2, 4, 6, 8, 10]
```
<!--rehype:className=wrap-text-->

### delete_if

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.delete_if { |n| n % 2 == 0 }
# numbers 数组仅包含奇数
# [1, 3, 5, 7, 9]
```
<!--rehype:className=wrap-text-->

### drop_while

```ruby
numbers = [1, 2, 3, 1, 2, 3, 0]
numbers.drop_while { |n| n < 3 }
# 是 3 小于 3，返回 false，所以删除 1, 2
# [3, 1, 2, 3, 0]
```
<!--rehype:className=wrap-text-->

### reverse_each

```ruby
words = %w[first second third fourth fifth sixth]
str = ""
words.reverse_each {|word| str += "#{word} "}
p str #=> "sixth fifth fourth third second first "
```
<!--rehype:className=wrap-text-->

布尔可枚举方法
---

### 布尔可枚举方法
<!--rehype:wrap-class=row-span-2-->

Name     | When to use  
:-------- | --
`all?`     | 当您想检查所有元素是否满足您的条件时
`any?`     | 当您想检查至少一项是否满足您的条件时
`one?`     | 当您想检查一个元素是否满足您的要求时
`none?`    | 当您想检查是否没有任何项目满足您的条件时，相反？
`empty?`   | 当你想检查对象是否为空时
`include?` | 当你想检查元素是否存在于对象中时

### all?

```ruby
[2, 4, 6, 8, 10].all? { |num| num % 2 == 0 }
# true
[1, 4, 6, 8, 10].all? { |num| num % 2 == 0 }
# false
```

### any?

```ruby
[1, 3, 5, 7, 10].any? { |num| num % 2 == 0 }
# true
[1, 3, 5, 7, 19].any? { |num| num % 2 == 0 }
# false
```

### one?

```ruby
[1, 3, 2, 5, 7].one? { |num| num % 2 == 0 }
# true
[1, 3, 2, 5, 4].one? { |num| num % 2 == 0 }
# false
```

### none?

```ruby
[1, 3, 5, 7, 9].none? { |num| num % 2 == 0 }
# true
[2, 3, 5, 7, 9].none? { |num| num % 2 == 0 }
# false
```

### empty?

```ruby
[].empty?
# true
[1, 3, 5, 7, 9].empty?
# false
```

组合方法
---

### 组合方法
<!--rehype:wrap-class=row-span-2-->

- `&`            返回一个新数组，其中包含在数组和数组 other_array 中找到的每个元素；省略重复；使用 eql? 比较项目
- `intersection` 返回一个新数组，其中包含在 self 和所有给定数组 other_arrays 中找到的每个元素；省略重复；使用 eql? 比较项目
- `+`            返回一个数组，该数组包含 self 的所有元素，后跟给定数组的所有元素
- `-`            返回一个数组，其中包含在给定数组中找不到的所有 self 元素
- `union`        返回一个数组，其中包含 self 的所有元素和给定数组的所有元素，已删除重复项
- `difference`   返回一个数组，其中包含在任何给定数组中找不到的所有 self 元素
- `product`      返回或产生来自 self 和给定数组的所有元素组合

### &

```ruby
[0, 1, 2, 3] & [1, 2] # => [1, 2]
[0, 1, 0, 1] & [0, 1] # => [0, 1]
```

### intersection

```ruby
[0, 1, 2, 3].intersection([0, 1, 2], [0, 1, 3])
# => [0, 1]
[0, 0, 1, 1, 2, 3].intersection([0, 1, 2], [0, 1, 3])
# => [0, 1]
```
<!--rehype:className=wrap-text-->

### +

```ruby
a = [0, 1] + [2, 3]
a # => [0, 1, 2, 3]
```

### -

```ruby
[0, 1, 1, 2, 1, 1, 3, 1, 1] - [1] 
# => [0, 2, 3]
[0, 1, 2, 3] - [3, 0] 
# => [1, 2]
[0, 1, 2] - [4] 
# => [0, 1, 2]
```

### union

```ruby
[0, 1, 2, 3].union([4, 5], [6, 7]) 
# => [0, 1, 2, 3, 4, 5, 6, 7]
[0, 1, 1].union([2, 1], [3, 1]) 
# => [0, 1, 2, 3]
[0, 1, 2, 3].union([3, 2], [1, 0]) 
# => [0, 1, 2, 3]
```

### difference

```ruby
[0, 1, 1, 2, 1, 1, 3, 1, 1].difference([1])
# => [0, 2, 3]
[0, 1, 2, 3].difference([3, 0], [1, 3])
# => [2]
[0, 1, 2].difference([4])
# => [0, 1, 2]
```

### product

```ruby
a = [0, 1, 2]
a1 = [3, 4]
p = a.product(a1)
p.size # => 6 # a.size * a1.size
p # => [[0, 3], [0, 4], [1, 3], [1, 4], [2, 3], [2, 4]]
```
<!--rehype:className=wrap-text-->

循环
---

### while 循环

```ruby
# variable count
count = 4
# using while loop
# here conditional is count i.e. 4
while count >= 1
  # statements to be executed
  puts "Ruby Cheatsheet"
  count = count - 1
  # while loop ends here
end
```

输出

```
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
```

### for 循环

```ruby
# loop using range as expression
text = "Ruby Cheatsheet"
# using for loop with the range
for count in 1..5 do
  puts text
end
```

输出

```
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
```

### do..while 循环

```ruby
# starting of do..while loop
loop do
  puts "Ruby Cheatsheet"
  val = '7'
  # using boolean expressions
  if val == '7'
    break
  end
  # ending of ruby do..while loop
end
```

输出

```
Ruby Cheatsheet
```

### until 循环

```ruby
var = 7
# here do is optional
until var == 11 do
  # code to be executed
  puts var * 10
  var = var + 1
  # here loop ends
end
```

输出

```
70
80
90
100
```

### 跳出循环

```ruby
salary = [399, 234, 566, 533, 233]
salary.each do |s|
  break if s == 566
  puts s
end
# 输出
# 399
# 234
```

通过使用 `break` 关键字

### 在循环内跳过

```ruby
salary = [399, 234, 566, 533, 233]
salary.each do |s|
  next if s == 533
  puts s
end
# 输出
# 399
# 234
# 566
# 233
```

通过使用 next 关键字

### 重复当前迭代

```ruby
data = [456, 3000]
retry_count = 0
status = "network failure"
sum = 0
data.each do |d|
    if retry_count == 3
        status = "connection established"
        retry_count = 0
        redo
    elsif status == "network failure" and retry_count < 5
        puts "network failure #{retry_count}"
        retry_count += 1
        redo
    elsif status == "connection established"
        puts d
        sum += d
    end
end
# output of sum
# 3456
```

### 重新开始循环

```ruby
numbers = [2, 2, 44, 44]
sum = 0
begin
    numbers.each do |s|
        if rand(1..10) == 5
            puts "hi 5, let's do it again!"
            sum = 0
            raise "hi 5"
        end
        puts s
        sum += s
    end
rescue
    retry
end
```

Classes
---

### Classes 示例
<!--rehype:wrap-class=row-span-2-->

```ruby
class Person
    # when you create a new object, it looks for a method named initialize and executes it, like a constructor in java
    # def initialize(name, number)
    #    @name = name
    #    @number = number
    # end
    # instance variable
    # @name
    # class variable
    # @@count
    # attr_accessor acts as a getter and setter for the following instance attributes
    attr_accessor :name, :number
    # class variable must be initialized
    @@count = 0
    def self.count
        @@count
    end
    def self.count=(count)
        @@count = count
    end
    def initialize
        @@count += 1
    end
end
# create an instance of the Person class
p1 = Person.new
# set attributes of the Person class
p1.name = "Yukihiro Matsumoto"
p1.number = 9999999999
# get attributes of the Person class
puts "#{p1.name}"
puts "#{p1.number}"
puts "#{Person.count}"
# Yukihiro Matsumoto
# 9999999999
# 1
p2 = Person.new
p2.name = "Yukihiro Matsumoto"
p2.number = 9999999999
# get attributes of the Person class
puts "#{p2.name}"
puts "#{p2.number}"
puts "#{Person.count}"
# Yukihiro Matsumoto
# 9999999999
# 2
# set class variable
Person.count = 3
puts "#{Person.count}"
# 3
```

### 继承一个类

```ruby
class Person
    attr_accessor :name, :number
end
# 使用 < 符号从父类继承方法和属性
class Student < Person
    attr_accessor :id
end
s = Student.new
s.name = "James Bond"
s.number = 700
s.id = 678
puts "#{p.name}"
James Bond
puts "#{p.number}"
700
puts "#{p.id}"
678
```

### 检查实例类型

```ruby
class Vehicle; end
class Car < Vehicle; end
class Audi < Car; end
car = Car.new
car.instance_of? Vehicle
false
car.instance_of? Car
true
car.instance_of? Audi
false
a = 7
a.instance_of? Integer
true
a.instance_of? Numeric
false
```

如果对象是给定类的实例，而不是子类或超类，则返回 true

### 打印一个类的所有方法名

```ruby
puts (String.methods).sort
# 排除从 Object 类继承的方法
puts (String.methods - Object.public_instance_methods).sort
```

### 检查一个类是否有特定的方法

```ruby
String.respond_to?(:prepend)
true
String.respond_to?(:append)
false
```

另见
---

- [Ruby 官网](https://www.ruby-lang.org/en/) _(ruby-lang.org)_
- [Ruby Cheatsheet](https://github.com/lifeparticle/Ruby-Cheatsheet) _(github.com)_

[2]: https://ruby-doc.org/core-3.1.2/Integer.html
[3]: https://ruby-doc.org/core-3.1.2/Float.html
[4]: https://ruby-doc.org/core-3.1.2/String.html
[5]: https://ruby-doc.org/core-3.1.2/Array.html
[6]: https://ruby-doc.org/core-3.1.2/Hash.html
[7]: https://ruby-doc.org/core-3.1.2/TrueClass.html
[8]: https://ruby-doc.org/core-3.1.2/FalseClass.html
[9]: https://ruby-doc.org/core-3.1.2/Symbol.html
[10]: https://ruby-doc.org/core-3.1.2/Range.html
[11]: https://ruby-doc.org/core-3.1.2/NilClass.html
