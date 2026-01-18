MinIO 备忘清单
===

这是 MinIO 语法的快速参考备忘单

MinIO 快速参考
----

### 基本概念

- **对象存储**：存储非结构化数据，如图片、视频等。
- **桶（Bucket）**：MinIO中存储对象的容器，类似于文件夹。
- **对象（Object）**：桶中存储的具体数据。

### 安装MinIO

- 从[MinIO官网](https://min.io/download)下载对应平台的MinIO服务器。
- 根据操作系统的指南进行安装。

### 启动MinIO服务

- 运行MinIO服务器，通常使用以下命令：

  ```shell
  minio server /export/data1 /export/data2 /export/data3 /export/data4
  ```

- 其中`/export/data1`等是存储数据的路径。

### 访问MinIO

- 使用Web界面访问MinIO，通常是`http://127.0.0.1:9000`。
- 使用客户端工具，如`mc`命令行工具。

### minio client 安装
<!--rehype:wrap-class=row-span-2 col-span-2-->

#### windows

下载

```bash
https://dl.min.io/client/mc/release/windows-amd64/mc.exe
\path\to\mc.exe --help
```

#### mac
  
安装

```bash
brew install minio/stable/mc
mc --help
```

#### linux

```sh
curl https://dl.min.io/client/mc/release/linux-amd64/mc \
--create-dirs \
-o $HOME/minio-binaries/mc

chmod +x $HOME/minio-binaries/mc
export PATH=$PATH:$HOME/minio-binaries/
```

版本比较多,请去官网查找安装步骤

### mc 连接服务操作

列出所有别名

```bash
mc alias list
```

添加服务别名

```bash
mc alias set myminio https://myminio.example.net minioadminuser minioadminpassword
```

删除服务别名

```bash
mc alias rm myminio
```

### mc 桶操作

创建桶

```sh
mc mb myminio/mybucket
```

删除桶

```sh
mc rb myminio/mybucket
```

设置桶策略

```sh
mc policy set download myminio/mybucket
```

设置桶生命周期

```sh
mc ilm import myminio/mybucket
```

### mc 文件操作
<!--rehype:wrap-class=row-span-2-->

列出文件

```sh
mc ls myminio/mybucket
```

上传文件

```sh
mc cp /path/to/file myminio/mybucket/file
```

下载文件

```sh
mc cp myminio/mybucket/file /path/to/destination
```

删除文件

```sh
mc rm myminio/mybucket/file
```

移动文件

```sh
mc mv myminio/mybucket/file myminio/mybucket/newfile
```

拷贝文件

```sh
mc cp myminio/mybucket/file myminio/mybucket/newfile
```

查找文件

```sh
mc find myminio/mydata --name "*.jpg"
```

### mc 文件夹操作
<!--rehype:wrap-class=row-span-2-->

列出文件夹

```sh
mc ls myminio/mybucket/folder
```

创建文件夹

```sh
mc mb myminio/mybucket/folder
```

删除文件夹

```sh
mc rb myminio/mybucket/folder
```

移动文件夹

```sh
mc mv -r myminio/mybucket/folder myminio/mybucket/newfolder
```

拷贝文件夹

```sh
mc cp -r myminio/mybucket/folder myminio/mybucket/newfolder
```

删除文件夹中的所有文件

```sh
mc rm --recursive myminio/mybucket/folder
```

列出文件夹中的所有文件

```sh
mc ls --recursive myminio/mybucket/folder
```

列出文件夹中的所有文件，包括子文件夹

```sh
mc ls --recursive --include-folders myminio/mybucket/folder
```

### mc 其他操作

列出所有桶

```sh
mc ls myminio
```

显示帮助信息

```sh
mc  help
```

版本信息

```sh
mc version
```

Admin 常用管理命令
---

### mc admin 管理操作
<!--rehype:wrap-class=col-span-3-->

`mc admin` 用于管理 MinIO 服务端（需要具备相应管理权限的账号/策略）。

#### 常用全局参数（`mc` 全局，对 `mc admin` 同样适用）

参数 | 说明
---- | ----
`--json` | 输出 JSON，便于脚本解析与自动化处理
`--debug` | 打印调试信息（排查权限/网络/签名等问题）
`--insecure` | 跳过 TLS 证书校验（自签名证书/测试环境常用）
`-C, --config-dir <DIR>` | 指定 `mc` 配置目录（多环境隔离）
`-q, --quiet` | 静默模式，减少非必要输出
`--no-color` | 禁用彩色输出（CI/日志更友好）
`--dp, --disable-pager` | 禁用分页器（管道/重定向场景更稳定）
`-H, --custom-header '<key>:<value>'` | 追加自定义 HTTP Header
<!--rehype:className=show-header left-align-->

### mc admin info（节点/集群信息）

查看 MinIO 服务信息（集群/节点/版本等）。

```sh
mc admin info [--offline] TARGET
```

常用参数：

参数 | 说明
---- | ----
`--offline` | 允许在部分节点离线的情况下返回可用信息（排障场景常用）
<!--rehype:className=show-header left-align-->

示例：

```sh
mc admin info myminio
mc admin info --offline myminio
mc admin info --json myminio
```

### mc admin logs（服务端日志）
<!--rehype:wrap-class=col-span-2-->

按需拉取服务端日志输出（可指定节点）。

```sh
mc admin logs [--last <N>] [--type <TYPE>] TARGET [NODE]
```

常用参数：

参数 | 说明
---- | ----
`-l, --last <N>` | 返回最近 N 条日志
`-t, --type <TYPE>` | 指定服务类型（常见：`minio`）
<!--rehype:className=show-header left-align-->

示例：

```sh
mc admin logs myminio
mc admin logs --last 100 myminio
mc admin logs --type minio myminio
mc admin logs --json --last 200 myminio
mc admin logs myminio http://minio-node-1:9000
```

### mc admin accesskey（访问密钥 / Service Account）
<!--rehype:wrap-class=col-span-3 row-span-2-->

用于创建与管理用户的访问密钥（常用于给应用/CI 生成可控权限的 Service Account）。

> 注：从 `mc` **2024-10-08** 起开始提供 `mc admin accesskey`（旧版本可能使用 `mc admin user svcacct` 等命令族）。

#### create（创建）

```sh
# 用户名可忽略，默认为当前用户
mc admin accesskey create [FLAGS] TARGET [USERNAME]
```

常用参数：

参数 | 说明
---- | ----
`--access-key <ACCESSKEY>` | 指定 Access Key（不指定则自动生成）
`--secret-key <SECRETKEY>` | 指定 Secret Key（不指定则自动生成）
`--comment <TEXT>` | 为该密钥添加备注
`--expiry <DURATION>` | 设置过期时间/有效期（不指定则为永久有效）
`--policy <JSON>` | 直接传入策略 JSON（为该密钥绑定权限）
`--policy-file <FILE>` | 从文件加载策略 JSON
`--description <TEXT>` | 描述信息
<!--rehype:className=show-header left-align-->

示例：

```sh
mc admin accesskey create myminio
mc admin accesskey create --comment "ci" --policy-file ./readonly.json myminio appuser
mc admin accesskey create --access-key "$AK" --secret-key "$SK" --expiry 168h myminio appuser
```

#### edit（编辑）

```sh
mc admin accesskey edit [FLAGS] TARGET ACCESSKEY
```

常用参数：

参数 | 说明
---- | ----
`--comment <TEXT>` | 更新备注
`--expiry <DURATION>` | 更新过期时间/有效期
`--policy <JSON>` | 更新策略 JSON
`--policy-file <FILE>` | 从文件更新策略 JSON
`--description <TEXT>` | 更新描述信息
<!--rehype:className=show-header left-align-->

示例：

```sh
mc admin accesskey edit --comment "rotate-2026-01" myminio "$AK"
mc admin accesskey edit --policy-file ./writeonly.json myminio "$AK"
```

#### info（查看详情）

```sh
mc admin accesskey info TARGET ACCESSKEY
```

示例：

```sh
mc admin accesskey info myminio "$AK"
mc admin accesskey info --json myminio "$AK"
```

#### ls（列表）

```sh
mc admin accesskey ls [FLAGS] TARGET [USERNAME]
```

常用参数：

参数 | 说明
---- | ----
`--all` | 列出所有用户（含临时用户）
`--self` | 仅列出当前用户
`--svcacc-only` | 仅列出临时 STS Key
`--temp-only` | 仅列出有 Access Key 的用户（只返回存在关联密钥的用户）
`--users-only` | 仅列出用户（不含临时 Key）
<!--rehype:className=show-header left-align-->

示例：

```sh
mc admin accesskey ls myminio
mc admin accesskey ls myminio appuser
mc admin accesskey ls --users-only myminio
mc admin accesskey ls --svcacc-only myminio
```

#### enable / disable（启用 / 禁用）

```sh
mc admin accesskey enable TARGET ACCESSKEY
mc admin accesskey disable TARGET ACCESSKEY
```

示例：

```sh
mc admin accesskey disable myminio "$AK"
mc admin accesskey enable myminio "$AK"
```

`$AK` 替换为你的AccessKey

#### rm（删除）

```sh
mc admin accesskey rm TARGET ACCESSKEY
```

示例：

```sh
mc admin accesskey rm myminio "$AK"
```

#### sts-revoke（撤销 STS 临时凭证）

```sh
mc admin accesskey sts-revoke [FLAGS] TARGET [STS-KEY ...]
```

常用参数：

参数 | 说明
---- | ----
`--all` | 撤销全部 STS Key
`--self` | 撤销当前用户的 STS Key
`--token-type <TYPE>` | 仅撤销指定类型的 Token（例如 `web`、`api`）
<!--rehype:className=show-header left-align-->

示例：

```sh
mc admin accesskey sts-revoke --self myminio
mc admin accesskey sts-revoke --all myminio
mc admin accesskey sts-revoke --token-type web myminio
mc admin accesskey sts-revoke myminio "$STS_KEY"
```

另见
---

- [MinIO官方文档](https://min.io/docs/minio/kubernetes/upstream/) _(min.io)_
- [MinIO github 源码](https://github.com/minio/minio) _(github.com)_
