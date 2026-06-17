.NET CLI 备忘清单
===

这份快速参考备忘单整理了 .NET 命令行接口的项目创建、还原、构建、运行、测试、发布、包管理、工具、工作负荷和诊断命令

入门
---

### 介绍

`.NET CLI` 是随 .NET SDK 提供的跨平台工具链，用于开发、构建、运行、测试和发布 .NET 应用。

```shell
$ dotnet --info
$ dotnet --version
$ dotnet --list-sdks
$ dotnet --list-runtimes
```

`dotnet` 既可以运行 .NET 应用，也可以执行项目相关命令。所有命令都支持 `--help` 查看简要帮助。

### 命令结构

```shell
$ dotnet <command> [arguments] [options]
$ dotnet build --configuration Release
$ dotnet run --project src/MyApp
$ dotnet MyApp.dll
```

常见短选项包括 `-c|--configuration`、`-f|--framework`、`-o|--output`、`-r|--runtime`。

### 常用流程

```shell
$ dotnet new console -n HelloCli
$ cd HelloCli
$ dotnet restore
$ dotnet build
$ dotnet run
$ dotnet test
$ dotnet publish -c Release -o ./publish
```

多数命令会按需触发还原。CI 或离线场景中可显式使用 `dotnet restore` 并在后续命令中配合 `--no-restore`。

项目命令
---

### 基础命令
<!--rehype:wrap-class=col-span-2 row-span-2-->

命令 | 说明 | 示例
:- | :- | :-
`new` | 基于模板创建项目或文件 | `dotnet new webapi -n Api`
`restore` | 还原项目依赖 | `dotnet restore`
`build` | 构建项目、解决方案或文件应用 | `dotnet build -c Release`
`run` | 从源码构建并运行项目 | `dotnet run --project src/App`
`test` | 运行测试项目 | `dotnet test --logger trx`
`publish` | 生成可部署输出 | `dotnet publish -c Release -o ./publish`
`pack` | 创建 NuGet 包 | `dotnet pack -c Release`
`clean` | 清理构建输出 | `dotnet clean`
`sln` | 管理解决方案文件 | `dotnet sln add src/App/App.csproj`
`format` | 格式化代码 | `dotnet format`
`watch` | 监听文件变化并执行命令 | `dotnet watch run`
`vstest` | 运行已编译测试程序集 | `dotnet vstest tests.dll`
<!--rehype:className=show-header left-align-->

`dotnet run` 适合开发迭代，不推荐作为生产运行方式。部署时应使用 `dotnet publish` 输出。

### 创建项目

```shell
$ dotnet new list
$ dotnet new console -n HelloCli
$ dotnet new webapi -n Api
$ dotnet new classlib -n Core
$ dotnet new gitignore
```

`dotnet new` 使用模板引擎创建项目或其他文件。可通过 `dotnet new search <关键字>` 查找模板。

### 构建

```shell
$ dotnet build
$ dotnet build MyApp.sln -c Release
$ dotnet build src/App/App.csproj -f net8.0
$ dotnet build --no-restore
```

`dotnet build` 使用 MSBuild 构建项目并支持 MSBuild 属性，例如 `-p:Version=1.2.3`。

### 发布
<!--rehype:wrap-class=row-span-2 col-span-2-->

```shell
$ dotnet publish -c Release -o ./publish
$ dotnet publish -c Release -r win-x64 --self-contained true
$ dotnet publish -c Release -r linux-x64 --self-contained false
```

`dotnet publish` 会编译应用、读取依赖并生成可部署输出，是官方支持的部署准备方式。

```shell
$ dotnet publish -c Release -p:PublishSingleFile=true
$ dotnet publish -c Release -p:PublishTrimmed=true
$ dotnet publish -c Release -p:PublishReadyToRun=true
```

单文件、裁剪和 ReadyToRun 等选项会影响输出大小、启动速度和兼容性，发布前应在目标环境测试。

### 运行

```shell
$ dotnet run
$ dotnet run --project src/App
$ dotnet run --configuration Release -- arg1 arg2
$ dotnet run --no-build
```
<!--rehype:className=wrap-text-->

