pip 备忘清单
===

这份 pip 备忘清单汇总了 Python 包管理的常用命令，涵盖安装、卸载、版本控制、依赖管理及镜像加速等操作，助你高效掌控开发环境。

入门
---

### 基础命令
<!--rehype:wrap-class=col-span-2-->

命令 | 说明
:- | :-
`pip install package_name`   | 安装指定的包
`pip install requests-2.22.0-py2.py3-none-any.whl`   | 从本地的 wheel 文件安装包
`pip install git+https://github.com/psf/requests.git`   | 从 Git 仓库安装包
`pip install /home/user/src/requests`   | 从目录中安装包
`pip uninstall package_name` | 卸载指定的包
`pip list`                   | 查看已安装的包列表
`pip show package_name`      | 查看某个包的详细信息
`pip search keyword`         | 搜索 PyPI 包（新版 pip 已弃用，建议用 [pypi.org](https://pypi.org)）
<!--rehype:className=left-align-->

### 版本控制

命令 | 说明
:- | :-
`pip install package==1.2.3`      | 安装指定版本
`pip install "package>=1.0,<2.0"` | 安装满足条件的版本
`pip install package!=2.21.0` | 安装包，但排除某个特定版本
`pip install --upgrade package`   | 升级包到最新版本
<!--rehype:className=style-list-->

### 依赖文件操作

命令 | 说明
:- | :-
`pip freeze`                      | 导出当前环境的所有包及版本
`pip freeze > requirements.txt`   | 保存依赖列表到文件
`pip install -r requirements.txt` | 从文件安装依赖
<!--rehype:className=style-list-->

### 高级选项

命令 | 说明
:- | :-
`pip install .`    | 安装当前目录中的包（`setup.py` 或 `pyproject.toml`）
`pip install -e .` | 安装当前项目为可编辑模式（开发用）
`pip cache dir`    | 查看 pip 缓存目录
`pip cache purge`  | 清除 pip 缓存
`pip check`        | 检查依赖冲突
<!--rehype:className=style-list-->

### 使用镜像源

命令 | 说明
:- | :-
`pip install -i https://pypi.org/simple package`                           | 使用官方源安装
`pip install -i https://pypi.tuna.tsinghua.edu.cn/simple package`          | 使用清华镜像安装
`pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple` | 永久设置默认镜像
<!--rehype:className=style-list-->

另见
---

- [pip 官方文档](https://pip.pypa.io/en/stable/)  _(pypa.io)_
- [Github 仓库](https://github.com/pypa/pip)  _(github.com)_
