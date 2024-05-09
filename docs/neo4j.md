Neo4j 备忘清单
===

这个 [neo4j](https://neo4j.com/docs/) 快速参考备忘单显示了它的常用命令

入门
---

### Neo4J

Neo4j是一个图形数据库，由节点通过关系连接在一起。如果您有一个高度相互连接的数据集或者有很多连接的查询，您可能会考虑使用图数据库。

- [下载 Neo4j Desktop](https://neo4j.com/download) _下载 Neo4j 桌面版或服务器版_
- [Neo4j 沙盒](https://sandbox.neo4j.com) _选择一个数据集 - 无需安装_
- [Neo4j Aura](https://neo4j.com/aura) _在云端获得免费的 Neo4j 实例_
- [Neo4j 图形学院](https://neo4j.com/graphacademy) _免费、自主学习、实践性的在线培训_
- [GraphGists](https://neo4j.com/graphgists) _使用案例和行业特定的示例图_

#### 运行

```shell
$ bin/neo4j start
```

在 Mac 或者 Linux 中，安装好 JDK 后，直接解压下载好的 Neo4j 包，然后运行上面命令即可。

### Neo4J 使用

Neo4J 提供了一个用户友好的 web 界面，可以进行各项配置、写入、查询等操作，并且提供了可视化功能。类似ElasticSearch 一样，我个人非常喜欢这种开箱即用的设计。

#### 进入管理页面

打开浏览器，输入下面网址，可以进入管理页面

```url
http://127.0.0.1:7474/browser/
```

### 图数据库概念

|   |   |
|-----------|------------|
| `节点` | 节点通常用于表示数据中的 _实体_ 或 _事物_。例如，一个 **Person（人）** 或 **Movie（电影）**。 |
| `关系` | 关系用于将两个节点连接在一起，并将数据组织成结构。例如，一个人 **acted in（出演）** 一部电影。关系有一个 _类型_ 和 _方向_，尽管在查询时可以忽略方向。 |
| `标签` | 标签用于将节点分组到不同的类别中。例如，一个人可以有 `Person(人)` 和 `Actor(演员)` 标签。 |
| `关系类型` | 每个关系都有一个类型。关系允许您在图中探索较小的部分。 |
| `属性` | 节点和关系都可以设置属性。属性是 [名称-值对](https://neo4j.com/docs/cypher-manual/4.3/syntax/values/#cypher-values)。 |
<!--rehype:className=style-list-arrow-->

Neo4j 语法
---

### 读取查询结构

```cypher
[USE] // (使用)
[MATCH WHERE] //  (匹配条件)
[OPTIONAL MATCH WHERE] //  (可选匹配条件)
//  (传递结果并进行排序、跳过或限制)
[WITH [ORDER BY] [SKIP] [LIMIT]]
// (返回结果并进行排序、跳过或限制)
RETURN [ORDER BY] [SKIP] [LIMIT] 
```

### 仅写入查询结构

```cypher
[USE] // (使用)
(CREATE | MERGE)* // (创建或合并节点和关系)
// (设置、删除、移除或循环操作)
[SET|DELETE|REMOVE|FOREACH]* 
// (返回结果并进行排序、跳过或限制)
[RETURN [ORDER BY] [SKIP] [LIMIT] 
```

### 读取-写入查询结构

```cypher
[USE]       // (使用)
[MATCH WHERE]          //  (匹配条件)
[OPTIONAL MATCH WHERE] // (可选匹配条件)
// (传递结果并进行排序、跳过或限制)
[WITH [ORDER BY] [SKIP] [LIMIT]]
(CREATE | MERGE)* // (创建或合并节点和关系)
// (设置、删除、移除或循环操作)
[SET|DELETE|REMOVE|FOREACH]* 
// (返回结果并进行排序、跳过或限制)
[RETURN [ORDER BY] [SKIP] [LIMIT] 
```

Neo4j 读取数据
---

### MATCH

```cypher
MATCH (n:Person)-[:KNOWS]->(m:Person)
WHERE n.name = 'Alice'
```

节点模式可以包含标签和属性

```cypher
MATCH (n)-->(m)
```

在 MATCH 中可以使用任何模式

```cypher
MATCH (n {name: 'Alice'})-->(m)
```

带有节点属性的模式

```cypher
MATCH p = (n)-->(m)
```

将路径分配给 p

```cypher
OPTIONAL MATCH (n)-[r]->(m)
```

可选模式：缺失部分将使用空值

### WHERE

```cypher
WHERE n.property <> $value
```

使用谓词进行过滤。请注意，WHERE 总是作为 MATCH、OPTIONAL MATCH 或 WITH 子句的一部分。在查询中的其他子句之后放置它将改变它的作用

```cypher
WHERE EXISTS {
  MATCH (n)-->(m) WHERE n.age = m.age
}
```

使用存在性子查询进行过滤。

### RETURN
<!--rehype:wrap-class=row-span-2-->

```cypher
RETURN *
```

返回所有变量的值

```cypher
RETURN n AS columnName
```

为结果列名使用别名

```cypher
RETURN DISTINCT n
```

返回唯一的行

```cypher
ORDER BY n.property
```

对结果进行排序

```cypher
ORDER BY n.property DESC
```

按降序对结果进行排序

```cypher
SKIP $skipNumber
```

跳过一定数量的结果

```cypher
LIMIT $limitNumber
```

限制结果的数量

```cypher
SKIP $skipNumber LIMIT $limitNumber
```

跳过顶部的结果并限制结果的数量

```cypher
RETURN count(*)
```

匹配行的数量。参见聚合函数了解更多

### WITH

```cypher
MATCH (user)-[:FRIEND]-(friend)
WHERE user.name = $name
WITH user, count(friend) AS friends
WHERE friends > 10
RETURN user
```

WITH 语法类似于 RETURN。它明确地分隔查询部分，允许您声明要传递到下一部分的变量

```cypher
MATCH (user)-[:FRIEND]-(friend)
WITH user, count(friend) AS friends
ORDER BY friends DESC
  SKIP 1
  LIMIT 3
RETURN user
```

ORDER BY、SKIP 和 LIMIT 也可以与 WITH 一起使用

### UNION

```cypher
MATCH (a)-[:KNOWS]->(b)
RETURN b.name
UNION
MATCH (a)-[:LOVES]->(b)
RETURN b.name
```

返回所有查询结果的唯一并集。结果列的类型和名称必须匹配

```cypher
MATCH (a)-[:KNOWS]->(b)
RETURN b.name
UNION ALL
MATCH (a)-[:LOVES]->(b)
RETURN b.name
```

返回所有查询结果的并集，包括重复行

Neo4j 写入数据
-------------

### CREATE

```cypher
CREATE (n {name: $value})
```

创建具有指定属性的节点

```cypher
CREATE (n $map)
```

创建具有指定属性的节点

```cypher
UNWIND $listOfMaps AS properties
CREATE (n) SET n = properties
```

创建具有指定属性的节点

```cypher
CREATE (n)-[r:KNOWS]->(m)
```

创建具有指定类型和方向的关系；将变量绑定到它

```cypher
CREATE (n)-[:LOVES {since: $value}]->(m)
```

创建具有指定类型、方向和属性的关系

### SET

```cypher
SET n.property1 = $value1,
    n.property2 = $value2
```

更新或创建属性

```cypher
SET n = $map
```

设置所有属性。这将删除任何现有属性

```cypher
SET n += $map
```

添加和更新属性，同时保留现有属性

```cypher
SET n:Person
```

向节点添加一个标签 Person

### MERGE

```cypher
MERGE (n:Person {name: $value})
  ON CREATE SET n.created = timestamp()
  ON MATCH SET
    n.counter = coalesce(n.counter, 0) + 1,
    n.accessTime = timestamp()
```

匹配模式或在不存在时创建它。使用 ON CREATE 和 ON MATCH 进行条件更新

```cypher
MATCH (a:Person {name: $value1}),
      (b:Person {name: $value2})
MERGE (a)-[r:LOVES]->(b)
```

MERGE 查找或创建节点之间的关系

```cypher
MATCH (a:Person {name: $value1})
MERGE
  (a)-[r:KNOWS]->(b:Person {name: $value3})
```

MERGE 查找或创建与节点关联的路径

### DELETE

```cypher
DELETE n, r
```

删除一个节点和一个关系

```cypher
DETACH DELETE n
```

删除一个节点以及与其连接的所有关系

```cypher
MATCH (n)
DETACH DELETE n
```

从数据库中删除所有节点和关系

### REMOVE

```cypher
REMOVE n:Person
```

从 n 中移除一个标签

```cypher
REMOVE n.property
```

移除一个属性

### FOREACH

```cypher
FOREACH (r IN relationships(path) |
  SET r.marked = true)
```

对路径中的每个关系执行一个变异操作。

```cypher
FOREACH (value IN coll |
 CREATE (:Person {name: value}))
```

对列表中的每个元素执行一个变异操作。

### 调用子查询
<!--rehype:wrap-class=col-span-2-->

```cypher
CALL {
  MATCH (p:Person)-[:FRIEND_OF]->(other:Person) RETURN p, other
  UNION
  MATCH (p:Child)-[:CHILD_OF]->(other:Parent) RETURN p, other
}
```

这调用了一个具有两个联合部分的子查询。子查询的结果之后可以进行后处理。

### 调用存储过程
<!--rehype:wrap-class=row-span-2-->

```cypher
CALL db.labels() YIELD label
```

这显示了对内置过程 db.labels 的独立调用，以列出数据库中使用的所有标签。请注意，所需的过程参数在过程名称后的括号中明确给出。

```cypher
CALL db.labels() YIELD *
```

独立调用可以使用 YIELD * 返回所有列。

```cypher
CALL java.stored.procedureWithArgs
```

独立调用可以省略 YIELD，并且也可以通过语句参数隐式提供参数，例如，一个需要一个参数输入的独立调用可以通过传递参数映射 {input: 'foo'} 来运行。

```cypher
CALL db.labels() YIELD label
RETURN count(label) AS count
```

在更大的查询中调用内置过程 db.labels 来计算数据库中使用的所有标签。在更大的查询中进行调用时，总是需要显式传递参数和使用 YIELD 明确命名结果。

### 导入
<!--rehype:wrap-class=col-span-2 row-span-3-->

```cypher
LOAD CSV FROM
'https://neo4j.com/docs/cypher-refcard/4.3/csv/artists.csv' AS line
CREATE (:Artist {name: line[1], year: toInteger(line[2])})
```

从 CSV 文件加载数据并创建节点。

```cypher
LOAD CSV WITH HEADERS FROM
'https://neo4j.com/docs/cypher-refcard/4.3/csv/artists-with-headers.csv' AS line
CREATE (:Artist {name: line.Name, year: toInteger(line.Year)})
```

加载包含标题的 CSV 数据。

```cypher
USING PERIODIC COMMIT 500
LOAD CSV WITH HEADERS FROM
'https://neo4j.com/docs/cypher-refcard/4.3/csv/artists-with-headers.csv' AS line
CREATE (:Artist {name: line.Name, year: toInteger(line.Year)})
```

在导入大量数据时，每处理500行后提交当前事务。

```cypher
LOAD CSV FROM
'https://neo4j.com/docs/cypher-refcard/4.3/csv/artists-fieldterminator.csv'
AS line FIELDTERMINATOR ';'
CREATE (:Artist {name: line[1], year: toInteger(line[2])})
```

使用不同的字段分隔符，而不是默认的逗号（周围没有空白）。

```cypher
LOAD CSV FROM
'https://neo4j.com/docs/cypher-refcard/4.3/csv/artists.csv' AS line
RETURN DISTINCT file()
```

返回 LOAD CSV 处理的文件的绝对路径，如果在 LOAD CSV 上下文之外调用则返回 null。

```cypher
LOAD CSV FROM
'https://neo4j.com/docs/cypher-refcard/4.3/csv/artists.csv' AS line
RETURN linenumber()
```

返回 LOAD CSV 当前正在处理的行号，如果在 LOAD CSV 上下文之外调用则返回 null。

### 运算符

|                        |                                           |
|------------------------|-------------------------------------------|
| **通用**               | DISTINCT, ., []                           |
| **数学**               | +, -, *, /, %, ^                          |
| **比较**               | =, <>, <, >, <=, >=, IS NULL, IS NOT NULL |
| **布尔**               | AND, OR, XOR, NOT                         |
| **字符串**             | +                                         |
| **列表**               | +, IN, [x], [x .. y]                      |
| **正则表达式**         | =~                                        |
| **字符串匹配**         | STARTS WITH, ENDS WITH, CONTAINS          |
<!--rehype:className=left-align-->

### null

- `null` 用于表示缺失/未定义的值。
- `null` 不等于 `null`。不知道两个值是否相等并不意味着它们是相同的值。因此，表达式 `null = null` 得到的是 `null` 而不是 `true`。要检查表达式是否为 `null`，请使用 `IS NULL`。
- 算术表达式、比较和函数调用（除了 `coalesce`）将返回 `null` 如果任何参数为 `null`。
- 尝试访问列表中缺失的元素或不存在的属性将得到 `null`。
- 在 `OPTIONAL MATCH` 子句中，缺失部分的模式将使用 `null`。

### Patterns
<!--rehype:wrap-class=row-span-4-->

```cypher
(n:Person)
```

具有 Person 标签的节点

```cypher
(n:Person:Swedish)
```

具有 Person 和 Swedish 标签的节点

```cypher
(n:Person {name: $value})
```

具有声明的属性的节点

```cypher
()-[r {name: $value}]-()
```

匹配具有声明的属性的关系

```cypher
(n)-->(m)
```

从 n 到 m 的关系

```cypher
(n)--(m)
```

在 n 和 m 之间的任意方向上的关系

```cypher
(n:Person)-->(m)
```

带有指向 m 的关系的标记为 Person 的节点

```cypher
(m)<-[:KNOWS]-(n)
```

从 n 到 m 的类型为 KNOWS 的关系

```cypher
(n)-[:KNOWS|:LOVES]->(m)
```

从 n 到 m 的类型为 KNOWS 或类型为 LOVES 的关系

```cypher
(n)-[r]->(m)
```

将关系绑定到变量 r

```cypher
(n)-[*1..5]->(m)
```

从 n 到 m 之间的 1 到 5 个关系的变长路径

```cypher
(n)-[*]->(m)
```

从 n 到 m 之间的任意数量的关系的变长路径。（请参阅性能部分）

```cypher
(n)-[:KNOWS]->(m {property: $value})
```

从节点 n 到节点 m，类型为 KNOWS 的关系，具有声明的属性

```cypher
shortestPath((n1:Person)-[*..6]-(n2:Person))
```

查找单一最短路径

```cypher
allShortestPaths((n1:Person)-[*..6]->(n2:Person))
```

查找所有最短路径

```cypher
size((n)-->()-->())
```

计算与模式匹配的路径数量

### USE

```cypher
USE myDatabase
```

选择 myDatabase 来执行查询，或针对其执行查询的部分

```cypher
USE neo4j
MATCH (n:Person)-[:KNOWS]->(m:Person)
WHERE n.name = 'Alice'
```

针对 Neo4j 数据库执行的 MATCH 查询

### SHOW FUNCTIONS 和 PROCEDURES

```cypher
SHOW FUNCTIONS
```

列出所有可用函数

```cypher
SHOW PROCEDURES EXECUTABLE YIELD name
```

列出当前用户可以执行的所有过程，并仅返回过程的名称

### 标签

```cypher
CREATE (n:Person {name: $value})
```

创建一个带有标签和属性的节点

```cypher
MERGE (n:Person {name: $value})
```

匹配或创建具有该标签和属性的唯一节点

```cypher
SET n:Spouse:Parent:Employee
```

向节点添加标签

```cypher
MATCH (n:Person)
```

匹配标记为“Person”的节点

```cypher
MATCH (n:Person)
WHERE n.name = $value

```

匹配具有给定名称的标记为“Person”的节点

```cypher
WHERE (n:Person)
```

检查节点上标签的存在

```cypher
labels(n)
```

节点的标签

```cypher
REMOVE n:Person
```

从节点中移除标签

### Lists
<!--rehype:wrap-class=row-span-2-->

```cypher
['a', 'b', 'c'] AS list
```

文字列表用方括号声明

```cypher
size($list) AS len, $list[0] AS value
```

列表可以作为参数传递

```cypher
range($firstNum, $lastNum, $step) AS list
```

range() 创建一个数字列表（step是可选的），其他返回列表的函数有：labels()、nodes()、relationships()

```cypher
MATCH p = (a)-[:KNOWS*]->()
RETURN relationships(p) AS r
```

可以使用命名路径和 relationships() 返回变长路径的关系列表

```cypher
RETURN matchedNode.list[0] AS value,
       size(matchedNode.list) AS len
```

属性可以是字符串、数字或布尔值的列表。

```cypher
list[$idx] AS value,
list[$startIdx..$endIdx] AS slice
```

可以使用方括号中的 idx 下标来访问列表元素。无效的索引返回 null。可以使用起始索引到结束索引的间隔来检索片段，每个索引都可以省略或为负数。超出范围的元素将被忽略

```cypher
UNWIND $names AS name
MATCH (n {name: name})
RETURN avg(n.age)
```

使用 UNWIND，任何列表都可以转换回单独的行。该示例匹配一个名字列表中的所有名字

```cypher
MATCH (a)
RETURN [(a)-->(b) WHERE b.name = 'Bob' | b.age]
```

可以使用模式推导直接从匹配中进行自定义投影

```cypher
MATCH (person)
RETURN person { .name, .age}
```

映射投影可以很容易地从节点、关系和其他映射值构造出来

### Maps
<!--rehype:wrap-class=row-span-2-->

```cypher
{name: 'Alice', age: 38, address: {
      city: 'London',residential: true}}
```

文字映射使用大括号声明，就像属性映射一样。支持列表

```cypher
WITH {person: {name: 'Anne', age: 25}} AS p
RETURN p.person.name
```

访问嵌套映射的属性

```cypher
MERGE (p:Person {name: $map.name})
  ON CREATE SET p = $map
```

映射可以作为参数传递，并且可以作为映射或通过访问键来使用

```cypher
MATCH (matchedNode:Person)
RETURN matchedNode
```

节点和关系被返回为它们数据的映射

```cypher
map.name, map.age, map.children[0]
```

可以通过它们的键访问映射条目。无效的键会导致错误

### CASE

```cypher
CASE n.eyes
  WHEN 'blue' THEN 1
  WHEN 'brown' THEN 2
  ELSE 3
END
```

从匹配的 WHEN 值返回 THEN 值。ELSE 值是可选的，如果缺失，则替换为 null

```cypher
CASE
  WHEN n.eyes = 'blue' THEN 1
  WHEN n.age < 40 THEN 2
  ELSE 3
END
```

从第一个评估为 true 的 WHEN 谓词返回 THEN 值。谓词按顺序进行评估

### Predicates 谓词
<!--rehype:wrap-class=row-span-2-->

```cypher
n.property <> $value
```

使用比较运算符

```cypher
toString(n.property) = $value
```

使用函数

```cypher
n.number >= 1 AND n.number <= 10
```

使用布尔运算符来组合谓词

```cypher
1 <= n.number <= 10
```

使用链接运算符来组合谓词

```cypher
n:Person
```

检查节点标签

```cypher
variable IS NOT NULL
```

检查某物是否不为 null，例如某个属性是否存在

```cypher
n.property IS NULL OR n.property = $value
```

要么属性不存在，要么谓词为 true

```cypher
n.property = $value
```

不存在的属性返回 null，它与任何值都不相等

```cypher
n["property"] = $value
```

也可以使用动态计算的属性名称来访问属性

```cypher
n.property STARTS WITH 'Tim' OR
n.property ENDS WITH 'n' OR
n.property CONTAINS 'goodie'
```

字符串匹配

```cypher
n.property =~ 'Tim.*'
```

字符串正则表达式匹配

```cypher
(n)-[:KNOWS]->(m)
```

确保模式至少有一个匹配项

```cypher
NOT (n)-[:KNOWS]->(m)
```

从结果中排除对 (n)-[:KNOWS]->(m) 的匹配

```cypher
n.property IN [$value1, $value2]
```

检查一个元素是否存在于列表中

### 列表谓词
<!--rehype:wrap-class=col-span-2-->

```cypher
all(x IN coll WHERE x.property IS NOT NULL)
```

如果列表中所有元素都满足谓词，则返回 true。

```cypher
any(x IN coll WHERE x.property IS NOT NULL)
```

如果列表中至少有一个元素满足谓词，则返回 true。

```cypher
none(x IN coll WHERE x.property IS NOT NULL)
```

如果列表中所有元素都不满足谓词，则返回 true。

```cypher
single(x IN coll WHERE x.property IS NOT NULL)
```

如果列表中恰好有一个元素满足谓词，则返回 true。

### 列表表达式

```cypher
size($list)
```

列表中的元素数量

```cypher
reverse($list)
```

反转列表中元素的顺序

```cypher
head($list), last($list), tail($list)
```

head() 返回列表的第一个元素，last() 返回列表的最后一个元素。tail() 返回除第一个元素外的所有元素。对于空列表，所有函数返回 null

```cypher
[x IN list | x.prop]
```

对原始列表中每个元素的表达式值组成的列表

```cypher
[x IN list WHERE x.prop <> $value]
```

过滤出谓词为 true 的元素组成的列表

```cypher
[x IN list WHERE x.prop <> $value | x.prop]
```

对列表进行过滤，并从每个符合条件的元素中提取表达式的值

```cypher
reduce(s = "", x IN list | s + x.prop)
```

对列表中的每个元素求值，并累积结果

### 函数

```cypher
coalesce(n.property, $defaultValue)
```

返回第一个非空表达式

```cypher
timestamp()
```

自1970年1月1日UTC午夜以来的毫秒数

```cypher
id(nodeOrRelationship)
```

关系或节点的内部ID

```cypher
toInteger($expr)
```

将给定的输入转换为整数（如果可能），否则返回 null

```cypher
toFloat($expr)
```

将给定的输入转换为浮点数（如果可能），否则返回 null

```cypher
toBoolean($expr)
```

将给定的输入转换为布尔值（如果可能），否则返回 null

```cypher
keys($expr)
```

返回节点、关系或映射的属性名称的字符串表示形式列表

```cypher
properties($expr)
```

返回包含节点或关系的所有属性的映射

### 路径函数

```cypher
length(path)
```

路径中的关系数量。

```cypher
nodes(path)
```

路径中的节点列表。

```cypher
relationships(path)
```

路径中的关系列表。

```cypher
[x IN nodes(path) | x.prop]
```

从路径中的节点中提取属性。

### 空间函数
<!--rehype:wrap-class=col-span-2-->

```cypher
point({x: $x, y: $y})
```

返回一个二维笛卡尔坐标系中的点。

```cypher
point({latitude: $y, longitude: $x})
```

返回一个二维地理坐标系中的点，坐标以十进制度数指定。

```cypher
point({x: $x, y: $y, z: $z})
```

返回一个三维笛卡尔坐标系中的点。

```cypher
point({latitude: $y, longitude: $x, height: $z})
```

返回一个三维地理坐标系中的点，纬度和经度以十进制度数表示，高度以米为单位。

```cypher
distance(point({x: $x1, y: $y1}), point({x: $x2, y: $y2}))
```

返回一个浮点数，表示两点之间的线性距离。返回的单位将与点坐标的单位相同，它适用于二维和三维笛卡尔点。

```cypher
distance(point({latitude: $y1, longitude: $x1}), point({latitude: $y2, longitude: $x2}))
```

返回两点之间的大地距离，单位为米。它也可以用于三维地理点。

Neo4j 函数
---

### 时间函数
<!--rehype:wrap-class=row-span-2-->

```cypher
date("2018-04-05")
```

从字符串解析并返回日期。

```cypher
localtime("12:45:30.25")
```

返回一个没有时区的时间。

```cypher
time("12:45:30.25+01:00")
```

返回指定时区的时间。

```cypher
localdatetime("2018-04-05T12:34:00")
```

返回一个没有时区的日期时间。

```cypher
datetime("2018-04-05T12:34:00[Europe/Berlin]")
```

返回指定时区的日期时间。

```cypher
datetime({epochMillis: 3360000})
```

将 3360000 作为 UNIX Epoch 时间转换为普通日期时间。

```cypher
date({year: $year, month: $month, day: $day})
```

所有的时间函数也可以接受命名组件的映射。这个例子从年、月和日组件返回一个日期。每个函数支持不同的可能组件集。

```cypher
datetime({date: $date, time: $time})
```

可以通过组合其他类型来创建时间类型。这个例子从日期和时间创建一个日期时间。

```cypher
date({date: $datetime, day: 5})
```

可以通过选择更复杂的类型来创建时间类型，也可以覆盖单个组件。这个例子从日期时间中选择，同时覆盖了天组件，创建了一个日期。

```cypher
WITH date("2018-04-05") AS d
RETURN d.year, d.month, d.day, d.week, d.dayOfWeek
```

访问器允许提取时间类型的组件。

### 时长函数

```cypher
duration("P1Y2M10DT12H45M30.25S")
```

返回 1 年、2 个月、10 天、12 小时、45 分钟和 30.25 秒的持续时间。

```cypher
duration.between($date1,$date2)
```

返回两个时间实例之间的持续时间。

```cypher
WITH duration("P1Y2M10DT12H45M") AS d
RETURN d.years, d.months, d.days, d.hours, d.minutes
```

返回 1 年、14 个月、10 天、12 小时和 765 分钟。

```cypher
WITH duration("P1Y2M10DT12H45M") AS d
RETURN d.years, d.monthsOfYear, d.days, d.hours, d.minutesOfHour
```

返回 1 年、2 个月、10 天、12 小时和 45 分钟。

```cypher
date("2015-01-01") + duration("P1Y1M1D")
```

返回 2016-02-02 的日期。也可以从时间实例中减去持续时间。

```cypher
duration("PT30S") * 10
```

返回 5 分钟的持续时间。也可以将持续时间除以一个数字。

### 数学函数
<!--rehype:wrap-class=row-span-2-->

```cypher
abs($expr)
```

绝对值。

```cypher
rand()
```

返回范围从 0（包含）到 1（不包含）的随机数，[0,1)。每次调用都会返回一个新值。也可用于选择子集或随机排序。

```cypher
round($expr)
```

四舍五入到最近的整数；ceil() 和 floor() 分别向上或向下找到下一个整数。

```cypher
sqrt($expr)
```

平方根。

```cypher
sign($expr)
```

如果为零，则为 0；如果为负，则为 -1；如果为正，则为 1。

```cypher
sin($expr)
```

三角函数还包括 cos()、tan()、cot()、asin()、acos()、atan()、atan2() 和 haversin()。如果没有另外指定，三角函数的所有参数都应该以弧度为单位。

```cypher
degrees($expr), radians($expr), pi()
```

将弧度转换为度；使用 radians() 进行反向转换，使用 pi() 表示 π。

```cypher
log10($expr), log($expr), exp($expr), e()
```

以 10 为底的对数、自然对数、e 的参数次幂，以及 e 的值。

### 关系函数

```cypher
type(a_relationship)
```

关系类型的字符串表示。

```cypher
startNode(a_relationship)
```

关系的起始节点。

```cypher
endNode(a_relationship)
```

关系的结束节点。

```cypher
id(a_relationship)
```

关系的内部ID

### 字符串函数

```cypher
toString($expression)
```

表达式的字符串表示。

```cypher
replace($original, $search, $replacement)
```

用 replacement 替换所有出现的 search。所有参数都必须是表达式。

```cypher
substring($original, $begin, $subLength)
```

获取字符串的部分。subLength 参数是可选的。

```cypher
left($original, $subLength),
  right($original, $subLength)
```

字符串的前部分。字符串的后部分。

```cypher
trim($original), lTrim($original),
  rTrim($original)
```

修剪所有空格，或在左侧或右侧。

```cypher
toUpper($original), toLower($original)
```

大写和小写。

```cypher
split($original, $delimiter)
```

将字符串拆分为字符串列表。

```cypher
reverse($original)
```

反转字符串。

```cypher
size($string)
```

计算字符串中的字符数。

### 聚合函数

```cypher
count(*)
```

匹配行的数量。

```cypher
count(variable)
```

非空值的数量。

```cypher
count(DISTINCT variable)
```

所有聚合函数也接受 DISTINCT 运算符，它从值中去除重复项。

```cypher
collect(n.property)
```

从值中创建列表，忽略 null 值。

```cypher
sum(n.property)
```

求数值的总和。类似的函数有 avg()、min()、max()。

```cypher
percentileDisc(n.property, $percentile)
```

离散百分位数。连续百分位数是 percentileCont()。百分位数参数范围从 0.0 到 1.0。

```cypher
stDev(n.property)
```

样本标准差。对于整个总体，请使用 stDevP()。

Neo4j 模式操作
------

### 索引
<!--rehype:wrap-class=col-span-3-->

```cypher
CREATE INDEX FOR (p:Person) ON (p.name)
```

在具有标签 Person 和属性 name 的节点上创建索引。

```cypher
CREATE INDEX index_name FOR ()-[k:KNOWS]-() ON (k.since)
```

在具有类型 KNOWS 和属性 since 的关系上创建索引，并命名为 index_name。

```cypher
CREATE INDEX FOR (p:Person) ON (p.surname)
OPTIONS {indexProvider: 'native-btree-1.0', indexConfig: {`spatial.cartesian.min`: [-100.0, -100.0], `spatial.cartesian.max`: [100.0, 100.0]}}
```

在具有标签 Person 和属性 surname 的节点上创建索引，使用本地 btree 索引提供程序，以及给定的空间笛卡尔设置。其他索引设置将使用它们的默认值。

```cypher
CREATE INDEX FOR (p:Person) ON (p.name, p.age)
```

在具有标签 Person 和属性 name 和 age 的节点上创建复合索引，如果索引已存在则抛出错误。

```cypher
CREATE INDEX IF NOT EXISTS FOR (p:Person) ON (p.name, p.age)
```

在具有标签 Person 和属性 name 和 age 的节点上创建复合索引，如果尚不存在则创建，如果已存在则不执行任何操作。

```cypher
CREATE LOOKUP INDEX lookup_index_name FOR (n) ON EACH labels(n)
```

在具有任何标签的节点上创建一个名为 lookup_index_name 的令牌查找索引。

```cypher
CREATE LOOKUP INDEX FOR ()-[r]-() ON EACH type(r)
```

在具有任何关系类型的关系上创建一个令牌查找索引。

```cypher
CREATE FULLTEXT INDEX node_fulltext_index_name FOR (n:Friend) ON EACH [n.name]
OPTIONS {indexConfig: {`fulltext.analyzer`: 'swedish'}}
```

在具有名称 node_fulltext_index_name 和分析器为 swedish 的节点上创建全文索引。节点上的全文索引只能由存储过程 db.index.fulltext.queryNodes 使用。其他索引设置将使用它们的默认值。

```cypher
CREATE FULLTEXT INDEX rel_fulltext_index_name FOR ()-[r:HAS_PET|BROUGHT_PET]-() ON EACH [r.since, r.price]
```

在具有名称 rel_fulltext_index_name 的关系上创建全文索引。关系上的全文索引只能由存储过程 db.index.fulltext.queryRelationships 使用。

```cypher
SHOW INDEXES
```

列出所有索引。

```cypher
MATCH (n:Person) WHERE n.name = $value
```

索引可以自动用于相等比较。请注意，例如 toLower(n.name) = $value 将不会使用索引。

```cypher
MATCH (n:Person)
WHERE n.name IN [$value]
```

索引可以自动用于 IN 列表检查。

```cypher
MATCH (n:Person)
WHERE n.name = $value and n.age = $value2
```

复合索引可以自动用于两个属性的相等比较。请注意，必须对复合索引的所有属性进行谓词处理才能使用该索引。

```cypher
MATCH (n:Person)
USING INDEX n:Person(name)
WHERE n.name = $value
```

在 Cypher 使用了次优索引或应该使用多个索引时，可以强制使用索引。

```cypher
DROP INDEX index_name
```

删除名为 index_name 的索引，如果索引不存在则抛出错误。

```cypher
DROP INDEX index_name IF EXISTS
```

如果存在则删除名为 index_name 的索引，如果不存在则不执行任何操作。

### 约束
<!--rehype:wrap-class=col-span-2 row-span-2-->

```cypher
CREATE CONSTRAINT ON (p:Person)
       ASSERT p.name IS UNIQUE
```

在标签为 Person 且属性为 name 的节点上创建唯一属性约束。如果更新或创建具有相同名称的该标签的任何其他节点，则写入操作将失败。此约束将创建一个相应的索引。

```cypher
CREATE CONSTRAINT uniqueness ON (p:Person)
       ASSERT p.age IS UNIQUE
```

在标签为 Person 且属性为 age 的节点上创建唯一属性约束，命名为 uniqueness。如果更新或创建具有相同年龄的该标签的任何其他节点，则写入操作将失败。此约束将创建一个相应的索引。

```cypher
CREATE CONSTRAINT ON (p:Person)
       ASSERT p.surname IS UNIQUE
       OPTIONS {indexProvider: 'native-btree-1.0'}
```

在标签为 Person 且属性为 surname 的节点上创建唯一属性约束，并使用 indexProvider native-btree-1.0 创建相应的索引。

```cypher
CREATE CONSTRAINT ON (p:Person)
       ASSERT p.name IS NOT NULL
```

(★) 在标签为 Person 且属性为 name 的节点上创建节点属性存在约束。如果该约束已存在，则抛出错误。如果创建具有该标签但没有 name 的节点，或者从具有 Person 标签的现有节点中删除 name 属性，则写入操作将失败。

```cypher
CREATE CONSTRAINT node_exists IF NOT EXISTS ON (p:Person)
       ASSERT p.name IS NOT NULL
```

(★) 如果标签为 Person 且属性为 name 的节点存在节点属性存在约束，或者名为 node_exists 的约束已存在，则不执行任何操作。如果不存在此类约束，则将创建该约束。

```cypher
CREATE CONSTRAINT ON ()-[l:LIKED]-()
       ASSERT l.when IS NOT NULL
```

(★) 在关系类型为 LIKED 且属性为 when 的关系上创建关系属性存在约束。如果创建具有此类型但没有 when 的关系，或者从具有 LIKED 类型的现有关系中删除 when 属性，则写入操作将失败。

```cypher
CREATE CONSTRAINT relationship_exists ON ()-[l:LIKED]-()
       ASSERT l.since IS NOT NULL
```

(★) 在关系类型为 LIKED 且属性为 since 的关系上创建关系属性存在约束，并命名为 relationship_exists。如果创建具有此类型但没有 since 的关系，或者从具有 LIKED 类型的现有关系中删除 since 属性，则写入操作将失败。

```cypher
SHOW UNIQUE CONSTRAINTS YIELD *
```

列出所有唯一约束。

```cypher
CREATE CONSTRAINT ON (p:Person)
      ASSERT (p.firstname, p.surname) IS NODE KEY
```

(★) 在标签为 Person 且属性为 firstname 和 surname 的节点上创建节点键约束。如果创建具有此标签但没有 firstname 和 surname 的节点，或者如果两者的组合不是唯一的，或者如果修改具有 Person 标签的现有节点上的 firstname 和/或 surname 属性以违反这些约束，则写入操作将失败。

```cypher
CREATE CONSTRAINT node_key ON (p:Person)
      ASSERT (p.name, p.surname) IS NODE KEY
```

(★) 在标签为 Person 且属性为 name 和 surname 的节点上创建节点键约束，并命名为 node_key。如果创建具有此标签但没有 name 和 surname 的节点，或者如果两者的组合不是唯一的，或者如果修改具有 Person 标签的现有节点上的 name 和/或 surname 属性以违反这些约束，则写入操作将失败。

```cypher
CREATE CONSTRAINT node_key_with_config ON (p:Person)
      ASSERT (p.name, p.age) IS NODE KEY
      OPTIONS {indexConfig: {`spatial.wgs-84.min`: [-100.0, -100.0], `spatial.wgs-84.max`: [100.0, 100.0]}}
```

(★) 在标签为 Person 且属性为 name 和 age 的节点上创建节点键约束，并命名为 node_key_with_config，以及给定的 spatial.wgs-84 设置以创建相应的索引。其他索引设置将使用它们的默认值。

```cypher
DROP CONSTRAINT uniqueness
```

删除名为 uniqueness 的约束，如果约束不存在则抛出错误。

```cypher
DROP CONSTRAINT uniqueness IF EXISTS
```

如果名为 uniqueness 的约束存在，则删除它，如果不存在则不执行任何操作。

### 性能

- 尽可能使用参数而不是文字常量。这样可以让 Cypher 重用你的查询，而不必解析和构建新的执行计划。
- 始终为你的变长模式设置一个上限。有可能一个查询会因为错误而无限制地访问图中的所有节点。
- 只返回你需要的数据。避免返回整个节点和关系，而是选择你需要的数据并只返回那部分。
- 使用 `PROFILE` / `EXPLAIN` 来分析你的查询性能。查看[查询调优](https://neo4j.com/docs/cypher-manual/4.3/query-tuning)了解更多关于这些以及其他主题的信息。

### Neo4j 多数据库管理

```cypher
CREATE OR REPLACE DATABASE myDatabase
```

(★) 创建一个名为 myDatabase 的数据库。如果已存在同名数据库，则删除现有数据库并创建一个新的。

```cypher
STOP DATABASE myDatabase
```

(★) 停止名为 myDatabase 的数据库。

```cypher
START DATABASE myDatabase
```

(★) 启动名为 myDatabase 的数据库。

```cypher
SHOW DATABASES
```

列出系统中所有数据库及其相关信息。

```cypher
SHOW DATABASES
YIELD name, currentStatus
WHERE name CONTAINS 'my' AND currentStatus = 'online'
```

列出数据库的信息，根据名称和在线状态进行筛选，并进一步根据这些条件进行细分。

```cypher
SHOW DATABASE myDatabase
```

显示有关数据库 myDatabase 的信息。

```cypher
SHOW DEFAULT DATABASE
```

显示默认数据库的信息。

```cypher
SHOW HOME DATABASE
```

显示当前用户的主数据库的信息。

```cypher
DROP DATABASE myDatabase IF EXISTS
```

(★) 删除数据库 myDatabase，如果存在的话。

Neo4j安全性
---

### 用户管理
<!--rehype:wrap-class=row-span-2-->

```cypher
CREATE USER alice SET PASSWORD $password
```

创建一个新用户和密码。这个密码在第一次登录时必须更改。

```cypher
ALTER USER alice SET PASSWORD $password CHANGE NOT REQUIRED
```

为用户设置一个新密码。该用户将不需要在下次登录时更改密码。

```cypher
ALTER USER alice IF EXISTS SET PASSWORD CHANGE REQUIRED
```

如果指定的用户存在，则强制该用户在下次登录时更改其密码。

```cypher
ALTER USER alice SET STATUS SUSPENDED
```

(★) 将用户状态更改为已暂停。使用 SET STATUS ACTIVE 来重新激活用户。

```cypher
ALTER USER alice SET HOME DATABASE otherDb
```

(★) 将用户的主数据库更改为 otherDb。使用 REMOVE HOME DATABASE 来取消用户的主数据库设置，并回退到默认数据库。

```cypher
ALTER CURRENT USER SET PASSWORD FROM $old TO $new
```

更改当前登录用户的密码。用户不需要在下次登录时更改此密码。

```cypher
SHOW CURRENT USER
```

列出当前登录用户、他们的状态、角色以及是否需要更改他们的密码。
(★) 状态和角色仅适用于企业版。

```cypher
SHOW USERS
```

列出系统中的所有用户、他们的状态、角色以及是否需要更改他们的密码。
(★) 状态和角色仅适用于企业版。

```cypher
SHOW USERS
YIELD user, suspended
WHERE suspended = true
```

列出系统中的用户，根据他们的名称和状态进行过滤，并进一步根据他们是否被暂停进行筛选。
(★) 状态仅适用于企业版。

```cypher
RENAME USER alice TO alice_delete
```

将用户 alice 重命名为 alice_delete。

```cypher
DROP USER alice_delete
```

删除用户

### (★) 图读取权限
<!--rehype:wrap-class=col-span-2-->

```cypher
GRANT TRAVERSE ON GRAPH * NODES * TO my_role
```

将遍历权限授予角色对所有节点和所有图。

```cypher
DENY READ {prop} ON GRAPH foo RELATIONSHIP Type TO my_role
```

拒绝角色对指定图中具有指定类型的所有关系的特定属性的读取权限。

```cypher
GRANT MATCH {*} ON HOME GRAPH ELEMENTS Label TO my_role
```

将读取权限和遍历权限授予角色对主图中具有指定标签的所有节点和关系。这里，两种权限都适用于图中具有指定标签/类型的所有节点和关系。

### (★) 角色管理

```cypher
CREATE ROLE my_role
```

创建一个角色。

```cypher
CREATE ROLE my_second_role IF NOT EXISTS AS COPY OF my_role
```

创建一个名为 my_second_role 的角色，除非它已经存在，作为现有 my_role 的副本。

```cypher
RENAME ROLE my_second_role TO my_other_role
```

将名为 my_second_role 的角色重命名为 my_other_role。

```cypher
GRANT ROLE my_role, my_other_role TO alice
```

将角色分配给用户。

```cypher
REVOKE ROLE my_other_role FROM alice
```

从用户中删除指定的角色。

```cypher
SHOW ROLES
```

列出系统中的所有角色。

```cypher
SHOW ROLES
YIELD role
WHERE role CONTAINS 'my'
```

列出角色，根据角色名称进行过滤，并进一步根据名称是否包含 'my' 进行筛选。

```cypher
SHOW POPULATED ROLES WITH USERS
```

列出系统中至少分配给一个用户的所有角色，以及分配给这些角色的用户。

```cypher
DROP ROLE my_role
```

删除一个角色。

### (★) 图写入权限

```cypher
GRANT CREATE ON GRAPH * NODES Label TO my_role
```

将创建权限授予角色对所有图中具有指定标签的所有节点。

```cypher
DENY DELETE ON GRAPH neo4j TO my_role
```

拒绝角色对指定图中的所有节点和关系的删除权限。

```cypher
REVOKE SET LABEL Label ON GRAPH * FROM my_role
```

撤销对角色在所有图中设置指定标签的权限。

```cypher
GRANT REMOVE LABEL * ON GRAPH foo TO my_role
```

将删除标签权限授予角色对指定图中的所有标签。

```cypher
DENY SET PROPERTY {prop} ON GRAPH foo RELATIONSHIPS Type TO my_role
```

拒绝角色对指定图中具有指定类型的所有关系的特定属性的设置权限。

```cypher
GRANT MERGE {*} ON GRAPH * NODES Label TO my_role
```

将合并权限授予角色对所有图中具有指定标签的所有节点的所有属性。

```cypher
REVOKE WRITE ON GRAPH * FROM my_role
```

撤销对角色在所有图中的写入权限。

```cypher
DENY ALL GRAPH PRIVILEGES ON GRAPH foo TO my_role
```

拒绝角色对指定图的所有图权限。

### (★) 显示权限

```cypher
SHOW PRIVILEGES AS COMMANDS
```

以Cypher命令的形式列出系统中的所有权限。

```cypher
SHOW PRIVILEGES
```

列出系统中的所有权限，以及它们所分配的角色。

```cypher
SHOW PRIVILEGES
YIELD role, action, access
WHERE role = 'my_role'
```

列出关于权限的信息，根据角色、操作和访问进行筛选，并进一步根据角色名称进行细化。

```cypher
SHOW ROLE my_role PRIVILEGES AS COMMANDS
```

以Cypher命令的形式列出分配给角色的所有权限。

```cypher
SHOW ROLE my_role, my_second_role PRIVILEGES AS COMMANDS
```

以Cypher命令的形式列出分配给多个角色的所有权限。

```cypher
SHOW USER alice PRIVILEGES AS COMMANDS
```

以Cypher命令的形式列出用户的所有权限，以及他们所分配的角色。

```cypher
SHOW USER PRIVILEGES AS COMMANDS
```

以Cypher命令的形式列出当前登录用户的所有权限，以及他们所分配的角色。

### (★) 数据库权限
<!--rehype:wrap-class=col-span-2 row-span-2-->

```cypher
GRANT ACCESS ON DATABASE * TO my_role
```

将访问权限授予角色，以便对所有数据库进行访问和运行查询。

```cypher
GRANT START ON DATABASE * TO my_role
```

将启动权限授予角色，以便启动所有数据库。

```cypher
GRANT STOP ON DATABASE * TO my_role
```

将停止权限授予角色，以便停止所有数据库。

```cypher
GRANT CREATE INDEX ON DATABASE foo TO my_role
```

将在指定数据库上创建索引的权限授予角色。

```cypher
GRANT DROP INDEX ON DATABASE foo TO my_role
```

将在指定数据库上删除索引的权限授予角色。

```cypher
GRANT SHOW INDEX ON DATABASE * TO my_role
```

将显示所有数据库上的索引的权限授予角色。

```cypher
DENY INDEX MANAGEMENT ON DATABASE bar TO my_role
```

拒绝在指定数据库上创建和删除索引的权限授予角色。

```cypher
GRANT CREATE CONSTRAINT ON DATABASE * TO my_role
```

将在所有数据库上创建约束的权限授予角色。

```cypher
DENY DROP CONSTRAINT ON DATABASE * TO my_role
```

拒绝在所有数据库上删除约束的权限授予角色。

```cypher
DENY SHOW CONSTRAINT ON DATABASE foo TO my_role
```

拒绝在指定数据库上显示约束的权限授予角色。

```cypher
REVOKE CONSTRAINT ON DATABASE * FROM my_role
```

撤销授予和拒绝在所有数据库上创建和删除约束的权限授予角色。

```cypher
GRANT CREATE NEW LABELS ON DATABASE * TO my_role
```

将在所有数据库上创建新标签的权限授予角色。

```cypher
DENY CREATE NEW TYPES ON DATABASE foo TO my_role
```

拒绝在指定数据库上创建新关系类型的权限授予角色。

```cypher
REVOKE GRANT CREATE NEW PROPERTY NAMES ON DATABASE bar FROM my_role
```

从角色撤销在指定数据库上创建新属性名称的权限。

```cypher
GRANT NAME MANAGEMENT ON HOME DATABASE TO my_role
```

将在主数据库上创建标签、关系类型和属性名称的权限授予角色。

```cypher
GRANT ALL ON DATABASE baz TO my_role
```

将对指定数据库的访问、创建和删除索引和约束、创建新标签、类型和属性名称的权限授予角色。

```cypher
GRANT SHOW TRANSACTION (*) ON DATABASE foo TO my_role
```

将列出在指定数据库上所有用户的事务和查询的权限授予角色。

```cypher
DENY TERMINATE TRANSACTION (user1, user2) ON DATABASES * TO my_role
```

拒绝在所有数据库上终止来自用户1和用户2的事务和查询的权限授予角色。

```cypher
REVOKE GRANT TRANSACTION MANAGEMENT ON HOME DATABASE FROM my_role
```

从角色撤销在主数据库上列出和终止所有用户的事务和查询的权限授予

### (★) 角色管理权限

```cypher
GRANT CREATE ROLE ON DBMS TO my_role
```

将创建角色的权限授予角色。

```cypher
GRANT RENAME ROLE ON DBMS TO my_role
```

将重命名角色的权限授予角色。

```cypher
GRANT DROP ROLE ON DBMS TO my_role
```

将删除角色的权限授予角色。

```cypher
DENY ASSIGN ROLE ON DBMS TO my_role
```

拒绝将角色分配给用户的权限授予角色。

```cypher
DENY REMOVE ROLE ON DBMS TO my_role
```

拒绝从用户中删除角色的权限授予角色。

```cypher
REVOKE DENY SHOW ROLE ON DBMS FROM my_role
```

从角色撤销对显示角色的权限的拒绝。

```cypher
GRANT ROLE MANAGEMENT ON DBMS TO my_role
```

将管理角色的所有权限授予角色。

### (★) 用户管理权限
<!--rehype:wrap-class=row-span-3-->

```cypher
GRANT CREATE USER ON DBMS TO my_role
```

将创建用户的权限授予角色。

```cypher
GRANT RENAME USER ON DBMS TO my_role
```

将重命名用户的权限授予角色。

```cypher
DENY ALTER USER ON DBMS TO my_role
```

拒绝更改用户的权限授予角色。

```cypher
REVOKE SET PASSWORDS ON DBMS FROM my_role
```

从角色撤销对更改用户密码的授权和拒绝。

```cypher
REVOKE GRANT SET USER STATUS ON DBMS FROM my_role
```

从角色撤销对更改用户帐户状态的授权。

```cypher
GRANT SET USER HOME DATABASE ON DBMS TO my_role
```

将更改用户主数据库的权限授予角色。

```cypher
GRANT DROP USER ON DBMS TO my_role
```

将删除用户的权限授予角色。

```cypher
REVOKE DENY SHOW USER ON DBMS FROM my_role
```

从角色撤销对显示用户的权限的拒绝。

```cypher
GRANT USER MANAGEMENT ON DBMS TO my_role
```

将管理用户的所有权限授予角色。

### (★) 数据库管理权限
<!--rehype:wrap-class=col-span-2-->

```cypher
GRANT CREATE DATABASE ON DBMS TO my_role
```

将创建数据库的权限授予角色。

```cypher
REVOKE DENY DROP DATABASE ON DBMS FROM my_role
```

从角色撤销对删除数据库的拒绝权限。

```cypher
DENY DATABASE MANAGEMENT ON DBMS TO my_role
```

拒绝所有管理数据库的权限授予角色。

### (★) 权限管理权限
<!--rehype:wrap-class=col-span-2-->

```cypher
GRANT SHOW PRIVILEGE ON DBMS TO my_role
```

将显示权限的权限授予角色。

```cypher
DENY ASSIGN PRIVILEGE ON DBMS TO my_role
```

拒绝将权限分配给角色的权限授予角色。

```cypher
REVOKE GRANT REMOVE PRIVILEGE ON DBMS FROM my_role
```

从角色撤销对从角色中删除权限的授权权限。

```cypher
REVOKE PRIVILEGE MANAGEMENT ON DBMS FROM my_role
```

从角色撤销管理权限的所有授予和拒绝。

### (★) DBMS权限
<!--rehype:wrap-class=col-span-2-->

```cypher
GRANT ALL ON DBMS TO my_role
```

将执行所有角色管理、用户管理、数据库管理和权限管理的权限授予角色。
