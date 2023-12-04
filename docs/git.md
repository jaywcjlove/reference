Git 备忘清单
===

本备忘单总结了常用的 [Git](https://git-scm.com/) 命令行指令，以供快速参考。

入门
----

### 创建存储库

创建一个新的本地存储库

```shell
$ git init [项目名称]
```

克隆存储库(代码仓库)

```shell
$ git clone <git_url>
```

将存储库克隆到指定目录

```shell
$ git clone <git_url> 指定目录
```

将存储库克隆到指定目录，并指定分支

```shell
$ git clone <git_url> -b <分支名称> 指定目录
```

### 做出改变
<!--rehype:wrap-class=row-span-3-->

在工作目录中**显示**修改后的文件，为您的下一次提交暂存

```shell
$ git status
```

暂存文件，准备提交

```shell
$ git add [file]
```

暂存**所有**更改的文件，准备提交

```shell
$ git add .
```

将所有暂存文件提交到版本化历史记录

```shell
$ git commit -m "commit message"
```

将所有跟踪的文件提交到版本化历史记录

```shell
$ git commit -am "commit message"
```

取消暂存文件，保留文件更改

```shell
$ git reset [file]
```

将所有内容恢复到最后一次提交

```shell
$ git reset --hard
```

已更改但未暂存内容的差异

```shell
$ git diff
```

已 commited 但尚未提交的内容的差异

```shell
$ git diff --staged
```

在指定分支之前应用当前分支的任何提交

```shell
$ git rebase [branch]
```

### 配置
<!--rehype:wrap-class=row-span-2-->

设置将附加到您的提交和标签的名称

```shell
$ git config --global user.name "name"
```

设置将附加到您的提交和标签 tags 的**电子邮件地址**

```shell
$ git config --global user.email "email"
```

启用 Git 输出的一些着色

```shell
$ git config --global color.ui auto
```

在文本编辑器中编辑全局配置文件

```shell
$ git config --global --edit
```

显示本地 `repo` 配置设置

```shell
$ git config --list
```

删除全局设置

```bash
$ git config --global --unset <entry-name>
```

### 使用分支
<!--rehype:wrap-class=row-span-3-->

列出所有本地分支

```shell
$ git branch
```

列出所有分支，本地和远程

```shell
$ git branch -av
```

切换到 `my_branch`，并更新工作目录

```shell
$ git checkout my_branch
```

创建并切换到新分支`new_branch`

```shell
$ git checkout -b new_branch
```

删除名为 `my_branch` 的分支

```shell
$ git branch -d my_branch
```

将分支 `A` 合并到分支 `B`

```shell
$ git checkout branchB
$ git merge branchA
```

标记当前提交

```shell
$ git tag my_tag
```

从远程分支中创建并切换到本地分支

```shell
$ git checkout -b <branch-name> origin/<branch-name>
```
<!--rehype:className=wrap-text-->

### 临时提交

```shell
# 保存已修改和分阶段的更改
$ git stash
# 列出隐藏文件更改的堆栈顺序
$ git stash list
# 从存储堆栈顶部编写工作
$ git stash pop
# 丢弃存储堆栈顶部的更改
$ git stash drop
# 回到某个 stash 的状态
$ git stash apply <stash@{n}>
# 删除所有的 stash
$ git stash clear
```

### 观察你的存储库
<!--rehype:wrap-class=row-span-2-->

显示当前活动分支的提交历史

```shell
$ git log
```

显示 branchA 上不在 branchB 上的提交

```shell
$ git log branchB..branchA
```

显示更改文件的提交，即使跨重命名

```shell
$ git log --follow [file]
```

显示 branchA 中的内容与 branchB 中的内容的差异

```shell
$ git diff branchB...branchA
```

以人类可读的格式显示 Git 中的任何对象

```shell
$ git show [SHA]
```

### 忽略文件 .gitignore
<!--rehype:wrap-class=row-span-4-->

文件 `.gitignore` 指定了 `Git` 应该忽略的 **未跟踪的** 文件

:- | :-
:- | :-
行首 `#` | 全行注释，不支持行尾类注释 _(转义 `\#`)_
行首 **`!`** | 否定模式 _(转义 `\!`)_
`**` | 匹配任意路径
`*` | 匹配任意多个字符
`?` | 匹配任意一个字符
`doc/**` | 匹配 `doc` 文件夹下的全部内容
`doc/**/a` | 匹配任意深度路径下的 `a` 文件或文件夹
`/` | 表示路径分隔符，不区分操作系统
`/` 结尾 | 仅会匹配文件夹，否则会匹配文件和文件夹
空行 | 不匹配任何文件
行尾空格 | 默认被忽略，可使用`\`进行转义
行首空格 | 被正常处理，不会被忽略

当前 `.gitignore` 文件定义规则的优先级高于上级路径 `.gitignore` 定义规则的优先级；后定义的规则优先级高于前面定义规则的优先级

```gitignore showLineNumbers
# 忽略当前目录logs文件夹下的全部内容
/logs/
/logs/*
/logs/**
# 上述几条规则等效

# 忽略 Mac 系统文件，包括任意子路径下的同名文件（夹）
.DS_store

# 忽略 node_modules 文件夹，包括任意子路径下的同名文件夹
node_modules/

# 忽略任意子路径下build、target文件夹，
# 但不忽略src/main、src/test下的build、target文件夹
build/
!**/src/main/**/build/
!**/src/test/**/build/
target/
!**/src/main/**/target/
!**/src/test/**/target/

# 使用 ! 重新包含指定文件（夹）
!logs/.gitkeep
```
<!--rehype:className=wrap-text-->

### 重构文件名

```bash
# 从工作目录中删除文件并暂存删除
git rm <filename>

# 从版本控制中删除文件但在本地保留文件
git rm --cached <filename>

# 更改文件名并准备提交
git mv <filename-orig> <filename-renamed>
```

### 同步
<!--rehype:wrap-class=row-span-2-->

从该 Git 远程获取所有分支

```shell
$ git fetch [alias]
```

将远程分支合并到当前分支以使其保持最新状态

```shell
$ git merge [alias]/[branch]
# 没有快进
$ git merge --no-ff [alias]/[branch]
# 仅快进
$ git merge --ff-only [alias]/[branch]
```

将本地分支提交传输到远程存储库分支

```shell
$ git push [alias] [branch]
```

从跟踪远程分支获取并合并任何提交

```shell
$ git pull
```

将另一个分支的一个特定提交合并到当前分支

```shell
$ git cherry-pick [commit_id]
```

### 远程
<!--rehype:wrap-class=row-span-2-->

添加一个 git URL 作为别名

```shell
$ git remote add [alias] [url]
```

显示您设置的远程存储库的名称

```shell
$ git remote
```

显示远程存储库的名称和 URL

```shell
$ git remote -v
```

删除远程存储库

```shell
$ git remote rm [remote repo name]
```

更改 git repo 的 URL

```shell
$ git remote set-url origin [git_url]
```

### 跟踪路径更改

从项目中删除文件并暂存删除以进行提交

```shell
$ git rm [file]
```

更改现有文件路径并暂存移动

```shell
$ git mv [existing-path] [new-path]
```

显示所有提交日志，并指示任何移动的路径

```shell
$ git log --stat -M
```

### .gitattributes
<!--rehype:wrap-class=col-span-2 row-span-2-->

```ini
# 设置默认行为，以防人们没有设置 core.autocrlf
* text=auto
# 明确声明您希望始终规范化并在结帐时
# 转换为本机行结尾的文本文件
*.c text
*.h text
# 声明在结帐时始终以 CRLF 行结尾的文件
*.sln text eol=crlf
# 表示所有真正二进制且不应修改的文件
*.png binary
*.jpg binary
```

[计入存储库语言](https://github.com/github/linguist/blob/master/docs/overrides.md#using-gitattributes)

```ini
# 标记或取消标记要根据存储库的语言统计数据而
# 忽略或默认隐藏差异的路径
search/index.json linguist-generated=true
# 以下属性统计 SQL 文件
*.sql linguist-detectable=true
# 从统计信息中排除
docs/formatter.rb linguist-documentation=false
# 将它们从统计信息中排除
special-vendored-path/* linguist-vendored
# 将所有 .rb 文件检测为 Java 文件
*.rb linguist-language=Java
```

### git 配置 ssh 代理

```bash
$ cat ~/.ssh/config
Host gitlab.com
# 直接使用 sh**socks 提供的 socks5 代理端口
ProxyCommand nc -X 5 -x 127.0.0.1:1080 %h %p

Host github.com
ProxyCommand nc -X 5 -x 127.0.0.1:1080 %h %p
```
<!--rehype:className=wrap-text-->

Commit
---

### 改写历史
<!--rehype:wrap-class=row-span-2-->

重写最后的提交消息

```shell
$ git commit --amend -m "new message"
```

修改最新的提交而不更改提交消息

```shell
$ git commit --amend --no-edit
```

### 在 commit log 中显示 GPG 签名

```bash
$ git log --show-signature
```

### 修改远程 Commit 记录
<!--rehype:wrap-class=row-span-5-->

```shell
$ git rebase -i HEAD~3
# 表示要修改当前版本的倒数第三次状态
# 将要更改的记录行首单词 pick 改为 edit
pick 96dc3f9 提交 commit 描述内容 1
pick f1cce8a 提交 commit 描述内容 2
pick 6293516 提交 commit 描述内容 3
# Rebase eeb03a4..6293516 onto eeb03a4
#                     (3 commands)
#
# Commands:
# p, pick = 使用提交
# r, reword = 使用提交，但编辑提交消息
# e, edit = 使用提交，但停止修改
# s, squash = 使用提交，但融合到先前的提交中
# f, fixup = 像 squash，但丢弃此提交的日志消息
# x, exec = 使用 shell 运行命令(该行的其余部分)
# d, drop = 删除提交
```

保存并退出，会弹出下面提示

```shell
# 您现在可以修改提交，使用
#
#   git commit --amend
#
# 对更改感到满意后，运行
#
#   git rebase --continue
#
# 1. 通过这条命令进入编辑更改 commit，保存退出
$ git commit --amend
# 2. 保存退出确认修改，继续执行下面命令,
$ git rebase --continue
# 如果修改多条记录反复执行上面两条命令直到完成所有修改

# 最后，确保没有人提交进行推送，最好不要加 -f 强制推送
$ git push -f origin master
```

### Commit

```shell
$ git commit -v --amend
```

重写最后的提交信息

### 撤销远程记录

```shell
# 撤销一条记录
$ git reset --hard HEAD~1
# 强制同步到远程仓库
$ git push -f origin HEAD:master
```

### 放弃本地修改内容

```shell
# 如果有的修改以及加入暂存区的话
$ git reset --hard
# 还原所有修改，不会删除新增的文件
$ git checkout .
# 下面命令会删除新增的文件
$ git clean -xdf
```

### 把 A 分支的某一个 commit，放到 B 分支上

```shell
# 切换到 B 分支
$ git checkout <B>
# 将 A 分支 <hash-id> 的内容 pick 到 B 分支
$ git cherry-pick <hash-id>
```

### 重设第一个 commit

```bash
$ git update-ref -d HEAD
```

把所有的改动都重新放回工作区，并**清空所有的 commit**，这样就可以重新提交第一个 `commit` 了

### 回到远程仓库的状态

```bash
$ git fetch --all && git reset --hard origin/master
```
<!--rehype:className=wrap-text-->

抛弃本地所有的修改，回到远程仓库的状态

### commit 历史中显示 Branch1 有的但是 Branch2 没有 commit

```bash
$ git log Branch1 ^Branch2
```

### git 迁移

- 从原地址克隆一份裸版本库

```bash
$ git clone --bare https://github.com/username/project.git
```

- 然后新建一个地址，比如一下

```bash
$ https://gitee.com/username/newproject.git
```

- 进入project.git这个全裸版本库，以镜像推送的方式上传代码到newproject上。

```
$ cd project.git

$ git push --mirror https://gitee.com/username/newproject.git
```

- 使用新地址，直接 Clone 到本地就可以了。

```
$ git clone https://gitee.com/username/newproject.git
```

Git Submodule 子模块
------

### 添加子模块

```bash
$ git submodule add <仓库地址> <子模块路径>
```

### 克隆包含子模块的仓库

```bash
$ git clone <repository_url> --recursive
```

### 更新子模块

```bash
$ git submodule update --remote
```

### 切换到子模块的特定提交

```bash
$ cd <path_to_submodule>
$ git checkout <commit_hash>
```

### 查看当前仓库中的子模块

```bash
$ git submodule status
```

### 初始化子模块

```bash
$ git submodule init
```

### 切换到父仓库的特定提交，并更新子模块

```bash
$ cd ..
$ git checkout <commit_hash>
$ git submodule update --remote
```

### 获取并切换子模块的最新标签
<!--rehype:wrap-class=col-span-2-->

```bash
$ cd <path_to_submodule>
$ git fetch --tags
$ git checkout $(git describe --tags $(git rev-list --tags --max-count=1))
```

### 子模块递归
<!--rehype:wrap-class=col-span-2 row-span-3-->

```bash
# 添加所有已存在的子模块
$ git submodule foreach --recursive git submodule add <repository_url>
# 更新所有子模块到最新提交
$ git submodule foreach --recursive git pull origin master
# 检出特定的子模块路径
$ git submodule foreach --recursive git checkout <branch_name>
# 获取仓库中的所有子模块变化
$ git submodule foreach --recursive git fetch
# 获取并合并子模块的远程分支
$ git submodule foreach --recursive git pull origin <branch_name>
# 将子模块还原到父仓库中的初始提交
$ git submodule foreach --recursive git checkout .
# 获取子模块的更新并忽略本地修改
$ git submodule foreach --recursive git fetch --all
$ git submodule foreach --recursive git reset --hard origin/master
```

### 获取子模块的最新提交

```bash
$ cd <path_to_submodule>
$ git pull
```

### 删除子模块

```bash
$ git submodule deinit <path_to_submodule>
$ git rm <path_to_submodule>
```

### 切换子模块的分支

```bash
$ cd <path_to_submodule>
$ git checkout <branch_name>
```

### 初始化并更新所有子模块

```bash
$ git submodule init
$ git submodule update
```

### 切换子模块的特定标签

```bash
$ cd <path_to_submodule>
$ git checkout tags/<tag_name>
```

Config 设置
---

### 查看配置的信息

```bash
$ git help config
```

获取帮助信息，查看修改个人信息的参数

### 忽略文件的权限变化

```shell
git config core.fileMode false
```

不再将文件的权限变化视作改动

### 配置自动换行

```bash
$ git config --global core.autocrlf input
```

自动转换坑太大，提交到git是自动将换行符转换为 `lf`

### 获取帮助信息

```bash
$ git config --list
```

### 中文乱码的解决方案

```shell
$ git config --global core.quotepath false
```

### 删除全局设置

```bash
$ git config --global --unset <entry-name>
```

### 配置 http 和 socks 代理
<!--rehype:wrap-class=col-span-2 row-span-2-->

```bash
# 查看代理
$ git config --global http.proxy
$ git config --global https.proxy
$ git config --global socks.proxy

# 设置代理
# 适用于 privoxy 将 socks 协议转为 http 协议的 http 端口
$ git config --global http.proxy http://127.0.0.1:1080
$ git config --global https.proxy http://127.0.0.1:1080
$ git config --global socks.proxy 127.0.0.1:1080

# 取消代理
$ git config --global --unset http.proxy
$ git config --global --unset https.proxy
$ git config --global --unset socks.proxy

# 只对 github.com 设置代理
$ git config --global http.https://github.com.proxy socks5://127.0.0.1:1080
$ git config --global https.https://github.com.proxy socks5://127.0.0.1:1080

# 取消 github.com 代理
$ git config --global --unset http.https://github.com.proxy
$ git config --global --unset https.https://github.com.proxy
```

### Git 别名

```shell
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status
```

配置好后，再输入 `git` 命令的时候就不用再输入一大段了，例如我们要查看状态，只需：

```bash
$ git st
```

也可以看看：[更多别名](https://gist.github.com/johnpolacek/69604a1f6861129ef088)

### 设置大小写敏感

```shell
# 查看git 的设置
$ git config --get core.ignorecase
# 设置大小写敏感
$ git config core.ignorecase false
# 远程有俩相同目录，通过这种方式清除掉，然后提交记录
$ git rm -r --cached <目录/文件>
```

Git 技巧
------

### 重命名分支

- **重命名**为`new`

  ```shell
  $ git branch -m <new>
  $ git branch -m <old> <new> #重命名分支
  ```

- **推送**并重置

  ```shell
  $ git push origin -u <new>
  ```

- **删除**远程分支

  ```shell
  $ git push origin --delete <old> #方法1
  $ git push origin :oldBranchName #方法2
  ```
<!--rehype:className=style-timeline-->

### Log

按内容搜索更改

```shell
$ git log -S'<a term in the source>'
```

显示特定文件随时间的变化

```shell
$ git log -p <file_name>
```

打印出很酷的日志可视化

```shell
$ git log --pretty=oneline --graph --decorate --all
```
<!--rehype:className=wrap-text-->

### 分支
<!--rehype:wrap-class=row-span-2-->

列出所有分支及其上游

```shell
$ git branch -vv
```

快速切换到上一个分支

```shell
$ git checkout -
```

只获取所有远程分支

```shell
$ git branch -r
```

从另一个分支签出单个文件

```shell
$ git checkout <branch> -- <file>
```

删除本地存在远程不存在的分支

```shell
$ git remote prune origin
```

### 获取最近一次提交的 Hash

```shell
$ git rev-parse HEAD # e10721cb8859b2c
# 获取短 hash
$ git rev-parse --short HEAD # e10721c
```

### 删除已经合并到 master 的分支

```shell
$ git branch --merged master | grep -v '^\*\|  master' | xargs -n 1 git branch -d
```
<!--rehype:className=wrap-text-->

### 查看冲突文件列表

```bash
$ git diff --name-only --diff-filter=U
```

### 展示工作区的冲突文件列表
<!--rehype:wrap-class=row-span-2-->

输出工作区和暂存区的 different (不同)。

```bash
$ git diff
```

还可以展示本地仓库中任意两个 commit 之间的文件变动：

```bash
$ git diff <commit-id> <commit-id>
```

### 展示暂存区和最近版本的不同

```bash
git diff --cached
```

### 展示暂存区、工作区和最近版本的不同

```bash
$ git diff HEAD
```

输出工作区、暂存区 和本地最近的版本(commit)的different(不同)。

### 删除已经合并到 master 的分支

```bash
$ git branch --merged master | grep -v '^\*\|  master' | xargs -n 1 git branch -d
```
<!--rehype:className=wrap-text-->

### 关联远程分支
<!--rehype:wrap-class=row-span-2-->

```bash
$ git branch -u origin/mybranch
```

或者在 `push` 时加上 `-u` 参数

```bash
git push origin/mybranch -u
```

关联之后，`git branch -vv` 就可以展示关联的远程分支名了, 同时推送到远程仓库直接：`git push`，不需要指定远程仓库

### 查看远程分支和本地分支的对应关系

```bash
$ git remote show origin
```

### 展示当前分支的最近的 tag

```bash
$ git describe --tags --abbrev=0
```

### 修改作者名

```bash
$ git commit --amend --author='Author Name <email@address.com>'
```
<!--rehype:className=wrap-text-->

### 增加远程仓库

```bash
$ git remote add origin <remote-url>
```
<!--rehype:className=wrap-text-->

### 列出所有远程仓库

```bash
$ git remote -v
```

### 从 stash 中拿出某个文件的修改

```bash
$ git checkout <stash@{n}> -- <file-path>
```
<!--rehype:className=wrap-text-->

### 展示所有 tracked 的文件

```bash
$ git ls-files -t
```

### 展示所有 untracked 的文件

```bash
$ git ls-files --others
```

### 展示所有忽略的文件

```bash
$ git ls-files --others -i --exclude-standard
```
<!--rehype:className=wrap-text-->

### 把某一个分支导出成一个文件

```bash
$ git bundle create <file> <branch-name>
```

### 从包中导入分支
<!--rehype:wrap-class=row-span-2-->

```bash
$ git clone repo.bundle <repo-dir> -b <branch-name>
```
<!--rehype:className=wrap-text-->

新建一个分支，分支内容就是上面 `git bundle create` 命令导出的内容

### 执行 rebase 之前自动 stash

```bash
$ git rebase --autostash
```

### 从远程仓库根据 ID，拉下某一状态，到本地分支

```bash
$ git fetch origin pull/<id>/head:<branch-name>
```
<!--rehype:className=wrap-text-->

### 详细展示一行中的修改

```bash
$ git diff --word-diff
```

### 清除 gitignore 文件中记录的文件

```bash
$ git clean -X -f
```

### 展示忽略的文件

```bash
$ git status --ignored
```

### 新建并切换到新分支上，同时这个分支没有任何 commit

```bash
$ git checkout --orphan <branch-name>
```

相当于保存修改，但是重写 commit 历史

### 展示任意分支某一文件的内容

```bash
$ git show <branch-name>:<file-name>
```

### clone 最新一次提交

```bash
$ git clone --depth=1 https://github.com/user/repo.git
```

只会 `clone` 最近一次提交，将减少 `clone` 时间

### 忽略某个文件的改动
<!--rehype:wrap-class=row-span-2-->

关闭 track 指定文件的改动，也就是 Git 将不会在记录这个文件的改动

```bash
git update-index --assume-unchanged path/to/file
```
<!--rehype:className=wrap-text-->

恢复 track 指定文件的改动

```bash
git update-index --no-assume-unchanged path/to/file
```
<!--rehype:className=wrap-text-->

### 以最后提交的顺序列出所有 Git 分支

```bash
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/heads
```

最新的放在最上面

### 把暂存区的指定 file 放到工作区中

```bash
git reset <file-name>
```

不添加参数，默认是 `-mixed`

### 配置 SSH 协议代理

```shell
# 对于使用 git@ 协议的，可以配置 socks5 代理
# macOS 系统编辑 ~/.ssh/config 文件，添加这几行，设置 github 代理
Host github.com
  ProxyCommand nc -X 5 -x 127.0.0.1:1080 %h %p
```
<!--rehype:className=wrap-text-->

### Fork仓库同步上游仓库

- 设置上游仓库

  ```shell
  $ git remote add upstream https://github.com/jaywcjlove/reference.git
  ```
  
- 本地项目操作

  ```shell
  $ git fetch upstream # 获取上游仓库更新
  $ git stach # 暂存本地修改(如果有)
  $ git branch -a # 列出所有远程仓库地址(非必须)
  $ git rebase remotes/upstream/main # 使用远程仓库的提交记录来重写本地提交记录
  $ git push -f # 强制推送到远程(github)仓库
  $ git stach pop # 恢复暂存的本地修改(如果有)
  ```

<!--rehype:className=style-timeline-->

统计查询
---

### 查看 git 上的个人代码量
<!--rehype:wrap-class=row-span-2-->

- `username` 需要改成自己的

```bash
git log --author="username" --pretty=tformat: --numstat | awk \
'{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
```
<!--rehype:className=wrap-text-->

### 统计每个人增删行数
<!--rehype:wrap-class=row-span-2-->

```bash
git log --format='%aN' | sort -u |\
  while read name; do echo -en "$name\t";\
  git log --author="$name" --pretty=tformat: --numstat | awk \
  '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
```
<!--rehype:className=wrap-text-->

### 查看仓库提交者排名

这里是排名前十，也可以更改排名

```bash
git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r | head -n 10
```
<!--rehype:className=wrap-text-->

### 提交数统计

```bash
git log --oneline | wc -l
```

### 查看某段代码是谁写的

```bash
$ git blame <file-name>
```

`blame` 的意思为`责怪`，你懂的。

### 查看两个星期内的改动

```bash
$ git whatchanged --since='2 weeks ago'
```

### 在 commit log 中查找相关内容

```bash
$ git log --all --grep='<given-text>'
```

通过 grep 查找，given-text: 所需要查找的字段

### Git 仓库的大小

```bash
$ git ls-files | xargs -r du -hs
```

### Git 仓库的总大小

```bash
$ git count-objects -vH
```

### 查询历史体积大的 10 个文件

```bash
$ git rev-list --objects --all | git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' | awk '/^blob/ {print substr($0,6)}' | sort --numeric-sort --key=2 --reverse | head -n 10 | cut -c 13-
```

Conventional Commmits
----

### 格式
<!--rehype:wrap-class=col-span-3-->

```text
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ 紧凑简短的描述，无需大写，也不需要用句号结尾
  │       │
  │       └─⫸ Commit 范围: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|ngcc|ve|
  │                          devtools....
  │
  └─⫸ Commit 类型: build|ci|doc|docs|feat|fix|perf|refactor|test
                    website|chore|style|type|revert
```

### 常用
<!--rehype:wrap-class=row-span-1-->

|   类型   |  描述 |
| ----------|------------ |
| `feat:`   | 新特性     |
| `fix(scope):`   | 修复 scope 中的 Bug |
| `feat!:` / `feat(scope)!:` | breaking change /  重构 API |
| `chore(deps):` | 更新依赖 |
<!--rehype:className=left-align-->

### Commit 类型
<!--rehype:wrap-class=col-span-2-->

|   类型   |  描述 |
| ----------|------------ |
| `build:` | 变更影响的是**构建系统**或者**外部依赖** (如: gulp, npm) |
| `ci:` | 修改了 CI 配置文件或脚本 (如: Github Action, Travis) |
| `chore:` | **【重要】** 变更不影响源代码或测试（如更新了辅助工具、库等) |
| `docs:` | 只修改了文档 |
| `feat:` | **【重要】** 一个新特性 |
| `fix:` | **【重要】** 修复了一个 Bug |
| `perf:` | 增强性能的代码变更 |
| `refactor:` | 并非修复 Bug 或添加新特性的代码变更 |
| `revert:` | 回退代码 |
| `style:` | 变更不影响一些有意义的代码 (如: 删除空格、格式化代码、添加分号等) |
| `test:` | 添加测试代码或修正已有的测试 |
<!--rehype:className=left-align-->

另见
---

- [最常用的 git 提示和技巧](https://github.com/git-tips/tips)
- [Conventional Commits 官方网站](https://www.conventionalcommits.org/zh-hans/v1.0.0/) _(conventionalcommits.org)_
- [Conventional Commits Cheatsheet](https://gist.github.com/Zekfad/f51cb06ac76e2457f11c80ed705c95a3) _(gist.github.com)_
