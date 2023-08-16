Curl 备忘清单
===

此 [Curl](https://github.com/curl/curl) 备忘清单包含命令和一些常见的 Curl 技巧示例。

入门
----

### 介绍

Curl 是一种在服务器之间传输数据的工具，支持协议，包括 HTTP/FTP/IMAP/LDAP/POP3/SCP/SFTP/SMB/SMTP 等

- [Curl GitHub 源码仓库](https://github.com/curl/curl) _(github.com)_
- [Curl 官方网站](https://curl.se/) _(curl.se)_

### Options
<!--rehype:wrap-class=col-span-2 row-span-2-->

```bash
-o <file>    # --output: 写入文件
-u user:pass # --user: 验证
```

---

```bash
-v           # --verbose: 在操作期间使 curl 冗长
-vv          # 更冗长
-s           # --silent: 不显示进度表或错误
-S           # --show-error: 与 --silent (-sS) 一起使用时，显示错误但没有进度表
```

---

```bash
-i           # --include: 在输出中包含 HTTP 标头
-I           # --head: 仅标头
```

### 请求

```bash
-X POST # --request
-L  # 如果页面重定向，请点击链接
-F  # --form: multipart/form-data 的 HTTP POST 数据
```
<!--rehype:className=wrap-text -->

### 数据

```bash
# --data: HTTP post 数据
# URL 编码(例如，status="Hello")
-d 'data'

# --data 通过文件
-d @file

# --get: 通过 get 发送 -d 数据
-G
```

### 头信息 Headers

```bash
-A <str>     # --user-agent
-b name=val  # --cookie

# 从 URL 的指定文件加载 cookie
-b, --cookie FILE
# 将 cookie 从 URL 保存到指定文件
-c, --cookie-jar FILE

-b FILE          # --cookie
-H "X-Foo: y"    # --header
--compressed     # 使用 deflate/gzip
```

### SSL

```bash
    --cacert <file>
    --capath <dir>
```

```bash
-E, --cert <cert>     # --cert: 客户端证书文件
    --cert-type       # der/pem/eng
-k, --insecure        # 对于自签名证书
```

#### 安装

```bash
apk add --update curl  # alpine linux 中安装
```

示例
----
<!--rehype:body-class=cols-6-->

### CURL GET/HEAD
<!--rehype:wrap-class=col-span-4 row-span-2-->

命令 | 说明
:- | :-
`curl -I https://www.baidu.com` | `curl` 发请求
`curl -v -I https://www.baidu.com` | 带有详细信息的 `curl` 发请求
`curl -X GET https://www.baidu.com` | 使用显式 http 方法进行 `curl`
`curl --noproxy 127.0.0.1 http://www.stackoverflow.com` | 没有 http 代理的 `curl`
`curl --connect-timeout 10 -I -k https://www.baidu.com` | `curl` 默认没有超时
`curl --verbose --header "Host: www.mytest.com:8182" www.baidu.com` | `curl` 得到额外的标题
`curl -k -v https://www.google.com` | `curl` 获取带有标题的响应
<!--rehype:class=auto-wrap-->

### 多文件上传
<!--rehype:wrap-class=col-span-2-->

```bash
$ curl -v -include \
    --form key1=value1 \
    --form upload=@localfilename URL
```

### 为 curl 响应美化 json 输出
<!--rehype:wrap-class=col-span-2-->

```bash
$ curl -XGET http://${elasticsearch_ip}:9200/_cluster/nodes | python -m json.tool
```
<!--rehype:className=wrap-text -->

### CURL POST
<!--rehype:wrap-class=col-span-4-->

命令 | 说明
:- | :-
`curl -d "name=username&password=123456" <URL>` | `curl` 发请求
`curl <URL> -H "content-type: application/json" -d "{ \"woof\": \"bark\"}"` | `curl` 发送 json
<!--rehype:class=auto-wrap-->

### CURL 脚本安装 rvm
<!--rehype:wrap-class=col-span-2-->

```shell
curl -sSL https://get.rvm.io | bash
```

### CURL 高级
<!--rehype:wrap-class=col-span-6-->

命令 | 说明
:- | :-
`curl -L -s http://ipecho.net/plain, curl -L -s http://whatismijnip.nl` | 获取我的公共 `IP`
`curl -u $username:$password http://repo.dennyzhang.com/README.txt` | 带凭证的 `curl`
`curl -v -F key1=value1 -F upload=@localfilename <URL>` | `curl` 上传
`curl -k -v --http2 https://www.google.com/` | 使用 http2 curl
`curl -T cryptopp552.zip -u test:test ftp://10.32.99.187/` | curl `ftp` 上传
`curl -u test:test ftp://10.32.99.187/cryptopp552.zip -o cryptopp552.zip` | curl `ftp` 下载
`curl -v -u admin:admin123 --upload-file package1.zip http://mysever:8081/dir/package1.zip` | 使用凭证 `curl` 上传
<!--rehype:class=auto-wrap-->

### 检查网站响应时间
<!--rehype:wrap-class=col-span-4-->

```shell
curl -s -w \
     '\nLookup time:\t%{time_namelookup}\nConnect time:\t%{time_connect}\nAppCon time:\t%{time_appconnect}\nRedirect time:\t%{time_redirect}\nPreXfer time:\t%{time_pretransfer}\nStartXfer time:\t%{time_starttransfer}\n\nTotal time:\t%{time_total}\n' \
     -o /dev/null https://www.google.com
```
<!--rehype:className=wrap-text -->

### 使用 Curl 检查远程资源是否可用
<!--rehype:wrap-class=col-span-2-->

```bash
curl -o /dev/null --silent -Iw "%{http_code}" https://example.com/my.remote.tarball.gz
```
<!--rehype:className=wrap-text -->

### 正在下载文件
<!--rehype:wrap-class=col-span-3-->

```bash
curl https://example.com | \
grep --only-matching 'src="[^"]*.[png]"' | \
cut -d\" -f2 | \
while read i; do curl https://example.com/"${i}" \
-o "${i##*/}"; done
```

从站点下载所有 PNG 文件（使用GNU grep）

### 下载文件，保存文件而不更改其名称
<!--rehype:wrap-class=col-span-3-->

```bash
curl --remote-name "https://example.com/linux-distro.iso"
```

重命名文件

```bash
curl --remote-name "http://example.com/index.html" --output foo.html
```

### 继续部分下载
<!--rehype:wrap-class=col-span-3-->

```bash
curl --remote-name --continue-at - "https://example.com/linux-distro.iso"
```
<!--rehype:className=wrap-text -->

### 从多个域下载文件
<!--rehype:wrap-class=col-span-3-->

```bash
curl "https://www.{example,w3,iana}.org/index.html" --output "file_#1.html"
```
<!--rehype:className=wrap-text -->

### 下载一系列文件
<!--rehype:wrap-class=col-span-3-->

```bash
curl "https://{foo,bar}.com/file_[1-4].webp" --output "#1_#2.webp"
```
<!--rehype:className=wrap-text -->

下载一系列文件（输出`foo_file1.webp`、`foo_file2.webp…bar_file1_webp`等）

### 将输出重定向到文件
<!--rehype:wrap-class=col-span-3-->

```bash
$ curl http://url/file > file
```

### 基本认证
<!--rehype:wrap-class=col-span-3-->

```bash
$ curl --user username:password http://example.com/
$ curl -u username:password http://example.com/
```

### 写入文件而不是标准输出
<!--rehype:wrap-class=col-span-2-->

```bash
$ curl -o file http://url/file
$ curl --output file http://url/file
```

### 下载头信息

```bash
$ curl -I url
# 显示头信息
```

### 将输出写入名为远程文件的文件
<!--rehype:wrap-class=col-span-2-->

```bash
$ curl -o file http://url/file
$ curl --output file http://url/file
```

### 执行远程脚本
<!--rehype:wrap-class=col-span-2-->

```bash
$ curl -s http://url/myscript.sh
```

### 配置文件
<!--rehype:wrap-class=col-span-2-->

```bash
curl -K file
# 从文件中读取配置
curl --config file
$HOME/.curlrc # 类 UNIX 系统中的默认配置文件
```
