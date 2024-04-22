Oracle 备忘清单
===

入门
---
<!--rehype:body-class=cols-2-->

### SELECT 语句

```sql
SELECT * FROM beverages WHERE field1 = 'Kona' AND field2 = 'coffee' AND field3 = 122;
```
<!--rehype:className=wrap-text-->

### SELECT INTO 语句

```sql
SELECT name,address,phone_number INTO v_employee_name,v_employee_address,v_employee_phone_number FROM employee WHERE employee_id = 6;
```
<!--rehype:className=wrap-text-->

### INSERT 语句
<!--rehype:wrap-class=row-span-2-->

使用 VALUES 关键字插入

```sql
INSERT INTO table_name VALUES ('Value1', 'Value2', ... );
INSERT INTO table_name(Column1, Column2, ... ) VALUES ( 'Value1', 'Value2', ... );
```
<!--rehype:className=wrap-text-->

使用 SELECT 语句插入

```sql
INSERT INTO table_name(SELECT Value1, Value2, ... from table_name );
INSERT INTO table_name(Column1, Column2, ... ) ( SELECT Value1, Value2, ... from table_name );
```
<!--rehype:className=wrap-text-->

### DELETE 语句

```sql
DELETE FROM table_name WHERE some_column=some_value
DELETE FROM customer WHERE sold = 0;
```

### UPDATE 语句

```sql
-- 更新该表的整个列，设置 `state` 列所有值为 `CA`
UPDATE customer SET state='CA';
-- 更新表的具体记录eg：
UPDATE customer SET name='Joe' WHERE customer_id=10;
-- 当 `paid` 列大于零时，将列 `invoice` 更新为 `paid`
UPDATE movies SET invoice='paid' WHERE paid > 0;
```

SEQUENCES
---

### CREATE SEQUENCE

序列的语法是

```sql
CREATE SEQUENCE sequence_name
    MINVALUE value
    MAXVALUE value
    START WITH value
    INCREMENT BY value
    CACHE value;
```

例如

```sql
CREATE SEQUENCE supplier_seq
    MINVALUE 1
    MAXVALUE 999999999999999999999999999
    START WITH 1
    INCREMENT BY 1
    CACHE 20;
```

### ALTER SEQUENCE
<!--rehype:wrap-class=col-span-2-->

将序列增加一定数量

```sql
ALTER SEQUENCE <sequence_name> INCREMENT BY <integer>;
ALTER SEQUENCE seq_inc_by_ten  INCREMENT BY 10;
```

改变序列的最大值

```sql
ALTER SEQUENCE <sequence_name> MAXVALUE <integer>;
ALTER SEQUENCE seq_maxval  MAXVALUE  10;
```

设置序列循环或不循环

```sql
ALTER SEQUENCE <sequence_name> <CYCLE | NOCYCLE>;
ALTER SEQUENCE seq_cycle NOCYCLE;
```

配置序列以缓存值

```sql
ALTER SEQUENCE <sequence_name> CACHE <integer> | NOCACHE;
ALTER SEQUENCE seq_cache NOCACHE;
```

设置是否按顺序返回值

```sql
ALTER SEQUENCE <sequence_name> <ORDER | NOORDER>;
ALTER SEQUENCE seq_order NOORDER;
ALTER SEQUENCE seq_order;
```

### 从字符串生成查询
<!--rehype:wrap-class=row-span-2-->

有时需要从字符串创建查询

```sql
PROCEDURE oracle_runtime_query_pcd IS
    TYPE ref_cursor IS REF CURSOR;
    l_cursor        ref_cursor;

    v_query         varchar2(5000);
    v_name          varchar2(64);
BEGIN
    v_query := 'SELECT name FROM employee WHERE employee_id=5';
    OPEN l_cursor FOR v_query;
    LOOP
      FETCH l_cursor INTO v_name;
      EXIT WHEN l_cursor%NOTFOUND;
    END LOOP;
    CLOSE l_cursor;
END;
```
<!--rehype:className=wrap-text-->

这是一个如何完成动态查询的非常简单的示例

### 字符串操作

```sql
length( string1 );
```

---

```sql
SELECT length('hello world') FROM dual;
```

这将返回 11，因为参数由 11 个字符组成，包括空格

