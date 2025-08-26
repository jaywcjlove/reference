Nix 备忘清单
===

Nix 快速参考备忘单，旨在帮助编写基础的 Nix 代码。Nix 是一个纯函数式包管理器和 NixOS 系统的基础语言。

类型与语法
---

### 字符串
<!--rehype:wrap-class=row-span-2-->

```nix
let
  x = "单行字符串";
  y = ''
    多行字符串
    支持换行和缩进
  '';
  z = ''
    前导空格会被自动处理
      这行会保持缩进
  '';
in
```

#### 字符串插值

```nix
let
  name = "世界";
  greeting = "你好，${name}！";
in
```

#### 转义字符

```nix
let
  escaped = ''
    引号：\"hello\"，换行：\n，制表符：\t
  '';
in
```

### 整数

```nix
let
  x = -123;
  y = 123;
  # 支持不同进制
  hex = 0xFF;          # 十六进制: 255
  bin = 0b1010;        # 二进制: 10
  oct = 0o755;         # 八进制: 493
in
```

### 浮点数

```nix
let
  x = -0.32;
  y = 0.45;
  scientific = 1.23e-4;    # 科学记数法
  inf = 1.0 / 0.0;         # 无穷大
in
```

### 布尔值

```nix
let
  x = true;
  y = false;
  # 布尔运算
  and_result = true && false;   # false
  or_result = true || false;    # true
  not_result = !true;           # false
in
```

### 空值

```nix
let
  x = null;
  # null 表示缺失值
  # 类似于其他语言的 None 或 undefined
in
```

### 路径

```nix
let
  absolute = /usr/bin/env;      # 绝对路径
  relative = ./config.nix;      # 相对路径
  home = ~/Documents;           # 家目录路径
  # 路径会在构建时自动复制到 Nix store
in
```

### 属性集
<!--rehype:wrap-class=row-span-2-->

```nix
let
  x = {
    name = "张三";
    age = 25;
    address = {
      city = "北京";
      district = "朝阳区";
    };
  };
  y = { c = 3; };
  # 递归属性集
  rec_set = rec {
    x = 1;
    y = x + 1;    # 可以引用同级属性
  };
in
```