应用参数放在 `--` 后面，避免与 `dotnet run` 自身选项混淆。

### 测试

```shell
$ dotnet test
$ dotnet test -c Release
$ dotnet test --filter FullyQualifiedName~Unit
$ dotnet test --collect "XPlat Code Coverage"
```
<!--rehype:className=wrap-text-->

`dotnet test` 会运行测试项目，并把参数传递给测试平台。

包与引用
---

### NuGet 包引用
<!--rehype:wrap-class=col-span-2 row-span-2-->

命令 | 说明 | 示例
:- | :- | :-
`dotnet add package` | .NET 9 及更早版本添加包 | `dotnet add package Newtonsoft.Json`
`dotnet package add` | .NET 10 起添加或更新包 | `dotnet package add Newtonsoft.Json`
`dotnet list package` | .NET 9 及更早版本列出包 | `dotnet list package`
`dotnet package list` | .NET 10 起列出包 | `dotnet package list`
`dotnet remove package` | 移除包引用 | `dotnet remove package Newtonsoft.Json`
`dotnet package search` | 搜索 NuGet 包 | `dotnet package search Newtonsoft.Json`
<!--rehype:className=show-header left-align-->

.NET 10 引入了更一致的“名词优先”命令顺序。维护旧项目时仍常见 `dotnet add package` 和 `dotnet list package`。

### 包版本与源

```shell
$ dotnet add package Serilog --version 4.0.0
$ dotnet package add Serilog --version 4.0.0
$ dotnet restore --source https://api.nuget.org/v3/index.json
```
<!--rehype:className=wrap-text-->

添加包时 CLI 会检查包与项目目标框架的兼容性，并把 `PackageReference` 写入项目文件。

### 项目引用

```shell
$ dotnet add app/app.csproj reference lib/lib.csproj
$ dotnet reference add lib/lib.csproj --project app/app.csproj
$ dotnet list reference
$ dotnet reference list --project app/app.csproj
$ dotnet remove reference lib/lib.csproj
```
<!--rehype:className=wrap-text-->

项目引用会在 `.csproj` 中生成 `ProjectReference`。CLI 不提供添加任意程序集引用的命令，需手动编辑项目文件。

### NuGet 源
<!--rehype:wrap-class=col-span-2-->

命令 | 说明 | 示例
:- | :- | :-
`nuget list source` | 列出源 | `dotnet nuget list source`
`nuget add source` | 添加源 | `dotnet nuget add source <url> -n Private`
`nuget update source` | 更新源 | `dotnet nuget update source Private -s <url>`
`nuget enable source` | 启用源 | `dotnet nuget enable source Private`
`nuget disable source` | 禁用源 | `dotnet nuget disable source Private`
`nuget remove source` | 移除源 | `dotnet nuget remove source Private`
`nuget locals` | 查看或清理缓存 | `dotnet nuget locals all --clear`
<!--rehype:className=show-header left-align-->

### 包发布与签名

```shell
$ dotnet pack -c Release
$ dotnet nuget push bin/Release/MyLib.1.0.0.nupkg -k API_KEY -s https://api.nuget.org/v3/index.json
$ dotnet nuget delete MyLib 1.0.0 -s https://api.nuget.org/v3/index.json -k API_KEY
$ dotnet nuget verify MyLib.1.0.0.nupkg
$ dotnet nuget sign MyLib.1.0.0.nupkg --certificate-path cert.pfx
```
<!--rehype:className=wrap-text-->

发布到 nuget.org 时建议使用 scoped API key，并避免把密钥写入仓库。

解决方案与工具
---

### 解决方案

```shell
$ dotnet new sln -n MySolution
$ dotnet sln add src/App/App.csproj
$ dotnet sln add tests/App.Tests/App.Tests.csproj
$ dotnet sln list
$ dotnet sln remove tests/App.Tests/App.Tests.csproj
```

解决方案文件用于组织多个项目，方便统一构建和测试。

### .NET 工具
<!--rehype:wrap-class=col-span-2 row-span-2-->

