ThinkPHP 备忘清单
===

ThinkPHP 是一个免费开源的，快速、简单的面向对象的轻量级PHP开发框架，是为了敏捷WEB应用开发和简化企业应用开发而诞生的。

基础
---

### 安装
<!--rehype:wrap-class=col-span-2-->

#### 安装Composer

`Linux`和`Mac OS X`中运行

```bash
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```
<!--rehype:className=wrap-text-->

Windows中下载[Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe)

#### 安装稳定版

第一次安装

```bash
# 切换到WEB根目录
cd /www/wwwroot
composer create-project topthink/think tp
```

已安装，更新框架

```bash
# 切换到应用根目录
cd /www/wwwroot/tp
composer update topthink/framework
```
<!--rehype:className=wrap-text-->

#### 安装开发版

实时更新的版本，适合学习，选择`8.0.x-dev`版本。

```bash
composer create-project topthink/think=8.0.x-dev tp
```
<!--rehype:className=wrap-text-->

查看当前安装版本

```bash
php think version
```

#### 开启调试模式

应用默认是部署模式，开发阶段修改环境变量`APP_DEBUG`开启调试模式

```bash
# .example.env 更名为 .env
mv .example.env .env
vim .env

APP_DEBUG=true
```

#### 测试运行

```bash
cd /www/wwwroot/tp
php think run
```

浏览器中输入地址 `http://localhost:8000`

运行在指定端口上

```bash
php think run -p 80
```

直接访问`http://localhost`

### 开发规范

<!--rehype:wrap-class=col-span-2-->

#### 目录和文件

* 目录使用小写、下划线
* 类的文件名均以命名空间定义，并且命名空间的路径和类库文件所在路径一致
* 类（包含接口和Trait）文件采用驼峰法命名（首字母大写），其他文件采用小写、下划线命名
* 类名（包括接口和Trait）和文件名保持一致、统一采用驼峰法命名（首字母大写）

#### 函数和类、属性命名

* 类的命名采用驼峰法（首字母大写），例如`User`、`UserType`
* 函数的命名使用小写字母和下划线（小写字母开头）的方式，例如`get_client_ip`
* 方法的命名使用驼峰法（首字母小写），例如`getUserName`
* 属性的命名使用驼峰法（首字母小写），例如`tableName`、`instance`
* 特例：以双下划线`__`开头的函数或方法作为魔术方法，例如：`__call`和`__autoload`

#### 常量和配置

* 常量以大写字母和下划线命名，例如`APP_PATH`
* 配置参数以小写字母和下划线命名，例如：`url_route_on`和`url_convert`
* 环境变量定义使用大写字母和下划线命名，例如`APP_DEBUG`

#### 数据表和字段

* 数据表和字段采用小写加下划线方式命名，并注意字段名不要以下划线开头，例如`think_user`表和`user_name`字段

  不建议使用驼峰和中文作为数据表及字段命名。

  > 请避免使用PHP保留字（保留字列表参见 <http://php.net/manual/zh/reserved.keywords.php> ）作为常量、类名和方法名，以及命名空间的命名，否则会造成系统错误。

### 目录结构

#### 单应用模式

安装后默认 单应用模式部署，目录结构

```
/app
    controller
    model
    view
/public
/view
/config
/route
/runtime
```

#### 多应用模式

安装多应用模式扩展`think-multi-app`

```
composer require topthink/think-multi-app
```

与单应用主要区别，在`app`目录增加了应用子目录，同时配置文件和路由定义文件都纳入到应用目录下。

```
/app
    /index
          controller
          model
          config
          view
          route
    /admin
          controller
          model
          config
          view
          route
/public
/config
/runtime
```

`BaseController.php`、`Request.php`和`ExceptionHandle.php`三个文件是系统默认提供的基础文件，位置可以随意移动，但注意同步调整类的命名空间，如果你不需要使用`Request.php`和`ExceptionHandle.php`文件，或者要调整类名，记得必须同步调整`provider.php`文件中的容器对象绑定。

### 配置

`/config`所有的配置文件，加载子目录方式：

```php
// 加载config/extra/config.php 配置文件 读取到extra
\think\facade\Config::load('extra/config', 'extra');
```

#### 读取配置

引入`think\facade\Env`

```php
// 获取环境变量，如果不存在则使用默认值root
Env::get('database.username', 'root');
```

#### 环境变量定义

支持默认值

```
// 获取环境变量 如果不存在则使用默认值root
Env::get('database.username', 'root');
```

#### 多环境变量配置

环境变量读取不区分大小写

```bash
.env.example
.env.develop
.env.testing
```

在入口文件`public/index.php`中指定

```
$http = (new App())->setEnvName('develop')->http;
```

#### 配置读取

类文件引入

```php
use think\facade\Config;
```

读取一级配置

```php
Config::get('app');
Config::get('route');
```

读取单个配置参数

```php
Config::get('app.app_name');
Config::get('route.url_domain_root');
```

读取数组配置

```php
Config::get('database.default.host');
```

判断是否存在某个设置参数

```php
Config::has('template');
Config::has('route.route_rule_merge');
```

参数批量设置

```php
// 批量设置config
Config::set([
    'name'=>'value1',
    'name2'=>'value2'
]), 'config');
// 获取config
Config::get('config');
```

#### 系统配置文件

配置文件名|描述
:-|:-
app.php|应用配置
cache.php|缓存配置
console.php|控制台配置
cookie.php|Cookie配置
database.php|数据库配置
filesystem.php|磁盘配置
lang.php|多语言配置
log.php|日志配置
middleware.php|中间件配置
route.php|路由和URL配置
session.php|Session配置
trace.php|页面Trace配置
view.php|视图配置

