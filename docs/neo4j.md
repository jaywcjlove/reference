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

Neo4j 示例
---

### 创建

创建多个节点

```cypher
CREATE (n:Person {name:'Sally'}) RETURN n;
CREATE (n:Person {name:'Steve'}) RETURN n;
```

创建 `FRIENDS` 关系

```cypher
MATCH (a:Person {name:'Sally'}), 
      (b:Person {name:'Steve'}) 
MERGE (a)-[:FRIENDS]->(b)
```

创建节点的时候就建好 `FRIENDS` 关系

```cypher
CREATE (a:Person {name:'Todd'})-[r:FRIENDS]->(b:Person {name:'Carlos'})
```

为创建完成的关系增加 `since` 属性

```cypher
MATCH (a:Person {name:'Sally'}), 
      (b:Person {name:'Steve'}) 
MERGE (a)-[:FRIENDS {since:2001}]->(b)
```

### 删除
<!--rehype:wrap-class=col-span-2-->

删除所有节点

```cypher
MATCH (n) DETACH DELETE n
```

删除 `Person`中 `name`为 `Mike`节点的 `test`属性

```cypher
MATCH (a:Person {name:'Mike'}) SET a.test='test'
MATCH (a:Person {name:'Mike'}) REMOVE a.test
```

删除 `Location` 中 `city` 为 `Portland` 的节点

```cypher
MATCH (a:Location {city:'Portland'}) DELETE a
```

删除有关系的节点（此处rel是写死的，指的是所有关系）

```cypher
MATCH (a:Person {name:'Todd'})-[rel]-(b:Person) DELETE a,b,rel
```

### 查询
<!--rehype:wrap-class=row-span-3-->

查询所有在 `Boston` 出生的人物

```cypher
MATCH (a:Person)-[:BORN_IN]->(b:Location {city:'Boston'}) RETURN a,b
```

查询所有对外有关系的节点

```cypher
MATCH (a)-->() RETURN a
```

 查询所有有关系的节点

```cypher
MATCH (a)--() RETURN a
```

查询所有对外有关系的节点，以及关系类型

```cypher
MATCH (a)-[r]->() RETURN a.name, type(r)
```

查询所有有结婚关系的节点

```cypher
MATCH (n)-[:MARRIED]-() RETURN n
```

查找某人的朋友的朋友

```cypher
MATCH (a:Person {name:'Mike'})-[r1:FRIENDS]-()-[r2:FRIENDS]-(friend_of_a_friend) RETURN friend_of_a_friend.name AS fofName
```

### 创建节点和关系
<!--rehype:wrap-class=col-span-2-->

```cypher
// 创建节点
CREATE (n:Person {name: 'Alice', age: 30})
CREATE (n:Person {name: 'Bob', age: 25})

// 创建关系
MATCH (alice:Person {name: 'Alice'}), (bob:Person {name: 'Bob'})
CREATE (alice)-[:FRIENDS]->(bob)
```

### 增加/修改节点的属性

```cypher
MATCH (a:Person {name:'Liz'}) SET a.age=34
MATCH (a:Person {name:'Shaw'}) SET a.age=32
MATCH (a:Person {name:'John'}) SET a.age=44
MATCH (a:Person {name:'Mike'}) SET a.age=25
```

### 查询节点和关系
<!--rehype:wrap-class=row-span-2-->

```cypher
// 查询所有节点和关系
MATCH (n)
RETURN n

// 查询特定节点
MATCH (n:Person)
WHERE n.name = 'Alice'
RETURN n

// 查询节点的关系
MATCH (n:Person)-[r]->()
WHERE n.name = 'Alice'
RETURN r
```

### 更新节点和关系

```cypher
// 更新节点属性
MATCH (n:Person {name: 'Alice'})
SET n.age = 31
RETURN n

// 删除节点
MATCH (n:Person {name: 'Bob'})
DELETE n
```

### 更复杂的查询
<!--rehype:wrap-class=col-span-2 row-span-2-->

```cypher
// 查找 Alice 的朋友的朋友
MATCH (alice:Person {name: 'Alice'})-[:FRIENDS]->()-[:FRIENDS]->(fof)
RETURN fof

// 查找共同朋友，这里的“,”相当于 AND 条件
MATCH (alice:Person {name: 'Alice'})-[:FRIENDS]->(friend),
      (bob:Person {name: 'Bob'})-[:FRIENDS]->(friend)
RETURN friend
```

通过观察`John的朋友`看过的电影为`John`推荐电影，并且不再推荐`John`他自己已经看过的电影。

```cypher
MATCH (tom:Person {name: "John Johnson"})-[:IS_FRIEND_OF]->(user)-[:HAS_SEEN]->(movie)
WHERE NOT tom-[:HAS_SEEN]->(movie) RETURN movie.name;
```

找出所有标题以`Apollo`开头且发行年份早于`1996`年的电影节点

```cypher
MATCH (node:Movie)
WHERE node.title =~ 'Apollo.*' AND node.released < 1996
RETURN node
```

### 排序&分页

以电影名字排序，每一网页只显示10部电影，下面的查询返回了第三页（21~30项）。

```cypher
match (alice:Person {name: 'Alice'})-[HAS_SEEN]->(movie) 
return movie 
order by movie.name 
skip 20 
limit 10
```

### 聚合函数

计算每一部电影被观看的数量，按数量排序

```cypher
match (node:Movie)-[:HAS_BEEN_SEEN]->() 
return node,count(*) 
order by count(*) desc;
```

要求`John`所有朋友的平均年龄，可以使用以下查询

```cypher
match (node:users{name: "John Johnson"})-[:IS_FRIEND_OF]-(friend) 
where HAS(friend.yearOfBirth) 
return avg(2014-friend.yearOfBirth);
```
