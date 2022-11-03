Contributing 贡献
====

感谢您对**备忘清单**贡献的兴趣👍👍，是像您这样的人使 [`Quick Reference`](https://jaywcjlove.github.io/reference) 成为如此出色的网站 🎉🎉。随时提交问题和增强请求。

`docs/{filename}.md` 文件将被处理成备忘清单，让我们创建或编辑一个 `markdown` 文件：

## 前沿问题

```markdown
备忘清单 标题
===

这是您可以在 Quick Reference 备忘清单上使用的样式参考！【备忘清单介绍】
```

只需要 `标题<h1>` 和`介绍`(标题下面)。脚本会自动识别，通过 GitHub Actions 自动发布 [`Quick Reference`](https://jaywcjlove.github.io/reference) 网站。

## 目录结构

```bash
.
├── CONTRIBUTING.md   # 贡献说明
├── Dockerfile
├── LICENSE
├── README.md         # Home(首页) 内容
├── dist              # 编译后的静态资源目录
├── docs              # Markdown 文档（快速参考备忘清单【速查表】）
│   ├── bash.md
│   ├── ....
│   └── yaml.md
├── package.json
└── scripts           # MD 转 HTML 的编译脚本
    ├── assets        # 存放首页 svg 图标文件资源，与 `dosc` 文件名对应
    ├── ....
    └── watch.mjs
```

## CSS 类注释

[`Quick Reference`](https://jaywcjlove.github.io/reference) 使用 [`@wcj/markdown-to-html`](https://github.com/jaywcjlove/markdown-to-html) 转换 `Markdown`，并使用 [`rehype-attr`](https://github.com/jaywcjlove/rehype-attr) 插件让其支持通过其注释语法添加类和样式。 此外，您可以在 Quick Reference 备忘清单上使用样式参考：https://jaywcjlove.github.io/reference/docs/quickreference.html

最后，参考现有备忘清单的源代码是一个好习惯！

## 首页导航

[`Quick Reference`](https://jaywcjlove.github.io/reference) 的首页存放在仓库的根目录 `README.md`，[`Quick Reference`](https://jaywcjlove.github.io/reference) 是通过这个 `README.md` 自动生成首页导航，下面是导航实例：

```markdown
## Linux 命令

[Cron](./docs/cron.md)<!--rehype:style=background: rgb(239 68 68/var(\-\-bg\-opacity));-->
[Git](./docs/git.md)<!--rehype:style=background: rgb(215 89 62/var(\-\-bg\-opacity));-->
<!--rehype:class=home-card-->
```

首页导航图标存放在 `scripts/assets` 目录中，如果你的备忘清单定义为 `docs/cron.md`，那么你的图标就定义为 `cron.svg` 存放到 `scripts/assets` 目录中，重新编译首页当行菜单就拥有了图标。

- 图标存放在 [`scripts/assets`](https://github.com/jaywcjlove/reference/blob/main/scripts/assets) 目录中
- 图片名称与清单名称保持一致 `cron.md` -> `cron.svg` (注意大小写)
- SVG 图标尺寸 `<svg height="1em" width="1em"`
- SVG 图标颜色使用继承颜色值 `<svg fill="currentColor"`

#### 提示配置

```markdown
[Django](./docs/djiango.md)<!--rehype:style=background: rgb(12 75 51/var(\-\-bg\-opacity));&class=contributing-->
```

添加 `contributing` 类名，会在卡片下方添加 _`👆待完善需要您的参与`_，添加 `data-info=👆看看还缺点儿什么？`，更换默认提示文本。


```markdown
[Django](./docs/djiango.md)<!--rehype:style=background: rgb(12 75 51/var(\-\-bg\-opacity));&class=tag&data-lang=Python-->
```

添加 `class=tag&data-lang=Python` 类名和参数，会在卡片右上角标记 _`Python`_

## 本地开发

```bash
npm i          # 安装依赖
npm run build  # 编译输出 HTML
npm run start  # 监听 md 文件编译输出 HTML
```