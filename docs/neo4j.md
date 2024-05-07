Neo4j 备忘清单
===

这个 [neo4j](https://neo4j.com/docs/) 快速参考备忘单显示了它的常用命令

入门
---

### Neo4J 安装

当开始使用 Neo4j 时，首先需要从[官网下载页面](https://neo4j.com/download/)下载 Neo4j。Neo4j 分为社区版和企业版。尽管企业版在横向扩展、权限控制、运行性能和高可用性等方面更优秀，适合正式的生产环境，但对于普通的学习和开发，免费的社区版就足够了。

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
<!--rehype:wrap-class=col-span-2-->

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
