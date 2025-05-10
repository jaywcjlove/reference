Linux 命令速查表
===

这个快速参考备忘单提供了使用 Linux 常用命令的使用清单

命令速查表
---

### 系统
<!--rehype:wrap-class=row-span-2-->

:--- | :---
:--- | :---
**`uname`** | 显示 linux 系统信息
**`uname -r`** | 显示内核版本信息
**`cat /etc/os-release`** | 显示 linux 系统详细信息
**`uptime`** | 显示系统运行的时间(包括平均负载)
**`hostname`** | 显示系统主机名
**`hostname -i`** | 显示系统的IP地址
**`last reboot`** | 显示系统重新启动历史记录
**`date`** | 显示当前系统日期和时间
**`timedatectl`** | 查询和更改系统时钟
**`cal`** | 显示当前日历的月份和日期
**`w`** | 显示系统中当前登录的用户
**`whoami`** | 显示您的登录身份
**`finger username`** | 显示有关用户的信息
**`sed -ri 's/.*swap.*/#&/' /etc/fstab && swapoff -a`** | 关闭swap
<!--rehype:className=style-list-->

### 硬件
<!--rehype:wrap-class=row-span-2-->

:--- | :---
:--- | :---
**`dmesg`** | 显示启动消息
**`cat /proc/cpuinfo`** | <pur>**CPU**</pur>: 显示 CPU 的更多信息，例如型号、核心等
**`cat /proc/meminfo`** | <pur>**内存**</pur>: 显示硬件内存的更多信息
**`df -h`** | <pur>**磁盘空间**</pur>: 显示磁盘空间大小(单位`G`)
**`hdparm -i /dev/xda`** | <pur>**磁盘**</pur>: 显示有关磁盘数据的信息
**`lshw`** | 显示有关系统硬件配置的信息
**`lsblk`** | 显示块设备相关信息
**`free -m`** | 显示系统中空闲和使用的内存，`-m`(MB)，`-g`(GB)
**`lspci -tv`** | 在树状图中显示 PCI 设备
**`lsusb -tv`** | 以树状图的形式显示 USB 设备
**`dmidecode`** | 显示BIOS中的硬件信息
**`hdparm -tT /dev/xda <:code>`** | 在设备xda上进行读速度测试
**`badblocks -s /dev/xda`** | 测试磁盘上不可读的块
<!--rehype:className=style-list-->

### 用户

:--- | :---
:--- | :---
**`id`** | 显示活动用户的详细信息，如uid、gid和组
**`last`** | 显示系统中的最后一次登录
**`who`** | 显示谁已登录到系统
**`groupadd "admin"`** | 添加组"admin"
**`adduser "Sam"`** | 添加用户 Sam
**`userdel "Sam"`** | 删除用户 Sam
**`usermod`** | 用于更改/修改用户信息
<!--rehype:className=style-list-->

### 登陆

:--- | :---
:--- | :---
**`ssh user@host`** | 使用指定用户安全连接到主机
**`ssh -p port_number user@host`** | 使用指定端口安全地连接到主机
**`ssh host`** | 通过SSH默认端口22安全连接到系统
**`telnet host`** | 通过telnet默认端口23连接到主机
<!--rehype:className=style-list-->

### 文件
<!--rehype:wrap-class=row-span-4-->

:--- | :---
:--- | :---
**`ls -al`** | 列出文件-包括常规文件和隐藏文件以及它们的权限
**`tree`** | 以树形结构列出文件，常用参数有：`-d`查看目录，`-L num`查看num层文件，`-a`查看隐藏文件
**`pwd`** | 显示当前目录文件路径
**`mkdir 'directory_name'`** | 创建一个新目录
**`rm file_name`** | 删除一个文件
**`rm -f filename`** | 强制删除文件
**`rm -r directory_name`** | 递归地删除一个目录
**`rm -rf directory_name`** | 强制并递归地删除一个目录
**`cp file1 file2`** | 将file1的内容复制到file2
**`cp -r dir1 dir2`** | 递归地将dir1复制到dir2。如果dir2不存在，则创建它
**`mv file1 file2`** | 将file1重命名为file2
**`ln -s /path/to/file_name link_name`** | 创建到file_name的软链接
**`touch file_name`** | 创建一个新文件
**`cat > file_name`** | 从键盘创建一个文件
**`more file_name`** | 输出文件的内容
**`head file_name`** | 显示文件的前10行
**`tail file_name`** | 显示文件的最后10行
**`gpg -c file_name`** | 加密一个文件
**`gpg file_name.gpg`** | 解密文件
**`wc`** | 打印文件中的字节、单词和行数
**`xargs`** | 从标准输入执行命令
<!--rehype:className=style-list-->

