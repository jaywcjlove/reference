Conventional Commits 备忘清单
===

快速精通 Conventional Commits。

入门
----

### 示例
<!--rehype:wrap-class=row-span-1-->

|   类型   |  描述 |
| ----------|------------ |
| `feat:`   | 新特性     |
| `fix(scope):`   | 修复 scope 中的 Bug |
| `feat!:` / `feat(scope)!:` | breaking change /  重构 API |
| `chore(deps):` | 更新依赖 |
<!--rehype:className=left-align-->

### Commit 类型
<!--rehype:wrap-class=col-span-2-->

|   类型   |  描述 |
| ----------|------------ |
| `build:` | 变更影响的是**构建系统**或者**外部依赖** (如: gulp, npm) |
| `ci:` | 修改了 CI 配置文件或脚本 (如: Github Action, Travis) |
| `chore:` | **【重要】** 变更不影响源代码或测试（如更新了辅助工具、库等) |
| `docs:` | 只修改了文档 |
| `feat:` | **【重要】** 一个新特性 |
| `fix:` | **【重要】** 修复了一个 Bug |
| `perf:` | 增强性能的代码变更 |
| `refactor:` | 并非修复 Bug 或添加新特性的代码变更 |
| `revert:` | 回退代码 |
| `style:` | 变更不影响一些有意义的代码 (如: 删除空格、格式化代码、添加分号等) |
| `test:` | 添加测试代码或修正已有的测试 |
<!--rehype:className=left-align-->

另见
---

- [Conventional Commits 官方网站](https://www.conventionalcommits.org/en/v1.0.0/) _(conventionalcommits.org)_
- [Conventional Commits Cheatsheet](https://gist.github.com/Zekfad/f51cb06ac76e2457f11c80ed705c95a3) _(gist.github.com)_
