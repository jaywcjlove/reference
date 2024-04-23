Elasticsearch 备忘清单
===

这是 [Elasticsearch](https://www.elastic.co/guide/index.html) 的官方文档。 你可以在这里找到 elasticsearch 的所有文档。

Elasticsearch是一个基于Lucene库的搜索引擎。它提供了一个分布式、支持多租户的全文搜索引擎，具有HTTP Web接口和无模式JSON文档。Elasticsearch是用Java开发的，并作为看源软件发布。官方客户端在Java、.NET（C#）、PHP、Python、Apache Groovy、Ruby和许多其他语言中都是可用的。根据DB-Engines的排名显示，Elasticsearch是最受欢迎的企业搜索引擎，其次是Apache Solr，也是基于Lucene。

入门
----
<!--rehype:body-class=cols-2-->

### 入门

#### 安装介绍

##### 下载

- 注意
  
  version 需替换为指定版本
  
  官方包有的功能只能试用，完整功能需要付费，请仔细阅读官网文档。

- windows

    下载地址:
    
    [https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-\${VERSION}-windows-x86_64.zip](https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-${VERSION}-windows-x86_64.zip)

- linux

    ```shell
    wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-${VERSION}-linux-x86_64.tar.gz
    wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-${VERSION}-linux-x86_64.tar.gz.sha512
    shasum -a 512 -c elasticsearch-${VERSION}-linux-x86_64.tar.gz.sha512 
    tar -xzf elasticsearch-${VERSION}-linux-x86_64.tar.gz
    cd elasticsearch-${VERSION}/
    ```

- macos
  
    ```shell
    curl -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-${VERSION}-darwin-x86_64.tar.gz
    curl https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-${VERSION}-darwin-x86_64.tar.gz.sha512 | shasum -a 512 -c - 
    tar -xzf elasticsearch-${VERSION}-darwin-x86_64.tar.gz
    cd elasticsearch-${VERSION}/ 
    ```

#### 启动

- 启动 Elasticsearch

    ```shell
    $ ./bin/elasticsearch
    ```

- 设置密码
  
    ```shell
    export ELASTIC_PASSWORD="your_password"
    ```
- 测试是否启动成功
    
    ```shell
    curl --cacert $ES_HOME/config/certs/http_ca.crt -u elastic:$ELASTIC_PASSWORD https://localhost:9200 
    ```

    成功则返回样例如下:

    ```json
    {
        "name" : "Cp8oag6",
        "cluster_name" : "elasticsearch",
        "cluster_uuid" : "AT69_T_DTp-1qgIJlatQqA",
        "version" : {
            "number" : "${VERSION}",
            "build_type" : "tar",
            "build_hash" : "f27399d",
            "build_flavor" : "default",
            "build_date" : "2016-03-30T09:51:41.449Z",
            "build_snapshot" : false,
            "lucene_version" : "9.10.0",
            "minimum_wire_compatibility_version" : "1.2.3",
            "minimum_index_compatibility_version" : "1.2.3"
        },
        "tagline" : "You Know, for Search"
    }
    ```



### elasticsearch 和 RDMS 的对比

| RDMS                    | elasticsearch     |
| ----------------------- | ----------------- |
| 数据库(database)        | 索引(index)       |
| 表(table)               | 类型(type)        |
| 行(row)                 | 文档(document)    |
| 列(column)              | 字段(field)       |
| 表结构                  | 映射              |
| 索引                    | 全文索引          |
| SQL                     | 查询DSL           |
| SELECT * FROM tablename | GET http://...    |
| UPDATE table SET        | PUT http://...    |
| DELETE                  | DELETE http://... |

操作
----

说明:

    1. 以 user_info 为索引名称，类比数据库，
    2. 字段有 id,username,password,nickname,age,info,remark 为例进行演示。

# DSL语法

## 基础语法规则

`curl -X<VERB> '<PROTOCOL>://<HOST>:<PORT>/<PATH>?<QUERY_STRING>' -d '<BODY>'`

    
- VERB HTTP 方法：GET, POST, PUT, HEAD, DELETE

- PROTOCOL：http 或者 https 协议（只有在 Elasticsearch 前面有 https 代理的时候可用）

- HOST：Elasticsearch 集群中的任何一个节点的主机名，如果是在本地的节点，那么就叫 localhost

- PORT：Elasticsearch HTTP 服务所在的端口，默认为 9200 

- PATH API 路径（例如_count 将返回集群中文档的数量），PATH：可以包含多个组件，例如_cluster/stats 或者_nodes/stats/jvm

- QUERY_STRING：一些可选的查询请求参数，例如?pretty 参数将使请求返回更加美观易读的 JSON 数据

- BODY：一个 JSON 格式的请求主体（如果请求需要的话） 



# 索引的操作

## 创建索引

- 统一请求 api 前缀 

    http://localhost:9200/

- DSL语法

    ```shell
    PUT /user_info
    {
        "settings": {
            "number_of_replicas": 1,
            "number_of_shards": 1
        },
        "mappings": {
            "properties": {
                "id": {
                    "type": "long",
                    "index": true
                },
                "username": {
                    "type": "keyword",
                    "index": true
                },
                "nickname": {
                    "type": "keyword",
                    "index": true
                },
                "password": {
                    "type": "keyword",
                    "index": false
                },
                "age": {
                    "type": "integer",
                    "index": true
                },
                "info": {
                    "type": "text",
                    "index": true
                },
                "remark": {
                    "type": "text",
                    "index": true
                }
            }
        }
    }
    ```

- curl 

    ```shell
    curl -XPUT "http://localhost:9200/user_info" -H 'Content-Type: application/json' -d'{ "settings": { "number_of_replicas": 1, "number_of_shards": 1 }, "mappings": { "properties": { "id": { "type": "long", "index": true }, "username": { "type": "keyword", "index": true }, "nickname": { "type": "keyword", "index": true }, "password": { "type": "keyword", "index": false }, "age": { "type": "integer", "index": true }, "info": { "type": "text", "index": true }, "remark": { "type": "text", "index": true } } } }'
    ```

- 参数说明：

    settings：索引信息设置

    number_of_shards：每个索引的主分片数，这个配置在索引创建后不能修改

    number_of_replicas：每个主分片的副本数，这个配置可以随时修改。

    mappings：索引映射定义

    properties：字段定义 properties里是json配置，key为字段名称（自定义名称），value是个嵌套json，type是指定字段的类型。

    -- 其他参数很多，请参考官网资料

## 删除索引

- DSL语法

    ```http
    DELETE /user_info
    ``` 

- curl
  
    ```shell
    curl -XDELETE "http://localhost:9200/user_info"
    ```


## 判断索引是否存在

- DSL语法
  
    ```http
    # 查看索引是否存在
    HEAD /user_info
    ```

- curl
  
    ```shell
    # 查看索引是否存在
    curl -XHEAD "http://localhost:9200/user_info"
    ```

## 开启/关闭索引

- 开启DSL语法
  
    ```http
    # 开启索引
    POST /user_info/_open
    ```

- curl
  
    ```shell
    # 开启索引
    curl -XPOST "http://localhost:9200/user_info/_open"
    ```

-  关闭DSL语法
  
    ```http
    # 关闭索引
    POST /user_info/_close
    ```

- curl
  
    ```shell
    # 关闭索引
    curl -XPOST "http://localhost:9200/user_info/_close"
    ```



## 索引的别名

- 添加别名DSL语法

    ```http
    # 添加别名
    POST /user_info/_alias/user1
    ```

- 添加别名curl
  
    ```shell
    # 添加别名
    curl -XPOST "http://localhost:9200/user_info/_alias/user1"
    ```


- 删除别名DSL语法
  
  ```http
  # 删除别名
  DELETE /user_info/_alias/user1
  ```

- 删除别名curl

    ```shell
    # 删除别名
    curl -XDELETE "http://localhost:9200/user_info/_alias/user1"
    ```

- 查看别名DSL语法

    ```http
    # 查看别名
    GET /_alias/user1
    ```


- 查看别名curl

    ```shell
    # 查看别名
    curl -XGET "http://localhost:9200/_alias/useraa"
    ```

## mapping 操作

类似修改数据库中列的操作

### 查看 mapping

- DSL语法
  
    ```http 
    # 查看mapping
    GET /user_info/_mapping
    ```

- curl
  
    ```shell
    # 查看mapping
    curl -XGET "http://localhost:9200/user_info/_mapping"
    ```

### 新增 mapping 

- 注意
  
  **需要注意的是字段映射只能增加，不能更改删除**

- DSL语法
  
    ```http
    # 新增mapping 
    PUT /user_info/_mapping
    {
        "properties":{
            "sex":{
                "type":"keyword"
            }
        }
    }
    ```

- curl
  
    ```shell
    # 新增mapping 
    curl -XPUT "http://localhost:9200/user_info/_mapping" -H 'Content-Type: application/json' -d'{ "properties":{ "sex":{ "type":"keyword" } } }'
    ```

# 文档的操作

##  添加文档
- DSL语法

    ```http
    # 新增一条数据
    POST /user_info/_doc/1
    {
        "id":1,
        "username":"username",
        "password":"123456",
        "nickname":"nickname",
        "age":18,
        "info":"一些个人相关的介绍",
        "remark":"备注信息",
        "sex":"男"
    }
    ```

- curl
  
    ```shell
    # 新增一条数据
    curl -XPOST "http://localhost:9200/user_info/_doc/1" -H 'Content-Type: application/json' -d'{ "id":1, "username":"username", "password":"123456", "nickname":"nickname", "age":18, "info":"一些个人相关的介绍", "remark":"备注信息", "sex":"男" }'
    ```


## 查询指定索引的所有文档

- 类似数据库中的 `select * from user_info;`

- DSL语法
  
    ```http
    GET /user_info/_search
    {
        "query": {
            "match_all": {}
        }
    }
    ```

- curl
  
    ```shell
    curl -XGET "http://localhost:9200/user_info/_search" -H 'Content-Type: application/json' -d'{ "query": { "match_all": {} } }'
    ```

## 通过 id 查询文档

- 类似数据库中的 `select * from user_info where id = 1;`

- DSL语法
  
    ```http
    # 通过id查询
    GET /user_info/_doc/1
    ```

- curl
  
    ```shell
    # 通过id查询
    curl -XGET "http://localhost:9200/user_info/_doc/1"
    ```


## 通过条件查询文档

### 精确查找

- 类似数据库中的 `select * from user_info where username = 'username';`
  
- DSL语法
  
    ```http
    # 通过条件查询
    GET /user_info/_search
    {
        "query": {
            "bool": {
                "must": [
                    { "term": { "username": "username" } }
                ]
            }
        }
    }
    ```

- curl
  
    ```shell
    # 通过条件查询
    curl -XGET "http://localhost:9200/user_info/_search" -H 'Content-Type: application/json' -d'{ "query": { "bool": { "must": [ { "term": { "username": "username" } } ] } } }'
    ```

### 模糊查找

- 类似数据库中的模糊查询 `select * from user_info where info like '%人%';`

- DSL语法
  
    ```http
    # 模糊查找
    GET /user_info/_search
    {
        "query": {
            "match": {
            "info": "人"
            }
        }
    }
    ```



### 范围查找

- 类似数据库中的范围查询 `select * from user_info where age between 18 and 30;`

- DSL语法

    ```http
    GET /user_info/_search
    {
        "query": {
            "range": {
                "age": {
                    "gt": 18,
                    "lt": 30
                }
            }
        }
    }
    ```

- curl
  
    ```shell
    curl -XGET "http://localhost:9200/user_info/_search" -H 'Content-Type: application/json' -d'{ "query": { "range": { "age": { "gt": 18, "lt": 30 } } } }'
    ```

### limit 查找

- 类似数据库中的 limit 查询 `select * from user_info limit 10;`
  
- DSL语法
  
    ```http
    GET /user_info/_search  
    {  
        "size": 10,  
        "query": {  
            "match_all": {}     
        }
    }
    ```

- curl
  
    ```shell
    curl -XGET "http://localhost:9200/user_info/_search" -H 'Content-Type: application/json' -d'{ "size": 1, "query": { "match_all": {} } }'
    ```

### limit offset 查找

- 类似数据库中的 limit 查询 `select * from user_info limit 0,10;`

- DSL语法
  
    ```http
    GET /user_info/_search  
    {  
        "size": 2,  
        "from": 1,  
        "query": {  
            "match_all": {}  
        }  
    }
    ```

- curl
  
    ```shell
    curl -XGET "http://localhost:9200/user_info/_search" -H 'Content-Type: application/json' -d'{ "size": 2, "from": 1, "query": { "match_all": {} } }'
    ```

- 参数说明
  
  - "size": 10表示我们想要返回的结果数量是10条。
  - "from": 20表示我们想要从结果集中的第21条记录开始返回（因为偏移是从0开始的）。
  - "query": `{"match_all": {}}` 是一个匹配所有文档的查询，因为我们没有特定的查询条件，只是想要分页结果。

### and 查询

- 类似数据库中的 and 查询 `select * from user_info where age > 18 and sex = '男';`
  
- DSL语法

    ```http
    GET /user_info/_search  
    {  
        "query": {
            "bool": {
                "must": [
                    { "range": { "age": { "gt": 18 } } },
                    { "term": { "sex": "男" } }
                ]   
            }
        }
    }
    ```

- curl
  
    ```shell
    curl -XGET "http://localhost:9200/user_info/_search" -H 'Content-Type: application/json' -d'{ "query": { "bool": { "must": [ { "range": { "age": { "gt": 17 } } }, { "term": { "sex": "男" } } ] } } }'
    ```

### or 查询

- 类似数据库中的 or 查询 `select * from user_info where age > 18 or sex = '男';`

- DSL语法
  
    ```http
    GET /user_info/_search
    {
        "query": {
            "bool": {
            "should": [
                {
                    "range": {
                        "age": {
                            "gt": 18
                        }
                    }
                },
                {
                    "term": {
                        "sex": "男"
                    }
                }
            ]
            }
        }
    }
    ```

- curl
  
    ```shell
    curl -XGET "http://localhost:9200/user_info/_search" -H 'Content-Type: application/json' -d'{ "query": { "bool": { "should": [ { "range": { "age": { "gt": 18 } } }, { "term": { "sex": "男" } } ] } } }'
    ```


## 删除文档

### 删除指定 id

- 类似数据库中的 delete 查询 `delete from user_info where id = 3;`

- DSL语法
  
    ```http
    # 删除文档
    DELETE /user_info/_doc/3
    ```

- curl
  
    ```shell
    # 删除文档
    curl -XDELETE "http://localhost:9200/user_info/_doc/3"
    ```

### 删除指定条件

- 类似数据库中的 delete 查询 `delete from user_info where age > 18;`
  
- DSL语法
  
    ```http
    POST /user_info/_delete_by_query
    {
        "query": {
            "range": {
                "age": {
                    "gt": 18
                }
            }
        }
    }
    ```
- curl
  
    ```shell
   curl -XPOST "http://localhost:9200/user_info/_delete_by_query" -H 'Content-Type: application/json' -d'{"query":{"range":{"age":{"gt":18}}}}'
    ```
