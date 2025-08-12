Contributing 贡献
====

感谢您对**备忘清单**贡献的兴趣👍👍，是像您这样的人使 [`Quick Reference`](https://jaywcjlove.github.io/reference) 成为如此出色的网站 🎉🎉。随时提交问题和增强请求，还提供一个[在线说明排版说明]( https://wangchujiang.com/reference/docs/quickreference.html)，所以各种使用技巧，都在这个排版说明中有预览和实现代码。

`docs/{filename}.md` 文件将被处理成备忘清单，让我们创建或编辑一个 `markdown` 文件：

## 前沿问题

```markdown
备忘清单 标题
===

这是您可以在 Quick Reference 备忘清单上使用的样式参考！【备忘清单介绍】
```

只需要 `标题<h1>` 和 `介绍` (标题下面)。脚本会自动识别，通过 GitHub Actions 自动发布 [`Quick Reference`](https://jaywcjlove.github.io/reference) 网站。

## 目录结构

```bash
.
├── CONTRIBUTING.md   # 贡献说明
├── Dockerfile
├── LICENSE
├── README.md         # Home(首页) 内容
├── dist              # 编译后的静态资源目录
├── docs              # Markdown 文档（快速参考备忘清单【速查表】）
│   ├── bash.md
│   ├── ....
│   └── yaml.md
├── package.json
└── scripts           # MD 转 HTML 的编译脚本
    ├── assets        # 存放首页 svg 图标文件资源，与 `dosc` 文件名对应
    ├── ....
    └── watch.mjs
```

## CSS 类注释

[`Quick Reference`](https://jaywcjlove.github.io/reference) 使用 [`@wcj/markdown-to-html`](https://github.com/jaywcjlove/markdown-to-html) 转换 `Markdown`，并使用 [`rehype-attr`](https://github.com/jaywcjlove/rehype-attr) 插件让其支持通过其注释语法添加类和样式。此外，您可以在 Quick Reference 备忘清单上使用样式参考：<https://jaywcjlove.github.io/reference/docs/quickreference.html>

最后，参考现有备忘清单的源代码是一个好习惯！

## 首页导航

[`Quick Reference`](https://jaywcjlove.github.io/reference) 的首页存放在仓库的根目录 `README.md`，[`Quick Reference`](https://jaywcjlove.github.io/reference) 是通过这个 `README.md` 自动生成首页导航，下面是导航实例：

```markdown
## Linux 命令

[Cron](./docs/cron.md)<!--rehype:style=background: rgb(239 68 68/var(\-\-bg\-opacity));-->
[Git](./docs/git.md)<!--rehype:style=background: rgb(215 89 62/var(\-\-bg\-opacity));-->
<!--rehype:class=home-card-->
```

首页导航图标存放在 `scripts/assets` 目录中，如果你的备忘清单定义为 `docs/cron.md`，那么你的图标就定义为 `cron.svg` 存放到 `scripts/assets` 目录中，重新编译首页当行菜单就拥有了图标。

- 图标存放在 [`scripts/assets`](https://github.com/jaywcjlove/reference/blob/main/scripts/assets) 目录中
- 图片名称与清单名称保持一致 `cron.md` -> `cron.svg` (注意大小写)
- SVG 图标尺寸 `<svg height="1em" width="1em"`
- SVG 图标颜色使用继承颜色值 `<svg fill="currentColor"`

图标可以在 [icongo 图标搜索](https://icongo.github.io/) 中搜索

### 提示配置

```markdown
[Django](./docs/django.md)<!--rehype:style=background: rgb(12 75 51/var(\-\-bg\-opacity));&class=contributing-->
```

添加 `contributing` 类名，会在卡片下方添加 _`👆待完善需要您的参与`_，添加 `data-info=👆看看还缺点儿什么？`，更换默认提示文本。

```markdown
[Django](./docs/django.md)<!--rehype:style=background: rgb(12 75 51/var(\-\-bg\-opacity));&class=tag&data-lang=Python-->
```

添加 `class=tag&data-lang=Python` 类名和参数，会在卡片右上角标记 _`Python`_

## 本地开发

```bash
$ git clone https://github.com/jaywcjlove/reference.git 
$ npm i          # 安装依赖
$ npm run build  # 编译输出 HTML
$ npm run start  # 监听 md 文件编译输出 HTML
```

或者你也可以使用 `pnpm` 或者 `yarn` 做为包管理器

## 快捷部署方法

由于中国国内访问，时常打不开，推荐您部署的镜像网站，大家可以在这里留言推荐您的镜像网站网址，我将放置在首页推荐

### 方法一，只需要克隆 gh-pages 分支代码到你的静态服务就可以了

```shell
$ git clone https://github.com/jaywcjlove/reference.git -b gh-pages
```

**定时更新**

在 Linux 服务执行创建 `git-down-pages.sh` 脚本，将脚本放置在 `/opt/cron/` 目录下

> 注意：⚠️ 脚本会根据线上 pages 的 commit 和 本地 commit 比较。如果不一致才会同步更新，否则跳过

下面是脚本 `git-down-pages.sh` 的源码

```bash
#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

#author: 南宫乘风

DATA_DIR="/data"
REPO_URL="https://gitee.com/jaywcjlove/reference.git"
BRANCH="gh-pages"
MAX_BACKUPS=3

# 函数：备份旧版本
backup_old_version() {
    echo "备份旧版本..."
    mv ../reference ../reference_backup_$(date +%Y%m%d%H%M%S)
    if [ $? -eq 0 ]; then
        echo "备份完成。"
        remove_old_backups
    else
        echo "备份时出现错误。"
        exit 1
    fi
}

# 函数：删除多余备份，保留最近的三个
remove_old_backups() {
    echo "删除多余备份，保留最近的三个..."
    ls -1d ../reference_backup_* | head -n -${MAX_BACKUPS} | xargs -r rm -r
}

# 函数：拉取最新代码
clone_latest_code() {
    echo "拉取最新代码..."
    # 进入 /data 目录
    cd $DATA_DIR
    git clone $REPO_URL -b $BRANCH
    if [ $? -eq 0 ]; then
        echo "拉取最新代码完成。"
    else
        echo "拉取最新代码时出现错误。"
        exit 1
    fi
}

# 检查是否存在 DATA_DIR 目录，不存在则创建
if [ ! -d "$DATA_DIR" ]; then
    echo "目录 $DATA_DIR 不存在，创建中..."
    mkdir -p "$DATA_DIR"
    if [ $? -eq 0 ]; then
        echo "目录创建成功。"
    else
        echo "目录创建失败。"
        exit 1
    fi
fi

# 进入 /data 目录
cd $DATA_DIR

# 检查是否存在 reference 目录
if [ -d "reference" ]; then
    # 进入 reference 目录
    cd reference
    
    # 获取远程和本地的 commit 哈希值
    REMOTE_COMMIT=$(git ls-remote $REPO_URL $BRANCH | cut -f1)
    LOCAL_COMMIT=$(git rev-parse HEAD)
    
    # 比较远程和本地的 commit
    if [ "$REMOTE_COMMIT" == "$LOCAL_COMMIT" ]; then
        echo "本地 'reference' 目录已经是最新版本，无需拉取。"
    else
        echo "本地 'reference' 目录不是最新版本，开始拉取最新代码..."
        backup_old_version
        clone_latest_code
    fi
else
    # 如果目录不存在，直接克隆
    clone_latest_code
fi

echo "----------------------------------------------------------------------------"
endDate=`date +"%Y-%m-%d %H:%M:%S"`
echo "★[$endDate] Successful"
echo "----------------------------------------------------------------------------"
```

**创建定时任务**

注意：请把脚本放在 `/opt/cron/` 目录下 (时间可以根据自己需求设定)，下面案例：每十分钟同步线上的 `pages` 的内容

```shell
crontab  -e 

*/10 * * * *  /opt/cron/git-down-pages.sh >>  /opt/cron/git-down.log 2>&1
```

**添加 NGINX 配置：**

```nginx
listen 80;
listen 443 ssl http2;
server_name xxx.xxx.top; #配置你的域名
index index.php index.html index.htm default.php default.htm default.html;
root /data/reference;  # 文件存放的位置 
```


### 方法二，使用 [docker](https://hub.docker.com/r/wcjiang/reference) 快捷部署 web 版

```shell
$ docker pull wcjiang/reference

$ docker run --name reference --rm -d -p 9667:3000 wcjiang/reference:latest
# Or
$ docker run --name reference -itd -p 9667:3000 wcjiang/reference:latest
```

### 方法三，克隆仓库自己编译，添加导航菜单

```bash
$ git clone https://github.com/jaywcjlove/reference.git 
$ npm install    # 安装依赖
$ npm run build  # 编译输出静态页面
$ npm run start  # 开发模式，监听实时编译输出静态页面
```

文件被输出到 `dist` 目录，将 `dist` 目录静态页面部署到静态服务就可以了

<img width="423" alt="image" src="https://user-images.githubusercontent.com/1680273/203210099-cd9e1377-bceb-40cc-98f1-4c4c549a3986.png">

提供自定义菜单，在项目的根目录建立 `.env` 文件，添加下面内容

```ini
REF_URL=http://ref.xxx.cn/
REF_LABEL=网站首页
```

### 国内镜像

由于中国国内访问，时常打不开，你可以访问下面镜像网站。

- [quickref.cn](https://quickref.cn)
- [ecdata.cn](http://ref.ecdata.cn)
- [aibk.cn](https://quickref.aibk.cn)
- [jgeek.cn](http://reference.jgeek.cn/)
- [laoleng.vip](http://bbs.laoleng.vip/reference/)
- [liujiapeng.com](https://www.liujiapeng.com/)
- [dbyun.net](https://www.dbyun.net/reference/index.html)
- [dc6.fun](https://dc6.fun/reference/)
- [if010.com](https://quickref.if010.com/)
- [pipecraft.net](https://quickref.pipecraft.net/)
- [isteed.cc](https://ref.isteed.cc/)
- [1han.wiki](https://code.1han.wiki/)
- [linzhe.top](https://linzhe.top/)
- [xushanxiang.com](https://xushanxiang.com/ref/)
- [winnerzr01.github.io](https://winnerzr01.github.io/Quick-Reference/index.html)
- [quickref.hestudio.net](https://quickref.hestudio.net)
- [surcode.cn](https://ref.surcode.cn)
- [cms.im](https://quickref.cms.im/)
- [nuomiphp.com](https://reference.tool.nuomiphp.com/)
- [eryajf.net](https://ref.eryajf.net/)
- [kjchmc.cn](https://ref.kjchmc.cn/)
- [likeadmin.cn](https://www.likeadmin.cn/quickref/)
- [qiubit.cc](http://ref.qiubit.cc)
- [aoh.cc](https://aoh.cc/)
- [reference.code05.com](https://reference.code05.com/)
- [kyoma.top](https://reference.kyoma.top/)
- [quickreference.pages.dev](https://quickreference.pages.dev/)
- [code05.com](https://reference.code05.com/)
- [xhfun.cn](https://ref.xhfun.cn/)
- [ownit.top](https://memo.ownit.top/)

感谢🙏

## 利用 Github Actions 定时任务来完成自动更新

在仓库添加 `.github/workflows/update-ref.yml` 文件 Github Actions 配置，感谢 @eryajf https://github.com/jaywcjlove/reference/issues/102#issuecomment-1368158419 提供方法

```yml
name: 每8个小时更新一次reference
on:
  schedule:
    - cron: '21 */8 * * *' # 定时任务
  workflow_dispatch:       # 手动运行

env: # 设置环境变量
  TZ: Asia/Shanghai # 时区（设置时区可使页面中的`最近更新时间`使用时区时间）

jobs:
  build: # 自定义名称
    runs-on: ubuntu-latest
    steps:
      - name: 🚜 拉取最新代码
        uses: actions/checkout@v3
        with:
          ref: 'main'
          repository: 'jaywcjlove/reference'

      - name: ♻️ 编译静态文件
        run: |
          echo -e 'REF_URL=https://refs.xxx.net/\nREF_LABEL=网站首页' > .env
          npm install
          npm run build

      - name: 🚁 部署到服务器
        uses: wlixcc/SFTP-Deploy-Action@v1.0
        with:
          username: 'root'   #ssh user name
          port: '22' # 远程服务器ssh端口，默认22
          server: 'prod.refs.xxx.net' # 远程服务器IP
          ssh_private_key: ${{ secrets.SSH_PRIVATE_KEY }} # 认证服务器秘钥对的私钥
          local_path: './dist/*'  # 对应我们项目打包后的静态文件路径
          remote_path: '/data/www/refs.xxx.net' # 服务器上的路径
          delete_remote_files: true
```

## 贡献

请参阅[贡献指南](./CONTRIBUTING.md)了解如何开始。一如既往，感谢我们出色的贡献者！

<!--GAMFC-->
<a href="https://github.com/jaywcjlove" title="小弟调调"><img src="https://avatars.githubusercontent.com/u/1680273?v=4" width="42;" alt="小弟调调"/></a>
<a href="https://github.com/fwqaaq" title="fwqaaq"><img src="https://avatars.githubusercontent.com/u/82551626?v=4" width="42;" alt="fwqaaq"/></a>
<a href="https://github.com/zhangymPerson" title="zhangym"><img src="https://avatars.githubusercontent.com/u/40376181?v=4" width="42;" alt="zhangym"/></a>
<a href="https://github.com/mofelee" title="mofelee"><img src="https://avatars.githubusercontent.com/u/5069410?v=4" width="42;" alt="mofelee"/></a>
<a href="https://github.com/Country-If" title="Maylon"><img src="https://avatars.githubusercontent.com/u/62837275?v=4" width="42;" alt="Maylon"/></a>
<a href="https://github.com/JeffersonHuang" title="Jefferson Huang"><img src="https://avatars.githubusercontent.com/u/47512530?v=4" width="42;" alt="Jefferson Huang"/></a>
<a href="https://github.com/LesterChang0987" title="Steve Hartwell"><img src="https://avatars.githubusercontent.com/u/114913921?v=4" width="42;" alt="Steve Hartwell"/></a>
<a href="https://github.com/h7ml" title="h7ml"><img src="https://avatars.githubusercontent.com/u/55233292?v=4" width="42;" alt="h7ml"/></a>
<a href="https://github.com/nangongchengfeng" title="南宫乘风"><img src="https://avatars.githubusercontent.com/u/46562911?v=4" width="42;" alt="南宫乘风"/></a>
<a href="https://github.com/aixcyi" title="路狐羽"><img src="https://avatars.githubusercontent.com/u/75880483?v=4" width="42;" alt="路狐羽"/></a>
<a href="https://github.com/LufsX" title="LufsX"><img src="https://avatars.githubusercontent.com/u/33221883?v=4" width="42;" alt="LufsX"/></a>
<a href="https://github.com/liduchuan" title="Alex"><img src="https://avatars.githubusercontent.com/u/115539090?v=4" width="42;" alt="Alex"/></a>
<a href="https://github.com/mailbaoer" title="baoer"><img src="https://avatars.githubusercontent.com/u/5282978?v=4" width="42;" alt="baoer"/></a>
<a href="https://github.com/expoli" title="expoli"><img src="https://avatars.githubusercontent.com/u/31023767?v=4" width="42;" alt="expoli"/></a>
<a href="https://github.com/k23223" title="k23223"><img src="https://avatars.githubusercontent.com/u/57606136?v=4" width="42;" alt="k23223"/></a>
<a href="https://github.com/eryajf" title="二丫讲梵"><img src="https://avatars.githubusercontent.com/u/33259379?v=4" width="42;" alt="二丫讲梵"/></a>
<a href="https://github.com/ChuwuYo" title="初五"><img src="https://avatars.githubusercontent.com/u/141227996?v=4" width="42;" alt="初五"/></a>
<a href="https://github.com/undefined-hestudio" title="undefined"><img src="https://avatars.githubusercontent.com/u/119711513?v=4" width="42;" alt="undefined"/></a>
<a href="https://github.com/Darkiiiiiice" title="Darkiiiiiice"><img src="https://avatars.githubusercontent.com/u/3959555?v=4" width="42;" alt="Darkiiiiiice"/></a>
<a href="https://github.com/genius-kim" title="Kim同学"><img src="https://avatars.githubusercontent.com/u/119488561?v=4" width="42;" alt="Kim同学"/></a>
<a href="https://github.com/qyl27" title="雨落"><img src="https://avatars.githubusercontent.com/u/53731501?v=4" width="42;" alt="雨落"/></a>
<a href="https://github.com/MackDing" title="Blossom"><img src="https://avatars.githubusercontent.com/u/19878893?v=4" width="42;" alt="Blossom"/></a>
<a href="https://github.com/1250422131" title="萌新杰少"><img src="https://avatars.githubusercontent.com/u/52126790?v=4" width="42;" alt="萌新杰少"/></a>
<a href="https://github.com/zine0" title="zine yu"><img src="https://avatars.githubusercontent.com/u/46991452?v=4" width="42;" alt="zine yu"/></a>
<a href="https://github.com/richuff" title="richuff"><img src="https://avatars.githubusercontent.com/u/162144087?v=4" width="42;" alt="richuff"/></a>
<a href="https://github.com/QinIndexCode" title="fault"><img src="https://avatars.githubusercontent.com/u/177287013?v=4" width="42;" alt="fault"/></a>
<a href="https://github.com/chaos-cn" title="chaos"><img src="https://avatars.githubusercontent.com/u/71205599?v=4" width="42;" alt="chaos"/></a>
<a href="https://github.com/xia0ne" title="YuRuiH"><img src="https://avatars.githubusercontent.com/u/32591223?v=4" width="42;" alt="YuRuiH"/></a>
<a href="https://github.com/Willxup" title="Will"><img src="https://avatars.githubusercontent.com/u/51990395?v=4" width="42;" alt="Will"/></a>
<a href="https://github.com/long-910" title="Small Long"><img src="https://avatars.githubusercontent.com/u/7323488?v=4" width="42;" alt="Small Long"/></a>
<a href="https://github.com/LiuYuan-SHU" title="Yuan Liu"><img src="https://avatars.githubusercontent.com/u/96400967?v=4" width="42;" alt="Yuan Liu"/></a>
<a href="https://github.com/Harris-H" title="Hao He"><img src="https://avatars.githubusercontent.com/u/57698783?v=4" width="42;" alt="Hao He"/></a>
<a href="https://github.com/infanx" title="infanx"><img src="https://avatars.githubusercontent.com/u/65985757?v=4" width="42;" alt="infanx"/></a>
<a href="https://github.com/1834423612" title="kjch"><img src="https://avatars.githubusercontent.com/u/49981661?v=4" width="42;" alt="kjch"/></a>
<a href="https://github.com/mancuoj" title="mancuoj"><img src="https://avatars.githubusercontent.com/u/45707684?v=4" width="42;" alt="mancuoj"/></a>
<a href="https://github.com/pangxiaoli" title="pangxiaoli"><img src="https://avatars.githubusercontent.com/u/54620953?v=4" width="42;" alt="pangxiaoli"/></a>
<a href="https://github.com/partoneplay" title="佐博"><img src="https://avatars.githubusercontent.com/u/5189132?v=4" width="42;" alt="佐博"/></a>
<a href="https://github.com/ryanhex53" title="ryanhex53"><img src="https://avatars.githubusercontent.com/u/360426?v=4" width="42;" alt="ryanhex53"/></a>
<a href="https://github.com/witt-bit" title="witt"><img src="https://avatars.githubusercontent.com/u/52407727?v=4" width="42;" alt="witt"/></a>
<a href="https://github.com/catcto" title="小武Alan"><img src="https://avatars.githubusercontent.com/u/5467932?v=4" width="42;" alt="小武Alan"/></a>
<a href="https://github.com/itldg" title="老大哥"><img src="https://avatars.githubusercontent.com/u/13432299?v=4" width="42;" alt="老大哥"/></a>
<a href="https://github.com/wsypower" title="魏"><img src="https://avatars.githubusercontent.com/u/31298317?v=4" width="42;" alt="魏"/></a>
<a href="https://github.com/buyfakett" title="buyfakett"><img src="https://avatars.githubusercontent.com/u/46560426?v=4" width="42;" alt="buyfakett"/></a>
<a href="https://github.com/wangdaodao" title="王叨叨"><img src="https://avatars.githubusercontent.com/u/2317442?v=4" width="42;" alt="王叨叨"/></a>
<a href="https://github.com/AmosHuKe" title="Amos"><img src="https://avatars.githubusercontent.com/u/32262985?v=4" width="42;" alt="Amos"/></a>
<a href="https://github.com/qjksxy" title="Apin"><img src="https://avatars.githubusercontent.com/u/81305669?v=4" width="42;" alt="Apin"/></a>
<a href="https://github.com/BlacAmDK" title="BlacAmDK"><img src="https://avatars.githubusercontent.com/u/10971397?v=4" width="42;" alt="BlacAmDK"/></a>
<a href="https://github.com/dadatom" title="Da Da"><img src="https://avatars.githubusercontent.com/u/33886943?v=4" width="42;" alt="Da Da"/></a>
<a href="https://github.com/ljq" title="Jaco Liu"><img src="https://avatars.githubusercontent.com/u/7278286?v=4" width="42;" alt="Jaco Liu"/></a>
<a href="https://github.com/jasnzhuang" title="Jason Zhuang"><img src="https://avatars.githubusercontent.com/u/16612921?v=4" width="42;" alt="Jason Zhuang"/></a>
<a href="https://github.com/Jovins" title="Jovins"><img src="https://avatars.githubusercontent.com/u/17738992?v=4" width="42;" alt="Jovins"/></a>
<a href="https://github.com/Kisa-Dong" title="Kisa-Dong"><img src="https://avatars.githubusercontent.com/u/84782008?v=4" width="42;" alt="Kisa-Dong"/></a>
<a href="https://github.com/SuperDiscovery" title="SuperDiscovery"><img src="https://avatars.githubusercontent.com/u/49646863?v=4" width="42;" alt="SuperDiscovery"/></a>
<a href="https://github.com/ThanatosXingYu" title="Thanatos"><img src="https://avatars.githubusercontent.com/u/53430376?v=4" width="42;" alt="Thanatos"/></a>
<a href="https://github.com/XYZscratcher" title="XYZ"><img src="https://avatars.githubusercontent.com/u/108533817?v=4" width="42;" alt="XYZ"/></a>
<a href="https://github.com/izven" title="Zhang"><img src="https://avatars.githubusercontent.com/u/2149051?v=4" width="42;" alt="Zhang"/></a>
<a href="https://github.com/findnr" title="findnr"><img src="https://avatars.githubusercontent.com/u/217852450?v=4" width="42;" alt="findnr"/></a>
<a href="https://github.com/greyhao" title="greyhao"><img src="https://avatars.githubusercontent.com/u/107107440?v=4" width="42;" alt="greyhao"/></a>
<a href="https://github.com/yanxuplay" title="hupilan"><img src="https://avatars.githubusercontent.com/u/69749541?v=4" width="42;" alt="hupilan"/></a>
<a href="https://github.com/hweining" title="hweining"><img src="https://avatars.githubusercontent.com/u/8973985?v=4" width="42;" alt="hweining"/></a>
<a href="https://github.com/icer233" title="icer"><img src="https://avatars.githubusercontent.com/u/74440627?v=4" width="42;" alt="icer"/></a>
<a href="https://github.com/auroraslot" title="irony"><img src="https://avatars.githubusercontent.com/u/48817882?v=4" width="42;" alt="irony"/></a>
<a href="https://github.com/jlchen5" title="J.Chen"><img src="https://avatars.githubusercontent.com/u/61578993?v=4" width="42;" alt="J.Chen"/></a>
<a href="https://github.com/jldxpm" title="jldxjldx"><img src="https://avatars.githubusercontent.com/u/128905630?v=4" width="42;" alt="jldxjldx"/></a>
<a href="https://github.com/joyfully-W" title="joyfully-W"><img src="https://avatars.githubusercontent.com/u/32212924?v=4" width="42;" alt="joyfully-W"/></a>
<a href="https://github.com/jqzhao7" title="jqzhao"><img src="https://avatars.githubusercontent.com/u/54694535?v=4" width="42;" alt="jqzhao"/></a>
<a href="https://github.com/jussker" title="jussker"><img src="https://avatars.githubusercontent.com/u/33953356?v=4" width="42;" alt="jussker"/></a>
<a href="https://github.com/kcmeven" title="Evan-k"><img src="https://avatars.githubusercontent.com/u/48147837?v=4" width="42;" alt="Evan-k"/></a>
<a href="https://github.com/kdxcxs" title="kdxcxs"><img src="https://avatars.githubusercontent.com/u/18746192?v=4" width="42;" alt="kdxcxs"/></a>
<a href="https://github.com/kubeme" title="kubernetes for me"><img src="https://avatars.githubusercontent.com/u/16346220?v=4" width="42;" alt="kubernetes for me"/></a>
<a href="https://github.com/larry-xue" title="yujian(larry) xue"><img src="https://avatars.githubusercontent.com/u/48818060?v=4" width="42;" alt="yujian(larry) xue"/></a>
<a href="https://github.com/leauny" title="leauny"><img src="https://avatars.githubusercontent.com/u/42369176?v=4" width="42;" alt="leauny"/></a>
<a href="https://github.com/liliangrong777" title="liliangrong777"><img src="https://avatars.githubusercontent.com/u/58727146?v=4" width="42;" alt="liliangrong777"/></a>
<a href="https://github.com/lozhu20" title="lozhu"><img src="https://avatars.githubusercontent.com/u/44923922?v=4" width="42;" alt="lozhu"/></a>
<a href="https://github.com/hua03" title="hua03"><img src="https://avatars.githubusercontent.com/u/19561959?v=4" width="42;" alt="hua03"/></a>
<a href="https://github.com/gzttcydxx" title="gzttcydxx"><img src="https://avatars.githubusercontent.com/u/50025185?v=4" width="42;" alt="gzttcydxx"/></a>
<a href="https://github.com/sunny0826" title="Xudong Guo"><img src="https://avatars.githubusercontent.com/u/24563928?v=4" width="42;" alt="Xudong Guo"/></a>
<a href="https://github.com/nodjoy" title="gowshwah"><img src="https://avatars.githubusercontent.com/u/145280043?v=4" width="42;" alt="gowshwah"/></a>
<a href="https://github.com/godot42x" title="godot42"><img src="https://avatars.githubusercontent.com/u/79260851?v=4" width="42;" alt="godot42"/></a>
<a href="https://github.com/gi-b716" title="Yunchi Gan"><img src="https://avatars.githubusercontent.com/u/78394473?v=4" width="42;" alt="Yunchi Gan"/></a>
<a href="https://github.com/fjqz177" title="fjqz177"><img src="https://avatars.githubusercontent.com/u/83070583?v=4" width="42;" alt="fjqz177"/></a>
<a href="https://github.com/fenglielie" title="fenglielie"><img src="https://avatars.githubusercontent.com/u/51266402?v=4" width="42;" alt="fenglielie"/></a>
<a href="https://github.com/fakevn" title="fakevn"><img src="https://avatars.githubusercontent.com/u/11464386?v=4" width="42;" alt="fakevn"/></a>
<a href="https://github.com/emoji-share" title="emoji-share🤪"><img src="https://avatars.githubusercontent.com/u/192275245?v=4" width="42;" alt="emoji-share🤪"/></a>
<a href="https://github.com/cool9203" title="cool9203"><img src="https://avatars.githubusercontent.com/u/29609607?v=4" width="42;" alt="cool9203"/></a>
<a href="https://github.com/gaoxiaoduan" title="Coder Duan"><img src="https://avatars.githubusercontent.com/u/69953511?v=4" width="42;" alt="Coder Duan"/></a>
<a href="https://github.com/lijc210" title="cizai"><img src="https://avatars.githubusercontent.com/u/10651081?v=4" width="42;" alt="cizai"/></a>
<a href="https://github.com/chyok" title="chyok"><img src="https://avatars.githubusercontent.com/u/32629225?v=4" width="42;" alt="chyok"/></a>
<a href="https://github.com/cgluWxh" title="cgluWxh"><img src="https://avatars.githubusercontent.com/u/18211130?v=4" width="42;" alt="cgluWxh"/></a>
<a href="https://github.com/eeeeeio" title="EEEEE"><img src="https://avatars.githubusercontent.com/u/20723545?v=4" width="42;" alt="EEEEE"/></a>
<a href="https://github.com/lykjjj" title="lykjjj"><img src="https://avatars.githubusercontent.com/u/58510058?v=4" width="42;" alt="lykjjj"/></a>
<a href="https://github.com/zhouhw0306" title="zhouhw0306"><img src="https://avatars.githubusercontent.com/u/82752681?v=4" width="42;" alt="zhouhw0306"/></a>
<a href="https://github.com/zxx457" title="Xianxin Zeng"><img src="https://avatars.githubusercontent.com/u/114141362?v=4" width="42;" alt="Xianxin Zeng"/></a>
<a href="https://github.com/lvzhenbo" title="无聊波波"><img src="https://avatars.githubusercontent.com/u/32427677?v=4" width="42;" alt="无聊波波"/></a>
<a href="https://github.com/kele527" title="吹衣轻飏"><img src="https://avatars.githubusercontent.com/u/345445?v=4" width="42;" alt="吹衣轻飏"/></a>
<a href="https://github.com/LuckyJie12" title="夜未央"><img src="https://avatars.githubusercontent.com/u/102901105?v=4" width="42;" alt="夜未央"/></a>
<a href="https://github.com/ZIDOUZI" title="子斗子"><img src="https://avatars.githubusercontent.com/u/53157536?v=4" width="42;" alt="子斗子"/></a>
<a href="https://github.com/Fengjing95" title="小枫"><img src="https://avatars.githubusercontent.com/u/51731411?v=4" width="42;" alt="小枫"/></a>
<a href="https://github.com/LongYinStudio" title="敬培全"><img src="https://avatars.githubusercontent.com/u/42208852?v=4" width="42;" alt="敬培全"/></a>
<a href="https://github.com/sundakai" title="永恒"><img src="https://avatars.githubusercontent.com/u/21995250?v=4" width="42;" alt="永恒"/></a>
<a href="https://github.com/LebranceBW" title="落叶乌龟"><img src="https://avatars.githubusercontent.com/u/19501514?v=4" width="42;" alt="落叶乌龟"/></a>
<a href="https://github.com/HChenX" title="焕晨HChen"><img src="https://avatars.githubusercontent.com/u/123531821?v=4" width="42;" alt="焕晨HChen"/></a>
<a href="https://github.com/rainbowatcher" title="rainbowatcher"><img src="https://avatars.githubusercontent.com/u/42316353?v=4" width="42;" alt="rainbowatcher"/></a>
<a href="https://github.com/lisheng741" title="芦荟柚子茶"><img src="https://avatars.githubusercontent.com/u/53617305?v=4" width="42;" alt="芦荟柚子茶"/></a>
<a href="https://github.com/qwxingzhe" title="行者"><img src="https://avatars.githubusercontent.com/u/7071651?v=4" width="42;" alt="行者"/></a>
<a href="https://github.com/binscor" title="binscor"><img src="https://avatars.githubusercontent.com/u/37325821?v=4" width="42;" alt="binscor"/></a>
<a href="https://github.com/Zeng-qh" title="都一样"><img src="https://avatars.githubusercontent.com/u/40046415?v=4" width="42;" alt="都一样"/></a>
<a href="https://github.com/miclon-dev" title="miclon-dev"><img src="https://avatars.githubusercontent.com/u/111753685?v=4" width="42;" alt="miclon-dev"/></a>
<a href="https://github.com/notes-bin" title="notes-bin"><img src="https://avatars.githubusercontent.com/u/58727373?v=4" width="42;" alt="notes-bin"/></a>
<a href="https://github.com/onewesong" title="onewesong"><img src="https://avatars.githubusercontent.com/u/17920822?v=4" width="42;" alt="onewesong"/></a>
<a href="https://github.com/openapphub" title="openapphub"><img src="https://avatars.githubusercontent.com/u/175949671?v=4" width="42;" alt="openapphub"/></a>
<a href="https://github.com/phygerr" title="phygerr"><img src="https://avatars.githubusercontent.com/u/42068889?v=4" width="42;" alt="phygerr"/></a>
<a href="https://github.com/ri-fumo" title="ri-fumo"><img src="https://avatars.githubusercontent.com/u/190000479?v=4" width="42;" alt="ri-fumo"/></a>
<a href="https://github.com/shanhai1024" title="shanhai1024"><img src="https://avatars.githubusercontent.com/u/56210461?v=4" width="42;" alt="shanhai1024"/></a>
<a href="https://github.com/Mowmowj" title="nexo"><img src="https://avatars.githubusercontent.com/u/24759562?v=4" width="42;" alt="nexo"/></a>
<a href="https://github.com/suyangzuo" title="suyangzuo"><img src="https://avatars.githubusercontent.com/u/50766353?v=4" width="42;" alt="suyangzuo"/></a>
<a href="https://github.com/swift-fs" title="swift-fs"><img src="https://avatars.githubusercontent.com/u/77133741?v=4" width="42;" alt="swift-fs"/></a>
<a href="https://github.com/wannima66" title="tmen"><img src="https://avatars.githubusercontent.com/u/26410255?v=4" width="42;" alt="tmen"/></a>
<a href="https://github.com/wjjwkwindy" title="Hudson Alen"><img src="https://avatars.githubusercontent.com/u/9508591?v=4" width="42;" alt="Hudson Alen"/></a>
<a href="https://github.com/xing133" title="xing133"><img src="https://avatars.githubusercontent.com/u/5336490?v=4" width="42;" alt="xing133"/></a>
<a href="https://github.com/giteeking" title="xunjian"><img src="https://avatars.githubusercontent.com/u/166626162?v=4" width="42;" alt="xunjian"/></a>
<a href="https://github.com/hiyms" title="yms"><img src="https://avatars.githubusercontent.com/u/84654050?v=4" width="42;" alt="yms"/></a>
<a href="https://github.com/childeyouyu" title="youyu"><img src="https://avatars.githubusercontent.com/u/89082776?v=4" width="42;" alt="youyu"/></a>
<a href="https://github.com/sirius-fan" title="Fan"><img src="https://avatars.githubusercontent.com/u/25720015?v=4" width="42;" alt="Fan"/></a>
<a href="https://github.com/Fuku-L" title="Foozi"><img src="https://avatars.githubusercontent.com/u/38535911?v=4" width="42;" alt="Foozi"/></a>
<a href="https://github.com/Furry-Monster" title="Furry-Monster"><img src="https://avatars.githubusercontent.com/u/158404543?v=4" width="42;" alt="Furry-Monster"/></a>
<a href="https://github.com/gongyeheyu" title="GONGYE Heyu"><img src="https://avatars.githubusercontent.com/u/85177605?v=4" width="42;" alt="GONGYE Heyu"/></a>
<a href="https://github.com/Ding-Kyoma" title="HooinKyoma"><img src="https://avatars.githubusercontent.com/u/44542198?v=4" width="42;" alt="HooinKyoma"/></a>
<a href="https://github.com/InkSha" title="InkSha"><img src="https://avatars.githubusercontent.com/u/79246657?v=4" width="42;" alt="InkSha"/></a>
<a href="https://github.com/JavaZeroo" title="JavaZero"><img src="https://avatars.githubusercontent.com/u/71128095?v=4" width="42;" alt="JavaZero"/></a>
<a href="https://github.com/jeremyjone" title="Jeremy Jone"><img src="https://avatars.githubusercontent.com/u/37676231?v=4" width="42;" alt="Jeremy Jone"/></a>
<a href="https://github.com/JetSquirrel" title="JetSquirrel"><img src="https://avatars.githubusercontent.com/u/20291255?v=4" width="42;" alt="JetSquirrel"/></a>
<a href="https://github.com/Jruing" title="Jruing"><img src="https://avatars.githubusercontent.com/u/31944565?v=4" width="42;" alt="Jruing"/></a>
<a href="https://github.com/LightQuanta" title="Light_Quanta"><img src="https://avatars.githubusercontent.com/u/18213217?v=4" width="42;" alt="Light_Quanta"/></a>
<a href="https://github.com/Lihuagreek" title="Lihuagreek"><img src="https://avatars.githubusercontent.com/u/51040740?v=4" width="42;" alt="Lihuagreek"/></a>
<a href="https://github.com/likeadmin-likeshop" title="likeadmin通过管理后台-likeshop全开源商城"><img src="https://avatars.githubusercontent.com/u/77180968?v=4" width="42;" alt="likeadmin通过管理后台-likeshop全开源商城"/></a>
<a href="https://github.com/liuyuhe666" title="Liu Yuhe"><img src="https://avatars.githubusercontent.com/u/171144077?v=4" width="42;" alt="Liu Yuhe"/></a>
<a href="https://github.com/lvelvee" title="Lve Lvee"><img src="https://avatars.githubusercontent.com/u/25785753?v=4" width="42;" alt="Lve Lvee"/></a>
<a href="https://github.com/Xiwin" title="shawing"><img src="https://avatars.githubusercontent.com/u/107191230?v=4" width="42;" alt="shawing"/></a>
<a href="https://github.com/13812700839" title="花殇"><img src="https://avatars.githubusercontent.com/u/58072506?v=4" width="42;" alt="花殇"/></a>
<a href="https://github.com/JinchuanL" title="ANDY"><img src="https://avatars.githubusercontent.com/u/68026794?v=4" width="42;" alt="ANDY"/></a>
<a href="https://github.com/dousha0w0" title="dousha0w0"><img src="https://avatars.githubusercontent.com/u/52566311?v=4" width="42;" alt="dousha0w0"/></a>
<a href="https://github.com/Attack825" title="Attack825"><img src="https://avatars.githubusercontent.com/u/68852184?v=4" width="42;" alt="Attack825"/></a>
<a href="https://github.com/gitchenze" title="Aze"><img src="https://avatars.githubusercontent.com/u/13357869?v=4" width="42;" alt="Aze"/></a>
<a href="https://github.com/Blanket58" title="Blanket58"><img src="https://avatars.githubusercontent.com/u/39766189?v=4" width="42;" alt="Blanket58"/></a>
<a href="https://github.com/BobH-Official" title="BobH"><img src="https://avatars.githubusercontent.com/u/29333228?v=4" width="42;" alt="BobH"/></a>
<a href="https://github.com/Brid9e" title="Joe"><img src="https://avatars.githubusercontent.com/u/85558909?v=4" width="42;" alt="Joe"/></a>
<a href="https://github.com/ch3nnn" title="chentong"><img src="https://avatars.githubusercontent.com/u/40114564?v=4" width="42;" alt="chentong"/></a>
<a href="https://github.com/CharlotteZeng" title="hanchZ"><img src="https://avatars.githubusercontent.com/u/19461184?v=4" width="42;" alt="hanchZ"/></a>
<a href="https://github.com/ohto-ai" title="Choo"><img src="https://avatars.githubusercontent.com/u/46275725?v=4" width="42;" alt="Choo"/></a>
<a href="https://github.com/chinaphp" title="Coffee"><img src="https://avatars.githubusercontent.com/u/520827?v=4" width="42;" alt="Coffee"/></a>
<a href="https://github.com/DEEMO101" title="DEEMO101"><img src="https://avatars.githubusercontent.com/u/35123091?v=4" width="42;" alt="DEEMO101"/></a>
<a href="https://github.com/EyeReflection" title="EyeReflection"><img src="https://avatars.githubusercontent.com/u/221274482?v=4" width="42;" alt="EyeReflection"/></a>
<a href="https://github.com/Damao2250" title="Damao"><img src="https://avatars.githubusercontent.com/u/19251992?v=4" width="42;" alt="Damao"/></a>
<a href="https://github.com/dasferco" title="Dasferco"><img src="https://avatars.githubusercontent.com/u/92622404?v=4" width="42;" alt="Dasferco"/></a>
<a href="https://github.com/demigodliu" title="DemigodLiu"><img src="https://avatars.githubusercontent.com/u/30372735?v=4" width="42;" alt="DemigodLiu"/></a>
<a href="https://github.com/TRDSCSH" title="TRDSCSH"><img src="https://avatars.githubusercontent.com/u/125717891?v=4" width="42;" alt="TRDSCSH"/></a>
<a href="https://github.com/YLee9527" title="Terry Young"><img src="https://avatars.githubusercontent.com/u/18697332?v=4" width="42;" alt="Terry Young"/></a>
<a href="https://github.com/whb1998a" title="Wafer"><img src="https://avatars.githubusercontent.com/u/44045064?v=4" width="42;" alt="Wafer"/></a>
<a href="https://github.com/dwgeneral" title="Happy-Engineer"><img src="https://avatars.githubusercontent.com/u/8654993?v=4" width="42;" alt="Happy-Engineer"/></a>
<a href="https://github.com/BATTLEHAWK00" title="While True: learn()"><img src="https://avatars.githubusercontent.com/u/45313304?v=4" width="42;" alt="While True: learn()"/></a>
<a href="https://github.com/hi-liyan" title="李李李"><img src="https://avatars.githubusercontent.com/u/40056492?v=4" width="42;" alt="李李李"/></a>
<a href="https://github.com/Yo-gurts" title="Yogurt"><img src="https://avatars.githubusercontent.com/u/44612841?v=4" width="42;" alt="Yogurt"/></a>
<a href="https://github.com/zkassing" title="You Kuan Zhang"><img src="https://avatars.githubusercontent.com/u/13414184?v=4" width="42;" alt="You Kuan Zhang"/></a>
<a href="https://github.com/dfshizhiqiang" title="Zech"><img src="https://avatars.githubusercontent.com/u/7030019?v=4" width="42;" alt="Zech"/></a>
<a href="https://github.com/HeZephyr" title="Zephyr He"><img src="https://avatars.githubusercontent.com/u/67893254?v=4" width="42;" alt="Zephyr He"/></a>
<a href="https://github.com/yikuaibro" title="yikuaibro"><img src="https://avatars.githubusercontent.com/u/44493045?v=4" width="42;" alt="yikuaibro"/></a>
<a href="https://github.com/zhu0629" title="zhucong"><img src="https://avatars.githubusercontent.com/u/13188450?v=4" width="42;" alt="zhucong"/></a>
<a href="https://github.com/Leaderzhangyi" title="ZinkCas"><img src="https://avatars.githubusercontent.com/u/46915666?v=4" width="42;" alt="ZinkCas"/></a>
<a href="https://github.com/y52y" title="Zyj"><img src="https://avatars.githubusercontent.com/u/51304324?v=4" width="42;" alt="Zyj"/></a>
<a href="https://github.com/Lmmmmmm-bb" title="_lmmmmmm"><img src="https://avatars.githubusercontent.com/u/54026110?v=4" width="42;" alt="_lmmmmmm"/></a>
<a href="https://github.com/zlfyuan" title="bgbgPang"><img src="https://avatars.githubusercontent.com/u/19658018?v=4" width="42;" alt="bgbgPang"/></a>
<a href="https://github.com/isecret" title="Mao Wang"><img src="https://avatars.githubusercontent.com/u/15724152?v=4" width="42;" alt="Mao Wang"/></a>
<a href="https://github.com/mariuszmichalowski" title="Mariusz Michalowski"><img src="https://avatars.githubusercontent.com/u/92091891?v=4" width="42;" alt="Mariusz Michalowski"/></a>
<a href="https://github.com/Mieriki" title="Mieriki"><img src="https://avatars.githubusercontent.com/u/142009318?v=4" width="42;" alt="Mieriki"/></a>
<a href="https://github.com/malcolmyu" title="Minghao Yu"><img src="https://avatars.githubusercontent.com/u/3203962?v=4" width="42;" alt="Minghao Yu"/></a>
<a href="https://github.com/Moeyuuko" title="Moeyuuko"><img src="https://avatars.githubusercontent.com/u/14266681?v=4" width="42;" alt="Moeyuuko"/></a>
<a href="https://github.com/mo3et" title="Monet Lee"><img src="https://avatars.githubusercontent.com/u/34803812?v=4" width="42;" alt="Monet Lee"/></a>
<a href="https://github.com/NianwenDan" title="NianwenDan"><img src="https://avatars.githubusercontent.com/u/74407127?v=4" width="42;" alt="NianwenDan"/></a>
<a href="https://github.com/Noryu-01" title="Noryu"><img src="https://avatars.githubusercontent.com/u/109856546?v=4" width="42;" alt="Noryu"/></a>
<a href="https://github.com/PILIHU2022" title="Spark"><img src="https://avatars.githubusercontent.com/u/100511118?v=4" width="42;" alt="Spark"/></a>
<a href="https://github.com/Perzch" title="ZhaoChunhuan"><img src="https://avatars.githubusercontent.com/u/67987641?v=4" width="42;" alt="ZhaoChunhuan"/></a>
<a href="https://github.com/PipecraftNet" title="Pipecraft"><img src="https://avatars.githubusercontent.com/u/88728670?v=4" width="42;" alt="Pipecraft"/></a>
<a href="https://github.com/sevenleave" title="Poirot Hercule"><img src="https://avatars.githubusercontent.com/u/24411140?v=4" width="42;" alt="Poirot Hercule"/></a>
<a href="https://github.com/QDelta" title="QDelta"><img src="https://avatars.githubusercontent.com/u/60222316?v=4" width="42;" alt="QDelta"/></a>
<a href="https://github.com/Qliangw" title="Qliangw"><img src="https://avatars.githubusercontent.com/u/22791711?v=4" width="42;" alt="Qliangw"/></a>
<a href="https://github.com/RivailleF" title="RivailleF"><img src="https://avatars.githubusercontent.com/u/93083015?v=4" width="42;" alt="RivailleF"/></a>
<a href="https://github.com/qinxiongzhou" title="Ryan Zhou"><img src="https://avatars.githubusercontent.com/u/33239096?v=4" width="42;" alt="Ryan Zhou"/></a>
<a href="https://github.com/DataEraserC" title="Sacabambaspis"><img src="https://avatars.githubusercontent.com/u/102341238?v=4" width="42;" alt="Sacabambaspis"/></a>


<!--GAMFC-END-->

上图贡献者列表，由 [contributors](https://github.com/jaywcjlove/github-action-contributors) 自动生成贡献者图片。

## License

MIT © [Kenny Wong](https://github.com/jaywcjlove)
