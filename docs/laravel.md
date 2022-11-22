Laravel 8 备忘清单
===

Laravel 8 备忘清单是最好的 Laravel 代码段和备忘清单参考

入门
----

### Artisan
<!--rehype:wrap-class=row-span-10-->

```bash
# 5.1.11 新增：http://laravel.com/docs/authorization#creating-policies
$ php artisan make:policy PostPolicy
# 显示给定命令的帮助
$ php artisan --help 或 -h
# 不输出任何信息
$ php artisan --quiet 或 -q
# 显示此应用程序版本
$ php artisan --version 或 -V
# 不要问任何互动问题
$ php artisan --no-interaction OR -n
# 强制 ANSI 输出
$ php artisan --ansi
# 禁用 ANSI 输出
$ php artisan --no-ansi
# 命令应运行的环境
$ php artisan --env
# -v|vv|vvv 增加消息的详细程度：1 表示正常输出，2 表示更详细的输出，3 表示调试
$ php artisan --verbose
# 删除编译的类文件
$ php artisan clear-compiled
# 显示当前框架环境
$ php artisan env
# 显示命令的帮助
$ php artisan help
# 列出命令
$ php artisan list
# 与您的应用程序交互
$ php artisan tinker
# 将应用程序置于维护模式
$ php artisan down
# 使应用程序退出维护模式
$ php artisan up
# 优化框架以获得更好的性能
# --force 强制写入已编译的类文件
# --psr 不要优化 Composer dump-autoload
$ php artisan optimize [--force] [--psr]
# 在 PHP 开发服务器上提供应用程序
$ php artisan serve
# 更改默认端口
$ php artisan serve --port 8080
# 让它在本地主机之外工作
$ php artisan serve --host 0.0.0.0
# 设置应用命名空间
$ php artisan app:name namespace
# 刷新过期的密码重置令牌
$ php artisan auth:clear-resets
# 刷新应用程序缓存
$ php artisan cache:clear
# 为缓存数据库表创建迁移
$ php artisan cache:table
# 创建缓存文件以加快配置加载
$ php artisan config:cache
# 删除配置缓存文件
$ php artisan config:clear
# 在节目中
$exitCode = Artisan::call('config:cache');
# 用记录播种数据库
# --class 根播种器的类名（默认值："DatabaseSeeder"）
# --database 种子的数据库连接
# --force 强制操作在生产中运行
$ php artisan db:seed [--class[="..."]] [--database[="..."]] [--force]

# 根据注册生成缺失的事件和处理程序
$ php artisan event:generate

# 创建一个新的命令处理程序类
# --command 处理程序处理的命令类
$ php artisan handler:command [--command="..."] name
# 创建一个新的事件处理程序类
# --event 处理程序处理的事件类
# --queued 表示事件处理程序应该排队
$ php artisan handler:event [--event="..."] [--queued] name

# 设置应用程序密钥
$ php artisan key:generate

# 默认情况下，这会创建一个不会推送到队列的自我处理命令
# 传递 --handler 标志以生成处理程序，传递 --queued 标志以使其排队
$ php artisan make:command [--handler] [--queued] name
# 创建一个新的 Artisan 命令
#   --command 应分配的终端命令。 （默认值：“命令：名称”）
make:console [--command[="..."]] name
# 创建一个新的足智多谋的控制器
# --plain 生成一个空的控制器类
$ php artisan make:controller [--plain] name
$ php artisan make:controller App\\Admin\\Http\\Controllers\\DashboardController
# 创建一个新的事件类
$ php artisan make:event name
# 新建一个中间件类
$ php artisan make:middleware name
# 创建一个新的迁移文件
# --create 要创建的表
# --table 要迁移的表
$ php artisan make:migration [--create[="..."]] [--table[="..."]] name
# 创建一个新的 Eloquent 模型类
$ php artisan make:model name
# 创建一个新的服务提供者类
$ php artisan make:provider name
# 新建一个表单请求类
$ php artisan make:request name
# 数据库迁移
# --database 要使用的数据库连接
# --force 强制操作在生产中运行
# --path 要执行的迁移文件的路径
# --pretend 转储将要运行的 SQL 查询
# --seed 指示是否应重新运行种子任务
$ php artisan migrate [--database[="..."]] [--force] [--path[="..."]] [--pretend] [--seed]
# 创建迁移存储库
$ php artisan migrate:install [--database[="..."]]
# 创建一个新的迁移文件
# --seeder 根播种机的类名。
$ php artisan migrate:refresh [--database[="..."]] [--force] [--seed] [--seeder[="..."]]
# 回滚所有数据库迁移
# --pretend 转储将要运行的 SQL 查询。
$ php artisan migrate:reset [--database[="..."]] [--force] [--pretend]
# 回滚上次数据库迁移
$ php artisan migrate:rollback [--database[="..."]] [--force] [--pretend]
# 显示上/下迁移列表
$ php artisan migrate:status
# 为队列作业数据库表创建迁移
$ php artisan queue:table
# 收听给定的队列
# --queue 要监听的队列
# --delay 延迟失败作业的时间量（默认值：0）
# --memory 以兆字节为单位的内存限制（默认值：128）
# --timeout 超时前作业可能运行的秒数（默认值：60）
# --sleep 在检查作业队列之前等待的秒数（默认值：3）
# --tries 在记录失败之前尝试作业的次数（默认值：0）
$ php artisan queue:listen [--queue[="..."]] [--delay[="..."]] [--memory[="..."]] [--timeout[="..."]] [--sleep[="..."]] [--tries[="..."]] [connection]
# 列出所有失败的队列作业
$ php artisan queue:failed
# 为失败队列作业数据库表创建迁移
$ php artisan queue:failed-table
# 刷新所有失败的队列作业
$ php artisan queue:flush
# 删除失败的队列作业
$ php artisan queue:forget
# 在完成当前作业后重新启动队列工作守护进程
$ php artisan queue:restart
# 重试一个失败的队列作业（id：失败作业的ID）
$ php artisan queue:retry id
# 订阅 Iron.io 推送队列的 URL
# 队列：Iron.io 队列的名称
# url：要订阅的URL
# --type 队列的推送类型
$ php artisan queue:subscribe [--type[="..."]] queue url
# 处理队列中的下一个作业
# --queue 要监听的队列
# --daemon 以守护进程模式运行worker
# --delay 延迟失败作业的时间量（默认值：0）
# --force 即使在维护模式下也强制 worker 运行
# --memory 以兆字节为单位的内存限制（默认值：128）
# --sleep 没有工作时休眠的秒数（默认值：3）
# --tries 在记录失败之前尝试作业的次数（默认值：0）
$ php artisan queue:work [--queue[="..."]] [--daemon] [--delay[="..."]] [--force] [--memory[="..."]] [--sleep[="..."]] [--tries[="..."]] [connection]

# 创建路由缓存文件以加快路由注册
$ php artisan route:cache
# 移除路由缓存文件
$ php artisan route:clear
# 列出所有注册的路由
$ php artisan route:list

# 运行预定的命令
$ php artisan schedule:run

# 为会话数据库表创建迁移
$ php artisan session:table

# 从供应商包中发布任何可发布的资产
# --force 覆盖任何现有文件
# --provider 具有您要发布的资产的服务提供商
# --tag 包含您要发布的资产的标签
$ php artisan vendor:publish [--force] [--provider[="..."]] [--tag[="..."]]
$ php artisan tail [--path[="..."]] [--lines[="..."]] [connection]
```
<!--rehype:className=wrap-text -->

