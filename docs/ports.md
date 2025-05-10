常用端口 备忘清单
===

这是一份常见端口的对照清单。

端口对照清单
----

### 最常用端口
<!--rehype:wrap-class=col-span-4-->

| 端口号 | 协议 | 使用程序       | 备注/用途                                                    |
| ------ | ---- | -------------- | ------------------------------------------------------------ |
| `1`      | TCP  | tcpmux         | TCP端口服务多路复用                                          |
| `5`      | TCP  | rje            | 远程作业入口                                                 |
| `7`      | TCP  | echo           | Echo服务                                                     |
| `9`      | TCP  | discard        | 用于连接测试的空服务                                         |
| `11`     | TCP  | systat         | 用于列举连接了的端口的系统状态                               |
| `13`     | TCP  | daytime        | 给请求主机发送日期和时间                                     |
| `17`     | TCP  | qotd           | 给连接了的主机发送每日格言                                   |
| `18`     | TCP  | msp            | 消息发送协议                                                 |
| `19`     | TCP  | chargen        | 字符生成服务；发送无止境的字符流                             |
| `20`     | TCP  | ftp-data       | FTP数据端口                                                  |
| `21`     | TCP  | ftp            | 文件传输协议（FTP）端口；有时被文件服务协议（FSP）使用       |
| `22`     | TCP  | ssh            | 安全Shell（SSH）服务                                         |
| `23`     | TCP  | telnet         | Telnet服务                                                   |
| `25`     | TCP  | smtp           | 简单邮件传输协议（SMTP）                                     |
| `37`     | TCP  | time           | 时间协议                                                     |
| `39`     | TCP  | rlp            | 资源定位协议                                                 |
| `42`     | TCP  | nameserver     | 互联网名称服务                                               |
| `43`     | TCP  | nicname        | WHOIS目录服务                                                |
| `49`     | TCP  | tacacs         | 用于基于TCP/IP验证和访问的终端访问控制器访问控制系统         |
| `50`     | TCP  | re-mail-ck     | 远程邮件检查协议                                             |
| `53`     | TCP  | domain         | 域名服务（如BIND）                                           |
| `63`     | TCP  | whois++        | WHOIS++，被扩展了的WHOIS服务                                 |
| `67`     | TCP  | bootps         | 引导协议（BOOTP）服务；还被动态主机配置协议（DHCP）服务使用  |
| `68`     | TCP  | bootpc         | Bootstrap（BOOTP）客户；还被动态主机配置协议（DHCP）客户使用 |
| `69`     | TCP  | tftp           | 小文件传输协议（TFTP）                                       |
| `70`     | TCP  | gopher         | Gopher互联网文档搜寻和检索                                   |
| `71`     | TCP  | netrjs-1       | 远程作业服务                                                 |
| `72`     | TCP  | netrjs-2       | 远程作业服务                                                 |
| `73`     | TCP  | netrjs-3       | 远程作业服务                                                 |
| `73`     | TCP  | netrjs-4       | 远程作业服务                                                 |
| `79`     | TCP  | finger         | 用于用户联系信息的Finger服务                                 |
| `80`     | TCP  | http           | 用于万维网（WWW）服务的超文本传输协议（HTTP）                |
| `88`     | TCP  | kerberos       | Kerberos网络验证系统                                         |
| `95`     | TCP  | supdup         | Telnet协议扩展                                               |
| `101`    | TCP  | hostname       | SRI-NIC机器上的主机名服务                                    |
| `102`    | TCP  | iso-tsap       | ISO开发环境（ISODE）网络应用                                 |
| `105`    | TCP  | csnet-ns       | 邮箱名称服务器；也被CSO名称服务器使用                        |
| `107`    | TCP  | rtelnet        | 远程Telnet                                                   |
| `109`    | TCP  | pop2           | 邮局协议版本2                                                |
| `110`    | TCP  | pop3           | 邮局协议版本3                                                |
| `111`    | TCP  | sunrpc         | 用于远程命令执行的远程过程调用（RPC）协议，被网络文件系统（NFS）使用 |
| `113`    | TCP  | auth           | 验证和身份识别协议                                           |
| `115`    | TCP  | sftp           | 安全文件传输协议（SFTP）服务                                 |
| `117`    | TCP  | uucp-path      | Unix到Unix复制协议（UUCP）路径服务                           |
| `119`    | TCP  | nntp           | 用于USENET讨论系统的网络新闻传输协议（NNTP）                 |
| `123`    | TCP  | ntp            | 网络时间协议（NTP）                                          |
| `137`    | TCP  | netbios-ns     | 在红帽企业Linux中被Samba使用的NETBIOS名称服务                |
| `138`    | TCP  | netbios-dgm    | 在红帽企业Linux中被Samba使用的NETBIOS数据报服务              |
| `139`    | TCP  | netbios-ssn    | 在红帽企业Linux中被Samba使用的NET BIOS会话服务               |
| `143`    | TCP  | imap           | 互联网消息存取协议（IMAP）                                   |
| `161`    | TCP  | snmp           | 简单网络管理协议（SNMP）                                     |
| `162`    | TCP  | snmptrap       | SNMP的陷阱                                                   |
| `163`    | TCP  | cmip-man       | 通用管理信息协议（CMIP）                                     |
| `164`    | TCP  | cmip-agent     | 通用管理信息协议（CMIP）                                     |
| `174`    | TCP  | mailq          | MAILQ                                                        |
| `177`    | TCP  | xdmcp          | X显示管理器控制协议                                          |
| `178`    | TCP  | nextstep       | NeXTStep窗口服务器                                           |
| `179`    | TCP  | bgp            | 边界网络协议                                                 |
| `191`    | TCP  | prospero       | Cliffod Neuman的Prospero服务                                 |
| `194`    | TCP  | irc            | 互联网中继聊天（IRC）                                        |
| `199`    | TCP  | smux           | SNMP UNIX多路复用                                            |
| `201`    | TCP  | at-rtmp        | AppleTalk选路                                                |
| `202`    | TCP  | at-nbp         | AppleTalk名称绑定                                            |
| `204`    | TCP  | at-echo        | AppleTalk echo服务                                           |
| `206`    | TCP  | at-zis         | AppleTalk区块信息                                            |
| `209`    | TCP  | qmtp           | 快速邮件传输协议（QMTP）                                     |
| `210`    | TCP  | z39.50         | NISO Z39.50数据库                                            |
| `213`    | TCP  | ipx            | 互联网络分组交换协议（IPX），被Novell Netware环境常用的数据报协议 |
| `220`    | TCP  | imap3          | 互联网消息存取协议版本3                                      |
| `245`    | TCP  | link           | LINK                                                         |
| `347`    | TCP  | fatserv        | Fatmen服务器                                                 |
| `363`    | TCP  | rsvp_tunnel    | RSVP隧道                                                     |
| `369`    | TCP  | rpc2portmap    | Coda文件系统端口映射器                                       |
| `370`    | TCP  | codaauth2      | Coda文件系统验证服务                                         |
| `372`    | TCP  | ulistproc      | UNIX Listserv                                                |
| `389`    | TCP  | ldap           | 轻型目录存取协议（LDAP）                                     |
| `427`    | TCP  | svrloc         | 服务位置协议（SLP）                                          |
| `434`    | TCP  | mobileip-agent | 可移互联网协议（IP）代理                                     |
| `435`    | TCP  | mobilip-mn     | 可移互联网协议（IP）管理器                                   |
| `443`    | TCP  | https          | 安全超文本传输协议（HTTP）                                   |
| `444`    | TCP  | snpp           | 小型网络分页协议                                             |
| `445`    | TCP  | microsoft-ds   | 通过TCP/IP的服务器消息块（SMB）                              |
| `464`    | TCP  | kpasswd        | Kerberos口令和钥匙改换服务                                   |
| `468`    | TCP  | photuris       | Photuris会话钥匙管理协议                                     |
| `487`    | TCP  | saft           | 简单不对称文件传输（SAFT）协议                               |
| `488`    | TCP  | gss-http       | 用于HTTP的通用安全服务（GSS）                                |
| `496`    | TCP  | pim-rp-disc    | 用于协议独立的多址传播（PIM）服务的会合点发现（RP-DISC）     |
| `500`    | TCP  | isakmp         | 互联网安全关联和钥匙管理协议（ISAKMP）                       |
| `535`    | TCP  | iiop           | 互联网内部对象请求代理协议（IIOP）                           |
| `538`    | TCP  | gdomap         | GNUstep分布式对象映射器（GDOMAP）                            |
| `546`    | TCP  | dhcpv6-client  | 动态主机配置协议（DHCP）版本6客户                            |
| `547`    | TCP  | dhcpv6-server  | 动态主机配置协议（DHCP）版本6服务                            |
| `554`    | TCP  | rtsp           | 实时流播协议（RTSP）                                         |
| `563`    | TCP  | nntps          | 通过安全套接字层的网络新闻传输协议（NNTPS）                  |
| `565`    | TCP  | whoami         | whoami                                                       |
| `587`    | TCP  | submission     | 邮件消息提交代理（MSA）                                      |
| `610`    | TCP  | npmp-local     | 网络外设管理协议（NPMP）本地/分布式排队系统（DQS）           |
| `611`    | TCP  | npmp-gui       | 网络外设管理协议（NPMP）GUI/分布式排队系统（DQS）            |
| `612`    | TCP  | hmmp-ind       | HMMP指示/DQS                                                 |
| `631`    | TCP  | ipp            | 互联网打印协议（IPP）                                        |
| `636`    | TCP  | ldaps          | 通过安全套接字层的轻型目录访问协议（LDAPS）                  |
| `674`    | TCP  | acap           | 应用程序配置存取协议（ACAP）                                 |
| `694`    | TCP  | ha-cluster     | 用于带有高可用性的群集的心跳服务                             |
| `749`    | TCP  | kerberos-adm   | Kerberos版本5（v5）的“kadmin”数据库管理                      |
| `750`    | TCP  | kerberos-iv    | Kerberos版本4（v4）服务                                      |
| `765`    | TCP  | webster        | 网络词典                                                     |
| `767`    | TCP  | phonebook      | 网络电话簿                                                   |
| `873`    | TCP  | rsync          | rsync文件传输服务                                            |
| `992`    | TCP  | telnets        | 通过安全套接字层的Telnet（TelnetS）                          |
| `993`    | TCP  | imaps          | 通过安全套接字层的互联网消息存取协议（IMAPS）                |
| `994`    | TCP  | ircs           | 通过安全套接字层的互联网中继聊天（IRCS）                     |
| `995`    | TCP  | pop3s          | 通过安全套接字层的邮局协议版本3（POPS3）                     |
<!--rehype:className=show-header left-align-->

