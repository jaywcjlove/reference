FastAPI 备忘清单
===

FastAPI 是一个用于构建 API 的现代、快速（高性能）的 web 框架，使用 Python 3.6+ 并基于标准的 Python 类型提示。

入门
---

### 最小程序

下面代码会直接启动http服务，也可以使用 `uvicorn main:app --reload`

```python
from fastapi import FastAPI
import uvicorn

app = FastAPI()

# http://127.0.0.1:8000/
@app.get("/")
async def root():
    return {"message": "Hello World"}

if __name__ == '__main__':
    uvicorn.run(app='main:app', reload=True)
```

### 查询参数
<!--rehype:wrap-class=col-span-2 row-span-2-->

带默认值的查询参数

```python
# http://127.0.0.1:8000/items/?skip=0&limit=2
fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]
@app.get("/items/")
async def read_item(skip: int = 0, limit: int = 10):
    return fake_items_db[skip: skip + limit]
```

可选查询参数

```python
# http://127.0.0.1:8000/items/1?q=admin
from typing import Union
@app.get("/items/{item_id}")
async def read_item(item_id: str, q: Union[str, None] = None):
    if q:
        return {"item_id": item_id, "q": q}
    return {"item_id": item_id}
```

多路径多查询参数

```python
# http://127.0.0.1:8000/users/1/items/2
# or 
# http://127.0.0.1:8000/users/1/items/2?q=query&short=true
@app.get("/users/{user_id}/items/{item_id}")
async def read_user_item(
        user_id: int, item_id: str, q: Union[str, None] = None, short: bool = False
):
    item = {"item_id": item_id, "owner_id": user_id}
    if q:
        item.update({"q": q})
    if not short:
        item.update(
            {"description": "This is an amazing item that has a long description"}
        )
    return item
```

必需查询参数

```python
# http://127.0.0.1:8000/items/123?needy=yes
@app.get("/items/{item_id}")
async def read_user_item(item_id: str, needy: str):
    item = {"item_id": item_id, "needy": needy}
    return item
```

### 路径参数

最基本的路径参数

```python
# <http://127.0.0.1:8000/items/1>
@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id": item_id} # item_id自定义
```

多个路径参数

```python
# <http://127.0.0.1:8000/items/1/2>
@app.get("/items/{item_id}/{user_id}")
async def read_item(item_id, user_id):
    return {"item_id": item_id, "user_id": user_id}
```

有类型的路径参数

```python
# <http://127.0.0.1:8000/items/1>
@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}
```

文件路径参数

```python
# <http://127.0.0.1:8000/file//home/my/my.txt>
@app.get("/file/{file_path:path}")
async def read_item(file_path):
    return {"file_path": file_path}
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
<!--rehype:wrap-class=col-span-2-->

```python
from fastapi import Query
@app.get("/items/")
async def read_items(q: Union[str, None] = Query(default=None, max_length=50)):
    results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
    if q:
        results.update({"q": q})
    return results
```

#### 参数列表

| 参数       | 含义         | 类型          |
| ---------- | ------------ | ------------- |
| default    | 默认值       | 任意类型或... |
| max_length | 最大长度     | int           |
| min_length | 最小长度     | int           |
| pattern    | 正则匹配     | string        |
| alias      | 别名参数     | string        |
| deprecated | 准备弃用参数 | bool          |

多个相同的查询参数 <http://127.0.0.1:8000/items/?q=foo&q=bar>

```python
@app.get("/items/")
async def read_items(q: Union[List[str], None] = Query(default=None)):
    query_items = {"q": q}
    return query_items
```

参考
---

- [Python 备忘清单](./python.md) _(jaywcjlove.github.io)_
- [FastAPI 官方文档](https://fastapi.tiangolo.com/zh/tutorial/) _(fastapi.tiangolo.com)_