架构
---

### 架构总览

#### 控制器

控制器负责请求的接收，并调用相关的模型处理，并最终通过视图输出。控制器不做过多的介入业务逻辑处理。

```php
<?php
namespace app\controller;

class Index
{
    public function index()
    {
        return 'hello, thinkphp!';
    }
}
```

#### 操作

一个控制器包含多个操作，操作方法是一个URL访问的最小单元。

```php
<?php
namespace app\controller;

class Index
{
    public function index()
    {
        return 'index';
    }

    public function hello(string $name)
    {
        return 'Hello,'.$name;
    }
}
```

#### 模型

模型通常完成实际的业务逻辑和数据封装，并返回和格式无关的数据。

ThinkPHP的模型层支持多层设计，例如模型层分为逻辑层/服务层/事件层等等。

`User`模型类

```php
<?php
namespace app\model;
use think\Model;

class User extends Model
{
}
```

#### 模板引擎

`think-view`

### 多应用

<!--rehype:wrap-class=col-span-2-->

```bash
composer require topthink/think-multi-app
```

单应用目录结构如下：

```bash
├─app 应用目录
│  ├─controller         控制器目录
│  ├─model              模型目录
│  ├─view               视图目录
│  └─ ...               更多类库目录
│
├─public                WEB目录（对外访问目录）
│  ├─index.php          入口文件
│  ├─router.php         快速测试文件
│  └─.htaccess          用于apache的重写
│
├─view                  视图目录
├─config                应用配置目录
├─route                 路由定义目录
├─runtime               应用的运行时目录
```

多应用目录结构如下：

```bash
├─app 应用目录
│  ├─index              主应用
│  │  ├─controller      控制器目录
│  │  ├─model           模型目录
│  │  ├─view            视图目录
│  │  ├─config          配置目录
│  │  ├─route           路由目录
│  │  └─ ...            更多类库目录
│  │ 
│  ├─admin              后台应用
│  │  ├─controller      控制器目录
│  │  ├─model           模型目录
│  │  ├─view            视图目录
│  │  ├─config          配置目录
│  │  ├─route           路由目录
│  │  └─ ...            更多类库目录
│
├─public                WEB目录（对外访问目录）
│  ├─admin.php          后台入口文件
│  ├─index.php          入口文件
│  ├─router.php         快速测试文件
│  └─.htaccess          用于apache的重写
│
├─config                全局应用配置目录
├─runtime               运行时目录
│  ├─index              index应用运行时目录
│  └─admin              admin应用运行时目录
```

自动多应用模式的URL地址默认使用

```bash
// 访问admin应用
http://localhost/index.php/admin
// 访问index应用
http://loaclhost/index.php/index
```

示例

```bash
mkdir -p /app/admin/controller
```

`/app/admin/controller/Index.php`

```php
<?php

namespace app\admin\controller;

class Index
{
    public function index() {
        return 'Hello admin index';
    }

}
```

```bash
mkdir -p /app/index
```

将原`/app/controller`目录移动到`/app/index`目录下。

新目录：`/app/index/controller`

访问新URL地址

```bash
// 访问index应用index控制器hello方法
http://localhost:8000/index.php/index/index/hello
// 简写URL
http://localhost:8000/index/index/hello/thinkphp
// 访问admin应用admin控制器index方法
http://localhost:8000/index.php/admin/index/index
// 简写URL
http://localhost:8000/admin/index/index
```

如直接访问

```html
http://localhost/index.php
```

访问`index`默认应用，或通过`config/app.php`配置`default_app`配置参数指定默认应用。

```php
// 设置默认应用名称
'default_app'=>'home',
```

#### 多应用智能识别

在未绑定入口或者域名情况下，URL内的`think`应用不存在，则系统会自动切换到单应用模式，如有定义全局路由，也会进行路由匹配检查。

```
http://localhost:8000/index.php/think
```

如`route/app.php`定义如下

```php
Route::get('think', function () {
    return 'hello,ThinkPHP6!';
});
```

如希望`think`应用不存在时，直接访问默认应用的路由，则在`config/app.php`中配置

```
// 开启应用快速访问
'app_express'    =>    true,
// 默认应用
'default_app'    =>    'index',
```

这时会访问`index`应用下的路由`/app/index/route/app.php`配置

#### 增加应用入口

每个应用可单独创建入口文件，而不通过`index.php`入口文件访问多个应用。

`admin.php`访问admin应用

```php
namespace think;
require __DIR__ . '/../vendor/autoload.php';

// 执行HTTP应用并响应
$http = (new App())->http;
$response = $http->run();
$response->send();
$http->end($response);
```

访问应用 `http://localhost:8000/admin.php/index`

如入口文件名(`test.php`)与应用(`admin`)不一致，那么需要加上`name`指定应用：

```php
<?php
// [ 应用入口文件 ]
namespace think;

require __DIR__ . '/../vendor/autoload.php';

// 执行HTTP应用并响应
$http = (new  App())->http;
$response = $http->name('admin')->run();
$response->send();
$http->end($response);
```

#### 获取当前应用

获取当前的应用名

```php
app('http')->getName();
```

### 应用目录获取