### Composer

```bash
$ composer create-project laravel/laravel folder_name
$ composer install
$ composer update
$ composer dump-autoload [--optimize]
$ composer self-update
$ composer require [options] [--] [vender/packages]...
```
<!--rehype:className=wrap-text-->

### Config

```php
Config::get('app.timezone');
// 使用默认值获取
Config::get('app.timezone', 'UTC');
// 设置配置
Config::set('database.default', 'sqlite');
```

### Environment

```php
$environment = app()->environment();
$environment = App::environment();
$environment = $app->environment();
// 环境是当地的
if ($app->environment('local')){}
// 环境要么是本地的，要么是暂存的……
if ($app->environment('local', 'staging')){}
```

### Log 日志

```php
// 记录器提供 RFC 5424 中定义的七个日志记录级别：
// 调试、信息、通知、警告、错误、严重和警报
// debug, info, notice, warning, error, critical, 和 alert
Log::info('info');
Log::info('info',array('context'=>'additional info'));
Log::error('error');
Log::warning('warning');
// 获取独白实例
Log::getMonolog();
// 添加监听器
Log::listen(function($level, $message, $context) {});
```

查询记录

```php
// 启用日志
DB::connection()->enableQueryLog();
// 获取已执行查询的数组
DB::getQueryLog();
```

### URL

```php
URL::full();
URL::current();
URL::previous();
URL::to('foo/bar', $parameters, $secure);
URL::action('NewsController@item', ['id'=>123]);
// 需要在适当的命名空间中
URL::action('Auth\AuthController@logout');
URL::action('FooController@method', $parameters, $absolute);
URL::route('foo', $parameters, $absolute);
URL::secure('foo/bar', $parameters);
URL::asset('css/foo.css', $secure);
URL::secureAsset('css/foo.css');
URL::isValidUrl('http://example.com');
URL::getRequest();
URL::setRequest($request);
```

### Event

```php
Event::fire('foo.bar', array($bar));
// 向调度程序注册一个事件侦听器
// void listen(string|array $events, mixed $listener, int $priority)
Event::listen('App\Events\UserSignup', function($bar){});
Event::listen('foo.*', function($bar){});
Event::listen('foo.bar', 'FooHandler', 10);
Event::listen('foo.bar', 'BarHandler', 5);
// 停止传播事件
// 您可以通过从处理程序返回 false 来执行此操作
Event::listen('foor.bar', function($event){ return false; });
Event::subscribe('UserEventHandler');
```

### Pagination

```php
// 自动魔术分页
Model::paginate(15);
Model::where('cars', 2)->paginate(15);
// 仅“下一个”和“上一个”
Model::where('cars', 2)->simplePaginate(15);
// 手动分页器
Paginator::make($items, $totalItems, $perPage);
// 在视图中打印页面导航器
$variable->links();
```

### Lang

```php
App::setLocale('en');
Lang::get('messages.welcome');
Lang::get('messages.welcome', array('foo' => 'Bar'));
Lang::has('messages.welcome');
Lang::choice('messages.apples', 10);
// Lang::get alias
trans('messages.welcome');
```

### File
<!--rehype:wrap-class=row-span-2-->

```php
File::exists('path');
File::get('path');
File::getRemote('path');
// 通过请求获取文件的内容
File::getRequire('path');
// 需要一次给定的文件
File::requireOnce('path');
// 写一个文件的内容
File::put('path', 'contents');
// 附加到文件
File::append('path', 'data');
// 删除给定路径的文件
File::delete('path');
// 将文件移动到新位置
File::move('path', 'target');
// 将文件复制到新位置
File::copy('path', 'target');
// 从文件路径中提取文件扩展名
File::extension('path');
// 获取给定文件的文件类型
File::type('path');
// 获取给定文件的文件大小
File::size('path');
// 获取文件的最后修改时间
File::lastModified('path');
// 确定给定路径是否为目录
File::isDirectory('directory');
// 确定给定路径是否可写
File::isWritable('path');
// 确定给定路径是否为文件
File::isFile('file');
// 查找与给定模式匹配的路径名
File::glob($patterns, $flag);
// 获取目录中所有文件的数组
File::files('directory');
// 从给定目录中获取所有文件（递归）
File::allFiles('directory');
// 获取给定目录中的所有目录
File::directories('directory');
// 创建目录
File::makeDirectory('path',  $mode = 0777, $recursive = false);
// 将目录从一个位置复制到另一个位置
File::copyDirectory('directory', 'destination', $options = null);
// 递归删除目录
File::deleteDirectory('directory', $preserve = false);
// 清空指定目录下的所有文件和文件夹
File::cleanDirectory('directory');
```

### SSH

执行命令

```php
SSH::run(array $commands);
SSH::into($remote)->run(array $commands); 
// 指定远程，否则假定默认
SSH::run(array $commands, function($line)
{
  echo $line.PHP_EOL;
});
```

任务

```php
// 定义
SSH::define($taskName, array $commands);
// 执行
SSH::task($taskName, function($line)
{
  echo $line.PHP_EOL;
});
```

SFTP 上传

```php
SSH::put($localFile, $remotePath);
SSH::putString($string, $remotePath);
```

### Cookie

```php
Cookie::get('key');
Cookie::get('key', 'default');
// 创建一个永远持续的 cookie
Cookie::forever('key', 'value');
// 创建一个持续 N 分钟的 cookie
Cookie::make('key', 'value', 'minutes');
// 在创建响应之前设置 cookie
Cookie::queue('key', 'value', 'minutes');
// 忘记cookie
Cookie::forget('key');
// 发送带有响应的 cookie
$response = Response::make('Hello World');
// 将 cookie 添加到响应中
$response->withCookie(Cookie::make('name', 'value', $minutes));
```

### UnitTest

