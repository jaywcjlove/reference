NGINX 备忘清单
===

这个 [nginx](https://nginx.org/en/) 快速参考备忘单显示了它的常用命和配置使用清单。

入门
----

### 服务管理
<!--rehype:wrap-class=row-span-2-->

```bash
sudo systemctl status nginx # nginx当前状态
sudo systemctl reload nginx # 重新加载 nginx
sudo systemctl restart nginx # 重启nginx

sudo nginx -t   # 检查语法
nginx           # 启动
nginx -s reload # 重启
nginx -s stop   # 关闭进程
nginx -s quit   # 平滑关闭nginx
nginx -V        # 查看nginx的安装状态，
```

### Docker 安装
<!--rehype:wrap-class=col-span-2-->

```bash
docker run --name some-nginx -v /some/content:/usr/share/nginx/html:ro -d nginx
```

### 简单代理
<!--rehype:wrap-class=col-span-2-->

```nginx
location / {
  proxy_pass http://127.0.0.1:3000;
  proxy_redirect      off;
  proxy_set_header    Host $host;
}
```

### 全局变量
<!--rehype:wrap-class=col-span-2 row-span-4-->

| 变量 | 说明
:- | :-
`$args` | 这个变量等于请求行中的参数，同 `$query_string`
`$remote_port` | 客户端的端口
`$content_length` | 请求头中的 `Content-length` 字段
`$remote_user` | 已经经过 `Auth Basic Module` 验证的用户名
`$content_type` | 请求头中的 `Content-Type` 字段
`$request_filename` | 当前请求的文件路径，由 `root` 或alias指令与URI请求生成
`$document_root` | 当前请求在 `root` 指令中指定的值
`$scheme` | HTTP方法（如http，https）
`$host` | 请求主机头字段，否则为服务器名称
`$hostname` | 主机名
`$http_user_agent` | 客户端`agent`信息
`$http_cookie` | 客户端`cookie`信息
`$server_protocol` | 请求使用的协议，通常是`HTTP/1.0`或`HTTP/1.1`
`$server_addr` | 服务器地址，在完成一次系统调用后可以确定这个值
`$server_name` | 服务器名称
`$server_port` | 请求到达服务器的端口号
`$limit_rate` | 这个变量可以限制连接速率
`$request_method` | 客户端请求的动作，如 GET/POST
`$request_uri` | 包含请求参数的原始URI，不包含主机名，如：`/foo/bar.php?arg=baz`
`$remote_addr` | 客户端的IP地址
`$uri` | 不带请求参数的当前URI，`$uri`不包含主机名，如 `/foo/bar.html`
`$document_uri` | 与 `$uri` 相同
`$nginx_version` | `nginx` 版本

更多全局变量[查看官方文档](https://nginx.org/en/docs/varindex.html)

### 监听端口

```nginx
server {
  listen 80;      # 标准 HTTP 协议
  listen 443 ssl; # 标准 HTTPS 协议
  listen 443 ssl http2; # 对于 http2
  listen [::]:80; # 使用 IPv6 在 80 上收听
  # 仅收听使用 IPv6
  listen [::]:80 ipv6only=on;
}
```

### 域名 (server_name)

```nginx
server {
  # 监听 example.com
  server_name example.com;
  # 监听多个域
  server_name example.com www.example.com;
  # 监听所有子域
  server_name *.example.com;
  # 监听所有顶级域
  server_name example.*;
  # 监听未指定的主机名（监听 IP 地址本身）
  server_name "";
}
```

### 负载均衡(简单实例)

```nginx
upstream node_js {
  server 0.0.0.0:3000;
  server 0.0.0.0:4000;
  server 127.155.142.421;
}
```

### 负载均衡(权重)

```nginx
upstream test {
  server localhost:8080 weight=9;
  server localhost:8081 weight=1;
}
```

### upstream ip_hash

```nginx {2}
upstream test {
  ip_hash;
  server localhost:8080;
  server localhost:8081;
}
```

解决负载均衡 `session` 的问题

### upstream fair

```nginx {2}
upstream backend {
  fair;
  server localhost:8080;
  server localhost:8081;
}
```

响应时间短的优先分配

### server 可选参数
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`weight` | 访问权重数值越高，收到请求越多
`fail_timeout` | 指定的时间内必须提供响应
`max_fails` | 尝试失败服务器连接的最大次数
`down` | 标记一个服务器不再接受任何请求
`backup` | 有服务器宕机，标记的机器接收请求

配置示例

```nginx
upstream test {
  server 127.0.0.1:83 weight=9; # 权重
  server 127.0.0.1:83 weight=1; # 权重
  # 失败超时时间
  server 127.0.0.1:83 max_fails=3;
  server 127.0.0.1:83 weight=3 down;
}
```

### upstream url_hash

```nginx {2,3}
upstream backend {
  hash $request_uri;
  hash_method crc32;
  server localhost:8080;
  server localhost:8081;
}
```

按访问url的hash结果来分配请求

### upstream keepalive

```nginx {4}
upstream memcached_backend {
    server 127.0.0.1:11211;
    server 10.0.0.2:11211;
    keepalive 32;
}
```

激活缓存以连接到上游服务器

### 子文件夹中的代理
<!--rehype:wrap-class=col-span-2-->

```nginx {1,2}
location /folder/ { # / 很重要！
  proxy_pass http://127.0.0.1:3000/; # / 很重要！
  proxy_redirect      off;
  proxy_set_header    Host            $host;
  proxy_set_header    X-Real-IP       $remote_addr;
  proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

### 反向代理
<!--rehype:wrap-class=row-span-3-->

#### 基础

```nginx
server {
  listen 80;
  server_name example.com;
  
  location / {
    proxy_pass http://0.0.0.0:3000;
    # 其中 0.0.0.0:3000 是绑定在 
    # 0.0.0.0端口3000 列表上的 Node.js 服务器
  }
}
```

#### 基础 + (upstream)

```nginx
upstream node_js {
  server 0.0.0.0:3000;
  # 其中 0.0.0.0:3000 是绑定在 
  # 0.0.0.0端口3000 列表上的 Node.js 服务器
}

server {
  listen 80;
  server_name example.com;
  
  location / {
    proxy_pass http://node_js;
  }
}
```

#### 升级连接（适用于支持 WebSockets 的应用程序）

```nginx
upstream node_js {
  server 0.0.0.0:3000;
}

server {
  listen 80;
  server_name example.com;
  
  location / {
    proxy_pass http://node_js;
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
 
  }
}
```

适用于 Node.js、Streamlit、Jupyter 等

### 静态资源（传统 Web 服务器）
<!--rehype:wrap-class=col-span-2-->

```nginx
server {
  listen 80;
  server_name example.com;
  root /path/to/website;
  # root /path/to/website/ 示例，如果里面没有'root'，它将寻找 /path/to/website/index.html
  location / {
  }
  location /images/ { # 如果里面没有“root”，它将寻找 /path/to/website/images/index.html
  }
  location /videos/ { # 由于里面有“root”，它会寻找 /www/media/videos/index.html
      root /www/media;
  }
}
```

### HTTPS 协议
<!--rehype:wrap-class=col-span-2-->

大多数 SSL 选项取决于您的应用程序做什么或需要什么

```nginx
server {
  listen 443 ssl http2;
  server_name example.com;
  ssl on;

  ssl_certificate /path/to/cert.pem;
  ssl_certificate_key /path/to/privkey.pem;

  ssl_stapling on;
  ssl_stapling_verify on;
  ssl_trusted_certificate /path/to/fullchain.pem;

  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_session_timeout 1d;
  ssl_session_cache shared:SSL:50m;
  add_header Strict-Transport-Security max-age=15768000;
}
```

您可以使用 Let's Encrypt 轻松保护您的网站/应用程序。去 [lets-encrypt](https://certbot.eff.org/lets-encrypt/ubuntuxenial-nginx.html) 获取更多信息

### 重定向(301永久)
<!--rehype:wrap-class=row-span-2-->

将 <www.example.com> 重定向到 example.com

```nginx
server {
  listen 80;
  server_name www.example.com;
  return 301 http://example.com$request_uri;
}
```

将 http 重定向到 https

```nginx
server {
  listen 80;
  server_name example.com;
  return 301 https://example.com$request_uri;
}
```

### 重定向(302临时)

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  return 302 http://otherdomain.com;
}
```

### 永久重定向到 HTTPS 安全域

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  return 301 https://$host$request_uri;
}
```

### 重定向参数

:- | :-
:- | :-
`permanent` | 永久性重定向。日志中的状态码为 `301`
`redirect` | 临时重定向。日志中的状态码为 `302`

### HTTP 请求端真实的IP

```nginx
location / {
  proxy_set_header X-Forwarded-For $remote_addr;
}
```
<!--rehype:className=wrap-text -->

示例
----
<!--rehype:body-class=cols-6-->

### websocket 的代理 keepalive
<!--rehype:wrap-class=col-span-3-->

```nginx
# Upstreams
upstream backend {
    server 127.0.0.1:3000;
    keepalive 5;
}
# HTTP Server
server {
  server_name your_hostname.com;
  error_log /var/log/nginx/rocketchat.access.log;
  location / {
      proxy_pass http://backend;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
      proxy_set_header Host $http_host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forward-Proto http;
      proxy_set_header X-Nginx-Proxy true;
      proxy_redirect off;
  }
}
```
<!--rehype:className=wrap-text -->

### Apache 的反向代理
<!--rehype:wrap-class=col-span-3-->

```nginx
server {
  server_name domain.tld;

  access_log /log/domain.tld.access.log;
  error_log /log/domain.tld.error.log;
  root /var/www/domain.tld/htdocs;

  # 将请求传递给 Apache 后端
  location / {
      proxy_pass http://backend;
  }
  # 使用后备处理静态文件
  location ~* \.(ogg|ogv|svg|svgz|eot|otf|woff|woff2|ttf|m4a|mp4|ttf|rss|atom|jpe?g|gif|cur|heic|png|tiff|ico|zip|webm|mp3|aac|tgz|gz|rar|bz2|doc|xls|exe|ppt|tar|mid|midi|wav|bmp|rtf|swf|webp)$ {
      add_header "Access-Control-Allow-Origin" "*";
      access_log off;
      log_not_found off;
      expires max;
      try_files $uri @fallback;
  }
  # 如果找不到文件，则回退以将请求传递给 Apache
  location @fallback {
      proxy_pass http://backend;
  }
}
```
<!--rehype:className=wrap-text -->

### Gitlab 的反向代理
<!--rehype:wrap-class=col-span-4 row-span-3-->

```nginx
server {
  #侦听的80端口
  listen       80;
  server_name  git.example.cn;
  location / {
    proxy_pass   http://localhost:3000;
    # 以下是一些反向代理的配置可删除
    proxy_redirect             off;
    # 后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
    proxy_set_header           Host $host;
    client_max_body_size       10m;  # 允许客户端请求的最大单文件字节数
    client_body_buffer_size    128k; # 缓冲区代理缓冲用户端请求的最大字节数
    proxy_connect_timeout      300;  # nginx跟后端服务器连接超时时间(代理连接超时)
    proxy_send_timeout         300;  # 后端服务器数据回传时间(代理发送超时)
    proxy_read_timeout         300;  # 连接成功后，后端服务器响应时间(代理接收超时)
    # 设置代理服务器（nginx）保存用户头信息的缓冲区大小
    proxy_buffer_size          4k;
    # proxy_buffers缓冲区，网页平均在32k以下的话，这样设置
    proxy_buffers              4 32k;
    # 高负荷下缓冲大小（proxy_buffers*2）
    proxy_busy_buffers_size    64k;
  }
}
```

### 重定向整个网站
<!--rehype:wrap-class=col-span-2-->

```nginx
server {
  server_name old-site.com;
  return 301 $scheme://new-site.com$request_uri;
}
```
<!--rehype:className=wrap-text -->

### 重定向单页
<!--rehype:wrap-class=col-span-2-->

```nginx
server {
  location = /oldpage.html {
    return 301 http://example.org/newpage.html;
  }
}
```
<!--rehype:className=wrap-text -->

### 重定向整个子路径
<!--rehype:wrap-class=col-span-2-->

```nginx
location /old-site {
  rewrite ^/old-site/(.*) http://example.org/new-site/$1 permanent;
}
```
<!--rehype:className=wrap-text -->

### 负载均衡
<!--rehype:wrap-class=col-span-3-->

```nginx
upstream example {
  ip_hash;
  # upstream的负载均衡，weight是权重，可以根据机器配置定义权重。
  # weigth参数表示权值，权值越高被分配到的几率越大。
  server 192.168.122.11:8081 ;
  server 127.0.0.1:82 weight=3;
  server 127.0.0.1:83 weight=3 down;
  server 127.0.0.1:84 weight=3; max_fails=3  fail_timeout=20s;
  server 127.0.0.1:85 weight=4;
  keepalive 32;
}
server {
  #侦听的80端口
  listen       80;
  server_name  git.example.cn;
  location / {
    # 在这里设置一个代理，和 upstream 的名字一样
    proxy_pass   http://example;
  }
}
```

### 内容缓存
<!--rehype:wrap-class=col-span-3-->

允许浏览器基本上永久地缓存静态内容。 Nginx 将为您设置 Expires 和 Cache-Control 头信息

```nginx {3}
location /static {
    root /data;
    expires max;
}
```

如果要求浏览器永远不会缓存响应（例如用于跟踪请求），请使用 `-1`

```nginx {3}
location = /empty.gif {
    empty_gif;
    expires -1;
}
```

### 跨域问题
<!--rehype:wrap-class=col-span-3-->

```nginx
server {
  listen 80;
  server_name api.xxx.com;
    
  add_header 'Access-Control-Allow-Origin' '*';
  add_header 'Access-Control-Allow-Credentials' 'true';
  add_header 'Access-Control-Allow-Methods' 'GET,POST,HEAD';

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host  $http_host;    
  } 
}
```

### 重定向 URI 来解决跨域问题
<!--rehype:wrap-class=col-span-3 row-span-2-->

```nginx
upstream test {
  server 127.0.0.1:8080;
  server localhost:8081;
}
server {
  listen 80;
  server_name api.xxx.com;
  location / { 
    root  html;                   # 去请求../html文件夹里的文件
    index  index.html index.htm;  # 首页响应地址
  }
  # 用于拦截请求，匹配任何以 /api/开头的地址，
  # 匹配符合以后，停止往下搜索正则。
  location ^~/api/{ 
    # 代表重写拦截进来的请求，并且只能对域名后边的除去传递的参数外的字符串起作用
    # 例如www.a.com/api/msg?meth=1&par=2重写，只对/api/msg重写。
    # rewrite后面的参数是一个简单的正则 ^/api/(.*)$，
    # $1代表正则中的第一个()，$2代表第二个()的值，以此类推。
    rewrite ^/api/(.*)$ /$1 break;
    
    # 把请求代理到其他主机 
    # 其中 http://www.b.com/ 写法和 http://www.b.com写法的区别如下
    # 如果你的请求地址是他 http://server/html/test.jsp
    # 配置一： http://www.b.com/ 后面有“/” 
    #         将反向代理成 http://www.b.com/html/test.jsp 访问
    # 配置一： http://www.b.com 后面没有有“/” 
    #         将反向代理成 http://www.b.com/test.jsp 访问
    proxy_pass http://test;

    # 如果 proxy_pass  URL 是 http://a.xx.com/platform/ 这种情况
    # proxy_cookie_path应该设置成 /platform/ / (注意两个斜杠之间有空格)。
    proxy_cookie_path /platfrom/ /;

    # 设置 Cookie 头通过
    proxy_pass_header Set-Cookie;
  } 
}
```

### 跳转到带 www 的域上面
<!--rehype:wrap-class=col-span-3-->

```nginx
server {
  listen 80;
  # 配置正常的带www的域名
  server_name www.wangchujiang.com;
  root /home/www/wabg/download;
  location / {
      try_files $uri $uri/ /index.html =404;
  }
}

