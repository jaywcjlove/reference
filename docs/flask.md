Flask 备忘清单
===

本清单对 Flask 的入门进行了简要的概述，以及其常用示例。需要有 `HTML` 和 `Python` 基础。

入门
-----

### 相关链接

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) _(developer.mozilla.org)_
- [Python](https://www.python.org/) _(python.org)_
- [Flask](https://flask.palletsprojects.com/) _(flask.palletsprojects.com)_
- [Python 备忘清单](./python.md) _(kjchmc.cn)_

### Hello World

#### hello.py

```python
# 导入 Flask 类
from flask import Flask

# 创建应用实例
app = Flask(__name__)     # 'Flask' 参数是 应用程序模块 或 包 的名称
                          # __name__是适用于大多数情况的便捷快捷方式

# 路由 (装饰器)
@app.route('/')           # route()装饰器告诉 Flask 什么路径触发下面的功能
def hello():
   return 'Hello World!'  # 该函数返回我们想要在浏览器中显示的消息内容
                          # 默认类型 HTML, 因此字符串中的 HTML 将被浏览器渲染

# 启动服务
if __name__ == '__main__':
   app.run()
```

### 运行 `hello.py` 程序

```shell
$ python hello.py
 * Serving Flask app 'hello'
 * Running on http://127.0.0.1:5000
 * Press CTRL+C to quit
```

#### 或

```shell
$ flask --app hello run
 * Serving Flask app 'hello'
 * Running on http://127.0.0.1:5000
 * Press CTRL+C to quit
```
