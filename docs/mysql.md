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
<!--rehype:wrap-class=col-span-2-->

备份特定表

```bash
mysqldump -u user -p db_name table1 table2 > tables_backup.sql
```
<!--rehype:className=wrap-text -->

备份多个数据库

```bash
mysqldump -u user -p --databases db1 db2 > multi_backup.sql
```
<!--rehype:className=wrap-text -->

备份所有数据库

```bash
mysqldump -u user -p --all-databases > all_backup.sql
```
<!--rehype:className=wrap-text -->

备份时压缩

```bash
mysqldump -u user -p db_name | gzip > db_backup.sql.gz
```
<!--rehype:className=wrap-text -->

导出不带架构的数据库

```shell
mysqldump -u user -p db_name --no-data=true --add-drop-table=false > db.sql
```
<!--rehype:className=wrap-text -->

仅导出数据

```bash
mysqldump -u user -p --no-create-info db_name > only_data.sql
```
<!--rehype:className=wrap-text -->

仅导出结构

```bash
mysqldump -u user -p --no-data db_name > only_schema.sql
```
<!--rehype:className=wrap-text -->

导出时忽略某些表

```bash
mysqldump -u user -p db_name --ignore-table=db_name.table1 --ignore-table=db_name.table2 > partial.sql
```
<!--rehype:className=wrap-text -->

### 恢复备份
<!--rehype:wrap-class=row-span-2-->

恢复单个数据库备份

```bash
mysql -u user -p db_name < db_backup.sql
```

恢复多个数据库（带 `--databases` 选项备份的）

```bash
mysql -u user -p < multi_backup.sql
```

恢复所有数据库（使用 `--all-databases` 备份的）

```bash
mysql -u user -p < all_backup.sql
```

从 gzip 压缩的备份恢复

```bash
gunzip < db_backup.sql.gz | mysql -u user -p db_name

# 或：

zcat db_backup.sql.gz | mysql -u user -p db_name
```
<!--rehype:className=wrap-text -->

恢复单张表（从 `mysqldump` 单表导出文件）

```bash
mysql -u user -p db_name < table1_backup.sql
```
<!--rehype:className=wrap-text -->

先创建数据库再导入（如果备份中不包含 CREATE DATABASE）

```bash
mysql -u user -p -e "CREATE DATABASE IF NOT EXISTS db_name;"

mysql -u user -p db_name < db_backup.sql
```
<!--rehype:className=wrap-text -->

恢复指定字符集（防止乱码）

```bash
mysql --default-character-set=utf8mb4 -u user -p db_name < db_backup.sql
```
<!--rehype:className=wrap-text -->

恢复时跳过某些错误（如重复键）

```bash
mysql -u user -p --force db_name < db_backup.sql
```
<!--rehype:className=wrap-text -->

恢复到远程主机数据库

```bash
mysql -h remote_host -u user -p db_name < db_backup.sql
```
<!--rehype:className=wrap-text -->


### 错误处理（Error Handling）
<!--rehype:wrap-class=col-span-2-->

| 语句                          | 说明                             |
| :--------------------------- | :------------------------------ |
| `SHOW ERRORS;`               | 显示最近的错误                   |
| `SHOW WARNINGS;`             | 显示最近的警告                   |
| `SHOW COUNT(*) ERRORS;`      | 显示错误数量                     |
| `SHOW COUNT(*) WARNINGS;`    | 显示警告数量                     |
| `EXPLAIN SELECT ...;`        | 分析查询执行计划                 |
| `SHOW ENGINE INNODB STATUS;` | 查看 InnoDB 状态和死锁信息       |
| `SHOW PROFILE;` | 显示语句的资源消耗（需开启 profiling） |
| `SHOW PROFILES;` | 显示所有已记录的 profiling 数据 |
| `SHOW PROCESSLIST;` | 查看当前线程，排查长时间运行或阻塞的语句 |
| `SHOW STATUS LIKE 'Last_error%';` | 查看上次语句执行的错误信息 |
| `SHOW VARIABLES LIKE 'log_%';` | 查看错误日志相关配置 |
| `SHOW BINARY LOGS;` | 查看二进制日志，排查事务或复制异常 |
| `SHOW SLAVE STATUS\G` | 查看主从复制错误（用于主从复制场景） |
| `SHOW MASTER STATUS;` | 查看主库状态，辅助分析复制问题 |
<!--rehype:className=left-align-->

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

将列 c1 重命名为 c2