server {
  # 将不带 www 的 wangchujiang.com 
  # 永久性重定向到 https://www.wangchujiang.com
  server_name wangchujiang.com;
  rewrite ^(.*) https://www.wangchujiang.com$1 permanent;
}
```

### 代理转发
<!--rehype:wrap-class=col-span-2 row-span-2-->

```nginx
upstream server-api {
  # api 代理服务地址
  server 127.0.0.1:3110;    
}
upstream server-resource {
  # 静态资源 代理服务地址
  server 127.0.0.1:3120;
}
server {
  listen       3111;
  server_name  localhost; # 这里指定域名
  root /home/www/server-statics;
  # 匹配 api 路由的反向代理到API服务
  location ^~/api/ {
      rewrite ^/(.*)$ /$1 break;
      proxy_pass http://server-api;
  }
  # 假设这里验证码也在API服务中
  location ^~/captcha {
      rewrite ^/(.*)$ /$1 break;
      proxy_pass http://server-api;
  }
  # 假设你的图片资源全部在另外一个服务上面
  location ^~/img/ {
      rewrite ^/(.*)$ /$1 break;
      proxy_pass http://server-resource;
  }
  # 路由在前端，后端没有真实路由，
  # 路由不存在的 404 状态的页面返回 /index.html
  # 使用场景，用在 React/Vue项目没有真实路由
  location / {
    try_files $uri $uri/ /index.html =404;
    #                      空格很重要 ^
  }
}
```

### 屏蔽 IP
<!--rehype:wrap-class=col-span-4-->

可以放到 `http`, `server`, `location`, `limit_except` 语句块

```nginx
include blockip.conf;
```

在 `blockip.conf` 里面输入内容，如：

```nginx
deny 165.91.122.67;

