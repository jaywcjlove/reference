CocoaPods 备忘清单
===

[CocoaPods](https://en.wikipedia.org/wiki/Cron) 是 [Swift](./swift.md) 和 Objective-C Cocoa 项目的依赖管理器，此快速参考备忘单显示了它的常用命令使用清单。

入门
---

### 安装
<!--rehype:wrap-class=row-span-2-->

```bash
$ sudo gem install cocoapods
# OR
$ brew install cocoapods 
```

无 Sudo 安装，不想为此过程授予 `RubyGems` 管理员权限

```bash
export GEM_HOME=$HOME/.gem
export PATH=$GEM_HOME/bin:$PATH
```

编辑 `.bash_profile` 配置文件，添加上面内容

```bash
$ gem install cocoapods --user-install
$ gem which cocoapods
/Users/wcj/.gem/ruby/2.0.0/gems/cocoapods-0.29.0/lib/cocoapods.rb
$ /Users/wcj/.gem/ruby/2.0.0/bin/pod install
```
<!--rehype:className=wrap-text-->

### 更新 CocoaPods

```bash
$ gem install cocoapods
```

或者对于预发布版本

```bash
$ gem install cocoapods --pre
```

### 安装
<!--rehype:wrap-class=row-span-2-->

```bash
$ pod install
```

在您的项目中安装新的 `pod`，即使你已经有一个 `Podfile` 并且之前运行过 `pod install`； 因此，即使您只是在已经使用 `CocoaPods` 的项目中添加/删除 `pod`

- 会在 `Podfile.lock` 文件中为每个 pod 写入已安装的版本，此文件跟踪每个 pod 的已安装版本并锁定这些版本
- 它只会解析 `Podfile.lock` 中尚未列出的 pod 的依赖关系
- 对于 `Podfile.lock` 中列出的 pod，会下载 `Podfile.lock` 中列出的显式版本，而不尝试检查是否有更新的版本可用

下载 `Podfile` 中定义的所有依赖项，并在 `./Pods` 中创建一个 `Xcode Pods` 库项目

### 更新过时的依赖

```bash
$ pod outdated
```

显示当前 `Podfile.lock` 中过时的 `pod`，但仅显示来自规范 `repos` 的那些，而不是来自本地/外部来源的那些

### 更新依赖

```bash
$ pod update
$ pod update PODNAME
```

更新由指定 `pod` 名称标识的 `Pod`。 如果没有指定 `Pod` 名称，它会更新所有 `Pod`，而忽略 `Podfile.lock` 的内容。 此命令保留用于更新依赖项，应使用 `pod install` 安装对 `Podfile` 的更改

### 清理 Pods 依赖

```bash
$ pod deintegrate
```

从 `CocoaPods` 中分离您的项目。 从您的 `Xcode` 项目中删除所有 `CocoaPods` 的痕迹。如果未指定 `xcodeproj`，则将在当前目录中搜索 `Xcode` 项目

### pod env

```bash
$ pod env
```

显示 pod 环境

### 将 Pod 添加到 Xcode 项目

- 创建一个 Podfile，并添加您的依赖项

  ```ruby
  # Podfile
  target 'MyApp' do
    pod 'AFNetworking', '~> 3.0'
    pod 'FBSDKCoreKit', '~> 4.9'
  end
  ```

- 在您的项目目录中运行 `$ pod install`
- 打开 `App.xcworkspace` 并构建
<!--rehype:className=style-timeline-->

### 创建一个新的 Cocoapod

命令 | 说明
:-- | --
`pod lib create pod_name` | 为您创建一个新的 pod 项目
`pod trunk push pod_name.podspec` | 将 podspec 推送到 trunk
`pod spec create pod_name` | 为您创建 podspec 模板
<!--rehype:className=style-list-->

### 浏览

- `pod search QUERY` 搜索名称、摘要、描述或作者与 QUERY 匹配的 pod，忽略大小写。 如果指定了 --simple 选项，这将只搜索 pod 的名称
- `pod list` 列出所有可用的 pod
- `pod try NAME|URL` 下载具有给定名称（或 Git URL）的 Pod，如果需要，安装其依赖项并打开其演示项目。 如果提供了 Git URL，则使用 repo 的头部。 如果指定了 Git URL，则可以提供 --podspec_name，如果 podspec 名称由于某种原因与 git 存储库不同

### 规格
<!--rehype:wrap-class=col-span-2-->

- `pod spec create [NAME\|https://github.com/USER/REPO]` 在当前工作目录中创建一个名为 NAME.podspec 的 PodSpec。如果传递了 GitHub url，则预先填充规范。
- `pod spec lint [NAME.podspec|DIRECTORY|http://PATH/NAME.podspec ...]` 验证 NAME.podspec。 如果提供了 DIRECTORY，它会验证找到的 podspec 文件，包括子文件夹。 如果省略参数，则默认为当前工作目录。
- `pod spec cat [QUERY]` 将名称与 QUERY 匹配的 podspec 的内容打印到标准输出。
- `pod spec which [QUERY]` 打印名称与 QUERY 匹配的 .podspec 文件的路径
- `pod spec edit [QUERY]` 打开要编辑的与 QUERY 匹配的 podspec。

### Repos
<!--rehype:wrap-class=row-span-2-->

命令 | 说明
:-- | --
`pod repo add NAME URL [BRANCH]` | 在 `~/.cocoapods/repos/` 的本地 spec-repos 目录中克隆 URL。远程可以稍后由 NAME 引用
`pod repo update [NAME]` | 更新 spec-repo NAME 的本地克隆。如果 NAME 被省略，这将更新 ~/.cocoapods/repos 中的所有 spec-repos
`pod repo lint [NAME\|DIRECTORY]` | 对 spec-repo NAME 进行 lints。如果提供了目录，则假定它是存储库的根目录。最后，如果没有提供 NAME，这将 lint CocoaPods 已知的所有规范库
`pod repo list` | 从 `~/.cocoapods/repos/` 的本地 spec-repos 目录中列出 repos
`pod repo remove NAME` | 从 `~/.cocoapods/repos/` 的本地 spec-repos 目录中删除名为 NAME 的远程
`pod repo push REPO [NAME.podspec]` | 验证当前工作目录中的 `NAME.podspec` 或 \*.podspec，在 REPO 的本地副本 (`~/.cocoapods/repos/[REPO]`) 中为 pod 创建目录和版本文件夹，将 podspec 文件复制到版本中目录，最后它将 REPO 推送到其远程
`pod setup` | 在 `~/.cocoapods/repos` 创建一个目录，该目录将保存您的规范存储库。它将在这里创建公共主规范仓库的克隆：<https://github.com/CocoaPods/Specs> 如果克隆已经存在，它将确保它是最新的
<!--rehype:className=style-list-arrow-->

### Trunk
<!--rehype:wrap-class=col-span-2-->

- `pod trunk add-owner POD OWNER-EMAIL` 将具有指定 OWNER-EMAIL 的注册用户添加为给定 POD 的 `owner`
- `pod trunk info NAME` 返回有关 Pod 的信息
- `pod trunk me` 包括有关您的注册的信息，然后是您的所有会话
- `pod trunk push [PATH]` 在 PATH 发布 podspec 以使其可供 `master` 规范存储库的所有用户使用
- `pod trunk register EMAIL [NAME]` 注册一个新帐户，或创建一个新会话
- `pod trunk remove-owner POD OWNER-EMAIL` 将具有指定 OWNER-EMAIL 的用户从给定 POD 的 owner 中移除
- `pod trunk deprecate NAME` 弃用 pod
- `pod trunk delete NAME VERSION` *警告*：删除其他人所依赖的 Pod 版本通常被认为是不良行为！请考虑改用 <red>`deprecate`</red> 命令

什么是 Podfile？
---

### 简单配置

```ruby
target 'MyApp' do
  use_frameworks!
  pod 'Alamofire', '~> 3.0'
end
```

Podfile 可以非常简单，这会将 Alamofire 添加到单个目标

### 添加测试
<!--rehype:wrap-class=row-span-2-->

```ruby
source 'https://github.com/CocoaPods/Specs.git'
source 'https://github.com/Artsy/Specs.git'

platform :ios, '9.0'
inhibit_all_warnings!

target 'MyApp' do
  pod 'GoogleAnalytics', '~> 3.1'
  
  # 拥有自己的 OCMock 副本
  # 并且可以通过应用访问 GoogleAnalytics
  # 承载测试目标

  target 'MyAppTests' do
    inherit! :search_paths
    pod 'OCMock', '~> 2.0.1'
  end
end

post_install do |installer|
  installer.pods_project.targets.each do |target|
    puts target.name
  end
end
```
<!--rehype:className=wrap-text-->

链接应用程序及其测试包的更复杂 Podfile 的示例

### 指定 pod 版本

在开始一个项目时，希望使用最新版本的 Pod。这种情况，只需忽略版本要求

```ruby
pod 'SSZipArchive'
```

稍后在项目中，您可能希望冻结到特定版本的 Pod，在这种情况下，您可以指定该版本号

```ruby
pod 'Objection', '0.9'
```

### 隐式抽象目标

Podfile 的根目录存在隐式抽象目标，因此您可以将上面的示例编写为

```ruby
pod 'ShowsKit'
pod 'Fabric'

# 拥有自己的 ShowsKit + ShowWebAuth 副本
target 'ShowsiOS' do
  pod 'ShowWebAuth'
end

# 拥有自己的 ShowsKit + ShowTVAuth 副本
target 'ShowsTV' do
  pod 'ShowTVAuth'
end
```

### 多个目标共享同一个 pod

```ruby
# 在任何 Xcode 项目中都没有名为“Shows”的目标
abstract_target 'Shows' do
  pod 'ShowsKit'
  pod 'Fabric'
  # 拥有自己的 ShowsKit + ShowWebAuth 副本
  target 'ShowsiOS' do
    pod 'ShowWebAuth'
  end
  # 拥有自己的 ShowsKit + ShowTVAuth 副本
  target 'ShowsTV' do
    pod 'ShowTVAuth'
  end
end
```

另见
----

- [CocoaPods 官方网站](https://cocoapods.org/) *(cocoapods.org)*
- [Cocoapods Cheatsheet](https://github.com/SebastianBoldt/Cocoapods-Cheatsheet) *(github.com)*
