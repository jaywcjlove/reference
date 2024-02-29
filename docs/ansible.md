Ansible 备忘清单
====

此快速参考备忘单提供了使用 [Ansible](https://ansible.com) 的各种方法。

入门
---

### 安装

安装命令 | 环境
:-|-
`brew install ansible`   | macos
`yum install -y ansible` | centos
`pip install ansible`    | python

---

- [Ansible 官方文档](https://docs.ansible.com)

### 配置位置
<!--rehype:wrap-class=col-span-2 row-span-2-->

文件路径 | 说明
:-|-
`/etc/ansible/ansible.cfg`  | 系统范围的配置
`~/ansible.cfg`             | 用户特定的配置
`$pwd/ansible.cfg`          | 当前目录下的配置

配置文件优先级

- 如果没有任何其他配置文件，默认使用 `/etc/ansible/ansible.cfg`
- `~/.ansible.cfg` `家`目录下的 `.ansible.cfg`
- 当前目录下的 `ansible.cfg`，即在同一目录下 `ansible.cfg` 优先级高于 `~/.ansible.cfg`
- 环境变量 `exoport ANSIBLE_CONFIG=/$DIR/ansible.cfg`
<!--rehype:className=style-timeline-->

查看正在使用的 `ansible` 配置文件：

```bash
ansible --version | grep "config file"
```

### Inventory文件(hosts列表)

#### 静态Inventory

`/etc/ansible/hosts`

```ini
mail.example.com

[webservers]
foo.example.com
bar.example.com
```

### Inventory 主机组使用多个IP和域名

```ini
[web]
172.18.12.5[1:4]
[webservers]
www[01:50].example.com
```

### Inventory 主机组使用子主机组

```ini
[usa:children]
southeast
northeast
southwest
northwest
```

### 给多台主机设置变量

`group variables`
如果组中的所有主机共享一个变量值，则可以一次将该变量应用于整个组

```ini
[atlanta]
host1
host2

[atlanta:vars]
ntp_server=ntp.atlanta.example.com
proxy=proxy.atlanta.example.com

```

## 命令行(ad-hoc)

### ansible

检查Inventory是否生效

```shell
$ ansible all --list-hosts
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

### Ansible 命令帮助
<!--rehype:wrap-class=col-span-2 row-span-3-->

```shell
$ ansible
$ ansible <host-pattern> [options]
```

---

:- | -
:- | -
`-a MODULE_ARGS`, `--args=MODULE_ARGS` | 模块参数
`--ask-vault-pass` | 询问保险库密码
`-B SECONDS`, `--background=SECONDS` | 异步运行，X 秒后失败 (默认=N/A)
`-C`, `--check` | 不要做任何改变；相反，尝试预测可能发生的一些变化
`-D`, `--diff` | 更改(小)文件和模板时，显示这些文件中的差异； 与 `--check` 配合使用效果很好
`-e EXTRA_VARS`, `--extra-vars=EXTRA_VARS` | 将附加变量设置为 key=value 或 YAML/JSON
`-f FORKS`, `--forks=FORKS` | 指定要使用的并行进程数 (default=5)
`-h`, `--help` | 显示此帮助信息并退出
`-i INVENTORY`, `--inventory-file=INVENTORY` | 指定清单主机路径(默认=/etc/ansible/hosts)或逗号分隔的主机列表
`-l SUBSET`, `--limit=SUBSET` | 进一步将选定主机限制为其他模式
`--list-hosts` | 输出匹配主机列表；不执行任何其他操作
`-m MODULE_NAME`, `--module-name=MODULE_NAME` | 要执行的模块名称 (default=command)
`-M MODULE_PATH`, `--module-path=MODULE_PATH` | 指定模块库的路径 (default=None)
`--new-vault-password-file=NEW_VAULT_PASSWORD_FILE` | 用于重新生成密钥的新保管库密码文件
`-o`, `--one-line` | 压缩输出
`--output=OUTPUT_FILE` | 用于加密或解密的输出文件名； 使用 - 用于标准输出
`-P POLL_INTERVAL`, `--poll=POLL_INTERVAL` | 如果使用 -B 则设置轮询间隔(default=15)
`--syntax-check` | 对 playbook 执行语法检查，但不要执行它
`-t TREE`, `--tree=TREE` | 将输出记录到此目录
`--vault-password-file=VAULT_PASSWORD_FILE` | 保险库密码文件
`-v`, `--verbose` | 详细模式(-vvv 更多，-vvvv 启用连接调试)
`--version` | 显示程序的版本号并退出
<!--rehype:className=left-align-->

控制谁以及如何连接到主机，连接选项：

:- | -
:- | -
`-k`, `--ask-pass` | 询问连接密码
`--private-key=PRIVATE_KEY_FILE`, `--key-file=PRIVATE_KEY_FILE` | 使用此文件来验证连接
`-u REMOTE_USER`, `--user=REMOTE_USER` | 以此用户身份连接(default=None)
`-c CONNECTION`, `--connection=CONNECTION` | 要使用的连接类型 (default=smart)
`-T TIMEOUT`, `--timeout=TIMEOUT` | 以秒为单位覆盖连接超时 (default=10)
`--ssh-common-args=SSH_COMMON_ARGS` | 指定要传递给 sftp/scp/ssh 的常用参数 (e.g. ProxyCommand)
`--sftp-extra-args=SFTP_EXTRA_ARGS` | 指定仅传递给 `sftp` 的额外参数 (e.g. -f, -l)
`--scp-extra-args=SCP_EXTRA_ARGS` | 指定仅传递给 `scp` 的额外参数 (e.g. -l)
`--ssh-extra-args=SSH_EXTRA_ARGS` | 指定仅传递给 `ssh` 的额外参数 (e.g. -R)
<!--rehype:className=left-align-->

控制您成为目标主机上的用户的方式和用户，特权升级选项：

:- | -
:- | -
~~`-s`~~, ~~`--sudo`~~ | 使用 sudo (nopasswd) 运行操作(已弃用，使用 become)
~~`-U SUDO_USER`~~, ~~`--sudo-user=SUDO_USER`~~ | 所需的 sudo 用户(默认=root)(已弃用，使用 become)
~~`-S`~~, ~~`--su`~~ | 使用 su 运行操作(已弃用，使用 become)
~~`-R SU_USER`~~, ~~`--su-user=SU_USER`~~ | 以该用户身份使用 su 运行操作(默认 = root)(已弃用，使用 become)
`-b`, `--become` | 使用 become 运行操作(不暗示密码提示)
`--become-method=BECOME_METHOD` | 要使用的权限提升方法(默认=sudo)，有效选择：\[ `sudo` \| `su` \| `pbrun` \| `pfexec` \| `runas` \| `doas` \| `dzdo` \]
`--become-user=BECOME_USER` | 以该用户身份运行操作(默认=root)
~~`--ask-sudo-pass`~~ | 询问 sudo 密码(已弃用，使用 become)
~~`--ask-su-pass`~~ | 询问 su 密码(已弃用，使用 become)
`-K`, `--ask-become-pass` | 要求提权密码
<!--rehype:className=left-align-->

### Ansible Galaxy 工具

```bash
$ ansible-galaxy [delete|import|info|init|install|list|login|remove|search|setup] [--help] [options] ...
```
<!--rehype:className=wrap-text-->

---

:- | -
:- | -
`-h`, `--help` | 显示此帮助信息并退出
`-v`, `--verbose` | 详细模式(-vvv 更多，-vvvv 启用连接调试)
`--version` | 显示程序的版本号并退出
<!--rehype:className=style-list-->

---

```bash
$ ansible-galaxy search --author <AUTHOR>
$ ansible-galaxy search --platforms <PLATFORM>
$ ansible-galaxy search --galaxy-tags <TAG>
$ ansible-galaxy info <ROLE>
$ ansible-galaxy install <ROLE> -p <ROLE_DIRECTORY>
$ ansible-galaxy install -r <ROLE1> <ROLE2> <ROLE3> ...
$ ansible-galaxy list
$ ansible-galaxy remove <ROLE>
$ ansible-galaxy init <ROLE>
$ ansible-galaxy init --offline <ROLE>
```
<!--rehype:className=wrap-text-->

### ansible-doc

在本地访问文档

```bash
$ ansible-doc
$ ansible-doc [options] [module...]
```

---

:- | -
:- | -
`-h`, `--help` | 显示此帮助信息并退出
`-l`, `--list` | 列出可用模块
`-M MODULE_PATH`, `--module-path=MODULE_PATH` | 指定模块库的路径 (default=None)
`-s`, `--snippet` | 显示指定模块的剧本片段
`-v`, `--verbose` | 详细模式(-vvv 更多，-vvvv 启用连接调试)
`--version` | 显示程序的版本号并退出
<!--rehype:className=style-list-->

### ansible-vault

```bash
$ ansible-vault
$ ansible-vault [create|decrypt|edit|encrypt|rekey|view] [--help] [options] vaultfile.yml
```

---

:- | -
:- | -
`--ask-vault-pass` | 询问保险库密码
`-h`, `--help` | 显示此帮助信息并退出
`--new-vault-password-file=NEW_VAULT_PASSWORD_FILE` | 用于重新生成密钥的新保管库密码文件
`--output=OUTPUT_FILE` | 用于加密或解密的输出文件名； 使用 - 用于标准输出
`--vault-password-file=VAULT_PASSWORD_FILE` | 保险库密码文件
`-v`, `--verbose` | 详细模式(-vvv 更多，-vvvv 启用连接调试)
`--version` | 显示程序的版本号并退出
<!--rehype:className=style-list-->

### ansible-playbook
<!--rehype:wrap-class=row-span-2-->

```bash
$ ansible-playbook
$ ansible-playbook playbook.yml
```

---

:- | -
:- | -
`--ask-vault-pass` | 询问保险库密码
`-C`, `--check` | 不要做任何改变；相反，尝试预测可能发生的一些变化
`-D`, `--diff` | 更改（小）文件和模板时，显示这些文件中的差异；与 `--check` 配合使用效果很好
`-e EXTRA_VARS`, `--extra-vars=EXTRA_VARS` | 将附加变量设置为 key=value 或 YAML/JSON
`--flush-cache` | 清除事实缓存
`--force-handlers` | 即使任务失败也运行处理程序
`-f FORKS`, `--forks=FORKS` | 指定要使用的并行进程数（默认值=5）
`-h`, `--help` | 显示此帮助信息并退出
`-i INVENTORY`, `--inventory-file=INVENTORY` | 指定清单主机路径（默认=/etc/ansible/hosts）或逗号分隔的主机列表
`-l SUBSET`, `--limit=SUBSET` | 进一步将选定主机限制为其他模式
`--list-hosts` | 输出匹配主机列表；不执行任何其他操作
`--list-tags` | 列出所有可用的标签
`--list-tasks` | 列出所有将要执行的任务
`-M MODULE_PATH`, `--module-path=MODULE_PATH` | 指定模块库的路径（默认=无）
`--new-vault-password-file=NEW_VAULT_PASSWORD_FILE` | 用于重新生成密钥的新保管库密码文件
`--output=OUTPUT_FILE` | 用于加密或解密的输出文件名；使用 - 用于标准输出
`--skip-tags=SKIP_TAGS` | 只运行标签与这些值不匹配的播放和任务
`--start-at-task=START_AT_TASK` | 在匹配此名称的任务处启动剧本
`--step` | 一步一步：在运行前确认每个任务
`--syntax-check` | 对 playbook 执行语法检查，但不要执行它
`-t TAGS`, `--tags=TAGS` | 只运行带有这些值标记的播放和任务
`--vault-password-file=VAULT_PASSWORD_FILE` | 保险库密码文件
`-v`, `--verbose` | 详细模式（-vvv 更多，-vvvv 启用连接调试）
`--version` | 显示程序的版本号并退出
<!--rehype:className=style-list-->

连接选项：

:- | -
:- | -
`-k`, `--ask-pass` | 询问连接密码
`--private-key=PRIVATE_KEY_FILE`, `--key-file=PRIVATE_KEY_FILE` | 使用此文件来验证连接
`-u REMOTE_USER`, `--user=REMOTE_USER` | 以此用户身份连接(默认=None)
`-c CONNECTION`, `--connection=CONNECTION` | 要使用的连接类型(默认=smart)
`-T TIMEOUT`, `--timeout=TIMEOUT` | 以秒为单位覆盖连接超时(默认值 = 10)
`--ssh-common-args=SSH_COMMON_ARGS` | 指定要传递给 sftp/scp/ssh 的常用参数(例如 ProxyCommand)
`--sftp-extra-args=SFTP_EXTRA_ARGS` | 指定仅传递给 sftp 的额外参数(例如 -f、-l)
`--scp-extra-args=SCP_EXTRA_ARGS` | 指定仅传递给 scp 的额外参数(例如 -l)
`--ssh-extra-args=SSH_EXTRA_ARGS` | 指定仅传递给 ssh 的额外参数(例如 -R)
<!--rehype:className=style-list-->

特权升级选项：

:- | -
:- | -
`-s`, `--sudo` | 使用 sudo (nopasswd) 运行操作(已弃用，使用 become)
`-U SUDO_USER`, `--sudo-user=SUDO_USER` | 所需的 sudo 用户(默认=root)(已弃用，使用become)
`-S`, `--su` | 使用 su 运行操作(已弃用，使用 become)
`-R SU_USER`, `--su-user=SU_USER` | 以该用户身份使用 su 运行操作(默认 = root)(已弃用，使用become)
`-b`, `--become` | 使用 become 运行操作(不暗示密码提示)
`--become-method=BECOME_METHOD` | 要使用的权限提升方法(默认=sudo)，有效选择：[ sudo \| su \| pbrun \| pfexec \| runas \| doas \| dzdo ]
`--become-user=BECOME_USER` | 以该用户身份运行操作(默认=root)
`--ask-sudo-pass` | 询问 sudo 密码(已弃用，使用 become)
`--ask-su-pass` | 询问 su 密码(已弃用，使用 become)
`-K`, `--ask-become-pass` | 要求提权密码
<!--rehype:className=style-list-->

### ansible-pull
<!--rehype:wrap-class=row-span-2-->

```bash
$ ansible-pull 
$ ansible-pull -U <repository> [options]
```

---

:- | -
:- | -
`--accept-host-key` | 如果尚未添加，则添加 repo url 的主机密钥
`--ask-vault-pass` | 询问保险库密码
`-C CHECKOUT`, `--checkout=CHECKOUT` | 分支/标签/提交结帐。默认为存储库模块的行为。
`-d DEST`, `--directory=DEST` | 签出存储库的目录
`-e EXTRA_VARS`, `--extra-vars=EXTRA_VARS` | 将附加变量设置为 key=value 或 YAML/JSON
`-f`, `--force` | 即使无法更新存储库也运行 playbook
`--full` | 做一个完整的克隆，而不是一个浅的
`-h`, `--help` | 显示此帮助信息并退出
`-i INVENTORY`, `--inventory-file=INVENTORY` | 指定清单主机路径(默认=/etc/ansible/hosts)或逗号分隔的主机列表
`-l SUBSET`, `--limit=SUBSET` | 进一步将选定主机限制为其他模式
`--list-hosts` | 输出匹配主机列表；不执行任何其他操作
`-m MODULE_NAME`, `--module-name=MODULE_NAME` | 存储库模块名称，ansible 将使用它来签出 repo。默认是 git
`-M MODULE_PATH`, `--module-path=MODULE_PATH` | 指定模块库的路径(默认=无)
`--new-vault-password-file=NEW_VAULT_PASSWORD_FILE` | 用于重新生成密钥的新保管库密码文件
`-o`, `--only-if-changed` | 仅在存储库已更新时才运行 playbook
`--output=OUTPUT_FILE` | 用于加密或解密的输出文件名；使用 - 用于标准输出
`--purge` | 剧本运行后清除结帐
`--skip-tags=SKIP_TAGS` | 只运行标签与这些值不匹配的播放和任务
`-s SLEEP`, `--sleep=SLEEP` | 在开始之前休眠随机间隔(在 0 到 n 秒之间)。这是分散 git 请求的有用方法
`-t TAGS`, `--tags=TAGS` | 只运行带有这些值标记的播放和任务
`-U URL`, `--url=URL` | 剧本存储库的 URL
`--vault-password-file=VAULT_PASSWORD_FILE` | 保险库密码文件
`-v`, `--verbose` | 详细模式(-vvv 更多，-vvvv 启用连接调试)
`--verify-commit` | 验证签出提交的 GPG 签名，如果失败则中止运行 playbook。这就需要对应的VCS模块来支持这样的操作
`--version` | 显示程序的版本号并退出
<!--rehype:className=style-list-->

连接选项：

:- | -
:- | -
`-k`, `--ask-pass` | 询问连接密码
`--private-key=PRIVATE_KEY_FILE`, `--key-file=PRIVATE_KEY_FILE` | 使用此文件来验证连接
`-u REMOTE_USER`, `--user=REMOTE_USER` | 以此用户身份连接(默认=无)
`-c CONNECTION`, `--connection=CONNECTION` | 要使用的连接类型(默认=智能)
`-T TIMEOUT`, `--timeout=TIMEOUT` | 以秒为单位覆盖连接超时(默认值 = 10)
`--ssh-common-args=SSH_COMMON_ARGS` | 指定要传递给 sftp/scp/ssh 的常用参数(例如 ProxyCommand)
`--sftp-extra-args=SFTP_EXTRA_ARGS` | 指定仅传递给 sftp 的额外参数(例如 -f、-l)
`--scp-extra-args=SCP_EXTRA_ARGS` | 指定仅传递给 scp 的额外参数(例如 -l)
`--ssh-extra-args=SSH_EXTRA_ARGS` | 指定仅传递给 ssh 的额外参数(例如 -R)
<!--rehype:className=style-list-->

特权升级选项：

:- | -
:- | -
`--ask-sudo-pass` | 询问 sudo 密码(已弃用，使用become)
`--ask-su-pass` | 询问 su 密码(已弃用，使用become)
`-K`, `--ask-become-pass` | 要求提权密码
<!--rehype:className=style-list-->

<!-- ### ansible-playbook -->
<!-- todo -->

### ansible常用模块
<!--rehype:wrap-class=col-span-3 -->

`Ansible` 的模块已经高达 `3000+` 之多。但是个人在日常工作中，比较常见的大约 `20` 多个

```bash
$  ansible-doc --list  #查询所有模块
$  ansible <host-pattern> [options] # 标准使用方式
```

---
| :-               | -                                                | -                                                            |
| ---------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| ping             | 检查指定节点机器是否还能连通                     | `ansible all -m ping`                                        |
| command          | 用于在各受控端节点运行指定的命令                 | `ansible all -m command -a 'hostname'`                       |
| shell            | shell模块可以特殊字符，而command是不支持         | `ansible all -m shell -a 'hostname && date'`                 |
| hostname         | 修改远程受控节点的主机名的模块                   | `ansible -i /opt/hosts xx -m hostname -a 'name=ansible-client-199'` |
| copy             | 在远程主机执行复制操作文件                       | `ansible all -m copy -a 'src=/etc/hosts dest=/opt/hosts backup=yes'` |
| fetch            | 从远程主机获取文件到管理节点，但是不支持目录操作 | `ansible all -m fetch -a "src=/etc/yum.repos.d/epel.repo dest=/usr/local/src"` |
| script           | 管理端一个脚本，然后在远程服务器上执行           | `ansible all  -m script -a '/root/time.sh'`                  |
| file             | 主要用于远程主机上的文件和目录操作               | `ansible all -m file -a "path=/root/rsync.password mode=600 state=touch"` |
| cron             | 管理执行任务计划模块（增删改查）                 | `ansible all -m cron -a "name='test a job' user=root job='/bin/sh /server/scripts/test.sh' minute=* hour=* day=* month=* weekday=*"` |
| yum              | RedHat和CentOS的软件包安装和管理                 | 安装<br />`ansible all -m yum -a "name=httpd state=present"`<br/>`ansible all -m yum -a "name=httpd state=installed"`<br />卸载<br />`ansible all -m yum -a "name=httpd state=absent"`<br/>`ansible all -m yum -a "name=httpd state=removed"` |
| `service`和`systemd` | 用于管理远程主机的服务                           | `ansible all -m systemd -a "name=httpd state=started enabled=yes"`<br />`ansible all -m systemd -a "name=httpd state=restarted"` |
| user             | useradd, userdel, usermod                        | `ansible all -m user -a 'name=haha remove=no state=absent'`  |
| group            | groupadd, groupdel, groupmod                     | `ansible all -m group -a 'name=mygroup state=absent'`        |
| setup            | 可收集远程主机的facts变量的信息                  | `ansible all -m setup -a 'filter=ansible_default_ipv4'`      |
| authorized_key   | 为特定的用户账号添加或删除 SSH authorized keys   | `ansible all -m authorized_key -a "user=root key='{{lookup('file','/root/.ssh/id_rsa.pub')}}' path=/root/.ssh/authorized_keys manage_dir=no"` |
| replace          | 和 sed 命令比较类似，用于正则匹配和替换          | `ansible all -m replace -a "path=/etc/fstab regexp=^(UUID.*) replace='#\1'"` |
| lineinfile       | 正则匹配，更改某个关键参数值                     | `ansible all -m lineinfile -a "path=/etc/selinux/config regexp='^SELINUX=' line='SELINUX=disabled'"` |
<!--rehype:className=left-align-->

另见
---

- [Getting started with Ansible](https://docs.ansible.com/ansible/latest/getting_started/index.html)  
- [Introduction to ad hoc commands](https://docs.ansible.com/ansible/latest/user_guide/intro_adhoc.html)
- [Ansible cheatsheet](https://github.com/luckylittle/ansible-cheatsheet/blob/master/ansible-cheatsheet.txt)
- [Ansible Tutorial for Beginners: Ultimate Playbook & Examples](https://spacelift.io/blog/ansible-tutorial)
