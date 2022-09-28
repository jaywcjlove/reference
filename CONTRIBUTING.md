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

## 本地开发

```bash
npm i          # 安装依赖
npm run build  # 编译生成静态页面
```