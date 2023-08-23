Conda备忘清单
===

这是开始使用 `conda` 命令的快速参考备忘单，初次学习可参考[这里](https://anaconda.org.cn/anaconda/user-guide/getting-started/#open-nav-win)

入门
-----
<!--rehype:body-class=cols-1-->

### 常用基础命令

命令 | 说明
:-- | --
`conda info` | 查看 conda 的一系列基本信息(版本、源、路径等)
`conda update -n base conda` | 在base环境中更新conda
`conda install anconda=2022.05` | 安装最新的anaconda发行版(见[发行说明](https://docs.anaconda.com/navigator/release-notes/?utm_source=cheatsheet))
`conda create --name <ENVNAME>` | 创建一个新的环境
`conda activate <ENVNAME>` | 激活/切换/选择一个环境
`conda env list 或者 conda info -e`           | 列出所有的环境和位置看
`conda list -n <ENVNAME> --show-channel-urls`           | 列出某个环境所有包和包的下载源路径
`conda install -n <ENVNAME> <PKG1> <PKG2>`        | 在某个环境中安装包
`conda uninstall <PKGNAME包名> -n <ENVNAME环境名>`             | 从某个环境删除某个包
`conda update --all -n <ENVNAME环境名>`           | 升级某个环境的所有包
<!--rehype:className=show-header-->

环境与包管理
-----

### 包与源管理
<!--rehype:wrap-class=col-span-2-->

> 在使用 `conda` 时，包依赖关系和平台细节会**自动解决**

查看命令均可搭配 `grep` 命令使用，例如：

```bash
conda list | grep torch  #列出所有包含torch的包
```

Command | Description
:-- | --
`conda list`                         | 列出所有安装的包
`conda list --show-channel-urls`        |列出包含源信息的已安装包
`conda update --all`                      |  更新所有包
`conda install -c <CHANNELNAME源地址> <PKG1包> <PKG2>`   | 从特定源(如清华源、阿里源)安装包
`conda install PKGNAME=3.1.4` | 安装指定版本的包
`conda install "PKGNAME>2.5,<3.2"`           |  使用AND逻辑安装包
`conda install "<PKGNAME> [version='2.5\|3.2']"`       |
`conda uninstall <PKGNAME>`        | 卸载包
`conda config --show-sources` | 查看源地址（位置越靠上，搜索的时候越优先）
`conda config --add channels <CHANNELNAME>`             | 添加conda的源地址
`conda config --remove channels <CHANNELNAME>`|           移除conda的源地址

### 更改环境

Command | Description
:-- | --
`conda create -n <ENVNAME> python=3.10` | 指定Python版本创建环境
`conda create --clone <ENVNAME> -n <NEWENV>` | 从已有环境克隆一个新环境
`conda rename -n <ENVNAME> <NEWENVNAME>` |  对环境名字重命名
`conda remove -n <ENVNAME> --all`   | 通过名字删除一个环境
`conda env remove -n  <ENVNAME>`   | 通过名字删除一个环境
`conda list -n <ENVNAME> --revisions` |  列出环境的各个修订版本
`conda install -n <ENVNAME> --revision <NUMBER>"`    | 回滚到环境的某个版本本
<!--rehype:className=style-list-arrow-->

关于 `conda` 环境回滚可参考：[这里](https://www.pybloggers.com/2016/06/conda-revisions-letting-you-rollback-to-a-previous-version-of-your-environment/)

### 导出环境配置
<!--rehype:wrap-class=col-span-2 row-span-2-->

建议将导出文件命名为“environment”，环境名称将被保留

Command | Description
:-- | --
`conda env export --from-history>ENV.yml`       | 跨平台兼容需（通过这种方式，可以省去所有其他可能是特定于平台的依赖项）
`conda env export -n ENVNAME > ENV.yml`        | 导出指定环境到yml文件
`conda env export > ENV.yml`                      |  导出当前环境到yml文件
`conda list --explicit>ENV.txt`   | 导出包信息到当前目录
`conda env create -n ENVNAME --file ENV.yml`       | 从yml文件导入
`conda create -n ENVNAME --file ENV.txt`        | 从txt文件导入
<!--rehype:className=style-list-arrow-->

### 另外

查看命令帮助

```bash
conda <COMMAND> --help
conda search <PKGNAME> --info
conda clean --all # 清除所有未使用的文件
conda config --show # 检查conda配置
```

设置指定环境为默认环境

```bash
vim ~/.bashrc
export PATH="~/anaconda/envs/ENVNAME/bin:$PATH"  # 文件末尾添加
conda activate ENVNAME  # :wq 保存并关闭
source ~/.bashrc  # 更新
conda config --set auto_activate_base false # 禁用auto activate base环境
```

### 额外提示

```bash
conda COMMAND --help  # 获得任何命令的帮助
# 获取任何包裹的信息
conda search PKGNAME --info
# 运行没有用户提示的命令，例如，安装多个包
conda COMMAND ARG --yes
conda install PKG1 PKG2 --yes 
conda clean --all  # 删除所有未使用的文件
conda config --show  # 检查 conda 配置
```

另见
----

- [Anaconda文档](https://anaconda.org.cn/)
- [官网命令Cheat sheet](https://conda.io/projects/conda/en/latest/user-guide/cheatsheet.html)
- [Conda cheatsheet PDF](https://conda.io/projects/conda/en/latest/_downloads/843d9e0198f2a193a3484886fa28163c/conda-cheatsheet.pdf)
