MATLAB 备忘清单
===

这个快速参考备忘单提供了使用 [MATLAB](https://mathworks.cn/) 科学计算语言快速入门的示例介绍

入门
---

### 介绍

MATLAB 是 `matrix laboratory` 的缩写形式

----

- [MATLAB 官网](https://www.mathworks.com)
- [MATLAB 官网(中文)](https://ww2.mathworks.cn/)

### 矩阵和数组运算
<!--rehype:wrap-class=row-span-3-->

MATLAB 允许您使用单一的算术运算符或函数来处理矩阵中的所有值

```matlab
a + 10
```

MATLAB 将执行上述语句，并返回以下结果：

```
ans = 3×3
    11    13    15
    12    14    16
    17    18    20
```

----

```matlab
sin(a)
```

MATLAB 将执行上述语句，并返回以下结果：

```
ans = 3×3
    0.8415    0.1411   -0.9589
    0.9093   -0.7568   -0.2794
    0.6570    0.9894   -0.5440
```

要转置矩阵，请使用单引号 (`'`)

```matlab
a'
```

----

```
ans = 3×3
     1     2     7
     3     4     8
     5     6    10
```

使用 `*` 运算符执行标准矩阵乘法，这将计算行与列之间的内积

```matlab
p = a*inv(a)
```

----

```
p = 3×3
    1.0000         0         0
         0    1.0000         0
         0         0    1.0000
```

### 串联
<!--rehype:wrap-class=row-span-2-->

串联是连接数组以便形成更大数组的过程。实际上，第一个数组是通过将其各个元素串联起来而构成的。成对的方括号 `[]` 即为串联运算符。

```matlab
A = [a,a]
```

----

```
A = 3×6

     1     3     5     1     3     5
     2     4     6     2     4     6
     7     8    10     7     8    10
```

使用逗号将彼此相邻的数组串联起来称为水平串联。每个数组必须具有相同的行数。同样，如果各数组具有相同的列数，则可以使用分号垂直串联。

```matlab
A = [a; a]
```

----

```
A = 6×3

     1     3     5
     2     4     6
     7     8    10
     1     3     5
     2     4     6
     7     8    10
```

### 矩阵和数组
<!--rehype:wrap-class=row-span-3-->

要创建每行包含四个元素的数组，请使用逗号 (`,`) 或空格分隔各元素

```matlab
a = [1 2 3 4]
```

MATLAB 将执行上述语句，并返回以下结果：

```
a = 1×4
     1     2     3     4
```

#### 创建包含多行的矩阵

```matlab
a = [1 3 5; 2 4 6; 7 8 10]
```

----

```
a = 3×3
     1     3     5
     2     4     6
     7     8    10
```

#### 由零组成的 5×1 列向量

```matlab
z = zeros(5,1)
```

----

```
z = 5×1
     0
     0
     0
     0
     0
```

### 复数

复数包含实部和虚部，虚数单位是 -1 的平方根。

```matlab
sqrt(-1)
```

----

```
ans = 0.0000 + 1.0000i
```

要表示复数的虚部，请使用 i 或 j。

```matlab
c = [3+4i, 4+3j; -i, 10j]
```

----

```
c = 2×2 complex

   3.0000 + 4.0000i   4.0000 + 3.0000i
   0.0000 - 1.0000i   0.0000 +10.0000i
```

语言基础知识
----

### 输入命令

:- | :-
:- | :-
[ans](https://ww2.mathworks.cn/help/matlab/ref/ans.html) | 最近计算的答案
[clc](https://ww2.mathworks.cn/help/matlab/ref/clc.html) | 清空命令行窗口
[diary](https://ww2.mathworks.cn/help/matlab/ref/diary.html) | 将命令行窗口文本记录到日志文件中
[format](https://ww2.mathworks.cn/help/matlab/ref/format.html) | 设置输出显示格式
[home](https://ww2.mathworks.cn/help/matlab/ref/home.html) | 发送光标复位
[iskeyword](https://ww2.mathworks.cn/help/matlab/ref/iskeyword.html) | 确定输入是否为 <span class="trademark">MATLAB</span> 关键字
[more](https://ww2.mathworks.cn/help/matlab/ref/more.html) | 控制命令行窗口中的分页输出
[commandwindow](https://ww2.mathworks.cn/help/matlab/ref/commandwindow.html) | 选择命令行窗口
[commandhistory](https://ww2.mathworks.cn/help/matlab/ref/commandhistory.html) | 打开命令历史记录窗口

#### 对象

:- | :-
:- | :-
[DisplayFormatOptions](https://ww2.mathworks.cn/help/matlab/ref/ans.html) | 命令行窗口中的输出显示格式

### 矩阵和数组
<!--rehype:wrap-class=row-span-5-->

创建和合并数组

:- | :-
:- | :-
[zeros](https://ww2.mathworks.cn/help/matlab/ref/zeros.html) | 创建全零数组
[ones](https://ww2.mathworks.cn/help/matlab/ref/ones.html) | 创建全部为 1 的数组
[rand](https://ww2.mathworks.cn/help/matlab/ref/rand.html) | 均匀分布的随机数
[true](https://ww2.mathworks.cn/help/matlab/ref/true.html) | 逻辑值 1（真）
[false](https://ww2.mathworks.cn/help/matlab/ref/false.html) | 逻辑 0（假）
[eye](https://ww2.mathworks.cn/help/matlab/ref/eye.html) | 单位矩阵
[diag](https://ww2.mathworks.cn/help/matlab/ref/diag.html) | 创建对角矩阵或获取矩阵的对角元素
[blkdiag](https://ww2.mathworks.cn/help/matlab/ref/blkdiag.html) | 分块对角矩阵
[cat](https://ww2.mathworks.cn/help/matlab/ref/double.cat.html) | 串联数组。
[horzcat](https://ww2.mathworks.cn/help/matlab/ref/horzcat.html) | 水平串联数组
[vertcat](https://ww2.mathworks.cn/help/matlab/ref/vertcat.html) | 垂直串联数组
[repelem](https://ww2.mathworks.cn/help/matlab/ref/repelem.html) | 重复数组元素副本
[repmat](https://ww2.mathworks.cn/help/matlab/ref/repmat.html) | 重复数组副本

创建网格

:- | :-
:- | :-
[linspace](https://ww2.mathworks.cn/help/matlab/ref/linspace.html) | 生成线性间距向量
[logspace](https://ww2.mathworks.cn/help/matlab/ref/logspace.html) | 生成对数间距向量
[freqspace](https://ww2.mathworks.cn/help/matlab/ref/freqspace.html) | 频率响应的频率间距
[meshgrid](https://ww2.mathworks.cn/help/matlab/ref/meshgrid.html) | 二维和三维网格
[ndgrid](https://ww2.mathworks.cn/help/matlab/ref/ndgrid.html) | N 维空间中的矩形网格

确定大小、形状和排序

:- | :-
:- | :-
[length](https://ww2.mathworks.cn/help/matlab/ref/length.html) | 最大数组维度的长度
[size](https://ww2.mathworks.cn/help/matlab/ref/size.html) | 数组大小
[ndims](https://ww2.mathworks.cn/help/matlab/ref/double.ndims.html) | 数组维度数目
[numel](https://ww2.mathworks.cn/help/matlab/ref/double.numel.html) | 数组元素的数目
[isscalar](https://ww2.mathworks.cn/help/matlab/ref/isscalar.html) | 确定输入是否为标量
[issorted](https://ww2.mathworks.cn/help/matlab/ref/issorted.html) | 确定数组是否已排序
[issortedrows](https://ww2.mathworks.cn/help/matlab/ref/issortedrows.html) | 确定矩阵或表的行是否已排序
[isvector](https://ww2.mathworks.cn/help/matlab/ref/isvector.html) | 确定输入是否为向量
[ismatrix](https://ww2.mathworks.cn/help/matlab/ref/ismatrix.html) | 确定输入是否为矩阵
[isrow](https://ww2.mathworks.cn/help/matlab/ref/isrow.html) | 确定输入是否为行向量
[iscolumn](https://ww2.mathworks.cn/help/matlab/ref/iscolumn.html) | 确定输入是否为列向量
[isempty](https://ww2.mathworks.cn/help/matlab/ref/isempty.html) | 确定数组是否为空

重构和重新排列

:- | :-
:- | :-
[sort](https://ww2.mathworks.cn/help/matlab/ref/sort.html) | 对数组元素排序
[sortrows](https://ww2.mathworks.cn/help/matlab/ref/double.sortrows.html) | 对矩阵行或表行进行排序
[flip](https://ww2.mathworks.cn/help/matlab/ref/flip.html) | 翻转元素顺序
[fliplr](https://ww2.mathworks.cn/help/matlab/ref/fliplr.html) | 将数组从左向右翻转
[flipud](https://ww2.mathworks.cn/help/matlab/ref/flipud.html) | 将数组从上向下翻转
[rot90](https://ww2.mathworks.cn/help/matlab/ref/rot90.html) | 将数组旋转 90 度
[transpose](https://ww2.mathworks.cn/help/matlab/ref/transpose.html) | 转置向量或矩阵
[ctranspose](https://ww2.mathworks.cn/help/matlab/ref/ctranspose.html) | 复共轭转置
[permute](https://ww2.mathworks.cn/help/matlab/ref/permute.html) | 置换数组维度
[ipermute](https://ww2.mathworks.cn/help/matlab/ref/ipermute.html) | 逆置换数组维度。
[circshift](https://ww2.mathworks.cn/help/matlab/ref/circshift.html) | 循环平移数组
[shiftdim](https://ww2.mathworks.cn/help/matlab/ref/shiftdim.html) | 移动数组维度
[reshape](https://ww2.mathworks.cn/help/matlab/ref/reshape.html) | 重构数组
[squeeze](https://ww2.mathworks.cn/help/matlab/ref/squeeze.html) | 删除长度为 1 的维度

索引

:- | :-
:- | :-
[colon](https://ww2.mathworks.cn/help/matlab/ref/colon.html) | 向量创建、数组下标和 <code class="literal">for</code> 循环迭代
[end](https://ww2.mathworks.cn/help/matlab/ref/end.html) | 终止代码块或指示最大数组索引
[ind2sub](https://ww2.mathworks.cn/help/matlab/ref/ind2sub.html) | 将线性索引转换为下标
[sub2ind](https://ww2.mathworks.cn/help/matlab/ref/sub2ind.html) | 将下标转换为线性索引

### 数值类型
<!--rehype:wrap-class=row-span-2-->

创建数值变量

:- | :-
:- | :-
[double](https://ww2.mathworks.cn/help/matlab/ref/double.html) | 双精度数组
[single](https://ww2.mathworks.cn/help/matlab/ref/single.html) | 单精度数组
[int8](https://ww2.mathworks.cn/help/matlab/ref/int8.html) | 8 位有符号整数数组
[int16](https://ww2.mathworks.cn/help/matlab/ref/int16.html) | 16 位有符号整数数组
[int32](https://ww2.mathworks.cn/help/matlab/ref/int32.html) | 32 位有符号整数数组
[int64](https://ww2.mathworks.cn/help/matlab/ref/int64.html) | 64 位有符号整数数组
[uint8](https://ww2.mathworks.cn/help/matlab/ref/uint8.html) | 8 位无符号整数数组
[uint16](https://ww2.mathworks.cn/help/matlab/ref/uint16.html) | 16 位无符号整数数组
[uint32](https://ww2.mathworks.cn/help/matlab/ref/uint32.html) | 32 位无符号整数数组
[uint64](https://ww2.mathworks.cn/help/matlab/ref/uint64.html) | 64 位无符号整数数组

在数值类型之间转换

:- | :-
:- | :-
[cast](https://ww2.mathworks.cn/help/matlab/ref/cast.html) | 将变量转换为不同的数据类型
[typecast](https://ww2.mathworks.cn/help/matlab/ref/typecast.html) | 在不更改基础数据的情况下转换数据类型

查询类型和值

:- | :-
:- | :-
[allfinite](https://ww2.mathworks.cn/help/matlab/ref/allfinite.html") | Determine if all array elements are finite
[anynan](https://ww2.mathworks.cn/help/matlab/ref/anynan.html") | Determine if any array element is NaN
[isinteger](https://ww2.mathworks.cn/help/matlab/ref/isinteger.html) | 确定输入是否为整数数组
[isfloat](https://ww2.mathworks.cn/help/matlab/ref/isfloat.html) | 确定输入是否为浮点数组
[isnumeric](https://ww2.mathworks.cn/help/matlab/ref/isnumeric.html) | 确定输入是否为数值数组
[isreal](https://ww2.mathworks.cn/help/matlab/ref/isreal.html) | 确定数组是否使用复数存储
[isfinite](https://ww2.mathworks.cn/help/matlab/ref/isfinite.html) | 确定哪些数组元素为有限
[isinf](https://ww2.mathworks.cn/help/matlab/ref/isinf.html) | 确定哪些数组元素为无限值
[isnan](https://ww2.mathworks.cn/help/matlab/ref/isnan.html) | 确定哪些数组元素为 NaN

数值范围

:- | :-
:- | :-
[eps](https://ww2.mathworks.cn/help/matlab/ref/eps.html) | 浮点相对精度
[flintmax](https://ww2.mathworks.cn/help/matlab/ref/flintmax.html) | 浮点格式的最大连续整数
[Inf](https://ww2.mathworks.cn/help/matlab/ref/inf.html) | 创建所有值均为 `Inf` 的数组
[intmax](https://ww2.mathworks.cn/help/matlab/ref/intmax.html) | 特定整数类型的最大值
[intmin](https://ww2.mathworks.cn/help/matlab/ref/intmin.html) | 特定整数类型的最小值
[NaN](https://ww2.mathworks.cn/help/matlab/ref/nan.html) | 创建所有值均为 <code class="literal">NaN</code> 的数组
[realmax](https://ww2.mathworks.cn/help/matlab/ref/realmax.html) | 最大的正浮点数
[realmin](https://ww2.mathworks.cn/help/matlab/ref/realmin.html) | 最小标准浮点数

### 循环及条件语句

:- | :-
:- | :-
[if, elseif, else](https://ww2.mathworks.cn/help/matlab/ref/if.html) | 条件为 true 时执行语句
[switch, case, otherwise](https://ww2.mathworks.cn/help/matlab/ref/switch.html) | 执行多组语句中的一组
[for](https://ww2.mathworks.cn/help/matlab/ref/for.html) | 用来重复指定次数的 `for` 循环
[while](https://ww2.mathworks.cn/help/matlab/ref/while.html) | 条件为 true 时重复执行的 `while` 循环
[try, catch](https://ww2.mathworks.cn/help/matlab/ref/try.html) | 执行语句并捕获产生的错误
[break](https://ww2.mathworks.cn/help/matlab/ref/break.html) | 终止执行 for 或 while 循环
[return](https://ww2.mathworks.cn/help/matlab/ref/return.html) | 将控制权交还给调用脚本或函数
[continue](https://ww2.mathworks.cn/help/matlab/ref/continue.html) | 将控制传递给 `for` 或 `while` 循环的下一迭代
[pause](https://ww2.mathworks.cn/help/matlab/ref/pause.html) | 暂时停止执行 `MATLAB`
[parfor](https://ww2.mathworks.cn/help/matlab/ref/parfor.html) | 并行 for 循环
[end](https://ww2.mathworks.cn/help/matlab/ref/end.html) | 终止代码块或指示最大数组索引
<!--rehype:className=style-list-->

### 字符串数组

:- | :-
:- | :-
[string](https://ww2.mathworks.cn/help/matlab/ref/string.html) | 字符串数组
[strings](https://ww2.mathworks.cn/help/matlab/ref/strings.html) | 创建不包含字符的字符串数组
[join](https://ww2.mathworks.cn/help/matlab/ref/join.html) | 合并字符串
[plus](https://ww2.mathworks.cn/help/matlab/ref/plus.html) | 添加数字，追加字符串

### 字符数组

:- | :-
:- | :-
[char](https://ww2.mathworks.cn/help/matlab/ref/char.html) | 字符数组
[cellstr](https://ww2.mathworks.cn/help/matlab/ref/cellstr.html) | 转换为字符向量元胞数组
[blanks](https://ww2.mathworks.cn/help/matlab/ref/blanks.html) | 创建空白字符数组
[newline](https://ww2.mathworks.cn/help/matlab/ref/newline.html) | 创建换行符

### 字符或字符串数组

:- | :-
:- | :-
[compose](https://ww2.mathworks.cn/help/matlab/ref/compose.html) | 将数据格式化为多个字符串
[sprintf](https://ww2.mathworks.cn/help/matlab/ref/sprintf.html) | 将数据格式化为字符串或字符向量
[strcat](https://ww2.mathworks.cn/help/matlab/ref/strcat.html) | 水平串联字符串
[append](https://ww2.mathworks.cn/help/matlab/ref/append.html) | 合并字符串

### 字符或字符串 - 转换输入参数

:- | :-
:- | :-
[convertCharsToStrings](https://ww2.mathworks.cn/help/matlab/ref/convertcharstostrings.html) | 将字符数组转换为字符串数组，其他数组不变
[convertStringsToChars](https://ww2.mathworks.cn/help/matlab/ref/convertstringstochars.html) | 将字符串数组转换为字符数组，其他数组不变
[convertContainedStringsToChars](https://ww2.mathworks.cn/help/matlab/ref/convertcontainedstringstochars.html) | 在元胞数组或结构体的任何级别转换字符串数组
<!--rehype:className=style-list-->

### 字符或字符串 - 在数值和字符串之间转换

:- | :-
:- | :-
[double](https://ww2.mathworks.cn/help/matlab/ref/double.html) | 双精度数组
[string](https://ww2.mathworks.cn/help/matlab/ref/string.html) | 字符串数组
[str2double](https://ww2.mathworks.cn/help/matlab/ref/str2double.html) | 将字符串转换为双精度值
[num2str](https://ww2.mathworks.cn/help/matlab/ref/num2str.html) | 将数字转换为字符数组

### 字符或字符串 - 确定类型和属性
<!--rehype:wrap-class=row-span-2-->

数据类型

:- | :-
:- | :-
[ischar](https://ww2.mathworks.cn/help/matlab/ref/ischar.html) | 确定输入是否为字符数组
[iscellstr](https://ww2.mathworks.cn/help/matlab/ref/iscellstr.html) | 确定输入是否为字符向量元胞数组
[isstring](https://ww2.mathworks.cn/help/matlab/ref/isstring.html) | 确定输入是否为字符串数组
[isStringScalar](https://ww2.mathworks.cn/help/matlab/ref/isstringscalar.html) |  确定输入是否为包含一个元素的字符串数组

文本属性

:- | :-
:- | :-
[strlength](https://ww2.mathworks.cn/help/matlab/ref/strlength.html) | 字符串长度
[isstrprop](https://ww2.mathworks.cn/help/matlab/ref/isstrprop.html) | 确定输入字符串中的哪些字符属于指定类别
[isletter](https://ww2.mathworks.cn/help/matlab/ref/isletter.html) | 确定哪些字符为字母
[isspace](https://ww2.mathworks.cn/help/matlab/ref/isspace.html) | 确定哪些字符是空白字符

### 字符或字符串 - 查找和替换
<!--rehype:wrap-class=row-span-2-->

查找

:- | :-
:- | :-
[contains](https://ww2.mathworks.cn/help/matlab/ref/contains.html) | 确定字符串中是否有模式
[matches](https://ww2.mathworks.cn/help/matlab/ref/matches.html) | 确定模式是否与字符串匹配
[count](https://ww2.mathworks.cn/help/matlab/ref/count.html) | 计算字符串中模式的出现次数
[endsWith](https://ww2.mathworks.cn/help/matlab/ref/endswith.html) | 确定字符串是否以模式结尾
[startsWith](https://ww2.mathworks.cn/help/matlab/ref/startswith.html) | 确定字符串是否以模式开头
[strfind](https://ww2.mathworks.cn/help/matlab/ref/strfind.html) | 在其他字符串中查找字符串
[sscanf](https://ww2.mathworks.cn/help/matlab/ref/sscanf.html) | 从字符串读取格式化数据

替换

:- | :-
:- | :-
[replace](https://ww2.mathworks.cn/help/matlab/ref/replace.html) | 查找并替换一个或多个子字符串
[replaceBetween](https://ww2.mathworks.cn/help/matlab/ref/replacebetween.html) | 替换起点和终点之间的子字符串
[strrep](https://ww2.mathworks.cn/help/matlab/ref/strrep.html) | 查找并替换子字符串

### 字符串匹配模式 - 构建模式

:- | :-
:- | :-
[pattern](https://ww2.mathworks.cn/help/matlab/ref/pattern.html) | 用于搜索和匹配文本的模式

### 字符串匹配模式 - 字符匹配模式

:- | :-
:- | :-
[alphanumericsPattern](https://ww2.mathworks.cn/help/matlab/ref/alphanumericspattern.html) | 匹配字母和数字字符
[characterListPattern](https://ww2.mathworks.cn/help/matlab/ref/characterlistpattern.html) | 匹配列表中的字符
[digitsPattern](https://ww2.mathworks.cn/help/matlab/ref/digitspattern.html) |  匹配数字字符
[lettersPattern](https://ww2.mathworks.cn/help/matlab/ref/letterspattern.html) | 匹配字母字符
[whitespacePattern](https://ww2.mathworks.cn/help/matlab/ref/whitespacepattern.html) | 匹配空白字符
[wildcardPattern](https://ww2.mathworks.cn/help/matlab/ref/wildcardpattern.html) | 匹配尽可能少的任意类型的字符

### 字符串匹配模式 - 模式搜索规则

:- | :-
:- | :-
[optionalPattern](https://ww2.mathworks.cn/help/matlab/ref/optionalpattern.html) | 使模式匹配可选
[possessivePattern](https://ww2.mathworks.cn/help/matlab/ref/possessivepattern.html) | 匹配模式而不回溯
[caseSensitivePattern](https://ww2.mathworks.cn/help/matlab/ref/casesensitivepattern.html) | 以区分大小写的方式匹配模式
[caseInsensitivePattern](https://ww2.mathworks.cn/help/matlab/ref/caseinsensitivepattern.html) | 以不区分大小写的方式匹配模式
[asFewOfPattern](https://ww2.mathworks.cn/help/matlab/ref/asfewofpattern.html) | 模式匹配次数尽可能少
[asManyOfPattern](https://ww2.mathworks.cn/help/matlab/ref/asmanyofpattern.html) | 模式匹配次数尽可能多

### 字符串匹配模式 - 边界模式
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
[alphanumericBoundary](https://ww2.mathworks.cn/help/matlab/ref/alphanumericboundary.html) | 匹配字母数字字符与非字母数字字符之间的边界
[digitBoundary](https://ww2.mathworks.cn/help/matlab/ref/digitboundary.html) | 匹配数字字符和非数字字符之间的边界
[letterBoundary](https://ww2.mathworks.cn/help/matlab/ref/letterboundary.html) | 匹配字母字符和非字母字符之间的边界
[whitespaceBoundary](https://ww2.mathworks.cn/help/matlab/ref/whitespaceboundary.html) | 匹配空白字符和非空白字符之间的边界
[lineBoundary](https://ww2.mathworks.cn/help/matlab/ref/lineboundary.html) | 匹配行首或行尾
[textBoundary](https://ww2.mathworks.cn/help/matlab/ref/textboundary.html) | 匹配文本的开头或结尾
[lookAheadBoundary](https://ww2.mathworks.cn/help/matlab/ref/lookaheadboundary.html) | 匹配指定模式之前的边界
[lookBehindBoundary](https://ww2.mathworks.cn/help/matlab/ref/lookbehindboundary.html) | 匹配指定模式之后的边界
<!--rehype:className=style-list-->

### 字符串匹配模式 - 自定义模式显示

:- | :-
:- | :-
[maskedPattern](https://ww2.mathworks.cn/help/matlab/ref/maskedpattern.html) | 具有指定显示名称的模式
[namedPattern](https://ww2.mathworks.cn/help/matlab/ref/namedpattern.html) | 指定命名模式

### 字符串匹配模式 - 正则表达式

:- | :-
:- | :-
[regexp](https://ww2.mathworks.cn/help/matlab/ref/regexp.html) | 匹配正则表达式（区分大小写）
[regexpi](https://ww2.mathworks.cn/help/matlab/ref/regexpi.html) | 匹配正则表达式（不区分大小写）
[regexprep](https://ww2.mathworks.cn/help/matlab/ref/regexprep.html) | 使用正则表达式替换文本
[regexptranslate](https://ww2.mathworks.cn/help/matlab/ref/regexptranslate.html) | 将文本转换为正则表达式
[regexpPattern](https://ww2.mathworks.cn/help/matlab/ref/regexppattern.html) | 匹配指定正则表达式的模式

### 字符串匹配模式 - 联接和拆分

:- | :-
:- | :-
[join](https://ww2.mathworks.cn/help/matlab/ref/join.html) | 合并字符串
[plus](https://ww2.mathworks.cn/help/matlab/ref/plus.html) | 添加数字，追加字符串
[split](https://ww2.mathworks.cn/help/matlab/ref/split.html) | 在分隔符处拆分字符串
[splitlines](https://ww2.mathworks.cn/help/matlab/ref/splitlines.html) | 在换行符处拆分字符串
[strjoin](https://ww2.mathworks.cn/help/matlab/ref/strjoin.html) | 联接数组中的字符串
[strsplit](https://ww2.mathworks.cn/help/matlab/ref/strsplit.html) | 在指定分隔符处拆分字符串或字符向量
[strtok](https://ww2.mathworks.cn/help/matlab/ref/strtok.html) | 所选的字符串部分
[extract](https://ww2.mathworks.cn/help/matlab/ref/extract.html) | 从字符串中提取子字符串
[extractAfter](https://ww2.mathworks.cn/help/matlab/ref/extractafter.html) | 提取指定位置后的子字符串
[extractBefore](https://ww2.mathworks.cn/help/matlab/ref/extractbefore.html) | 提取指定位置前的子字符串
[extractBetween](https://ww2.mathworks.cn/help/matlab/ref/extractbetween.html) | 提取起点和终点之间的子字符串

### 字符串编辑
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
[erase](https://ww2.mathworks.cn/help/matlab/ref/erase.html) | 删除字符串内的子字符串
[eraseBetween](https://ww2.mathworks.cn/help/matlab/ref/erasebetween.html) | 删除起点和终点之间的子字符串
[extract](https://ww2.mathworks.cn/help/matlab/ref/extract.html) | 从字符串中提取子字符串
[extractAfter](https://ww2.mathworks.cn/help/matlab/ref/extractafter.html) | 提取指定位置后的子字符串
[extractBefore](https://ww2.mathworks.cn/help/matlab/ref/extractbefore.html) | 提取指定位置前的子字符串
[extractBetween](https://ww2.mathworks.cn/help/matlab/ref/extractbetween.html) | 提取起点和终点之间的子字符串
[insertAfter](https://ww2.mathworks.cn/help/matlab/ref/insertafter.html) | 在指定的子字符串后插入字符串
[insertBefore](https://ww2.mathworks.cn/help/matlab/ref/insertbefore.html) | 在指定的子字符串前插入字符串
[pad](https://ww2.mathworks.cn/help/matlab/ref/pad.html) | 为字符串添加前导或尾随字符
[strip](https://ww2.mathworks.cn/help/matlab/ref/strip.html) | 删除字符串中的前导和尾部字符
[lower](https://ww2.mathworks.cn/help/matlab/ref/lower.html) | 将字符串转换为小写
[upper](https://ww2.mathworks.cn/help/matlab/ref/upper.html) | 将字符串转换为大写
[reverse](https://ww2.mathworks.cn/help/matlab/ref/reverse.html) | 反转字符串中的字符顺序
[deblank](https://ww2.mathworks.cn/help/matlab/ref/deblank.html) | 删除字符串末尾的尾随空白
[strtrim](https://ww2.mathworks.cn/help/matlab/ref/strtrim.html) | 从字符串中删除前导和尾随空白
[strjust](https://ww2.mathworks.cn/help/matlab/ref/strjust.html) | 对齐字符串

### 字符串比较

:- | :-
:- | :-
[matches](https://ww2.mathworks.cn/help/matlab/ref/matches.html) | 确定模式是否与字符串匹配
[strcmp](https://ww2.mathworks.cn/help/matlab/ref/strcmp.html) | 比较字符串
[strcmpi](https://ww2.mathworks.cn/help/matlab/ref/strcmpi.html) | 比较字符串（不区分大小写）
[strncmp](https://ww2.mathworks.cn/help/matlab/ref/strncmp.html) | 比较字符串的前 <code class="literal">n</code> 个字符（区分大小写）
[strncmpi](https://ww2.mathworks.cn/help/matlab/ref/strncmpi.html) | 比较字符串的前 <code class="literal">n</code> 个字符（不区分大小写）

### 基本算术
<!--rehype:wrap-class=row-span-3-->

加法

- [+](https://ww2.mathworks.cn/help/matlab/ref/plus.html) 添加数字，追加字符串
- [sum](https://ww2.mathworks.cn/help/matlab/ref/sum.html) 数组元素总和
- [cumsum](https://ww2.mathworks.cn/help/matlab/ref/cumsum.html) 累积和
- [movsum](https://ww2.mathworks.cn/help/matlab/ref/movsum.html) 移动总和
<!--rehype:className=cols-2 style-none-->

减法

- [-](https://ww2.mathworks.cn/help/matlab/ref/minus.html) 减法
- [diff](https://ww2.mathworks.cn/help/matlab/ref/diff.html) 差分和近似导数
<!--rehype:className=cols-2 style-none-->

乘法

:- | :- | :-
:- | :- | :-
[.*](https://ww2.mathworks.cn/help/matlab/ref/times.html) | 乘法
[*](https://ww2.mathworks.cn/help/matlab/ref/mtimes.html) | 矩阵乘法
[prod](https://ww2.mathworks.cn/help/matlab/ref/prod.html) | 数组元素的乘积
[cumprod](https://ww2.mathworks.cn/help/matlab/ref/cumprod.html) | 累积乘积
[pagemtimes](https://ww2.mathworks.cn/help/matlab/ref/pagemtimes.html) | 按页矩阵乘法
[tensorprod](https://ww2.mathworks.cn/help/matlab/ref/tensorprod.html) | Tensor products between two tensors

除法

:- | :- | :-
:- | :- | :-
[./](https://ww2.mathworks.cn/help/matlab/ref/rdivide.html) | 数组右除
[.\\](https://ww2.mathworks.cn/help/matlab/ref/ldivide.html) | 数组左除
[/](https://ww2.mathworks.cn/help/matlab/ref/mrdivide.html) | 求解关于 x 的线性方程组 xA = B
[\\](https://ww2.mathworks.cn/help/matlab/ref/mldivide.html) | 求解关于 x 的线性方程组 Ax = B

幂

- [.^](https://ww2.mathworks.cn/help/matlab/ref/power.html) 按元素求幂
- [^](https://ww2.mathworks.cn/help/matlab/ref/mpower.html) 矩阵幂
<!--rehype:className=cols-2-->

转置

:- | :- | :-
:- | :- | :-
[.'](https://ww2.mathworks.cn/help/matlab/ref/transpose.html) | 转置向量或矩阵
['](https://ww2.mathworks.cn/help/matlab/ref/ctranspose.html) | 复共轭转置
[pagetranspose](https://ww2.mathworks.cn/help/matlab/ref/pagetranspose.html) | 按页转置
[pagectranspose](https://ww2.mathworks.cn/help/matlab/ref/pagectranspose.html) | 按页复共轭转置

数组符号

- [uminus](https://ww2.mathworks.cn/help/matlab/ref/uminus.html) 一元减法
- [uplus](https://ww2.mathworks.cn/help/matlab/ref/uplus.html) 一元加法
<!--rehype:className=cols-2-->

### 模除法和舍入

:- | :- | :-
:- | :- | :-
[mod](https://ww2.mathworks.cn/help/matlab/ref/mod.html) | 除后的余数（取模运算）
[rem](https://ww2.mathworks.cn/help/matlab/ref/rem.html) | 除后的余数
[idivide](https://ww2.mathworks.cn/help/matlab/ref/idivide.html) | 带有舍入选项的整除
[ceil](https://ww2.mathworks.cn/help/matlab/ref/ceil.html) | 向正无穷舍入
[fix](https://ww2.mathworks.cn/help/matlab/ref/fix.html) | 向零舍入
[floor](https://ww2.mathworks.cn/help/matlab/ref/floor.html) | 向负无穷舍入
[round](https://ww2.mathworks.cn/help/matlab/ref/round.html) | 四舍五入为最近的小数或整数

### 自定义二元函数

:- | :- | :-
:- | :- | :-
[bsxfun](https://ww2.mathworks.cn/help/matlab/ref/bsxfun.html) | 对两个数组应用按元素运算（启用隐式扩展）

### 关系运算

值的比较

:- | :- | :-
:- | :- | :-
[==](https://ww2.mathworks.cn/help/matlab/ref/eq.html) | 确定相等性
[&gt;=](https://ww2.mathworks.cn/help/matlab/ref/ge.html) | 决定大于或等于
[&gt;](https://ww2.mathworks.cn/help/matlab/ref/gt.html) | 确定大于
[&lt;=](https://ww2.mathworks.cn/help/matlab/ref/le.html) | 确定小于等于
[&lt;](https://ww2.mathworks.cn/help/matlab/ref/lt.html) | 确定小于
[~=](https://ww2.mathworks.cn/help/matlab/ref/ne.html) | 确定不相等性
[isequal](https://ww2.mathworks.cn/help/matlab/ref/isequal.html) | 确定数组相等性
[isequaln](https://ww2.mathworks.cn/help/matlab/ref/isequaln.html) | 测试数组相等性，将 `NaN` 值视为相等

### 逻辑（布尔）运算

true 或 false 条件

:- | :- | :-
:- | :- | :-
[Short-circuit &amp;&amp;, \|\|](https://ww2.mathworks.cn/help/matlab/ref/logicaloperatorsshortcircuit.html) | 具有短路功能的逻辑运算
[&amp;](https://ww2.mathworks.cn/help/matlab/ref/and.html) | 计算逻辑 `AND`
[~](https://ww2.mathworks.cn/help/matlab/ref/not.html) | 计算逻辑 `NOT`
[\|](https://ww2.mathworks.cn/help/matlab/ref/or.html) | 计算逻辑 `OR`
[xor](https://ww2.mathworks.cn/help/matlab/ref/xor.html) | 计算逻辑异 `OR`
[all](https://ww2.mathworks.cn/help/matlab/ref/all.html) | 确定所有的数组元素是为非零还是 `true`
[any](https://ww2.mathworks.cn/help/matlab/ref/any.html) | 确定是否有任何数组元素非零
[false](https://ww2.mathworks.cn/help/matlab/ref/false.html) | 逻辑 `0`（假）
[find](https://ww2.mathworks.cn/help/matlab/ref/find.html) | 查找非零元素的索引和值
[islogical](https://ww2.mathworks.cn/help/matlab/ref/islogical.html) | 确定输入是否为逻辑数组
[logical](https://ww2.mathworks.cn/help/matlab/ref/logical.html) | 将数值转换为逻辑值
[true](https://ww2.mathworks.cn/help/matlab/ref/true.html) | 逻辑值 `1`（真）

### 集合运算

并集、交集、集合关系

:- | :- | :-
:- | :- | :-
[intersect](https://ww2.mathworks.cn/help/matlab/ref/double.intersect.html) | 设置两个数组的交集
[ismember](https://ww2.mathworks.cn/help/matlab/ref/double.ismember.html) | 判断数组元素是否为集数组成员
[setdiff](https://ww2.mathworks.cn/help/matlab/ref/double.setdiff.html) | 设置两个数组的差集
[setxor](https://ww2.mathworks.cn/help/matlab/ref/double.setxor.html) | 设置两个数组的异或
[union](https://ww2.mathworks.cn/help/matlab/ref/double.union.html) | 设置两个数组的并集
[unique](https://ww2.mathworks.cn/help/matlab/ref/double.unique.html) | 数组中的唯一值
[ismembertol](https://ww2.mathworks.cn/help/matlab/ref/ismembertol.html) | 容差范围内的集合成员
[uniquetol](https://ww2.mathworks.cn/help/matlab/ref/uniquetol.html) | 容差内的唯一值
[join](https://ww2.mathworks.cn/help/matlab/ref/table.join.html) | 使用键变量按行合并两个表或时间表
[innerjoin](https://ww2.mathworks.cn/help/matlab/ref/innerjoin.html) | 两个表或时间表之间的内联
[outerjoin](https://ww2.mathworks.cn/help/matlab/ref/outerjoin.html) | 两个表或时间表之间的外联

### 按位运算

设置、偏移或比较特定位域

:- | :- | :-
:- | :- | :-
[bitand](https://ww2.mathworks.cn/help/matlab/ref/bitand.html) | 按位 `AND`
[bitor](https://ww2.mathworks.cn/help/matlab/ref/bitor.html) | 按位 `OR`
[bitxor](https://ww2.mathworks.cn/help/matlab/ref/bitxor.html) | 按位 `XOR`
[bitcmp](https://ww2.mathworks.cn/help/matlab/ref/bitcmp.html) | 按位补码
[bitget](https://ww2.mathworks.cn/help/matlab/ref/bitget.html) | 获取指定位置的位
[bitset](https://ww2.mathworks.cn/help/matlab/ref/bitset.html) | 设置指定位置的位
[bitshift](https://ww2.mathworks.cn/help/matlab/ref/bitshift.html) | 将位移动指定位数
[swapbytes](https://ww2.mathworks.cn/help/matlab/ref/swapbytes.html) | 交换字节顺序

数据导入和导出
---

### 文本文件 - 读取和写入表或时间表
<!--rehype:wrap-class=row-span-2-->

#### 基本导入和导出

:- | :- | :-
:- | :- | :-
[readtable](https://ww2.mathworks.cn/help/matlab/ref/readtable.html) | 基于文件创建表
[writetable](https://ww2.mathworks.cn/help/matlab/ref/writetable.html) | 将表写入文件
[readtimetable](https://ww2.mathworks.cn/help/matlab/ref/readtimetable.html) | 基于文件创建时间表
[writetimetable](https://ww2.mathworks.cn/help/matlab/ref/writetimetable.html) | 将时间表写入文件

#### 定义导入规则

:- | :-
:- | :-
[detectImportOptions](https://ww2.mathworks.cn/help/matlab/ref/detectimportoptions.html) | 基于文件内容生成导入选项
[delimitedTextImportOptions](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.html) | 为带分隔符的文本导入选项对象
[fixedWidthImportOptions](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.text.fixedwidthimportoptions.html) | 等宽文本文件的导入选项对象
[xmlImportOptions](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.xmlimportoptions.html) | 为 XML 文件导入选项对象
[htmlImportOptions](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.html.htmlimportoptions.html) | Import options object for HTML files
[wordDocumentImportOptions](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.word.worddocumentimportoptions.html) | `Microsoft Word` 文档文件的导入选项对象
[getvaropts](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.getvaropts.html) | 获取变量导入选项
[setvaropts](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.setvaropts.html) | 设置变量导入选项
[setvartype](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.setvartype.html) | 设置变量数据类型
[preview](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.preview.html) | 使用导入选项预览文件中的八行数据
<!--rehype:className=style-list-->

### 文本文件 - 读取和写入矩阵和数组

:- | :- | :-
:- | :- | :-
[readmatrix](https://ww2.mathworks.cn/help/matlab/ref/readmatrix.html) | 从文件中读取矩阵
[writematrix](https://ww2.mathworks.cn/help/matlab/ref/writematrix.html) | 将矩阵写入文件
[readcell](https://ww2.mathworks.cn/help/matlab/ref/readcell.html) | 从文件中读取元胞数组
[writecell](https://ww2.mathworks.cn/help/matlab/ref/writecell.html) | 将元胞数组写入文件
[readvars](https://ww2.mathworks.cn/help/matlab/ref/readvars.html) | 从文件中读取变量
[textscan](https://ww2.mathworks.cn/help/matlab/ref/textscan.html) | 从文本文件或字符串读取格式化数据
[type](https://ww2.mathworks.cn/help/matlab/ref/type.html) | 显示文件内容
[fileread](https://ww2.mathworks.cn/help/matlab/ref/fileread.html) | 以文本格式读取文件内容
[readlines](https://ww2.mathworks.cn/help/matlab/ref/readlines.html) | 以字符串数组形式读取文件行
[writelines](https://ww2.mathworks.cn/help/matlab/ref/writelines.html) | Write text to file

### 电子表格 - 读取和写入表或时间表
<!--rehype:wrap-class=row-span-2-->

基本导入和导出

:- | :- | :-
:- | :- | :-
[readtable](https://ww2.mathworks.cn/help/matlab/ref/readtable.html) | 基于文件创建表
[writetable](https://ww2.mathworks.cn/help/matlab/ref/writetable.html) | 将表写入文件
[readtimetable](https://ww2.mathworks.cn/help/matlab/ref/readtimetable.html) | 基于文件创建时间表
[writetimetable](https://ww2.mathworks.cn/help/matlab/ref/writetimetable.html) | 将时间表写入文件
[sheetnames](https://ww2.mathworks.cn/help/matlab/ref/sheetnames.html) | 从电子表格文件中获取工作表名称

定义导入规则

:- | :-
:- | :-
[detectImportOptions](https://ww2.mathworks.cn/help/matlab/ref/detectimportoptions.html) | 基于文件内容生成导入选项
[spreadsheetImportOptions](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.spreadsheet.spreadsheetimportoptions.html) | 电子表格的导入选项对象
[getvaropts](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.getvaropts.html) | 获取变量导入选项
[setvaropts](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.setvaropts.html) | 设置变量导入选项
[setvartype](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.setvartype.html) | 设置变量数据类型
[preview](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.preview.html) | 使用导入选项预览文件中的八行数据
<!--rehype:className=style-list-->

### 电子表格 - 读取和写入矩阵和数组

:- | :- | :-
:- | :- | :-
[readmatrix](https://ww2.mathworks.cn/help/matlab/ref/readmatrix.html) | 从文件中读取矩阵
[writematrix](https://ww2.mathworks.cn/help/matlab/ref/writematrix.html) | 将矩阵写入文件
[readcell](https://ww2.mathworks.cn/help/matlab/ref/readcell.html) | 从文件中读取元胞数组
[writecell](https://ww2.mathworks.cn/help/matlab/ref/writecell.html) | 将元胞数组写入文件
[readvars](https://ww2.mathworks.cn/help/matlab/ref/readvars.html) | 从文件中读取变量
[importdata](https://ww2.mathworks.cn/help/matlab/ref/importdata.html) | 从文件加载数据

### 图像

:- | :- | :-
:- | :- | :-
[imfinfo](https://ww2.mathworks.cn/help/matlab/ref/imfinfo.html) | 有关图形文件的信息
[imread](https://ww2.mathworks.cn/help/matlab/ref/imread.html) | 从图形文件读取图像
[imwrite](https://ww2.mathworks.cn/help/matlab/ref/imwrite.html) | 将图像写入图形文件
[Tiff](https://ww2.mathworks.cn/help/matlab/ref/tiff.html) | LibTIFF 库例程的 MATLAB 入口

### 读取或写入 NetCDF 文件
<!--rehype:wrap-class=row-span-2-->

:- | :- | :-
:- | :- | :-
[nccreate](https://ww2.mathworks.cn/help/matlab/ref/nccreate.html) | 在 NetCDF 文件中创建变量
[ncdisp](https://ww2.mathworks.cn/help/matlab/ref/ncdisp.html) | 在命令行窗口中显示 NetCDF 数据源内容
[ncinfo](https://ww2.mathworks.cn/help/matlab/ref/ncinfo.html) |  返回有关 NetCDF 数据源的信息
[ncread](https://ww2.mathworks.cn/help/matlab/ref/ncread.html) | 读取 NetCDF 数据源中的变量数据
[ncreadatt](https://ww2.mathworks.cn/help/matlab/ref/ncreadatt.html) |  读取 NetCDF 数据源中的属性值
[ncwrite](https://ww2.mathworks.cn/help/matlab/ref/ncwrite.html) | 将数据写入 NetCDF 文件
[ncwriteatt](https://ww2.mathworks.cn/help/matlab/ref/ncwriteatt.html) | 将属性写入 NetCDF 文件
[ncwriteschema](https://ww2.mathworks.cn/help/matlab/ref/ncwriteschema.html) | 将 NetCDF 架构定义添加到 NetCDF 文件中

### NetCDF 库程序包 - 库函数

:- | :-
:- | :-
[netcdf.getChunkCache](https://ww2.mathworks.cn/help/matlab/ref/netcdf.getchunkcache.html) | 检索 NetCDF 库的区块缓存设置
[netcdf.inqLibVers](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqlibvers.html) | 返回 NetCDF 库版本信息
[netcdf.setChunkCache](https://ww2.mathworks.cn/help/matlab/ref/netcdf.setchunkcache.html) | 设置 NetCDF 库的默认分块缓存设置
[netcdf.setDefaultFormat](https://ww2.mathworks.cn/help/matlab/ref/netcdf.setdefaultformat.html) | 更改默认 netCDF 文件的格式
<!--rehype:className=style-list-->

### NetCDF 库程序包 - 文件操作
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
[netcdf.abort](https://ww2.mathworks.cn/help/matlab/ref/netcdf.abort.html) | 还原最近的 netCDF 文件定义
[netcdf.close](https://ww2.mathworks.cn/help/matlab/ref/netcdf.close.html) | 关闭 netCDF 文件
[netcdf.create](https://ww2.mathworks.cn/help/matlab/ref/netcdf.create.html) | 创建新的 NetCDF 数据集
[netcdf.endDef](https://ww2.mathworks.cn/help/matlab/ref/netcdf.enddef.html) | 结束 netCDF 文件定义模式
[netcdf.inq](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inq.html) | 返回有关 netCDF 文件的信息
[netcdf.inqFormat](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqformat.html) | 确定 NetCDF 文件的格式
[netcdf.inqGrps](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqgrps.html) | 检索子组 ID 数组
[netcdf.inqUnlimDims](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqunlimdims.html) | 检索组中无限维度列表
[netcdf.open](https://ww2.mathworks.cn/help/matlab/ref/netcdf.open.html) | 打开 NetCDF 数据源
[netcdf.reDef](https://ww2.mathworks.cn/help/matlab/ref/netcdf.redef.html) | 让打开的 netCDF 文件进入定义模式
[netcdf.setFill](https://ww2.mathworks.cn/help/matlab/ref/netcdf.setfill.html) | 设置 netCDF 填充模式
[netcdf.sync](https://ww2.mathworks.cn/help/matlab/ref/netcdf.sync.html) | 将 netCDF 文件同步到磁盘

### NetCDF 库程序包 - 维度

:- | :- | :-
:- | :- | :-
[netcdf.defDim](https://ww2.mathworks.cn/help/matlab/ref/netcdf.defdim.html) | 创建 netCDF 维度
[netcdf.inqDim](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqdim.html) | 返回 netCDF 维度名称和长度
[netcdf.inqDimID](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqdimid.html) | 返回维度 ID
[netcdf.renameDim](https://ww2.mathworks.cn/help/matlab/ref/netcdf.renamedim.html) | 更改 netCDF 维度名

### NetCDF 库程序包 - 组

:- | :- | :-
:- | :- | :-
[netcdf.defGrp](https://ww2.mathworks.cn/help/matlab/ref/netcdf.defgrp.html) | 在 NetCDF 文件中创建组
[netcdf.inqDimIDs](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqdimids.html) | 检索组中维度标识符列表
[netcdf.inqGrpName](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqgrpname.html) | 检索组名
[netcdf.inqGrpNameFull](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqgrpnamefull.html) | 组的完整路径名
[netcdf.inqGrpParent](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqgrpparent.html) | 检索父组的 ID。
[netcdf.inqNcid](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqncid.html) | 返回已命名组的 ID
[netcdf.inqVarIDs](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqvarids.html) | 组中所有变量的 ID

### NetCDF 库程序包 - 变量
<!--rehype:wrap-class=row-span-3-->

:- | :-
:- | :-
[netcdf.defVarFill](https://ww2.mathworks.cn/help/matlab/ref/netcdf.defvarfill.html) | 定义 NetCDF 变量的填充参数
[netcdf.defVar](https://ww2.mathworks.cn/help/matlab/ref/netcdf.defvar.html) | 创建 NetCDF 变量
[netcdf.defVarChunking](https://ww2.mathworks.cn/help/matlab/ref/netcdf.defvarchunking.html) | 定义 NetCDF 变量的分块行为
[netcdf.defVarDeflate](https://ww2.mathworks.cn/help/matlab/ref/netcdf.defvardeflate.html) | 定义 NetCDF 变量的压缩参数
[netcdf.defVarFletcher32](https://ww2.mathworks.cn/help/matlab/ref/netcdf.defvarfletcher32.html) | 定义 NetCDF 变量的校验参数
[netcdf.getVar](https://ww2.mathworks.cn/help/matlab/ref/netcdf.getvar.html) | 读取 NetCDF 变量中的数据
[netcdf.inqVar](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqvar.html) | 有关变量的信息
[netcdf.inqVarChunking](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqvarchunking.html) | 确定 NetCDF 变量的分块设置
[netcdf.inqVarDeflate](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqvardeflate.html) | 确定 NetCDF 变量的压缩设置
[netcdf.inqVarFill](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqvarfill.html) | 确定 NetCDF 变量的填充参数值
[netcdf.inqVarFletcher32](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqvarfletcher32.html) | 关于 NetCDF 变量的 Fletcher32 校验和设置
[netcdf.inqVarID](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqvarid.html) | 返回与变量名相关联的 ID
[netcdf.putVar](https://ww2.mathworks.cn/help/matlab/ref/netcdf.putvar.html) | 将数据写入 netCDF 变量
[netcdf.renameVar](https://ww2.mathworks.cn/help/matlab/ref/netcdf.renamevar.html) | 更改 netCDF 变量名
<!--rehype:className=style-list-->

### NetCDF 库程序包 - 属性

:- | :- | :-
:- | :- | :-
[netcdf.copyAtt](https://ww2.mathworks.cn/help/matlab/ref/netcdf.copyatt.html) | 将属性复制到新位置
[netcdf.delAtt](https://ww2.mathworks.cn/help/matlab/ref/netcdf.delatt.html) | 删除 netCDF 属性
[netcdf.getAtt](https://ww2.mathworks.cn/help/matlab/ref/netcdf.getatt.html) | 返回 NetCDF 属性
[netcdf.inqAtt](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqatt.html) | 返回有关 netCDF 属性的信息
[netcdf.inqAttID](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqattid.html) | 返回 netCDF 属性的 ID
[netcdf.inqAttName](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqattname.html) | 返回 netCDF 属性名称
[netcdf.putAtt](https://ww2.mathworks.cn/help/matlab/ref/netcdf.putatt.html) | 写入 netCDF 属性
[netcdf.renameAtt](https://ww2.mathworks.cn/help/matlab/ref/netcdf.renameatt.html) | 更改属性名称

### NetCDF 库程序包 - 用户定义的类型

:- | :-
:- | :-
[netcdf.defVlen](https://ww2.mathworks.cn/help/matlab/ref/netcdf.defvlen.html) | Define user-defined variable length array type (NC_VLEN)
[netcdf.inqUserType](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqusertype.html) | Return information about user-defined type
[netcdf.inqVlen](https://ww2.mathworks.cn/help/matlab/ref/netcdf.inqvlen.html) | Return information about user-defined `NC_VLEN` type
<!--rehype:className=style-list-->

### NetCDF 库程序包 - 实用工具

:- | :-
:- | :-
[netcdf.getConstant](https://ww2.mathworks.cn/help/matlab/ref/netcdf.getconstant.html) | 返回命名常量的数值
[netcdf.getConstantNames](https://ww2.mathworks.cn/help/matlab/ref/netcdf.getconstantnames.html) | 返回 netCDF 库已知的常量列表
<!--rehype:className=style-list-->

### 读取或写入 HDF5 文件

:- | :- | :-
:- | :- | :-
[h5create](https://ww2.mathworks.cn/help/matlab/ref/h5create.html) | 创建 HDF5 数据集
[h5disp](https://ww2.mathworks.cn/help/matlab/ref/h5disp.html) | 显示 HDF5 文件的内容
[h5info](https://ww2.mathworks.cn/help/matlab/ref/h5info.html) | 有关 HDF5 文件的信息
[h5read](https://ww2.mathworks.cn/help/matlab/ref/h5read.html) | 从 HDF5 数据集读取数据
[h5readatt](https://ww2.mathworks.cn/help/matlab/ref/h5readatt.html) | 从 HDF5 文件中读取属性
[h5write](https://ww2.mathworks.cn/help/matlab/ref/h5write.html) | 写入 HDF5 数据集
[h5writeatt](https://ww2.mathworks.cn/help/matlab/ref/h5writeatt.html) | 写入 HDF5 属性

### HDF5 库程序包
<!--rehype:wrap-class=row-span-4-->

:- | :-
:- | :-
[Library (H5)](https://ww2.mathworks.cn/help/matlab/ref/libraryh5.html) | General-purpose functions for use with entire HDF5 library
[Attribute (H5A)](https://ww2.mathworks.cn/help/matlab/ref/attributeh5a.html) | Metadata associated with datasets or groups
[Dataset (H5D)](https://ww2.mathworks.cn/help/matlab/ref/dataseth5d.html) | Multidimensional arrays of data elements and supporting metadata
[Dimension Scale (H5DS)](https://ww2.mathworks.cn/help/matlab/ref/dimensionscaleh5ds.html) | Dimension scale associated with dataset dimensions
[Error (H5E)](https://ww2.mathworks.cn/help/matlab/ref/errorh5e.html) | Error handling
[File (H5F)](https://ww2.mathworks.cn/help/matlab/ref/fileh5f.html) | HDF5 file access
[Group (H5G)](https://ww2.mathworks.cn/help/matlab/ref/grouph5g.html) | Organization of objects in file
[Identifier (H5I)](https://ww2.mathworks.cn/help/matlab/ref/identifierh5i.html) | HDF5 object identifiers
[Link (H5L)](https://ww2.mathworks.cn/help/matlab/ref/linkh5l.html) | Links in HDF5 file
[MATLAB (H5ML)](https://ww2.mathworks.cn/help/matlab/ref/matlabh5ml.html) | 不属于 HDF5 C 库的 `MATLAB` 工具函数
[Object (H5O)](https://ww2.mathworks.cn/help/matlab/ref/objecth5o.html) | Objects in file
[Property (H5P)](https://ww2.mathworks.cn/help/matlab/ref/propertyh5p.html) | Object property lists
[Reference (H5R)](https://ww2.mathworks.cn/help/matlab/ref/referenceh5r.html) | HDF5 references
[Dataspace (H5S)](https://ww2.mathworks.cn/help/matlab/ref/dataspaceh5s.html) | Dimensionality of dataset
[Datatype (H5T)](https://ww2.mathworks.cn/help/matlab/ref/datatypeh5t.html) | Datatype of elements in a dataset
<!--rehype:className=style-list-->

### HDF4 文件 - 高级函数

:- | :-
:- | :-
[hdfinfo](https://ww2.mathworks.cn/help/matlab/ref/hdfinfo.html) | 有关 HDF4 或 HDF-EOS 文件的信息
[hdfread](https://ww2.mathworks.cn/help/matlab/ref/hdfread.html) | 从 HDF4 或 HDF-EOS 文件读取数据
[imread](https://ww2.mathworks.cn/help/matlab/ref/imread.html) | 从图形文件读取图像
[imwrite](https://ww2.mathworks.cn/help/matlab/ref/imwrite.html) | 将图像写入图形文件

### 低级函数 - 包
<!--rehype:wrap-class=row-span-3-->

:- | :-
:- | :-
[matlab.io.hdf4.sd](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.hdf4.sd.html) | 直接与 HDF4 多文件科学数据集 (SD) 接口交互
[matlab.io.hdfeos.gd](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.hdfeos.gd.html) | 低级别访问 HDF-EOS 网格数据
[matlab.io.hdfeos.sw](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.hdfeos.sw.html) | 对 HDF-EOS 分段文件的低级别访问

#### 低级函数 - 函数

:- | :-
:- | :-
[hdfan](https://ww2.mathworks.cn/help/matlab/ref/hdfan.html) | HDF 多文件注释 (AN) 接口的入口
[hdfhx](https://ww2.mathworks.cn/help/matlab/ref/hdfhx.html) | HDF 外部数据 (HX) 接口的入口
[hdfh](https://ww2.mathworks.cn/help/matlab/ref/hdfh.html) | HDF H 接口的入口
[hdfhd](https://ww2.mathworks.cn/help/matlab/ref/hdfhd.html) | HDF HD 接口的入口
[hdfhe](https://ww2.mathworks.cn/help/matlab/ref/hdfhe.html) | HDF HE 接口的入口
[hdfml](https://ww2.mathworks.cn/help/matlab/ref/hdfml.html) | 与 `MATLAB` HDF 入口函数配合使用的实用工具
[hdfpt](https://ww2.mathworks.cn/help/matlab/ref/hdfpt.html) | HDF-EOS 点对象的接口
[hdfv](https://ww2.mathworks.cn/help/matlab/ref/hdfv.html) | HDF Vgroup (V) 接口的入口
[hdfvf](https://ww2.mathworks.cn/help/matlab/ref/hdfvf.html) | HDF Vdata 接口中 VF 函数的入口
[hdfvh](https://ww2.mathworks.cn/help/matlab/ref/hdfvh.html) | HDF Vdata 接口中 VH 函数的入口
[hdfvs](https://ww2.mathworks.cn/help/matlab/ref/hdfvs.html) | HDF Vdata 接口中 VS 函数的入口
[hdfdf24](https://ww2.mathworks.cn/help/matlab/ref/hdfdf24.html) | HDF 24 位光栅图像 (DF24) 接口的入口
[hdfdfr8](https://ww2.mathworks.cn/help/matlab/ref/hdfdfr8.html) | HDF 8 位光栅图像 (DFR8) 接口的入口

### FITS 文件 - 函数

:- | :-
:- | :-
[fitsdisp](https://ww2.mathworks.cn/help/matlab/ref/fitsdisp.html) | 显示 FITS 元数据
[fitsinfo](https://ww2.mathworks.cn/help/matlab/ref/fitsinfo.html) | 有关 FITS 文件的信息
[fitsread](https://ww2.mathworks.cn/help/matlab/ref/fitsread.html) | 读取 FITS 文件中的数据
[fitswrite](https://ww2.mathworks.cn/help/matlab/ref/fitswrite.html) | 将图像写入 FITS 文件

### FITS 文件 - 文件访问

:- | :-
:- | :-
[createFile](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.createfile.html) | 创建 FITS 文件
[openFile](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.openfile.html) | 打开 FITS 文件
[openDiskFile](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.opendiskfile.html) | 打开 FITS 文件
[closeFile](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.closefile.html) | 关闭 FITS 文件
[deleteFile](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.deletefile.html) | 删除 FITS 文件
[fileName](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.filename.html) | FITS 文件的名称
[fileMode](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.filemode.html) | FITS 文件的 I/O 模式

### FITS 文件 - 图像处理

:- | :-
:- | :-
[createImg](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.createimg.html) | 创建 FITS 图像
[getImgSize](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.getimgsize.html) | 图像大小
[getImgType](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.getimgtype.html) | 图像的数据类型
[insertImg](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.insertimg.html) | 在当前图像后面插入 FITS 图像
[readImg](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.readimg.html) | 读取图像数据
[setBscale](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.setbscale.html) | 重置图像缩放
[writeImg](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.writeimg.html) | 写入 FITS 图像

### FITS 文件 - 关键字
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
[readCard](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.readcard.html) | 关键字的标头记录
[readKey](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.readkey.html) | 关键字
[readKeyCmplx](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.readkeycmplx.html) | 复数标量值形式的关键字
[readKeyDbl](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.readkeydbl.html) | 双精度值形式的关键字
[readKeyLongLong](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.readkeylonglong.html) | `int64` 形式的关键字
[readKeyLongStr](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.readkeylongstr.html) | 长字符串值
[readKeyUnit](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.readkeyunit.html) | 关键字中的物理单位字符串
[readRecord](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.readrecord.html) | 编号指定的标头记录
[writeComment](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.writecomment.html) | 向 CHU 写入或追加 COMMENT 关键字
[writeDate](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.writedate.html) | 向 CHU 写入 DATE 关键字
[writeKey](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.writekey.html) | 将新关键字更新或添加到当前 HDU 中
[writeKeyUnit](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.writekeyunit.html) | 写入物理单位字符串
[writeHistory](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.writehistory.html) | 向 CHU 写入或追加 HISTORY 关键字
[deleteKey](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.deletekey.html) | 按名称删除关键字
[deleteRecord](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.deleterecord.html) | 按记录号删除关键字
[getHdrSpace](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.gethdrspace.html) | 标头中的关键字数量

### FITS 文件 - 标头数据单元 (HDU) 访问

:- | :-
:- | :-
[copyHDU](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.copyhdu.html) | 将当前 HDU 从一个文件复制到另一个文件
[getHDUnum](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.gethdunum.html) | FITS 文件中当前 HDU 的编号
[getHDUtype](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.gethdutype.html) | 当前 HDU 的类型
[getNumHDUs](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.getnumhdus.html) | FITS 文件中的 HDU 总数
[movAbsHDU](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.movabshdu.html) | 移至绝对 HDU 编号
[movNamHDU](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.movnamhdu.html) | 移至第一个包含特定类型和关键字值的 HDU
[movRelHDU](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.movrelhdu.html) | 从当前 HDU 移动相对数量的 HDU
[writeChecksum](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.writechecksum.html) | 计算并写入当前 HDU 的校验和
[deleteHDU](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.deletehdu.html) | 删除 FITS 文件中当前的 HDU

### FITS 文件 - 图像压缩

:- | :-
:- | :-
[imgCompress](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.imgcompress.html) | 将 HDU 从一个文件压缩到另一个文件中
[isCompressedImg](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.iscompressedimg.html) | 确定当前图像是否已压缩
[setCompressionType](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.setcompressiontype.html) | 设置图像压缩类型
[setHCompScale](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.sethcompscale.html) | 设置 HCOMPRESS 算法的缩放参数
[setHCompSmooth](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.sethcompsmooth.html) | 为使用 HCOMPRESS 压缩的图像设置平滑化
[setTileDim](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.settiledim.html) | 设置图块维度

### FITS 文件 - ASCII 表和二进制表
<!--rehype:wrap-class=row-span-3-->

:- | :-
:- | :-
[createTbl](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.createtbl.html) | 创建新的 ASCII 或二进制表扩展
[insertCol](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.insertcol.html) | 向表插入列
[insertRows](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.insertrows.html) | 向表插入行
[insertATbl](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.insertatbl.html) | 在当前 HDU 后面插入 ASCII 表
[insertBTbl](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.insertbtbl.html) | 在当前 HDU 后面插入二进制表
[deleteCol](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.deletecol.html) | 从表中删除列
[deleteRows](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.deleterows.html) | 从表中删除行
[getAColParms](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.getacolparms.html) | ASCII 表信息
[getBColParms](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.getbcolparms.html) | 二进制表信息
[getColName](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.getcolname.html) | 表列名称
[getColType](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.getcoltype.html) | 经缩放的列的数据类型、重复值、宽度
[getEqColType](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.geteqcoltype.html) | 列的数据类型、重复值、宽度
[getNumCols](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.getnumcols.html) | 表中的列数
[getNumRows](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.getnumrows.html) | 表中的行数
[readATblHdr](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.readatblhdr.html) | 从当前 ASCII 表中读取标头信息
[readBTblHdr](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.readbtblhdr.html) | 从当前二进制表中读取标头信息
[readCol](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.readcol.html) | 读取 ASCII 或二进制表列的行
[setTscale](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.settscale.html) | 重置图像缩放
[writeCol](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.writecol.html) | 向 ASCII 或二进制表列写入元素

### FITS 文件 - 实用工具

:- | :-
:- | :-
[getConstantValue](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.getconstantvalue.html) | 指定常量的数值
[getVersion](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.getversion.html) | CFITSIO 库的修订号
[getOpenFiles](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.fits.getopenfiles.html) | 已打开的 FITS 文件列表

### 条带交错文件

:- | :-
:- | :-
[multibandread](https://ww2.mathworks.cn/help/matlab/ref/multibandread.html) | 从二进制文件读取条带交错文件
[multibandwrite](https://ww2.mathworks.cn/help/matlab/ref/multibandwrite.html) | 将条带交错数据写入文件

### 常用数据格式 (CDF)

:- | :-
:- | :-
[cdfinfo](https://ww2.mathworks.cn/help/matlab/ref/cdfinfo.html) | 有关常用数据格式 (CDF) 文件的信息
[cdfread](https://ww2.mathworks.cn/help/matlab/ref/cdfread.html) | 读取常用数据格式 (CDF) 文件中的数据
[cdfepoch](https://ww2.mathworks.cn/help/matlab/ref/cdfepoch.html) | 将日期文本或日期序列值转换为 CDF 格式的日期
[todatenum](https://ww2.mathworks.cn/help/matlab/ref/todatenum.html) | 将 CDF 历元对象转换为 `MATLAB` 日期序列值

#### 包

:- | :-
:- | :-
[cdflib](https://ww2.mathworks.cn/help/matlab/ref/cdflib.html) | 与 CDF 库直接交互

### 读取视频数据

:- | :-
:- | :-
[VideoReader](https://ww2.mathworks.cn/help/matlab/ref/videoreader.html) | 创建对象以读取视频文件
[read](https://ww2.mathworks.cn/help/matlab/ref/videoreader.read.html) | 读取一个或多个视频帧
[readFrame](https://ww2.mathworks.cn/help/matlab/ref/videoreader.readframe.html) | 读取下一个视频帧
[hasFrame](https://ww2.mathworks.cn/help/matlab/ref/videoreader.hasframe.html) | 确定是否有视频帧可供读取
[getFileFormats](https://ww2.mathworks.cn/help/matlab/ref/videoreader.getfileformats.html) | `VideoReader` 支持的文件格式
[mmfileinfo](https://ww2.mathworks.cn/help/matlab/ref/mmfileinfo.html) | 有关多媒体文件的信息

### 写入视频数据

:- | :-
:- | :-
[VideoWriter](https://ww2.mathworks.cn/help/matlab/ref/videowriter.html) | 创建对象以写入视频文件
[open](https://ww2.mathworks.cn/help/matlab/ref/videowriter.open.html) | 打开文件以写入视频数据
[writeVideo](https://ww2.mathworks.cn/help/matlab/ref/videowriter.writevideo.html) | 将视频数据写入到文件
[close](https://ww2.mathworks.cn/help/matlab/ref/videowriter.close.html) | 写入视频数据之后关闭文件
[getProfiles](https://ww2.mathworks.cn/help/matlab/ref/videowriter.getprofiles.html) | `VideoWriter` 支持的描述文件和文件格式

### 读取或写入音频

:- | :-
:- | :-
[audioread](https://ww2.mathworks.cn/help/matlab/ref/audioread.html) | 读取音频文件
[audiowrite](https://ww2.mathworks.cn/help/matlab/ref/audiowrite.html) | 写音频文件
[lin2mu](https://ww2.mathworks.cn/help/matlab/ref/lin2mu.html) | 将线性音频信号转换为 mu-law
[mu2lin](https://ww2.mathworks.cn/help/matlab/ref/mu2lin.html) | 将 mu-law 音频信号转换为线性格式
[audioinfo](https://ww2.mathworks.cn/help/matlab/ref/audioinfo.html) | 有关音频文件的信息

### 播放音频

:- | :-
:- | :-
[audioplayer](https://ww2.mathworks.cn/help/matlab/ref/audioplayer.html) | 用于播放音频的对象
[isplaying](https://ww2.mathworks.cn/help/matlab/ref/audioplayer.isplaying.html) | 确定播放是否正在进行
[pause](https://ww2.mathworks.cn/help/matlab/ref/audioplayer.pause.html) | 暂停播放或录制
[play](https://ww2.mathworks.cn/help/matlab/ref/audioplayer.play.html) | 从 `audioplayer` 对象播放音频
[playblocking](https://ww2.mathworks.cn/help/matlab/ref/audioplayer.playblocking.html) | 播放 `audioplayer` 对象中的音频，保持控制权直到播放完成
[resume](https://ww2.mathworks.cn/help/matlab/ref/audioplayer.resume.html) |  从暂停状态继续播放或录制
[stop](https://ww2.mathworks.cn/help/matlab/ref/audioplayer.stop.html) | 停止播放或录制

### 录制音频

:- | :-
:- | :-
[audiorecorder](https://ww2.mathworks.cn/help/matlab/ref/audiorecorder.html) | 用于录制音频的对象
[getaudiodata](https://ww2.mathworks.cn/help/matlab/ref/audiorecorder.getaudiodata.html) | 将录制的音频信号存储在数值数组中
[getplayer](https://ww2.mathworks.cn/help/matlab/ref/audiorecorder.getplayer.html) | 创建关联的 `audioplayer` 对象
[isrecording](https://ww2.mathworks.cn/help/matlab/ref/audiorecorder.isrecording.html) | 确定录制是否正在进行
[record](https://ww2.mathworks.cn/help/matlab/ref/audiorecorder.record.html) | 将音频录制到 `audiorecorder` 对象中
[recordblocking](https://ww2.mathworks.cn/help/matlab/ref/audiorecorder.recordblocking.html) | 将音频录制到 `audiorecorder` 对象中，在录制完成前保持控制权

### 播放声音

:- | :-
:- | :-
[audiodevinfo](https://ww2.mathworks.cn/help/matlab/ref/audiodevinfo.html) | 有关音频设备的信息
[audiodevreset](https://ww2.mathworks.cn/help/matlab/ref/audiodevreset.html) | 刷新可用音频设备列表
[sound](https://ww2.mathworks.cn/help/matlab/ref/sound.html) | 将信号数据矩阵转换为声音
[soundsc](https://ww2.mathworks.cn/help/matlab/ref/soundsc.html) | 缩放数据和作为声音播放
[beep](https://ww2.mathworks.cn/help/matlab/ref/beep.html) | 产生操作系统蜂鸣声

### XML 文档的读取和写入

:- | :-
:- | :-
[matlab.io.xml.dom.DOMWriter](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.domwriter-class.html) | 串行化 XML 文档的写入器
[matlab.io.xml.dom.EntityResolver](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.entityresolver-class.html) | 实体解析器的抽象基类
[matlab.io.xml.dom.FileWriter](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.filewriter-class.html) | 创建文本文件的写入器
[matlab.io.xml.dom.Locator](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.locator-class.html) | 元素在 XML 文件中的位置
[matlab.io.xml.dom.Parser](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.parser-class.html) | XML 标记解析器
[matlab.io.xml.dom.ParserConfiguration](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.parserconfiguration-class.html) | XML 解析器选项
[matlab.io.xml.dom.ParseError](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.parseerror-class.html) | 指定 XML 标记解析错误
[matlab.io.xml.dom.ParseErrorHandler](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.parseerrorhandler-class.html) | Abstract base class for parse error handlers
[matlab.io.xml.dom.ParseErrorLocator](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.parseerrorlocator-class.html) | Specifies location of parse error
[matlab.io.xml.dom.ParseErrorSeverity](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.parseerrorseverity-class.html) | 表示 XML 标记解析错误严重性的枚举类
[matlab.io.xml.dom.ResourceIdentifier](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.resourceidentifier-class.html) | XML 资源标识符
[matlab.io.xml.dom.ResourceIdentifierType](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.resourceidentifiertype-class.html) | XML 资源标识符类型
[matlab.io.xml.dom.WriterConfiguration](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.writerconfiguration-class.html) | XML DOM 写入器选项
<!--rehype:className=style-list-->

### W3C DOM

:- | :-
:- | :-
[matlab.io.xml.dom.Attr](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.attr-class.html) | XML 元素的属性
[matlab.io.xml.dom.CDATASection](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.cdatasection-class.html) | CDATA 节
[matlab.io.xml.dom.Comment](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.comment-class.html) | XML 文档中的注释
[matlab.io.xml.dom.Document](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.document-class.html) | XML 文档
[matlab.io.xml.dom.DocumentFragment](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.documentfragment-class.html) | 文档节点组
[matlab.io.xml.dom.DocumentType](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.documenttype-class.html) | 文档类型
[matlab.io.xml.dom.Element](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.element-class.html) | XML 文档的元素
[matlab.io.xml.dom.Entity](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.entity-class.html) | 由文档类型定义的实体
[matlab.io.xml.dom.NamedNodeMap](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.namednodemap-class.html) | 一组具有名称的文档节点
[matlab.io.xml.dom.NodeList](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.nodelist-class.html) | 文档节点列表
[matlab.io.xml.dom.Notation](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.notation-class.html) | 文档类型定义中的表示法
[matlab.io.xml.dom.ProcessingInstruction](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.processinginstruction-class.html) | XML 处理指令
[matlab.io.xml.dom.Text](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.text-class.html) | XML 文档中的文本
[matlab.io.xml.dom.TypeInfo](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.dom.typeinfo-class.html) | 架构类型信息
<!--rehype:className=style-list-->

### XML 变换

:- | :-
:- | :-
[matlab.io.xml.transform.CompiledStylesheet](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.transform.compiledstylesheet-class.html) | 编译的样式表
[matlab.io.xml.transform.ResultDocument](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.transform.resultdocument-class.html) | 将转换结果存储为文档
[matlab.io.xml.transform.ResultString](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.transform.resultstring-class.html) | 将转换结果存储为字符串
[matlab.io.xml.transform.ResultFile](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.transform.resultfile-class.html) | 将转换结果存储为文件
[matlab.io.xml.transform.SourceDocument](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.transform.sourcedocument-class.html) | 用于转换的 XML 源文档
[matlab.io.xml.transform.SourceFile](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.transform.sourcefile-class.html) | 用于转换的 XML 源文件
[matlab.io.xml.transform.SourceString](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.transform.sourcestring-class.html) | 用于转换的 XML 源字符串
[matlab.io.xml.transform.StylesheetSourceDocument](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.transform.stylesheetsourcedocument-class.html) | 用于转换的样式表源文档
[matlab.io.xml.transform.StylesheetSourceFile](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.transform.stylesheetsourcefile-class.html) | 用于转换的样式表源文件
[matlab.io.xml.transform.StylesheetSourceString](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.transform.stylesheetsourcestring-class.html) | 用于转换的 XSL 源字符串
[matlab.io.xml.transform.Tracer](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.transform.tracer-class.html) | Trace execution of stylesheet
[matlab.io.xml.transform.Transformer](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.transform.transformer-class.html) | XML 文档转换器
<!--rehype:className=style-list-->

### XPath 查询

:- | :-
:- | :-
[matlab.io.xml.xpath.CompiledExpression](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.xpath.compiledexpression-class.html) | 编译的 XPath 表达式
[matlab.io.xml.xpath.EvalResultType](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.xpath.evalresulttype-class.html) | XPath 表达式计算的结果类型
[matlab.io.xml.xpath.Evaluator](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.xpath.evaluator-class.html) | XPath 表达式计算器
[matlab.io.xml.xpath.PrefixResolver](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.xml.xpath.prefixresolver-class.html) | 用于命名空间前缀解析器的抽象基类
<!--rehype:className=style-list-->

### JSON 格式

:- | :-
:- | :-
[jsondecode](https://ww2.mathworks.cn/help/matlab/ref/jsondecode.html) | 解码 JSON 格式的文本
[jsonencode](https://ww2.mathworks.cn/help/matlab/ref/jsonencode.html) | 基于结构化 `MATLAB` 数据创建 JSON 格式的文本
<!--rehype:className=style-list-->

### 工作区变量和 MAT 文件
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
[load](https://ww2.mathworks.cn/help/matlab/ref/load.html) | 将文件变量加载到工作区中
[save](https://ww2.mathworks.cn/help/matlab/ref/save.html) | 将工作区变量保存到文件中
[matfile](https://ww2.mathworks.cn/help/matlab/ref/matlab.io.matfile.html) | 访问和更改 MAT 文件中的变量，而不必将文件加载到内存中
[disp](https://ww2.mathworks.cn/help/matlab/ref/disp.html) | 显示变量的值
[formattedDisplayText](https://ww2.mathworks.cn/help/matlab/ref/formatteddisplaytext.html) | 以字符串形式捕获显示输出
[who](https://ww2.mathworks.cn/help/matlab/ref/who.html) | 列出工作区中的变量
[whos](https://ww2.mathworks.cn/help/matlab/ref/whos.html) | 列出工作区中的变量及大小和类型
[clear](https://ww2.mathworks.cn/help/matlab/ref/clear.html) | 从工作区中删除项目、释放系统内存
[clearvars](https://ww2.mathworks.cn/help/matlab/ref/clearvars.html) | 清除内存中的变量
[openvar](https://ww2.mathworks.cn/help/matlab/ref/openvar.html) | 在变量编辑器或其他图形编辑工具中打开工作区变量
[工作区浏览器](https://ww2.mathworks.cn/help/matlab/ref/workspace.html) | 打开工作区浏览器以管理工作区

### 低级文件 I/O
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
[fclose](https://ww2.mathworks.cn/help/matlab/ref/fclose.html) | 关闭一个或所有打开的文件
[feof](https://ww2.mathworks.cn/help/matlab/ref/feof.html) | 检测文件末尾
[ferror](https://ww2.mathworks.cn/help/matlab/ref/ferror.html) | 文件 I/O 错误信息
[fgetl](https://ww2.mathworks.cn/help/matlab/ref/fgetl.html) | 读取文件中的行，并删除换行符
[fgets](https://ww2.mathworks.cn/help/matlab/ref/fgets.html) | 读取文件中的行，并保留换行符
[fileread](https://ww2.mathworks.cn/help/matlab/ref/fileread.html) | 以文本格式读取文件内容
[fopen](https://ww2.mathworks.cn/help/matlab/ref/fopen.html) | 打开文件或获得有关打开文件的信息
[fprintf](https://ww2.mathworks.cn/help/matlab/ref/fprintf.html) | 将数据写入文本文件
[fread](https://ww2.mathworks.cn/help/matlab/ref/fread.html) | 读取二进制文件中的数据
[frewind](https://ww2.mathworks.cn/help/matlab/ref/frewind.html) | 将文件位置指示符移至所打开文件的开头
[fscanf](https://ww2.mathworks.cn/help/matlab/ref/fscanf.html) | 读取文本文件中的数据
[fseek](https://ww2.mathworks.cn/help/matlab/ref/fseek.html) | 移至文件中的指定位置
[ftell](https://ww2.mathworks.cn/help/matlab/ref/ftell.html) | 当前位置
[fwrite](https://ww2.mathworks.cn/help/matlab/ref/fwrite.html) | 将数据写入二进制文件

### 串行和 USB 通信 - 连接和配置

:- | :-
:- | :-
[serialportlist](https://ww2.mathworks.cn/help/matlab/ref/serialportlist.html) | 连接到您的系统的串行端口列表
[serialport](https://ww2.mathworks.cn/help/matlab/ref/serialport.html) | 连接到串行端口
[configureTerminator](https://ww2.mathworks.cn/help/matlab/ref/serialport.configureterminator.html) | 为与串行端口的 ASCII 字符串通信设置终止符
[configureCallback](https://ww2.mathworks.cn/help/matlab/ref/serialport.configurecallback.html) | 为与串行端口设备的通信设置回调函数和触发条件

### 串行和 USB 通信 - 读取和写入

:- | :-
:- | :-
[read](https://ww2.mathworks.cn/help/matlab/ref/serialport.read.html) | 从串行端口读取数据
[readline](https://ww2.mathworks.cn/help/matlab/ref/serialport.readline.html) | 从串行端口读取 ASCII 字符串数据行
[write](https://ww2.mathworks.cn/help/matlab/ref/serialport.write.html) | 将数据写入串行端口
[writeline](https://ww2.mathworks.cn/help/matlab/ref/serialport.writeline.html) | 将 ASCII 数据行写入串行端口

### 串行和 USB 通信 - 控制引脚和内存

:- | :-
:- | :-
[flush](https://ww2.mathworks.cn/help/matlab/ref/serialport.flush.html) | 清空串行端口设备缓冲区
[getpinstatus](https://ww2.mathworks.cn/help/matlab/ref/serialport.getpinstatus.html) | 获取串行引脚状态
[setRTS](https://ww2.mathworks.cn/help/matlab/ref/serialport.setrts.html) | 设置串行 RTS 引脚
[setDTR](https://ww2.mathworks.cn/help/matlab/ref/serialport.setdtr.html) | 设置串行 DTR 引脚

### TCP/IP 通信 - 连接和配置

:- | :-
:- | :-
[tcpclient](https://ww2.mathworks.cn/help/matlab/ref/tcpclient.html) | 创建与 TCP/IP 服务器的 TCP/IP 客户端连接
[echotcpip](https://ww2.mathworks.cn/help/matlab/ref/echotcpip.html) | 启动或停止 TCP/IP 回显服务器
[configureTerminator](https://ww2.mathworks.cn/help/matlab/ref/tcpclient.configureterminator.html) | 为通过 TCP/IP 与远程主机进行的 ASCII 字符串通信设置终止符
[configureCallback](https://ww2.mathworks.cn/help/matlab/ref/tcpclient.configurecallback.html) | 为通过 TCP/IP 与远程主机的通信设置回调函数和触发条件
<!--rehype:className=style-list-->

### TCP/IP 通信 - 读取和写入

:- | :-
:- | :-
[read](https://ww2.mathworks.cn/help/matlab/ref/tcpclient.read.html) | 通过 TCP/IP 读取远程主机上的数据
[readline](https://ww2.mathworks.cn/help/matlab/ref/tcpclient.readline.html) | 通过 TCP/IP 从远程主机读取 ASCII 字符串数据行
[write](https://ww2.mathworks.cn/help/matlab/ref/tcpclient.write.html) | 通过 TCP/IP 向远程主机写入数据
[writeline](https://ww2.mathworks.cn/help/matlab/ref/tcpclient.writeline.html) | 通过 TCP/IP 向远程主机写入 ASCII 数据行
[flush](https://ww2.mathworks.cn/help/matlab/ref/tcpclient.flush.html) | 为通过 TCP/IP 与远程主机的通信清空缓冲区
<!--rehype:className=style-list-->

### Bluetooth 通信 - 连接和配置

:- | :-
:- | :-
[bluetoothlist](https://ww2.mathworks.cn/help/matlab/ref/bluetoothlist.html) | 扫描附近的 `Bluetooth` 经典设备
[bluetooth](https://ww2.mathworks.cn/help/matlab/ref/bluetooth.html) | 连接到 `Bluetooth` 经典设备
[configureTerminator](https://ww2.mathworks.cn/help/matlab/ref/bluetooth.configureterminator.html) | 为与 `Bluetooth` 设备的 ASCII 字符串通信设置终止符
[configureCallback](https://ww2.mathworks.cn/help/matlab/ref/bluetooth.configurecallback.html) | 为与 `Bluetooth` 设备的通信设置回调函数和触发条件
<!--rehype:className=style-list-->

### Bluetooth 通信 - 读取和写入
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
[read](https://ww2.mathworks.cn/help/matlab/ref/bluetooth.read.html) | 从 `Bluetooth` 设备读取数据
[readline](https://ww2.mathworks.cn/help/matlab/ref/bluetooth.readline.html) | 从 `Bluetooth` 设备读取 ASCII 字符串数据行
[write](https://ww2.mathworks.cn/help/matlab/ref/bluetooth.write.html) | 将数据写入 `Bluetooth` 设备
[writeline](https://ww2.mathworks.cn/help/matlab/ref/bluetooth.writeline.html) | 将 ASCII 数据行写入 `Bluetooth` 设备
[flush](https://ww2.mathworks.cn/help/matlab/ref/bluetooth.flush.html) | 清空 `Bluetooth` 设备缓冲区
<!--rehype:className=style-list-->

### Bluetooth 低功耗通信
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
[blelist](https://ww2.mathworks.cn/help/matlab/ref/blelist.html) | 扫描附近的低功耗 `Bluetooth` 外围设备
[ble](https://ww2.mathworks.cn/help/matlab/ref/ble.html) | 连接到低功耗 `Bluetooth` 外围设备
[characteristic](https://ww2.mathworks.cn/help/matlab/ref/matlabshared.blelib.characteristic.html) | 访问低功耗 `Bluetooth` 外围设备的特征
[descriptor](https://ww2.mathworks.cn/help/matlab/ref/matlabshared.blelib.descriptor.html) | 访问低功耗 `Bluetooth` 外围设备上的描述符
[read](https://ww2.mathworks.cn/help/matlab/ref/matlabshared.blelib.characteristic.read.html) | 读取低功耗 `Bluetooth` 外围设备上的特征或描述符数据
[write](https://ww2.mathworks.cn/help/matlab/ref/matlabshared.blelib.characteristic.write.html) | 将数据写入低功耗 `Bluetooth` 外围设备的特征或描述符
[subscribe](https://ww2.mathworks.cn/help/matlab/ref/matlabshared.blelib.characteristic.subscribe.html) | 订阅特征通知或指示
[unsubscribe](https://ww2.mathworks.cn/help/matlab/ref/matlabshared.blelib.characteristic.unsubscribe.html) | 取消订阅特征通知和指示
<!--rehype:className=style-list-->

### Web 服务

:- | :-
:- | :-
[webread](https://ww2.mathworks.cn/help/matlab/ref/webread.html) | 从 RESTful Web 服务读取内容
[webwrite](https://ww2.mathworks.cn/help/matlab/ref/webwrite.html) | 将数据写入 RESTful Web 服务
[websave](https://ww2.mathworks.cn/help/matlab/ref/websave.html) | 将 RESTful Web 服务中的内容保存到文件
[weboptions](https://ww2.mathworks.cn/help/matlab/ref/weboptions.html) | 指定 RESTful Web 服务的参数
[web](https://ww2.mathworks.cn/help/matlab/ref/web.html) | 在浏览器中打开网页或文件
[sendmail](https://ww2.mathworks.cn/help/matlab/ref/sendmail.html) | 向地址列表发送电子邮件

### FTP 文件操作
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
[ftp](https://ww2.mathworks.cn/help/matlab/ref/ftp.html) | 连接到 FTP 服务器以访问其文件
[sftp](https://ww2.mathworks.cn/help/matlab/ref/sftp.html) | Connection to SFTP server to access its files
[ascii](https://ww2.mathworks.cn/help/matlab/ref/ftp.ascii.html) | 将 FTP 传输模式设置为 ASCII
[binary](https://ww2.mathworks.cn/help/matlab/ref/ftp.binary.html) | 将 FTP 传输模式设置为二进制
[cd](https://ww2.mathworks.cn/help/matlab/ref/ftp.cd.html) | 更改或查看 SFTP 或 FTP 服务器上的当前文件夹
[close](https://ww2.mathworks.cn/help/matlab/ref/ftp.close.html) | 关闭与 SFTP 或 FTP 服务器的连接
[delete](https://ww2.mathworks.cn/help/matlab/ref/ftp.delete.html) | 删除 SFTP 或 FTP 服务器上的文件
[dir](https://ww2.mathworks.cn/help/matlab/ref/ftp.dir.html) | 列出 SFTP 或 FTP 服务器上的文件夹内容
[mget](https://ww2.mathworks.cn/help/matlab/ref/ftp.mget.html) | 从 SFTP 或 FTP 服务器下载文件
[mkdir](https://ww2.mathworks.cn/help/matlab/ref/ftp.mkdir.html) | 在 SFTP 或 FTP 服务器上创建新文件夹
[mput](https://ww2.mathworks.cn/help/matlab/ref/ftp.mput.html) | 将文件或文件夹上传到 SFTP 或 FTP 服务器
[rename](https://ww2.mathworks.cn/help/matlab/ref/ftp.rename.html) | 重命名 SFTP 或 FTP 服务器上的文件
[rmdir](https://ww2.mathworks.cn/help/matlab/ref/ftp.rmdir.html) | 删除 SFTP 或 FTP 服务器上的文件夹

### 物联网 (IoT) 数据

:- | :-
:- | :-
[thingSpeakRead](https://ww2.mathworks.cn/help/matlab/ref/thingspeakread.html) | 读取存储在 `ThingSpeak` 通道中的数据
[thingSpeakWrite](https://ww2.mathworks.cn/help/matlab/ref/thingspeakwrite.html) | 将数据写入 `ThingSpeak` 通道
<!--rehype:className=style-list-->

另见
----

- [MATLAB 官网](https://www.mathworks.com)
- [MATLAB 官网(中文)](https://mathworks.cn/)