### UNIX特有的端口
<!--rehype:wrap-class=col-span-4-->

| 端口号 | 协议 | 使用程序                 | 备注/用途                                             |
| ------ | ---- | ------------------------ | ----------------------------------------------------- |
| `512`    | TCP  | exec                     | 用于对远程执行的进程进行验证                          |
| `512`    | UDP  | biff[comsat]             | 异步邮件客户（biff）和服务（comsat）                  |
| `513`    | TCP  | login                    | 远程登录（rlogin）                                    |
| `513`    | UDP  | who[whod]                | 登录的用户列表                                        |
| `514`    | TCP  | shell[cmd]               | 不必登录的远程shell（rshell）和远程复制（rcp）        |
| `514`    | UDP  | syslog                   | UNIX系统日志服务                                      |
| `515`    | TCP  | printer[spooler]         | 打印机（lpr）假脱机                                   |
| `517`    | UDP  | talk                     | 远程对话服务和客户                                    |
| `518`    | UDP  | ntalk                    | 网络交谈（ntalk），远程对话服务和客户                 |
| `519`    | TCP  | utime[unixtime]          | UNIX时间协议（utime）                                 |
| `520`    | TCP  | efs                      | 扩展文件名服务器（EFS）                               |
| `520`    | UDP  | router[route,routed]     | 选路信息协议（RIP）                                   |
| `521`    | TCP  | ripng                    | 用于互联网协议版本6（IPv6）的选路信息协议             |
| `525`    | TCP  | timed[timeserver]        | 时间守护进程（timed）                                 |
| `526`    | TCP  | tempo[newdate]           | Tempo                                                 |
| `530`    | TCP  | courier[rpc]             | Courier远程过程调用（RPC）协议                        |
| `531`    | TCP  | conference[chat]         | 互联网中继聊天                                        |
| `532`    | TCP  | netnews                  | Netnews                                               |
| `533`    | UDP  | netwall                  | 用于紧急广播的Netwall                                 |
| `540`    | TCP  | uucp[uucpd]              | Unix到Unix复制服务                                    |
| `543`    | TCP  | klogin                   | Kerberos版本5（v5）远程登录                           |
| `544`    | TCP  | kshell                   | Kerberos版本5（v5）远程shell                          |
| `548`    | TCP  | afpovertcp               | 通过传输控制协议（TCP）的Appletalk文件编制协议（AFP） |
| `556`    | TCP  | remotefs[rfs_server,rfs] | Brunhoff的远程文件系统（RFS）                         |
<!--rehype:className=show-header left-align-->