安装并运行

```php
// 添加到作曲家并更新：
"phpunit/phpunit": "4.0.*"
// 运行测试（从项目根目录）
./vendor/bin/phpunit
```

断言

```php
$this->assertTrue(true);
$this->assertEquals('foo', $bar);
$this->assertCount(1,$times);
$this->assertResponseOk();
$this->assertResponseStatus(403);
$this->assertRedirectedTo('foo');
$this->assertRedirectedToRoute('route.name');
$this->assertRedirectedToAction('Controller@method');
$this->assertViewHas('name');
$this->assertViewHas('age', $value);
$this->assertSessionHasErrors();
// 断言会话有给定键的错误...
$this->assertSessionHasErrors('name');
// 断言会话有几个键的错误...
$this->assertSessionHasErrors(array('name', 'age'));
$this->assertHasOldInput();
```

调用路由

```php
$response = $this->call($method, $uri, $parameters, $files, $server, $content);
$response = $this->callSecure('GET', 'foo/bar');
$this->session(['foo' => 'bar']);
$this->flushSession();
$this->seed();
$this->seed($connection);
```

### Cache

```php
Cache::put('key', 'value', $minutes);
Cache::add('key', 'value', $minutes);
Cache::forever('key', 'value');
Cache::remember('key', $minutes, function(){ return 'value' });
Cache::rememberForever('key', function(){ return 'value' });
Cache::forget('key');
Cache::has('key');
Cache::get('key');
Cache::get('key', 'default');
Cache::get('key', function(){ return 'default'; });
Cache::tags('my-tag')->put('key','value', $minutes);
Cache::tags('my-tag')->has('key');
Cache::tags('my-tag')->get('key');
Cache::tags('my-tag')->forget('key');
Cache::tags('my-tag')->flush();
Cache::increment('key');
Cache::increment('key', $amount);
Cache::decrement('key');
Cache::decrement('key', $amount);
Cache::section('group')->put('key', $value);
Cache::section('group')->get('key');
Cache::section('group')->flush();
```

### Session

```php
Session::get('key');
// 从会话中返回一个项目
Session::get('key', 'default');
Session::get('key', function(){ return 'default'; });
// 获取会话 ID
Session::getId();
// 在会话中放置一个键/值对
Session::put('key', 'value');
// 将值推送到会话中的数组中
Session::push('foo.bar','value');
// 返回会话中的所有项目
Session::all();
// 检查一个项目是否被定义
Session::has('key');
// 从会话中删除项目
Session::forget('key');
// 从会话中删除所有项目
Session::flush();
// 生成新的会话标识符
Session::regenerate();
// 将键/值对闪存到会话
Session::flash('key', 'value');
// 刷新所有会话闪存数据
Session::reflash();
// 刷新当前闪存数据的一个子集
Session::keep(array('key1', 'key2'));
```

### Response

```php
return Response::make($contents);
return Response::make($contents, 200);
return Response::json(array('key' => 'value'));
return Response::json(array('key' => 'value'))
->setCallback(Input::get('callback'));
return Response::download($filepath);
return Response::download($filepath, $filename, $headers);
// 创建响应并修改标头值
$response = Response::make($contents, 200);
$response->header('Content-Type', 'application/json');
return $response;
// 将 cookie 附加到响应
return Response::make($content)
->withCookie(Cookie::make('key', 'value'));
```

### Request
<!--rehype:wrap-class=row-span-2-->

```php
// url: http://xx.com/aa/bb
Request::url();
// 路径：/aa/bb
Request::path();
// getRequestUri: /aa/bb/?c=d
Request::getRequestUri();
// 返回用户的IP
Request::getClientIp();
// getUri: http://xx.com/aa/bb/?c=d
Request::getUri();
// 获取查询字符串：c=d
Request::getQueryString();
// 获取请求的端口方案（例如 80、443 等）
Request::getPort();
// 确定当前请求 URI 是否与模式匹配
Request::is('foo/*');
// 从 URI 中获取一个段（基于 1 的索引）
Request::segment(1);
// 从请求中检索标头
Request::header('Content-Type');
// 从请求中检索服务器变量
Request::server('PATH_INFO');
// 确定请求是否是 AJAX 调用的结果
Request::ajax();
// 确定请求是否通过 HTTPS
Request::secure();
// 获取请求方法
Request::method();
// 检查请求方法是否为指定类型
Request::isMethod('post');
// 获取原始 POST 数据
Request::instance()->getContent();
// 获取请求的响应格式
Request::format();
// 如果 HTTP Content-Type 标头包含 */json，则为真
Request::isJson();
// 如果 HTTP Accept 标头是 application/json，则为真
Request::wantsJson();
```

### Container

```php
App::bind('foo', function($app){ return new Foo; });
App::make('foo');
// 如果这个类存在，则返回
App::make('FooBar');
// 在容器中注册共享绑定
App::singleton('foo', function(){ return new Foo; });
// 将现有实例注册为在容器中共享
App::instance('foo', new Foo);
// 注册与容器的绑定
App::bind('FooRepositoryInterface', 'BarRepository');
// 使用应用程序注册服务提供商
App::register('FooServiceProvider');
// 监听对象分辨率
App::resolving(function($object){});
```

### Redirect

```php
return Redirect::to('foo/bar');
return Redirect::to('foo/bar')->with('key', 'value');
return Redirect::to('foo/bar')->withInput(Input::get());
return Redirect::to('foo/bar')->withInput(Input::except('password'));
return Redirect::to('foo/bar')->withErrors($validator);
// 创建对先前位置的新重定向响应
return Redirect::back();
// 创建对命名路由的新重定向响应
return Redirect::route('foobar');
return Redirect::route('foobar', array('value'));
return Redirect::route('foobar', array('key' => 'value'));
// 创建对控制器操作的新重定向响应
return Redirect::action('FooController@index');
return Redirect::action('FooController@baz', array('value'));
return Redirect::action('FooController@baz', array('key' => 'value'));
// 如果未定义预期的重定向，则默认为 foo/bar。
return Redirect::intended('foo/bar');
```

### Security

Hashing

```php
Hash::make('secretpassword');
Hash::check('secretpassword', $hashedPassword);
Hash::needsRehash($hashedPassword);
```

Encryption

```php
Crypt::encrypt('secretstring');
Crypt::decrypt($encryptedString);
Crypt::setMode('ctr');
Crypt::setCipher($cipher);
```

### Queue

```php
Queue::push('SendMail', array('message' => $message));
Queue::push('SendEmail@send', array('message' => $message));
Queue::push(function($job) use $id {});
// 多个工人的相同有效载荷
Queue::bulk(array('SendEmail', 'NotifyUser'), $payload);
```

