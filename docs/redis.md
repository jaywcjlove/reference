Redis 备忘清单
===

本备忘单旨在快速理解 [redis](https://redis.io/) 所涉及的主要概念，提供了最常用的SQL语句，供您参考。

入门
---

### 介绍

Redis 是一个key-value存储系统。和Memcached类似，它支持存储的value类型相对更多，包括string(字符串)、list(链表)、set(集合)、zset(sorted set 有序集合)和hash（哈希类型）。这些数据类型都支持push/pop、add/remove及取交集并集和差集及更丰富的操作。

启动Redis
```shell script
$ redis-server &
```
使用CLI登陆redis
```shell script
$ redis-cli
```
使用Telnet的登陆redis
```shell script
$ telnet 127.0.0.1 6379
```

### 小试
Ping测试
```shell script
redis> PING
PONG
```
经典HelloWorld
```shell script
redis> SET mykey "Hello world"
OK
redis> GET mykey
"Hello world"
```


### 数据类型
- [Strings(字符串)](#redis字符串类型设置)
- [Lists(列表)](#redis列表类型设置)
- [Hashes(哈希)](#redis哈希类型设置)
- [Sets(集合)](#redis集合类型设置)
- [Sorted Sets(有序集合)](#redis排序集类型设置)

Redis支持以上5种数据类型


Redis服务相关的命令设置
------------

### COMMAND

```
COMMAND
```
#### 栗子
```shell script
redis> COMMAND
1) 1) "georadius_ro"
     2) (integer) -6
     3) 1) "readonly"
        2) "movablekeys"
     4) (integer) 1
     5) (integer) 1
     6) (integer) 1
     7) 1) "@read"
        2) "@geo"
        3) "@slow"
  2) 1) "zpopmin"
     2) (integer) -2
     3) 1) "write"
        2) "fast"
  ........
```
获取 Redis 命令详细信息的数组


### 一些引用(可能有帮助) 
<!--rehype:wrap-class=col-span-2 row-span-4-->

| -                                                                    | -                                                                                                                                |
|----------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| [ACL LOAD](https://redis.io/commands/acl-load)                       | 从配置的 ACL 文件重新加载 ACL |
| [ACL SAVE](https://redis.io/commands/acl-save)                       | 将当前的 ACL 规则保存在配置的 ACL 文件中 |
| [ACL LIST](https://redis.io/commands/acl-list)                       | 以 ACL 配置文件格式列出当前的 ACL 规则 |
| [ACL USERS](https://redis.io/commands/acl-users)                     | 列出所有配置的ACL规则的用户名 |
| [ACL GETUSER ](https://redis.io/commands/acl-getuser)                | 获取特定 ACL 用户的规则 |
| [ACL SETUSER ](https://redis.io/commands/acl-setuser)                | 修改或创建特定 ACL 用户的规则 |
| [ACL DELUSER ](https://redis.io/commands/acl-deluser)                | 删除指定的 ACL 用户和关联的规则 |
| [ACL CAT ](https://redis.io/commands/acl-cat)                        | 列出 ACL 类别或类别内的命令 |
| [ACL GENPASS ](https://redis.io/commands/acl-genpass)                | 生成用于 ACL 用户的伪随机安全密码 |
| [ACL WHOAMI](https://redis.io/commands/acl-whoami)                   | 返回关联到当前连接的用户的名称 |
| [ACL LOG ](https://redis.io/commands/acl-log)                        | 列出由于 ACL 到位而被拒绝的最新事件 |
| [ACL HELP](https://redis.io/commands/acl-help)                       | 显示有关ACL访问控制的帮助信息 |
| [BGREWRITEAOF](https://redis.io/commands/bgrewriteaof)               | 异步重写 append-only 文件 |
| [BGSAVE ](https://redis.io/commands/bgsave)                          | 将数据集异步保存到磁盘 |
| [CONFIG GET ](https://redis.io/commands/config-get)                  | 获取配置参数的值 |
| [CONFIG REWRITE](https://redis.io/commands/config-rewrite)           | 用内存中的配置重写配置文件 |
| [CONFIG SET ](https://redis.io/commands/config-set)                  | 将配置参数设置为给定值 |
| [CONFIG RESETSTAT](https://redis.io/commands/config-resetstat)       | 重置 INFO 返回的统计数据 |
| [DBSIZE](https://redis.io/commands/dbsize)                           | 返回所选数据库中的键数 |
| [DEBUG OBJECT ](https://redis.io/commands/debug-object)              | 获取某个key的调试信息 |
| [DEBUG SEGFAULT](https://redis.io/commands/debug-segfault)           | 使服务器崩溃 |
| [FLUSHALL ](https://redis.io/commands/flushall)                      | 从所有数据库中删除所有密钥 |
| [FLUSHDB ](https://redis.io/commands/flushdb)                        | 从当前数据库中删除所有键 |
| [LOLWUT ](https://redis.io/commands/lolwut)                          | 显示一些计算机信息和 Redis 版本 |
| [LASTSAVE](https://redis.io/commands/lastsave)                       | 获取上次成功保存到磁盘的 UNIX 时间戳 |
| [MEMORY DOCTOR](https://redis.io/commands/memory-doctor)             | 输出内存问题报告 |
| [MEMORY HELP](https://redis.io/commands/memory-help)                 | 显示有关内存的使用帮助 |
| [MEMORY MALLOC-STATS](https://redis.io/commands/memory-malloc-stats) | 显示分配器内部统计 |
| [MEMORY PURGE](https://redis.io/commands/memory-purge)               | 要求分配器释放内存 |
| [MEMORY STATS](https://redis.io/commands/memory-stats)               | 显示内存使用详情(该死，运维的我经常用到) |
| [MEMORY USAGE ](https://redis.io/commands/memory-usage)              | 估计一个键的内存使用 |
| [MODULE LIST](https://redis.io/commands/module-list)                 | 列出服务器加载的所有模块 |
| [MODULE LOAD ](https://redis.io/commands/module-load)                | 加载模块 |
| [MODULE UNLOAD ](https://redis.io/commands/module-unload)            | 卸载模块 |
| [MONITOR](https://redis.io/commands/monitor)                         | 实时监听服务器收到的所有请求 |
| [SAVE](https://redis.io/commands/save)                               | 将数据集同步保存到磁盘 |
| [SHUTDOWN ](https://redis.io/commands/shutdown)                      | 将数据集同步保存到磁盘，然后关闭服务器 |
| [SLAVEOF ](https://redis.io/commands/slaveof)                        | 使服务器成为另一个实例的副本,或将其提升为主服务器(从Redis 5开始弃用，改成REPLICAOF了) |
| [REPLICAOF ](https://redis.io/commands/replicaof)                    | 使服务器成为另一个实例的副本，或将其提升为主服务器 |
| [SLOWLOG ](https://redis.io/commands/slowlog)                        | 管理 Redis 慢查询日志 |
| [SWAPDB ](https://redis.io/commands/swapdb)                          | 交换两个Redis数据库 |
| [SYNC](https://redis.io/commands/sync)                               | 用于复制的内部命令(主) |
| [PSYNC ](https://redis.io/commands/psync)                            | 用于复制的内部命令(备) |
| [LATENCY DOCTOR](https://redis.io/commands/latency-doctor)           | 返回人类可读的延迟分析报告 |
| [LATENCY GRAPH ](https://redis.io/commands/latency-graph)            | 返回事件的延迟图 |
| [LATENCY HISTORY ](https://redis.io/commands/latency-history)        | 返回事件的时间戳延迟样本 |
| [LATENCY LATEST](https://redis.io/commands/latency-latest)           | 返回所有事件的最新延迟样本 |
| [LATENCY RESET ](https://redis.io/commands/latency-reset)            | 重置一个或多个事件的延迟数据 |
| [LATENCY HELP](https://redis.io/commands/latency-help)               | 显示有关不同子命令的有用文本 |




### COMMAND COUNT

```
COMMAND COUNT
```
#### 栗子
```shell script
redis> COMMAND COUNT
(integer) 217
```
获取 Redis 命令总数

### COMMAND GETKEYS

```
COMMAND GETKEYS
```
#### 栗子
```shell script
redis> COMMAND GETKEYS MSET a b c d e f
1) "a"
2) "c"
3) "e"
redis> COMMAND GETKEYS EVAL "not consulted" 3 key1 key2 key3 arg1 arg2 arg3 argN
1) "key1"
2) "key2"
3) "key3"
redis> COMMAND GETKEYS SORT mylist ALPHA STORE outlist
1) "mylist"
2) "outlist"
```
给定完整的 Redis 命令提取密钥


### COMMAND INFO 

```
COMMAND INFO command-name [command-name ...]
```
#### 栗子
```shell script
redis> COMMAND INFO get set eval
1) 1) "get"
   2) (integer) 2
   3) 1) "readonly"
      2) "fast"
   4) (integer) 1
   5) (integer) 1
   6) (integer) 1
   7) 1) "@read"
      2) "@string"
      3) "@fast"
2) 1) "set"
   2) (integer) -3
   3) 1) "write"
      2) "denyoom"
   4) (integer) 1
   5) (integer) 1
   6) (integer) 1
   7) 1) "@write"
      2) "@string"
      3) "@slow"
3) 1) "eval"
   2) (integer) -3
   3) 1) "noscript"
      2) "movablekeys"
   4) (integer) 0
   5) (integer) 0
   6) (integer) 0
   7) 1) "@slow"
      2) "@scripting"
```
获取特定 Redis 命令详细信息的数组




### INFO 

```
INFO [section]
```
#### 栗子
```shell script
redis> INFO
# Server
redis_version:6.1.240
redis_git_sha1:00000000
redis_git_dirty:0
redis_build_id:a26db646ea64a07c
redis_mode:standalone
os:Linux 5.4.0-1017-aws x86_64
......
```
获取有关服务器的信息和统计信息



### ROLE

```
ROLE
```
#### 栗子
```shell script
redis> ROLE
1) "master"
2) (integer) 0
3) (empty list or set)
```
返回实例在复制上下文中的角色



### TIME

```
TIME
```
#### 栗子
```shell script
redis> TIME
1) "1609040690"
2) "558952"
redis> TIME
1) "1609040690"
2) "559206"
```
返回当前服务器时间


Redis一些通用的命令
------------

### 一些引用(可能有帮助)

| -                                             | -                                                                                                            |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| [COPY ](https://redis.io/commands/copy)       | 复制键值对 |
| [MIGRATE ](https://redis.io/commands/migrate) | 以原子方式将键值对从 Redis 实例传输到另一个实例 |
| [MOVE ](https://redis.io/commands/move)       | 将键值对移动到另一个数据库 |
| [OBJECT ](https://redis.io/commands/object)   | 检查 Redis 对象的内部结构 |
| [RESTORE ](https://redis.io/commands/restore) | 使用提供的序列化值创建键值对，之前使用 DUMP 获得 |
| [SORT ](https://redis.io/commands/sort)       | 对列表、集合或有序集合中的元素进行排序 |
| [WAIT ](https://redis.io/commands/wait)       | 等待在当前连接的上下文中发送的所有写命令的同步复制 |
| [SCAN ](https://redis.io/commands/scan)       | 增量迭代键空间 |



### DEL 

```
DEL key [key ...]
```
#### 栗子
```shell script
redis> SET key1 "Hello"
"OK"
redis> SET key2 "World"
"OK"
redis> DEL key1 key2 key3
(integer) 2
```
删除键值对


### DUMP 

```
DUMP key
```
#### 栗子
```shell script
redis> SET mykey 10
"OK"
redis> DUMP mykey
"\u0000\xC0\n\t\u0000\xBEm\u0006\x89Z(\u0000\n"
```
返回存储在指定键中的值的序列化版本

### EXISTS 

```
EXISTS key [key ...]
```
#### 栗子
```shell script
redis> SET key1 "Hello"
"OK"
redis> EXISTS key1
(integer) 1
redis> EXISTS nosuchkey
(integer) 0
redis> SET key2 "World"
"OK"
redis> EXISTS key1 key2 nosuchkey
(integer) 2
```
判断键值对是否存在

### EXPIRE 

```
EXPIRE key seconds
```
#### 栗子
```shell script
redis> SET mykey "Hello"
"OK"
redis> EXPIRE mykey 10
(integer) 1
redis> TTL mykey
(integer) 10
redis> SET mykey "Hello World"
"OK"
redis> TTL mykey
(integer) -1
```
设置键值对的生存时间（以秒为单位）

### EXPIREAT 

```
EXPIREAT key timestamp
```
#### 栗子
```shell script
redis> SET mykey "Hello"
"OK"
redis> EXISTS mykey
(integer) 1
redis> EXPIREAT mykey 1293840000
(integer) 1
redis> EXISTS mykey
(integer) 0
```
将键值对的到期时间设置为 UNIX 时间戳

### KEYS 

```
KEYS pattern
```
#### 栗子
```shell script
redis> MSET firstname Jack lastname Stuntman age 35
"OK"
redis> KEYS *name*
1) "firstname"
2) "lastname"
redis> KEYS a??
1) "age"
redis> KEYS *
1) "firstname"
2) "age"
3) "lastname"
```
查找与给定模式匹配的所有键

### PERSIST 

```
PERSIST key
```
#### 栗子
```shell script
redis> SET mykey "Hello"
"OK"
redis> EXPIRE mykey 10
(integer) 1
redis> TTL mykey
(integer) 10
redis> PERSIST mykey
(integer) 1
redis> TTL mykey
(integer) -1
```
从键值对中删除过期时间


### PEXPIRE 

```
PEXPIRE key milliseconds
```
#### 栗子
```shell script
redis> SET mykey "Hello"
"OK"
redis> PEXPIRE mykey 1500
(integer) 1
redis> TTL mykey
(integer) 1
redis> PTTL mykey
(integer) 1499
```
设置键的生存时间（以毫秒为单位）

### PEXPIREAT 

```
PEXPIREAT key milliseconds-timestamp
```
#### 栗子
```shell script
redis> SET mykey "Hello"
"OK"
redis> PEXPIREAT mykey 1555555555005
(integer) 1
redis> TTL mykey
(integer) -2
redis> PTTL mykey
(integer) -2
```
将键值对的到期时间设置为以毫秒为单位指定的 UNIX 时间戳

### PTTL 

```
PTTL key
```
#### 栗子
```shell script
redis> SET mykey "Hello"
"OK"
redis> EXPIRE mykey 1
(integer) 1
redis> PTTL mykey
(integer) 1000
```
以毫秒为单位获取键值对的生存时间



### RENAME 

```
RENAME key newkey
```
#### 栗子
```shell script
redis> SET mykey "Hello"
"OK"
redis> RENAME mykey myotherkey
"OK"
redis> GET myotherkey
"Hello"
```
重命名键值对


### RENAMENX 

```
RENAMENX key newkey
```
#### 栗子
```shell script
redis> SET mykey "Hello"
"OK"
redis> SET myotherkey "World"
"OK"
redis> RENAMENX mykey myotherkey
(integer) 0
redis> GET myotherkey
"World"
```
重命名键值对，仅当新键值对不存在时



### TOUCH 

```
TOUCH key [key ...]
```
#### 栗子
```shell script
redis> SET key1 "Hello"
"OK"
redis> SET key2 "World"
"OK"
redis> TOUCH key1 key2
(integer) 2
```
更改键值对的最后访问时间。返回指定的现有键的数量

### TTL 

```
TTL key
```
#### 栗子
```shell script
redis> SET mykey "Hello"
"OK"
redis> EXPIRE mykey 10
(integer) 1
redis> TTL mykey
(integer) 10
```
获得一个键的值的时间(有点绕口，但意思是对的)

### TYPE 

```
TYPE key
```
#### 栗子
```shell script
redis> SET key1 "value"
"OK"
redis> LPUSH key2 "value"
(integer) 1
redis> SADD key3 "value"
(integer) 1
redis> TYPE key1
"string"
redis> TYPE key2
"list"
redis> TYPE key3
"set"
```
确定存储在键中的类型


### UNLINK 

```
UNLINK key [key ...]
```
#### 栗子
```shell script
redis> SET key1 "Hello"
"OK"
redis> SET key2 "World"
"OK"
redis> UNLINK key1 key2 key3
(integer) 2
```
在另一个线程中异步删除一个键。否则它就像 DEL，但不是阻塞的



Redis连接相关的命令
------------

### 一些引用(可能有帮助)

| -                                                             | -                                                                          |
|---------------------------------------------------------------|----------------------------------------------------------------------------|
| [AUTH ](https://redis.io/commands/auth)                       | 向服务器进行身份验证 |
| [CLIENT CACHING ](https://redis.io/commands/client-caching)   | 指示服务器在下一个请求中是否跟踪键 |
| [CLIENT KILL ](https://redis.io/commands/client-kill)         | 终止客户端的连接 |
| [CLIENT LIST ](https://redis.io/commands/client-list)         | 获取客户端连接列表 |
| [CLIENT GETNAME](https://redis.io/commands/client-getname)    | 获取当前连接名称 |
| [CLIENT GETREDIR](https://redis.io/commands/client-getredir)  | 获取跟踪通知重定向客户端 ID（如果有）|
| [CLIENT PAUSE ](https://redis.io/commands/client-pause)       | 停止处理来自客户端的命令一段时间 |
| [CLIENT REPLY ](https://redis.io/commands/client-reply)       | 指示服务器是否回复命令 |
| [CLIENT SETNAME ](https://redis.io/commands/client-setname)   | 设置当前连接名称 |
| [CLIENT TRACKING ](https://redis.io/commands/client-tracking) | 启用或禁用服务器辅助客户端缓存支持 |
| [CLIENT UNBLOCK ](https://redis.io/commands/client-unblock)   | 取消阻止来自不同连接的阻塞命令中阻塞的客户端 |
| [HELLO ](https://redis.io/commands/hello)                     | 切换Redis协议 |
| [QUIT](https://redis.io/commands/quit)                        | 关闭连接 |
| [RESET](https://redis.io/commands/reset)                      | 重置连接 |
| [SELECT ](https://redis.io/commands/select)                   | 更改为当前连接选择的数据库 |



### CLIENT ID

```
CLIENT ID
```
#### 栗子
```shell script
redis> CLIENT ID
ERR Unknown or disabled command 'CLIENT'
```
返回当前连接的客户端 ID


### CLIENT INFO

```
CLIENT INFO
```
#### 栗子
```shell script
redis> CLIENT INFO
"id=55542 addr=127.0.0.1:58710 laddr=127.0.0.1:6379 fd=8 name= age=114920 idle=0 flags=N db=0 sub=0 psub=0 multi=-1 qbuf=26 qbuf-free=40928 argv-mem=10 obl=0 oll=0 omem=0 tot-mem=61466 events=r cmd=client user=default redir=-1\n"
```
返回有关当前客户端连接的信息。



### ECHO 

```
ECHO message
```
#### 栗子
```shell script
redis> ECHO "Hello World!"
"Hello World!"
```
回显给定的字符串



### PING 

```
PING [message]
```
#### 栗子
```shell script
redis> PING
"PONG"
redis> PING "hello world"
"hello world"
```
ping 服务器


Redis字符串类型设置
------------


### APPEND

```
APPEND key value
```
#### 栗子
```shell script
redis> EXISTS mykey
(integer) 0
redis> APPEND mykey "Hello"
(integer) 5
redis> APPEND mykey " World"
(integer) 11
redis> GET mykey
"Hello World"
```
将值附加到键,可以理解为追加作用


### BITCOUNT 

```
BITCOUNT key [start end]
```
#### 栗子
```shell script
redis> SET mykey "foobar"
"OK"
redis> BITCOUNT mykey
(integer) 26
redis> BITCOUNT mykey 0 0
(integer) 4
redis> BITCOUNT mykey 1 1
(integer) 6
```
计算字符串中的集合位



### BITFIELD 

```
BITFIELD key [GET type offset] [SET type offset value] 
[INCRBY type offset increment] [OVERFLOW WRAP|SAT|FAIL]
```
#### 栗子
```shell script
redis> BITFIELD mykey INCRBY i5 100 1 GET u4 0
1) (integer) 1
2) (integer) 0
```
对字符串执行任意位域整数运算


### BITOP 

```
BITOP operation destkey key [key ...]
```
#### 栗子
```shell script
redis> SET key1 "foobar"
"OK"
redis> SET key2 "abcdef"
"OK"
redis> BITOP AND dest key1 key2
(integer) 6
redis> GET dest
"`bc`ab"
```
在字符串之间执行按位运算


### BITPOS 

```
BITPOS key bit [start] [end]
```
#### 栗子
```shell script
redis> SET mykey "\xff\xf0\x00"
"OK"
redis> BITPOS mykey 0
(integer) 12
redis> SET mykey "\x00\xff\xf0"
"OK"
redis> BITPOS mykey 1 0
(integer) 8
redis> BITPOS mykey 1 2
(integer) 16
redis> set mykey "\x00\x00\x00"
"OK"
redis> BITPOS mykey 1
(integer) -1
```
查找字符串中设置或清除的第一位


### DECR 

```
DECR key
```
#### 栗子
```shell script
redis> SET mykey "10"
"OK"
redis> DECR mykey
(integer) 9
redis> SET mykey "234293482390480948029348230948"
"OK"
redis> DECR mykey
ERR ERR value is not an integer or out of range
```
将键的整数值减一


### DECRBY 

```
DECRBY key decrement
```
#### 栗子
```shell script
redis> SET mykey "10"
"OK"
redis> DECRBY mykey 3
(integer) 7
```
将键的整数值减去给定的数字


### GET 

```
GET key
```
#### 栗子
```shell script
redis> GET nonexisting
(nil)
redis> SET mykey "Hello"
"OK"
redis> GET mykey
"Hello"
```
获取key的值


### GETBIT 

```
GETBIT key offset
```
#### 栗子
```shell script
redis> SETBIT mykey 7 1
(integer) 0
redis> GETBIT mykey 0
(integer) 0
redis> GETBIT mykey 7
(integer) 1
redis> GETBIT mykey 100
(integer) 0
```
返回存储在 key 处的字符串值中 offset 处的位值


### GETRANGE 

```
GETRANGE key start end
```
#### 栗子
```shell script
redis> SET mykey "This is a string"
"OK"
redis> GETRANGE mykey 0 3
"This"
redis> GETRANGE mykey -3 -1
"ing"
redis> GETRANGE mykey 0 -1
"This is a string"
redis> GETRANGE mykey 10 100
"string"
```
获取存储在键中的字符串的子字符串


### GETSET 

```
GETSET key value
```
#### 栗子
```shell script
redis> INCR mycounter
(integer) 1
redis> GETSET mycounter "0"
"1"
redis> GET mycounter
"0"
```
设置键的字符串值并返回其旧值


### INCR 

```
INCR key
```
#### 栗子
```shell script
redis> SET mykey "10"
"OK"
redis> INCR mykey
(integer) 11
redis> GET mykey
"11"
```
将键的整数值加一

### MSETNX 

```
MSETNX key value [key value ...]
```
#### 栗子
```shell script
redis> MSETNX key1 "Hello" key2 "there"
(integer) 1
redis> MSETNX key2 "new" key3 "world"
(integer) 0
redis> MGET key1 key2 key3
1) "Hello"
2) "there"
3) (nil)
```
仅当不存在任何键时，将多个键设置为多个值

### INCRBYFLOAT 

```
INCRBYFLOAT key increment
```
#### 栗子
```shell script
redis> SET mykey 10.50
"OK"
redis> INCRBYFLOAT mykey 0.1
"10.6"
redis> INCRBYFLOAT mykey -5
"5.6"
redis> SET mykey 5.0e3
"OK"
redis> INCRBYFLOAT mykey 2.0e2
"5200"
```
将键的浮点值增加给定的数量

### MGET 

```
MGET key [key ...]
```
#### 栗子
```shell script
redis> SET key1 "Hello"
"OK"
redis> SET key2 "World"
"OK"
redis> MGET key1 key2 nonexisting
1) "Hello"
2) "World"
3) (nil)
```
获取所有给定键的值


### MSET 

```
MSET key value [key value ...]
```
#### 栗子
```shell script
redis> MSET key1 "Hello" key2 "World"
"OK"
redis> GET key1
"Hello"
redis> GET key2
"World"
```
将多个键设置为多个值


### INCRBY 

```
INCRBY key increment
```
#### 栗子
```shell script
redis> SET mykey "10"
"OK"
redis> INCRBY mykey 5
(integer) 15
```
将键的整数值增加给定的数量


### PSETEX 

```
PSETEX key milliseconds value
```
#### 栗子
```shell script
redis> PSETEX mykey 1000 "Hello"
"OK"
redis> PTTL mykey
(integer) 1000
redis> GET mykey
"Hello"
```
设置键的值和过期时间（以毫秒为单位）

### SET 

```
SET key value [EX seconds|PX milliseconds|KEEPTTL] [NX|XX] 
[GET]
```
#### 栗子
```shell script
redis> SET mykey "Hello"
"OK"
redis> GET mykey
"Hello"
redis> SET anotherkey "will expire in a minute" EX 60
"OK"
```
设置键的字符串值,可以理解为创建、设置、重设的作用

### SETBIT 

```
SETBIT key offset value
```
#### 栗子
```shell script
redis> SETBIT mykey 7 1
(integer) 0
redis> SETBIT mykey 7 0
(integer) 1
redis> GET mykey
"\u0000"
```
设置或清除存储在键中的字符串值中偏移量处的位


### SETEX 

```
SETEX key seconds value
```
#### 栗子
```shell script
redis> SETEX mykey 10 "Hello"
"OK"
redis> TTL mykey
(integer) 10
redis> GET mykey
"Hello"
```
设置密钥的值和过期时间


### SETNX 

```
SETNX key value
```
#### 栗子
```shell script
redis> SETNX mykey "Hello"
(integer) 1
redis> SETNX mykey "World"
(integer) 0
redis> GET mykey
"Hello"
```
设置键的值，仅当键不存在时


### SETRANGE 

```
SETRANGE key offset value
```
#### 栗子
```shell script
redis> SET key1 "Hello World"
"OK"
redis> SETRANGE key1 6 "Redis"
(integer) 11
redis> GET key1
"Hello Redis"
```
覆盖从指定偏移量开始的键处的字符串的一部分


### STRLEN 

```
STRLEN key
```
#### 栗子
```shell script
redis> SET mykey "Hello world"
"OK"
redis> STRLEN mykey
(integer) 11
redis> STRLEN nonexisting
(integer) 0
```
获取存储在键中的值的长度



### STRALGO 

```
STRALGO LCS algo-specific-argument [algo-specific-argument 
...]
```
#### 栗子
```shell script
redis> STRALGO LCS KEYS key1 key2 IDX
1) "matches"
2) 1) 1) 1) (integer) 4
         2) (integer) 7
      2) 1) (integer) 5
         2) (integer) 8
   2) 1) 1) (integer) 2
         2) (integer) 3
      2) 1) (integer) 0
         2) (integer) 1
3) "len"
4) (integer) 6
```
针对字符串运行算法（目前为 LCS）



Redis集合类型设置
------------


### SADD 

```
SADD key member [member ...]
```
#### 栗子
```shell script
redis> SADD myset "Hello"
(integer) 1
redis> SADD myset "World"
(integer) 1
redis> SADD myset "World"
(integer) 0
redis> SMEMBERS myset
1) "Hello"
2) "World"
```
将一个或多个成员添加到集合

### SCARD 

```
SCARD key
```
#### 栗子
```shell script
redis> SADD myset "Hello"
(integer) 1
redis> SADD myset "World"
(integer) 1
redis> SCARD myset
(integer) 2
```
获取集合中的成员数

### SDIFF 

```
SDIFF key [key ...]
```
#### 栗子
```shell script
redis> SADD key1 "a"
(integer) 1
redis> SADD key1 "b"
(integer) 1
redis> SADD key1 "c"
(integer) 1
redis> SADD key2 "c"
(integer) 1
redis> SADD key2 "d"
(integer) 1
redis> SADD key2 "e"
(integer) 1
redis> SDIFF key1 key2
1) "a"
2) "b"
```
减去多组

### SDIFFSTORE 

```
SDIFFSTORE destination key [key ...]
```
#### 栗子
```shell script
redis> SADD key1 "a"
(integer) 1
redis> SADD key1 "b"
(integer) 1
redis> SADD key1 "c"
(integer) 1
redis> SADD key2 "c"
(integer) 1
redis> SADD key2 "d"
(integer) 1
redis> SADD key2 "e"
(integer) 1
redis> SDIFFSTORE key key1 key2
(integer) 2
redis> SMEMBERS key
1) "a"
2) "b"
```
减去多个集合并将结果集合存储在一个键中

### SINTER 

```
SINTER key [key ...]
```
#### 栗子
```shell script
redis> SADD key1 "a"
(integer) 1
redis> SADD key1 "b"
(integer) 1
redis> SADD key1 "c"
(integer) 1
redis> SADD key2 "c"
(integer) 1
redis> SADD key2 "d"
(integer) 1
redis> SADD key2 "e"
(integer) 1
redis> SINTER key1 key2
1) "c"
```
交叉多个集合


### SINTERSTORE 

```
SINTERSTORE destination key [key ...]
```
#### 栗子
```shell script
redis> SADD key1 "a"
(integer) 1
redis> SADD key1 "b"
(integer) 1
redis> SADD key1 "c"
(integer) 1
redis> SADD key2 "c"
(integer) 1
redis> SADD key2 "d"
(integer) 1
redis> SADD key2 "e"
(integer) 1
redis> SINTERSTORE key key1 key2
(integer) 1
redis> SMEMBERS key
1) "c"
```
将多个集合相交并将结果集合存储在一个键中


### SISMEMBER 

```
SISMEMBER key member
```
#### 栗子
```shell script
redis> SADD myset "one"
(integer) 1
redis> SISMEMBER myset "one"
(integer) 1
redis> SISMEMBER myset "two"
(integer) 0
```
确定给定值是否是集合的成员


### SMISMEMBER 

```
SMISMEMBER key member [member ...]
```
#### 栗子
```shell script
redis> SADD myset "one"
(integer) 1
redis> SADD myset "one"
(integer) 0
redis> SMISMEMBER myset "one" "notamember"
1) (integer) 1
2) (integer) 0
```
返回与集合的给定元素关联的成员资格


### SMEMBERS 

```
SMEMBERS key
```
#### 栗子
```shell script
redis> SADD myset "Hello"
(integer) 1
redis> SADD myset "World"
(integer) 1
redis> SMEMBERS myset
1) "Hello"
2) "World"
```
获取集合中的所有成员


### SMOVE 

```
SMOVE source destination member
```
#### 栗子
```shell script
redis> SADD myset "one"
(integer) 1
redis> SADD myset "two"
(integer) 1
redis> SADD myotherset "three"
(integer) 1
redis> SMOVE myset myotherset "two"
(integer) 1
redis> SMEMBERS myset
1) "one"
redis> SMEMBERS myotherset
1) "two"
2) "three"
```
将成员从一组移到另一组


### SPOP 

```
SPOP key [count]
```
#### 栗子
```shell script
redis> SADD myset "one"
(integer) 1
redis> SADD myset "two"
(integer) 1
redis> SADD myset "three"
(integer) 1
redis> SPOP myset
"two"
redis> SMEMBERS myset
1) "one"
2) "three"
redis> SADD myset "four"
(integer) 1
redis> SADD myset "five"
(integer) 1
redis> SPOP myset 3
1) "four"
2) "five"
3) "three"
redis> SMEMBERS myset
1) "one"
```
从集合中删除并返回一个或多个随机成员


### SRANDMEMBER 

```
SRANDMEMBER key [count]
```
#### 栗子
```shell script
redis> SADD myset one two three
(integer) 3
redis> SRANDMEMBER myset
"three"
redis> SRANDMEMBER myset 2
1) "two"
2) "three"
redis> SRANDMEMBER myset -5
1) "one"
2) "two"
3) "three"
4) "three"
5) "one"
```
从一组中获取一个或多个随机成员


### SREM 

```
SREM key member [member ...]
```
#### 栗子
```shell script
redis> SADD myset "one"
(integer) 1
redis> SADD myset "two"
(integer) 1
redis> SADD myset "three"
(integer) 1
redis> SREM myset "one"
(integer) 1
redis> SREM myset "four"
(integer) 0
redis> SMEMBERS myset
1) "two"
2) "three"
```
从集合中删除一个或多个成员


### SUNION 

```
SUNION key [key ...]
```
#### 栗子
```shell script
redis> SADD key1 "a"
(integer) 1
redis> SADD key1 "b"
(integer) 1
redis> SADD key1 "c"
(integer) 1
redis> SADD key2 "c"
(integer) 1
redis> SADD key2 "d"
(integer) 1
redis> SADD key2 "e"
(integer) 1
redis> SUNION key1 key2
1) "a"
2) "c"
3) "e"
4) "b"
5) "d"
```
添加多组


### SUNIONSTORE 

```
SUNIONSTORE destination key [key ...]
```
#### 栗子
```shell script
redis> SADD key1 "a"
(integer) 1
redis> SADD key1 "b"
(integer) 1
redis> SADD key1 "c"
(integer) 1
redis> SADD key2 "c"
(integer) 1
redis> SADD key2 "d"
(integer) 1
redis> SADD key2 "e"
(integer) 1
redis> SUNIONSTORE key key1 key2
(integer) 5
redis> SMEMBERS key
1) "a"
2) "c"
3) "e"
4) "b"
5) "d"
```
添加多个集合并将结果集合存储在一个键中


Redis列表类型设置
------------

### 一些引用(可能有帮助)

| -                                                   | -                                                                                                  |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [BRPOPLPUSH ](https://redis.io/commands/brpoplpush) | 从列表中弹出一个元素，将其推入另一个列表并返回；或阻塞直到有一个可用                                     |
| [BLMOVE ](https://redis.io/commands/blmove)         | 从列表中弹出一个元素，将其推入另一个列表并返回；或阻塞直到有一个可用                                     |



### BLPOP
```
BLPOP key [key ...] timeout
```
#### 栗子
```shell script
redis> DEL list1 list2
(integer) 0
redis> RPUSH list1 a b c
(integer) 3
redis> BLPOP list1 list2 0
1) "list1"
2) "a"
```
删除并获取列表中的第一个元素，或者阻塞直到有一个元素可用


### BRPOP
```
BRPOP key [key ...] timeout
```
#### 栗子
```shell script
redis> DEL list1 list2
(integer) 0
redis> RPUSH list1 a b c
(integer) 3
redis> BRPOP list1 list2 0
1) "list1"
2) "c"
```
删除并获取列表中的最后一个元素，或者阻塞直到有一个可用


### LINDEX 

```
LINDEX key index
```
#### 栗子
```shell script
redis> LPUSH mylist "World"
(integer) 1
redis> LPUSH mylist "Hello"
(integer) 2
redis> LINDEX mylist 0
"Hello"
redis> LINDEX mylist -1
"World"
redis> LINDEX mylist 3
(nil)
```
通过索引从列表中获取元素


### LINSERT 

```
LINSERT key BEFORE|AFTER pivot element
```
#### 栗子
```shell script
redis> RPUSH mylist "Hello"
(integer) 1
redis> RPUSH mylist "World"
(integer) 2
redis> LINSERT mylist BEFORE "World" "There"
(integer) 3
redis> LRANGE mylist 0 -1
1) "Hello"
2) "There"
3) "World"
```
在列表中的另一个元素之前或之后插入一个元素


### LLEN 

```
LLEN key
```
#### 栗子
```shell script
redis> LPUSH mylist "World"
(integer) 1
redis> LPUSH mylist "Hello"
(integer) 2
redis> LLEN mylist
(integer) 2
```
获取列表的长度


### LPOP 

```
LPOP key [count]
```
#### 栗子
```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> LPOP mylist
"one"
redis> LRANGE mylist 0 -1
1) "two"
2) "three"
```
删除并获取列表中的第一个元素


### LPOS 

```
LPOS key element [RANK rank] [COUNT num-matches] [MAXLEN len]
```
#### 栗子
```shell script
redis> RPUSH mylist a b c d 1 2 3 4 3 3 3
(integer) 11
redis> LPOS mylist 3
(integer) 6
redis> LPOS mylist 3 COUNT 0 RANK 2
1) (integer) 8
2) (integer) 9
3) (integer) 10
```
返回列表中匹配元素的索引

### LPUSH 

```
LPUSH key element [element ...]
```
#### 栗子
```shell script
redis> LPUSH mylist "world"
(integer) 1
redis> LPUSH mylist "hello"
(integer) 2
redis> LRANGE mylist 0 -1
1) "hello"
2) "world"
```
将一个或多个元素添加到列表中


### LPUSHX 

```
LPUSHX key element [element ...]
```
#### 栗子
```shell script
redis> LPUSH mylist "World"
(integer) 1
redis> LPUSHX mylist "Hello"
(integer) 2
redis> LPUSHX myotherlist "Hello"
(integer) 0
redis> LRANGE mylist 0 -1
1) "Hello"
2) "World"
redis> LRANGE myotherlist 0 -1
(empty list or set)
```
仅当列表存在时才将元素添加到列表中


### LRANGE 

```
LRANGE key start stop
```
#### 栗子
```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> LRANGE mylist 0 0
1) "one"
redis> LRANGE mylist -3 2
1) "one"
2) "two"
3) "three"
redis> LRANGE mylist -100 100
1) "one"
2) "two"
3) "three"
redis> LRANGE mylist 5 10
(empty list or set)
```
从列表中获取一系列元素


### LREM 

```
LREM key count element
```
#### 栗子
```shell script
redis> RPUSH mylist "hello"
(integer) 1
redis> RPUSH mylist "hello"
(integer) 2
redis> RPUSH mylist "foo"
(integer) 3
redis> RPUSH mylist "hello"
(integer) 4
redis> LREM mylist -2 "hello"
(integer) 2
redis> LRANGE mylist 0 -1
1) "hello"
2) "foo"
```
从列表中删除元素


### LSET 

```
LSET key index element
```
#### 栗子
```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> LSET mylist 0 "four"
"OK"
redis> LSET mylist -2 "five"
"OK"
redis> LRANGE mylist 0 -1
1) "four"
2) "five"
3) "three"
```
通过索引设置列表中元素的值


### LTRIM 

```
LTRIM key start stop
```
#### 栗子
```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> LTRIM mylist 1 -1
"OK"
redis> LRANGE mylist 0 -1
1) "two"
2) "three"
```
将列表修剪到指定范围


### RPOP 

```
RPOP key [count]
```
#### 栗子
```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> RPOP mylist
"three"
redis> LRANGE mylist 0 -1
1) "one"
2) "two"
```
删除并获取列表中的最后一个元素


### RPOPLPUSH 

```
RPOPLPUSH source destination
```
#### 栗子
```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> RPOPLPUSH mylist myotherlist
"three"
redis> LRANGE mylist 0 -1
1) "one"
2) "two"
redis> LRANGE myotherlist 0 -1
1) "three"
```
删除列表中的最后一个元素，将其添加到另一个列表中并返回


### LMOVE 

```
LMOVE source destination LEFT|RIGHT LEFT|RIGHT
```
#### 栗子
```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> LMOVE mylist myotherlist RIGHT LEFT
"three"
redis> LMOVE mylist myotherlist LEFT RIGHT
"one"
redis> LRANGE mylist 0 -1
1) "two"
redis> LRANGE myotherlist 0 -1
1) "three"
2) "one"
```
从列表中弹出一个元素，将其推入另一个列表并返回


### RPUSH 

```
RPUSH key element [element ...]
```
#### 栗子
```shell script
redis> RPUSH mylist "hello"
(integer) 1
redis> RPUSH mylist "world"
(integer) 2
redis> LRANGE mylist 0 -1
1) "hello"
2) "world"
```
将一个或多个元素附加到列表


### RPUSHX 

```
RPUSHX key element [element ...]
```
#### 栗子
```shell script
redis> RPUSH mylist "Hello"
(integer) 1
redis> RPUSHX mylist "World"
(integer) 2
redis> RPUSHX myotherlist "World"
(integer) 0
redis> LRANGE mylist 0 -1
1) "Hello"
2) "World"
redis> LRANGE myotherlist 0 -1
(empty list or set)
```
仅当列表存在时才将元素附加到列表



Redis哈希类型设置
------------



### HDEL 

```
HDEL key field [field ...]
```
#### 栗子
```shell script
redis> HSET myhash field1 "foo"
(integer) 1
redis> HDEL myhash field1
(integer) 1
redis> HDEL myhash field2
(integer) 0
```
删除一个或多个哈希字段


### HEXISTS 

```
HEXISTS key field
```
#### 栗子
```shell script
redis> HSET myhash field1 "foo"
(integer) 1
redis> HEXISTS myhash field1
(integer) 1
redis> HEXISTS myhash field2
(integer) 0
```
判断哈希字段是否存在


### HGET 

```
HGET key field
```
#### 栗子
```shell script
redis> HSET myhash field1 "foo"
(integer) 1
redis> HGET myhash field1
"foo"
redis> HGET myhash field2
(nil)
```
获取哈希字段的值


### HGETALL 

```
HGETALL key
```
#### 栗子
```shell script
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HSET myhash field2 "World"
(integer) 1
redis> HGETALL myhash
1) "field1"
2) "Hello"
3) "field2"
4) "World"
```
获取哈希中的所有字段和值


### HINCRBY 

```
HINCRBY key field increment
```
#### 栗子
```shell script
redis> HSET myhash field 5
(integer) 1
redis> HINCRBY myhash field 1
(integer) 6
redis> HINCRBY myhash field -1
(integer) 5
redis> HINCRBY myhash field -10
(integer) -5
```
将哈希字段的整数值增加给定的数字


### HINCRBYFLOAT 

```
HINCRBYFLOAT key field increment
```
#### 栗子
```shell script
redis> HSET mykey field 10.50
(integer) 1
redis> HINCRBYFLOAT mykey field 0.1
"10.6"
redis> HINCRBYFLOAT mykey field -5
"5.6"
redis> HSET mykey field 5.0e3
(integer) 0
redis> HINCRBYFLOAT mykey field 2.0e2
"5200"
```
将哈希字段的浮点值增加给定的数量


### HKEYS 

```
HKEYS key
```
#### 栗子
```shell script
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HSET myhash field2 "World"
(integer) 1
redis> HKEYS myhash
1) "field1"
2) "field2"
```
获取哈希中的所有字段


### HLEN 

```
HLEN key
```
#### 栗子
```shell script
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HSET myhash field2 "World"
(integer) 1
redis> HLEN myhash
(integer) 2
```
获取哈希中的字段数


### HMGET 

```
HMGET key field [field ...]
```
#### 栗子
```shell script
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HSET myhash field2 "World"
(integer) 1
redis> HMGET myhash field1 field2 nofield
1) "Hello"
2) "World"
3) (nil)
```
获取所有给定哈希字段的值


### HMSET 

```
HMSET key field value [field value ...]
```
#### 栗子
```shell script
redis> HMSET myhash field1 "Hello" field2 "World"
"OK"
redis> HGET myhash field1
"Hello"
redis> HGET myhash field2
"World"
```
将多个哈希字段设置为多个值


### HSET 

```
HSET key field value [field value ...]
```
#### 栗子
```shell script
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HGET myhash field1
"Hello"
```
设置哈希字段的字符串值


### HSETNX 

```
HSETNX key field value
```
#### 栗子
```shell script
redis> HSETNX myhash field "Hello"
(integer) 1
redis> HSETNX myhash field "World"
(integer) 0
redis> HGET myhash field
"Hello"
```
设置哈希字段的值，仅当该字段不存在时


### HSTRLEN 

```
HSTRLEN key field
```
#### 栗子
```shell script
redis> HMSET myhash f1 HelloWorld f2 99 f3 -256
"OK"
redis> HSTRLEN myhash f1
(integer) 10
redis> HSTRLEN myhash f2
(integer) 2
redis> HSTRLEN myhash f3
(integer) 4
```
获取哈希字段值的长度


### HVALS 

```
HVALS key
```
#### 栗子
```shell script
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HSET myhash field2 "World"
(integer) 1
redis> HVALS myhash
1) "Hello"
2) "World"
```
获取哈希中的所有值



Redis排序集类型设置
------------

### BZPOPMIN

```
BZPOPMIN key [key ...] timeout
```
#### 栗子
```shell script
redis> DEL zset1 zset2
(integer) 0
redis> ZADD zset1 0 a 1 b 2 c
(integer) 3
redis> BZPOPMIN zset1 zset2 0
1) "zset1"
2) "a"
3) "0"
```
从一个或多个排序集合中删除并返回得分最低的成员，或者阻塞直到一个可用

### BZPOPMAX

```
BZPOPMAX key [key ...] timeout
```
#### 栗子
```shell script
redis> DEL zset1 zset2
(integer) 0
redis> ZADD zset1 0 a 1 b 2 c
(integer) 3
redis> BZPOPMAX zset1 zset2 0
1) "zset1"
2) "c"
3) "2"
```
从一个或多个排序集合中删除并返回得分最高的成员，或者阻塞直到一个可用



### ZADD
<!--rehype:wrap-class=row-span-2-->

```
ZADD key [NX|XX] [GT|LT] [CH] [INCR] score member [score 
member ...]
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 1 "uno"
(integer) 1
redis> ZADD myzset 2 "two" 3 "three"
(integer) 2
redis> ZRANGE myzset 0 -1 WITHSCORES
1) "one"
2) "1"
3) "uno"
4) "1"
5) "two"
6) "2"
7) "three"
8) "3"
```
将一个或多个成员添加到有序集合中，或者更新其分数（如果它已经存在）


### ZCARD 

```
ZCARD key
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZCARD myzset
(integer) 2
```
获取有序集合中的成员数



### ZSCORE 

```
ZSCORE key member
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZSCORE myzset "one"
"1"
```
获取与排序集中给定成员关联的分数



### ZCOUNT 

```
ZCOUNT key min max
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZCOUNT myzset -inf +inf
(integer) 3
redis> ZCOUNT myzset (1 3
(integer) 2
```
计算得分在给定值内的排序集中的成员


### ZDIFF 

```
ZDIFF numkeys key [key ...] [WITHSCORES]
```
#### 栗子
```shell script
redis> ZADD zset1 1 "one"
(integer) 1
redis> ZADD zset1 2 "two"
(integer) 1
redis> ZADD zset1 3 "three"
(integer) 1
redis> ZADD zset2 1 "one"
(integer) 1
redis> ZADD zset2 2 "two"
(integer) 1
redis> ZDIFF 2 zset1 zset2
1) "three"
redis> ZDIFF 2 zset1 zset2 WITHSCORES
1) "three"
2) "3"
```
减去多个排序集


### ZDIFFSTORE 

```
ZDIFFSTORE destination numkeys key [key ...]
```
#### 栗子
```shell script
redis> ZADD zset1 1 "one"
(integer) 1
redis> ZADD zset1 2 "two"
(integer) 1
redis> ZADD zset1 3 "three"
(integer) 1
redis> ZADD zset2 1 "one"
(integer) 1
redis> ZADD zset2 2 "two"
(integer) 1
redis> ZDIFFSTORE out 2 zset1 zset2
(integer) 1
redis> ZRANGE out 0 -1 WITHSCORES
1) "three"
2) "3"
```
减去多个排序集并将生成的排序集存储在新键中


### ZINCRBY 

```
ZINCRBY key increment member
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZINCRBY myzset 2 "one"
"3"
redis> ZRANGE myzset 0 -1 WITHSCORES
1) "two"
2) "2"
3) "one"
4) "3"
```
增加排序集中成员的分数


### ZINTER 

```
ZINTER numkeys key [key ...] [WEIGHTS weight [weight ...]] 
[AGGREGATE SUM|MIN|MAX] [WITHSCORES]
```
#### 栗子
```shell script
redis> ZADD zset1 1 "one"
(integer) 1
redis> ZADD zset1 2 "two"
(integer) 1
redis> ZADD zset2 1 "one"
(integer) 1
redis> ZADD zset2 2 "two"
(integer) 1
redis> ZADD zset2 3 "three"
(integer) 1
redis> ZINTER 2 zset1 zset2
1) "one"
2) "two"
redis> ZINTER 2 zset1 zset2 WITHSCORES
1) "one"
2) "2"
3) "two"
4) "4"
```
与多个排序集相交


### ZINTERSTORE 

```
ZINTERSTORE destination numkeys key [key ...] [WEIGHTS weight 
[weight ...]] [AGGREGATE SUM|MIN|MAX]
```
#### 栗子
```shell script
redis> ZADD zset1 1 "one"
(integer) 1
redis> ZADD zset1 2 "two"
(integer) 1
redis> ZADD zset2 1 "one"
(integer) 1
redis> ZADD zset2 2 "two"
(integer) 1
redis> ZADD zset2 3 "three"
(integer) 1
redis> ZINTERSTORE out 2 zset1 zset2 WEIGHTS 2 3
(integer) 2
redis> ZRANGE out 0 -1 WITHSCORES
1) "one"
2) "5"
3) "two"
4) "10"
```
将多个排序集相交并将生成的排序集存储在新键中


### ZLEXCOUNT 

```
ZLEXCOUNT key min max
```
#### 栗子
```shell script
redis> ZADD myzset 0 a 0 b 0 c 0 d 0 e
(integer) 5
redis> ZADD myzset 0 f 0 g
(integer) 2
redis> ZLEXCOUNT myzset - +
(integer) 7
redis> ZLEXCOUNT myzset [b [f
(integer) 5
```
计算给定词典范围之间的有序集合中的成员数


### ZPOPMAX 

```
ZPOPMAX key [count]
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZPOPMAX myzset
1) "three"
2) "3"
```
删除并返回排序集中得分最高的成员


### ZPOPMIN 

```
ZPOPMIN key [count]
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZPOPMIN myzset
1) "one"
2) "1"
```
删除并返回排序集中得分最低的成员


### ZRANGE 

```
ZRANGE key start stop [WITHSCORES]
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZRANGE myzset 0 -1
1) "one"
2) "two"
3) "three"
redis> ZRANGE myzset 2 3
1) "three"
redis> ZRANGE myzset -2 -1
1) "two"
2) "three"
```
按索引返回排序集中的一系列成员


### ZRANGEBYLEX 

```
ZRANGEBYLEX key min max [LIMIT offset count]
```
#### 栗子
```shell script
redis> ZADD myzset 0 a 0 b 0 c 0 d 0 e 0 f 0 g
(integer) 7
redis> ZRANGEBYLEX myzset - [c
1) "a"
2) "b"
3) "c"
redis> ZRANGEBYLEX myzset - (c
1) "a"
2) "b"
redis> ZRANGEBYLEX myzset [aaa (g
1) "b"
2) "c"
3) "d"
4) "e"
5) "f"
```
按词典顺序返回排序集中的一系列成员


### ZREVRANGEBYLEX 

```
ZREVRANGEBYLEX key max min [LIMIT offset count]
```
#### 栗子
```shell script
redis> ZADD myzset 0 a 0 b 0 c 0 d 0 e 0 f 0 g
(integer) 7
redis> ZREVRANGEBYLEX myzset [c -
1) "c"
2) "b"
3) "a"
redis> ZREVRANGEBYLEX myzset (c -
1) "b"
2) "a"
redis> ZREVRANGEBYLEX myzset (g [aaa
1) "f"
2) "e"
3) "d"
4) "c"
5) "b"
```
返回排序集中的一系列成员，按字典范围，从高到低的字符串排序。


### ZRANGEBYSCORE 

```
ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZRANGEBYSCORE myzset -inf +inf
1) "one"
2) "two"
3) "three"
redis> ZRANGEBYSCORE myzset 1 2
1) "one"
2) "two"
redis> ZRANGEBYSCORE myzset (1 2
1) "two"
redis> ZRANGEBYSCORE myzset (1 (2
(empty list or set)
```
按分数返回排序集中的一系列成员


### ZRANK 

```
ZRANK key member
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZRANK myzset "three"
(integer) 2
redis> ZRANK myzset "four"
(nil)
```
确定有序集合中成员的索引


### ZREM 

```
ZREM key member [member ...]
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREM myzset "two"
(integer) 1
redis> ZRANGE myzset 0 -1 WITHSCORES
1) "one"
2) "1"
3) "three"
4) "3"
```
从有序集合中移除一个或多个成员


### ZREMRANGEBYLEX 

```
ZREMRANGEBYLEX key min max
```
#### 栗子
```shell script
redis> ZADD myzset 0 aaaa 0 b 0 c 0 d 0 e
(integer) 5
redis> ZADD myzset 0 foo 0 zap 0 zip 0 ALPHA 0 alpha
(integer) 5
redis> ZRANGE myzset 0 -1
1) "ALPHA"
 2) "aaaa"
 3) "alpha"
 4) "b"
 5) "c"
 6) "d"
 7) "e"
 8) "foo"
 9) "zap"
10) "zip"
redis> ZREMRANGEBYLEX myzset [alpha [omega
(integer) 6
redis> ZRANGE myzset 0 -1
1) "ALPHA"
2) "aaaa"
3) "zap"
4) "zip"
```
删除给定词典范围之间的排序集中的所有成员


### ZREMRANGEBYRANK 

```
ZREMRANGEBYRANK key start stop
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREMRANGEBYRANK myzset 0 1
(integer) 2
redis> ZRANGE myzset 0 -1 WITHSCORES
1) "three"
2) "3"
```
删除给定索引内排序集中的所有成员


### ZREMRANGEBYSCORE 

```
ZREMRANGEBYSCORE key min max
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREMRANGEBYSCORE myzset -inf (2
(integer) 1
redis> ZRANGE myzset 0 -1 WITHSCORES
1) "two"
2) "2"
3) "three"
4) "3"
```
删除给定分数内排序集中的所有成员


### ZREVRANGE 

```
ZREVRANGE key start stop [WITHSCORES]
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREVRANGE myzset 0 -1
1) "three"
2) "two"
3) "one"
redis> ZREVRANGE myzset 2 3
1) "one"
redis> ZREVRANGE myzset -2 -1
1) "two"
2) "one"
```
按索引返回排序集中的一系列成员，分数从高到低排序


### ZREVRANGEBYSCORE 

```
ZREVRANGEBYSCORE key max min [WITHSCORES] [LIMIT offset count]
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREVRANGEBYSCORE myzset +inf -inf
1) "three"
2) "two"
3) "one"
redis> ZREVRANGEBYSCORE myzset 2 1
1) "two"
2) "one"
redis> ZREVRANGEBYSCORE myzset 2 (1
1) "two"
redis> ZREVRANGEBYSCORE myzset (2 (1
(empty list or set)
```
按分数返回排序集中的一系列成员，分数从高到低排序


### ZREVRANK 

```
ZREVRANK key member
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREVRANK myzset "one"
(integer) 2
redis> ZREVRANK myzset "four"
(nil)
```
确定一个成员在有序集合中的索引，分数从高到低排序




### ZUNION 

```
ZUNION numkeys key [key ...] [WEIGHTS weight [weight ...]] 
[AGGREGATE SUM|MIN|MAX] [WITHSCORES]
```
#### 栗子
```shell script
redis> ZADD zset1 1 "one"
(integer) 1
redis> ZADD zset1 2 "two"
(integer) 1
redis> ZADD zset2 1 "one"
(integer) 1
redis> ZADD zset2 2 "two"
(integer) 1
redis> ZADD zset2 3 "three"
(integer) 1
redis> ZUNION 2 zset1 zset2
1) "one"
2) "three"
3) "two"
redis> ZUNION 2 zset1 zset2 WITHSCORES
1) "one"
2) "2"
3) "three"
4) "3"
5) "two"
6) "4"
```
添加多个排序集


### ZMSCORE 

```
ZMSCORE key member [member ...]
```
#### 栗子
```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZMSCORE myzset "one" "two" "nofield"
1) "1"
2) "2"
3) (nil)
```
获取与排序集中给定成员关联的分数


### ZUNIONSTORE 

```
ZUNIONSTORE destination numkeys key [key ...] [WEIGHTS weight 
[weight ...]] [AGGREGATE SUM|MIN|MAX]
```
#### 栗子
```shell script
redis> ZADD zset1 1 "one"
(integer) 1
redis> ZADD zset1 2 "two"
(integer) 1
redis> ZADD zset2 1 "one"
(integer) 1
redis> ZADD zset2 2 "two"
(integer) 1
redis> ZADD zset2 3 "three"
(integer) 1
redis> ZUNIONSTORE out 2 zset1 zset2 WEIGHTS 2 3
(integer) 3
redis> ZRANGE out 0 -1 WITHSCORES
1) "one"
2) "5"
3) "three"
4) "9"
5) "two"
6) "10"
```
添加多个排序集并将生成的排序集存储在新键中





Redis地图坐标集类型设置
------------
<!--rehype:body-class=cols-2-->


### GEOADD 


```
GEOADD key longitude latitude member [longitude latitude member ...]
```
#### 栗子
```shell script
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEODIST Sicily Palermo Catania
"166274.1516"
redis> GEORADIUS Sicily 15 37 100 km
1) "Catania"
redis> GEORADIUS Sicily 15 37 200 km
1) "Palermo"
2) "Catania"
```
在使用排序集表示的地理空间索引中添加一个或多个地理空间项


### GEOHASH 


```
GEOHASH key member [member ...]
```
#### 栗子
```shell script
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEOHASH Sicily Palermo Catania
1) "sqc8b49rny0"
2) "sqdtr74hyu0"
```
将地理空间索引的成员作为标准 geohash 字符串返回


### GEOPOS 

```
GEOPOS key member [member ...]
```
#### 栗子
```shell script
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEOPOS Sicily Palermo Catania NonExisting
1) 1) "13.36138933897018433"
   2) "38.11555639549629859"
2) 1) "15.08726745843887329"
   2) "37.50266842333162032"
3) (nil)
```
返回地理空间索引成员的经度和纬度


### GEODIST 

```
GEODIST key member1 member2 [m|km|ft|mi]
```
#### 栗子
```shell script
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEODIST Sicily Palermo Catania
"166274.1516"
redis> GEODIST Sicily Palermo Catania km
"166.2742"
redis> GEODIST Sicily Palermo Catania mi
"103.3182"
redis> GEODIST Sicily Foo Bar
(nil)
```
返回地理空间索引的两个成员之间的距离


### GEORADIUS 

```
GEORADIUS key longitude latitude radius m|km|ft|mi [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT 
count] [ASC|DESC] [STORE key] [STOREDIST key]
```
#### 栗子
```shell script
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEORADIUS Sicily 15 37 200 km WITHDIST
1) 1) "Palermo"
   2) "190.4424"
2) 1) "Catania"
   2) "56.4413"
redis> GEORADIUS Sicily 15 37 200 km WITHCOORD
1) 1) "Palermo"
   2) 1) "13.36138933897018433"
      2) "38.11555639549629859"
2) 1) "Catania"
   2) 1) "15.08726745843887329"
      2) "37.50266842333162032"
redis> GEORADIUS Sicily 15 37 200 km WITHDIST WITHCOORD
1) 1) "Palermo"
   2) "190.4424"
   3) 1) "13.36138933897018433"
      2) "38.11555639549629859"
2) 1) "Catania"
   2) "56.4413"
   3) 1) "15.08726745843887329"
      2) "37.50266842333162032"
```
查询表示地理空间索引的排序集，以获取与某个点的给定最大距离匹配的成员


### GEORADIUSBYMEMBER 

```
GEORADIUSBYMEMBER key member radius m|km|ft|mi [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT count] 
[ASC|DESC] [STORE key] [STOREDIST key]
```
#### 栗子
```shell script
redis> GEOADD Sicily 13.583333 37.316667 "Agrigento"
(integer) 1
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEORADIUSBYMEMBER Sicily Agrigento 100 km
1) "Agrigento"
2) "Palermo"
```
查询表示地理空间索引的排序集，以获取与成员的给定最大距离相匹配的成员


### GEOSEARCH 

```
GEOSEARCH key [FROMMEMBER member] [FROMLONLAT longitude latitude] [BYRADIUS radius m|km|ft|mi] 
[BYBOX width height m|km|ft|mi] [ASC|DESC] [COUNT count] [WITHCOORD] [WITHDIST] [WITHHASH]
```
#### 栗子
```shell script
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEOADD Sicily 12.758489 38.788135 "edge1"   17.241510 38.788135 "edge2"
(integer) 2
redis> GEOSEARCH Sicily FROMLONLAT 15 37 BYRADIUS 200 km ASC
1) "Catania"
2) "Palermo"
redis> GEOSEARCH Sicily FROMLONLAT 15 37 BYBOX 400 400 km ASC
1) "Catania"
2) "Palermo"
3) "edge2"
4) "edge1"
```
查询表示地理空间索引的排序集，以获取框或圆区域内的成员。

### 一些引用(可能有帮助)
| -                                                           | -                                                                                                                                             |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [GEOSEARCHSTORE ](https://redis.io/commands/geosearchstore) | 查询表示地理空间索引的排序集以获取框或圆区域内的成员，并将结果存储在另一个键中。 |




Redis超文本日志类型设置
------------



### PFADD 

```
PFADD key element [element ...]
```
#### 栗子
```shell script
redis> PFADD hll a b c d e f g
(integer) 1
redis> PFCOUNT hll
(integer) 7
```
将指定的元素添加到指定的HyperLogLog。

### PFCOUNT 

```
PFCOUNT key [key ...]
```
#### 栗子
```shell script
redis> PFADD hll foo bar zap
(integer) 1
redis> PFADD hll zap zap zap
(integer) 0
redis> PFADD hll foo bar
(integer) 0
redis> PFCOUNT hll
(integer) 3
redis> PFADD some-other-hll 1 2 3
(integer) 1
redis> PFCOUNT hll some-other-hll
(integer) 6
```
返回HyperLogLog在键处观察到的集合的近似基数。

### PFMERGE 

```
PFMERGE destkey sourcekey [sourcekey ...]
```
#### 栗子
```shell script
redis> PFADD hll1 foo bar zap a
(integer) 1
redis> PFADD hll2 a b c foo
(integer) 1
redis> PFMERGE hll3 hll1 hll2
"OK"
redis> PFCOUNT hll3
(integer) 6
```
将N个不同的HyperLogLogs合并成一个。


Redis流命令
------------
<!--rehype:body-class=cols-2-->


### 一些引用(可能有帮助)

| -                                                   | -                                                                                                                                                                                  |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [XINFO ](https://redis.io/commands/xinfo)           | 获取有关流和消费者组的信息 |
| [XDEL ](https://redis.io/commands/xdel)             | 从流中删除指定的条目。返回实际删除的项目数，如果某些 ID 不存在，则可能与传递的 ID 数不同 |
| [XREAD ](https://redis.io/commands/xread)           | 返回多个流中从未见过的元素，其 ID 大于调用者为每个流报告的 ID |
| [XGROUP ](https://redis.io/commands/xgroup)         | 创建、销毁和管理消费者组 |
| [XREADGROUP ](https://redis.io/commands/xreadgroup) | 使用消费者组从流中返回新条目，或访问给定消费者的待处理条目的历史记录 |
| [XCLAIM ](https://redis.io/commands/xclaim)         | 更改（或获取）消费者组中消息的所有权，就好像消息已传递给指定的消费者一样 |
| [XPENDING ](https://redis.io/commands/xpending)     | 从流消费者组待定条目列表中返回信息和条目，这些信息是已获取但从未确认的消息 |





### XADD 

```
XADD key [MAXLEN [=|~] length] [NOMKSTREAM] *|ID field value [field value ...]
```
#### 栗子
```shell script
redis> XADD mystream * name Sara surname OConnor
"1609040574632-0"
redis> XADD mystream * field1 value1 field2 value2 field3 value3
"1609040574632-1"
redis> XLEN mystream
(integer) 2
redis> XRANGE mystream - +
1) 1) "1609040574632-0"
   2) 1) "name"
      2) "Sara"
      3) "surname"
      4) "OConnor"
2) 1) "1609040574632-1"
   2) 1) "field1"
      2) "value1"
      3) "field2"
      4) "value2"
      5) "field3"
      6) "value3"
```
将新条目附加到流


### XTRIM 

```
XTRIM key MAXLEN [=|~] length
```
#### 栗子
```shell script
redis> XADD mystream * field1 A field2 B field3 C field4 D
"1609040575750-0"
redis> XTRIM mystream MAXLEN 2
(integer) 0
redis> XRANGE mystream - +
1) 1) "1609040575750-0"
   2) 1) "field1"
      2) "A"
      3) "field2"
      4) "B"
      5) "field3"
      6) "C"
      7) "field4"
      8) "D"
```
将流修剪为（大约如果传递了“~”）特定大小



### XRANGE 

```
XRANGE key start end [COUNT count]
```
#### 栗子
```shell script
redis> XADD writers * name Virginia surname Woolf
"1609040578002-0"
redis> XADD writers * name Jane surname Austen
"1609040578002-1"
redis> XADD writers * name Toni surname Morrison
"1609040578003-0"
redis> XADD writers * name Agatha surname Christie
"1609040578003-1"
redis> XADD writers * name Ngozi surname Adichie
"1609040578003-2"
redis> XLEN writers
(integer) 5
redis> XRANGE writers - + COUNT 2
1) 1) "1609040578002-0"
   2) 1) "name"
      2) "Virginia"
      3) "surname"
      4) "Woolf"
2) 1) "1609040578002-1"
   2) 1) "name"
      2) "Jane"
      3) "surname"
      4) "Austen"
```
返回流中的一系列元素，其 ID 与指定的 ID 间隔相匹配


### XREVRANGE 

```
XREVRANGE key end start [COUNT count]
```
#### 栗子
```shell script
redis> XADD writers * name Virginia surname Woolf
"1609040579130-0"
redis> XADD writers * name Jane surname Austen
"1609040579130-1"
redis> XADD writers * name Toni surname Morrison
"1609040579130-2"
redis> XADD writers * name Agatha surname Christie
"1609040579131-0"
redis> XADD writers * name Ngozi surname Adichie
"1609040579131-1"
redis> XLEN writers
(integer) 5
redis> XREVRANGE writers + - COUNT 1
1) 1) "1609040579131-1"
   2) 1) "name"
      2) "Ngozi"
      3) "surname"
      4) "Adichie"
```
返回流中的一系列元素，ID 与指定的 ID 间隔相匹配，与 XRANGE 相比，顺序相反（从大到小的 ID）


### XLEN 

```
XLEN key
```
#### 栗子
```shell script
redis> XADD mystream * item 1
"1609040580250-0"
redis> XADD mystream * item 2
"1609040580250-1"
redis> XADD mystream * item 3
"1609040580251-0"
redis> XLEN mystream
(integer) 3
```
返回流中的条目数



### XACK 

```
XACK key group ID [ID ...]
```
#### 栗子
```shell script
redis> XACK mystream mygroup 1526569495631-0
ERR Unknown or disabled command 'XACK'
```
将待处理消息标记为已正确处理，有效地将其从消费者组的待处理条目列表中删除，该命令的返回值是成功确认的消息数，即我们实际能够在PEL中解析的ID。




集群方面的东西
------------
<!--rehype:body-class=cols-2-->



### 节点、集群

| -                                                                                         | -                                                                |
|-------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [CLUSTER ADDSLOTS ](https://redis.io/commands/cluster-addslots)                           | 为接收节点分配新的哈希槽 |
| [CLUSTER BUMPEPOCH](https://redis.io/commands/cluster-bumpepoch)                          | 提前集群配置纪元 |
| [CLUSTER COUNT-FAILURE-REPORTS ](https://redis.io/commands/cluster-count-failure-reports) | 返回给定节点的活动故障报告数 |
| [CLUSTER COUNTKEYSINSLOT ](https://redis.io/commands/cluster-countkeysinslot)             | 返回指定哈希槽中本地键的个数 |
| [CLUSTER DELSLOTS ](https://redis.io/commands/cluster-delslots)                           | 在接收节点中将哈希槽设置为未绑定 |
| [CLUSTER FAILOVER ](https://redis.io/commands/cluster-failover)                           | 强制副本对其主副本执行手动故障转移 |
| [CLUSTER FLUSHSLOTS](https://redis.io/commands/cluster-flushslots)                        | 删除节点自身的slot信息 |
| [CLUSTER FORGET ](https://redis.io/commands/cluster-forget)                               | 从节点表中删除一个节点 |
| [CLUSTER GETKEYSINSLOT ](https://redis.io/commands/cluster-getkeysinslot)                 | 返回指定哈希槽中的本地键名 |
| [CLUSTER INFO](https://redis.io/commands/cluster-info)                                    | 提供有关 Redis 集群节点状态的信息 |
| [CLUSTER KEYSLOT ](https://redis.io/commands/cluster-keyslot)                             | 返回指定键的哈希槽 |
| [CLUSTER MEET ](https://redis.io/commands/cluster-meet)                                   | 强制节点集群与另一个节点握手 |
| [CLUSTER MYID](https://redis.io/commands/cluster-myid)                                    | 返回节点id |
| [CLUSTER NODES](https://redis.io/commands/cluster-nodes)                                  | 获取节点的集群配置 |
| [CLUSTER REPLICATE ](https://redis.io/commands/cluster-replicate)                         | 将节点重新配置为指定主节点的副本 |
| [CLUSTER RESET ](https://redis.io/commands/cluster-reset)                                 | 重置 Redis 集群节点 |
| [CLUSTER SAVECONFIG](https://redis.io/commands/cluster-saveconfig)                        | 强制节点将集群状态保存在磁盘上 |
| [CLUSTER SET-CONFIG-EPOCH ](https://redis.io/commands/cluster-set-config-epoch)           | 在新节点中设置配置纪元 |
| [CLUSTER SETSLOT ](https://redis.io/commands/cluster-setslot)                             | 将哈希槽绑定到特定节点 |
| [CLUSTER SLAVES ](https://redis.io/commands/cluster-slaves)                               | 列出指定主节点的副本节点 |
| [CLUSTER REPLICAS ](https://redis.io/commands/cluster-replicas)                           | 列出指定主节点的副本节点 |
| [CLUSTER SLOTS](https://redis.io/commands/cluster-slots)                                  | 获取集群插槽数组到节点映射 |
| [READONLY](https://redis.io/commands/readonly)                                            | 为到集群副本节点的连接启用读取查询 |
| [READWRITE](https://redis.io/commands/readwrite)                                          | 禁用对集群副本节点连接的读取查询 |




### 交易

| -                                            | -                                                                   |
|----------------------------------------------|---------------------------------------------------------------------|
| [DISCARD](https://redis.io/commands/discard) | 丢弃 MULTI 之后发出的所有命令 |
| [EXEC](https://redis.io/commands/exec)       | 执行 MULTI 之后发出的所有命令 |
| [MULTI](https://redis.io/commands/multi)     | 标记事务块的开始 |
| [UNWATCH](https://redis.io/commands/unwatch) | 忘记所有监视的键 |
| [WATCH ](https://redis.io/commands/watch)    | 观察给定的键以确定MULTI/EXEC块的执行 |




### 脚本 

| -                                                         | -                                                    |
|-----------------------------------------------------------|------------------------------------------------------|
| [EVAL ](https://redis.io/commands/eval)                   | 执行 Lua 脚本服务器端 |
| [EVALSHA ](https://redis.io/commands/evalsha)             | 执行 Lua 脚本服务器端 |
| [SCRIPT DEBUG ](https://redis.io/commands/script-debug)   | 为执行的脚本设置调试模式 |
| [SCRIPT EXISTS ](https://redis.io/commands/script-exists) | 检查脚本缓存中是否存在脚本 |
| [SCRIPT FLUSH](https://redis.io/commands/script-flush)    | 从脚本缓存中删除所有脚本 |
| [SCRIPT KILL](https://redis.io/commands/script-kill)      | 终止当前正在执行的脚本 |
| [SCRIPT LOAD ](https://redis.io/commands/script-load)     | 将指定的 Lua 脚本加载到脚本缓存中 |



### 发布操作 

| -                                                       | -                                                                          |
|---------------------------------------------------------|----------------------------------------------------------------------------|
| [PSUBSCRIBE ](https://redis.io/commands/psubscribe)     | 侦听发布到与给定模式匹配的频道的消息 |
| [PUBSUB ](https://redis.io/commands/pubsub)             | 检查 Pub/Sub 子系统的状态 |
| [PUBLISH ](https://redis.io/commands/publish)           | 向频道发布消息 |
| [PUNSUBSCRIBE ](https://redis.io/commands/punsubscribe) | 停止监听发布到与给定模式匹配的频道的消息 |
| [SUBSCRIBE ](https://redis.io/commands/subscribe)       | 收听发布到给定频道的消息 |
| [UNSUBSCRIBE ](https://redis.io/commands/unsubscribe)   | 停止收听发布到给定频道的消息 |

