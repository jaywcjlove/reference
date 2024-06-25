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

```shell
# 在 Erlang Shell 中编译
c(module).
# 在命令行中编译
erlc module.erl
```

### 运行代码

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
- [Erlang 编程书籍](https://www.erlang.org/books)