Starting the queue listener

```bash
php artisan queue:listen
php artisan queue:listen connection
php artisan queue:listen --timeout=60
# 只处理队列中的第一个作业
php artisan queue:work
# 以守护进程模式启动一个队列工作者
php artisan queue:work --daemon
# 为失败的作业创建迁移文件
php artisan queue:failed-table
# 列出失败的工作
php artisan queue:failed
# 通过 id 删除失败的作业
php artisan queue:forget 5
# 删除所有失败的作业
php artisan queue:flush
```

### View

```php
View::make('path/to/view');
View::make('foo/bar')->with('key', 'value');
View::make('foo/bar')->withKey('value');
View::make('foo/bar', array('key' => 'value'));
View::exists('foo/bar');
// 在所有视图中共享一个值
View::share('key', 'value');
// 嵌套视图
View::make('foo/bar')->nest('name', 'foo/baz', $data);
// 注册视图编辑器
View::composer('viewname', function($view){});
// 向作曲家注册多个视图
View::composer(array('view1', 'view2'), function($view){});
// 注册作曲家类
View::composer('viewname', 'FooComposer');
View::creator('viewname', function($view){});
```

### Validation
<!--rehype:wrap-class=col-span-2-->

```php
Validator::make(
array('key' => 'Foo'),
array('key' => 'required|in:Foo')
);
Validator::extend('foo', function($attribute, $value, $params){});
Validator::extend('foo', 'FooValidator@validate');
Validator::resolver(function($translator, $data, $rules, $msgs)
{
return new FooValidator($translator, $data, $rules, $msgs);
});
```

#### Rules

- accepted
- active_url
- after:YYYY-MM-DD
- before:YYYY-MM-DD
- alpha
- alpha_dash
- alpha_num
- array
- between:1,10
- confirmed
- date
- date_format:YYYY-MM-DD
- different:fieldname
- digits:value
- digits_between:min,max
- boolean
- email
- exists:table,column
- image
- in:foo,bar,...
- not_in:foo,bar,...
- integer
- numeric
- ip
- max:value
- min:value
- mimes:jpeg,png
- regex:[0-9]
- required
- required_if:field,value
- required_with:foo,bar,...
- required_with_all:foo,bar,...
- required_without:foo,bar,...
- required_without_all:foo,bar,...
- same:field
- size:value
- timezone
- unique:table,column,except,idColumn
- url
<!--rehype:className=cols-3-->

### Form

```php
Form::open(array('url' => 'foo/bar', 'method' => 'PUT'));
Form::open(array('route' => 'foo.bar'));
Form::open(array('route' => array('foo.bar', $parameter)));
Form::open(array('action' => 'FooController@method'));
Form::open(array('action' => array('FooController@method', $parameter)));
Form::open(array('url' => 'foo/bar', 'files' => true));
Form::close();
Form::token();
Form::model($foo, array('route' => array('foo.bar', $foo->bar)));
```

#### Form Elements

```php
Form::label('id', 'Description');
Form::label('id', 'Description', array('class' => 'foo'));
Form::text('name');
Form::text('name', $value);
Form::text('name', $value, array('class' => 'name'));
Form::textarea('name');
Form::textarea('name', $value);
Form::textarea('name', $value, array('class' => 'name'));
Form::hidden('foo', $value);
Form::password('password');
Form::password('password', array('placeholder' => 'Password'));
Form::email('name', $value, array());
Form::file('name', array('class' => 'name'));
Form::checkbox('name', 'value');
// 生成一个被选中的复选框
Form::checkbox('name', 'value', true, array('class' => 'name'));
Form::radio('name', 'value');
// 生成选定的无线电输入
Form::radio('name', 'value', true, array('class' => 'name'));
Form::select('name', array('key' => 'value'));
Form::select('name', array('key' => 'value'), 'key', array('class' => 'name'));
Form::selectRange('range', 1, 10);
Form::selectYear('year', 2011, 2015);
Form::selectMonth('month');
Form::submit('Submit!', array('class' => 'name'));
Form::button('name', array('class' => 'name'));
Form::macro('fooField', function()
{
return '<input type="custom"/>';
});
Form::fooField();
```

### String

```php
// 将 UTF-8 值音译为 ASCII
Str::ascii($value)
Str::camel($value)
Str::contains($haystack, $needle)
Str::endsWith($haystack, $needles)
// 用给定值的单个实例来限制字符串。
Str::finish($value, $cap)
Str::is($pattern, $value)
Str::length($value)
Str::limit($value, $limit = 100, $end = '...')
Str::lower($value)
Str::words($value, $words = 100, $end = '...')
Str::plural($value, $count = 2)
// 生成更真实的“随机”字母数字字符串。
Str::random($length = 16)
// 生成“随机”字母数字字符串。
Str::quickRandom($length = 16)
Str::upper($value)
Str::title($value)
Str::singular($value)
Str::slug($title, $separator = '-')
Str::snake($value, $delimiter = '_')
Str::startsWith($haystack, $needles)
// 将值转换为大写大小写。
Str::studly($value)
Str::macro($name, $macro)
```

### Blade

```php
// 在模板中显示一个部分
@yield('name')
@extends('layout.name')
// 开始一个部分
@section('name')
// 结束一段
@stop
// 结束一个部分并屈服
@section('sidebar')
@show
@parent

@include('view.name')
@include('view.name', array('key' => 'value'));
@lang('messages.name')
@choice('messages.name', 1);

@if
@else
@elseif
@endif

@unless
@endunless

@for
@endfor

@foreach
@endforeach

@while
@endwhile

// 预测 4.2 功能
@forelse($users as $user)
@empty
@endforelse

// Echo 内容
{{ $var }}
// Echo 转义内容
{{{ $var }}}
// Echo 未转义的内容； 5.0 功能
{!! $var !!}
{{-- Blade Comment --}}
// 检查存在后 Echo 数据
{{{ $name or 'Default' }}}
// 显示带有花括号的原始文本
@{{ This will not be processed by Blade }}
```

### HTML

