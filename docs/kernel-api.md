linux kernel api 备忘清单
===

列表管理函数（List Management Functions）
----

### 初始化 `list_head` 结构体

**API**

```
void INIT_LIST_HEAD(struct list_head *list)
```

**参数**

- `struct list_head *list` 需要初始化的 `list_head` 结构体

**描述**

将 `list_head` 结构体初始化，使其指向自身。如果 `list` 作为链表的头节点（即表头），那么初始化后的结果是一个空链表。

### 添加新节点

**API**

```
void list_add(struct list_head *new, struct list_head *head)
```

**参数**

- `struct list_head *new` 要插入的新节点
- `struct list_head *head` 作为基准的链表节点，新节点将插入到其后

**描述**

在指定的 head 之后插入一个新节点 new，用于维护双向链表结构。这在实现链表管理时非常有用，例如构建栈或队列等数据结构。

基础C库函数（Basic C Library Functions）
----

TODO

基础 kernel 库函数（Basic Kernel Library Functions）
----

TODO

CRC 和数学函数（CRC and Math Functions in Linux）
----

TODO

IPC 功能（Kernel IPC facilities）
----

TODO

FIFO Buffer
----

TODO

转发接口（relay interface support）
----

TODO

内核模块支持（Module Support）
----

TODO

硬件接口（Hardware Interfaces）
----

TODO

MTRR处理（MTRR Handling）
----

TODO

安全框架（Security Framework）
----

TODO

审计接口（Audit Interfaces）
----

TODO

Accounting Framework
----

TODO

块设备（Block Devices）
----

TODO

字符设备（Char devices）
----

TODO

时钟框架（Clock Framework）
----

TODO

同步原语（Synchronization Primitives）
----

TODO

其他
----

- [ ] 字符设备之 PCI 接口
- [ ] 字符设备之 v4l2 接口
- [ ] 字符设备之 drm 接口
- [ ] 巴拉巴拉...

另见
---

- [kernel英文文档](https://docs.kernel.org/core-api/kernel-api.html)
- [kernel中文文档](https://docs.kernel.org/translations/zh_CN/core-api/index.html)
- [kernel PCI接口](https://docs.kernel.org/driver-api/pci/pci.html)
- [kernel drm接口](https://docs.kernel.org/gpu/drm-internals.html)
- [kernel v4l2接口](https://docs.kernel.org/userspace-api/media/v4l/v4l2.html)
