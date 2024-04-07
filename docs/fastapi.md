FastAPI 备忘清单
===

一个用于构建 API 的现代、快速（高性能）的 web 框架，使用 Python 3.6+ 并基于标准的 Python 类型提示

入门
---
<!--rehype:body-class=cols-2-->

### 安装 FastAPI

```shell
$ pip install "fastapi[all]"
```

#### 可以分开来安装

假如你想将应用程序部署到生产环境，你可能要执行以下操作：

```shell
$ pip install fastapi
```

并且安装 `uvicorn` 来作为服务器：

```shell
$ pip install "uvicorn[standard]"
```

#### 运行代码

```shell
$ uvicorn main:app --reload
```

Python: `3.9.5` FastAPI: `0.103.1`

### 最小程序

下面代码会直接启动http服务，也可以使用 `uvicorn main:app --reload`

```python
from fastapi import FastAPI
import uvicorn

app = FastAPI()
```

添加一个 API 的示例

```python
# http://127.0.0.1:8000/
@app.get("/")
async def root():
    return {"message": "Hello World"}

if __name__ == '__main__':
    uvicorn.run(app='main:app', reload=True)
```

### 路径参数

#### 最基本的路径参数

```python
# http://127.0.0.1:8000/items/1
@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id": item_id} # item_id自定义
```

#### 多个路径参数

```python
# http://127.0.0.1:8000/items/1/2
@app.get("/items/{item_id}/{user_id}")
async def read_item(item_id, user_id):
    return {"item_id": item_id, "user_id": user_id}
```

#### 有类型的路径参数

```python
# http://127.0.0.1:8000/items/1
@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}
```

#### 文件路径参数

```python
# http://127.0.0.1:8000/file//home/my/my.txt
@app.get("/file/{file_path:path}")
async def read_item(file_path):
    return {"file_path": file_path}
```

### 查询参数
<!--rehype:wrap-class=row-span-2-->

#### 带默认值的查询参数

```python
# http://127.0.0.1:8000/items/?skip=0&limit=2
fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}]

@app.get("/items/")
async def read_item(skip: int = 0, limit: int = 10):
    return fake_items_db[skip: skip + limit]
```

#### 可选查询参数

```python
# http://127.0.0.1:8000/items/1?q=admin
from typing import Union

@app.get("/items/{item_id}")
async def read_item(item_id: str, q: Union[str, None] = None):
    if q:
        return {"item_id": item_id, "q": q}
    return {"item_id": item_id}
```

#### 多路径多查询参数

```python
# http://127.0.0.1:8000/users/1/items/2
# or 
# http://127.0.0.1:8000/users/1/items/2?q=query&short=true
@app.get("/users/{user_id}/items/{item_id}")
async def read_user_item(
    user_id: int, 
    item_id: str, 
    q: Union[str, None] = None, 
    short: bool = False
):
    item = {"item_id": item_id, "owner_id": user_id}
    if q:
        item.update({"q": q})
    if not short:
        item.update(
            {"description": "这是一个令人惊叹的项目，有很长的描述"}
        )
    return item
```

#### 必需查询参数

```python
# http://127.0.0.1:8000/items/123?needy=yes
@app.get("/items/{item_id}")
async def read_user_item(item_id: str, needy: str):
    item = {"item_id": item_id, "needy": needy}
    return item
```

### 请求体

```python
from pydantic import BaseModel
from typing import Union

class Item(BaseModel):
    name: str = '小明'
    description: Union[str, None] = None
    price: float
    tax: Union[float, None] = None

@app.post("/items/")
async def create_item(item: Item):
    print(item.name)
    return item
```

#### 调用

```bash
curl -X 'POST' \
  'http://127.0.0.1:8000/items/' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "小明",
  "description": "string",
  "price": 0,
  "tax": 0
}'
```

### 查询参数和字符串校验

```python
from fastapi import Query

@app.get("/items/")
async def read_items(
    q: Union[str, None] = Query(default=None, max_length=50)
):
    results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
    if q:
        results.update({"q": q})
    return results
```

#### 参数列表

| 参数       | 含义         | 类型          |
| ---------- | ------------ | ------------- |
| `default`    | 默认值       | 任意类型或... |
| `max_length` | 最大长度     | `int`           |
| `min_length` | 最小长度     | `int`           |
| `pattern`    | 正则匹配     | `string`        |
| `alias`      | 别名参数     | `string`        |
| `deprecated` | 准备弃用参数 | `bool`          |

