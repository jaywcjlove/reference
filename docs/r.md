R 备忘清单
===

该备忘单提供了使用 R 语言的示例，涵盖 R 语言基础知识、控制流、类型、结构/类、运算符、函数方法等

入门
---

### 获取帮助

访问帮助文件

```r
?mean
# 获取特定功能的帮助
help.search('weighted mean')
# 在帮助文件中搜索单词或短语
help(package = 'dplyr')
# 查找软件包的帮助。
```

有关对象的更多信息

```r
str(iris)
# 获取对象结构的摘要
class(iris)
# 查找对象所属的类
```

### 下载和使用库

```r
install.packages('dplyr')
# 从 CRAN 下载并安装软件包
install.packages(“BiocManager”)
library(BiocManager)
BiocManager::install("dplyr")
# 使用Bioconductor的BiocManager包下载并安装软件包
devtools::install_github("clusterProfiler")
# 直接从github中下载并安装软件包
library(dplyr)
# 将包加载到会话中，使所有其功能可供使用
dplyr::select
# 使用包中的特定函数
data(iris)
# 将内置数据集加载到环境中。
```

### 工作目录

查找当前工作目录（其中找到输入并发送输出）

```r
getwd()
```

更改当前工作目录

```r
setwd(‘C://file/path’)
```

使用 RStudio 中的项目来设置工作目录到您正在使用的文件夹

基础入门
---

### 变量和赋值

```R
x <- 10   # 使用箭头赋值
y = 20    # 或者直接使用等号赋值
```

### 数据类型

```R
numeric_var <- 3.14   # 数值型
character_var <- "hello"  # 字符串
logical_var <- TRUE   # 逻辑型
```

### 向量和列表
<!--rehype:wrap-class=row-span-2-->

```R
# 向量
numeric_vector <- c(1, 2, 3, 4)
character_vector <- c("apple", "orange", "banana")

# 列表
my_list <- list(name = "John", age = 30, city = "New York")
```
<!--rehype:className=wrap-text-->

向量和操作

```r
# 创建向量
numbers <- c(1, 2, 3, 4, 5)
# 计算向量的和
sum_result <- sum(numbers)
# 计算向量的平均值
mean_result <- mean(numbers)
```

### 数据框(Data Frame)

```R
my_df <- data.frame(name = c("John", "Alice"), age = c(30, 25))

# 创建数据框
student_data <- data.frame(
  name = c("John", "Alice", "Bob"),
  age = c(25, 23, 22),
  grade = c("A", "B", "C")
)

# 显示数据框
print(student_data)
```
<!--rehype:className=wrap-text-->

### 函数

```R
# 定义函数
add_numbers <- function(a, b) {
  result <- a + b
  return(result)
}

# 调用函数
sum_result <- add_numbers(10, 5)
```

### 条件语句

```R
if (x > 0) {
  print("Positive")
} else {
  print("Non-positive")
}
```

### for 循环语句

```R
for (i in 1:5) {
  print(i)
}
```

### while 循环

```r
counter <- 1
while (counter <= 5) {
  print(counter)
  counter <- counter + 1
}
```

### 数据读取和输出

```R
# 读取数据
my_data <- read.csv("data.csv")
# 输出数据
write.csv(my_data, "output.csv")
```

### 清理工作空间

```r
# 清空所有变量
rm(list = ls())
# 退出 R
q()
```

图形绘制
---

### 散点图

```R
plot(x, y)
```

### 直方图

```R
hist(data)
```

### 线图

```R
plot(x, y, type = "l")
```

### 绘制散点图

```R
x <- c(1, 2, 3, 4, 5)
y <- c(2, 4, 5, 6, 7)
plot(x, y, main = "Scatter Plot", xlab = "X-axis", ylab = "Y-axis")
```
<!--rehype:className=wrap-text-->

### 绘制直方图

```R
data <- c(1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5)
hist(data, main = "Histogram", xlab = "Value", col = "lightblue")
```
<!--rehype:className=wrap-text-->

### 绘制折线图

```R
x <- c(1, 2, 3, 4, 5)
y <- c(2, 4, 5, 6, 7)
plot(x, y, type = "l", main = "Line Plot", xlab = "X-axis", ylab = "Y-axis")
```
<!--rehype:className=wrap-text-->

向量
---

### 创建向量
<!--rehype:wrap-class=col-span-2-->

:- | - | -
-------|-------|-------
`c(2, 4, 6)` | 2 4 6 | 将元素连接成向量
`2:6` | 2 3 4 5 6 | 整数序列
`seq(2, 3, by=0.5)` | 2.0 2.5 3.0 | 复杂的序列
`rep(1:2, times=3)` | 1 2 1 2 1 2 | 重复向量
`rep(1:2, each=3)` | 1 1 1 2 2 2 | 重复向量的元素

### 选择向量元素
<!--rehype:wrap-class=row-span-2-->

#### 按位置

:- | -
----|----
`x[4]` | 第四个元素
`x[-4]` | 除了第四个之外的所有
`x[2:4]` | 元素二到四
`x[-(2:4)]` | 除二到四之外的所有元素
`x[c(1, 5)]` | 元素一和元素五
<!--rehype:className=left-align-->

#### 按值

:- | -
----|----
`x[x == 10]` | 等于 10 的元素
`x[x < 0]` | 所有元素小于零
`x[x %in% c(1, 2, 5)]` | 集合 1, 2, 5 中的元素
<!--rehype:className=left-align-->

#### 命名向量

:- | -
----|----
`x['apple']` | 名为“apple”的元素。
<!--rehype:className=left-align-->

### 重复向量的元素

:- | -
----|----
`sort(x)` | 返回排序后的 x
`rev(x)` | 返回 x 的反转
`table(x)` | 查看值的计数
`unique(x)`| 查看唯一值
<!--rehype:className=left-align-->

另见
---

- [全面了解Base R](https://blanket58.github.io/books/study-notes-of-R/) _(github.io)_
- [R 语言官网](https://www.r-project.org/) _(r-project.org)_
- [数据科学 R](https://r4ds.hadley.nz/) _(hadley.nz)_
- [使用 R 进行整洁的建模](https://www.tmwr.org/) _(tmwr.org)_
- [在 R 中使用 mlr3 进行应用机器学习](https://mlr3book.mlr-org.com/) _(mlr-org.com)_
- [深度学习](https://srdas.github.io/DLBook/) _(github.io)_
- [搜索任何与 R 相关的内容](https://rdrr.io/) _(rdrr.io)_
- [R 文档](https://www.rdocumentation.org/) _(rdocumentation.org)_