目录位置|目录说明|获取方法
:-|-|-
根目录|项目所在的目录，默认自动获取，可以在入口文件实例化App类的时候传入。|root_path()
基础目录|根目录下的app目录|base_path()
应用目录|当前应用所在的目录，如果是单应用模式则同基础目录，如果是多应用模式，则是app/应用子目录|app_path()
配置目录|根目录下的config目录|config_path()
运行时目录|框架运行时的目录，单应用模式就是根目录的runtime目录，多应用模式为runtime/应用子目录|runtime_path()
<!--rehype:className=show-header-->

非自动多应用部署情况下，要加载`composer`应用，需要在入口文件中设置应用路径：

```php
<?php
// [ 应用入口文件 ]
namespace think;

require __DIR__ . '/../vendor/autoload.php';

// 执行HTTP应用并响应
$http = (new  App())->http;
$response = $http->path('path/to/app')->run();
$response->send();
$http->end($response);
```

### 应用映射

配置文件： `config/app.php`

自动多应用模式下，支持应用的别名映射，例如：

```php
'app_map' => [
    'think'  =>  'admin',  // 把admin应用映射为think
],
```

应用映射后，原来的应用名将不能被访问，例如上面的admin应用不能直接访问，只能通过think应用访问。

```bash
`http://localhost:8000/index.php/admin/index/index` 无法访问

`http://localhost:8000/index.php/think/index/index` 可访问

```

应用映射支持泛解析，例如：

```php
'app_map' => [
    'think' =>  'admin',  
    'home'  =>  'index',  
    '*'     =>  'index',  
],
```

访问：`http://localhost:8000/index.php/home/index/index`

如果要使用composer加载应用，需要设置

```php
'app_map'    =>    [
    'think' => function($app) {
        $app->http->path('path/to/composer/app');
    },
],
```

### 域名绑定应用

如果多应用使用多个子域名或独立域名访问，可以在`config/app.php`中配置定义域名和应用的绑定关系

```php
'domain_bind' => [
    'blog'        =>  'blog',  //  blog子域名绑定到blog应用
    'shop.tp.com' =>  'shop',  //  完整域名绑定
    '*'           =>  'home', // 二级泛域名绑定到home应用
],
```

### 禁止应用访问

如不希望某个应用通过URL访问，则设置

```php
'deny_app_list' =>    ['common']
```

### URL访问

`8.0`的URL访问受路由影响，如未定义或匹配路由情况下（且未开启强制路由模式），是基于：

单应用模式

```
http://localhost/index.php/控制器/操作/参数/值
```

多应用模式

```
http://localhost/index.php/应用/控制器/操作/参数/值
```

如果不支持`PATHINFO`的服务器，可以使用兼容模式访问：

```
http://localhost/index.php?s=/控制器/操作/参数名/参数值
```

### URL重写

#### Apache

* httpd.conf配置文件中加载了mod_rewrite.so模块
* AllowOverride None 将None改为 All
* 把下面的内容保存为.htaccess文件放到应用入口文件的同级目录下

```
<IfModule mod_rewrite.c>
  Options +FollowSymlinks -Multiviews
  RewriteEngine On

  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]
</IfModule>
```

#### IIS

如果你的服务器环境支持ISAPI_Rewrite的话，可以配置httpd.ini文件，添加下面的内容:

```
RewriteRule (.*)$ /index\.php\?s=$1 [I]
```

在IIS的高版本下面可以配置web.Config，在中间添加rewrite节点：

```
<rewrite>
 <rules>
 <rule name="OrgPage" stopProcessing="true">
 <match url="^(.*)$" />
 <conditions logicalGrouping="MatchAll">
 <add input="{HTTP_HOST}" pattern="^(.*)$" />
 <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
 <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
 </conditions>
 <action type="Rewrite" url="index.php/{R:1}" />
 </rule>
 </rules>
 </rewrite>
```

#### Nginx

在Nginx低版本中，是不支持PATHINFO的，但是可以通过在Nginx.conf中配置转发规则实现：

```
location / { // …..省略部分代码
   if (!-f $request_filename) {
       rewrite  ^(.*)$  /index.php?s=/$1  last;
    }
}
```

### 容器和依赖注入
<!--rehype:wrap-class=col-span-2-->

```php
<?php

namespace app\controller;

use app\BaseController;
use think\Request;

class Index extends BaseController
{
    protected $request;
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function hello2($name = 'ThinkPHP8.0')
    {
        return 'Hello, ' . $name . ' ! This is '. $this->request->action();
    }
```

运行

```bash

http://localhost:8000/index.php/index/hello2
http://localhost:8000/index/hello2
```

### 服务

通过命令行生成服务类

```bash
php think make:service  FileSystemService
```

默认生成的服务类会继承`think\Service`，并且自动生成了系统服务类最常用的空方法：`register`和`boot`方法。

### 门面(Facade)

门面为容器中的（动态）类提供了一个静态调用接口，相比于传统的静态方法调用， 带来了更好的可测试性和扩展性，你可以为任何的非静态类库定义一个facade类。

下面是一个示例，假如我们定义了一个app\common\Test类，里面有一个hello动态方法。

```php
<?php
namespace app\common;

class Test
{
    public function hello($name)
    {
        return 'hello,' . $name;
    }
}
```

调用hello方法的代码应该类似于：

```php
$test = new \app\common\Test;
echo $test->hello('thinkphp'); // 输出 hello，thinkphp
```

接下来，我们给这个类定义一个静态代理类app\facade\Test（这个类名不一定要和Test类一致，但通常为了便于管理，建议保持名称统一）。

