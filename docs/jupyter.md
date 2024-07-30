Jupyter 备忘清单
===

Jupyter 备忘清单是 [Jupyter](http://jupyter.org) 编程工具的单页参考表

入门
----

### Jupyter 简介

Jupyter（/ˈdʒuːpɪtər/）是一个非营利组织，致力于为多种编程语言的交互式计算开发开源软件、开放标准和服务。Jupyter 于 2014 年由 Fernando Pérez 从 `IPython` 衍生出来，支持几十种编程语言的执行环境。Jupyter 项目主要开发并支持 `Jupyter Notebook`（.ipynb 文件格式）、`JupyterHub` 和 `JupyterLab` 等交互式计算产品。

### 安装 Jupyter

安装 Jupyter 可以通过 pip 或 conda 来完成。

`pip install jupyter` or `conda install jupyter`

mamba 安装

`mamba install -c conda-forge jupyterlab`

### 启动 Jupyter Notebook

在命令行中输入

`jupyter notebook`

`jupyter lab`  （如果使用 `Jupyter Lab`）来启动服务。

### 创建新的 Notebook
<!--rehype:wrap-class=col-span-2-->

- 打开浏览器，访问本地服务器地址（通常是 <http://localhost:8888/tree> or <http://localhost:8888/lab/tree> ）
- 右击文件夹，选择 `New` -> `Python 3` (或你安装的其他内核)。
- 保存 `Notebook`
- 使用菜单栏中的 `File` -> `Save and Checkpoint` 或者按快捷键 Ctrl+S (Cmd+S on Mac)。

### 关闭 Notebook

使用菜单栏中的 `File` -> `Close and Halt`。

Jupyter Notebook 快捷键
---

### 命令模式 (按键 Esc 开启)

| 按键        | 操作                         |
| ----------- | ---------------------------- |
| `Enter`       | 转入编辑模式                 |
| `Shift` `Enter` | 运行本单元，选中下个单元     |
| `Ctrl` `Enter`  | 运行本单元                   |
| `Alt` `Enter`   | 运行本单元，在其下插入新单元 |
| `y`           | 单元转入代码状态             |
| `m`           | 单元转入markdown状态         |
| `R`           | 单元转入raw状态              |
| `1`           | 设定 1 级标题                |
| `2`           | 设定 2 级标题                |
| `3`           | 设定 3 级标题                |
| `4`           | 设定 4 级标题                |
| `5`           | 设定 5 级标题                |
| `6`           | 设定 6 级标题                |
| `Up`          | 选中上方单元                 |
| `k`           | 选中上方单元                 |
| `Down`        | 选中下方单元                 |
| `j`           | 选中下方单元                 |
| `Shift` `K`     | 扩大选中上方单元             |
| `Shift` `J`     | 扩大选中下方单元             |
| `a`           | 在上方插入新单元             |
| `b`           | 在下方插入新单元             |
| `x`           | 剪切选中的单元               |
| `c`           | 复制选中的单元               |
| `Shift` `V`     | 粘贴到上方单元               |
| `zz`          | 恢复删除的最后一个单元       |
| `dd`          | 删除选中的单元               |
| `Shift` `M`     | 合并选中的单元               |
| `Ctrl` `S`      | 文件存盘                     |
| `L`           | 转换行号                     |
| `O`           | 转换输出                     |
| `Shift` `O`     | 转换输出滚动                 |
| `Esc`         | 关闭页面                     |
| `Q`           | 关闭页面                     |
| `H`           | 显示快捷键帮助               |
| `0,0`         | 重启Notebook内核             |
| `I,I`         | 中断Notebook内核             |
| `Shift`       | 忽略                         |
| `Shift` `Space` | 向上滚动                     |
| `Space`       | 向下滚动                     |
<!--rehype:className=shortcuts-->

### 编辑模式 ( Enter 键启动)

| 按键                | 操作                         |
| ------------------- | ---------------------------- |
| `Tab`                 | 代码补全或缩进               |
| `Shift` `Tab`           | 提示                         |
| `Ctrl` `]`              | 缩进                         |
| `Ctrl` `[`              | 解除缩进                     |
| `Ctrl` `A`              | 全选                         |
| `Ctrl` `Z`              | 复原                         |
| `Ctrl` `Shift` `Z`        | 再做                         |
| `Ctrl` `Y`              | 再做                         |
| `Ctrl` `Home`           | 跳到单元开头                 |
| `Ctrl` `Up`             | 跳到单元开头                 |
| `Ctrl` `End`            | 跳到单元末尾                 |
| `Ctrl` `Down`           | 跳到单元末尾                 |
| `Ctrl` `Left`           | 跳到左边一个字首             |
| `Ctrl` `Right`          | 跳到右边一个字首             |
| `Ctrl` `Backspace`      | 删除前面一个字               |
| `Ctrl` `Delete`         | 删除后面一个字               |
| `Esc`                 | 进入命令模式                 |
| `Ctrl` `M`              | 进入命令模式                 |
| `Shift` `Enter`         | 运行本单元，选中下一单元     |
| `Ctrl` `Enter`          | 运行本单元                   |
| `Alt` `Enter`           | 运行本单元，在下面插入一单元 |
| `Ctrl` `Shift` `-`        | 分割单元                     |
| `Ctrl` `Shift` `Subtract` | 分割单元                     |
| `Ctrl` `S`              | 文件存盘                     |
| `Shift`               | 忽略                         |
| `Up`                  | 光标上移或转入上一单元       |
| `Down`                | 光标下移或转入下一单元       |
<!--rehype:className=shortcuts-->

高级功能
---

### 魔法命令

`Jupyter Notebook` 支持一系列以 `%` 或 `%%`开头的魔法命令，这些命令可以提供特殊功能。例如，`%matplotlib inline` 可以在 `Notebook` 中内嵌绘图；`%%time` 可以测量代码执行时间。

调用 `python` 文件，可以使用 `%run` 命令来调用 `python` 文件。例如，`%run my_script.py` 可以运行当前目录下名为 `my_script.py` 的 python 文件。

### 环境管理

`Jupyter Notebook` 支持使用虚拟环境来隔离不同的项目依赖。你可以使用 `conda` 或 `venv`（`Python 3` 自带的虚拟环境管理工具）来创建和管理虚拟环境，并在 `Notebook` 中选择使用哪个环境。

### 扩展插件

`JupyterLab` 支持通过安装扩展插件来增强功能。你可以通过 `JupyterLab` 的扩展管理器搜索和安装扩展插件，例如代码格式化、主题更改、`Git` 集成等。

Jupyter 资源
---

### 参考资料

- [Jupyter 官方文档](https://docs.jupyter.org/)
- [Jupyter 社区](https://jupyter.org/)
- [Jupyter github](https://github.com/jupyter/jupyter)
- [Jupyterlab github](https://github.com/jupyterlab/jupyterlab)
