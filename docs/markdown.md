Markdown 备忘清单
===

这是 Markdown 语法的快速参考备忘单。


Markdown 快速参考
----

### 标题 (atx 风格)

```markdown
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

### 标题 (setext 风格)

```markdown
Header 1
========
```

```markdown
Header 2
--------
```


### 块引用

```markdown
> 这是一个
> 块引用
>
> > 嵌套
> > 块引用
```

### 无序列表
<!--rehype:data-wrap-style=grid-row: span 2/span 2;-->

<!--rehype:-->
```markdown
* Item 1
* Item 2
    * item 3a
    * item 3b
```

或者

```markdown
- Item 1
- Item 2
```

或者

```markdown
+ Item 1
+ Item 2
```
或者

```markdown
- [ ] Checkbox off
- [x] Checkbox on
```

### 有序列表

```markdown
1. Item 1
2. Item 2
    a. item 3a
    b. item 3b
```



### 链接

```markdown
[link](http://google.com)
```

```markdown
[link][google]
[google]: http://google.com
```

```markdown
<http://google.com>
```

### 强调

```markdown
*斜体*
_斜体_
```

```markdown
**粗体**
__粗体__
```

```markdown
`内联代码`
~~删除~~
```

### 水平线

连字符

```markdown
---
```

星号

```markdown
***
```

下划线

```markdown
___
```





### 代码

~~~markdown
```javascript
console.log("This is a block code")
```
~~~

```markdown
~~~css
.button { border: none; }
~~~
```


```markdown
    4 空格缩进做一个代码块
```


#### 内联代码

```markdown
`Inline code` 周围有反引号
```

### 表格
<!--rehype:data-wrap-style=grid-column: span 2/span 2;-->

<!--rehype:-->
```markdown
|     左栏     |     中间栏     |     右栏     |
|:------------|:-------------:|-------------:|
| 单元格 1     |   居中         |        $1600 |
| 单元格 2     |   单元格 3     |          $12 |
```

简单的风格

```markdown
    左栏     |     中间栏     |     右栏
:----------:|:-------------:|:-----------:
  单元格 1   |   居中         |    $1600
  单元格 2   |   单元格 3     |     $12
```

Markdown 表格生成器：[tableconvert.com](https://tableconvert.com/)

### 图片
<!--rehype:data-wrap-style=grid-column: span 2/span 2;-->

<!--rehype:-->
```markdown
![GitHub Logo](/images/logo.png)

![Alt Text](url)
```

#### 带链接的图片

```markdown
[![GitHub Logo](/images/logo.png)](https://github.com/)

[![Alt Text](image_url)](link_url)
```

#### 参考风格

```markdown
![alt text][logo]

[logo]: /images/logo.png "Logo Title"
```


### 反斜杠转义

| 字符 | 转义 | 描述 |
|------------|--------|-------------|
| \\         | \\\\   | backslash 反斜杠             |
| \`         | \\\`   | backtick 反引号              |
| \*         | \\\*   | asterisk 星号                |
| \_         | \\\_   | underscore 下划线            |
| \{\}       | \\\{\} | curly braces 花括号          |
| \[\]       | \\\[\] | square brackets 方括号       |
| \(\)       | \\\(\) | parentheses 圆括号           |
| \#         | \\\#   | hash mark 哈希标记           |
| \+         | \\\+   | plus sign 加号               |
| \-         | \\\-   | minus sign \(hyphen\) 减号(连字符) |
| \.         | \\\.   | dot 点                      |
| \!         | \\\!   | exclamation mark 感叹号      |