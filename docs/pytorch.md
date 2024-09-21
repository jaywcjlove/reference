Pytorch  备忘清单
===

Pytorch 是一种开源机器学习框架，可加速从研究原型设计到生产部署的过程，备忘单是  官网
备忘清单为您提供了 [Pytorch](https://pytorch.org/) 基本语法和初步应用参考

入门
-----

### 介绍

- [Pytorch 官网](https://pytorch.org/) _(pytorch.org)_
- [Pytorch 官方备忘清单](https://pytorch.org/tutorials/beginner/ptcheat.html) _(pytorch.org)_

### 认识 Pytorch
<!--rehype:wrap-class=row-span-2-->

```python
from __future__ import print_function
import torch
x = torch.empty(5, 3)
>>> print(x)
tensor([
    [2.4835e+27, 2.5428e+30, 1.0877e-19],
    [1.5163e+23, 2.2012e+12, 3.7899e+22],
    [5.2480e+05, 1.0175e+31, 9.7056e+24],
    [1.6283e+32, 3.7913e+22, 3.9653e+28],
    [1.0876e-19, 6.2027e+26, 2.3685e+21]
])
```
<!--rehype:className=wrap-text-->

Tensors 张量: 张量的概念类似于Numpy中的ndarray数据结构, 最大的区别在于Tensor可以利用GPU的加速功能.

### 创建一个全零矩阵
<!--rehype:wrap-class=row-span-2-->

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

Pytorch 的基本语法
---------------

### 加法操作(1)

```python
y = torch.rand(5, 3)
>>> print(x + y)
tensor([[ 1.6978, -1.6979,  0.3093],
        [ 0.4953,  0.3954,  0.0595],
        [-0.9540,  0.3353,  0.1251],
        [ 0.6883,  0.9775,  1.1764],
        [ 2.6784,  0.1209,  1.5542]])
```

### 加法操作(2)

```python
>>> print(torch.add(x, y))
tensor([[ 1.6978, -1.6979,  0.3093],
        [ 0.4953,  0.3954,  0.0595],
        [-0.9540,  0.3353,  0.1251],
        [ 0.6883,  0.9775,  1.1764],
        [ 2.6784,  0.1209,  1.5542]])
```

### 加法操作(3)

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

### 加法操作(4)
<!--rehype:wrap-class=row-span-2-->

```python
y.add_(x)
>>> print(y)
tensor([[ 1.6978, -1.6979,  0.3093],
        [ 0.4953,  0.3954,  0.0595],
        [-0.9540,  0.3353,  0.1251],
        [ 0.6883,  0.9775,  1.1764],
        [ 2.6784,  0.1209,  1.5542]])
```

注意: 所有 `in-place` 的操作函数都有一个下划线的后缀。
比如 `x.copy_(y)`, `x.add_(y)`, 都会直接改变x的值

### 张量操作

```python
>>> print(x[:, 1])
tensor([-2.0902, -0.4489, -0.1441,  0.8035, -0.8341])
```
<!--rehype:className=wrap-text-->

### 张量形状
<!--rehype:wrap-class=row-span-2-->

```python
x = torch.randn(4, 4)
# tensor.view()操作需要保证数据元素的总数量不变
y = x.view(16)
# -1代表自动匹配个数
z = x.view(-1, 8)
>>> print(x.size(), y.size(), z.size())
torch.Size([4, 4]) torch.Size([16]) torch.Size([2, 8])
```
<!--rehype:className=wrap-text-->

### 取张量元素

```python
x = torch.randn(1)
>>> print(x)
>>> print(x.item())
tensor([-0.3531])
-0.3530771732330322
```

### Torch Tensor 和 Numpy array互换

```python
a = torch.ones(5)
>>> print(a)
tensor([1., 1., 1., 1., 1.])
```

Torch Tensor和Numpy array共享底层的内存空间, 因此改变其中一个的值, 另一个也会随之被改变

### Torch Tensor 转换为 Numpy array

```python
b = a.numpy()
>>> print(b)
[1. 1. 1. 1. 1.]
```

### Numpy array转换为Torch Tensor

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
<!--rehype:className=wrap-text-->

注意: 所有在CPU上的Tensors, 除了CharTensor, 都可以转换为Numpy array并可以反向转换.

### squeeze函数

```python
>>> x = torch.rand(1, 2, 1, 28, 1)

# squeeze不加参数，默认去除所有为1的维度
>>> x.squeeze().shape
torch.Size([2, 28])

# squeeze加参数，去除指定为1的维度
>>> x.squeeze(dim=0).shape
torch.Size([2, 1, 28, 1])

# squeeze加参数，如果不为1，则不变
>>> x.squeeze(1).shape
torch.Size([1, 2, 1, 28, 1])

# 既可以是函数，也可以是方法
>>> torch.squeeze(x,-1).shape
torch.Size([1, 2, 1, 28])
```

### unsqueeze函数

```python
>>> x = torch.rand(2, 28)
# unsqueeze必须加参数，    _ 2 _ 28 _
>>> x.unsqueeze(0).shape  
# 参数代表在哪里添加维度    0   1    2
torch.Size([1, 2, 28])        
# 既可以是函数，也可以是方法
>>> torch.unsqueeze(x, -1).shape
torch.Size([2, 28, 1])
```

Cuda 相关
---

### 检查 Cuda 是否可用

```python
>>> import torch.cuda
>>> torch.cuda.is_available()
>>> True
```

### 列出 GPU 设备
<!--rehype:wrap-class=col-span-2 row-span-2-->

```python
import torch

device_count = torch.cuda.device_count()
print("CUDA 设备")

for i in range(device_count):
    device_name = torch.cuda.get_device_name(i)
    total_memory = torch.cuda.get_device_properties(i).total_memory / (1024 ** 3)
    print(f"├── 设备 {i}: {device_name}, 容量: {total_memory:.2f} GiB")

print("└── (结束)")
```

### 将模型、张量等数据在 GPU 和内存之间进行搬运

```python
import torch
# 将 0 替换为您的 GPU 设备索引或者直接使用 "cuda"
device = f"cuda:0"
# 移动到GPU
tensor_m = torch.tensor([1, 2, 3])
tensor_g = tensor_m.to(device)
model_m = torch.nn.Linear(1, 1)
model_g = model_m.to(device)
# 向后移动
tensor_m = tensor_g.cpu()
model_m = model_g.cpu()
```

导入 Imports
---

### 一般

```python
# 根包
import torch
```

数据集表示和加载

```python
from torch.utils.data import Dataset, DataLoader
```
<!--rehype:className=wrap-text-->

### 神经网络 API
<!--rehype:wrap-class=row-span-2-->

```python
# 计算图
import torch.autograd as autograd
# 计算图中的张量节点
from torch import Tensor
```

神经网络

```python
import torch.nn as nn

# 层、激活等
import torch.nn.functional as F
# 优化器，例如 梯度下降、ADAM等
import torch.optim as optim
```

混合前端装饰器和跟踪 jit

```python
from torch.jit import script, trace
```

### ONNX
<!--rehype:wrap-class=row-span-2-->

```python
torch.onnx.export(model, dummy data, xxxx.proto)
# 导出 ONNX 格式
# 使用经过训练的模型模型，dummy
# 数据和所需的文件名
```
<!--rehype:className=wrap-text-->

加载 ONNX 模型

```python
model = onnx.load("alexnet.proto")
```

检查模型，IT 是否结构良好

```python
onnx.checker.check_model(model)
```

打印一个人类可读的，图的表示

```python
onnx.helper.printable_graph(model.graph)
```

### Torchscript 和 JIT

```python
torch.jit.trace()
```

使用你的模块或函数和一个例子，数据输入，并追溯计算步骤，数据在模型中前进时遇到的情况

```python
@script
```

装饰器用于指示被跟踪代码中的数据相关控制流

### Vision
<!--rehype:wrap-class=col-span-2-->

```python
# 视觉数据集，架构 & 变换
from torchvision import datasets, models, transforms
# 组合转换
import torchvision.transforms as transforms
```
<!--rehype:className=wrap-text-->

### 分布式训练

```python
# 分布式通信
import torch.distributed as dist
# 内存共享进程
from torch.multiprocessing import Process
```
<!--rehype:className=wrap-text-->

另见
---

- [Pytorch 官网](https://pytorch.org/) _(pytorch.org)_
- [Pytorch 官方备忘清单](https://pytorch.org/tutorials/beginner/ptcheat.html) _(pytorch.org)_
