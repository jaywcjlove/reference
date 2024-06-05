Vimium 备忘清单
===

这是开始使用 [Vimium](https://github.com/philc/vimium) 浏览器扩展的快速参考备忘单，可以帮助用户更高效地浏览网页

入门
----

### 功能特点
<!--rehype:wrap-class=row-span-2-->

#### 键盘导航

- 使用类似 Vim 的快捷键进行网页滚动、链接打开、标签页管理等操作。
- 例如，通过按下 `f` 键可以为页面中的所有链接生成快捷键标签，按相应的键就可以打开对应的链接。

#### 快捷键自定义

- 用户可以根据自己的习惯自定义各种快捷键，使其更加符合个人使用习惯。

#### 无鼠标操作

- 通过键盘快捷键几乎可以完成所有浏览器操作，从而极大减少对鼠标的依赖，提高工作效率。

### 安装

#### **Chrome**

- [Chrome web store](https://chromewebstore.google.com/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)

#### **Edge**

- [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/vimium/djmieaghokpkpjfbpelnlkfgfjapaopa)

#### **Firefox**

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

| 快捷键     | 功能                       |
| -------- | -------------------------- |
| `?`      | 显示帮助                   |
| `h`      | 向左滚动                   |
| `j`      | 向下滚动                   |
| `k`      | 向上滚动                   |
| `l`      | 向右滚动                   |
| `gg`     | 滚动到页面顶部             |
| `G`      | 滚动到页面底部             |
| `d`      | 向下滚动半页               |
| `u`      | 向上滚动半页               |
| `r`      | 刷新页面                   |
| `H`      | 后退                       |
| `L`      | 前进                       |
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