### 注册的端口
<!--rehype:wrap-class=col-span-4-->
| 端口号 | 协议    | 使用程序                | 备注/用途                                             |
| ------ | ------- | ----------------------- | ----------------------------------------------------- |
| `1080`   | TCP     | socks                   | SOCKS网络应用程序代理服务                             |
| `1236`   | TCP     | bvcontrol[rmtcfg]       | Garcilis Packeten远程配置服务器                       |
| `1300`   | TCP     | h323hostcallsc          | H.323电话会议主机电话安全                             |
| `1433`   | TCP     | ms-sql-s                | Microsoft SQL服务器                                   |
| `1434`   | TCP     | ms-sql-m                | Microsoft SQL监视器                                   |
| `1494`   | TCP     | ica                     | Citrix ICA客户                                        |
| `1512`   | TCP     | wins                    | Microsoft Windows互联网名称服务器                     |
| `1524`   | TCP     | ingreslock              | Ingres数据库管理系统（DBMS）锁定服务                  |
| `1525`   | TCP     | prospero-np             | 无特权的Prospero                                      |
| `1645`   | TCP     | datametrics[old-radius] | Datametrics/从前的radius项目                          |
| `1646`   | TCP     | sa-msg-port[oldradacct] | sa-msg-port/从前的radacct项目                         |
| `1649`   | TCP     | kermit                  | Kermit文件传输和管理服务                              |
| `1701`   | TCP     | l2tp[l2f]               | 第2层隧道服务（LT2P）/第2层转发（L2F）                |
| `1718`   | TCP     | h323gatedisc            | H.323电讯守门装置发现机制                             |
| `1719`   | TCP     | h323gatestat            | H.323电讯守门装置状态                                 |
| `1720`   | TCP     | h323hostcall            | H.323电讯主持电话设置                                 |
| `1758`   | TCP     | tftp-mcast              | 小文件FTP组播                                         |
| `1759`   | TCP     | mtftp                   | 组播小文件FTP（MTFTP）                                |
| `1789`   | TCP     | hello                   | Hello路由器通信端口                                   |
| `1812`   | TCP     | radius                  | Radius拨号验证和记帐服务                              |
| `1813`   | TCP     | radius-acct             | Radius记帐                                            |
| `1911`   | TCP     | mtp                     | Starlight网络多媒体传输协议（MTP）                    |
| `1985`   | TCP     | hsrp                    | Cisco热备用路由器协议                                 |
| `1986`   | TCP     | licensedaemon           | Cisco许可管理守护进程                                 |
| `1997`   | TCP     | gdp-port                | Cisco网关发现协议（GDP）                              |
| `2049`   | TCP     | nfs[nfsd]               | 网络文件系统（NFS）                                   |
| `2102`   | TCP     | zephyr-srv              | Zephyr通知传输和发送服务器                            |
| `2103`   | TCP     | zephyr-clt              | Zephyr serv-hm连接                                    |
| `2104`   | TCP     | zephyr-hm               | Zephyr主机管理器                                      |
| `2401`   | TCP     | cvspserver              | 并行版本系统（CVS）客户/服务器操作                    |
| `2430`   | TCP/UDP | venus                   | 用于Coda文件系统（codacon端口）的Venus缓存管理器      |
| `2431`   | TCP/UDP | venus-se                | Venus传输控制协议（TCP）的副作用                      |
| `2432`   | UDP     | codasrv                 | Coda文件系统服务器端口                                |
| `2433`   | TCP/UDP | codasrv-se              | Coda文件系统TCP/UDP副作用                             |
| `2600`   | TCP     | hpstgmgr[zebrasrv]      | HPSTGMGR；Zebra选路                                   |
| `2601`   | TCP     | discp-client[zebra]     | discp客户；Zebra集成的shell                           |
| `2602`   | TCP     | discp-server[ripd]      | discp服务器；选路信息协议守护进程（ripd）             |
| `2603`   | TCP     | servicemeter[ripngd]    | 服务计量；用于IPv6的RIP守护进程                       |
| `2604`   | TCP     | nsc-ccs[ospfd]          | NSC CCS；开放式短路径优先守护进程（ospfd）            |
| `2605`   | TCP     | nsc-posa                | NSC POSA；边界网络协议守护进程（bgpd）                |
| `2606`   | TCP     | netmon[ospf6d]          | Dell Netmon；用于IPv6的OSPF守护进程（ospf6d）         |
| `2809`   | TCP     | corbaloc                | 公共对象请求代理体系（CORBA）命名服务定位器           |
| `3130`   | TCP     | icpv2                   | 互联网缓存协议版本2（v2）；被Squid代理缓存服务器使用  |
| `3306`   | TCP     | mysql                   | MySQL数据库服务                                       |
| `3346`   | TCP     | trnsprntproxy           | Trnsprnt代理                                          |
| `4011`   | TCP     | pxe                     | 执行前环境（PXE）服务                                 |
| `4321`   | TCP     | rwhois                  | 远程Whois（rwhois）服务                               |
| `4444`   | TCP     | krb524                  | Kerberos版本5（v5）到版本4（v4）门票转换器            |
| `5002`   | TCP     | rfe                     | 无射频以太网（RFE）音频广播系统                       |
| `5308`   | TCP     | cfengine                | 配置引擎（Cfengine）                                  |
| `5999`   | TCP     | cvsup[CVSup]            | CVSup文件传输和更新工具                               |
| `6000`   | TCP     | x11[X]                  | X窗口系统服务                                         |
| `7000`   | TCP     | afs3-fileserver         | Andrew文件系统（AFS）文件服务器                       |
| `7001`   | TCP     | afs3-callback           | 用于给缓存管理器回电的AFS端口                         |
| `7002`   | TCP     | afs3-prserver           | AFS用户和组群数据库                                   |
| `7003`   | TCP     | afs3-vlserver           | AFS文件卷位置数据库                                   |
| `7004`   | TCP     | afs3-kaserver           | AFS Kerberos验证服务                                  |
| `7005`   | TCP     | afs3-volser             | AFS文件卷管理服务器                                   |
| `7006`   | TCP     | afs3-errors             | AFS错误解释服务                                       |
| `7007`   | TCP     | afs3-bos                | AFS基本监查进程                                       |
| `7008`   | TCP     | afs3-update             | AFS服务器到服务器更新器                               |
| `7009`   | TCP     | afs3-rmtsys             | AFS远程缓存管理器服务                                 |
| `9876`   | TCP     | sd                      | 会话指引器                                            |
| `10080`  | TCP     | amanda                  | 高级Maryland自动网络磁盘归档器（Amanda）备份服务      |
| `11371`  | TCP     | pgpkeyserver            | 良好隐私（PGP）/GNU隐私卫士（GPG）公钥服务器          |
| `11720`  | TCP     | h323callsigalt          | H.323调用信号交替                                     |
| `13720`  | TCP     | bprd                    | Veritas NetBackup请求守护进程（bprd）                 |
| `13721`  | TCP     | bpdbm                   | Veritas NetBackup数据库管理器（bpdbm）                |
| `13722`  | TCP     | bpjava-msvc             | Veritas NetBackup Java/Microsoft Visual C++(MSVC)协议 |
| `13724`  | TCP     | vnetd                   | Veritas网络工具                                       |
| `13782`  | TCP     | bpcd                    | Vertias NetBackup                                     |
| `13783`  | TCP     | vopied                  | Veritas VOPIED协议                                    |
| `22273`  | TCP     | wnn6[wnn4]              | 假名/汉字转换系统                                     |
| `26000`  | TCP     | quake                   | Quake（以及相关的）多人游戏服务器                     |
| `26208`  | TCP     | wnn6-ds                 | -                                                     |
| `33434`  | TCP     | traceroute              | Traceroute网络跟踪工具                                |
<!--rehype:className=show-header left-align-->