参见 [属性集操作](#属性集)

### 列表
<!--rehype:wrap-class=row-span-2-->

```nix
let
  numbers = [ 1 2 3 4 5 ];
  mixed = [
    1
    "这是字符串"
    23.0
    null
    { name = "属性集"; }
  ];
  # 列表可以包含任意类型的元素
  nested = [ [ 1 2 ] [ 3 4 ] ];
in
```

### 注释

#### ↓ 单行注释

```nix
# 这是单行注释
let x = 1; in x  # 行末注释
```

#### ↓ 多行注释

```nix
/*
  这是多行注释
  可以跨越多行
  /* 可以嵌套 */
*/
```

作用域管理
---

### 定义局部变量
<!--rehype:wrap-class=row-span-2-->

```nix
let
  x = 1;
  y = 2;
  z = x + y;    # 可以引用前面定义的变量
in
  x + y + z     # 返回 6
```

#### 嵌套 let 表达式

```nix
let
  outer = 10;
in
  let
    inner = 5;
  in
    outer + inner   # 返回 15
```

### 将变量添加到作用域

```nix
let
  x = 1;
  y = 2;
in
  { inherit x y; }    # 继承多个变量
```

#### ↓ 等价于

```nix
let
  x = 1;
  y = 2;
in
  { x = x; y = y; }
```

### 从属性集继承属性
<!--rehype:wrap-class=row-span-2-->

```nix
let
  config = { 
    host = "localhost"; 
    port = 8080;
    ssl = true;
  };
in
  { 
    inherit (config) host port;
    # 只继承特定属性
  }
```

#### ↓ 等价于

```nix
let
  config = { 
    host = "localhost"; 
    port = 8080;
    ssl = true;
  };
in
  { 
    host = config.host; 
    port = config.port; 
  }
```

### 将所有属性引入作用域

```nix
let
  config = { 
    host = "localhost"; 
    port = 8080;
    database = "myapp";
  };
in
  with config;
  "${host}:${toString port}/${database}"    # 返回 "localhost:8080/myapp"
```

#### 注意事项

```nix
let
  x = 1;
  attrs = { x = 2; y = 3; };
in
  with attrs;
  x + y    # x = 1 (局部变量优先级更高), y = 3
```

条件表达式
---

### 基本条件表达式
<!--rehype:wrap-class=row-span-2-->

```nix
let
  x = 10;
  result = if x > 0
    then "正数"
    else if x < 0
    then "负数"
    else "零";
in
  result
```

#### 布尔条件判断

```nix
let
  isEnabled = true;
  config = if isEnabled
    then { port = 8080; debug = true; }
    else { port = 80; debug = false; };
in
  config
```

#### 字符串条件判断

```nix
let
  env = "production";
  database = if env == "production"
    then "prod-db.example.com"
    else if env == "staging"
    then "staging-db.example.com"
    else "localhost";
in
  database
```

### 复杂条件判断
<!--rehype:wrap-class=col-span-2-->

```nix
let
  user = { name = "张三"; age = 25; isAdmin = true; };
  message = if user.isAdmin && user.age >= 18
    then "管理员用户: ${user.name}"
    else "普通用户: ${user.name}";
in
  message
```

### 条件表达式中的属性集
<!--rehype:wrap-class=col-span-2-->

```nix
let
  env = "production";
  config = if env == "development"
    then {
      debug = true;
      logLevel = "debug";
      database.host = "localhost";
    }
    else {
      debug = false;
      logLevel = "info";
      database.host = "prod-db.example.com";
    };
in
  config
```

属性集
---

### 定义属性集

```nix
let
  person = {
    name = "李四";
    age = 30;
    skills = [ "编程" "设计" "管理" ];
    contact = {
      email = "lisi@example.com";
      phone = "138-0000-0000";
    };
  };
in
  person
```

### 动态属性名

```nix
let
  key = "dynamicKey";
  attrs = {
    ${key} = "动态值";
    "static-key" = "静态值";
  };
in
  attrs    # { dynamicKey = "动态值"; static-key = "静态值"; }
```

### 更新属性集

```nix
let
  base = { x = 1; y = 2; };
  updated = base // { y = 3; z = 4; };   # 合并属性集
in
  updated    # { x = 1; y = 3; z = 4; }
```

#### 深度合并

```nix
let
  config1 = {
    server = { host = "localhost"; port = 8080; };
    database = { name = "test"; };
  };
  config2 = {
    server = { port = 9000; ssl = true; };
    cache = { enabled = true; };
  };
  # 注意：// 操作符只进行浅合并
  merged = config1 // config2;
  # server 属性会被完全替换，而不是深度合并
in
  merged
```

### 检查属性是否存在

```nix
let
  person = { name = "王五"; age = 28; };
in
  {
    hasName = person ? name;      # true
    hasEmail = person ? email;    # false
    hasNested = person ? contact.email;  # false (嵌套检查)
  }
```

### 访问属性

```nix
let
  config = {
    server = {
      host = "localhost";
      port = 8080;
    };
  };
in
  {
    host = config.server.host;     # 访问嵌套属性
    port = config.server.port;
  }
```

#### 可选属性访问

```nix
let
  config = { server = { host = "localhost"; }; };
in
  {
    port = config.server.port or 3000;        # 如果不存在则使用默认值
    timeout = config.timeout or 30;           # 30
    ssl = config.server.ssl or false;         # false
  }
```

连接与插值
---

### 连接列表

```nix
let
  list1 = [ 1 2 3 ];
  list2 = [ 4 5 6 ];
  combined = list1 ++ list2;     # [ 1 2 3 4 5 6 ]
  
  # 多个列表连接
  all = [ 0 ] ++ list1 ++ list2 ++ [ 7 8 ];
in
  all    # [ 0 1 2 3 4 5 6 7 8 ]
```

### 连接路径与字符串

```nix
let
  base = /usr/bin;
  executable = base + /python3;           # /usr/bin/python3
  
  # 路径与字符串连接
  config_path = /etc + "/nginx/nginx.conf";   # /etc/nginx/nginx.conf
  
  # 字符串连接
  greeting = "你好" + "，世界！";            # "你好，世界！"
in
  { inherit executable config_path greeting; }
```

### 字符串插值

```nix
let
  name = "张三";
  age = 25;
  score = 95.5;
in
  {
    greeting = "你好，${name}！";
    info = "姓名：${name}，年龄：${toString age}";
    result = "考试成绩：${toString score}分";
    
    # 复杂表达式插值
    status = "用户 ${name} ${if age >= 18 then "已成年" else "未成年"}";
    
    # 路径插值
    config_file = "${./configs}/${name}.conf";
  }
```

函数
---

### 简单函数

```nix
let
  # 单参数函数
  increment = x: x + 1;
  double = x: x * 2;
  
  # 使用函数
  result1 = increment 5;    # 6
  result2 = double 3;       # 6
in
  { inherit result1 result2; }
```

### 命名参数
<!--rehype:wrap-class=col-span-2 row-span-4-->

```nix
let
  # 基本命名参数
  createUser = {name, age, email}: {
    inherit name age email;
    id = builtins.hashString "md5" email;
  };
  
  user = createUser {
    name = "张三";
    age = 25;
    email = "zhangsan@example.com";
  };
in
  user
```

#### 忽略额外参数

```nix
let
  # 使用 ... 忽略额外的参数
  processConfig = {host, port, ...}: {
    url = "${host}:${toString port}";
  };
  
  result = processConfig {
    host = "localhost";
    port = 8080;
    ssl = true;        # 会被忽略
    timeout = 30;      # 会被忽略
  };
in
  result    # { url = "localhost:8080"; }
```

#### 默认参数值

```nix
let
  # 为参数提供默认值
  createServer = {
    host ? "localhost", 
    port ? 8080, 
    ssl ? false
  }: {
    inherit host port ssl;
    url = 
      let proto = if ssl then "https" else "http";
      in "${proto}://${host}:${toString port}";
  };
  
  # 使用所有默认值
  server1 = createServer {};
  # 只覆盖 port  
  server2 = createServer {port = 3000;};
  # 覆盖多个参数
  server3 = createServer {                      
    host = "example.com";
    port = 443;
    ssl = true;
  };
in
  { inherit server1 server2 server3; }
```

#### 绑定到变量

```nix
let
  # 将整个参数集绑定到变量，同时解构部分参数
  logMessage = {
    level, 
    message, 
    timestamp ? null
  }@args: {
    formatted = "[${level}] ${message}";
    raw = args;  # 保留原始参数集
    hasTimestamp = 
      args ? timestamp && timestamp != null;
  };
  
  log = logMessage {
    level = "INFO";
    message = "服务器启动成功";
    user = "admin";  # 额外参数也会保存在 args 中
  };
in
  log
```

### 多参数函数

```nix
let
  # 柯里化函数
  add = x: y: x + y;
  multiply = x: y: z: x * y * z;
  
  # 部分应用
  add10 = add 10;  # 等价于 y: 10 + y
  
  # 使用示例
  result1 = add 3 4;        # 7
  result2 = add10 5;        # 15
  result3 = multiply 2 3 4; # 24
in
  { inherit result1 result2 result3; }
```

### 高阶函数

```nix
let
  # 接受函数作为参数的高阶函数
  applyTwice = f: x: f (f x);
  
  # 返回函数的高阶函数
  createMultiplier = factor: x: x * factor;
  
  # 函数组合
  compose = f: g: x: f (g x);
  
  # 使用示例
  double = x: x * 2;
  increment = x: x + 1;
  
  result1 = applyTwice double 3;    # 12
  triple = createMultiplier 3;
  result2 = triple 5;               # 15
  doubleAndIncrement = 
    compose increment double;
  result3 = doubleAndIncrement 4;   # 9
in
  { inherit result1 result2 result3; }
```

### 递归函数

```nix
let
  # 计算阶乘
  factorial = n:
    if n <= 1
    then 1
    else n * factorial (n - 1);
  
  # 斐波那契数列
  fibonacci = n:
    if n <= 1
    then n
    else fibonacci (n - 1) + fibonacci (n - 2);
  
  # 列表长度计算
  listLength = list:
    if list == []
    then 0
    else 1 + listLength (builtins.tail list);
  
  # 使用示例
  fact5 = factorial 5;        # 120
  fib7 = fibonacci 7;         # 13
  len = listLength [1 2 3 4]; # 4
in
  { inherit fact5 fib7 len; }
```

### 条件函数

```nix
let
```nix
let
  # 根据条件选择不同的处理函数
  processData = condition: data:
    let
      uppercaseProcessor = str: 
        builtins.replaceStrings 
          ["a" "e" "i" "o" "u"] 
          ["A" "E" "I" "O" "U"] str;
      
      lengthProcessor = str: 
        toString (builtins.stringLength str);
      
      reverseProcessor = str: 
        let
          len = builtins.stringLength str;
          chars = builtins.genList 
            (i: builtins.substring 
              (len - 1 - i) 1 str) len;
        in
          builtins.concatStringsSep "" chars;
    in
      if condition == "uppercase"
      then uppercaseProcessor data
      else if condition == "length"
      then lengthProcessor data
      else if condition == "reverse"
      then reverseProcessor data
      else data;
  
  # 使用示例
  text = "hello world";
  result1 = processData "uppercase" text;
  result2 = processData "length" text;
  result3 = processData "reverse" text;
in
  { inherit result1 result2 result3; }
```

### 函数工厂

```nix
let
  # 创建验证器函数的工厂
  createValidator = rules: value:
    let
      checkRule = rule:
        if rule.type == "minLength"
        then 
          builtins.stringLength value >= rule.value
        else if rule.type == "maxLength"
        then 
          builtins.stringLength value <= rule.value
        else if rule.type == "contains"
        then 
          builtins.match ".*${rule.value}.*" value 
          != null
        else true;
      
      results = map checkRule rules;
      allValid = builtins.all (x: x) results;
    in
      { 
        valid = allValid; 
        value = value;
        errors = builtins.filter 
          (rule: !checkRule rule) rules;
      };
  
  # 创建特定的验证器
  emailValidator = createValidator [
    { type = "minLength"; value = 5; }
    { type = "contains"; value = "@"; }
    { type = "contains"; value = "."; }
  ];
  
  passwordValidator = createValidator [
    { type = "minLength"; value = 8; }
    { type = "maxLength"; value = 32; }
  ];
  
  # 使用示例
  email_result = emailValidator "user@example.com";
  password_result = passwordValidator "mypassword123";
in
  { inherit email_result password_result; }
```

### 函数式编程工具

```nix
let
  # 映射函数
  mapList = f: list:
    if list == []
    then []
    else 
      let head = f (builtins.head list);
          tail = mapList f (builtins.tail list);
      in [ head ] ++ tail;
  
  # 过滤函数
  filterList = predicate: list:
    if list == []
    then []
    else
      let
        head = builtins.head list;
        tail = builtins.tail list;
        filtered_tail = 
          filterList predicate tail;
      in
        if predicate head
        then [ head ] ++ filtered_tail
        else filtered_tail;
  
  # 归约函数
  reduceList = f: initial: list:
    if list == []
    then initial
    else 
      let head = builtins.head list;
          tail = builtins.tail list;
      in reduceList f (f initial head) tail;
  
  # 使用示例
  numbers = [ 1 2 3 4 5 ];
  doubled = mapList (x: x * 2) numbers;
  evens = filterList (x: x mod 2 == 0) numbers;
  sum = reduceList (acc: x: acc + x) 0 numbers;
  product = reduceList (acc: x: acc * x) 1 numbers;
in
  { inherit doubled evens sum product; }
```

内置函数
---

### 类型检查函数

```nix
let
  value = "hello";
in
  {
    isString = builtins.isString value;      
          # true
    isInt = builtins.isInt value;            
          # false
    isBool = builtins.isBool true;           
          # true
    isList = builtins.isList [1 2 3];        
          # true
    isAttrs = builtins.isAttrs {x = 1;};     
          # true
    isFunction = builtins.isFunction (x: x); 
          # true
  }
```

### 字符串操作函数
<!--rehype:wrap-class=col-span-2-->

```nix
let
  text = "Hello, Nix World!";
in
  {
    length = builtins.stringLength text;     # 18
    substring = builtins.substring 7 3 text; # "Nix"
    split = builtins.split " " text;         # 分割字符串
    replace = builtins.replaceStrings ["Nix"] ["世界"] text;  # "Hello, 世界 World!"
    
    # 大小写转换需要自定义实现
    toLower = builtins.replaceStrings 
      ["A" "B" "C" "D" "E" "F" "G" "H" "I" "J" "K" "L" "M" 
       "N" "O" "P" "Q" "R" "S" "T" "U" "V" "W" "X" "Y" "Z"]
      ["a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k" "l" "m" 
       "n" "o" "p" "q" "r" "s" "t" "u" "v" "w" "x" "y" "z"] 
      "HELLO";
  }
```

### 列表操作函数

```nix
let
  numbers = [1 2 3 4 5];
  strings = ["apple" "banana" "cherry"];
in
  {
    length = builtins.length numbers;        # 5
    head = builtins.head numbers;            # 1
    tail = builtins.tail numbers;            # [2 3 4 5]
    
    # 映射函数
    doubled = map (x: x * 2) numbers;        # [2 4 6 8 10]
    # 过滤函数
    evens = builtins.filter (x: x mod 2 == 0) numbers;  # [2 4]
    # 折叠函数
    sum = builtins.foldl' (acc: x: acc + x) 0 numbers;  # 15
    # 元素查找
    hasThree = builtins.elem 3 numbers;      # true
    # 排序
    sorted = builtins.sort (a: b: a < b) [3 1 4 1 5 9];  # [1 1 3 4 5 9]
  }
```

### 属性集操作函数
<!--rehype:wrap-class=col-span-2-->

```nix
let
  attrs = { a = 1; b = 2; c = 3; };
in
  {
    keys = builtins.attrNames attrs;         # ["a" "b" "c"]
    values = builtins.attrValues attrs;      # [1 2 3]
    hasAttr = builtins.hasAttr "b" attrs;    # true
    
    # 映射属性值
    doubled = builtins.mapAttrs (name: value: value * 2) attrs;
    # { a = 2; b = 4; c = 6; }
    
    # 过滤属性
    filtered = builtins.filterAttrs (name: value: value > 1) attrs;
    # { b = 2; c = 3; }
    
    # 移除属性
    removed = builtins.removeAttrs attrs ["b"];  # { a = 1; c = 3; }
  }
```

导入与模块
---

### 导入文件

```nix
let
  # 导入其他 Nix 文件
  utils = import ./utils.nix;
  config = import ./config.nix;
  
  # 带参数导入
  lib = import <nixpkgs/lib>;
  
  # 导入并传递参数
  myModule = import ./module.nix {
    pkgs = import <nixpkgs> {};
    config = { enableFeature = true; };
  };
in
  {
    inherit utils config lib myModule;
  }
```

### 模块定义
<!--rehype:wrap-class=col-span-2-->

```nix
# module.nix 示例
{ pkgs, config, ... }:

{
  # 模块选项
  options = {
    services.myapp = {
      enable = lib.mkOption {
        type = lib.types.bool;
        default = false;
        description = "启用 MyApp 服务";
      };
      
      port = lib.mkOption {
        type = lib.types.int;
        default = 8080;
        description = "MyApp 监听端口";
      };
    };
  };
  
  # 模块配置
  config = lib.mkIf config.services.myapp.enable {
    systemd.services.myapp = {
      description = "MyApp 服务";
      after = ["network.target"];
      serviceConfig = {
        ExecStart = "${pkgs.myapp}/bin/myapp --port ${toString config.services.myapp.port}";
        Restart = "always";
      };
    };
  };
}
```

包管理
---

### 基本包定义

```nix
# default.nix 或 shell.nix
{ pkgs ? import <nixpkgs> {} }:

pkgs.stdenv.mkDerivation {
  pname = "my-app";
  version = "1.0.0";
  
  src = ./.;  # 当前目录作为源码
  
  buildInputs = with pkgs; [
    nodejs
    yarn
  ];
  
  buildPhase = ''
    yarn install
    yarn build
  '';
  
  installPhase = ''
    mkdir -p $out/bin
    cp -r dist/* $out/
    makeWrapper ${pkgs.nodejs}/bin/node $out/bin/my-app \
      --add-flags "$out/index.js"
  '';
  
  meta = with pkgs.lib; {
    description = "我的应用程序";
    homepage = "https://example.com";
    license = licenses.mit;
    maintainers = with maintainers; [ "your-name" ];
  };
}
```

### 开发环境
<!--rehype:wrap-class=col-span-2-->

```nix
# shell.nix
{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    # 开发工具
    git
    nodejs
    yarn
    python3
    
    # 系统库
    pkg-config
    openssl
    
    # 数据库
    postgresql
    redis
  ];
  
  # 环境变量
  shellHook = ''
    echo "欢迎进入开发环境！"
    export DATABASE_URL="postgresql://localhost/myapp"
    export REDIS_URL="redis://localhost:6379"
    
    # 自动启动服务
    if ! pgrep -f "postgres" > /dev/null; then
      echo "启动 PostgreSQL..."
      postgres -D $HOME/postgres-data &
    fi
  '';
}
```

常用工具函数
---

### 递归函数
<!--rehype:wrap-class=col-span-2-->

```nix
let
  # 计算阶乘
  factorial = n:
    if n <= 1
    then 1
    else n * factorial (n - 1);
  
  # 列表求和
  sumList = list:
    if list == []
    then 0
    else builtins.head list + sumList (builtins.tail list);
  
  # 深度合并属性集
  deepMerge = a: b:
    let
      mergeAttr = name:
        let
          aVal = a.${name};
          bVal = b.${name};
        in
          if builtins.isAttrs aVal && builtins.isAttrs bVal
          then deepMerge aVal bVal
          else bVal;
    in
      a // b // builtins.listToAttrs (
        map (name: { inherit name; value = mergeAttr name; })
        (builtins.filter (name: builtins.hasAttr name a) (builtins.attrNames b))
      );
in
  {
    fact5 = factorial 5;           # 120
    listSum = sumList [1 2 3 4 5]; # 15
    merged = deepMerge 
      { a = { x = 1; y = 2; }; c = 3; }
      { a = { y = 9; z = 4; }; d = 5; };
  }
```

错误处理
---

### 断言

```nix
let
  version = "1.2.3";
  
  # 基本断言
  validVersion = assert builtins.stringLength version > 0; version;
  
  # 带消息的断言（通过 throw 实现）
  checkPort = port:
    if port < 1 || port > 65535
    then throw "端口号必须在 1-65535 之间，当前值: ${toString port}"
    else port;
  
  # 条件检查
  config = {
    port = checkPort 8080;
    host = if builtins.getEnv "HOST" != "" 
           then builtins.getEnv "HOST" 
           else "localhost";
  };
in
  config
```

### 异常处理
<!--rehype:wrap-class=col-span-2-->

```nix
let
  # 安全的属性访问
  safeGet = attrs: path: default:
    let
      keys = builtins.split "\\." path;
      getValue = obj: keyList:
        if keyList == [] then obj
        else if !builtins.isAttrs obj then default
        else if !builtins.hasAttr (builtins.head keyList) obj then default
        else getValue (obj.${builtins.head keyList}) (builtins.tail keyList);
    in
      getValue attrs keys;
  
  config = {
    database = {
      host = "localhost";
      port = 5432;
    };
  };
  
  # 安全访问嵌套属性
  dbHost = safeGet config "database.host" "default-host";      # "localhost"
  dbUser = safeGet config "database.user" "default-user";      # "default-user"
in
  { inherit dbHost dbUser; }
```

来源
---

- [Nix 手册](https://nixos.org/manual/nix/stable/) - 官方用户手册
- [NixOS 手册](https://nixos.org/manual/nixos/stable/) - NixOS 系统配置指南
- [Nixpkgs 手册](https://nixos.org/manual/nixpkgs/stable/) - 包管理指南
- [NixOS/nixpkgs](https://github.com/NixOS/nixpkgs) - 官方包仓库
- [NixOS/nix](https://github.com/NixOS/nix) - Nix 包管理器源码
- [Nix Pills](https://nixos.org/guides/nix-pills/) - 深入学习 Nix 的教程
- [nix-shell](https://nixos.org/manual/nix/stable/command-ref/nix-shell.html) - 创建开发环境
- [nix-build](https://nixos.org/manual/nix/stable/command-ref/nix-build.html) - 构建包
- [nix-env](https://nixos.org/manual/nix/stable/command-ref/nix-env.html) - 用户环境管理
- [nixos-rebuild](https://nixos.org/manual/nixos/stable/administration/administration.html) - 系统重构建
- [NixOS/marketing](https://github.com/nixos/marketing) _(github.com)_
- [Nix 语言官方文档](https://nixos.org/manual/nix/stable/expressions/language-values.html) _(nixos.org)_