### 进程
<!--rehype:wrap-class=row-span-2-->

:--- | :---
:--- | :---
**`ps`** | 显示当前活动的进程
**`ps aux \| grep 'telnet'`** | 搜索进程'telnet'的id
**`pmap`** | 显示进程的内存映射
**`top`** | 显示所有正在运行的进程
**`kill pid`** | 使用给定的pid终止进程
**`killall proc`** | 杀死/终止所有名为proc的进程
**`pkill process-name`** | 向具有其名称的进程发送信号
**`lsof`** | 列出进程打开的文件 [#](./lsof.md)
**`renice 19 PID`** | 使进程以非常低的优先级运行
**`pgrep firefox`** | 查找Firefox进程ID
**`pstree`** | 在树模型中可视化过程
<!--rehype:className=style-list-->

### 安装包

:--- | :---
:--- | :---
**`rpm -i pkg_name.rpm`** | 安装 rpm 包
**`rpm -e pkg_name`** | 删除 rpm 包
**`dnf install pkg_name`** | 使用 dnf 工具安装软件包
<!--rehype:className=style-list-->

### 文件权限

:--- | :---
:--- | :---
**`chmod octal filename`** | 将文件权限更改为八进制
**`chmod 777 /data/test.c`** | 将rwx权限设置为owner、group和everyone(其他可以访问服务器的人)
**`chmod 755 /data/test.c`** | 将rwx设置为所有者，将r_x设置为组和所有人
**`chmod 766 /data/test.c`** | 为所有者设置rwx，为组和每个人设置rw
**`chown owner user-file`** | 更改文件的所有权
**`chown owner-user:owner-group file_name`** | 更改文件的所有者和组所有者
**`chown owner-user:owner-group directory`** | 更改目录的所有者和组所有者
<!--rehype:className=style-list-->

### 安装源(编译)

:--- | :---
:--- | :---
**`./configure`** | 检查系统，以获得构建程序所需的软件。它将构建包含有效构建项目所需的指令的Makefile
**`make`** |
**`make install`** | 编译后，该命令将二进制文件安装在默认/修改的路径中
<!--rehype:className=style-list-->

### 压缩/打包

:--- | :---
:--- | :---
**`tar -cf home.tar home<:code>`** | 创建名为"home"的存档文件。tar文件’home'
**`tar -xf files.tar`** | 解压档案文件"files.tar"
**`tar -zcvf home.tar.gz source-folder`** | 从源文件夹创建压缩的tar存档文件
**`gzip file`** | 压缩扩展名为.gz的文件
**`zip -r compressed.zip folder/`** | 递归压缩目录`folder`为压缩文件`compressed.zip`
**`unzip compressed.zip -d folder/`** | 在目录`folder`下解压文件
**`unzip -v compressed.zip`** | 查看但不解压文件
<!--rehype:className=style-list-->

### 搜索

:--- | :---
:--- | :---
**`grep ‘pattern’ files`** | 在文件中搜索给定的模式
**`grep -r pattern dir`** | Search recursively for a pattern in a given directory
**`locate file`** | 查找文件的所有实例
**`find /home/ -name "index"`** | 在/home文件夹中查找以’index’开头的文件名
**`find /home -size +10000k`** | 在主文件夹中查找大于10000k的文件
<!--rehype:className=style-list-->

### 网络
<!--rehype:wrap-class=row-span-3-->

:--- | :---
:--- | :---
**`ip addr show`** | 显示IP地址和所有网络接口
**`ip address add 192.168.0.1/24 dev eth0`** | 将IP地址192.168.0.1分配给接口eth0
**`ifconfig`** | 显示所有网络接口的IP地址
**`ping host`** | ping命令发送ICMP回送请求以建立到服务器/PC的连接
**`whois domain`** | 检索有关域名的更多信息
**`dig domain`** | 检索关于域的DNS信息
**`dig -x host`** | 对域执行反向查找
**`host google.com`** | 执行域名的IP查找
**`hostname -i`** | 显示本地IP地址
**`wget file_name`** | 从在线资源下载文件
**`netstat -pnltu`** | 显示所有活动监听端口
<!--rehype:className=style-list-->

### 文件传输

:--- | :---
:--- | :---
**`scp file1.txt server2/tmp`** | 安全地将file1.txt复制到/tmp目录中的server2
**`rsync -a /home/apps /backup/`** | 将/home/apps目录中的内容与/backup目录进行同步
<!--rehype:className=style-list-->

### 磁盘使用情况
<!--rehype:wrap-class=row-span-2-->

:--- | :---
:--- | :---
**`df -h`** | 显示安装系统上的空闲空间
**`df -i`** | 显示文件系统上的空闲inode
**`fdisk -l`** | 显示磁盘分区、大小和类型
**`du -sh`** | 以人类可读的格式显示当前目录中的磁盘使用情况
**`findmnt`** | 显示所有文件系统的目标挂载点
**`mount device-path mount-point`** | 挂载设备
<!--rehype:className=style-list-->

### 目录遍历

:--- | :---
:--- | :---
**`cd ..`** | 在目录树结构中向上移动一层
**`cd`** | 将目录更改为$HOME目录
**`cd /test`** | 将目录更改为/test目录
<!--rehype:className=style-list-->

### 文件描述符
<!--rehype:wrap-class=row-span-1-->

:--- | :---
:--- | :---
**`0`** | 标准输入
**`1`** | 标准输出
**`2`** | 错误输出
**`/dev/null`** | Linux的空设备文件，俗称“黑洞”

<!--rehype:className=style-list-->

### 输出重定向
<!--rehype:wrap-class=row-span-2 col-span-2-->

:--- | :---
:--- | :---
**`>`** | 覆盖运算符
**`>>`** | 追加运算符
**`>&`** | 重定向合并运算符
**`command > filename`** | 标准输出覆盖写入新文件
**`command 1> filename`** | 标准输出覆盖写入新文件（同上）
**`command 2> filename`** | 标准错误覆盖写入新文件
**`command >> filename`** | 标准输出追加到新文件
**`command 1>> filename`** | 标准输出追加到新文件（同上）
**`command 2>> filename`** | 标准错误追加到新文件
**`2>&1`** | 标准错误重定向到标准输出
**`1>&2`** | 标准输出重定向到标准错误
<!--rehype:className=left-align-->

前后台
---

### &（终端关闭，程序也关闭）
<!--rehype:wrap-class=row-span-2-->

:--- | :---
:--- | :---
**`command &`** | 使用后台进程模式执行 command
**`Ctrl+Z`** | 将当前进程放到后台（但程序是Stopped状态）
**`jobs`** | 查看任务（状态、ID等）
**`fg n`** | 将jobID为n的任务切到**前台**运行
**`bg n`** | 将jobID为n的任务切到**后台**运行

<!--rehype:className=style-list-->

### nohup（终端关闭，程序继续运行）
<!--rehype:wrap-class=row-span-2-->

:--- | :---
:--- | :---
**`nohup command &`** | 后台执行 command，标准输出到 nohup.out
**`nohup command > log_file &`** | 后台执行 command，标准输出到 log_file
**`nohup command > log_file 2>&1 &`** | 后台执行 command，标准输出和错误输出到 log_file
**`nohup command > log_file 2>err_log &`** | 后台执行 command，标准输出到 log_file，错误输出到 err_log
**`ps/kill`** | 查看进程/结束进程

<!--rehype:className=style-list-->

### screen（创建独立会话）
<!--rehype:wrap-class=row-span-2-->

:--- | :---
:--- | :---
**`screen -S my_session`** | 创建一个名为 my_session 的会话
**`screen -ls`** | 列出当前所有的 session
**`screen -r my_session`** | 重新连接 my_session 这个会话
**`screen -d my_session`** | 脱离 my_session 这个会话
**`Ctrl+a+d`** | 在 screen 中，脱离当前会话
**`exit`** | 在 screen 中，退出并删除当前 screen
**`-X -S my_session quit`** | 删除 my_session 这个会话
**`screen -wipe`** | 删除所有已经失效的会话

<!--rehype:className=style-list-->

快捷键
---

### 命令行编辑
<!--rehype:wrap-class=row-span-2 col-span-2-->

:--- | :---
:--- | :---
`Tab` | 自动补全
`Ctrl`+`A` | 移动光标到命令行首
`Ctrl`+`E` | 移动光标到命令行尾
`Ctrl`+`Left` | 光标左移一个单词
`Ctrl`+`Right` | 光标右移一个单词
`Ctrl`+`K` | 删除光标之后所有字符
`Ctrl`+`U` | 清空当前键入的命令
`Ctrl`+`W` | 删除光标前的单词
`Ctrl`+`Y` | 粘贴 `Ctrl` + `W` 或 `Ctrl` + `K` 删除的内容
`Ctrl`+`D` | 删除当前光标所在字符 (在没有字符时会关闭终端)
`Ctrl`+`B` (Left) | 光标左移（后退）
`Ctrl`+`F` (Right) | 光标右移（前进）
`Ctrl`+`H` (Backspace) | 删除光标的前一个字符
<!--rehype:className=left-align shortcuts-->

### 其他
<!--rehype:wrap-class=row-span-2-->

:--- | :---
:--- | :---
`Ctrl`+`L` | 清屏
`Ctrl`+`C` | 中断正在执行的程序
`Ctrl`+`R` | 按字符串寻找历史命令
`Ctrl`+`Z` | 将当前进程放到后台（但程序是Stopped状态）
`Shift`+`Insert` | 粘贴
`Ctrl`+`PageUp` | 屏幕输出向上翻页
`Ctrl`+`PageDown` | 屏幕输出向下翻页
`Ctrl`+`P` (Up) | 上一条命令
`Ctrl`+`N` (Down) | 下一条命令
<!--rehype:className=left-align shortcuts-->

技巧
---

### linux技巧
<!--rehype:wrap-class=row-span-2 col-span-2-->

 :---                                          | :---
:----------------------------------------------| :---
 **`du -h / \| sort -rh \| head -20`**         | 最大20个文件
 **`grep -Ev '^\s*($\|#\|;)' example.conf`**   | 查看去掉注释和空行
 **`echo <passwd> \| passwd root --stdin`**    | 单行改密码
 **`find /data/app/tmp -mtime +30 -name "*.flv" -exec rm -Rf {} \;`**  | 删除30天前文件
 **`for file in $(ls); do sed -i 's/nmg/sz/g' "$file"; done`**         | 当前目录修改字符串
 **`ssh -NfR remote_port:localhost:local_port user@remote_server`**    | ssh代理
 **`find . -wholename "*.sh" -exec dos2unix {} \;`**     | 修复脚本格式错误
 **`rsync -avz /source/ user@remote:/destination/`**     | 同步文件和目录到远程服务器，支持压缩和增量传输
 <!--rehype:className=left-align shortcuts-->  

另见
---

- [Linux命令大全搜索工具](https://jaywcjlove.github.io/linux-command) _(jaywcjlove.github.io)_
- [Linux命令大全(手册)](https://www.linuxcool.com/) _(linuxcool.com)_
- [MAN手册 - 中文](https://manpages.debian.org/buster/manpages-zh/index.html) _(debian.org)_
- [Linux 命令行速查表](https://www.cheat-sheet.cn/post/linux-command-line-cheat-sheet/) _(cheat-sheet.cn)_
