SQLite 备忘清单
===

本备忘单旨在快速理解 [SQLite](https://sqlite.com/) 所涉及的主要概念，提供了最常用的SQL语句，供您参考。

入门
---

### 介绍
<!--rehype:wrap-class=row-span-3-->

SQLite 是遵守ACID的关系数据库管理系统，它包含在一个相对小的C程序库中。与许多其它数据库管理系统不同，SQLite不是一个客户端/服务器结构的数据库引擎，而是被集成在用户程序中。

SQLite遵守ACID，实现了大多数SQL标准。它使用动态的、弱类型的SQL语法。它作为嵌入式数据库，是应用程序，如网页浏览器，在本地/客户端存储数据的常见选择。它可能是最广泛部署的数据库引擎，因为它正在被一些流行的浏览器、操作系统、嵌入式系统所使用。同时，它有许多程序设计语言的语言绑定。

----

安装
---

### 安装方式

- windows
  
    从 [SQLite](https://www.sqlite.org/download.html) 下载
    
    您需要下载 `sqlite-tools-win32-*.zip` 和 `sqlite-dll-win32-*.zip` 压缩文件。
    
    创建文件夹 `C:\sqlite`，并在此文件夹下解压上面两个压缩文件，将得到 `sqlite3.def、sqlite3.dll` 和 `sqlite3.exe` 文件。

    添加 `C:\sqlite` 到 `PATH` 环境变量。

- linux 
  
  linux 自带 `sqlite3`，或者通过 `apt-get/yum/brew` 等安装。

- macOS
  
  `brew install sqlite` 安装

操作
---

### 连接数据库

  **`SQLite` 通常不需要复杂的配置。创建数据库时，如果文件不存在，SQLite 会自动创建它。**

  ```bash
  # 不存在则新建
  >sqlite3 mydatabase.db
  ```

### 数据库操作

```shell
# 显示数据库名称及对应文件
sqlite> .databases
main: /home/user/sqlite/database.db r/w

# 显示已经设置的值
sqlite> .show 
        echo: off
         eqp: off
     explain: auto
     headers: off
        mode: list
   nullvalue: ""
      output: stdout
colseparator: "|"
rowseparator: "\n"
       stats: off
       width:
    filename: api.db

# 以 sql 的形式 dump 数据库
sqlite> .dump
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE api (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    host TEXT NOT NULL,
    port INTEGER NOT NULL,
    path TEXT NOT NULL
);
INSERT INTO api VALUES(1,'example.com',8080,'/api/v1');

# 备份数据库
sqlite> .backup back

# 备份单张表
sqlite> .dump user

# 退出
sqlite> .exit
```

### 数据表操作

```sh
# 创建表
sqlite> create table user(id integer primary key, name text);

# 查看所有表
sqlite> .tables

# 查看表结构
sqlite> .schema user

# 导入文件到表中
sqlite> .import user.csv user

# 设置查询显示列名称
sqlite> .head on

```

### 输出模式设置

```sh
# 设置输出模式为 csv
sqlite> .mode csv
sqlite> select * from api;
id,host,port,path
1,example.com,8080,/api/v1

# 输出为 markdown
sqlite> select * from api;
| id |      host       | port |  path   |
|----|-----------------|------|---------|
| 1  | example.com     | 8080 | /api/v1 |

# 支持 ascii box column csv html insert json line list markdown qbox quote table tabs tcl 类型，省略展示
```

### 支持 sql

```sql
-- 常用 sql

-- 创建表
create table user(id integer primary key, name text);

-- 删除表
drop table user;

-- 重命名表
alter table user rename to user_new;

-- 插入
-- 单条
insert into user(name) values('test');
-- 多条
insert into user(name) values('test1'),('test2');

-- 查询
select * from user;
-- 去重查询
select distinct name from user;
-- 统计
select count(id) from user;
-- limit
select * from user limit 2;
-- 条件查询
select * from user where id > 1;
-- 模糊查询
select * from user where name like '%test%';
-- group by
select name, count(id) from user group by name;
-- 排序
select * from user order by id desc;
-- 聚合函数
select max(id) from user;

-- 更新
update user set name='test3' where id=1;

-- 删除
delete from user where id=1;
```

### 事务支持

**事务**具有原子性(Atomicity)、一致性(Consistency)、隔离性(Isolation)、持久性(Durability)四个标准属性，缩写为 ACID。

```sql
-- 开始事务
begin transaction;
-- 操作
update user set name='test4' where id=1;
-- 回滚
rollback;
-- 提交
commit;
```

### 命令行

`.help`

|命令|描述|
|:---|:---|
|.backup ?DB? FILE	 |备份 DB 数据库（默认是 "main"）到 FILE 文件。|
|.bail ON\|OFF	     |发生错误后停止。默认为 OFF。|
|.databases	         |列出数据库的名称及其所依附的文件。
|.dump ?TABLE?	     |以 SQL 文本格式转储数据库。如果指定了 TABLE 表，则只转储匹配 LIKE 模式的 TABLE 表。
|.echo ON\|OFF	     |开启或关闭 echo 命令。
|.exit	             |退出 SQLite 提示符。
|.explain ON\|OFF	   |开启或关闭适合于 EXPLAIN 的输出模式。如果没有带参数，则为 EXPLAIN on，即开启 EXPLAIN。
|.header(s) ON\|OFF	 |开启或关闭头部显示。
|.help	             |显示消息。
|.import FILE TABLE	 |导入来自 FILE 文件的数据到 TABLE 表中。
|.indices ?TABLE?	   |显示所有索引的名称。如果指定了 TABLE 表，则只显示匹配 LIKE 模式的 TABLE 表的索引。
|.load FILE ?ENTRY?	 |加载一个扩展库。
|.log FILE\|off	     |开启或关闭日志。FILE 文件可以是 stderr（标准错误）/stdout（标准输出）。
|.nullvalue STRING	 |在 NULL 值的地方输出 STRING 字符串。
|.output FILENAME	   |发送输出到 FILENAME 文件。
|.output stdout	     |发送输出到屏幕。
|.print STRING...	   |逐字地输出 STRING 字符串。
|.prompt MAIN CONTINUE	|替换标准提示符。
|.quit	             |退出 SQLite 提示符。
|.read FILENAME	     |执行 FILENAME 文件中的 SQL。
|.schema ?TABLE?	   |显示 CREATE 语句。如果指定了 TABLE 表，则只显示匹配 LIKE 模式的 TABLE 表。
|.separator STRING	 |改变输出模式和 .import 所使用的分隔符。
|.show	             |显示各种设置的当前值。
|.stats ON\|OFF	     |开启或关闭统计。
|.tables ?PATTERN?	 |列出匹配 LIKE 模式的表的名称。
|.timeout MS	       |尝试打开锁定的表 MS 毫秒。
|.width NUM          |NUM	为 "column" 模式设置列宽度。
|.timer ON\|OFF	     |开启或关闭 CPU 定时器。
|.mode MODE	         | 设置输出模式，MODE 可以是下列之一:csv 逗号分隔的值 <br/>column 左对齐的列 <br/>html HTML 的 \<table\> 代码 <br/>insert TABLE 表的 SQL 插入（insert）语句 <br/>line 每行一个值 <br/>list 由 .separator 字符串分隔的值 <br/>tabs 由 Tab 分隔的值 <br/> tcl TCL 列表元素<br/>


参考资料
---
- [百科](https://zh.wikipedia.org/wiki/SQLite)
- [SQLite](https://www.sqlite.org/)
- [菜鸟教程](https://www.runoob.com/sqlite/sqlite-tutorial.html)