PostgreSQL 备忘清单
===

[PostgreSQL](https://www.postgresql.org/docs/current/) 备忘清单为您提供了常用的 PostgreSQL 命令和语句。

入门
---------------

### 入门

切换和连接

```shell
$ sudo -u postgres psql
```

列出所有数据库

```shell
postgres=# \l
```

连接到名为 postgres 的数据库

```shell
postgres=# \c postgres
```

断开

```shell
postgres=# \q
postgres=# \!
```

### psql 命令
<!--rehype:wrap-class=col-span-2-->

参数 | 示例 | 说明
:- |- | -
`[-d] <database>`   | psql -d mydb                                 | 连接到数据库
`-U`                | psql -U john mydb                            | 以特定用户身份连接
`-h` `-p`           | psql -h localhost -p 5432 mydb               | 连接到主机/端口
`-U` `-h` `-p` `-d` | psql -U admin -h 192.168.1.5 -p 2506 -d mydb | 连接远程 PostgreSQL
`-W`                | psql -W mydb                                 | 强制密码
`-c`                | psql -c '\c postgres' -c '\dt'               | 执行 SQL 查询或命令
`-H`                | psql -c "\l+" -H postgres > database.html    | 生成 HTML 报告
`-l`                | psql -l                                      | 列出所有数据库
`-f`                | psql mydb -f file.sql                        | 从文件执行命令
`-V`                | psql -V                                      | 打印 psql 版本
<!--rehype:className=show-header-->

### 获得帮助

:- | -
:- | -
`\h`        | SQL 命令语法帮助
`\h` DELETE | DELETE SQL 语句语法
`\?`        | PostgreSQL 命令列表

在 PostgreSQL 控制台中运行

PostgreSQL 工作
-------

### Recon 观察

显示版本

```sql
SHOW SERVER_VERSION;
```

显示系统状态

```sql
\conninfo
```

显示环境变量

```sql
SHOW ALL;
```

列出用户

```sql
SELECT rolname FROM pg_roles;
```

显示当前用户

```sql
SELECT current_user;
```

显示当前用户的权限

```sql
\du
```

显示当前数据库

```sql
SELECT current_database();
```

显示数据库中的所有表

```sql
\dt
```

列出函数

```sql
\df <schema>
```

### Databases 数据库

列出数据库

```sql
\l
```

连接到数据库

```sql
\c <database_name>
```

显示当前数据库

```sql
SELECT current_database();
```

[创建数据库](http://www.postgresql.org/docs/current/static/sql-createdatabase.html)

```sql
CREATE DATABASE <database_name> WITH OWNER <username>;
```
<!--rehype:className=wrap-text-->

[删除数据库](http://www.postgresql.org/docs/current/static/sql-dropdatabase.html)

```sql
DROP DATABASE IF EXISTS <database_name>;
```
<!--rehype:className=wrap-text-->

[重命名数据库](http://www.postgresql.org/docs/current/static/sql-alterdatabase.html)

```sql
ALTER DATABASE <old_name> RENAME TO <new_name>;
```
<!--rehype:className=wrap-text-->

### Tables 表

列出当前数据库中的表

```sql
\dt
SELECT table_schema,table_name FROM information_schema.tables ORDER BY table_schema,table_name;
```
<!--rehype:className=wrap-text-->

全局列表

```sql
\dt *.*.
SELECT * FROM pg_catalog.pg_tables
```

列出表结构

```sql
\d <table_name>
\d+ <table_name>
SELECT column_name, data_type, character_maximum_length
FROM INFORMATION_SCHEMA.COLUMNS
WHERE table_name = '<table_name>';
```
<!--rehype:className=wrap-text-->

[创建表](http://www.postgresql.org/docs/current/static/sql-createtable.html)

```sql
CREATE TABLE <table_name>(
  <column_name> <column_type>,
  <column_name> <column_type>
);
```

创建表，主键自增

```sql
CREATE TABLE <table_name> (
  <column_name> SERIAL PRIMARY KEY
);
```

[删除表](http://www.postgresql.org/docs/current/static/sql-droptable.html)

```sql
DROP TABLE IF EXISTS <table_name> CASCADE;
```

### Permissions 权限

成为 postgres 用户，如果您有权限错误

```shell
sudo su - postgres
psql
```

[授予](http://www.postgresql.org/docs/current/static/sql-grant.html) 对数据库的所有权限

```sql
GRANT ALL PRIVILEGES ON DATABASE <db_name> TO <user_name>;
```
<!--rehype:className=wrap-text-->

授予数据库连接权限

```sql
GRANT CONNECT ON DATABASE <db_name> TO <user_name>;
```
<!--rehype:className=wrap-text-->

授予架构权限

```sql
GRANT USAGE ON SCHEMA public TO <user_name>;
```

授予函数权限

```sql
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO <user_name>;
```
<!--rehype:className=wrap-text-->

授予在所有表上选择、更新、插入、删除的权限

```sql
GRANT SELECT, UPDATE, INSERT ON ALL TABLES IN SCHEMA public TO <user_name>;
```
<!--rehype:className=wrap-text-->

在表上授予权限

```sql
GRANT SELECT, UPDATE, INSERT ON <table_name> TO <user_name>;
```
<!--rehype:className=wrap-text-->

授予对表的选择权限

```sql
GRANT SELECT ON ALL TABLES IN SCHEMA public TO <user_name>;
```
<!--rehype:className=wrap-text-->

### Columns 列

[添加栏目](http://www.postgresql.org/docs/current/static/sql-altertable.html)

```sql
ALTER TABLE <table_name> IF EXISTS
ADD <column_name> <data_type> [<constraints>];
```
<!--rehype:className=wrap-text-->

更新栏

```sql
ALTER TABLE <table_name> IF EXISTS
ALTER <column_name> TYPE <data_type> [<constraints>];
```
<!--rehype:className=wrap-text-->

删除列

```sql
ALTER TABLE <table_name> IF EXISTS
DROP <column_name>;
```

将列更新为自增主键

```sql
ALTER TABLE <table_name>
ADD COLUMN <column_name> SERIAL PRIMARY KEY;
```
<!--rehype:className=wrap-text-->

使用自动递增的主键插入表中

```sql
INSERT INTO <table_name>
VALUES (DEFAULT, <value1>);
INSERT INTO <table_name> (<column1_name>,<column2_name>)
VALUES ( <value1>,<value2> );
```
<!--rehype:className=wrap-text-->

### Data 数据

[选择](http://www.postgresql.org/docs/current/static/sql-select.html) 所有数据

```sql
SELECT * FROM <table_name>;
```

读取一行数据

```sql
SELECT * FROM <table_name> LIMIT 1;
```

搜索数据

```sql
SELECT * FROM <table_name> WHERE <column_name> = <value>;
```
<!--rehype:className=wrap-text-->

[插入](http://www.postgresql.org/docs/current/static/sql-insert.html) 数据

```sql
INSERT INTO <table_name> VALUES( <value_1>, <value_2> );
```
<!--rehype:className=wrap-text-->

[更新](http://www.postgresql.org/docs/current/static/sql-update.html) 数据

```sql
UPDATE <table_name>
SET <column_1> = <value_1>, <column_2> = <value_2>
WHERE <column_1> = <value>;
```
<!--rehype:className=wrap-text-->

[删除](http://www.postgresql.org/docs/current/static/sql-delete.html) 所有数据

```sql
DELETE FROM <table_name>;
```

删除特定数据

```sql
DELETE FROM <table_name>
WHERE <column_name> = <value>;
```

### Users 用户
<!--rehype:wrap-class=col-span-2-->

列出角色

```sql
SELECT rolname FROM pg_roles;
```

[创建用户](http://www.postgresql.org/docs/current/static/sql-createuser.html)

```sql
CREATE USER <user_name> WITH PASSWORD '<password>';
```

[删除用户](http://www.postgresql.org/docs/current/static/sql-dropuser.html)

```sql
DROP USER IF EXISTS <user_name>;
```

[更改](http://www.postgresql.org/docs/current/static/sql-alterrole.html) 用户密码

```sql
ALTER ROLE <user_name> WITH PASSWORD '<password>';
```

### Schema

列出 Schemas

```sql
\dn
SELECT schema_name FROM information_schema.schemata;
SELECT nspname FROM pg_catalog.pg_namespace;
```

[创建架构](http://www.postgresql.org/docs/current/static/sql-createschema.html)

```sql
CREATE SCHEMA IF NOT EXISTS <schema_name>;
```

[删除模式](http://www.postgresql.org/docs/current/static/sql-dropschema.html)

```sql
DROP SCHEMA IF EXISTS <schema_name> CASCADE;
```

PostgreSQL 命令
-----------

### 表

:- | -
:- | -
`\d <table>`     | 描述表
`\d+ <table>`    | 详细描述表格
`\dt`            | 列出当前模式中的表
`\dt *.*`        | 列出所有模式中的表
`\dt <schema>.*` | 列出架构的表
`\dp`            | 列出表访问权限
`\det[+]`        | 列出外部表

### 查询缓冲区

:- | -
:- | -
`\e [FILE]`  | 编辑查询缓冲区(或文件)
`\ef [FUNC]` | 编辑函数定义
`\p`         | 显示内容
`\r`         | 重置(清除)查询缓冲区
`\s [FILE]`  | 显示历史记录或保存到文件
`\w FILE`    | 将查询缓冲区写入文件

### 信息
<!--rehype:wrap-class=row-span-4-->

:- | -
:- | -
`\l[+]`         | 列出所有数据库
`\dn[S+]`       | 列出架构
`\di[S+]`       | 列出索引
`\du[+]`        | 列出角色
`\ds[S+]`       | 列出序列
`\df[antw][S+]` | 列出函数
`\deu[+]`       | 列出用户映射
`\dv[S+]`       | 列表视图
`\dl`           | 列出大对象
`\dT[S+]`       | 列出数据类型
`\da[S]`        | 列出聚合
`\db[+]`        | 列出表空间
`\dc[S+]`       | 列出转化
`\dC[+]`        | 列出演员表
`\ddp`          | 列出默认权限
`\dd[S]`        | 显示对象描述
`\dD[S+]`       | 列出域
`\des[+]`       | 列出国外服务器
`\dew[+]`       | 列出外部数据包装器
`\dF[+]`        | 列出文本搜索配置
`\dFd[+]`       | 列出文本搜索词典
`\dFp[+]`       | 列出文本搜索解析器
`\dFt[+]`       | 列出文本搜索模板
`\dL[S+]`       | 列出程序语言
`\do[S]`        | 列出运算符
`\dO[S+]`       | 列出排序规则
`\drds`         | 列出每个数据库的角色设置
`\dx[+]`        | 列出扩展

`S`：显示系统对象，`+`：附加细节

### 连接

:- | -
:- | -
`\c [DBNAME]`          | 连接到新数据库
`\encoding [ENCODING]` | 显示或设置客户端编码
`\password [USER]`     | 更改密码
`\conninfo`            | 显示信息

### 格式化

:- | -
:- | -
`\a`           | 在未对齐和对齐之间切换
`\C [STRING]`  | 设置表格标题，如果没有则取消设置
`\f [STRING]`  | 显示或设置未对齐的字段分隔符
`\H`           | 切换 HTML 输出模式
`\t [on\|off]` | 仅显示行
`\T [STRING]`  | 设置或取消设置 HTML \<table\> 标签属性
`\x [on\|off]` | 切换扩展输出

### 输入输出

:- | -
:- | -
`\copy ...`       | 导入/导出表 _另见：_ [复制](#导入导出-csv)
`\echo [STRING]`  | 打印字符串
`\i FILE`         | 执行文件
`\o [FILE]`       | 将所有结果导出到文件
`\qecho [STRING]` | 输出流的字符串

### 变量

:- | -
:- | -
`\prompt [TEXT] NAME` | 设置变量
`\set [NAME [VALUE]]` | 设置变量 _(如果没有参数，则列出所有变量)_
`\unset NAME`         | 删除变量

### 杂项

:- | -
:- | -
`\cd [DIR]`        | 更改目录
`\timing [on\|off]` | 切换时间
`\! [COMMAND]`     | 在shell中执行
`\! ls -l`         | 在shell中列出所有

### 大对象

- `\lo_export LOBOID FILE`
- `\lo_import FILE [COMMENT]`
- `\lo_list`
- `\lo_unlink LOBOID`

各种各样的
-------------

### 备份

使用 pg_dumpall 备份所有数据库

```shell
$ pg_dumpall -U postgres > all.sql
```

使用 pg_dump 备份数据库

```shell
$ pg_dump -d mydb -f mydb_backup.sql
```

- &nbsp; `-a` &nbsp; 只转储数据，而不是模式(schema)
- &nbsp; `-s` &nbsp; 只转储模式，不转储数据
- &nbsp; `-c` &nbsp; 在重新创建之前删除数据库
- &nbsp; `-C` &nbsp; 还原前创建数据库
- &nbsp; `-t` &nbsp; 仅转储命名表
- &nbsp; `-F` &nbsp; 格式(`c`：自定义，`d`：目录，`t`：tar)
<!--rehype:className=style-none-->

使用 `pg_dump -?` 获取完整的选项列表

### 恢复

使用 psql 恢复数据库

```shell
$ psql -U user mydb < mydb_backup.sql
```

使用 pg_restore 恢复数据库

```shell
$ pg_restore -d mydb mydb_backup.sql -c
```

- &nbsp; `-U` &nbsp; 指定数据库用户
- &nbsp; `-c` &nbsp; 在重新创建之前删除数据库
- &nbsp; `-C` &nbsp; 还原前创建数据库
- &nbsp; `-e` &nbsp; 如果遇到错误退出
- &nbsp; `-F` &nbsp; 格式(`c`:自定义，`d`:目录，`t`:tar，`p`:纯文本sql(默认))
<!--rehype:className=style-none-->

使用 `pg_restore -?` 获取完整的选项列表

### 远程访问

获取 postgresql.conf 的位置

```shell
$ psql -U postgres -c 'SHOW config_file'
```

附加到 postgresql.conf

```shell
listen_addresses = '*'
```

附加到 pg_hba.conf(与 postgresql.conf 相同的位置)

```shell
host  all  all  0.0.0.0/0  md5
host  all  all  ::/0       md5
```

重启 PostgreSQL 服务器

```shell
$ sudo systemctl restart postgresql
```

### 导入/导出 CSV

将表格导出为 CSV 文件

```sql
\copy table TO '<path>' CSV
\copy table(col1,col1) TO '<path>' CSV
\copy (SELECT...) TO '<path>' CSV
```

将 CSV 文件导入表格

```sql
\copy table FROM '<path>' CSV
\copy table(col1,col1) FROM '<path>' CSV
```

另见：[复制](https://www.postgresql.org/docs/current/sql-copy.html)

### 跨版本升级

pg_upgrade 跨版本升级

```shell
$ /usr/lib/postgresql/16/bin/pg_upgrade \
  -b /usr/lib/postgresql/15/bin \
  -B /usr/lib/postgresql/16/bin \
  -d /var/lib/postgresql/15/main \
  -D /var/lib/postgresql/16/main \
  -o " -c config_file=/etc/postgresql/15/main/postgresql.conf" \
  -O " -c config_file=/etc/postgresql/16/main/postgresql.conf"
```

- &nbsp; `-b` &nbsp; 旧版本二进制文件目录
- &nbsp; `-B` &nbsp; 新版本二进制文件目录
- &nbsp; `-d` &nbsp; 旧版本数据目录
- &nbsp; `-D` &nbsp; 新版本数据目录
- &nbsp; `-o` &nbsp; 旧版本主配置文件
- &nbsp; `-O` &nbsp; 新版本主配置文件
- &nbsp; `-c` &nbsp; 仅`check`，不执行升级，可先加`-c`检查是否有报错，没有报错再运行升级
<!--rehype:className=style-none-->

使用 `pg_upgrade -?` 获取完整的选项列表

另见
----

- [Posgres-cheatsheet](https://gist.github.com/apolloclark/ea5466d5929e63043dcf#posgres-cheatsheet) _(gist.github.com)_