deny IP;            # 屏蔽单个 ip 访问
allow IP;           # 允许单个 ip 访问
deny all;           # 屏蔽所有 ip 访问
allow all;          # 允许所有 ip 访问
deny 123.0.0.0/8;   # 屏蔽整个段即从 123.0.0.1 到 123.255.255.254 访问的命令
deny 124.45.0.0/16; # 屏蔽IP段即从 123.45.0.1 到 123.45.255.254 访问的命令
deny 123.45.6.0/24; # 屏蔽IP段即从 123.45.6.1 到 123.45.6.254 访问的命令

# 如果你想实现这样的应用，除了几个IP外，其他全部拒绝
allow 1.1.1.1; 
allow 1.1.1.2;
deny all; 
```

### 强制将 http 重定向到 https
<!--rehype:wrap-class=col-span-4-->

```nginx
server {
  listen       80;
  server_name  example.com;
  rewrite ^ https://$http_host$request_uri? permanent; # 强制将 http 重定向到 https
  # 在错误页面和“服务器”响应头字段中启用或禁用发射nginx版本。 防止黑客利用版本漏洞攻击
  server_tokens off;
}
```

### 代理转发连接替换
<!--rehype:wrap-class=col-span-2-->

```nginx
location ^~/api/upload {
  rewrite ^/(.*)$ /wfs/v1/upload break;
  proxy_pass http://wfs-api;
}
```

将地址 `/api/upload` 替换为 `/wfs/v1/upload`

### 爬虫 User-Agent 过滤
<!--rehype:wrap-class=col-span-4-->

```nginx
location / {
  if ($http_user_agent ~* "python|curl|java|wget|httpclient|okhttp") {
      return 503;
  }
  # 正常处理
  # ...
}
```

### 图片防盗链
<!--rehype:wrap-class=col-span-2-->

```nginx
location ~* \.(gif|jpg|png|swf|flv)$ {
  root html;

  valid_referers none blocked *.nginx.com;

  if ($invalid_referer) {
    rewrite ^/ www.nginx.cn;
    # return 404;
  }
}
```

### 虚拟目录配置
<!--rehype:wrap-class=col-span-2-->

```nginx
location /img/ {
  alias /var/www/image/;
}
# 访问 /img/ 目录里面的文件时，
# 会自动去 /var/www/image/ 目录找文件
location /img/ {
  root /var/www/image;
}
# 访问 /img/ 目录下的文件时，
# 会去 /var/www/image/img/ 目录下找文件
```

### 屏蔽文件目录
<!--rehype:wrap-class=col-span-2 row-span-2-->

通用备份和归档文件

```nginx
location ~* "\.(old|orig|original|php#|php~|php_bak|save|swo|aspx?|tpl|sh|bash|bak?|cfg|cgi|dll|exe|git|hg|ini|jsp|log|mdb|out|sql|svn|swp|tar|rdf)$" {
    deny all;
}
```
<!--rehype:className=wrap-text -->

拒绝访问 `.git` 和 `.svn` 目录

```nginx
location ~ (.git|.svn) {
    deny all;
}
```
<!--rehype:className=wrap-text -->

拒绝访问隐藏文件和目录

```nginx
location ~ /\.(?!well-known\/) {
    deny all;
}
```

### 防盗图配置
<!--rehype:wrap-class=col-span-4-->

```nginx
location ~ \/public\/(css|js|img)\/.*\.(js|css|gif|jpg|jpeg|png|bmp|swf) {
  valid_referers none blocked *.jslite.io;
  if ($invalid_referer) {
      rewrite ^/  http://wangchujiang.com/piratesp.png;
  }
}
```

### ulimit 不继承系统设置的问题
<!--rehype:wrap-class=col-span-2-->

- 执行 status 命令

  ```bash
  sudo service nginx status
  ```

  执行 status 命令，看到 Loaded: loaded (/lib/systemd/system/nginx.service;...) 这一行的nginx.service 文件位置

- 打开 service 文件

  ```bash
  sudo vim /lib/systemd/system/nginx.service
  ```

- 修改 service 中的配置
  找到 `[Service]` 部分，将 `LimitNOFILE=65535` 添加到该部分

  ```bash
  [Service]
  ...
  LimitNOFILE=65535
  ...
  ```
<!--rehype:className=style-timeline-->

解决 `systemctl` 管理的 ulimit 不继承系统设置的问题

### Gzip 配置
<!--rehype:wrap-class=col-span-4-->

```nginx
gzip  on;
gzip_buffers 16 8k;
gzip_comp_level 6;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_proxied any;
gzip_vary on;
gzip_types
    text/xml application/xml application/atom+xml application/rss+xml application/xhtml+xml image/svg+xml
    text/javascript application/javascript application/x-javascript
    text/x-json application/json application/x-web-app-manifest+json
    text/css text/plain text/x-component
    font/opentype application/x-font-ttf application/vnd.ms-fontobject
    image/x-icon;
