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

创建一个名为 `new_branch` 的新分支

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

### 忽略文件

```gitignore showLineNumbers
/logs/*
# “！” 意思是不要忽视
!logs/.gitkeep
# 忽略 Mac 系统文件
.DS_store
# 忽略 node_modules 文件夹
node_modules
# 忽略 SASS 配置文件
.sass-cache
```

`.gitignore` 文件指定了 Git 应该忽略的未跟踪的文件

### git 配置 ssh 代理

```bash
$ cat ~/.ssh/config
Host gitlab.com
# 直接使用 shadowsocks 提供的 socks5 代理端口
ProxyCommand nc -X 5 -x 127.0.0.1:1080 %h %p 

Host github.com
ProxyCommand nc -X 5 -x 127.0.0.1:1080 %h %p    
```
<!--rehype:className=wrap-text-->

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
git remote prune origin
```

### Commit

```shell
$ git commit -v --amend
```

重写最后的提交信息

### 忽略文件的权限变化

```shell
git config core.fileMode false
```

不再将文件的权限变化视作改动

### Git 别名

```shell
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status
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

### 修改远程 Commit 记录
<!--rehype:wrap-class=row-span-4-->

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

### 把 A 分支的某一个 commit，放到 B 分支上

```shell
# 切换到 B 分支
$ git checkout <B>
# 将 A 分支 <hash-id> 的内容 pick 到 B 分支
$ git cherry-pick <hash-id>
```

### 回到远程仓库的状态

```bash
$ git fetch --all && git reset --hard origin/master
```
<!--rehype:className=wrap-text-->

抛弃本地所有的修改，回到远程仓库的状态

### 重设第一个 commit

```bash
$ git update-ref -d HEAD
```

把所有的改动都重新放回工作区，并**清空所有的 commit**，这样就可以重新提交第一个 `commit` 了

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

### 中文乱码的解决方案

```shell
$ git config --global core.quotepath false
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

### 查看某段代码是谁写的

```bash
$ git blame <file-name>
```

`blame` 的意思为`责怪`，你懂的。

### 修改作者名

```bash
$ git commit --amend --author='Author Name <email@address.com>'
```

### 修改远程仓库的 url

```bash
$ git remote set-url origin <URL>
```

### 增加远程仓库

```bash
$ git remote add origin <remote-url>
```
<!--rehype:className=wrap-text-->

### 列出所有远程仓库

```bash
$ git remote -v
```

### 查看两个星期内的改动

```bash
$ git whatchanged --since='2 weeks ago'
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

### commit 历史中显示 Branch1 有的但是 Branch2 没有 commit

```bash
$ git log Branch1 ^Branch2
```

### 在 commit log 中显示 GPG 签名

```bash
$ git log --show-signature
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

### 在 commit log 中查找相关内容

```bash
git log --all --grep='<given-text>'
```

通过 grep 查找，given-text: 所需要查找的字段

### 把暂存区的指定 file 放到工作区中

```bash
git reset <file-name>
```

不添加参数，默认是 `-mixed`

### 配置 http 和 socks 代理

```bash
# 适用于 privoxy 将 socks 协议转为 http 协议的 http 端口
git config --global https.proxy 'http://127.0.0.1:8001'
git config --global http.proxy 'http://127.0.0.1:8001'
git config --global socks.proxy "127.0.0.1:1080"
```
<!--rehype:className=wrap-text-->

另见
---

- [最常用的 git 提示和技巧](https://github.com/git-tips/tips)