```php
<?php
namespace app\facade;

use think\Facade;

class Test extends Facade
{
    protected static function getFacadeClass()
    {
      return 'app\common\Test';
    }
}
```

只要这个类库继承think\Facade，就可以使用静态方式调用动态类app\common\Test的动态方法，例如上面的代码就可以改成：

```php
// 无需进行实例化 直接以静态方法方式调用hello
echo \app\facade\Test::hello('thinkphp');
```

结果也会输出 hello，thinkphp。

### 核心Facade类库

系统给内置的常用类库定义了Facade类库，包括：

（动态）类库|  Facade类
:--|-
think\App|  think\facade\App
think\Cache|  think\facade\Cache
think\Config|  think\facade\Config
think\Cookie|  think\facade\Cookie
think\Db|  think\facade\Db
think\Env|  think\facade\Env
think\Event|  think\facade\Event
think\Filesystem|  think\facade\Filesystem
think\Lang|  think\facade\Lang
think\Log|  think\facade\Log
think\Middleware|  think\facade\Middleware
think\Request|  think\facade\Request
think\Route|  think\facade\Route
think\Session|  think\facade\Session
think\Validate|  think\facade\Validate
think\View|  think\facade\View
所以你无需进行实例化就可以很方便的进行方法调用，例如：

```php
use think\facade\Cache;

Cache::set('name','value');
echo Cache::get('name');
```

在进行依赖注入的时候，请不要使用Facade类作为类型约束，而是建议使用原来的动态类，下面是错误的用法：

```php
<?php
namespace app\index\controller;

use think\facade\App;

class Index
{
    public function index(App $app)
    {
    }
}
```

应当使用下面的方式：

```php
<?php
namespace app\index\controller;

use think\App;

class Index
{
    public function index(App $app)
    {
    }
}
```

事实上，依赖注入和使用Facade代理的效果大多数情况下是一样的，都是从容器中获取对象实例。例如：

```php
<?php
namespace app\index\controller;

use think\Request;

class Index
{
    public function index(Request $request)
    {
        echo $request->controller();
    }
}
```

和下面的作用是一样的

```php
<?php
namespace app\index\controller;

use think\facade\Request;

class Index
{
    public function index()
    {
        echo Request::controller();
    }
}
```

依赖注入的优势是支持接口的注入，而Facade则无法完成。

### 中间件

中间件主要用于拦截或过滤应用的`HTTP`请求，并进行必要的业务处理。

通过命令行生成中间件

```bash
php think make:middleware Check
```

这个指令会在`app/middleware`目录下生成一个`Check.php`中间件文件。

```php
<?php
declare (strict_types = 1);

namespace app\middleware;

class Check
{
    /**
     * 处理请求
     *
     * @param \think\Request $request
     * @param \Closure       $next
     * @return Response
     */
    public function handle($request, \Closure $next)
    {
        if ($request->param('name') == 'think') {
            return redirect('index/think');
        }
        
        return $next($request);
    }
}

```

中间件入口执行方法必须是`handle`方法，而且第一个参数是`Request`对象，第二个参数是一个闭包。
在这个中间件中判断当前请求`name`参数等于`think`时做重定向处理。
否则，请求将进一步传递到应用中。要让请求继续传递到应用程序中，只需要使用`$request`作为参数去调用回调函数`$next`。

实际案例，判断当前浏览器环境在微信或支付宝

```php
namespace app\middleware;

/**
 * 访问环境检查，是否是微信或支付宝等
 */
class InAppCheck
{
    public function handle($request, \Closure $next)
    {
        if (preg_match('~micromessenger~i', $request->header('user-agent'))) {
            $request->InApp = 'WeChat';
        } else if (preg_match('~alipay~i', $request->header('user-agent'))) {
            $request->InApp = 'Alipay';
        }
        return $next($request);
    }
}
```

然后在你的移动版的应用里添加一个middleware.php文件
例如：/path/app/mobile/middleware.php

```
return [
    app\middleware\InAppCheck::class,
];
```

然后在你的controller中可以通过request()->InApp获取相关的值

#### 定义中间件别名

可以直接在应用配置目录下的middleware.php中先预定义中间件（其实就是增加别名标识），例如：

```
return [
    'alias' => [
        'auth'  => app\middleware\Auth::class,
        'check' => app\middleware\Check::class,
    ],
];
```

可以支持使用别名定义一组中间件，例如：

```
return [
    'alias' => [
        'check' => [
            app\middleware\Auth::class,
            app\middleware\Check::class,
        ],
    ],
];
```

#### 内置中间件

新版内置了几个系统中间件，包括：

| 中间件类                           | 描述          |
| :--------------------------------- | :------------ |
| think\middleware\AllowCrossDomain  | 跨域请求支持  |
| think\middleware\CheckRequestCache | 请求缓存      |
| think\middleware\LoadLangPack      | 多语言加载    |
| think\middleware\SessionInit       | Session初始化 |
| think\middleware\FormTokenCheck    | 表单令牌      |

这些内置中间件默认都没有定义，你可以在应用的`middleware.php`文件中、路由或者控制器中定义这些中间件，如果不需要使用的话，取消定义即可。

### 事件

事件粒度更细，更适合

路由
---

控制器
---

请求
---

响应
---

数据库
---

基于PHP和PDO的数据库中间层和ORM类库。

### 连接数据库

配置文件`config/database.php`

