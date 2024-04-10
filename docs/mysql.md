MySQL 备忘清单
===

本备忘单旨在快速理解 [MySQL](https://mysql.com) 所涉及的主要概念，提供了最常用的SQL语句，供您参考。

入门
---

### 介绍
<!--rehype:wrap-class=row-span-3-->

MySQL 为关系型数据库(Relational Database Management System)，一个关系型数据库由一个或数个表格组成，如下所示的一个表格

----

```bash
    name ▼ 键            ▼ 列(col)
┌┈┈┈┈┬┈┈┈┈┈┈┈┈┬┈┈┈┈┈┈┬┈┈┈┈┈┈┈┐
┆ id ┆ name   ┆ uid  ┆ level ┆  ◀ 表头header
├┈┈┈┈┼┈┈┈┈┈┈┈┈┤┈┈┈┈┈┈┤┈┈┈┈┈┈┈┤
┆  1 ┆ mysql  ┆ 0    ┆ 3     ┆
├┈┈┈┈┼┈┈┈┈┈┈┈┈┤┈┈┈┈┈┈┤┈┈┈┈┈┈┈┤
┆  2 ┆ redis  ┆ 12   ┆ 1     ┆  ◀ 行 row
└┈┈┈┈┴┈┈┈┈┈┈┈┈┴┈┈┈┈┈┈┴┈┈┈┈┈┈┈┘
    redis ▲ 值
```

----

- `表头(header)` 每一列的名称
- `列(col)` 具有相同数据类型的数据的集合
- `行(row)` 每一行用来描述某个人/物的具体信息
- `值(value)` 行的具体信息，每个值与该列数据类型相同
- `键(key)` 用来识别某个特定的人/物的方法，有唯一性

### 登录MySQL

```shell
# 默认用户名<root>，-p 是密码，
# ⚠️参数后面不需要空格
mysql -h 127.0.0.1 -u <用户名> -p<密码>
mysql -D 数据库名 -h 主机名 -u 用户名 -p
mysql -h <host> -P <端口号> -u <user> -p [db_name]
mysql -h <host> -u <user> -p [db_name]
```

### 常用的
<!--rehype:wrap-class=row-span-3-->

#### 数据库 Database

:-|:-
:-|:-
`CREATE DATABASE` db `;` | `创建`数据库
`SHOW DATABASES;`        | `列出`数据库
`USE` db`;`              | `切换`到数据库
`CONNECT` db `;`         | `切换`到数据库
`DROP DATABASE` db`;`    | `删除`数据库

#### 表 Table

:-|:-
:-|:-
`SHOW TABLES;`           | 列出当前数据库的表
`SHOW FIELDS FROM` t`;`  | 表的列表字段
`DESC` t`;`              | 显示表格结构
`SHOW CREATE TABLE`t`;` | 显示创建表sql
`TRUNCATE TABLE`t`;`    | 删除表中的所有数据
`DROP TABLE`t`;`        | 删除表格

#### Proccess

:-|:-
:-|:-
`show processlist;` | 列出进程
`kill` pid`;`       | 杀死进程

### 查看 MySQL 信息

```shell
# 显示当前mysql的version的各种信息
mysql> status;
# 显示当前mysql的version信息
mysql> select version(); 
# 查看 MySQL 端口号
mysql> show global variables like 'port';
```

### 退出MySQL会话

```bash
mysql> exit 
```

退出 `quit;` 或 `\q;` 一样的效果

### 备份

创建备份

```sql
mysqldump -u user -p db_name > db.sql
```

导出不带架构的数据库

```shell
mysqldump -u user -p db_name --no-data=true --add-drop-table=false > db.sql
```
<!--rehype:className=wrap-text -->

恢复备份

```shell
mysql -u user -p db_name < db.sql
```

MySQL 示例
------

### 管理表格

创建一个包含三列的新表

```sql
CREATE TABLE t (
    id    INT,
    name  VARCHAR DEFAULT NOT NULL,
    price INT DEFAULT 0
    PRIMARY KEY(id)
);
```

从数据库中删除表

```sql
DROP TABLE t ;
```

向表中添加新列

```sql
ALTER TABLE t ADD column;
```

从表中删除列c

```sql
ALTER TABLE t DROP COLUMN c ;
```

添加约束

```sql
ALTER TABLE t ADD constraint;
```

删除约束

```sql
ALTER TABLE t DROP constraint;
```

将表从t1重命名为t2

```sql
ALTER TABLE t1 RENAME TO t2;
```

将列c1重命名为c2

```sql
ALTER TABLE t1 RENAME c1 TO c2 ;
```

将列c1的数据类型改为datatype

```sql
ALTER TABLE t1 MODIFY c1 datatype;
```

删除表中的所有数据

```sql
TRUNCATE TABLE t;
```

### 从表中查询数据

从表中查询列c1、c2中的数据

```sql
SELECT c1, c2 FROM t
```

查询表中的所有行和列

```sql
SELECT * FROM t
```

查询数据并使用条件筛选行

```sql
SELECT c1, c2 FROM t
WHERE condition
```

查询表中的不同行

```sql
SELECT DISTINCT c1 FROM t
WHERE condition
```

按升序或降序对结果集排序

```sql
SELECT c1, c2 FROM t
ORDER BY c1 ASC [DESC]
```

跳过行的偏移并返回下n行

```sql
SELECT c1, c2 FROM t
ORDER BY c1 
LIMIT n OFFSET offset
```

使用聚合函数对行进行分组

```sql
SELECT c1, aggregate(c2)
FROM t
GROUP BY c1
```

使用HAVING子句筛选组

```sql
SELECT c1, aggregate(c2)
FROM t
GROUP BY c1
HAVING condition
```

### 从多个表查询
<!--rehype:wrap-class=row-span-2-->

内部连接 t1 和 t2

```sql
SELECT c1, c2 
FROM t1
INNER JOIN t2 ON condition
```

左连接t1和t1

```sql
SELECT c1, c2 
FROM t1
LEFT JOIN t2 ON condition
```

右连接t1和t2

```sql
SELECT c1, c2 
FROM t1
RIGHT JOIN t2 ON condition
```

执行完全外部连接

```sql
SELECT c1, c2 
FROM t1
FULL OUTER JOIN t2 ON condition
```

生成表中行的笛卡尔积

```sql
SELECT c1, c2 
FROM t1
CROSS JOIN t2
```

执行交叉连接的另一种方法

```sql
SELECT c1, c2 
FROM t1, t2
```

使用INNER Join子句将t1连接到自身

```sql
SELECT c1, c2
FROM t1 A
INNER JOIN t1 B ON condition
```

使用SQL运算符，合并两个查询中的行

```sql
SELECT c1, c2 FROM t1
UNION [ALL]
SELECT c1, c2 FROM t2
```

返回两个查询的交集

```sql
SELECT c1, c2 FROM t1
INTERSECT
SELECT c1, c2 FROM t2
```

从另一个结果集中减去一个结果集

```sql
SELECT c1, c2 FROM t1
MINUS
SELECT c1, c2 FROM t2
```

使用模式匹配%查询行_

```sql
SELECT c1, c2 FROM t1
WHERE c1 [NOT] LIKE pattern
```

查询列表中的行

```sql
SELECT c1, c2 FROM t
WHERE c1 [NOT] IN value_list
```

查询两个值之间的行

```sql
SELECT c1, c2 FROM t
WHERE  c1 BETWEEN low AND high
```

检查表中的值是否为NULL

```sql
SELECT c1, c2 FROM t
WHERE  c1 IS [NOT] NULL
```

### 使用 SQL 约束

将c1和c2设置为主键

```sql
CREATE TABLE t(
    c1 INT, c2 INT, c3 VARCHAR,
    PRIMARY KEY (c1,c2)
);
```

将c2列设置为外键

```sql
CREATE TABLE t1(
    c1 INT PRIMARY KEY,  
    c2 INT,
    FOREIGN KEY (c2) REFERENCES t2(c2)
);
```

使c1和c2中的值唯一

```sql
CREATE TABLE t(
    c1 INT, c1 INT,
    UNIQUE(c2,c3)
);
```

确保c1>0和c1>=c2中的值

```sql
CREATE TABLE t(
  c1 INT, c2 INT,
  CHECK(c1> 0 AND c1 >= c2)
);
```

c2列中的设置值不为NULL

```sql
CREATE TABLE t(
     c1 INT PRIMARY KEY,
     c2 VARCHAR NOT NULL
);
```

### 修改数据

在表格中插入一行

```sql
INSERT INTO t(column_list)
VALUES(value_list);
```

在表格中插入多行

```sql
INSERT INTO t(column_list)
VALUES (value_list), 
       (value_list), …;
```

将行从t2插入t1

```sql
INSERT INTO t1(column_list)
SELECT column_list
FROM t2;
```

更新列c1中所有行的新值

```sql
UPDATE t
SET c1 = new_value;
```

更新列c1、c2中与条件匹配的值

```sql
UPDATE t
SET c1 = new_value, 
        c2 = new_value
WHERE condition;
```

删除表中的所有数据

```sql
DELETE FROM t;
```

删除表中的行子集

```sql
DELETE FROM t
WHERE condition;
```

### 管理视图
<!--rehype:wrap-class=row-span-2-->

创建由c1和c2组成的新视图

```sql
CREATE VIEW v(c1,c2) 
AS
SELECT c1, c2
FROM t;
```

使用选中选项创建新视图

```sql
CREATE VIEW v(c1,c2) 
AS
SELECT c1, c2
FROM t;
WITH [CASCADED | LOCAL] CHECK OPTION;
```

创建递归视图

```sql
CREATE RECURSIVE VIEW v 
AS
select-statement -- anchor part
UNION [ALL]
select-statement; -- recursive part
```

创建临时视图

```sql
CREATE TEMPORARY VIEW v 
AS
SELECT c1, c2
FROM t;
```

删除视图

```sql
DROP VIEW view_name;
```

### 管理触发器

创建或修改触发器

```sql
CREATE OR MODIFY TRIGGER trigger_name
WHEN EVENT
ON table_name TRIGGER_TYPE
EXECUTE stored_procedure;
```

#### WHEN

:-|:-
:-|:-
`BEFORE` | 在事件发生前调用
`AFTER`  | 事件发生后调用

#### EVENT

:-|:-
:-|:-
`INSERT` | 为INSERT调用
`UPDATE` | 调用UPDATE
`DELETE` | 调用DELETE

#### TRIGGER_TYPE

:-|:-
:-|:-
`FOR EACH ROW`       | -
`FOR EACH STATEMENT` | -

### 管理索引

在t表的c1和c2上创建索引

```sql
CREATE INDEX idx_name 
ON t(c1,c2);
```

在t表的c3、c4上创建唯一索引

```sql
CREATE UNIQUE INDEX idx_name
ON t(c3,c4)
```

删除索引

```sql
DROP INDEX idx_name ON t;
```

MySQL 数据类型
---------

### Strings

| -            | -                           |
|--------------|-----------------------------|
| `CHAR`       | String (0 - 255)            |
| `VARCHAR`    | String (0 - 255)            |
| `TINYTEXT`   | String (0 - 255)            |
| `TEXT`       | String (0 - 65535)          |
| `BLOB`       | String (0 - 65535)          |
| `MEDIUMTEXT` | String (0 - 16777215)       |
| `MEDIUMBLOB` | String (0 - 16777215)       |
| `LONGTEXT`   | String (0 - 429496­7295)    |
| `LONGBLOB`   | String (0 - 429496­7295)    |
| `ENUM`       | One of preset options       |
| `SET`        | Selection of preset options |

### Date & time

| Data Type   | Format              |
|-------------|---------------------|
| `DATE` | yyyy-MM-dd          |
| `TIME` | hh:mm:ss            |
| `DATETIME` | yyyy-MM-dd hh:mm:ss |
| `TIMESTAMP` | yyyy-MM-dd hh:mm:ss |
| `YEAR` | yyyy                |

### Numeric

| -             | -                                                             |
|---------------|---------------------------------------------------------------|
| `TINYINT x`   | Integer (-128 to 127)                                         |
| `SMALLINT x`  | Integer (-32768 to 32767)                                     |
| `MEDIUMINT x` | Integer (-8388608 to 8388607)                                 |
| `INT x`       | Integer (-2147­483648 to 214748­3647)                         |
| `BIGINT x`    | Integer (-9223­372­036­854­775808 to 922337­203­685­477­5807) |
| `FLOAT`       | Decimal (precise to 23 digits)                                |
| `DOUBLE`      | Decimal (24 to 53 digits)                                     |
| `DECIMAL`     | "­DOU­BLE­" stored as string                                  |

另见
---

- [SQL 基础教程](http://www.w3school.com.cn/sql/index.asp) _(w3school.com.cn)_
- [SQL 语句教程](http://www.1keydata.com/cn/sql/sql-count.php) _(1keydata.com)_
- [21分钟 MySQL 基础入门](https://jaywcjlove.github.io/mysql-tutorial/21-minutes-MySQL-basic-entry.html) _(jaywcjlove.github.io)_
