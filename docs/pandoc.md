Pandoc 备忘清单
===

Pandoc 是一个文档转换器，这个 [pandoc](https://pandoc.org/) 备忘单包含 pandoc 命令和一些常见的 pandoc 技巧

入门
---

### 语法

```bash
$ pandoc -s [source file] -o [output file]
```

---

- [Pandoc 官方文档](https://pandoc.org/)

#### 安装

安装命令 | 环境
:-|-
`$ brew install pandoc`   | macos
`$ choco install pandoc`    | windows

#### Debian/Ubuntu

```bash
$ sudo apt-get update
$ sudo apt-get install pandoc
```

#### Fedora

```bash
$ sudo dnf install pandoc
```

#### Arch Linux

```bash
$ sudo pacman -S pandoc
```

### 将 LaTeX 转换为 MS Word
<!--rehype:wrap-class=col-span-2-->

简单的 `.tex` 到 `.docx`

```bash
$ pandoc -s file.tex -o file.docx
```

将 `.tex` 转换为 `.docx` 并使用默认引文

```bash
$ pandoc -s file.tex --citeproc --bibliography=bib_library.bib -o file.docx
```

将 `.tex` 文件转换为 `.docx` 文件，并注明具体引文

```bash
$ pandoc -s file.tex --citeproc --bibliography=bib_library.bib --csl=apa.csl -o file.docx
```

`.tex` 到 `.docx`，带交叉引用

```bash
$ pandoc -s file.tex --filter pandoc-crossref -o file.docx
```

使用示例
---

### 转换文件格式

```bash
$ pandoc input.md -o output.pdf
```

### 支持的输入格式

```bash
$ pandoc -s input.txt -o output.html
```

### 自定义输出格式

```bash
$ pandoc input.md --to=latex -o output.tex
```

### 添加元数据

```bash
$ pandoc input.md -o output.pdf --metadata title="My Document"
```
<!--rehype:className=wrap-text-->

### 从 URL 转换

```bash
$ pandoc https://example.com/document.md -o output.pdf
```
<!--rehype:className=wrap-text-->

### 生成幻灯片

```bash
$ pandoc input.md -t beamer -o output.pdf
```

### 合并文件

```bash
$ pandoc file1.md file2.md -o output.pdf
```

### 指定样式文件

```bash
$ pandoc input.md -o output.pdf --css=style.css
```
<!--rehype:className=wrap-text-->

### 转换为 AsciiDoc

```bash
$ pandoc input.md -o output.asciidoc
```

### 转换为 Docx 格式

```bash
$ pandoc input.md -o output.docx
```

### 执行 Lua 过滤器

```bash
$ pandoc input.md --lua-filter=custom-filter.lua -o output.pdf
```
<!--rehype:className=wrap-text-->

### 自动生成目录

```bash
$ pandoc input.md -o output.pdf --toc
```

### 禁用目录编号

```bash
$ pandoc input.md -o output.pdf --toc --toc-depth=2
```
<!--rehype:className=wrap-text-->

### 显示详细信息

```bash
$ pandoc input.md -o output.pdf -v
```

### 查看支持的输出格式

```bash
$ pandoc --list-output-formats
```
