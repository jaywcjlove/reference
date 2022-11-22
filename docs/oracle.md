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

另见
---

- [Oracle Database/SQL Cheatsheet](https://en.wikibooks.org/wiki/Oracle_Database/SQL_Cheatsheet) _(wikibooks.org)_