```sql
ALTER TABLE t1 CHANGE c1 c2 datatype;
ALTER TABLE table_name RENAME COLUMN c1 TO c2;
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

## 函数

### 聚合函数

| 函数      | 解释                           |
| :--------- |:-------------------------------|
| `SUM()`   | 计算一列值的总和               |
| `AVG()`   | 计算一列值的平均值             |
| `COUNT()` | 计算行数，可选择性地忽略NULL值 |
| `MAX()`   | 找出一列的最大值               |
| `MIN()`   | 找出一列的最小值               |
| `GROUP_CONCAT()` | 将一组值连接成单一字符串，可指定分隔符，常用于分组。|

### 数学函数

<!--rehype:wrap-class=col-span-2 -->

| 函数           | 解释                                           | 示例语法                | 结果     |
| :-------------- | :---------------------------------------------- | :----------------------- | :-------- |
| `ABS(x)`       | 返回数值的绝对值                               | `ABS(-5)`               | 5        |
| `ROUND(x,y)`   | 四舍五入到指定的小数位数，y为小数位数，默认为0 | `ROUND(3.1415,2)`       | 3.14     |
| `FLOOR(x)`     | 向下取整至最接近的整数                         | `FLOOR(3.7)`            | 3        |
| `CEIL(x)`      | 向上取整至最接近的整数                         | `CEIL(3.3)`             | 4        |
| `SQRT(x)`      | 返回一个数的平方根                             | `SQRT(16)`              | 4        |
| `MOD(x,y)`     | 返回x除以y的余数                               | `MOD(10,3)`             | 1        |
| `RAND([seed])` | 返回0到1之间的随机数，可选种子值               | `RAND()` 或 `RAND(123)` | 0.345... |

### 日期和时间函数

| 函数            | 解释                       |
| :--------------- | :-------------------------- |
| `NOW()`         | 返回当前日期和时间         |
| `CURDATE()`     | 返回当前日期               |
| `CURTIME()`     | 返回当前时间               |
| `DATE_FORMAT()` | 格式化日期时间输出         |
| `DATEDIFF()`    | 计算两个日期之间相差的天数 |
| `STR_TO_DATE()` | 将字符串转换为日期格式     |

### 字符串函数

<!--rehype:wrap-class=col-span-2 -->

| 函数                           | 解释                     | 示例语法                     | 结果            |
| :------------------------------ | :------------------------ | ---------------------------- | --------------- |
| `CONCAT(s1,s2,...)`            | 连接两个或更多字符串     | `CONCAT('Hello, ','World!')` | 'Hello, World!' |
| `LOWER(str)`                   | 转换为小写               | `LOWER('HELLO')`             | 'hello'         |
| `UPPER(str)`                   | 转换为大写               | `UPPER('world')`             | 'WORLD'         |
| `TRIM(str)`                    | 去除字符串两端空格       | `TRIM('  Hello  ')`          | 'Hello'         |
| `LEFT(str,len)`                | 提取字符串左侧的若干字符 | `LEFT('Hello', 3)`           | 'Hel'           |
| `RIGHT(str,len)`               | 提取字符串右侧的若干字符 | `RIGHT('Hello', 2)`          | 'lo'            |
| `SUBSTR(str,pos,len)`          | 提取字符串中的一部分     | `SUBSTR('Hello', 2, 3)`      | 'ell'           |
| `REPLACE(str,from_str,to_str)` | 替换字符串中的部分文本   | `REPLACE('Hello', 'l', 'L')` | 'HeLLo'         |

### 高级函数

<!--rehype:wrap-class=col-span-3 -->

| 函数                                | 解释                                               | 示例语法                                                     | 结果                                     |
| ----------------------------------- | -------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| BIN(x)                              | 返回 x 的二进制编码，x 为十进制数。                | `BIN(2)`                                                     | `10`                                     |
| BINARY(s)                           | 将字符串 s 转换为二进制字符串。                    | `BINARY 'RUNOOB'`                                            | `'RUNOOB'`（显示效果，实际存储为二进制） |
| CASE                                | 复合条件函数，根据条件返回不同结果。               | `CASE WHEN 1 > 0 THEN '1 > 0' WHEN 2 > 0 THEN '2 > 0' ELSE '3 > 0' END` | `'1 > 0'`                                |
| CAST(x AS type)                     | 转换数据类型。                                     | `CAST('2017-08-29' AS DATE)`                                 | `2017-08-29`                             |
| COALESCE(expr1, expr2, ..., expr_n) | 返回第一个非空表达式的值。                         | `COALESCE(NULL, NULL, 'runoob.com', NULL, 'google.com')`     | `'runoob.com'`                           |
| CONNECTION_ID()                     | 返回当前连接的唯一ID。                             | `CONNECTION_ID()`                                            | `4292835`（示例值）                      |
| CONV(x, f1, f2)                     | 将 f1 进制数转换为 f2 进制数。                     | `CONV(15, 10, 2)`                                            | `1111`                                   |
| CONVERT(s USING cs)                 | 转换字符串 s 的字符集为 cs。                       | `CHARSET(CONVERT('ABC' USING gbk))`                          | `gbk`                                    |
| CURRENT_USER()                      | 返回当前用户。                                     | `CURRENT_USER()`                                             | `guest@%`                                |
| DATABASE()                          | 返回当前数据库名。                                 | `DATABASE()`                                                 | `runoob`                                 |
| IF(expr, v1, v2)                    | 条件表达式，expr 为真则 v1，否则 v2。              | `IF(1 > 0, '正确', '错误')`                                  | `'正确'`                                 |
| IFNULL(v1, v2)                      | 如果 v1 不为 NULL，则返回 v1，否则返回 v2。        | `IFNULL(NULL, 'Hello Word')`                                 | `'Hello Word'`                           |
| ISNULL(expression)                  | 判断表达式是否为 NULL。                            | `ISNULL(NULL)`                                               | `1`                                      |
| LAST_INSERT_ID()                    | 返回最近生成的 AUTO_INCREMENT 值。                 | `LAST_INSERT_ID()`                                           | `6`（示例值）                            |
| NULLIF(expr1, expr2)                | 若 expr1 等于 expr2，则返回 NULL，否则返回 expr1。 | `NULLIF(25, 25)`                                             | `NULL`                                   |

另见
---

- [SQL 基础教程](http://www.w3school.com.cn/sql/index.asp) _(w3school.com.cn)_
- [SQL 语句教程](http://www.1keydata.com/cn/sql/sql-count.php) _(1keydata.com)_
- [21分钟 MySQL 基础入门](https://jaywcjlove.github.io/mysql-tutorial/21-minutes-MySQL-basic-entry.html) _(jaywcjlove.github.io)_
