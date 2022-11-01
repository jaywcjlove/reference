Django 备忘清单
===

Django 是 Python 的一款 Web 框架

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

如果你没有安装 PIP，你可以从这个页面下载并安装它：https://pypi.org/project/pip/

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

另见
----

- [Django 官网](https://www.djangoproject.com/) _(djangoproject.com)_
- [Django 教程](https://www.runoob.com/django/django-tutorial.html) _(runoob.com)_
- [Django 框架教程](http://c.biancheng.net/django/) _(biancheng.net)_
- [Django 4 中文教程](https://www.w3cschool.cn/django4/) _(w3cschool.cn)_
- [Django Tutorial](https://www.w3schools.com/django/index.php) _(w3schools.com)_