gzip_disable  "msie6";
```

### 阻止常见攻击
<!--rehype:wrap-class=col-span-3-->

#### base64编码的网址

```nginx
location ~* "(base64_encode)(.*)(\()" {
    deny all;
}
```

#### javascript eval() url

```nginx
location ~* "(eval\()" {
    deny all;
}
```

### 使网站不可索引
<!--rehype:wrap-class=col-span-3-->

```nginx
add_header X-Robots-Tag "noindex";

location = /robots.txt {
  return 200 "User-agent: *\nDisallow: /\n";
}
```

### 获取请求ip
<!--rehype:wrap-class=col-span-3-->

```nginx
server {
  listen 80;
  server_name xxx.top;

  location / {
    access_log /data/logs/nginx/json_ip.log json;
    proxy_set_header Host $http_host;
        proxy_set_header X-Real-Ip $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://127.0.0.1:9999;
  }
}

server {
  listen 9999;

  location / {
    access_log off;
    default_type application/json;
    return 200 "{\"ip\":\"$http_X_Real_Ip\"}";
  }
}
```

### 判断请求参数
<!--rehype:wrap-class=col-span-3-->

```nginx
# 判断多个参数示例
set $flagts 0;
if ( $arg_aaa ~ "^aaa" ) {
    set $flagts "${flagts}1";
}
if ( $arg_bbb ~ "^bbb" ) {
    set $flagts "${flagts}1";
}
if ( $flagts = "011" ) {
    return 200;
}
```

### 流量镜像配置
<!--rehype:wrap-class=col-span-3-->

```nginx
server {
    listen       80;
    server_name 192.168.1.1;

    location = /mirror1 {
        internal;
        #### address1 ####
        proxy_set_header Host mirror1.com;
        proxy_pass http://127.0.0.1:8008/api/service/list;
    }

    location = /mirror2 {
        internal;
        #### address2 ####
        proxy_set_header Host mirror2.com;
        proxy_pass http://127.0.0.1:8009/api/service/list;
    }

    # 只转发这个接口
    location /api/service/list {
        access_log /data/logs/nginx/json_test_to_mirror.log json;
        mirror /mirror1;
        mirror /mirror2;
        proxy_pass http://127.0.0.1:8007;
    }

    location / {
        access_log /data/logs/nginx/json_test.log json;
        proxy_pass http://192.168.1.1:8007;
    }

}
```

另见
---

- [Nginx 安装维护入门学习笔记](https://jaywcjlove.github.io/nginx-tutorial) _(jaywcjlove.github.io)_
- [advanced-nginx-cheatsheet](https://virtubox.github.io/advanced-nginx-cheatsheet/) _(virtubox.github.io)_
