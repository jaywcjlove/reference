<!--rehype:class=home-card-->
Neo4j备忘清单
===

这个 [neo4j](https://neo4j.com/docs/) 快速参考备忘单显示了它的常用命令

## 入门

### Neo4J安装

首先在 [https://neo4j.com/download/](https://link.zhihu.com/?target=https%3A//neo4j.com/download/) 下载Neo4J。Neo4J分为社区版和企业版，企业版在横向扩展、权限控制、运行性能、HA等方面都比社区版好，适合正式的生产环境，普通的学习和开发采用免费社区版就好。

在Mac或者Linux中，安装好jdk后，直接解压下载好的Neo4J包，运行`bin/neo4j start`即可

### Neo4J使用

Neo4J提供了一个用户友好的web界面，可以进行各项配置、写入、查询等操作，并且提供了可视化功能。类似ElasticSearch一样，我个人非常喜欢这种开箱即用的设计。

打开浏览器，输入`http://127.0.0.1:7474/browser/`，可以进入管理页面

## Neo4j示例

### 创建

创建多个节点

```text
CREATE (n:Person {name:'Sally'}) RETURN n;
CREATE (n:Person {name:'Steve'}) RETURN n;
```

创建‘FRIENDS’关系

```text
MATCH (a:Person {name:'Sally'}), 
      (b:Person {name:'Steve'}) 
MERGE (a)-[:FRIENDS]->(b)
```

创建节点的时候就建好‘FRIENDS’关系

```text
CREATE (a:Person {name:'Todd'})-[r:FRIENDS]->(b:Person {name:'Carlos'})
```

为创建完成的关系增加‘since’属性

```text
MATCH (a:Person {name:'Sally'}), 
      (b:Person {name:'Steve'}) 
MERGE (a)-[:FRIENDS {since:2001}]->(b)
```

### 删除

删除所有节点

```text
MATCH (n) DETACH DELETE n
```

删除‘Person’中‘name‘为’Mike‘节点的’test‘属性

```text
MATCH (a:Person {name:'Mike'}) SET a.test='test'
MATCH (a:Person {name:'Mike'}) REMOVE a.test
```

删除’Location‘中’city‘为’Portland‘的节点

```text
MATCH (a:Location {city:'Portland'}) DELETE a
```

删除有关系的节点（此处rel是写死的，指的是所有关系）

```text
MATCH (a:Person {name:'Todd'})-[rel]-(b:Person) DELETE a,b,rel
```

### 查询

查询所有在Boston出生的人物

```text
MATCH (a:Person)-[:BORN_IN]->(b:Location {city:'Boston'}) RETURN a,b
```

查询所有对外有关系的节点

```text
MATCH (a)-->() RETURN a
```

 查询所有有关系的节点

```text
MATCH (a)--() RETURN a
```

查询所有对外有关系的节点，以及关系类型

```text
MATCH (a)-[r]->() RETURN a.name, type(r)
```

查询所有有结婚关系的节点

```text
MATCH (n)-[:MARRIED]-() RETURN n
```

查找某人的朋友的朋友

```text
MATCH (a:Person {name:'Mike'})-[r1:FRIENDS]-()-[r2:FRIENDS]-(friend_of_a_friend) RETURN friend_of_a_friend.name AS fofName
```

### 增加/修改节点的属性

```text
MATCH (a:Person {name:'Liz'}) SET a.age=34
MATCH (a:Person {name:'Shawn'}) SET a.age=32
MATCH (a:Person {name:'John'}) SET a.age=44
MATCH (a:Person {name:'Mike'}) SET a.age=25
```