```php
HTML::macro('name', function(){});
// 将 HTML 字符串转换为实体
HTML::entities($value);
// 将实体转换为 HTML 字符
HTML::decode($value);
// 生成指向 JavaScript 文件的链接
HTML::script($url, $attributes);
// 生成指向 CSS 文件的链接
HTML::style($url, $attributes);
// 生成 HTML 图像元素
HTML::image($url, $alt, $attributes);
// 生成 HTML 链接
HTML::link($url, 'title', $attributes, $secure);
// 生成 HTTPS HTML 链接
HTML::secureLink($url, 'title', $attributes);
// 生成资产的 HTML 链接
HTML::linkAsset($url, 'title', $attributes, $secure);
// 生成指向资产的 HTTPS HTML 链接
HTML::linkSecureAsset($url, 'title', $attributes);
// 生成指向命名路由的 HTML 链接
HTML::linkRoute($name, 'title', $parameters, $attributes);
// 生成指向控制器操作的 HTML 链接
HTML::linkAction($action, 'title', $parameters, $attributes);
// 生成指向电子邮件地址的 HTML 链接
HTML::mailto($email, 'title', $attributes);
// 混淆电子邮件地址以防止垃圾邮件机器人嗅探它
HTML::email($email);
// 生成有序的项目列表
HTML::ol($list, $attributes);
// 生成一个未排序的项目列表
HTML::ul($list, $attributes);
// 创建一个列表 HTML 元素
HTML::listing($type, $list, $attributes);
// 为列表元素创建 HTML
HTML::listingElement($key, $type, $value);
// 为嵌套列表属性创建 HTML
HTML::nestedListing($key, $type, $value);
// 从数组构建 HTML 属性字符串
HTML::attributes($attributes);
// 构建单个属性元素
HTML::attributeElement($key, $value);
// 混淆字符串以防止垃圾邮件机器人嗅探它
HTML::obfuscate($value);
```

DB
---

### 基本数据库使用

```php
DB::connection('connection_name');
// 运行选择查询
$results = DB::select('select * from users where id = ?', [1]);
$results = DB::select('select * from users where id = :id', ['id' => 1]);
// 运行一般声明
DB::statement('drop table users');
// 侦听查询事件
DB::listen(function($sql, $bindings, $time){ code_here; });
// 数据库事务
DB::transaction(function()
{
  DB::table('users')->update(['votes' => 1]);
  DB::table('posts')->delete();
});
DB::beginTransaction();
DB::rollback();
DB::commit();
```
<!--rehype:className=wrap-text-->

### 查询生成器
<!--rehype:wrap-class=col-span-2 row-span-3-->

```php
// 从表中检索所有行
DB::table('name')->get();
// 表中的分块结果
DB::table('users')->chunk(100, function($users)
{
  foreach ($users as $user)
  {  
//
}
});
// 从表中检索单行
$user = DB::table('users')->where('name', 'John')->first();
DB::table('name')->first();
// 从一行中检索单个列
$name = DB::table('users')->where('name', 'John')->pluck('name');
DB::table('name')->pluck('column');
// 检索列值列表
$roles = DB::table('roles')->lists('title');
$roles = DB::table('roles')->lists('title', 'name');
// 指定 Select 子句
$users = DB::table('users')->select('name', 'email')->get();
$users = DB::table('users')->distinct()->get();
$users = DB::table('users')->select('name as user_name')->get();
// 将 Select 子句添加到现有查询
$query = DB::table('users')->select('name');
$users = $query->addSelect('age')->get();
// 使用 Where 运算符
$users = DB::table('users')->where('votes', '>', 100)->get();
$users = DB::table('users')
              ->where('votes', '>', 100)
              ->orWhere('name', 'John')
              ->get();
$users = DB::table('users')
              ->whereBetween('votes', [1, 100])->get();
$users = DB::table('users')
              ->whereNotBetween('votes', [1, 100])->get();
$users = DB::table('users')
              ->whereIn('id', [1, 2, 3])->get();
$users = DB::table('users')
              ->whereNotIn('id', [1, 2, 3])->get();
$users = DB::table('users')
              ->whereNull('updated_at')->get();
DB::table('name')->whereNotNull('column')->get();
// 动态 Where 子句
$admin = DB::table('users')->whereId(1)->first();
$john = DB::table('users')
              ->whereIdAndEmail(2, 'john@doe.com')
              ->first();
$jane = DB::table('users')
              ->whereNameOrAge('Jane', 22)
              ->first();
// 排序依据、分组依据和拥有
$users = DB::table('users')
              ->orderBy('name', 'desc')
              ->groupBy('count')
              ->having('count', '>', 100)
              ->get();
DB::table('name')->orderBy('column')->get();
DB::table('name')->orderBy('column','desc')->get();
DB::table('name')->having('count', '>', 100)->get();
// 偏移和限制
$users = DB::table('users')->skip(10)->take(5)->get();
```

### Joins

基本加入声明

```php
DB::table('users')
      ->join('contacts', 'users.id', '=', 'contacts.user_id')
      ->join('orders', 'users.id', '=', 'orders.user_id')
      ->select('users.id', 'contacts.phone', 'orders.price')
      ->get();
```

左连接语句

```php
DB::table('users')
    ->leftJoin('posts', 'users.id', '=', 'posts.user_id')
    ->get();
// select * from name = 'John' or (votes > 100 and title <> 'Admin')
DB::table('users')
        ->where('name', '=', 'John')
        ->orWhere(function($query)
        {
            $query->where('votes', '>', 100)
                  ->where('title', '<>', 'Admin');
        })
        ->get();
```

### Aggregates

```php
$users = DB::table('users')->count();
$price = DB::table('orders')->max('price');
$price = DB::table('orders')->min('price');
$price = DB::table('orders')->avg('price');
$total = DB::table('users')->sum('votes');

DB::table('name')->remember(5)->get();
DB::table('name')->remember(5, 'cache-key-name')->get();
DB::table('name')->cacheTags('my-key')->remember(5)->get();
DB::table('name')
    ->cacheTags(array('my-first-key','my-second-key'))
    ->remember(5)
    ->get();
```

### 原始表达式

```php
$users = DB::table('users')
        ->select(DB::raw('count(*) as user_count, status'))
        ->where('status', '<>', 1)
        ->groupBy('status')
        ->get();
// 返回行
DB::select('select * from users where id = ?', array('value'));
// 返回 nr 个受影响的行
DB::insert('insert into foo set bar=2');
DB::update('update foo set bar=2');
DB::delete('delete from bar');
// 返回无效
DB::statement('update foo set bar=2');
// 语句中的原始表达式
DB::table('name')
        ->select(DB::raw('count(*) as count, column2'))
        ->get();
```

### Inserts 插入

```php
DB::table('users')->insert(
  ['email' => 'john@example.com', 'votes' => 0]
);
$id = DB::table('users')->insertGetId(
  ['email' => 'john@example.com', 'votes' => 0]
);
DB::table('users')->insert([
  ['email' => 'taylor@example.com', 'votes' => 0],
  ['email' => 'dayle@example.com', 'votes' => 0]
]);
```

### Updates 更新

