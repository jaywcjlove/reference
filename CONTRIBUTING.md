Contributing 贡献
====

感谢您对**备忘清单**贡献的兴趣👍👍，是像您这样的人使 [`Quick Reference`](https://jaywcjlove.github.io/reference) 成为如此出色的网站 🎉🎉。随时提交问题和增强请求。

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
[Django](./docs/djiango.md)<!--rehype:style=background: rgb(12 75 51/var(\-\-bg\-opacity));&class=contributing-->
```

添加 `contributing` 类名，会在卡片下方添加 _`👆待完善需要您的参与`_，添加 `data-info=👆看看还缺点儿什么？`，更换默认提示文本。

```markdown
[Django](./docs/djiango.md)<!--rehype:style=background: rgb(12 75 51/var(\-\-bg\-opacity));&class=tag&data-lang=Python-->
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
- [hestudio.org](https://quickref.hestudio.org)
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

<!--GAMFC--><a href="https://github.com/jaywcjlove" title="小弟调调">
  <img src="https://avatars.githubusercontent.com/u/1680273?v=4" width="42;" alt="小弟调调"/>
</a>
<a href="https://github.com/fwqaaq" title="fw_qaq">
  <img src="https://avatars.githubusercontent.com/u/82551626?v=4" width="42;" alt="fw_qaq"/>
</a>
<a href="https://github.com/mofelee" title="mofelee">
  <img src="https://avatars.githubusercontent.com/u/5069410?v=4" width="42;" alt="mofelee"/>
</a>
<a href="https://github.com/JeffersonHuang" title="Jefferson">
  <img src="https://avatars.githubusercontent.com/u/47512530?v=4" width="42;" alt="Jefferson"/>
</a>
<a href="https://github.com/Alex-Programer" title="Alex">
  <img src="https://avatars.githubusercontent.com/u/115539090?v=4" width="42;" alt="Alex"/>
</a>
<a href="https://github.com/LufsX" title="LufsX">
  <img src="https://avatars.githubusercontent.com/u/33221883?v=4" width="42;" alt="LufsX"/>
</a>
<a href="https://github.com/expoli" title="expoli">
  <img src="https://avatars.githubusercontent.com/u/31023767?v=4" width="42;" alt="expoli"/>
</a>
<a href="https://github.com/eryajf" title="二丫讲梵">
  <img src="https://avatars.githubusercontent.com/u/33259379?v=4" width="42;" alt="二丫讲梵"/>
</a>
<a href="https://github.com/LiuYuan-SHU" title="Liuyuan">
  <img src="https://avatars.githubusercontent.com/u/96400967?v=4" width="42;" alt="Liuyuan"/>
</a>
<a href="https://github.com/chaos-cn" title="chaos">
  <img src="https://avatars.githubusercontent.com/u/71205599?v=4" width="42;" alt="chaos"/>
</a>
<a href="https://github.com/heStudio-Network" title="醉、倾城">
  <img src="https://avatars.githubusercontent.com/u/119711513?v=4" width="42;" alt="醉、倾城"/>
</a>
<a href="https://github.com/XYZscratcher" title="XYZ">
  <img src="https://avatars.githubusercontent.com/u/108533817?v=4" width="42;" alt="XYZ"/>
</a>
<a href="https://github.com/1834423612" title="kjch">
  <img src="https://avatars.githubusercontent.com/u/49981661?v=4" width="42;" alt="kjch"/>
</a>
<a href="https://github.com/mancuoj" title="mancuoj">
  <img src="https://avatars.githubusercontent.com/u/45707684?v=4" width="42;" alt="mancuoj"/>
</a>
<a href="https://github.com/pangxiaoli" title="pangxiaoli">
  <img src="https://avatars.githubusercontent.com/u/54620953?v=4" width="42;" alt="pangxiaoli"/>
</a>
<a href="https://github.com/partoneplay" title="partoneplay">
  <img src="https://avatars.githubusercontent.com/u/5189132?v=4" width="42;" alt="partoneplay"/>
</a>
<a href="https://github.com/ryanhex53" title="ryanhex53">
  <img src="https://avatars.githubusercontent.com/u/360426?v=4" width="42;" alt="ryanhex53"/>
</a>
<a href="https://github.com/catcto" title="喵仙人">
  <img src="https://avatars.githubusercontent.com/u/5467932?v=4" width="42;" alt="喵仙人"/>
</a>
<a href="https://github.com/Country-If" title="Maylon">
  <img src="https://avatars.githubusercontent.com/u/62837275?v=4" width="42;" alt="Maylon"/>
</a>
<a href="https://github.com/qyl27" title="秋 雨落">
  <img src="https://avatars.githubusercontent.com/u/53731501?v=4" width="42;" alt="秋 雨落"/>
</a>
<a href="https://github.com/13812700839" title="花殇">
  <img src="https://avatars.githubusercontent.com/u/58072506?v=4" width="42;" alt="花殇"/>
</a>
<a href="https://github.com/dousha0w0" title="dousha0w0">
  <img src="https://avatars.githubusercontent.com/u/52566311?v=4" width="42;" alt="dousha0w0"/>
</a>
<a href="https://github.com/Brid9e" title="Brid9e">
  <img src="https://avatars.githubusercontent.com/u/85558909?v=4" width="42;" alt="Brid9e"/>
</a>
<a href="https://github.com/ch3nnn" title="陈通">
  <img src="https://avatars.githubusercontent.com/u/40114564?v=4" width="42;" alt="陈通"/>
</a>
<a href="https://github.com/CharlotteZeng" title="hanchZ">
  <img src="https://avatars.githubusercontent.com/u/19461184?v=4" width="42;" alt="hanchZ"/>
</a>
<a href="https://github.com/Damao2250" title="Damao">
  <img src="https://avatars.githubusercontent.com/u/19251992?v=4" width="42;" alt="Damao"/>
</a>
<a href="https://github.com/demigodliu" title="DemigodLiu">
  <img src="https://avatars.githubusercontent.com/u/30372735?v=4" width="42;" alt="DemigodLiu"/>
</a>
<a href="https://github.com/eeeeeio" title="EEEEE">
  <img src="https://avatars.githubusercontent.com/u/20723545?v=4" width="42;" alt="EEEEE"/>
</a>
<a href="https://github.com/Fuku-L" title="Fuku-L">
  <img src="https://avatars.githubusercontent.com/u/38535911?v=4" width="42;" alt="Fuku-L"/>
</a>
<a href="https://github.com/gongyeheyu" title="GONGYE Heyu">
  <img src="https://avatars.githubusercontent.com/u/85177605?v=4" width="42;" alt="GONGYE Heyu"/>
</a>
<a href="https://github.com/Ding-Kyoma" title="HooinKyoma">
  <img src="https://avatars.githubusercontent.com/u/44542198?v=4" width="42;" alt="HooinKyoma"/>
</a>
<a href="https://github.com/jasnzhuang" title="Jason Zhuang">
  <img src="https://avatars.githubusercontent.com/u/16612921?v=4" width="42;" alt="Jason Zhuang"/>
</a>
<a href="https://github.com/JetSquirrel" title="JetSquirrel">
  <img src="https://avatars.githubusercontent.com/u/20291255?v=4" width="42;" alt="JetSquirrel"/>
</a>
<a href="https://github.com/LightQuanta" title="Light_Quanta">
  <img src="https://avatars.githubusercontent.com/u/18213217?v=4" width="42;" alt="Light_Quanta"/>
</a>
<a href="https://github.com/Lihuagreek" title="Lihuagreek">
  <img src="https://avatars.githubusercontent.com/u/51040740?v=4" width="42;" alt="Lihuagreek"/>
</a>
<a href="https://github.com/likeshop-github" title="LikeShop技术社区">
  <img src="https://avatars.githubusercontent.com/u/77180968?v=4" width="42;" alt="LikeShop技术社区"/>
</a>
<a href="https://github.com/mariuszmichalowski" title="Mariusz Michalowski">
  <img src="https://avatars.githubusercontent.com/u/92091891?v=4" width="42;" alt="Mariusz Michalowski"/>
</a>
<a href="https://github.com/malcolmyu" title="Minghao Yu">
  <img src="https://avatars.githubusercontent.com/u/3203962?v=4" width="42;" alt="Minghao Yu"/>
</a>
<a href="https://github.com/Moeyuuko" title="Moeyuuko">
  <img src="https://avatars.githubusercontent.com/u/14266681?v=4" width="42;" alt="Moeyuuko"/>
</a>
<a href="https://github.com/Mo3et" title="Monet Lee">
  <img src="https://avatars.githubusercontent.com/u/34803812?v=4" width="42;" alt="Monet Lee"/>
</a>
<a href="https://github.com/HanaNoryu" title="Noryu">
  <img src="https://avatars.githubusercontent.com/u/109856546?v=4" width="42;" alt="Noryu"/>
</a>
<a href="https://github.com/Perzch" title="Perzch">
  <img src="https://avatars.githubusercontent.com/u/67987641?v=4" width="42;" alt="Perzch"/>
</a>
<a href="https://github.com/PipecraftNet" title="Pipecraft">
  <img src="https://avatars.githubusercontent.com/u/88728670?v=4" width="42;" alt="Pipecraft"/>
</a>
<a href="https://github.com/QDelta" title="Jianxing Qin">
  <img src="https://avatars.githubusercontent.com/u/60222316?v=4" width="42;" alt="Jianxing Qin"/>
</a>
<a href="https://github.com/qinxiongzhou" title="Ryan Zhou">
  <img src="https://avatars.githubusercontent.com/u/33239096?v=4" width="42;" alt="Ryan Zhou"/>
</a>
<a href="https://github.com/whb1998a" title="WHB">
  <img src="https://avatars.githubusercontent.com/u/44045064?v=4" width="42;" alt="WHB"/>
</a>
<a href="https://github.com/BATTLEHAWK00" title="While True: learn()">
  <img src="https://avatars.githubusercontent.com/u/45313304?v=4" width="42;" alt="While True: learn()"/>
</a>
<a href="https://github.com/hi-liyan" title="Yan Li">
  <img src="https://avatars.githubusercontent.com/u/40056492?v=4" width="42;" alt="Yan Li"/>
</a>
<a href="https://github.com/dfshizhiqiang" title="Zech">
  <img src="https://avatars.githubusercontent.com/u/7030019?v=4" width="42;" alt="Zech"/>
</a>
<a href="https://github.com/yikuaibro" title="yikuaibro">
  <img src="https://avatars.githubusercontent.com/u/44493045?v=4" width="42;" alt="yikuaibro"/>
</a>
<a href="https://github.com/Leaderzhangyi" title="ZinkCas">
  <img src="https://avatars.githubusercontent.com/u/46915666?v=4" width="42;" alt="ZinkCas"/>
</a>
<a href="https://github.com/y52y" title="Zyj">
  <img src="https://avatars.githubusercontent.com/u/51304324?v=4" width="42;" alt="Zyj"/>
</a>
<a href="https://github.com/Lmmmmmm-bb" title="_lmmmmmm">
  <img src="https://avatars.githubusercontent.com/u/54026110?v=4" width="42;" alt="_lmmmmmm"/>
</a>
<a href="https://github.com/chyok" title="chyok">
  <img src="https://avatars.githubusercontent.com/u/32629225?v=4" width="42;" alt="chyok"/>
</a>
<a href="https://github.com/gaoxiaoduan" title="coderduan">
  <img src="https://avatars.githubusercontent.com/u/69953511?v=4" width="42;" alt="coderduan"/>
</a>
<a href="https://github.com/cool9203" title="cool9203">
  <img src="https://avatars.githubusercontent.com/u/29609607?v=4" width="42;" alt="cool9203"/>
</a>
<a href="https://github.com/fakevn" title="fakevn">
  <img src="https://avatars.githubusercontent.com/u/11464386?v=4" width="42;" alt="fakevn"/>
</a>
<a href="https://github.com/fjqz177" title="fjqz177">
  <img src="https://avatars.githubusercontent.com/u/83070583?v=4" width="42;" alt="fjqz177"/>
</a>
<a href="https://github.com/gi-b716" title="gi-b716">
  <img src="https://avatars.githubusercontent.com/u/78394473?v=4" width="42;" alt="gi-b716"/>
</a>
<a href="https://github.com/godotc" title="godotc">
  <img src="https://avatars.githubusercontent.com/u/79260851?v=4" width="42;" alt="godotc"/>
</a>
<a href="https://github.com/greyhao" title="greyhao">
  <img src="https://avatars.githubusercontent.com/u/107107440?v=4" width="42;" alt="greyhao"/>
</a>
<a href="https://github.com/sunny0826" title="guoxudong">
  <img src="https://avatars.githubusercontent.com/u/24563928?v=4" width="42;" alt="guoxudong"/>
</a>
<a href="https://github.com/hua03" title="hua03">
  <img src="https://avatars.githubusercontent.com/u/19561959?v=4" width="42;" alt="hua03"/>
</a>
<a href="https://github.com/yanxuplay" title="hupilan">
  <img src="https://avatars.githubusercontent.com/u/69749541?v=4" width="42;" alt="hupilan"/>
</a>
<a href="https://github.com/hweining" title="hweining">
  <img src="https://avatars.githubusercontent.com/u/8973985?v=4" width="42;" alt="hweining"/>
</a>
<a href="https://github.com/auroraslot" title="irony">
  <img src="https://avatars.githubusercontent.com/u/48817882?v=4" width="42;" alt="irony"/>
</a>
<a href="https://github.com/joyfully-W" title="joyfully-W">
  <img src="https://avatars.githubusercontent.com/u/32212924?v=4" width="42;" alt="joyfully-W"/>
</a>
<a href="https://github.com/k983551019" title="k983551019">
  <img src="https://avatars.githubusercontent.com/u/48147837?v=4" width="42;" alt="k983551019"/>
</a>
<a href="https://github.com/kdxcxs" title="kdxcxs">
  <img src="https://avatars.githubusercontent.com/u/18746192?v=4" width="42;" alt="kdxcxs"/>
</a>
<a href="https://github.com/genius-kim" title="kim">
  <img src="https://avatars.githubusercontent.com/u/119488561?v=4" width="42;" alt="kim"/>
</a>
<a href="https://github.com/larry-xue" title="larry">
  <img src="https://avatars.githubusercontent.com/u/48818060?v=4" width="42;" alt="larry"/>
</a>
<a href="https://github.com/liliangrong777" title="liliangrong777">
  <img src="https://avatars.githubusercontent.com/u/58727146?v=4" width="42;" alt="liliangrong777"/>
</a>
<a href="https://github.com/lykjjj" title="lykjjj">
  <img src="https://avatars.githubusercontent.com/u/58510058?v=4" width="42;" alt="lykjjj"/>
</a>
<a href="https://github.com/miclon-dev" title="miclon-dev">
  <img src="https://avatars.githubusercontent.com/u/111753685?v=4" width="42;" alt="miclon-dev"/>
</a>
<a href="https://github.com/onewesong" title="onewesong">
  <img src="https://avatars.githubusercontent.com/u/17920822?v=4" width="42;" alt="onewesong"/>
</a>
<a href="https://github.com/phygerr" title="phygerr">
  <img src="https://avatars.githubusercontent.com/u/42068889?v=4" width="42;" alt="phygerr"/>
</a>
<a href="https://github.com/Mowmowj" title="shelton">
  <img src="https://avatars.githubusercontent.com/u/24759562?v=4" width="42;" alt="shelton"/>
</a>
<a href="https://github.com/wjjwkwindy" title="wjjwkwindy">
  <img src="https://avatars.githubusercontent.com/u/9508591?v=4" width="42;" alt="wjjwkwindy"/>
</a>
<a href="https://github.com/xing133" title="xing133">
  <img src="https://avatars.githubusercontent.com/u/5336490?v=4" width="42;" alt="xing133"/>
</a>
<a href="https://github.com/zxx457" title="zxx457">
  <img src="https://avatars.githubusercontent.com/u/114141362?v=4" width="42;" alt="zxx457"/>
</a>
<a href="https://github.com/lvzhenbo" title="吕振波">
  <img src="https://avatars.githubusercontent.com/u/32427677?v=4" width="42;" alt="吕振波"/>
</a>
<a href="https://github.com/LuckyJie12" title="夜未央">
  <img src="https://avatars.githubusercontent.com/u/102901105?v=4" width="42;" alt="夜未央"/>
</a>
<a href="https://github.com/ZIDOUZI" title="子斗子">
  <img src="https://avatars.githubusercontent.com/u/53157536?v=4" width="42;" alt="子斗子"/>
</a>
<a href="https://github.com/lisheng741" title="芦荟柚子茶">
  <img src="https://avatars.githubusercontent.com/u/53617305?v=4" width="42;" alt="芦荟柚子茶"/>
</a>
<a href="https://github.com/1250422131" title="萌新杰少">
  <img src="https://avatars.githubusercontent.com/u/52126790?v=4" width="42;" alt="萌新杰少"/>
</a>
<a href="https://github.com/qwxingzhe" title="行者">
  <img src="https://avatars.githubusercontent.com/u/7071651?v=4" width="42;" alt="行者"/>
</a><!--GAMFC-END-->

上图贡献者列表，由 [contributors](https://github.com/jaywcjlove/github-action-contributors) 自动生成贡献者图片。

## License

MIT © [Kenny Wong](https://github.com/jaywcjlove)
