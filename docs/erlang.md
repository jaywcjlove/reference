Erlang 备忘清单
===

[Erlang](https://www.erlang.org/) 是一种用于构建并发、分布式和容错系统的编程语言。以下是一些常用的命令和操作。

入门
---

### 启动 Erlang Shell

```shell
erl
```

### 编译代码
<!--rehype:wrap-class=row-span-2-->

```shell
# 在 Erlang Shell 中编译
c(module).
# 在命令行中编译
erlc module.erl
```

### 运行代码
<!--rehype:wrap-class=row-span-2-->

```shell
# 在 Erlang Shell 中运行
module:function().
# 从命令行运行
erl -noshell -s module function -s init stop
```

### 退出 Erlang Shell

```shell
q().
```

代码结构
---

### 模块定义

```erlang
-module(module_name).
-export([function_name/arity, ...]).

function_name(Args) ->
    % Function body.
    Result.
```

### 导出函数

```erlang
-export([function1/0, function2/1]).
```

### 注释

```erlang
% 单行注释
% 这是一个注释
```

### 变量

```erlang
VarName = Value. % 变量名必须以大写字母开头
Age = 25.
Name = "Alice".
```

数据类型
---

### 原子

```erlang
atom.       % 例子：atom, 'Atom with spaces'
```

### 数字

```erlang
123.        % 整数
3.14.       % 浮点数
```

### 布尔值

```erlang
true.
false.
```

### 字符串

```erlang
"Hello, World!".
```

### 元组

```erlang
{ok, "Success"}.
```

### 列表

```erlang
[1, 2, 3].
[H|T] = [1, 2, 3]. % H = 1, T = [2, 3]
```

### 字典 (Map)

```erlang
#{key1 => value1, key2 => value2}.
```

控制结构
---

### 条件语句

```erlang
if
    Condition1 -> Expression1;
    Condition2 -> Expression2;
    true -> DefaultExpression
end.
```

### case 表达式

```erlang
case Expression of
    Pattern1 -> Expression1;
    Pattern2 -> Expression2;
    _ -> DefaultExpression
end.
```

### 函数定义

```erlang
% 无参函数
my_function() ->
    ok.

% 有参函数
add(A, B) ->
    A + B.
```

列表操作
---

### 列表生成

```erlang
% 生成 1 到 10 的列表
[ X || X <- lists:seq(1, 10)].

% 生成 1 到 10 中的偶数
[ X || X <- lists:seq(1, 10), X rem 2 == 0].
```

并发
---

### 启动进程

```erlang
spawn(Module, Function, Args).

% 示例
Pid = spawn(fun() -> io:format("Hello from process~n") end).
```

### 发送消息

```erlang
Pid ! Message.

% 示例
Pid ! {hello, self()}.
```

### 接收消息

```erlang
receive
    Pattern1 -> Expression1;
    Pattern2 -> Expression2;
    after Timeout -> TimeoutExpression
end.
```

### 模式匹配

```erlang
{ok, Value} = {ok, 42}.
```

常用内置函数 (BIFs)
---

### 列表操作

```erlang
lists:append(List1, List2).
lists:map(Function, List).
lists:filter(Function, List).
lists:foldl(Function, Acc, List).
```

### 元组操作

```erlang
element(N, Tuple).
setelement(N, Tuple, Value).
tuple_size(Tuple).
```

### 字符串操作

```erlang
string:len(String).
string:concat(String1, String2).
string:tokens(String, Delimiters).
```

### 文件操作

```erlang
file:read_file(Filename).
file:write_file(Filename, Data).
file:delete(Filename).
```

### 列表操作

```erlang
lists:map(fun(X) -> X * 2 end, [1, 2, 3]).
lists:filter(fun(X) -> X rem 2 == 0 end, [1, 2, 3, 4]).
```

### 字符串操作

```erlang
string:len("Hello").
string:upper("hello").
```

### 文件操作

```erlang
{ok, File} = file:open("test.txt", [write]).
file:write(File, "Hello, file!").
file:close(File).
```

### 示例：简单的服务器

```erlang
-module(server).
-export([start/0, loop/0]).

start() ->
    spawn(fun loop/0).

loop() ->
    receive
        {echo, Msg} ->
            io:format("Echo: ~p~n", [Msg]),
            loop();
        stop ->
            io:format("Server stopping~n"),
            ok;
        _ ->
            io:format("Unknown message~n"),
            loop()
    end.
```

并发编程
---

### 创建进程

```erlang
Pid = spawn(Module, Function, Args).
```

### 发送消息

```erlang
Pid ! Message.
```

### 接收消息

```erlang
receive
    Pattern1 -> Actions1;
    Pattern2 -> Actions2;
    ...
end.
```

### 链接进程

```erlang
link(Pid).
unlink(Pid).
```

### 监控进程

```erlang
MonitorRef = erlang:monitor(process, Pid).
erlang:demonitor(MonitorRef).
```

错误处理
---

### 捕获异常

```erlang
try Expression of
    Pattern -> Result
catch
    Class:Reason -> Handler
end.
```

### 常见异常类型

- `throw`
- `error`
- `exit`

### 错误处理

```erlang
try Expression of
    Pattern -> Result
catch
    Type:Reason -> ErrorHandlingExpression
end.
```

分布式编程
---

### 启动分布式节点

```shell
erl -name nodename@hostname -setcookie Cookie
```

### 连接节点

```erlang
net_adm:ping(Node).
```

### 发送消息到远程节点

```erlang
{remote_process, 'remote_node@host'} ! Message.
```

OTP 框架
---

### 定义 GenServer

```erlang
-module(my_gen_server).
-behaviour(gen_server).

-export([start_link/0, init/1, handle_call/3, handle_cast/2, handle_info/2, terminate/2, code_change/3]).

start_link() ->
    gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).

init([]) ->
    {ok, #state{}}.

handle_call(Request, From, State) ->
    {reply, Reply, State}.

handle_cast(Msg, State) ->
    {noreply, State}.

handle_info(Info, State) ->
    {noreply, State}.

terminate(Reason, State) ->
    ok.

code_change(OldVsn, State, Extra) ->
    {ok, State}.
```

### 使用 GenServer

```erlang
gen_server:start_link({local, Name}, Module, Args, Options).
gen_server:call(ServerRef, Request).
gen_server:cast(ServerRef, Msg).
```

测试
---

### 编写 EUnit 测试

```erlang
-module(module_name_tests).
-include_lib("eunit/include/eunit.hrl").

simple_test() ->
    ?assertEqual(Expected, Actual).

complex_test_() ->
    [
        {"Test case 1", ?_assertEqual(Expected1, Actual1)},
        {"Test case 2", ?_assertEqual(Expected2, Actual2)}
    ].
```

### 运行 EUnit 测试

```shell
# 在命令行中运行
erl -eval "eunit:test(module_name)" -s init stop
```

另见
---

- [Erlang 官方文档](https://www.erlang.org/docs)
- [Erlang 编程书籍](https://learnyousomeerlang.com/content)
