VSCode 备忘清单
===

这个 VSCode (Visual Studio Code) 快速参考备忘单显示了它的键盘快捷键和命令。

## Windows

### 通用

| -                           | -                      |
|-----------------------------|------------------------|
| `Ctrl` `Shift` `P` _/_ `F1` | 显示命令面板             |
| `Ctrl` `P`                  | 快速打开，转到文件        |
| `Ctrl` `Shift` `N`          | 打开新窗口               |
| `Ctrl` `Shift` `W`          | 关闭当前窗口             |
| `Ctrl` `,`                  | 打开用户设置             |
| `Ctrl` `K` `Ctrl` `S`       | 打开键盘快捷键设置        |
<!--rehype:className=shortcuts-->

### 基本编辑
<!--rehype:wrap-style=grid-row: span 2/span 2;-->

| -                         | -                                  |
|---------------------------|------------------------------------|
| `Ctrl` `X`                | 剪切行                              |
| `Ctrl` `C`                | 复制行                              |
| `Alt` `↑` _/_ `↓`         | 向上/向下移动行                      |
| `Shift` `Alt` `↓` _/_ `↑` | 向上/向下复制行                      |
| `Ctrl` `Shift` `K`        | 删除行                              |
| `Ctrl` `Enter`            | 在下面插入行                         |
| `Ctrl` `Shift` `Enter`    | 在上面插入行                         |
| `Ctrl` `Shift` `\`        | 跳转到匹配的括号                     |
| `Ctrl` `]` _/_ `[`        | 缩进/突出行                          |
| `Home` _/_ `End`          | 转到行首/行尾                        |
| `Ctrl` `Home`             | 转到文件开头                         |
| `Ctrl` `End`              | 转到文件末尾                         |
| `Ctrl` `↑` _/_ `↓`        | 向上/向下滚动行                      |
| `Alt` `PgUp` _/_ `PgDn`   | 向上/向下滚动页面                    |
| `Ctrl` `Shift` `[`        | 折叠区域                            |
| `Ctrl` `Shift` `]`        | 展开区域                            |
| `Ctrl` `K` `Ctrl` `[`     | 折叠所有子区域                       |
| `Ctrl` `K` `Ctrl` `]`     | 展开所有子区域                       |
| `Ctrl` `K` `Ctrl` `0`     | 折叠所有区域                         |
| `Ctrl` `K` `Ctrl` `J`     | 展开所有区域                         |
| `Ctrl` `K` `Ctrl` `C`     | 添加行注释                           |
| `Ctrl` `K` `Ctrl` `U`     | 删除行注释                           |
| `Ctrl` `/`                | 切换行注释                           |
| `Shift` `Alt` `A`         | 切换块注释                           |
| `Alt` `Z`                 | 切换自动换行                         |
<!--rehype:className=shortcuts-->

### 导航

| -                    | -                  |
|----------------------|--------------------|
| `Ctrl` `T`           | 显示所有符号         |
| `Ctrl` `G`           | 跳转到指定行数       |
| `Ctrl` `P`           | 转到文件            |
| `Ctrl` `Shift` `O`   | 转到符号            |
| `Ctrl` `Shift` `M`   | 显示问题面板         |
| `F8`                 | 转到下一个错误       |
| `Shift` `F8`         | 转到上一个错误       |
| `Ctrl` `Shift` `Tab` | 浏览编辑组历史       |
| `Alt` `←` _/_ `→`    | 后退/前进           |
| `Ctrl` `M`           | 切换按 Tab 移动焦点   |
<!--rehype:className=shortcuts-->

### 搜索和替换

| -                         | -                               |
|---------------------------|---------------------------------|
| `Ctrl` `F`                | 查找                             |
| `Ctrl` `H`                | 替换                             |
| `F3` _/_ `Shift` `F3`     | 查找下一个/上一个                  |
| `Alt` `Enter`             | 选择所有出现的查找匹配项            |
| `Ctrl` `D`                | 将所选内容设置为查找关键词          |
| `Ctrl` `K` `Ctrl` `D`     | 将上一个选择移动到下一个查找匹配项   |
| `Alt` `C` _/_ `R` _/_ `W` | 切换区分大小写/正则表达式/全字匹配   |
<!--rehype:className=shortcuts-->

### 多光标和选择

| -                                      | -                            |
|----------------------------------------|------------------------------|
| `Alt` `Click`                          | 插入光标                      |
| `Ctrl` `Alt` `↑` _/_ `↓`               | 在上方/下方插入光标             |
| `Ctrl` `U`                             | 撤消上一次光标操作              |
| `Shift` `Alt` `I`                      | 在选定的每一行的末尾插入光标      |
| `Ctrl` `I`                             | 选择当前行                     |
| `Ctrl` `Shift` `L`                     | 选择当前选择的所有匹配项         |
| `Ctrl` `F2`                            | 选择当前单词的所有出现           |
| `Shift` `Alt` `→`                      | 展开选择                      |
| `Shift` `Alt` `←`                      | 收起选择                      |
| `Shift` `Alt` `<Drag>`                 | 列（框）选择                   |
| `Ctrl` `Shift` `Alt` `<Arrow>`         | 列（框）选择                   |
| `Ctrl` `Shift` `Alt` `PgUp` _/_ `PgDn` | 列（框）选择页上/下             |
<!--rehype:className=shortcuts-->

### 丰富的语言编辑

| -                           | -               |
|-----------------------------|-----------------|
| `Ctrl` `<Space>` `Ctrl` `I` | 显示建议         |
| `Ctrl` `Shift` `<Space>`    | 显示参数提示      |
| `Shift` `Alt` `F`           | 格式化文档       |
| `Ctrl` `K` `Ctrl` `F`       | 格式化所选区域    |
| `F12`                       | 转到定义         |
| `Alt` `F12`                 | 速览定义         |
| `Ctrl` `K` `F12`            | 在侧边栏中打开定义 |
| `Ctrl` `.`                  | 快速修复         |
| `Shift` `F12`               | 显示引用         |
| `F2`                        | 重命名符号       |
| `Ctrl` `K` `Ctrl` `X`       | 删除尾随空格      |
| `Ctrl` `K` `M`              | 更改文件语言      |
<!--rehype:className=shortcuts-->

### 编辑管理

| -                                | -                        |
|----------------------------------|--------------------------|
| `Ctrl` `F4` `Ctrl` `W`           | 关闭编辑器                 |
| `Ctrl` `K` `F`                   | 关闭文件夹                 |
| `Ctrl` `\`                       | 拆分编辑器                 |
| `Ctrl` `1` _/_ `2` _/_ `3`       | 将焦点切换到第一/二/三编辑组  |
| `Ctrl` `K` `Ctrl` `←` _/_ `→`    | 将焦点切换到上/下一个编辑组    |
| `Ctrl` `Shift` `PgUp` _/_ `PgDn` | 向左/向右移动编辑器         |
| `Ctrl` `K` `←` _/_ `→`           | 移动活动编辑器组            |
<!--rehype:className=shortcuts-->

### 文件管理

| -                     | -                           |
|-----------------------|-----------------------------|
| `Ctrl` `N`            | 新建文件                     |
| `Ctrl` `O`            | 打开文件                     |
| `Ctrl` `S`            | 保存                        |
| `Ctrl` `Shift` `S`    | 另存为                       |
| `Ctrl` `K` `S`        | 保存所有                     |
| `Ctrl` `F4`           | 关闭                        |
| `Ctrl` `K` `Ctrl` `W` | 关闭所有                     |
| `Ctrl` `Shift` `T`    | 重新打开关闭的编辑器           |
| `Ctrl` `K` `Enter`    | 保持预览模式编辑器打开         |
| `Ctrl` `Tab`          | 打开下一项                   |
| `Ctrl` `Shift` `Tab`  | 打开上一项                   |
| `Ctrl` `K` `P`        | 复制活动文件的路径             |
| `Ctrl` `K` `R`        | 在资源管理器中显示活动文件      |
| `Ctrl` `K` `O`        | 在新窗口/实例中显示活动文件     |
<!--rehype:className=shortcuts-->

### 展示

| -                  | -                                          |
|--------------------|--------------------------------------------|
| `F11`              | 切换全屏                                    |
| `Shift` `Alt` `0`  | 切换编辑器布局（水平/垂直）                     |
| `Ctrl` `=` _/_ `-` | 放大/缩小                                    |
| `Ctrl` `B`         | 切换侧边栏可见性                              |
| `Ctrl` `Shift` `E` | 显示资源管理器/切换焦点                       |
| `Ctrl` `Shift` `F` | 显示搜索                                    |
| `Ctrl` `Shift` `G` | 显示源代码管理                               |
| `Ctrl` `Shift` `D` | 显示调试                                    |
| `Ctrl` `Shift` `X` | 显示扩展                                    |
| `Ctrl` `Shift` `H` | 在文件中替换                                |
| `Ctrl` `Shift` `J` | 切换搜索详细信息                         |
| `Ctrl` `Shift` `U` | 显示输出面板                                |
| `Ctrl` `Shift` `V` | 打开 Markdown 预览                         |
| `Ctrl` `K` `V`     | 打开 Markdown 预览到一边                    |
| `Ctrl` `K` `Z`     | Zen 模式（Esc Esc 退出）                    |
<!--rehype:className=shortcuts-->

### 调试

| -                              | -                             |
|--------------------------------|-------------------------------|
| `F9`                           | 切换断点                       |
| `F5`                           | 开始/继续                      |
| `Shift` `F5`                   | 停止                          |
| `Shift` `F11` _/_ `F11`        | 单步调试/跳出                  |
| `F10`                          | 单步跳过                       |
| `Ctrl` `K` `Ctrl` `I`          | 显示悬停                       |
| `Ctrl` <code>\`</code>         | 显示综合终端                    |
| `Ctrl` `Shift` <code>\`</code> | 创建一个新终端                  |
| `Ctrl` `C`                     | 复制所选内容                    |
| `Ctrl` `V`                     | 粘贴到活动终端                  |
| `Ctrl` `↑` _/_ `↓`             | 向上/向下滚动                   |
| `Shift` `PgUp` _/_ `PgDn`      | 向上/向下滚动页面               |
| `Ctrl` `Home` _/_ `End`        | 滚动到顶部/底部                 |
<!--rehype:className=shortcuts-->