```sql
SELECT lengthb('hello world') FROM dual;
SELECT lengthc('hello world') FROM dual;
SELECT length2('hello world') FROM dual;
SELECT length4('hello world') FROM dual;
```

这些也返回 `11`，因为调用的函数是等价的

### Instr
<!--rehype:wrap-class=row-span-2-->

`Instr`（在字符串中）返回一个整数，该整数指定字符串中子字符串的位置。程序员可以指定他们想要检测的字符串的外观以及起始位置。不成功的搜索返回 `0`

```sql
instr( string1, string2, [ start_position ], [ nth_appearance ] )
```
<!--rehype:className=wrap-text-->

---

```sql
instr( 'oracle pl/sql cheatsheet', '/');
```

这将返回 `10`，因为第一次出现的 `/` 是第十个字符

```sql
instr( 'oracle pl/sql cheatsheet', 'e', 1, 2);
```
<!--rehype:className=wrap-text-->

这将返回 `17`，因为第二次出现的 `e` 是第 `17` 个字符

```sql
instr( 'oracle pl/sql cheatsheet', '/', 12, 1);
```
<!--rehype:className=wrap-text-->

这将返回 `0`，因为第一次出现的 `/` 在起点之前，即第 `12` 个字符

### Replace

```sql
replace(string1, string_to_replace, [ replacement_string ] );

replace('i am here','am','am not');
```
<!--rehype:className=wrap-text-->

这返回 `i am not here`

### Substr

```sql
SELECT substr( 'oracle pl/sql cheatsheet', 8, 6) FROM dual;
```
<!--rehype:className=wrap-text-->

返回 `pl/sql`，因为 `pl/sql` 中的 `p` 在字符串中的第 `8` 个位置（从 `oracle` 中的 `o` 处的 `1` 开始计算）

```sql
SELECT substr( 'oracle pl/sql cheatsheet', 15) FROM dual;
```
<!--rehype:className=wrap-text-->

返回 `cheatsheet`，因为 `c` 在字符串中的第 `15` 个位置，`t`是字符串中的最后一个字符。

```sql
SELECT substr('oracle pl/sql cheatsheet', -10, 5) FROM dual;
```
<!--rehype:className=wrap-text-->

返回 `cheat`，因为 `c` 是字符串中的第 `10` 个字符，从字符串末尾以 `t` 作为位置 `1` 开始计算。

### Trim

这些函数可用于从字符串中过滤不需要的字符。默认情况下，它们会删除空格，但也可以指定要删除的字符集

```sql
trim ( [ leading | trailing | both ] [ trim-char ] from string-to-be-trimmed );
trim ('   删除两侧的空格     ');
```
<!--rehype:className=wrap-text-->

这将返回“`删除两侧的空格`”

```sql
ltrim ( string-to-be-trimmed [, trimming-char-set ] );
ltrim ('   删除左侧的空格     ');
```
<!--rehype:className=wrap-text-->

这将返回“`删除左侧的空格`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;”

```sql
rtrim ( string-to-be-trimmed [, trimming-char-set ] );
rtrim ('   删除右侧的空格     ');
```
<!--rehype:className=wrap-text-->

这将返回“&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`删除右侧的空格`”

DDL SQL
---

### 创建表

创建表的语法

```sql
CREATE TABLE [table name]
      ( [column name] [datatype], ... );
```

示例：

```sql
 CREATE TABLE employee
       (id int, name varchar(20));
```

### 添加列

添加列的语法

```sql
ALTER TABLE [table name]
    ADD ( [column name] [datatype], ... );
```

示例：

```sql
ALTER TABLE employee
    ADD (id int)
```

### 修改列

修改列的语法

```sql
ALTER TABLE [table name]
    MODIFY ( [column name] [new datatype]);
```

`ALTER` 表语法和示例：

```sql
ALTER TABLE employee
    MODIFY( sickHours s float );
```

### 删除列

删除列的语法

```sql
ALTER TABLE [table name]
    DROP COLUMN [column name];
```

示例：

```sql
ALTER TABLE employee
    DROP COLUMN vacationPay;
```

### 约束类型和代码

类型代码 | 类型描述 | 作用于级别
:-- | -- | --
`C` | 检查表 | Column
`O` | 在视图上只读 | Object
`P` | 首要的关键 | Object
`R` | 参考 AKA 外键 | Column
`U` | 唯一键 | Column
`V` | 检查视图上的选项 | Object