```php
return [
    'default'    =>    'mysql',
    'connections'    =>    [
        'mysql'    =>    [
            // 数据库类型
            'type'        => 'mysql',
            // 服务器地址
            'hostname'    => '127.0.0.1',
            // 数据库名
            'database'    => 'thinkphp',
            // 数据库用户名
            'username'    => 'root',
            // 数据库密码
            'password'    => '',
            // 数据库连接端口
            'hostport'    => '',
            // 数据库连接参数
            'params'      => [],
            // 数据库编码默认采用utf8
            'charset'     => 'utf8',
            // 数据库表前缀
            'prefix'      => 'think_',
        ],
    ],
];
```

每个应用可以设置独立的数据库连接参数：

```php
return [
    'default'    =>    'admin', 
];
```

选择默认连接配置`admin`

### 切换连接

多个连接信息：

```php
return [
    'default'    =>    'mysql',
    'connections'    =>    [
        'mysql'    =>    [
            // 数据库类型
            'type'        => 'mysql',
            // 省略......
        ],
        'demo'    =>    [
            // 数据库类型
            'type'        => 'mysql',
            // 省略......
        ],
    ],
];
```

调用`Db::connect`方法动态使用连接配置：

```php
\think\facade\Db::connect('demo')
  ->table('user')
    ->where('id', 10)
    ->find();
```

此方法仅对当次查询有效。

### 模型类定义

在模型类中定义`connection`属性，指定给定的数据库连接配置。

```php
<?php
namespace app\index\model;

use think\Model;

class User extends Model
{
    protected $connection = 'demo';
}
```

### 断线重连

数据库连接配置设置

```php
// 开启断线重连
'break_reconnect' => true,
```

特殊情况下配置

```php
// 断线标识字符串
'break_match_str' => [
  'error with', // 数据库错误信息关键词
],
```

### 关闭连接

```php
Db::connect()->close();
```

### 分布式数据库支持

开启`deploy`参数

```php
return [
    'default'    =>    'mysql',
    'connections'    =>    [
        'mysql'    =>    [
            // 启用分布式数据库
            'deploy'    =>  1,
            // 数据库类型
            'type'        => 'mysql',
            // 服务器地址
            'hostname'    => '192.168.1.1,192.168.1.2',
            // 数据库名
            'database'    => 'demo',
            // 数据库用户名
            'username'    => 'root',
            // 数据库密码
            'password'    => '',
            // 数据库连接端口
            'hostport'    => '',
        ],
    ],
];
```

`hostname`决定分布式数据库的数量，默认第一个地址是主服务器。

### 读写分离

默认情况下读写不分离，对于主从式数据库需要设置读写分离：

```php
  'rw_separate' => true,
```

如调用原生SQL，则写操作必须调用`execute`方法，读操作必须调用`query`方法。

### 主库读取

直接从主库读取数据

```php
Db::name('user')
    ->where('id', 1)
    ->update(['name' => 'thinkphp']);
Db::name('user')
    ->master(true)
    ->find(1);
```

自动主库读取配置：

```php
// 开启自动主库读取
'read_master' => true,
```

查询构造器
---

### 查询单个数据

```php
// table方法必须指定完整的数据表名
Db::table('think_user')->where('id', 1)->find();
```
<!--rehype:className=wrap-text-->
数据不存在时返回`null`

生成SQL：

```sql
SELECT * FROM `think_user` WHERE  `id` = 1 LIMIT 1
```
<!--rehype:className=wrap-text-->

数据不存在时返回空数组：

```php
// table方法必须指定完整的数据表名
Db::table('think_user')->where('id', 1)->findOrEmpty();
```
<!--rehype:className=wrap-text-->

数据不存在时抛出异常：

```php
Db::table('think_user')->where('id', 1)->findOrFail();
```
<!--rehype:className=wrap-text-->

### 查询数据集

查询多个数据：

```php
Db::table('think_user')->where('status', 1)->select();
```
<!--rehype:className=wrap-text-->

生成SQL：

```sql
SELECT * FROM `think_user` WHERE `status` = 1
```
<!--rehype:className=wrap-text-->

将数据集对象转换为数组：

```php
Db::table('think_user')->where('status', 1)->select()->toArray();
```
<!--rehype:className=wrap-text-->

在未查找到数据后抛出异常：

```php
Db::table('think_user')->where('status',1)->selectOrFail();
```
<!--rehype:className=wrap-text-->

如设置了数据表前缀参数，可以使用：

```php
Db::name('user')->where('id', 1)->find();
Db::name('user')->where('status', 1)->select();
```
<!--rehype:className=wrap-text-->

### 值和列查询

查询某个字段的值

```php
// 返回某个字段的值
Db::table('think_user')->where('id', 1)->value('name');
```
<!--rehype:className=wrap-text-->

查询结果不存在，返回`null`。

查询某一列的值

```php
// 返回数组
Db::table('think_user')->where('status',1)->column('name');
// 指定id字段的值作为索引
Db::table('think_user')->where('status',1)->column('name', 'id');
```
<!--rehype:className=wrap-text-->

如果要返回完整数据，并且添加一个索引值的话，可以使用

```php
// 指定id字段的值作为索引 返回所有数据
Db::table('think_user')->where('status',1)->column('*','id');
```
<!--rehype:className=wrap-text-->
查询结果不存在，返回空数组。

### 数据分批处理

将一次获取的结果集分成若干个小块进行处理。

全部用户表数据分批处理，每次处理100个用户

```php
Db::table('think_user')->chunk(100, function($users) {
    foreach ($users as $user) {
        //
    }
});
```
<!--rehype:className=wrap-text-->

从闭包函数中返回`false`中止对后续数据集的处理：

