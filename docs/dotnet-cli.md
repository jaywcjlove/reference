.NET CLI 备忘清单
===

本备忘单总结了 [.NET](https://learn.microsoft.com/zh-cn/dotnet/core/tools/) 命令行接口 (CLI) 工具，以供快速参考

.NET CLI 备忘清单
---
<!--rehype:style=display: none;-->

### 介绍

`.NET CLI` 命令由 **驱动程序（`dotnet`）**、**命令**、**参数** 和 **选项** 组成。典型流程如下：

```bash
# 创建控制台应用
dotnet new console 
# 构建并指定输出目录
dotnet build --output ./build_output 
# 运行构建结果
dotnet ./build_output/my_app.dll 
```

### 基本命令
<!--rehype:wrap-class=col-span-2 row-span-2-->

| 命令 | 说明 | 示例 |
|--------------|--------------|--------------|
| `new`       | 创建新项目或文件模板                | `dotnet new console`                     |
| `restore`   | 还原项目依赖项                      | `dotnet restore`                         |
| `build`     | 构建项目                            | `dotnet build`                           |
| `publish`   | 发布应用以部署                      | `dotnet publish -c Release -o ./publish`|
| `run`       | 运行项目                            | `dotnet run`                             |
| `test`      | 运行测试（使用 xUnit/NUnit 等）     | `dotnet test`                            |
| `vstest`    | 运行已编译的测试程序集              | `dotnet vstest ./bin/Debug/test.dll`     |
| `pack`      | 打包为 NuGet 包                     | `dotnet pack`                            |
| `migrate`   | 迁移旧版项目（已弃用）              | `dotnet migrate`                         |
| `clean`     | 清理构建输出                        | `dotnet clean`                           |
| `sln`       | 管理 `.sln` 解决方案文件            | `dotnet sln add ./MyApp/MyApp.csproj`    |
| `help`      | 显示帮助信息                        | `dotnet help build`                      |
| `store`     | 预编译和缓存程序集（高级用法）      | `dotnet store`                           |
| `watch`     | 监视文件更改并自动运行命令          | `dotnet watch run`                       |
| `format`    | 格式化代码（自 .NET 6 起支持）      | `dotnet format`                          |
<!--rehype:className=left-align -->

### 项目修改命令
<!--rehype:wrap-class=row-span-2-->

| 命令 | 说明 | 示例 |
|--------------|--------------|--------------|
| `package add`         | 添加 NuGet 包依赖                 | `dotnet add package Newtonsoft.Json`                         |
| `package list`        | 列出项目中的所有包依赖           | `dotnet list package`                                        |
| `package remove`      | 移除 NuGet 包依赖                 | `dotnet remove package Newtonsoft.Json`                      |
| `package search`      | 搜索 NuGet 包                    | `dotnet search package Newtonsoft.Json`                      |
| `reference add`       | 添加项目引用（*.csproj）          | `dotnet add reference ../CommonLib/CommonLib.csproj`         |
| `reference list`      | 列出当前项目引用的其他项目       | `dotnet list reference`                                      |
| `reference remove`    | 移除项目引用                     | `dotnet remove reference ../CommonLib/CommonLib.csproj`      |
<!--rehype:className=left-align style-list-arrow-->

### 工作负荷管理命令
<!--rehype:wrap-class=col-span-2-->

| 命令 | 说明 | 示例 |
|--------------|--------------|--------------|
| `workload`               | 顶级命令，显示所有 workload 子命令        | `dotnet workload --help`                  |
| `workload install`       | 安装指定的工作负荷（如 MAUI、Web 等）     | `dotnet workload install maui`            |
| `workload uninstall`     | 卸载指定的工作负荷                         | `dotnet workload uninstall maui`          |
| `workload update`        | 更新所有已安装的工作负荷                   | `dotnet workload update`                  |
| `workload list`          | 显示当前已安装的工作负荷                   | `dotnet workload list`                    |
| `workload restore`       | 还原项目所需的工作负荷                     | `dotnet workload restore`                 |
| `workload search`        | 搜索可用的工作负荷                         | `dotnet workload search`                  |
| `workload repair`        | 修复已安装的工作负荷                       | `dotnet workload repair`                  |
| `workload config`        | 配置自定义源、缓存路径等（.NET 8.0.400+） | `dotnet workload config list`             |
<!--rehype:className=left-align-->

### NuGet 命令
<!--rehype:wrap-class=col-span-3-->

| 命令 | 说明 | 示例 |
|--------------|--------------|--------------|
| `nuget delete`             | 从源中删除一个 NuGet 包 | `dotnet nuget delete MyLib 1.0.0 -s https://api.nuget.org/v3/index.json`|
| `nuget locals`             | 清理 NuGet 缓存 | `dotnet nuget locals all --clear` |
| `nuget push`               | 将 NuGet 包推送到服务器（如 nuget.org） | `dotnet nuget push MyLib.1.0.0.nupkg -k API_KEY -s https://api.nuget.org/v3/index.json` |
| `nuget add source`         | 添加一个新的 NuGet 源 | `dotnet nuget add source https://myserver/index.json -n MySource` |
| `nuget disable source`     | 禁用一个现有的 NuGet 源 | `dotnet nuget disable source MySource` |
| `nuget enable source`      | 启用已禁用的 NuGet 源 | `dotnet nuget enable source MySource` |
| `nuget list source`        | 列出所有已配置的 NuGet 源 | `dotnet nuget list source` |
| `nuget remove source`      | 移除已配置的 NuGet 源 | `dotnet nuget remove source MySource` |
| `nuget update source`      | 更新现有 NuGet 源信息 | `dotnet nuget update source MySource -s https://new-url` |
| `nuget verify`             | 验证 NuGet 包签名（.NET 5+） | `dotnet nuget verify MyLib.1.0.0.nupkg` |
| `nuget trust`              | 管理受信任的签名证书（.NET 5+） | `dotnet nuget trust list` |
| `nuget sign`               | 对 NuGet 包进行签名（.NET 6+） | `dotnet nuget sign MyLib.1.0.0.nupkg --certificate-path cert.pfx`      |
| `package search`           | 搜索 NuGet 包（.NET 8.0.2xx+） | `dotnet package search Newtonsoft.Json` |
| `nuget why`                | 显示为什么某个包被安装（.NET 8.0.4xx+）| `dotnet nuget why Newtonsoft.Json` |
<!--rehype:className=left-align-->

### 高级命令

| 命令 | 说明 | 示例 |
|--------------|--------------|--------------|
| `sdk check`             | 显示可用的 SDK/运行时版本，并检测更新 | `dotnet sdk check` |
| `msbuild`               | 使用 MSBuild 构建项目（提供更多构建自定义性） | `dotnet msbuild /t:Clean;Build /p:Configuration=Release` |
| `build-server`          | 管理后端构建服务器（如清理缓存、关闭等） | `dotnet build-server shutdown` |
| `dev-certs`             | 管理开发 HTTPS 证书 | `dotnet dev-certs https --trust` |
| `dotnet install script` | 获取可安装指定版本 .NET 的脚本（Linux/macOS） | `curl -sSL https://dot.net/v1/dotnet-install.sh \| bash` |
<!--rehype:className=left-align style-list-arrow-->

### 工具管理命令
<!--rehype:wrap-class=col-span-2-->

| 命令 | 说明 | 示例 |
|--------------|--------------|--------------|
| `tool install`     | 安装 .NET 工具（本地或全局）              | `dotnet tool install -g dotnet-ef` |
| `tool list`        | 列出已安装的工具                          | `dotnet tool list -g` |
| `tool update`      | 更新指定工具                              | `dotnet tool update -g dotnet-ef` |
| `tool restore`     | 恢复项目中定义的工具（基于 manifest）     | `dotnet tool restore` |
| `tool run`         | 运行本地安装的工具                        | `dotnet tool run my-tool` |
| `tool uninstall`   | 卸载已安装的工具                          | `dotnet tool uninstall -g dotnet-ef` |
| `tool search`      | 搜索 NuGet 上可用的工具                   | `dotnet tool search dotnet-ef` |
<!--rehype:className=left-align-->


另请参阅
---

- [dotnet/sdk GitHub 存储库](https://github.com/dotnet/sdk/) _(github.com/dotnet)_
- [.NET 安装指南](https://learn.microsoft.com/zh-cn/dotnet/core/install/windows) _(learn.microsoft.com)_