命令 | 说明 | 示例
:- | :- | :-
`tool install -g` | 安装全局工具 | `dotnet tool install -g dotnet-ef`
`tool install --local` | 安装本地工具 | `dotnet tool install --local dotnet-ef`
`tool list` | 列出工具 | `dotnet tool list -g`
`tool update` | 更新工具 | `dotnet tool update -g dotnet-ef`
`tool restore` | 还原本地工具 | `dotnet tool restore`
`tool run` | 运行本地工具 | `dotnet tool run dotnet-ef`
`tool uninstall` | 卸载工具 | `dotnet tool uninstall -g dotnet-ef`
`tool search` | 搜索工具 | `dotnet tool search format`
<!--rehype:className=show-header left-align-->

本地工具依赖 `.config/dotnet-tools.json` manifest，适合团队项目固定工具版本。

### 工作负荷

```shell
$ dotnet workload list
$ dotnet workload search maui
$ dotnet workload install maui
$ dotnet workload update
$ dotnet workload restore
$ dotnet workload repair
$ dotnet workload uninstall maui
```

工作负荷用于安装 MAUI、Android、iOS、WebAssembly 等 SDK 扩展。

诊断与高级
---

### SDK 与运行时

```shell
$ dotnet --info
$ dotnet --list-sdks
$ dotnet --list-runtimes
$ dotnet sdk check
```

`dotnet sdk check` 会显示已安装 SDK/运行时以及可用更新。

### MSBuild
<!--rehype:wrap-class=col-span-2-->

```shell
$ dotnet msbuild
$ dotnet msbuild /t:Clean,Build /p:Configuration=Release
$ dotnet build -p:TreatWarningsAsErrors=true
```

`dotnet build` 内部使用 MSBuild；需要更细粒度控制时可直接使用 `dotnet msbuild`。

### 构建服务器

```shell
$ dotnet build-server list
$ dotnet build-server shutdown
```

构建服务器缓存可能影响诊断结果。遇到奇怪的构建缓存问题时，可以先关闭构建服务器后重试。

### 安装脚本
<!--rehype:wrap-class=col-span-2-->

```shell
$ curl -sSL https://dot.net/v1/dotnet-install.sh | bash
$ powershell -ExecutionPolicy Bypass -File dotnet-install.ps1 -Channel 8.0
```

安装脚本适合 CI 或用户级安装。生产机器更推荐使用系统包管理器或官方安装程序。

### 开发证书

```shell
$ dotnet dev-certs https --check
$ dotnet dev-certs https --trust
$ dotnet dev-certs https --clean
```

HTTPS 开发证书常用于 ASP.NET Core 本地开发。

常见场景
---

### CI 构建

```shell
$ dotnet restore
$ dotnet build --no-restore -c Release
$ dotnet test --no-build -c Release
$ dotnet publish --no-build -c Release -o ./publish
```

把还原、构建、测试和发布拆开，能减少重复工作并让失败位置更清晰。

### 多目标框架

```shell
$ dotnet build -f net8.0
$ dotnet test -f net8.0
```

当项目配置多个目标框架时，可用 `-f|--framework` 指定要构建或测试的目标框架。

### 指定运行时

```shell
$ dotnet publish -r win-x64
$ dotnet publish -r linux-arm64 --self-contained true
```

`-r|--runtime` 使用 Runtime Identifier。自包含发布会把 .NET 运行时一起带上。

另见
---

- [.NET CLI 官方文档](https://learn.microsoft.com/dotnet/core/tools/)
- [dotnet 命令](https://learn.microsoft.com/dotnet/core/tools/dotnet)
- [dotnet build](https://learn.microsoft.com/dotnet/core/tools/dotnet-build)
- [dotnet run](https://learn.microsoft.com/dotnet/core/tools/dotnet-run)
- [dotnet publish](https://learn.microsoft.com/dotnet/core/tools/dotnet-publish)
- [dotnet package add](https://learn.microsoft.com/dotnet/core/tools/dotnet-package-add)
- [dotnet package list](https://learn.microsoft.com/dotnet/core/tools/dotnet-package-list)