```php
Db::table('think_user')->chunk(100, function($users) {
    foreach ($users as $user) {
        // 处理结果集...
    if($user->status==0){
            return false;
        }
    }
});
```
<!--rehype:className=wrap-text-->

也支持在chunk方法之前调用其它的查询方法，例如：

```php
Db::table('think_user')
->where('score','>',80)
->chunk(100, function($users) {
    foreach ($users as $user) {
        //
    }
});
```
<!--rehype:className=wrap-text-->

chunk方法的处理默认是根据主键查询，支持指定字段，例如：

```php
Db::table('think_user')->chunk(100, function($users) {
    // 处理结果集...
    return false;
},'create_time');
```
<!--rehype:className=wrap-text-->
并且支持指定处理数据的顺序。

```php
Db::table('think_user')->chunk(100, function($users) {
    // 处理结果集...
    return false;
},'create_time', 'desc');
```
<!--rehype:className=wrap-text-->
注：chunk方法一般用于命令行操作批处理数据库的数据，不适合WEB访问处理大量数据，很容易导致超时。

### 游标查询

如果你需要处理大量的数据，可以使用新版提供的游标查询功能，该查询方式利用了PHP的生成器特性，可以大幅减少大量数据查询的内存开销问题。

```php
$cursor = Db::table('user')->where('status', 1)->cursor();
foreach($cursor as $user){
  echo $user['name'];
}
```
<!--rehype:className=wrap-text-->
cursor方法返回的是一个生成器对象，user变量是数据表的一条数据（数组）。

### 添加一条数据

使用`save`统一写入。 有主键数据为更新数据，无主键数据为新增数据。

```php
$data = ['foo' => 'bar', 'bar' => 'foo'];
Db::name('user')->save($data);
```
<!--rehype:className=wrap-text-->
使用`insert`提交数据

```php
$data = ['foo' => 'bar', 'bar' => 'foo'];
Db::name('user')->insert($data);
```
<!--rehype:className=wrap-text-->
返回添加成功的条数。

不存在的字段不抛出异常：

```php
$data = ['foo' => 'bar', 'bar' => 'foo'];
Db::name('user')->strict(false)->insert($data);
```
<!--rehype:className=wrap-text-->
MySQL数据库支持`replace`写入：

```php
$data = ['foo' => 'bar', 'bar' => 'foo'];
Db::name('user')->replace()->insert($data);
```
<!--rehype:className=wrap-text-->
获取新增数据的主键值：

```php
$userId = Db::name('user')->insertGetId($data);
```
<!--rehype:className=wrap-text-->

### 添加多条数据

`insertAll`方法添加多条数据，通常是二维数组。

```php
$data = [
    ['foo' => 'bar', 'bar' => 'foo'],
    ['foo' => 'bar1', 'bar' => 'foo1'],
    ['foo' => 'bar2', 'bar' => 'foo2']
];
Db::name('user')->insertAll($data);
```
<!--rehype:className=wrap-text-->
返回添加成功的条数。

MySQL支持`replace`写入：

```php
$data = [
    ['foo' => 'bar', 'bar' => 'foo'],
    ['foo' => 'bar1', 'bar' => 'foo1'],
    ['foo' => 'bar2', 'bar' => 'foo2']
];
Db::name('user')->replace()->insertAll($data);
```
<!--rehype:className=wrap-text-->

分批插入数据，`limit`方法限制数量：

```php
$data = [
    ['foo' => 'bar', 'bar' => 'foo'],
    ['foo' => 'bar1', 'bar' => 'foo1'],
    ['foo' => 'bar2', 'bar' => 'foo2']
    ...
];
// 分批写入 每次最多100条数据
Db::name('user')
    ->limit(100)
    ->insertAll($data);
```
<!--rehype:className=wrap-text-->

### 更新数据

使用`save`方法

```php
Db::name('user')
    ->save(['id' => 1, 'name' => 'thinkphp']);
```
<!--rehype:className=wrap-text-->
使用`update`方法

```php
Db::name('user')
    ->where('id', 1)
    ->update(['name' => 'thinkphp']);
```
<!--rehype:className=wrap-text-->

生成SQL：

```sql
UPDATE `think_user`  SET `name`='thinkphp'  WHERE  `id` = 1
```
<!--rehype:className=wrap-text-->
支持`data`方法传入要更新的数据

```php
Db::name('user')
    ->where('id', 1)
    ->data(['name' => 'thinkphp'])
    ->update();
```
<!--rehype:className=wrap-text-->

如果数据中包含主键，可以直接使用：

```php
Db::name('user')
    ->update(['name' => 'thinkphp','id' => 1]);
```
<!--rehype:className=wrap-text-->

```php
Db::name('user')
    ->where('id',1)
    ->exp('name','UPPER(name)')
    ->update();
```
<!--rehype:className=wrap-text-->

`raw`更新数据

```php
Db::name('user')
    ->where('id', 1)
    ->update([
        'name'    =>  Db::raw('UPPER(name)'),
        'score'    =>  Db::raw('score-3'),
        'read_time'  =>  Db::raw('read_time+1')
    ]);
```
<!--rehype:className=wrap-text-->

### 自增或自减

可以多次调用更新多个字段

```php
// score 字段加 1
Db::table('think_user')
    ->where('id', 1)
    ->inc('score')
    ->update();

// score 字段加 5
Db::table('think_user')
    ->where('id', 1)
    ->inc('score', 5)
    ->update();

// score 字段减 1
Db::table('think_user')
    ->where('id', 1)
    ->dec('score')
    ->update();

// score 字段减 5
Db::table('think_user')
    ->where('id', 1)
    ->dec('score', 5)
    ->update();
```

