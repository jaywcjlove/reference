Django 备忘清单
===

Django 是 Python 的一款 Web 框架，本备忘单旨在快速理解 [Django](https://www.djangoproject.com/) 所涉及的主要概念，提供了最常用的 API 示例参考

入门
----

### 准备环境
<!--rehype:wrap-class=row-span-1-->

```bash
$ python --version
# Python 3.9.2
$ pip --version
# pip 20.2.3 from c:\python39\lib\site-packages\pip (python 3.9)
```
<!--rehype:className=wrap-text -->

如果你没有安装 PIP，你可以从这个页面下载并安装它：<https://pypi.org/project/pip/>

### 入门
<!--rehype:wrap-class=row-span-4-->

- 创建虚拟环境

  ```bash
  $ py -m venv myproject # Windows
  $ python -m venv myproject # Unix/MacOS
  ```

- 其中包含子文件夹和文件，如下所示

  ```bash
  myproject
   ├┈Include
   ├┈Lib
   ├┈Scripts
   ╰┈pyvenv.cfg
  ```

- 以下命令来激活环境

  ```bash
  # Windows:
  myproject\Scripts\activate.bat
  # Unix/MacOS:
  source myproject/bin/activate
  ```

- 提示符中看到以下结果：

  ```bash
  # Windows:
  (myproject) C:\Users\Your Name>
  # Unix/MacOS:
  (myproject) ... $
  ```

- 安装 Django

  ```bash
  # Windows:
  (myproject) C:\Users\Name>py -m pip install Django
  # Unix/MacOS:
  (myproject) ... $ python -m pip install Django
  ```
  <!--rehype:className=wrap-text -->
<!--rehype:className=style-timeline-->

### 创建项目
<!--rehype:wrap-class=row-span-3-->

```bash
$ django-admin startproject myworld
```

创建了一个 `myworld` 文件夹，内容如下：

```bash
myworld
  ├┈ manage.py
  ╰┈ myworld/
     ├┈ __init__.py
     ├┈ asgi.py
     ├┈ settings.py
     ├┈ urls.py
     ╰┈ wsgi.py
```

运行 Django 项目

```bash
$ py manage.py runserver     # Windows
$ python manage.py runserver # Unix/MacOS
```

打开一个新的浏览器窗口并在地址栏中输入 127.0.0.1:8000

### 检查 Django 版本

```bash
(myproject) C:\Users\Your Name>django-admin --version
# 4.0.3
```

### 创建应用
<!--rehype:wrap-class=row-span-2-->

```bash
$ py manage.py startapp members
```

项目中创建了一个名为 `members` 的文件夹，内容如下：

```bash
myworld
  ├┈ manage.py
  ├┈ myworld/
  ╰┈ members/
     ├┈ migrations/
     ┆  ╰┈ __init__.py
     ├┈ __init__.py
     ├┈ admin.py
     ├┈ apps.py
     ├┈ models.py
     ├┈ tests.py
     ╰┈ views.py
```

首先，看一下名为 `views.py` 的文件。这是我们收集发送回正确响应所需的信息的地方。

### 应用目录介绍

- `Django` 接收 URL，检查 `urls.py` 文件，并调用与 URL 匹配的视图。
- 位于 `views.py` 中的视图检查相关模型。
- 模型是从 `models.py` 文件中导入的。
- 然后视图将数据发送到模板文件夹中的指定模板。
- 模板包含 `HTML` 和 `Django` 标记，并使用数据将完成的 `HTML` 内容返回给浏览器

### 视图

Django 视图是接受 `http` 请求并返回 `http` 响应的 `Python` 函数，就像 `HTML` 文档一样。

使用 `Django` 的网页充满了不同任务和任务的视图。

视图通常放在一个名为 `views.py` 的文件中，该文件位于应用程序的文件夹中。

您的 `members` 文件夹中有一个 `views.py`，如下所示：

```PY
from django.shortcuts import render

# Create your views here.
```

找到它并打开它，并将内容替换为：

```PY
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello world!")
```

这是一个关于如何将响应发送回浏览器的简单示例。

但是我们如何执行视图呢？ 好吧，我们必须通过 URL 调用视图。

### URLs

在与 `views.py` 文件相同的文件夹中创建一个名为 `urls.py` 的文件，并在其中输入以下代码：

```py
from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
]
```

刚刚创建的 `urls.py` 文件是特定于成员应用程序的。我们还必须在根目录 `myworld` 中进行一些路由。

在 `myworld` 文件夹中有一个名为 `urls.py` 的文件，打开该文件并在 `import` 语句中添加 `include` 模块，并在列表中添加一个 `path()` 函数。文件将如下所示：

```py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
  path('members/', include('members.urls')),
  path('admin/', admin.site.urls),
]
```

如果服务器未运行，请导航到 `/myworld` 文件夹并在命令提示符下执行此命令：

```bash
$ py manage.py runserver
```

在浏览器窗口的地址栏中输入 `127.0.0.1:8000/members/`

### 模板
<!--rehype:wrap-class=row-span-2-->

在 `members` 文件夹中创建一个 `templates` 文件夹，并创建一个名为 `myfirst.html` 的 `HTML` 文件。文件结构应该是这样的：

```bash
myworld
 ├┈ manage.py
 ├┈ myworld/
 ╰┈ members/
    ╰┈ templates/
       ╰┈ myfirst.html
```

打开 `HTML` 文件并插入以下内容：

```html
<!DOCTYPE html>
<html>
<body>
  <h1>Hello World!</h1>
  <p>欢迎来到我的第一个 Django 项目！</p>
</body>
</html>
```

修改视图 `members/views.py`

```py
from django.http import HttpResponse
from django.template import loader

def index(request):
  template = loader.get_template('myfirst.html')
  return HttpResponse(template.render())
```

#### 更改设置

为了能够处理比“Hello World！”更复杂的东西，我们必须告诉 `Django` 一个新的应用程序已创建

这是在 `myworld` 文件夹的 `myworld/settings.py` 文件中完成的。查找 `INSTALLED_APPS[]` 列表并添加成员应用程序，如下所示：

```py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'members.apps.MembersConfig'
]
```

然后运行这个命令：

```bash
$ py manage.py migrate
```

通过导航到 `/myworld` 文件夹启动服务器并执行以下命令：

```bash
$ py manage.py runserver
```

在浏览器窗口的地址栏中输入 127.0.0.1:8000/members/

### 创建表（模型）
<!--rehype:wrap-class=col-span-2-->

在 `/members/` 文件夹中，打开 `models.py` 文件。要在我们的数据库中添加成员表，首先创建一个成员类，并描述其中的表字段：

```py
from django.db import models

class Members(models.Model):
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
```

然后导航到 `/myworld/` 文件夹并运行以下命令：

```bash
$ py manage.py makemigrations members
# Migrations for 'members':
#   members\migrations\0001_initial.py
#     - Create model Members
```

创建一个包含任何新更改的文件并将该文件存储在 `/migrations/` 文件夹中。下次运行 `py manage.py migrate` 时，Django 将根据迁移文件夹中新文件的内容创建并执行一条 SQL 语句。运行迁移命令：

```bash
$ py manage.py migrate
```

从模型创建的 SQL 语句是：

```sql
CREATE TABLE "members_members" (
  "id" INT NOT NULL PRIMARY KEY AUTOINCREMENT,
  "firstname" varchar(255) NOT NULL,
  "lastname" varchar(255) NOT NULL
);
```

Django 模板
---

### 模板变量
<!--rehype:wrap-class=col-span-2 row-span-2-->

```django
<!-- template.html -->
<h1>你好 {{ firstname }}，你好吗？</h1>
```

在视图 (`views.py`) 中创建变量，上面示例中的变量 `firstname` 通过视图发送到模板：

```py
from django.http import HttpResponse
from django.template import loader

def testing(request):
  template = loader.get_template('template.html')
  context = {
    'firstname': '狂徒张三',
  }
  return HttpResponse(template.render(context, request))
```

### 模板中创建变量

```django
{% with firstname="Tobias" %}
<h1>你好 {{ firstname }}，你好吗？</h1>
```

### 数组循环

```django
<ul>
  {% for x in mymembers %}
    <li>{{ x.firstname }}</li>
  {% endfor %}
</ul>
```

### 模板标签参考
<!--rehype:wrap-class=row-span-5-->

标签 | 描述
:- | :-
`autoescape` | 指定自动转义模式是打开还是关闭
`block` | 指定块部分
`comment` | 指定注释部分
`csrf_token` | 保护表单免受跨站点请求伪造
`cycle` | 指定要在循环的每个循环中使用的内容
`debug` | 指定调试信息
`extends` | 指定父模板
`filter` | 在返回之前过滤内容
`firstof` | 返回第一个非空变量
`for` | 指定一个 for 循环
`if` | 指定一个 if 语句
`ifchanged` | 仅当自上次迭代以来值已更改时才输出块<br> _(用于 for 循环)_
`include` | 指定包含的内容/模板
`load` | 从另一个库加载模板标签
`lorem` | 输出随机文本
`now` | 输出当前日期/时间
`regroup` | 按组对对象进行排序
`resetcycle` | 循环使用，重置循环
`spaceless` | 删除 HTML 标签之间的空格
`templatetag` | 输出指定的模板标签
`url` | 返回 URL 的绝对 URL 部分
`verbatim` | 指定不应由模板引擎呈现的内容
`widthratio` | 给定值和最大值之间的比率计算宽度值
`with` | 指定要在块中使用的变量
<!--rehype:className=show-header-->

### If 语句

```django
{% if greeting == 1 %}
  <h1>Hello</h1>
{% elif greeting == 2 %}
  <h1>Welcome</h1>
{% else %}
  <h1>Goodbye</h1>
{% endif %} 
```

### For 循环
<!--rehype:wrap-class=row-span-2-->

```django
{% for x in cars %}
  <h1>{{ x.brand }}</h1>
  <p>{{ x.model }}</p>
  <p>{{ x.year }}</p>
{% endfor %} 
```

数据 cars 空的展示内容：

```django
<ul>
  {% for x in cars %}
    <h1>{{ x.brand }}</h1>
    <p>{{ x.model }}</p>
    <p>{{ x.year }}</p>
  {% empty %}
    <li>No members</li>
  {% endfor %}
</ul> 
```

### 循环变量
<!--rehype:wrap-class=row-span-2-->

- `forloop.counter` 当前循环，从 1 开始
- `forloop.counter0` 当前循环，从 0 开始
- `forloop.first` 循环是否在其第一次循环中
- `forloop.last` 循环是否在其最后一次循环中
- `forloop.parentloop`
- `forloop.revcounter` 如果从末尾开始并向后计数，则以 1 结束
- `forloop.revcounter0` 如果从末尾开始并向后计数，则以 0 结束

### 过滤值

```django
<h1>你好 {{ firstname|upper }}，你好吗？</h1>
```

返回带有大写字母的变量名

### 注释
<!--rehype:wrap-class=row-span-2-->

```django
<h1>欢迎大家{# 较小的注释 #}</h1>
{% comment %}
  <h1>欢迎女士们先生们</h1>
{% endcomment %}
```

#### 注释描述

```django
<h1>欢迎大家{# 较小的注释 #}</h1>
{% comment "这是最初的欢迎信息" %}
    <h1>欢迎女士们先生们</h1>
{% endcomment %}
```

注释允许您拥有应该被忽略的代码部分

### 双过滤值

```django
<h1>你好 {{ firstname|first|upper }}，你好吗？</h1>
```

返回变量 `firstname` 的第一个字符，小写

### 过滤器标签

```django
{% filter upper %}
  <h1>Hello everyone, how are you?</h1>
{% endfilter %}
```

返回内容大写

### cycle
<!--rehype:wrap-class=col-span-2 row-span-3-->

如果你想为每次循环使用新的背景颜色，你可以使用 `cycle` 标签来做到这一点

```django
<ul>
  {% for x in members %}
    <li style='background-color:{% cycle 'lightblue' 'pink' 'yellow' 'coral' 'grey' %}'>
      {{ x.firstname }}
    </li>
  {% endfor %}
</ul> 
```

将参数值保存在变量中，以便以后使用：

```django
<ul>
  {% for x in members %}
    {% cycle 'lightblue' 'pink' 'yellow' 'coral' 'grey' as bgcolor silent %}
    <li style='background-color:{{ bgcolor }}'>
      {{ x.firstname }}
    </li>
  {% endfor %}
</ul> 
```

你注意到 `silent` 关键字了吗？ 确保添加这个，否则参数值将在输出中显示两次

```django
<ul>
  {% for x in members %}
    {% cycle 'lightblue' 'pink' 'yellow' 'coral' 'grey' as bgcolor silent %}
    {% if forloop.counter == 3 %}
      {% resetcycle %}
    {% endif %}
    <li style='background-color:{{ bgcolor }}'>
      {{ x.firstname }}
    </li>
  {% endfor %}
</ul> 
```

您可以使用 `{% resetcycle %}` 标签强制循环重新开始

### 每一行添加行号

```django
{% filter upper|linenumbers %}Hello!
my name is
Emil.
What is your name?{% endfilter %}
```

返回内容`大写`并在每一行添加`行号`

### 导入模板

`footer.html`:

```django
<p>您已到达本页底部，感谢您抽出宝贵时间</p>
```

`template.html`:

```django
<h1>Hello</h1>
<p>此页面包含模板中的页脚</p>
{% include 'footer.html' %} 
```

### 导入模板传入变量

`mymenu.html`:

```django
<div>HOME | {{ me }} | ABOUT | FORUM | {{ sponsor }}</div>
```
<!--rehype:className=wrap-text -->

`template.html`:

```django
{% include mymenu.html with me="张三" sponsor="Reference" %}

<h1>Welcome</h1>

<p>This is my webpage</p>
```
<!--rehype:className=wrap-text -->

### 过滤器参考
<!--rehype:wrap-class=col-span-2 row-span-2-->

Keyword | 描述
:- | :-
`add` | 添加指定的值
`addslashes` | 在任何引号字符之前添加一个斜杠，以转义字符串
`capfirst` | 返回大写的第一个字母
`center` | 使值在指定宽度的中间居中
`cut` | 删除任何指定的字符或短语
`date` | 以指定格式返回日期
`default` | 如果值为 `False`，则返回指定值
`default_if_none` | 如果值为 `None`，则返回指定的值
`dictsort` | 按给定值对字典进行排序
`dictsortreversed` | 按给定值对字典进行反向排序
`divisibleby` | 如果该值可以除以指定的数字，则返回 `True`，否则返回 `False`
`escape` | 从字符串中转义 `HTML` 代码
`escapejs` | 从字符串中转义 `JavaScript` 代码
`filesizeformat` | 将数字返回为文件大小格式
`first` | 返回对象的第一项（对于字符串，返回第一个字符）
`floatformat` | 将浮点数四舍五入到指定的小数位数，默认为一位小数
`force_escape` | 从字符串中转义 `HTML` 代码
`get_digit` | 返回数字的特定数字
`iriencode` | 将 `IRI` 转换为 `URL` 友好字符串
`join` | 将列表中的项目返回为字符串
`json_script` | 将一个对象返回为由 `<script></script>` 标签包围的 `JSON` 对象
`last` | 返回对象的最后一项（对于字符串，返回最后一个字符）
`length` | 返回对象中的项目数，或字符串中的字符数
`length_is` | 如果长度与指定的数字相同，则返回 `True`
`linebreaks` | 返回带有 `<br>` 而不是换行符和 `<p>` 而不是多个换行符的文本
`linebreaksbr` | 返回带有 `<br>` 的文本，而不是换行符
`linenumbers` | 返回每行带有行号的文本
`ljust` | 根据指定的宽度左对齐值
`lower` | 以小写字母返回文本
`make_list` | 将值转换为列表对象
`phone2numeric` | 将带字母的电话号码转换为数字电话号码
`pluralize` | 如果指定的数值不是 `1`，则在值的末尾添加一个 `s`
`pprint` |  
`random` | 返回对象的随机项
`rjust` | 根据指定的宽度右对齐值
`safe` | 标记此文本是安全的，不应进行 `HTML` 转义
`safeseq` | 将对象的每个项目标记为安全且项目不应进行 `HTML` 转义
`slice` | 返回文本或对象的指定切片
`slugify` | 将文本转换为一个长字母数字小写单词
`stringformat` | 将值转换为指定格式
`striptags` | 从文本中删除 `HTML` 标记
`time` | 以指定格式返回时间
`timesince` | 返回两个日期时间之间的差
`timeuntil` | 返回两个日期时间之间的差
`title` | 文本中每个单词的第一个字符大写，所有其他字符都转换为小写
`truncatechars` | 将字符串缩短为指定数量的字符
`truncatechars_html` | 将字符串缩短为指定数量的字符，而不考虑任何 `HTML` 标记的长度
`truncatewords` | 将字符串缩短为指定数量的单词
`truncatewords_html` | 将字符串缩短为指定数量的单词，而不考虑任何 `HTML` 标记
`unordered_list` | 将对象的项目返回为无序列的 `HTML` 列表
`upper` | 以大写字母返回文本
`urlencode` | `URL` 对字符串进行编码
`urlize` | 将字符串中的任何 `URL` 作为 `HTML` 链接返回
`urlizetrunc` | 将字符串中的任何 `URL` 作为 `HTML` 链接返回，但会将链接缩短为指定的字符数
`wordcount` | 返回文本中的单词数
`wordwrap` | 以指定的字符数换行
`yesno` | 将布尔值转换为指定值
`i18n` |  
`l10n` |  
`tz` |  

### 字段查询参考

Keyword | 描述
:- | :-
`contains` | 包含短语
`icontains` | 与包含相同，但不区分大小写
`date` | 匹配日期
`day` | 匹配日期(日期，1-31)(日期)
`endswith` | 以。。结束
`iendswith` | 与 endwidth 相同，但不区分大小写
`exact` | 完全匹配
`iexact` | 与精确相同，但不区分大小写
`in` | 匹配其中一个值
`isnull` | 匹配 NULL 值
`gt` | 比...更棒
`gte` | 大于或等于
`hour` | 匹配一个小时(对于日期时间)
`lt` | 少于
`lte` | 小于或等于
`minute` | 匹配一分钟(对于日期时间)
`month` | 匹配一个月(日期)
`quarter` | 匹配一年中的一个季度 (1-4)(用于日期)
`range` | 之间的匹配
`regex` | 匹配正则表达式
`iregex` | 与正则表达式相同，但不区分大小写
`second` | 匹配一秒(对于日期时间)
`startswith` | 以 ... 开始
`istartswith` | 与 `startswith` 相同，但不区分大小写
`time` | 匹配时间(用于日期时间)
`week` | 匹配周数 (`1-53`)(用于日期)
`week_day` | 匹配一周中的某一天 (1-7) 1 是星期日
`iso_week_day` | 匹配 ISO 8601 星期几 (1-7) 1 是星期一
`year` | 匹配一年(日期)
`iso_year` | 匹配 ISO 8601 年份(日期)

添加静态文件
---

### 添加 CSS 文件

```bash {7}
myworld
  ├┈ manage.py
  ├┈ myworld/
  ╰┈ members/
     ├┈ templates/
     ├┈ static/
        ╰┈ myfirst.css
```

打开 `CSS` 文件 (`members/static/myfirst.css`) 并插入以下内容：

```css
body {
  background-color: lightblue;
  font-family: verdana;
}
```

修改模板 (`members/templates/template.html`) 引入 css 文件

```django {1,4}
{% load static %}
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="{% static 'myfirst.css' %}">
<body>
```
<!--rehype:className=wrap-text -->

### 添加 JS 文件

```bash {7}
myworld
  ├┈ manage.py
  ├┈ myworld/
  ╰┈ members/
     ├┈ templates/
     ├┈ static/
        ╰┈ myfirst.js
```

打开 `JS` 文件 (`members/static/myfirst.js`) 并插入以下内容：

```js
function myFunction() {
  alert("Hello from a static file!");
}
```

修改模板 (`members/templates/template.html`) 引入 `JS` 文件

```django {1,4,6}
{% load static %}
<!DOCTYPE html>
<html>
<script src="{% static 'myfirst.js' %}"></script>
<body>
<button onclick="myFunction()">Click me!</button>
```
<!--rehype:className=wrap-text -->

### 添加图片文件

```bash {7}
myworld
  ├┈ manage.py
  ├┈ myworld/
  ╰┈ members/
     ├┈ templates/
     ├┈ static/
        ╰┈ pineapple.jpg
```

打开 `JS` 文件 (`members/static/pineapple.jpg`) 并插入以下内容：

```js
function myFunction() {
  alert("Hello from a static file!");
}
```

修改模板 (`members/templates/template.html`) 引入 `jpg` 文件

```django {1,5}
{% load static %}
<!DOCTYPE html>
<html>
<body>
<img src="{% static 'pineapple.jpg' %}">
</body>
</html>
```
<!--rehype:className=wrap-text -->

另见
----

- [Django 官网](https://www.djangoproject.com/) _(djangoproject.com)_
- [Django 教程](https://www.runoob.com/django/django-tutorial.html) _(runoob.com)_
- [Django 框架教程](http://c.biancheng.net/django/) _(biancheng.net)_
- [Django 4 中文教程](https://www.w3cschool.cn/django4/) _(w3cschool.cn)_
- [Django Tutorial](https://www.w3schools.com/django/index.php) _(w3schools.com)_