### 显示约束

以下语句显示了系统中的所有约束：

```sql
SELECT
    table_name,
    constraint_name,
    constraint_type
FROM user_constraints;
```

### 选择参照约束

以下语句显示了源和目标表/列对的所有引用约束（外键）：

```sql
SELECT
    c_list.CONSTRAINT_NAME as NAME,
    c_src.TABLE_NAME as SRC_TABLE,
    c_src.COLUMN_NAME as SRC_COLUMN,
    c_dest.TABLE_NAME as DEST_TABLE,
    c_dest.COLUMN_NAME as DEST_COLUMN
FROM ALL_CONSTRAINTS c_list,
    ALL_CONS_COLUMNS c_src,
    ALL_CONS_COLUMNS c_dest
WHERE c_list.CONSTRAINT_NAME = c_src.CONSTRAINT_NAME
    AND c_list.R_CONSTRAINT_NAME = c_dest.CONSTRAINT_NAME
    AND c_list.CONSTRAINT_TYPE = 'R'
```

### 对表设置约束

使用 `CREATE TABLE` 语句创建检查约束的语法是：

```sql
CREATE TABLE table_name
(
    column1 datatype null/not null,
    column2 datatype null/not null,
    ...
    CONSTRAINT constraint_name CHECK (column_name condition) [DISABLE]
);
```

例如：

```sql
CREATE TABLE suppliers
(
    supplier_id  numeric(4),
    supplier_name  varchar2(50),
    CONSTRAINT check_supplier_id
    CHECK (supplier_id BETWEEN 100 and 9999)
);
```

### 表上的唯一索引

使用 `CREATE TABLE` 语句创建唯一约束的语法是：

```sql
CREATE TABLE table_name
(
    column1 datatype null/not null,
    column2 datatype null/not null,
    ...
    CONSTRAINT constraint_name UNIQUE (column1, column2, column_n)
);
```

例如：

```sql
CREATE TABLE customer
(
    id   integer not null,
    name varchar2(20),
    CONSTRAINT customer_id_constraint UNIQUE (id)
);
```

### 添加唯一约束

唯一约束的语法是：

```sql
ALTER TABLE [table name]
    ADD CONSTRAINT [constraint name] UNIQUE( [column name] ) USING INDEX [index name];
```

例如：

```sql
ALTER TABLE employee
    ADD CONSTRAINT uniqueEmployeeId UNIQUE(employeeId) USING INDEX ourcompanyIndx_tbs;
```

### 添加外部约束

foregin 约束的语法是：

```sql
ALTER TABLE [table name]
    ADD CONSTRAINT [constraint name] FOREIGN KEY (column,...) REFERENCES table [(column,...)] [ON DELETE {CASCADE | SET NULL}]
```

例如：

```sql
ALTER TABLE employee
    ADD CONSTRAINT fk_departament FOREIGN KEY (departmentId) REFERENCES departments(Id);
```

### 删除约束

删除（删除）约束的语法是：

```sql
ALTER TABLE [table name]
    DROP CONSTRAINT [constraint name];
```

例如：

```sql
ALTER TABLE employee
    DROP CONSTRAINT uniqueEmployeeId;
```

INDEXES
----

### 创建索引

创建索引的语法是：

```sql
CREATE [UNIQUE] INDEX index_name
    ON table_name (column1, column2, . column_n)
    [ COMPUTE STATISTICS ];
```

`UNIQUE` 表示索引列中值的组合必须是唯一的

`COMPUTE STATISTICS` 告诉 Oracle 在创建索引期间收集统计信息。 然后优化器使用这些统计信息来选择执行语句时的最佳执行计划。例如：

```sql
CREATE INDEX customer_idx
    ON customer (customer_name);
```

在此示例中，已在名为 `customer_idx` 的客户表上创建了一个索引。它仅包含 `customer_name` 字段

下面创建一个包含多个字段的索引：

```sql
CREATE INDEX customer_idx
    ON supplier (customer_name, country);
```

以下内容在创建索引时收集统计信息：

```sql
CREATE INDEX customer_idx
    ON supplier (customer_name, country)
    COMPUTE STATISTICS;
```

### 创建基于函数的索引
<!--rehype:wrap-class=col-span-2-->