如每次只需要更新一个字段：

```php
// score 字段加 1
Db::table('think_user')
    ->where('id', 1)
    ->setInc('score');

// score 字段加 5
Db::table('think_user')
    ->where('id', 1)
    ->setInc('score', 5);

// score 字段减 1
Db::table('think_user')
    ->where('id', 1)
    ->setDec('score');

// score 字段减 5
Db::table('think_user')
    ->where('id', 1)
    ->setDec('score', 5);
```

### 延迟更新

对于数据表的统计字段，还提供了延迟更新方法，在setInc/setDec方法的第三个参数传入延迟更新的时间（秒）。

```php
// 阅读统计字段延迟600秒写入
Db::table('think_blog')
    ->where('id', 1)
    ->setInc('read_count', 1, 600);

// 用户关注数延迟600秒写入
Db::table('think_user')
    ->where('id', 1)
    ->setInc('attention', 1, 600);
```
<!--rehype:className=wrap-text-->

读取延迟字段：

```php
// 实时读取延迟写入的阅读统计字段
Db::table('think_blog')
    ->where('id', 1)
    ->lazyFields(['read_count'])
    ->find();

// 实时读取延迟写入的关注字段
Db::table('think_user')
    ->where('id', 1)
    ->lazyFields(['attention'])
    ->find();
```

### 删除数据

```php
// 根据主键删除
Db::table('think_user')->delete(1);
Db::table('think_user')->delete([1,2,3]);

// 条件删除    
Db::table('think_user')->where('id',1)->delete();
Db::table('think_user')->where('id','<',10)->delete();
```
<!--rehype:className=wrap-text-->

生成SQL:

```sql
DELETE FROM `think_user` WHERE  `id` = 1 
DELETE FROM `think_user` WHERE  `id` IN (1,2,3) 
DELETE FROM `think_user` WHERE  `id` = 1 
DELETE FROM `think_user` WHERE  `id` < 10
```

不带条件的`delete`方法会提示错误，确实需要删除所有数据：

```php
// 无条件删除所有数据
Db::name('user')->delete(true);
```
<!--rehype:className=wrap-text-->

软件删除机制：

```php
// 软删除数据 使用delete_time字段标记删除
Db::name('user')
  ->where('id', 1)
  ->useSoftDelete('delete_time',time())
    ->delete();
```
<!--rehype:className=wrap-text-->

查询表达式
---

支持大部分的SQL查询语法

```php
where('字段名','查询表达式','查询条件');
```

| 表达式             | 含义                              | 快捷查询方法                   |
| :----------------- | :-------------------------------- | :----------------------------- |
| =                  | 等于                              |                                |
| <>                 | 不等于                            |                                |
| >                  | 大于                              |                                |
| >=                 | 大于等于                          |                                |
| <                  | 小于                              |                                |
| <=                 | 小于等于                          |                                |
| [NOT] LIKE         | 模糊查询                          | `whereLike/whereNotLike`       |
| [NOT] BETWEEN      | （不在）区间查询                  | `whereBetween/whereNotBetween` |
| [NOT] IN           | （不在）IN 查询                   | `whereIn/whereNotIn`           |
| [NOT] NULL         | 查询字段是否（不）是NULL          | `whereNull/whereNotNull`       |
| [NOT] EXISTS       | EXISTS查询                        | `whereExists/whereNotExists`   |
| [NOT] REGEXP       | 正则（不）匹配查询（仅支持Mysql） |                                |
| [NOT] BETWEEN TIME | 时间区间比较                      | `whereBetweenTime`            |
| > TIME             | 大于某个时间                      | `whereTime`                    |
| < TIME             | 小于某个时间                      | `whereTime`                    |
| >= TIME            | 大于等于某个时间                  | `whereTime`                    |
| <= TIME            | 小于等于某个时间                  | `whereTime`                    |
| EXP                | 表达式查询，支持SQL语法           | `whereExp`                     |
| find in set        | FIND_IN_SET查询                   | `whereFindInSet`               |
<!--rehype:className=show-header-->

模型
---

视图
---

错误和日志
---

调试
---

验证
---

杂项
---

命令行
---

扩展库
---

### 数据库迁移工具
<!--rehype:wrap-class=col-span-3-->

数据库结构和数据在不同的数据库之间管理迁移。

安装

```bash
composer require topthink/think-migration
```

### 创建迁移工具文件
<!--rehype:wrap-class=col-span-3-->

```
//执行命令,创建一个操作文件,一定要用大驼峰写法,如下
php think migrate:create AnyClassNameYouWant
//执行完成后,会在项目根目录多一个database目录,这里面存放类库操作文件
//文件名类似/database/migrations/20190615151716_any_class_name_you_want.php
```

示例

```bash
php think migrate:create AnyClassNameYouWant
created .\database\migrations\20240403064636_any_class_name_you_want.php
```

### 执行迁移工具
<!--rehype:wrap-class=col-span-3-->

编辑文件