#### 多个相同的查询参数

```python
# http://127.0.0.1:8000/items/?q=foo&q=bar
@app.get("/items/")
async def read_items(
    q: Union[List[str], None] = Query(default=None)
):
    query_items = {"q": q}
    return query_items
```

### 路径参数和数值校验

Path 用法基本和 Query 相同，参考：[FastAPI官方文档](https://fastapi.tiangolo.com/zh/tutorial/path-params-numeric-validations/)

#### 导入 Path

```python
from fastapi import FastAPI, Path, Query
from typing_extensions import Annotated
```

#### 声明元数据

```python
@app.get("/items/{item_id}")
async def read_items(
    item_id: Annotated[int, Path(title="要获取的项目的 ID")],
    q: Annotated[str | None, Query(alias="item-query")] = None,
):
    results = {"item_id": item_id}
    if q:
        results.update({"q": q})
    return results
```

#### 参数列表

| 参数  | 含义                | 类型      |
| ----- | ------------------- | --------- |
| `...`   | 和 Query 具有相同参数 | ...       |
| `ge`    | 大于等于            | `int float` |
| `gt`    | 大于                | `int float` |
| `le`    | 小于等于            | `int float` |
| `le`    | 小于等于            | `int float` |
| `title` | api文档的标题       | `string`    |

### 其他参数

都具有 `Query` 的参数，`max_length`、`min_length` 等

#### Cookie参数

```python
from fastapi import Cookie

@app.get("/items/")
async def read_items(
    ads_id: Annotated[Union[str, None], Cookie()] = None
):
    return {"ads_id": ads_id}
```

#### Header 参数

```python
from fastapi import Header

@app.get("/items/")
async def read_items(
    user_agent: Annotated[Union[str, None], Header()] = None,
    items_id: Annotated[Union[int, None], Header(ge=1)] = None
):
    return {"User-Agent": user_agent, "items_id": items_id}
```

### 表单数据

接收的不是 JSON，而是表单字段时，要使用 Form。

#### 安装

```shell
$ pip install python-multipart
```

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
</head>
<body>
<form method="post" action="http://127.0.0.1:8000/login">
    <span>账号：</span><input type="text" name="username">
    <br>
    <span>密码：</span><input type="password" name="password">
    <br>
    <input type="submit" value="登录">
</form>
</body>
</html>
```

#### FastAPI

```python
from fastapi import FastAPI, Form
import uvicorn
app = FastAPI()
@app.post("/login/")
async def login(username: str = Form(), password: str = Form()):
    return {"username": username}
if __name__ == '__main__':
    uvicorn.run(app='main:app', reload=True)
```

### 文件上传
<!--rehype:wrap-class=col-span-2-->

```python
from fastapi import FastAPI, UploadFile
from fastapi.responses import HTMLResponse

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile):
    print(file.file.read().decode())
    return {"filenames": file.filename, "type": str(type(file.file))}

@app.get("/")
async def main():
    content = """<body>
<form action="/uploadfile/" enctype="multipart/form-data" method="post">
<input name="file" type="file" multiple>
<input type="submit">
</form>
</body>"""
    return HTMLResponse(content=content)
```

#### UploadFile 属性

| 属性名       | 含义     | 返回                                    |
| ------------ | -------- | --------------------------------------- |
| `filename`     | 文件名   | 上传的文件名                            |
| `content_type` | 内容类型 | `MIME` 类型                               |
| `file`         | 文件     | SpooledTemporaryFile 具有 `read`，`write` 方法 |
<!--rehype:className=left-align-->

#### UploadFile async 方法

| 方法名       | 含义                                      |
| ------------ | ----------------------------------------- |
| `write(data)`  | 把 `data` 写入文件                        |
| `read(size)`   | 按指定数量的字节读取文件内容              |
| `seek(offset)` | 移动至文件 `offset` （`int`）字节处的位置 |
| `close()`     | 关闭文件                                  |
<!--rehype:className=left-align-->

依赖项
---
<!--rehype:body-class=cols-2-->

### 依赖项使用场景

- 共享业务逻辑（复用相同的代码逻辑）
- 共享数据库连接
- 实现安全、验证、角色权限
- 等……

### 创建依赖项
<!--rehype:wrap-class=row-span-2-->

```python
from typing import Union