在 `Oracle` 中，您不仅限于在列上创建索引。您可以创建基于函数的索引

创建基于函数的索引的语法是：

```sql
CREATE [UNIQUE] INDEX index_name
    ON table_name (function1, function2, . function_n)
    [ COMPUTE STATISTICS ];
```

例如：

```sql
CREATE INDEX customer_idx
    ON customer (UPPER(customer_name));
-- 已创建基于 customer_name 字段的大写评估的索引
```

为确保 `Oracle` 优化器在执行 SQL 语句时使用此索引，请确保 `UPPER(customer_name)` 的计算结果不为 `NULL` 值。 为确保这一点，请将 `UPPER(customer_name) IS NOT NULL` 添加到 `WHERE` 子句中，如下所示：

```sql
SELECT customer_id, customer_name, UPPER(customer_name)
FROM customer
WHERE UPPER(customer_name) IS NOT NULL
ORDER BY UPPER(customer_name);
```

### 重命名索引

重命名索引的语法是：

```sql
ALTER INDEX index_name
    RENAME TO new_index_name;
```

例如：

```sql
ALTER INDEX customer_id
    RENAME TO new_customer_id;
```

在此示例中，`customer_id` 重命名为 `new_customer_id`

### 收集索引的统计信息

如果您需要在索引首次创建后收集统计信息或者您想要更新统计信息，您总是可以使用 ALTER INDEX 命令来收集统计信息。 您收集统计信息以便 `oracle` 可以有效地使用索引。 这将重新计算表大小、行数、块数、段数并更新字典表，以便 `oracle` 在选择执行计划时可以有效地使用数据。

收集索引统计信息的语法是：

```sql
ALTER INDEX index_name
    REBUILD COMPUTE STATISTICS;
```

例如：

```sql
ALTER INDEX customer_idx
    REBUILD COMPUTE STATISTICS;
```

在此示例中，为名为 `customer_idx` 的索引收集统计信息

### 删除索引

删除索引的语法是：

```sql
DROP INDEX index_name;
```

例如：

```sql
DROP INDEX customer_idx;
```

在此示例中，删除了 `customer_idx`

DBA 相关
---

### 创建用户

创建用户的语法是：

```sql
CREATE USER username IDENTIFIED BY password;
```

例如：

```sql
CREATE USER brian IDENTIFIED BY brianpass;
```

### 授予特权

授予权限的语法是：

```sql
GRANT privilege TO user;
```

例如：

```sql
GRANT dba TO brian;
```

### 更改密码

更改用户密码的语法是：

```sql
ALTER USER username IDENTIFIED BY password;
```

例如：

```sql
ALTER USER brian IDENTIFIED BY brianpassword;
```

### 查看表空间的名称以及大小
```sql
select t.tablespace_name, round(sum(bytes/(1024*1024)),0) ts_size from dba_tablespaces t, dba_data_files d where t.tablespace_name = d.tablespace_name group by t.tablespace_name;
```

### 查看还没提交的事务
```sql
select * from v$locked_object;
select * from v$transaction;
```

### 查看数据库库对象
```sql
select owner, object_type, status, count(*) count# from all_objects group by owner, object_type, OJIB status;
```

### 查看数据库的版本
```sql
Select version FROM Product_component_version where SUBSTR(PRODUCT,1,6) = 'Oracle';
```

### 查看数据库的创建日期和归档方式
```sql
select created, Log_Mode, Log_Mode From v$Database;
```

### 查看控制文件
```sql
select name from v$controlfile;
```

### 查看日志文件
```sql
select member from v$logfile;
```

### 查看表空间的使用情況
```sql
select sum (bytes)/(1024*1024) as free_space, tablespace_name from dba_free_space group by tablespace_name;
```

### 捕捉运行很久的SOL
```sql
column username format a12
column opname format a16
column progress format a8

select username,sid,opname,round(sofar* 100 / totalwork,0) || '%' as progress,time_remaining,sqL_text from v$session_longops,v$sql where time_remaining <> 0 and sql_address = address and sql_hash_value = hash_value
```

另见
---

- [Oracle Database/SQL Cheatsheet](https://en.wikibooks.org/wiki/Oracle_Database/SQL_Cheatsheet) _(wikibooks.org)_