```php
<?php

use think\migration\Migrator;
use think\migration\db\Column;

class AnyClassNameYouWant extends Migrator
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {
        $table  =  $this->table('users',array('engine'=>'MyISAM'));
        $table->addColumn('username', 'string',array('limit'  =>  15,'default'=>'','comment'=>'用户名，登陆使用'))
            ->addColumn('password', 'string',array('limit'  =>  32,'default'=>md5('123456'),'comment'=>'用户密码'))
            ->addColumn('login_status', 'boolean',array('limit'  =>  1,'default'=>0,'comment'=>'登陆状态'))
            ->addColumn('login_code', 'string',array('limit'  =>  32,'default'=>0,'comment'=>'排他性登陆标识'))
            ->addColumn('last_login_ip', 'integer',array('limit'  =>  11,'default'=>0,'comment'=>'最后登录IP'))
            ->addColumn('last_login_time', 'datetime',array('default'=>0,'comment'=>'最后登录时间'))
            ->addColumn('is_delete', 'boolean',array('limit'  =>  1,'default'=>0,'comment'=>'删除状态，1已删除'))
            ->addIndex(array('username'), array('unique'  =>  true))
            ->create();
    }
}

```

```bash
php think migrate:run
//此时数据库便创建了prefix_users表.
```

注：数据库会有一个migrations表,这个是工具使用的表,不要修改

例子

```php
$table = $this->table('followers', ['id' => false, 'primary_key' => ['user_id', 'follower_id']]);
$table->addColumn('user_id', 'integer')
      ->addColumn('follower_id', 'integer')
      ->addColumn('created', 'datetime')
      ->addIndex(['email','username'], ['limit' => ['email' => 5, 'username' => 2]])
      ->addIndex('user_guid', ['limit' => 6])

     ->create();
```

### 表支持的参数选项

| 选项       | 描述                                  |
| :--------- | :------------------------------------ |
| comment    | 给表结构设置文本注释                  |
| row_format | 设置行记录模格式                      |
| engine     | 表引擎 *(默认 `InnoDB`)*              |
| collation  | 表字符集 *(默认 `utf8\_general\_ci`)* |
| signed     | 是否无符号 `signed` *(默认 `true`)*   |

### 常用列

* biginteger
* binary
* boolean
* date
* datetime
* decimal
* float
* integer
* string
* text
* time
* timestamp
* uuid

### 所有的类型都支持的参数

| Option  | Description                      |
| :------ | :------------------------------- |
| limit   | 文本或者整型的长度               |
| length  | `limit`别名                      |
| default | 默认值                           |
| null    | 允许 `NULL` 值 (不该给主键设置   |
| after   | 在哪个字段名后 *(只对MySQL有效)* |
| comment | 给列设置文本注释                 |

### 索引的用法

```php
->addIndex(['email','username'], ['limit' => ['email' => 5, 'username' => 2]])
->addIndex('user_guid', ['limit' => 6])
->addIndex('email',['type'=>'fulltext'])
```

如上面例子所示，默认是普通索引，mysql可设置生效复合索引，mysql可以设置fulltext.

### 自动版本升级降级

该项目可以升级和还原，就像git/svn一样rollback。

如果希望实现自动升级降级，那就把逻辑写在change方法里，只最终调用`create`和`update`方法，不要调用`save`方法。

`change`方法内仅支持以下操作

* createTable
* renameTable
* addColumn
* renameColumn
* addIndex
* addForeignKey

如果真的有调用其他方法，可以写到up和down方法里，这里的逻辑不支持自动还原，up写升级的逻辑，down写降级的逻辑。

```php
    public function change()
    {
        // create the table
        $table = $this->table('user_logins');
        $table->addColumn('user_id', 'integer')
              ->addColumn('created', 'datetime')
              ->create();
    }

    /**
     * Migrate Up.
     */
    public function up()
    {

    }

    /**
     * Migrate Down.
     */
    public function down()
    {

    }
```

附录
---

### 助手函数

系统为一些常用的操作方法封装了助手函数，便于使用，包含如下：

助手函数|  描述
:-|-
abort|  中断执行并发送HTTP状态码
app|  快速获取容器中的实例 支持依赖注入
bind|  快速绑定对象实例
cache|  缓存管理
class_basename|  获取类名(不包含命名空间)
class_uses_recursive|  获取一个类里所有用到的trait
config|  获取和设置配置参数
cookie|  Cookie管理
download|  获取\think\response\File对象实例
dump|  浏览器友好的变量输出
env|  获取环境变量
event|  触发事件
halt|  变量调试输出并中断执行
input|  获取输入数据 支持默认值和过滤
invoke|  调用反射执行callable 支持依赖注入
json|  JSON数据输出
jsonp|  JSONP数据输出
lang|  获取语言变量值
parse_name|  字符串命名风格转换
redirect|  重定向输出
request|  获取当前Request对象
response|  实例化Response对象
session|  Session管理
token|  生成表单令牌输出
trace|  记录日志信息
trait_uses_recursive|  获取一个trait里所有引用到的trait
url|  Url生成
validate|  实例化验证器
view|  渲染模板输出
display|  渲染内容输出
xml|  XML数据输出
app_path|  当前应用目录
base_path|  应用基础目录
config_path|  应用配置目录
public_path|  web根目录
root_path|  应用根目录
runtime_path|  应用运行时目录

可以在应用的公共函数文件中重写上面这些助手函数。

### 升级指导

`8.0`版本支持`6.*`版本的无缝升级，如果是`6.0`版本升级，需要单独安装`think-filesystem`库。

### 语义化版本

从V8.0版本开始官方将采用语义化版本号策略，也就是版本号格式使用：主版本号.次版本号.修订号。版本号递增规则如下：

主版本号：当做了不兼容的 API 修改
次版本号：当做了向下兼容的功能性新增
修订号：当做了向下兼容的问题修正