### 数据报传递协议端口
<!--rehype:wrap-class=col-span-4-->
| 端口号 | 协议 | 使用程序 | 备注/用途          |
| ------ | ---- | -------- | ------------------ |
| `1`      | DDP  | rtmp     | 路由表管理协议     |
| `2`      | DDP  | nbp      | 名称绑定协议       |
| `4`      | DDP  | echo     | AppleTalk Echo协议 |
| `6`      | DDP  | zip      | 区块信息协议       |
<!--rehype:className=show-header left-align-->

### Kerberos（工程Athena/MIT）端口
<!--rehype:wrap-class=col-span-4-->

| 端口号 | 协议 | 使用程序        | 备注/用途                           |
| ------ | ---- | --------------- | ----------------------------------- |
| `751`    | TCP  | kerberos_master | Kerberos验证                        |
| `752`    | TCP  | passwd_server   | Kerberos口令（kpasswd）服务器       |
| `754`    | TCP  | krb5_prop       | Kerberos v5从属传播                 |
| `760`    | TCP  | krbupdate[kreg] | Kerberos注册                        |
| `1109`   | TCP  | kpop            | Kerberos邮局协议（KPOP）            |
| `2053`   | TCP  | knetd           | Kerberos多路分用器                  |
| `2105`   | TCP  | eklogin         | Kerberos v5加密的远程登录（rlogin） |
<!--rehype:className=show-header left-align-->