```php
DB::table('users')
          ->where('id', 1)
          ->update(['votes' => 1]);
DB::table('users')->increment('votes');
DB::table('users')->increment('votes', 5);
DB::table('users')->decrement('votes');
DB::table('users')->decrement('votes', 5);
DB::table('users')->increment('votes', 1, ['name' => 'John']);
```

### Deletes 删除

```php
DB::table('users')->where('votes', '<', 100)->delete();
DB::table('users')->delete();
DB::table('users')->truncate();
```

### Unions 联合
<!--rehype:wrap-class=col-span-2-->

```php
// unionAll() 方法也可用，并且具有与 union 相同的方法签名
$first = DB::table('users')->whereNull('first_name');
$users = DB::table('users')->whereNull('last_name')->union($first)->get();
// Pessimistic Locking 悲观锁定
DB::table('users')->where('votes', '>', 100)->sharedLock()->get();
DB::table('users')->where('votes', '>', 100)->lockForUpdate()->get();
```

Input
---

### Input

```php
Input::get('key');
// 如果密钥丢失则默认
Input::get('key', 'default');
Input::has('key');
Input::all();
// 获取输入时仅检索“foo”和“bar”
Input::only('foo', 'bar');
// 获取输入时忽略“foo”
Input::except('foo');
Input::flush();
```

### Session Input (flash)

```php
// 会话的闪存输入
Input::flash();
// 只闪烁会话的一些输入
Input::flashOnly('foo', 'bar');
// 只闪烁会话的一些输入
Input::flashExcept('foo', 'baz');
// 检索旧输入项
Input::old('key','default_value');
```

### Files

```php
// 使用已上传的文件
Input::file('filename');
// 判断文件是否上传
Input::hasFile('filename');
// 访问文件属性
Input::file('name')->getRealPath();
Input::file('name')->getClientOriginalName();
Input::file('name')->getClientOriginalExtension();
Input::file('name')->getSize();
Input::file('name')->getMimeType();
// 移动上传的文件
Input::file('name')->move($destinationPath);
// 移动上传的文件
Input::file('name')->move($destinationPath, $fileName);
```

路由
---

### Route

```php
Route::get('foo', function(){});
Route::get('foo', 'ControllerName@function');
Route::controller('foo', 'FooController');
```
<!--rehype:className=wrap-text-->

### RESTful 控制器

```php
Route::resource('posts','PostsController');
// 指定要在路线上处理的动作子集
Route::resource('photo', 'PhotoController',['only' => ['index', 'show']]);
Route::resource('photo', 'PhotoController',['except' => ['update', 'destroy']]);
```
<!--rehype:className=wrap-text-->

### 触发错误

```php
App::abort(404);
$handler->missing(...) in ErrorServiceProvider::boot();

throw new NotFoundHttpException;
```
<!--rehype:className=wrap-text-->

### 路由参数

```php
Route::get('foo/{bar}', function($bar){});
Route::get('foo/{bar?}', function($bar = 'bar'){});
```
<!--rehype:className=wrap-text-->

### HTTP 动词
<!--rehype:wrap-class=row-span-2-->

```php
Route::any('foo', function(){});
Route::post('foo', function(){});
Route::put('foo', function(){});
Route::patch('foo', function(){});
Route::delete('foo', function(){});
// RESTful 动作
Route::resource('foo', 'FooController');
// 为多个动词注册一个路由
Route::match(['get', 'post'], '/', function(){});
```
<!--rehype:className=wrap-text-->

### Secure Routes(TBD)

```php
Route::get('foo', array('https', function(){}));
```
<!--rehype:className=wrap-text-->

### 路由约束

```php
Route::get('foo/{bar}', function($bar){})
->where('bar', '[0-9]+');
Route::get('foo/{bar}/{baz}', function($bar, $baz){})
->where(array('bar' => '[0-9]+', 'baz' => '[A-Za-z]'))

// 设置跨路线使用的模式
Route::pattern('bar', '[0-9]+')
```
<!--rehype:className=wrap-text-->

### HTTP 中间件

```php
// 为路由分配中间件
Route::get('admin/profile', ['middleware' => 'auth', function(){}]);
```
<!--rehype:className=wrap-text-->

### 命名路由
<!--rehype:wrap-class=row-span-2-->

```php
Route::currentRouteName();
Route::get('foo/bar', array('as' => 'foobar', function(){}));
Route::get('user/profile', [
  'as' => 'profile', 'uses' => 'UserController@showProfile'
]);
$url = route('profile');
$redirect = redirect()->route('profile');
```
<!--rehype:className=wrap-text-->

### 路由前缀
<!--rehype:wrap-class=row-span-2-->

```php
Route::group(['prefix' => 'admin'], function()
{
  Route::get('users', function(){
      return 'Matches The "/admin/users" URL';
  });
});
```
<!--rehype:className=wrap-text-->

### 路由命名空间

```php
// 该路由组将携带命名空间“Foo\Bar”
Route::group(array('namespace' => 'Foo\Bar'), function(){})
```
<!--rehype:className=wrap-text-->

### 子域路由

```php
// {sub} 将被传递给闭包
Route::group(array('domain' => '{sub}.example.com'), function(){});
```
<!--rehype:className=wrap-text-->

Model
----

### 基本用法

```php
// 定义 Eloquent 模型
class User extends Model {}
// 生成 Eloquent 模型
php artisan make:model User
// 指定自定义表名
class User extends Model {
  protected $table = 'my_users';
}
```

### More
<!--rehype:wrap-class=row-span-4 col-span-2-->

```php
Model::create(array('key' => 'value'));
// 按属性查找第一个匹配记录或创建
Model::firstOrCreate(array('key' => 'value'));
// 按属性查找第一条记录或实例化
Model::firstOrNew(array('key' => 'value'));
// 创建或更新匹配属性的记录，并填充值
Model::updateOrCreate(array('search_key' => 'search_value'), array('key' => 'value'));
// 用属性数组填充模型，注意批量赋值！
Model::fill($attributes);
Model::destroy(1);
Model::all();
Model::find(1);
// 使用双主键查找
Model::find(array('first', 'last'));
// 如果查找失败则抛出异常
Model::findOrFail(1);
// 使用双主键查找并在查找失败时抛出异常
Model::findOrFail(array('first', 'last'));
Model::where('foo', '=', 'bar')->get();
Model::where('foo', '=', 'bar')->first();
// 动态的
Model::whereFoo('bar')->first();
// 如果查找失败则抛出异常
Model::where('foo', '=', 'bar')->firstOrFail();
Model::where('foo', '=', 'bar')->count();
Model::where('foo', '=', 'bar')->delete();
// 输出原始查询
Model::where('foo', '=', 'bar')->toSql();
Model::whereRaw('foo = bar and cars = 2', array(20))->get();
Model::remember(5)->get();
Model::remember(5, 'cache-key-name')->get();
Model::cacheTags('my-tag')->remember(5)->get();
Model::cacheTags(array('my-first-key','my-second-key'))->remember(5)->get();
Model::on('connection-name')->find(1);
Model::with('relation')->get();
Model::all()->take(10);
Model::all()->skip(10);
// 默认 Eloquent 排序方兴未艾
Model::all()->orderBy('column');
Model::all()->orderBy('column','desc');
```

