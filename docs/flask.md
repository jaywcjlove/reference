Flask 备忘清单
===

本清单对 Flask 的入门进行了简要的概述，以及其常用示例。需要有 `HTML` 和 `Python` 基础。

入门
-----

### 相关链接

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) _(developer.mozilla.org)_
- [Python](https://www.python.org/) _(python.org)_
- [Flask](https://flask.palletsprojects.com/) _(flask.palletsprojects.com)_
- [Python 备忘清单](./python.md) _(jaywcjlove.github.io)_

### Hello World
<!--rehype:wrap-class=row-span-2-->

#### hello.py

```python
# 导入 Flask 类
from flask import Flask

# 创建应用实例
app = Flask(__name__) # 'Flask' 参数是 应用程序模块 或 包 的名称
                      # __name__是适用于大多数情况的便捷快捷方式

# 路由 (装饰器)
@app.route('/')           # route()装饰器告诉 Flask 什么路径触发下面的功能
def hello():
   # 该函数返回我们想要在浏览器中显示的消息内容
   return 'Hello World!'
   # 默认类型 HTML, 因此字符串中的 HTML 将被浏览器渲染
# 启动服务
if __name__ == '__main__':
   app.run()
```

### 运行 `hello.py` 程序
<!--rehype:wrap-class=row-span-2-->

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
$ flask run --host=0.0.0.0
```

启用调试模式，使用 `--debug` 选项

```bash
$ flask --app hello --debug run
```

### HTML 转义

```py
from markupsafe import escape

@app.route("/<name>")
def hello(name):
    return f"Hello, {escape(name)}!"
```

### 路由

```py
@app.route('/')
def index():
    return 'Index Page'

@app.route('/hello')
def hello():
    return 'Hello, World'
```

### 变量规则
<!--rehype:wrap-class=row-span-2-->

```py
from markupsafe import escape

@app.route('/user/<username>')
def show_user_profile(username):
    # 显示该用户的用户个人资料
    return f'User {escape(username)}'

@app.route('/post/<int:post_id>')
def show_post(post_id):
    # 显示给定id的帖子，id是一个整数
    return f'Post {post_id}'

@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    # 在 /path/ 之后显示子路径
    return f'Subpath {escape(subpath)}'
```

转换器类型：

:-- | --
:-- | --
`string` | （默认）接受任何没有斜杠的文本
`int` | 接受正整数
`float` | 接受正浮点值
`path` | 像字符串但也接受斜线
`uuid` | 接受 UUID 字符串

### 唯一 URL / 重定向行为

```py
@app.route('/projects/')
def projects():
    return 'The project page'

@app.route('/about')
def about():
    return 'The about page'
```

项目端点的规范 `URL` 有一个尾部斜杠。它类似于文件系统中的文件夹。如果您访问没有尾部斜杠 (`/projects`) 的 `URL`，`Flask` 会将您重定向到带有尾部斜杠 (`/projects/`) 的规范 `URL`

### URL 建设

```py
from flask import url_for

@app.route('/')
def index():
    return 'index'

@app.route('/login')
def login():
    return 'login'

@app.route('/user/<username>')
def profile(username):
    return f'{username}\'s profile'

with app.test_request_context():
    print(url_for('index'))
    print(url_for('login'))
    print(url_for('login', next='/'))
    print(url_for('profile', username='John Doe'))
```

### HTTP 方法

默认路由仅响应 `GET` 请求。可以使用 `route()` 装饰器的方法参数来处理不同的 `HTTP` 方法

```py
from flask import request

@app.route('/login',methods=['GET','POST'])
def login():
    if request.method == 'POST':
        return do_the_login()
    else:
        return show_the_login_form()
```

您还可以将不同方法的视图分成不同的函数。 `Flask` 为每个常见的 `HTTP` 方法提供了一种快捷方式，用于使用 `get()`、`post()` 等来装饰此类路由

```py
@app.get('/login')
def login_get():
    return show_the_login_form()

@app.post('/login')
def login_post():
    return do_the_login()
```

### Blueprint

创建蓝图Bp1

```py
from flask import Blueprint, abort, jsonify

# 定义Bp1，并定义url前缀为/img
Bp1 = Blueprint('imgBlue', __name__, template_folder='templates', url_prefix='/img')


@Bp1.route('/getimg')
def getImg():
    try:
        return jsonify(name="img", size="100KB")
    except Exception as e:
        abort(e)
```

创建蓝图Bp2

```py
from flask import Blueprint, abort, jsonify

# 定义Bp2，并定义url前缀为/video
Bp2 = Blueprint('videoBlue', __name__, template_folder='templates', url_prefix='/video')


@Bp2.route('/getvideo')
def getvideo():
    try:
        return jsonify(name="video", size="100GB")
    except Exception as e:
        abort(e)
```

在flask app中引用蓝图Bp1和Bp2

```py
from flask import Flask, jsonify
from lantu.img import Bp1
from lantu.video import Bp2

app = Flask(__name__)

# 注册蓝图到app
app.register_blueprint(Bp1)
app.register_blueprint(Bp2)


@app.route('/')
def index():
    return jsonify(name='phyger')


if __name__ == '__main__':
    app.run(host="127.0.0.1", debug=True)
```

简单测试

```bash
curl http://127.0.0.1:5000/
>> {"name":"phyger"}

curl http://127.0.0.1:5000/img/getimg
>> {"name": "img", "size": "100KB"}

curl http://127.0.0.1:5000/video/getvideo
>> {"name": "video", "size": "100GB"}
```