### 未注册的端口
<!--rehype:wrap-class=col-span-4-->

| 端口号 | 协议 | 使用程序                 | 备注/用途                                                   |
| ------ | ---- | ------------------------ | ----------------------------------------------------------- |
| `15`     | TCP  | netstat                  | 网络状态（netstat）                                         |
| `98`     | TCP  | linuxconf                | Linuxconf Linux管理工具                                     |
| `106`    | TCP  | poppassd                 | 邮局协议口令改变守护进程（POPPASSD）                        |
| `465`    | TCP  | smtps                    | 通过安全套接字层的简单邮件传输协议（SMTPS）                 |
| `616`    | TCP  | gii                      | 使用网关的（选路守护进程）互动界面                          |
| `808`    | TCP  | omirr[omirrd]            | 联机镜像（Omirr）文件镜像服务                               |
| `871`    | TCP  | supfileserv              | 软件升级协议（SUP）服务器                                   |
| `901`    | TCP  | swat                     | Samba万维网管理工具（SWAT）                                 |
| `953`    | TCP  | rndc                     | Berkeley互联网名称域版本9（BIND 9）远程名称守护进程配置工具 |
| `1127`   | TCP  | sufiledbg                | 软件升级协议（SUP）调试                                     |
| `1178`   | TCP  | skkserv                  | 简单假名到汉字（SKK）日文输入服务器                         |
| `1313`   | TCP  | xtel                     | 法国Minitel文本信息系统                                     |
| `1529`   | TCP  | support[prmsd,gnatsd]    | GNATS错误跟踪系统                                           |
| `2003`   | TCP  | cfinger                  | GNU Finger服务                                              |
| `2150`   | TCP  | ninstall                 | 网络安装服务                                                |
| `2988`   | TCP  | afbackup                 | afbackup客户-服务器备份系统                                 |
| `3128`   | TCP  | squid                    | Squid万维网代理缓存                                         |
| `3455`   | TCP  | prsvp                    | RSVP端口                                                    |
| `5432`   | TCP  | postgres                 | PostgreSQL数据库                                            |
| `4557`   | TCP  | fax                      | FAX传输服务（旧服务）                                       |
| `4559`   | TCP  | hylafax                  | HylaFAX客户-服务器协议（新服务）                            |
| `5232`   | TCP  | sgi-dgl                  | SGI分布式图形库                                             |
| `5354`   | TCP  | noclog                   | NOCOL网络操作中心记录守护进程（noclogd）                    |
| `5355`   | TCP  | hostmon                  | NOCOL网络操作中心主机监视                                   |
| `5680`   | TCP  | canna                    | Canna日文字符输入界面                                       |
| `6010`   | TCP  | x11-ssh-offset           | 安全Shell（SSH）X11转发偏移                                 |
| `6667`   | TCP  | ircd                     | 互联网中继聊天守护进程（ircd）                              |
| `7100`   | TCP  | xfs                      | X字体服务器（XFS）                                          |
| `7666`   | TCP  | tircproxy                | Tircproxy IRC代理服务                                       |
| `8008`   | TCP  | http-alt                 | 超文本传输协议（HTTP）的另一选择                            |
| `8080`   | TCP  | webcache                 | 万维网（WWW）缓存服务                                       |
| `8081`   | TCP  | tproxy                   | 透明代理                                                    |
| `9100`   | TCP  | jetdirect[laserjet,hplj] | Hewlett-Packard(HP)JetDirect网络打印服务                    |
| `9359`   | TCP  | mandelspawn[mandelbrot]  | 用于X窗口系统的并行Mandelbrot生成程序                       |
| `10081`  | TCP  | kamanda                  | 使用Kerberos的Amanda备份服务                                |
| `10082`  | TCP  | amandaidx                | Amanda备份服务                                              |
| `10083`  | TCP  | amidxtape                | Amanda备份服务                                              |
| `20011`  | TCP  | isdnlog                  | 综合业务数字网（ISDN）登录系统                              |
| `20012`  | TCP  | vboxd                    | ISDN音箱守护进程（vboxd）                                   |
| `22305`  | TCP  | wnn4_Kr                  | kWnn韩文输入系统                                            |
| `22289`  | TCP  | wnn4_Cn                  | cWnn中文输入系统                                            |
| `22321`  | TCP  | wnn4_Tw                  | tWnn中文输入系统（台湾）                                    |
| `24554`  | TCP  | binkp                    | Binkley TCP/IP Fidonet邮寄程序守护进程                      |
| `27374`  | TCP  | asp                      | 地址搜索协议                                                |
| `60177`  | TCP  | tfido                    | Ifmail FidoNet兼容邮寄服务                                  |
| `60179`  | TCP  | fido                     | FidoNet电子邮件和新闻网络                                   |
<!--rehype:className=show-header left-align-->