### Soft Delete

```php
Model::withTrashed()->where('cars', 2)->get();
// 在结果中包含软删除模型
Model::withTrashed()->where('cars', 2)->restore();
Model::where('cars', 2)->forceDelete();
// 强制结果集只包含软删除
Model::onlyTrashed()->where('cars', 2)->get();
```

### Events

```php
Model::creating(function($model){});
Model::created(function($model){});
Model::updating(function($model){});
Model::updated(function($model){});
Model::saving(function($model){});
Model::saved(function($model){});
Model::deleting(function($model){});
Model::deleted(function($model){});
Model::observe(new FooObserver);
```

### Eloquent Configuration

```php
// 禁止从模型插入和更新中抛出批量分配异常
Eloquent::unguard();
// 启用任何抛出批量分配异常的能力
Eloquent::reguard();
```

Schema
---

### Schema
<!--rehype:wrap-class=row-span-4-->

```php
// 表示需要创建表
Schema::create('table', function($table)
{
  $table->increments('id');
});
// 指定连接
Schema::connection('foo')->create('table', function($table){});
// 将表重命名为给定名称
Schema::rename($from, $to);
// 表示应该删除该表
Schema::drop('table');
// 指示如果表存在则应将其删除
Schema::dropIfExists('table');
// 确定给定表是否存在
Schema::hasTable('table');
// 确定给定表是否具有给定列
Schema::hasColumn('table', 'column');
// 更新现有表
Schema::table('table', function($table){});
// 指示应重命名给定的列
$table->renameColumn('from', 'to');
// 指示应删除给定的列
$table->dropColumn(string|array);
// 应该用于表的存储引擎
$table->engine = 'InnoDB';
// 仅适用于 MySQL
$table->string('name')->after('email');
```

### Indexes
<!--rehype:wrap-class=row-span-3-->

```php
$table->string('column')->unique();
$table->primary('column');
// 创建双主键
$table->primary(array('first', 'last'));
$table->unique('column');
$table->unique('column', 'key_name');
// 创建双唯一索引
$table->unique(array('first', 'last'));
$table->unique(array('first', 'last'), 'key_name');
$table->index('column');
$table->index('column', 'key_name');
// 创建双索引
$table->index(array('first', 'last'));
$table->index(array('first', 'last'), 'key_name');
$table->dropPrimary('table_column_primary');
$table->dropUnique('table_column_unique');
$table->dropIndex('table_column_index');
```

### Foreign Keys

```php
$table->foreign('user_id')->references('id')->on('users');
$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade'|'restrict'|'set null'|'no action');
$table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade'|'restrict'|'set null'|'no action');
$table->dropForeign('posts_user_id_foreign');
```

### 列类型 - 增量

```php
$table->increments('id');
$table->bigIncrements('id');
```

### 列类型 - 字符串和文本

```php
$table->char('name', 4);
$table->string('email');
$table->string('name', 100);
$table->text('description');
$table->mediumText('description');
$table->longText('description');
```

### 列类型 - 数字

```php
$table->integer('votes');
$table->tinyInteger('votes');
$table->smallInteger('votes');
$table->mediumInteger('votes');
$table->bigInteger('votes');
$table->float('amount');
$table->double('column', 15, 8);
$table->decimal('amount', 5, 2);
```

### 列类型 - 日期和时间

```php
$table->date('created_at');
$table->dateTime('created_at');
$table->time('sunrise');
$table->timestamp('added_on');
```

### 列类型 - 添加 created_at 和 updated_at 列

```php
$table->timestamps();
$table->nullableTimestamps();
```

### 列类型 - 其他
<!--rehype:wrap-class=col-span-2-->

```php
$table->binary('data');
$table->boolean('confirmed');
// 为软删除添加 deleted_at 列
$table->softDeletes();
$table->enum('choices', array('foo', 'bar'));
// 添加 remember_token 作为 VARCHAR(100) NULL
$table->rememberToken();
// 添加 INTEGER parent_id 和 STRING parent_type
$table->morphs('parent');
->nullable()
->default($value)
->unsigned()
```

Mail
---

### Mail

```php
Mail::send('email.view', $data, function($message){});
Mail::send(array('html.view', 'text.view'), $data, $callback);
Mail::queue('email.view', $data, function($message){});
Mail::queueOn('queue-name', 'email.view', $data, $callback);
Mail::later(5, 'email.view', $data, function($message){});
// 将所有电子邮件写入日志而不是发送
Mail::pretend();
```

### Messages
<!--rehype:wrap-class=col-span-2-->

```php
// 这些可以用在传递给 Mail::send() 或 Mail::queue() 的 $message 实例上
$message->from('email@example.com', 'Mr. Example');
$message->sender('email@example.com', 'Mr. Example');
$message->returnPath('email@example.com');
$message->to('email@example.com', 'Mr. Example');
$message->cc('email@example.com', 'Mr. Example');
$message->bcc('email@example.com', 'Mr. Example');
$message->replyTo('email@example.com', 'Mr. Example');
$message->subject('Welcome to the Jungle');
$message->priority(2);
$message->attach('foo\bar.txt', $options);
// 这使用内存中的数据作为附件
$message->attachData('bar', 'Data Name', $options);
// 在消息中嵌入文件并获取 CID
$message->embed('foo\bar.txt');
$message->embedData('foo', 'Data Name', $options);
// 获取底层的 Swift Message 实例
$message->getSwiftMessage();
```

Auth
---

### Authentication

```php
// 判断当前用户是否通过认证
Auth::check();
// 获取当前认证的用户
Auth::user();
// 获取当前认证用户的ID
Auth::id();
// 尝试使用给定的凭据对用户进行身份验证
Auth::attempt(array('email' => $email, 'password' => $password));
// 通过将 true 传递给 Auth::attempt() 来“记住我”
Auth::attempt($credentials, true);
// 登录一个请求
Auth::once($credentials);
// 将用户登录到应用程序
Auth::login(User::find(1));
// 将给定的用户 ID 登录到应用程序中
Auth::loginUsingId(1);
// 从应用程序中注销用户
Auth::logout();
// 验证用户的凭据
Auth::validate($credentials);
// 尝试使用 HTTP Basic Auth 进行身份验证
Auth::basic('username');
// 执行无状态 HTTP 基本登录尝试
Auth::onceBasic();
// 向用户发送密码提醒
Password::remind($credentials, function($message, $user){});
```

