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
mc mv myminio/mybucket/folder myminio/mybucket/newfolder
```

拷贝文件夹

```sh
mc cp myminio/mybucket/folder myminio/mybucket/newfolder
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

另见
---

- [MinIO官方文档](https://min.io/docs/minio/kubernetes/upstream/) _(min.io)_
- [MinIO github 源码](https://github.com/minio/minio) _(github.com)_
