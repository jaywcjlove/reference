Git 备忘清单
===

本备忘单总结了常用的 Git 命令行指令，以供快速参考。

入门
----

### 创建存储库

创建一个新的本地存储库

```shell
$ git init [project name]
```

克隆存储库

```shell
$ git clone git_url
```

将存储库克隆到指定目录

```shell
$ git clone git_url 指定目录
```

### 做出改变
<!--rehype:wrap-class=row-span-2-->

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

### 使用分支

列出所有本地分支

```shell
$ git branch
```

列出所有分支，本地和远程

```shell
$ git branch -av
```

切换到 my_branch，并更新工作目录

```shell
$ git checkout my_branch
```

创建一个名为 new_branch 的新分支

```shell
$ git checkout -b new_branch
```

删除名为 my_branch 的分支

```shell
$ git branch -d my_branch
```

将分支 A 合并到分支 B

```shell
$ git checkout branchB
$ git merge branchA
```

标记当前提交

```shell
$ git tag my_tag
```

### 观察你的存储库

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

### 同步

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

### 临时提交

保存已修改和分阶段的更改

```shell
$ git stash
```

列出隐藏文件更改的堆栈顺序

```shell
$ git stash list
```

从存储堆栈顶部编写工作

```shell
$ git stash pop
```

丢弃存储堆栈顶部的更改

```shell
$ git stash drop
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

```gitignore
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

只获取远程分支

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

也可以看看：[More Aliases](https://gist.github.com/johnpolacek/69604a1f6861129ef088)

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

### 中文乱码的解决方案

```shell
$ git config --global core.quotepath false
```

### 把 A 分支的某一个 commit，放到 B 分支上

```shell
# 切换到 B 分支
$ git checkout <B>
# 将 A 分支 <hash-id> 的内容 pick 到 B 分支
$ git cherry-pick <hash-id>
```