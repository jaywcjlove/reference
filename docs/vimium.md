Vimium 备忘清单
===

这是开始使用 [Vimium](https://github.com/philc/vimium) 浏览器扩展的快速参考备忘单，可以帮助用户更高效地浏览网页

入门
----

### 功能特点

#### 键盘导航

- 使用类似 Vim 的快捷键进行网页滚动、打开链接、管理标签页等操作

#### 快捷键自定义

- 用户可根据个人习惯自定义快捷键，提升使用体验

#### 无鼠标操作

- 通过键盘快捷键完成几乎所有浏览器操作，减少对鼠标的依赖，提高效率

### 安装

**Chrome 浏览器**

- [Chrome web store](https://chromewebstore.google.com/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)

**Edge 浏览器**

- [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/vimium/djmieaghokpkpjfbpelnlkfgfjapaopa)

**Firefox 浏览器**

- [Firefox Add-ons](https://addons.mozilla.org/en-GB/firefox/addon/vimium-ff/)

### 快捷键自定义

```json
{
  "customKeybindings": {
    "scrollUp": "k",
    "scrollDown": "j",
    "scrollLeft": "h",
    "scrollRight": "l",
    "reload": "r",
    "openLinkInCurrentTab": "f",
    "openLinkInNewTab": "F"
  }
}
```

键盘快捷键
---

### 基本导航
<!--rehype:wrap-class=row-span-3-->

快捷键     | 功能
:-- | ---
`?` |       显示帮助对话框，列出所有可用按键
`h` |       向左滚动
`j` |       向下滚动
`k` |       向上滚动
`l` |       向右滚动
`gg` |      滚动到页面顶部
`G` |       滚动到页面底部
`d` |       向下滚动半页
`u` |       向上滚动半页
`f` |       在当前标签页中打开链接
`F` |       在新标签页中打开链接
`r` |       重新加载页面
`gs` |      查看页面源代码
`I` |       进入插入模式 -- 所有命令将被忽略，直到你按下 Esc 退出
`yy` |      复制当前网址到剪贴板
`yf` |      复制链接地址到剪贴板
`gf` |      向前切换到下一个框架
`gF` |      聚焦主框架/顶部框架
<!--rehype:className=shortcuts left-align-->

### 导航到新页面

快捷键     | 功能
:-- | ---
`o` | 打开网址、书签或历史记录条目
`O` | 在新标签页中打开网址、书签或历史记录条目
`b` | 打开书签
`B` | 在新标签页中打开书签
<!--rehype:className=shortcuts left-align-->

### 浏览您的历史

快捷键 | 功能
:-- | ---
`H`  |     后退到历史记录
`L`  |     前进到历史记录
<!--rehype:className=shortcuts left-align-->

### 操作选项卡
<!--rehype:wrap-class=row-span-2-->

快捷键 | 功能
:-- | ---
`J, gT`  | 向左切换一个标签页
`K, gt`  | 向右切换一个标签页
`g0`     | 跳转到第一个标签页</br>使用 ng0 跳转到第 n 个标签页
`g$`     | 跳转到最后一个标签页
`^`      | 访问上一个访问过的标签页
`t`      | 创建新标签页
`yt`     | 复制当前标签页
`x`      | 关闭当前标签页
`X`      | 恢复关闭的标签页（撤销 'x' 命令）
`T`      | 搜索打开的标签页
`W`      | 将当前标签页移动到新窗口
`<a-p>` | 固定/取消固定当前标签页
<!--rehype:className=shortcuts left-align-->

### 链接操作

| 快捷键     | 功能                       |
| -------- | -------------------------- |
| `f`      | 打开链接                   |
| `F`      | 在新标签页中打开链接       |
| `gf`     | 打开下一个框架             |
| `gu`     | 进入当前URL的父级路径      |
| `gU`     | 进入当前URL的根路径        |
<!--rehype:className=shortcuts left-align-->

### 标签页操作

| 快捷键     | 功能                       |
| -------- | -------------------------- |
| `J`      | 切换到左边的标签页         |
| `K`      | 切换到右边的标签页         |
| `t`      | 创建新标签页               |
| `x`      | 关闭当前标签页             |
| `X`      | 恢复最近关闭的标签页       |
| `T`      | 搜索打开的标签页           |
<!--rehype:className=shortcuts left-align-->

### 搜索与复制

| 快捷键     | 功能                       |
| -------- | -------------------------- |
| `/`      | 在页面中搜索               |
| `n`      | 下一个搜索结果             |
| `N`      | 上一个搜索结果             |
| `yy`     | 复制当前页面的URL          |
| `yf`     | 复制链接                   |
<!--rehype:className=shortcuts left-align-->

### 插入模式

| 快捷键     | 功能                       |
| -------- | -------------------------- |
| `i`      | 进入插入模式               |
| `I`      | 进入插入模式（已聚焦元素） |
<!--rehype:className=shortcuts left-align-->

### 开发者工具

| 快捷键     | 功能                       |
| -------- | -------------------------- |
| `gi`     | 聚焦第一个输入框           |
| `gI`     | 聚焦最后一个输入框         |
| `gs`     | 查看页面源代码             |
| `gf`     | 打开下一个框架             |
| `gF`     | 打开所有框架               |
<!--rehype:className=shortcuts left-align-->

另见
----

- [Vimium 官方文档](https://github.com/philc/vimium)