from fastapi import Depends, FastAPI

app = FastAPI()
```

`read_items` 和 `read_users` 方法依赖 `common_parameters`
白话就是 `read_items` 和 `read_users` 都需要 `q`，`skip`，`limit` 查询参数

```python
async def common_parameters(
    q: Union[str, None] = None,
    skip: int = 0,
    limit: int = 100
):
    return {"q": q, "skip": skip, "limit": limit}


@app.get("/items/")
async def read_items(
    commons: dict = Depends(common_parameters)
):
    return commons


@app.get("/users/")
async def read_users(
    commons: dict = Depends(common_parameters)
):
    return commons
```

### 类作为依赖项

```python
from typing import Union
from fastapi import Depends, FastAPI

app = FastAPI()
fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}]

class CommonQueryParams:
    def __init__(
        self, 
        q: Union[str, None] = None, 
        skip: int = 0, 
        limit: int = 100
    ):
        self.q = q
        self.skip = skip
        self.limit = limit
```

`read_itemsx` 接收一个 `commons` 参数，类型是 `CommonQueryParams`
`CommonQueryParams` 接收三个参数，这三个参数是调用 api 的时候传

```python
@app.get("/items/")
async def read_items(
  commons: CommonQueryParams = Depends(CommonQueryParams)
):
  response = {}
  if commons.q:
      response.update({"q": commons.q})
  items = fake_items_db[commons.skip : commons.skip + commons.limit]
  response.update({"items": items})
  return response
```

#### 还可以简写

```python
@app.get("/items/")
async def read_items(
  # 这里的 Depends 没有传参，FastAPI 会自动使用 CommonQueryParams
  commons: CommonQueryParams = Depends()
):
  response = {}
  if commons.q:
      response.update({"q": commons.q})
  items = fake_items_db[commons.skip : commons.skip + commons.limit]
  response.update({"items": items})
  return response
```

### 子依赖项

```python
from typing import Union
from fastapi import Cookie, Depends, FastAPI

app = FastAPI()

def query_extractor(q: Union[str, None] = None):
    return q

def query_or_cookie_extractor(
    q: str = Depends(query_extractor),
    last_query: Union[str, None] = Cookie(default=None),
):
    if not q:
        return last_query
    return q

# read_query函数依赖query_or_cookie_extractor函数
# query_or_cookie_extractor函数又依赖query_extractor函数
# 就是说依赖项可以依赖其他依赖项，只要你不晕，可以无数次套娃
@app.get("/items/")
async def read_query(
  query_or_default: str = Depends(query_or_cookie_extractor)
):
    return {"q_or_cookie": query_or_default}
```

#### 不使用缓存

使用 `use_cache = False` 参数不使用缓存数据，不使用 `use_cache = False`，`value` 和 `value1` 是一样的

```python
def result_value():
    value = randint(1, 99)
    return value

def get_value(
  value: int = Depends(result_value, use_cache=False),
  value1: int = Depends(result_value, use_cache=False)
):
    return value, value1

@app.get('/value/')
async def needy_dependency(value: tuple = Depends(get_value)):
    return {"value": value}
```

### 全局依赖项

```python
from fastapi import Depends, FastAPI, Header, HTTPException

async def verify_token(x_token: str = Header()):
  if x_token != "fake-super-secret-token":
    raise HTTPException(status_code=400, detail="X-Token 标头无效")

async def verify_key(x_key: str = Header()):
  if x_key != "fake-super-secret-key":
    raise HTTPException(status_code=400, detail="X-Key 标头无效")
  return x_key
```

全局依赖项很有用，后面的安全性就可以使用全局依赖项

```python
app = FastAPI(
  dependencies=[Depends(verify_token), Depends(verify_key)]
)

@app.get("/items/")
async def read_items():
    return [{"item": "Portal Gun"}, {"item": "Plumbus"}]

@app.get("/users/")
async def read_users():
    return [{"username": "Rick"}, {"username": "Morty"}]
```

安全性
---

待更新

参考
---

- [Python 备忘清单](./python.md) _(jaywcjlove.github.io)_
- [FastAPI 官方文档](https://fastapi.tiangolo.com/zh/tutorial/) _(fastapi.tiangolo.com)_