### Authorization
<!--rehype:wrap-class=col-span-2-->

```php
// 定义能力
Gate::define('update-post', 'Class@method');
Gate::define('update-post', function ($user, $post) {...});
// 传递多个参数
Gate::define('delete-comment', function ($user, $post, $comment) {});

// 检查能力
Gate::denies('update-post', $post);
Gate::allows('update-post', $post);
Gate::check('update-post', $post);
// 指定一个用户进行检查
Gate::forUser($user)->allows('update-post', $post);
// 通过 User 模型，使用 Authorizable trait
User::find(1)->can('update-post', $post);
User::find(1)->cannot('update-post', $post);

// 拦截授权检查
Gate::before(function ($user, $ability) {});
Gate::after(function ($user, $ability) {});

// 在 Blade 模板中检查
@can('update-post', $post)
@endcan
// with else
@can('update-post', $post)
@else
@endcan

// 生成策略
php artisan make:policy PostPolicy
// `policy` 辅助函数
policy($post)->update($user, $post)

// 控制器授权
$this->authorize('update', $post);
// for $user
$this->authorizeForUser($user, 'update', $post);
```

Helper
---

### Arrays
<!--rehype:wrap-class=row-span-2-->

```php
// 将给定的键/值对添加到数组中，如果
// 数组中不存在给定的键
array_add($array, 'key', 'value');
// 将数组的数组折叠成一个数组
array_collapse($array);
// 将一个数组分成两个数组。一个有键，另一个有值
array_divide($array);
// 用点展平多维关联数组
array_dot($array);
// 获取所有给定的数组，除了指定的项目数组
array_except($array, array('key'));
// 返回数组中通过给定真值测试的第一个元素
array_first($array, function($key, $value){}, $default);
// 从数组中剥离键
array_flatten($array);
// 使用“点”表示法从给定数组中删除一个或多个数组项
array_forget($array, 'foo');
// 点符号
array_forget($array, 'foo.bar');
// 使用“点”表示法从数组中获取项目
array_get($array, 'foo', 'default');
array_get($array, 'foo.bar', 'default');
// 使用“点”表示法检查给定项是否存在于数组中
array_has($array, 'products.desk');
// 从给定数组中获取项目的子集
array_only($array, array('key'));
// 返回键数组 => 值
array_pluck($array, 'key');
// 从数组中返回并删除“key”
array_pull($array, 'key');
// 使用“点”表示法将数组项设置为给定值
array_set($array, 'key', 'value');
// 点符号
array_set($array, 'key.subkey', 'value');
// 根据给定闭包的结果对数组进行排序
array_sort($array, function(){});
// 使用 sort 函数对数组进行递归排序
array_sort_recursive();
// 使用给定的闭包过滤数组
array_where();
// 数组的第一个元素
head($array);
// 数组的最后一个元素
last($array);
```

### Paths

```php
// 应用程序目录的完全限定路径
app_path();
// 获取公共文件夹的路径
base_path();
// 应用程序配置目录的完全限定路径
config_path();
// 应用程序数据库目录的完全限定路径
database_path();
// 获取版本控制的 Elixir 文件的路径：
elixir();
// 公共目录的完全限定路径
public_path();
// 获取存储文件夹的路径
storage_path();
```

### Miscellaneous
<!--rehype:wrap-class=row-span-2-->

```php
// 验证器实例（Auth）
auth()->user();
// 生成对用户先前位置的重定向响应
back();
// 使用 Bcrypt (Hash) 散列给定值
bcrypt('my-secret-password');
// 从提供的项目创建一个集合实例
collect(['taylor', 'abigail']);
// 获取配置变量的值
config('app.timezone', $default);
// 生成包含 CSRF 令牌值的 HTML 隐藏输入字段
{!! csrf_field() !!}
// 检索当前 CSRF 令牌的值
$token = csrf_token();
// 转储给定的变量并结束脚本的执行
dd($value);
// 获取环境变量的值或返回默认值
$env = env('APP_ENV');
$env = env('APP_ENV', 'production');
// 将给定事件分派给它的侦听器：
event(new UserRegistered($user));
// 为给定类创建模型工厂构建器
$user = factory(App\User::class)->make();
// 生成一个 HTML 隐藏输入字段，其中包含表单的 HTTP 谓词的欺骗值
{!! method_field('delete') !!}
// 检索闪存到会话中的旧输入值
$value = old('value');
$value = old('value', 'default');
// 返回重定向器的实例以进行重定向：
return redirect('/home');
// 返回当前请求实例或获取输入项
$value = request('key', $default = null)
// 创建响应实例或获取响应工厂的实例
return response('Hello World', 200, $headers);
// 用于获取/设置会话值
$value = session('key');
$value = session()->get('key');
session()->put('key', $value);
// 将简单地返回给定的值。
value(function(){ return 'bar'; });
// 检索视图实例
return view('auth.login');
// 返回给定的值
$value = with(new Foo)->work();
```

### Strings

```php
// 将值转换为驼峰大小写
camel_case($value);
// 获取给定对象/类的类“basename”
class_basename($class);
// 转义字符串
e('<html>');
// 确定给定字符串是否以给定子字符串开头
starts_with('Foo bar.', 'Foo');
// 确定给定字符串是否以给定子字符串结尾
ends_with('Foo bar.', 'bar.');
// 将字符串转换为蛇形大小写
snake_case('fooBar');
// 限制字符串中的字符数
str_limit();
// 确定给定的字符串是否包含给定的子字符串
str_contains('Hello foo bar.', 'foo');
// 结果：foo/bar/
str_finish('foo/bar', '/');
str_is('foo*', 'foobar');
str_plural('car');
str_random(25);
str_singular('cars');
str_slug("Laravel 5 Framework", "-");
// 结果：FooBar
studly_case('foo_bar');
trans('foo.bar');
trans_choice('foo.bar', $count);
```

### URLs and Links

```php
action('FooController@method', $parameters);
// HTML Link
asset('img/photo.jpg', $title, $attributes);
// HTTPS link
secure_asset('img/photo.jpg', $title, $attributes);
route($route, $parameters, $absolute = true);
url('path', $parameters = array(), $secure = null);
```

另见
---

- [Laravel 官网地址](https://laravel.com/)
- [Laravel 8 Cheat Sheet](https://learninglaravel.net/cheatsheet/#)
