Pytorch  备忘清单
===

Pytorch 备忘单是 [Pytorch ](https://pytorch.org/) 官网

入门
-----

### 介绍

- [Pytorch基本语法]
- [Pytorch初步应用]

### 认识Pytorch

```python
from __future__ import print_function
import torch
x = torch.empty(5, 3)
>>> print(x)
tensor([[2.4835e+27, 2.5428e+30, 1.0877e-19],
        [1.5163e+23, 2.2012e+12, 3.7899e+22],
        [5.2480e+05, 1.0175e+31, 9.7056e+24],
        [1.6283e+32, 3.7913e+22, 3.9653e+28],
        [1.0876e-19, 6.2027e+26, 2.3685e+21]])
```

Tensors张量: 张量的概念类似于Numpy中的ndarray数据结构, 最大的区别在于Tensor可以利用GPU的加速功能.

### 创建一个全零矩阵

```python
x = torch.zeros(5, 3, dtype=torch.long)
>>> print(x)
tensor([[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]])
```

创建一个全零矩阵并可指定数据元素的类型为long

### 数据创建张量

```python
x = torch.tensor([2.5, 3.5])
>>> print(x)
tensor([2.5000, 3.3000])
```

Pytorch的基本语法
---------------

### 加法操作

```python
y = torch.rand(5, 3)
>>> print(x + y)
tensor([[ 1.6978, -1.6979,  0.3093],
        [ 0.4953,  0.3954,  0.0595],
        [-0.9540,  0.3353,  0.1251],
        [ 0.6883,  0.9775,  1.1764],
        [ 2.6784,  0.1209,  1.5542]])
```

第一种加法操作

### 加法操作

```python
>>> print(torch.add(x, y))
tensor([[ 1.6978, -1.6979,  0.3093],
        [ 0.4953,  0.3954,  0.0595],
        [-0.9540,  0.3353,  0.1251],
        [ 0.6883,  0.9775,  1.1764],
        [ 2.6784,  0.1209,  1.5542]])
```

第二种加法操作

### 加法操作

```python
# 提前设定一个空的张量
result = torch.empty(5, 3)
# 将空的张量作为加法的结果存储张量
 torch.add(x, y, out=result)
>>> print(result)
tensor([[ 1.6978, -1.6979,  0.3093],
        [ 0.4953,  0.3954,  0.0595],
        [-0.9540,  0.3353,  0.1251],
        [ 0.6883,  0.9775,  1.1764],
        [ 2.6784,  0.1209,  1.5542]])
```

第三种加法操作


### 加法操作

```python
y.add_(x)
>>> print(y)
tensor([[ 1.6978, -1.6979,  0.3093],
        [ 0.4953,  0.3954,  0.0595],
        [-0.9540,  0.3353,  0.1251],
        [ 0.6883,  0.9775,  1.1764],
        [ 2.6784,  0.1209,  1.5542]])
```

第四种加法操作
注意:所有in-place的操作函数都有一个下划线的后缀.
比如x.copy_(y), x.add_(y), 都会直接改变x的值.

### 张量操作

```python

>>> print(x[:, 1])
tensor([-2.0902, -0.4489, -0.1441,  0.8035, -0.8341])
```

### 张量形状

```python
x = torch.randn(4, 4)
# tensor.view()操作需要保证数据元素的总数量不变
y = x.view(16)
# -1代表自动匹配个数
z = x.view(-1, 8)
>>> print(x.size(), y.size(), z.size())
torch.Size([4, 4]) torch.Size([16]) torch.Size([2, 8])
```

### 取张量元素

```python
x = torch.randn(1)
>>> print(x)
>>> print(x.item())
tensor([-0.3531])
-0.3530771732330322
```


### Torch Tensor和Numpy array互换

```python
a = torch.ones(5)
>>> print(a)
tensor([1., 1., 1., 1., 1.])
```

Torch Tensor和Numpy array共享底层的内存空间, 因此改变其中一个的值, 另一个也会随之被改变

### Torch Tensor转换为Numpy array

```python
b = a.numpy()
>>> print(b)
[1. 1. 1. 1. 1.]
```

### Numpy array转换为Torch Tensor:

```python
import numpy as np
a = np.ones(5)
b = torch.from_numpy(a)
np.add(a, 1, out=a)
>>> print(a)
>>> print(b)
[2. 2. 2. 2. 2.]
tensor([2., 2., 2., 2., 2.], dtype=torch.float64)
```
注意:所有在CPU上的Tensors, 除了CharTensor, 都可以转换为Numpy array并可以反向转换.
