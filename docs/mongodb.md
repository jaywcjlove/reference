MongoDB 备忘清单
===

[MongoDB](https://www.mongodb.com/developer/products/mongodb/cheat-sheet/#connect-mongodb-shell) 此备忘单包含一些方便的提示、命令和快速参考，可让您立即连接并进行 CRUD

入门
---

### 连接 MongoDB Shell
<!--rehype:wrap-class=col-span-2-->

```bash
mongo # 默认连接到 mongodb://127.0.0.1:27017
mongo --host <host> --port <port> -u <user> -p <pwd> # 如果需要提示，请省略密码
mongo "mongodb://192.168.1.1:27017"
# MongoDB 地图集
mongo "mongodb+srv://cluster-name.abcde.mongodb.net/<dbname>" --username <username>
```

### 显示数据库

```mongodb
show dbs
db // 打印当前数据库
```

### 切换数据库

```mongodb
use <database_name>
```

### 显示集合

```mongodb
show collections
```

### 运行 JavaScript 文件

```mongodb
load("myScript.js")
```

CRUD
---

### 创建
<!--rehype:wrap-class=col-span-3-->

```mongodb
db.coll.insertOne({ name: "Max" })
db.coll.insert([{ name: "Max"}, {name:"Alex"}]) // 批量插入
db.coll.insert([{ name: "Max"}, {name:"Alex"}], {ordered: false}) // 无序批量插入
db.coll.insert({ date: ISODate()})
db.coll.insert({ name: "Max"}, {"writeConcern": {"w": "majority", "wtimeout": 5000}})
```

### 寻找文件

Commands | Description
:-- | ---
`db.docx.findOne()` | 查找一个随机文档
`db.docx.find().prettyPrint()` | 查找所有文档
`db.docx.find({}, {name:true, _id:false})` | 仅显示文档 Docx 的名称
`db.docx.find({}, {name:true, _id:false})` | 可以在多个文件中按属性查找一个文件

### 使用运算符查找文档
<!--rehype:wrap-class=col-span-2-->

Operator | Description | Commands
:-- | --- | ---
`$gt`  | 大于 | `db.docx.find({class:{$gt:'T'}`
`$gte`  | 大于等于 | `db.docx.find({class:{$gt:'T'}`
`$lt`  | 小于 | `db.docx.find({class:{$lt:'T'}`
`$lte` | 小于等于 | `db.docx.find({class:{$lte:'T'}`
`$exists` | 属性是否存在 | `db.docx.find({class:{$gt:'T'}`
`$regex` | 正则表达式匹配 | `db.docx.find({name:{$regex:'^USS\\sE'}})`
`$type`  | 按元素类型搜索 | `db.docx.find({name : {$type:4}})`

### 读取
<!--rehype:wrap-class=col-span-3-->

```mongodb
db.coll.findOne() // 返回单个文档
db.coll.find()    // 返回一个游标 - 显示 20 个结果 - "it" 显示更多
db.coll.find().pretty()
db.coll.find({name: "Max", age: 32}) // 隐式逻辑“与”。
db.coll.find({date: ISODate("2020-09-25T13:57:17.180Z")})

// 或“queryPlanner”或“allPlansExecution”
db.coll.find({name: "Max", age: 32}).explain("executionStats") 
db.coll.distinct("name")

// 数数
db.coll.count({age: 32})          // 基于馆藏元数据的估计
db.coll.estimatedDocumentCount()  // 基于馆藏元数据的估计
db.coll.countDocuments({age: 32}) // 聚合管道的别名 - 准确计数

// Comparison 比较
db.coll.find({"year": {$gt: 1970}})
db.coll.find({"year": {$gte: 1970}})
db.coll.find({"year": {$lt: 1970}})
db.coll.find({"year": {$lte: 1970}})
db.coll.find({"year": {$ne: 1970}})
db.coll.find({"year": {$in: [1958, 1959]}})
db.coll.find({"year": {$nin: [1958, 1959]}})


// Logical 逻辑
db.coll.find({name:{$not: {$eq: "Max"}}})
db.coll.find({$or: [{"year" : 1958}, {"year" : 1959}]})
db.coll.find({$nor: [{price: 1.99}, {sale: true}]})
db.coll.find({
  $and: [
    {$or: [{qty: {$lt :10}}, {qty :{$gt: 50}}]},
    {$or: [{sale: true}, {price: {$lt: 5 }}]}
  ]
})

// Element 元素
db.coll.find({name: {$exists: true}})
db.coll.find({"zipCode": {$type: 2 }})
db.coll.find({"zipCode": {$type: "string"}})

// Aggregation Pipeline 聚合管道
db.coll.aggregate([
  {$match: {status: "A"}},
  {$group: {_id: "$cust_id", total: {$sum: "$amount"}}},
  {$sort: {total: -1}}
])

// 使用“文本”索引进行文本搜索
db.coll.find({$text: {$search: "cake"}}, {score: {$meta: "textScore"}})
        .sort({score: {$meta: "textScore"}})

// Regex 正则表达式
db.coll.find({name: /^Max/})   // 正则表达式：以字母“M”开头
db.coll.find({name: /^Max$/i}) // 正则表达式不区分大小写

// Array
db.coll.find({tags: {$all: ["Realm", "Charts"]}})
db.coll.find({field: {$size: 2}}) // 无法索引 - 更喜欢存储数组的大小并更新它
db.coll.find({results: {$elemMatch: {product: "xyz", score: {$gte: 8}}}})

// Projections 预测
db.coll.find({"x": 1}, {"actors": 1})               // actors + _id
db.coll.find({"x": 1}, {"actors": 1, "_id": 0})     // actors
db.coll.find({"x": 1}, {"actors": 0, "summary": 0}) // 除了“actors”和“summary”之外的所有内容

// Sort 排序, skip 跳过, limit 限制
db.coll.find({}).sort({"year": 1, "rating": -1}).skip(10).limit(3)

// Read Concern 阅读关注
db.coll.find().readConcern("majority")
```

### 更新
<!--rehype:wrap-class=col-span-3-->

```mongodb
db.coll.update({"_id": 1}, {"year": 2016}) // 警告！ 替换整个文档
db.coll.update({"_id": 1}, {$set: {"year": 2016, name: "Max"}})
db.coll.update({"_id": 1}, {$unset: {"year": 1}})
db.coll.update({"_id": 1}, {$rename: {"year": "date"} })
db.coll.update({"_id": 1}, {$inc: {"year": 5}})
db.coll.update({"_id": 1}, {$mul: {price: NumberDecimal("1.25"), qty: 2}})
db.coll.update({"_id": 1}, {$min: {"imdb": 5}})
db.coll.update({"_id": 1}, {$max: {"imdb": 8}})
db.coll.update({"_id": 1}, {$currentDate: {"lastModified": true}})
db.coll.update({"_id": 1}, {$currentDate: {"lastModified": {$type: "timestamp"}}})

// Array
db.coll.update({"_id": 1}, {$push :{"array": 1}})
db.coll.update({"_id": 1}, {$pull :{"array": 1}})
db.coll.update({"_id": 1}, {$addToSet :{"array": 2}})
db.coll.update({"_id": 1}, {$pop: {"array": 1}})  // 最后一个元素
db.coll.update({"_id": 1}, {$pop: {"array": -1}}) // 第一个元素
db.coll.update({"_id": 1}, {$pullAll: {"array" :[3, 4, 5]}})
db.coll.update({"_id": 1}, {$push: {scores: {$each: [90, 92, 85]}}})
db.coll.updateOne({"_id": 1, "grades": 80}, {$set: {"grades.$": 82}})
db.coll.updateMany({}, {$inc: {"grades.$[]": 10}})
db.coll.update({}, {$set: {"grades.$[element]": 100}}, {multi: true, arrayFilters: [{"element": {$gte: 100}}]})

// 更新很多
db.coll.update({"year": 1999}, {$set: {"decade": "90's"}}, {"multi":true})
db.coll.updateMany({"year": 1999}, {$set: {"decade": "90's"}})

// FindOneAndUpdate 查找并更新
db.coll.findOneAndUpdate({"name": "Max"}, {$inc: {"points": 5}}, {returnNewDocument: true})

// Upsert 更新插入
db.coll.update({"_id": 1}, {$set: {item: "apple"}, $setOnInsert: {defaultQty: 100}}, {upsert: true})

// Replace 代替
db.coll.replaceOne({"name": "Max"}, {"firstname": "Maxime", "surname": "Beugnet"})

// Save 保存
db.coll.save({"item": "book", "qty": 40})

// Write concern 写关注
db.coll.update({}, {$set: {"x": 1}}, {"writeConcern": {"w": "majority", "wtimeout": 5000}})
```

### 删除
<!--rehype:wrap-class=col-span-3-->

```mongodb
db.coll.remove({name: "Max"})
db.coll.remove({name: "Max"}, {justOne: true})
db.coll.remove({}) // 警告！删除所有文档但不删除集合本身及其索引定义
db.coll.remove({name: "Max"}, {"writeConcern": {"w": "majority", "wtimeout": 5000}})
db.coll.findOneAndDelete({"name": "Max"})
```

数据库和集合
---

### Drop

```mongodb
// 删除集合及其索引定义
db.coll.drop()    
// 仔细检查你*不*在 PROD 集群上......:-)
db.dropDatabase() 
```

### 创建集合
<!--rehype:wrap-class=col-span-2 row-span-2-->

```mongodb
// 使用 $jsonschema 创建集合
db.createCollection("contacts", {
   validator: {$jsonSchema: {
      bsonType: "object",
      required: ["phone"],
      properties: {
         phone: {
            bsonType: "string",
            description: "必须是一个字符串并且是必需的"
         },
         email: {
            bsonType: "string",
            pattern: "@mongodb\.com$",
            description: "必须是字符串并匹配正则表达式模式"
         },
         status: {
            enum: [ "Unknown", "Incomplete" ],
            description: "只能是枚举值之一"
         }
      }
   }}
})
```

### 其他采集功能

```mongodb
db.coll.stats()
db.coll.storageSize()
db.coll.totalIndexSize()
db.coll.totalSize()
db.coll.validate({full: true})
// 第二个参数用于删除目标集合（如果存在）
db.coll.renameCollection("new_coll", true)
```

索引
---

### 列表索引

```mongodb
db.coll.getIndexes()
db.coll.getIndexKeys()
```

### 创建索引
<!--rehype:wrap-class=col-span-2 row-span-3-->

```mongodb
// 索引类型
db.coll.createIndex({"name": 1})                // 单字段索引
db.coll.createIndex({"name": 1, "date": 1})     // 复合索引
db.coll.createIndex({foo: "text", bar: "text"}) // 文本索引
db.coll.createIndex({"$**": "text"})            // 通配符文本索引
db.coll.createIndex({"userMetadata.$**": 1})    // 通配符索引
db.coll.createIndex({"loc": "2d"})              // 二维索引
db.coll.createIndex({"loc": "2dsphere"})        // 2dsphere 索引
db.coll.createIndex({"_id": "hashed"})          // 哈希索引

// Index Options
db.coll.createIndex({"lastModifiedDate": 1}, {expireAfterSeconds: 3600})      // TTL指数
db.coll.createIndex({"name": 1}, {unique: true})
db.coll.createIndex({"name": 1}, {partialFilterExpression: {age: {$gt: 18}}}) // 部分索引
// 强度为 1 或 2 的不区分大小写的索引
db.coll.createIndex({"name": 1}, {collation: {locale: 'en', strength: 1}})
db.coll.createIndex({"name": 1 }, {sparse: true})
```

### 删除索引

```mongodb
db.coll.dropIndex("name_1")
```

### 隐藏/取消隐藏索引

```mongodb
db.coll.hideIndex("name_1")
db.coll.unhideIndex("name_1")
```

方便的命令
---

###
<!--rehype:wrap-class=col-span-3&style=display:none;&wrap-style=padding-top: 0;-->

```mongodb
use admin
db.createUser({"user": "root", "pwd": passwordPrompt(), "roles": ["root"]})
db.dropUser("root")
db.auth( "user", passwordPrompt() )

use test
db.getSiblingDB("dbname")
db.currentOp()
db.killOp(123) // opid

db.fsyncLock()
db.fsyncUnlock()

db.getCollectionNames()
db.getCollectionInfos()
db.printCollectionStats()
db.stats()

db.getReplicationInfo()
db.printReplicationInfo()
db.isMaster()
db.hostInfo()
db.printShardingStatus()
db.shutdownServer()
db.serverStatus()

db.setSlaveOk()
db.getSlaveOk()

db.getProfilingLevel()
db.getProfilingStatus()
db.setProfilingLevel(1, 200) // 0 == OFF, 1 == ON with slowms, 2 == ON

db.enableFreeMonitoring()
db.disableFreeMonitoring()
db.getFreeMonitoringStatus()

db.createView("viewName", "sourceColl", [{$project:{department: 1}}])
```

各种各样的
---

### 改变流

```mongodb
watchCursor = db.coll.watch([
   {
      $match : {"operationType": "insert" }
   }
])

while (!watchCursor.isExhausted()){
   if (watchCursor.hasNext()){
      print(tojson(watchCursor.next()));
   }
}
```

### 分片集群
<!--rehype:wrap-class=col-span-2 row-span-3-->

```mongodb
sh.status()
sh.addShard("rs1/mongodbd1.example.net:27017")
sh.shardCollection("mydb.coll", {zipcode: 1})

sh.moveChunk("mydb.coll", { zipcode: "53187" }, "shard0019")
sh.splitAt("mydb.coll", {x: 70})
sh.splitFind("mydb.coll", {x: 70})
sh.disableAutoSplit()
sh.enableAutoSplit()

sh.startBalancer()
sh.stopBalancer()
sh.disableBalancing("mydb.coll")
sh.enableBalancing("mydb.coll")
sh.getBalancerState()
sh.setBalancerState(true/false)
sh.isBalancerRunning()

sh.addTagRange("mydb.coll", {state: "NY",zip: MinKey}, {state: "NY",zip: MaxKey}, "NY")
sh.removeTagRange("mydb.coll", {state: "NY",zip: MinKey}, {state: "NY",zip: MaxKey}, "NY")
sh.addShardTag("shard0000", "NYC")
sh.removeShardTag("shard0000", "NYC")

sh.addShardToZone("shard0000", "JFK")
sh.removeShardFromZone("shard0000", "NYC")
sh.removeRangeFromZone("mydb.coll", {a: 1, b: 1}, {a: 10, b: 10})
```

### 副本集

```mongodb
rs.status()
rs.initiate({"_id": "replicaTest",
  members: [
    { _id: 0, host: "127.0.0.1:27017" },
    { _id: 1, host: "127.0.0.1:27018" },
    { _id: 2, host: "127.0.0.1:27019",
    arbiterOnly:true }]
})
rs.add("mongodbd1.example.net:27017")
rs.addArb("mongodbd2.example.net:27017")
rs.remove("mongodbd1.example.net:27017")
rs.conf()
rs.isMaster()
rs.printReplicationInfo()
rs.printSlaveReplicationInfo()
rs.reconfig(<valid_conf>)
rs.slaveOk()
rs.stepDown(20, 5)
// (stepDownSecs, secondaryCatchUpPeriodSecs)
```
