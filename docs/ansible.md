Ansible 备忘清单
====

此快速参考备忘单提供了使用 Ansible 的各种方法。

入门
---
### 安装
安装命令 | 环境
:-|-
`brew install ansible`   | macos
`yum install -y ansible` | centos
`pip install ansible`    | python

### 配置位置
文件路径 | 说明
:-|-
`/etc/ansible/ansible.cfg`  | 系统范围的配置
`~/ansible.cfg`             | 用户特定的配置
`$pwd/ansible.cfg`          | 当前目录下的配置

### Inventory文件(hosts列表)
#### 静态Inventory
`/etc/ansible/hosts`
```INI
mail.example.com

[webservers]
foo.example.com
bar.example.com
```

## 命令行(ad-hoc)
### ansible
检查Inventory是否生效
```shell
ansible all --list-hosts
```
ping所有目标
```shell
$ ansible all -m ping
```
ping本地(不使用SSH连接)
```shell
$ ansible all -i localhost, -e '{"ansible_connection": "local"}' -m ping
```
<!--rehype:className=wrap-text -->
本地执行命令
```shell
$ ansible all -i localhost, -e '{"ansible_connection": "local"}' -a 'hostname'
```
<!--rehype:className=wrap-text -->
获取本地主机的信息
```shell
$ ansible all -i localhost, -e '{"ansible_connection": "local"}' -m setup
``` 
<!--rehype:className=wrap-text -->
获取远程到本地
```shell
$ ansible target -m fetch -a "src=/tmp/seq dest=/tmp/seq"
``` 
<!--rehype:className=wrap-text -->
拷贝本地到远程
```shell
$ ansible target -m copy -a "src=/tmp/seq dest=/tmp/seq"
``` 
<!--rehype:className=wrap-text -->


<!-- ### ansible-playbook -->
<!-- todo -->



另见
---
[Getting started with Ansible](https://docs.ansible.com/ansible/latest/getting_started/index.html)  
[Introduction to ad hoc commands](https://docs.ansible.com/ansible/latest/user_guide/intro_adhoc.html)