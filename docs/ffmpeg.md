FFmpeg 备忘清单
===

本备忘清单是 [FFmpeg](https://ffmpeg.org/) 中常见视频处理操作的备忘清单

FFmpeg 参考
---

### 安装
<!--rehype:wrap-class=row-span-2-->

Linux

```
$ apt-get install ffmpeg
$ yum install ffmpeg
```

MacOS

```bash
$ brew install ffmpeg
```

### 示例
<!--rehype:wrap-class=row-span-2-->

mp4 转 avi:

```bash
$ ffmpeg -i input.mp4 output.avi
```

webm 转 mp4:

```bash
$ ffmpeg -i movie.webm movie.mp4
```

### 全局选项

:- | -
:- | -
`-y` | 覆盖输出文件
`-n` | 不要覆盖输出文件

### 主要选项

:- | -
:- | -
`-f fmt` | 强制输入或输出文件格式
`-i fName` | 输入文件名，未指定显示内容流的摘要
`-c codecName` | 指定编解码器 [输入或输出]
`-fs Nbytes` | 以 Nbytes 指定最大输出文件大小

### 基础参数

:- | -
:- | -
`-codecs`             | 列出可用编码
`-formats`            | 列出支持的格式
`-protocols`          | 列出支持的协议
`-i input.mp4`        | 指定输入文件
`-c:v libx264`        | 指定视频编码
`-c:a aac`            | 指定音频编码
`-vcodec libx264`     | 旧写法
`-acodec aac`         | 旧写法
`-fs SIZE`            | 指定文件大小

### 视频参数
<!--rehype:wrap-class=col-span-2 row-span-2-->

:- | -
:- | -
`-b bRate` | 设置视频比特率(单位 kbit/s)
`-fixaspect` | 固定纵横比
`-bt tolerance` | 设置视频比特率容差(单位 kbit/s)
`-maxrate bRate` | 设置最大视频比特率容差(单位 kbit/s)
`-minrate bRate` | 设置最小视频比特率容差(单位 kbit/s)
`-bufsize size` | 设置速率控制缓冲区大小(以 kByte 为单位)
`-sameq` | 使用与源相同的视频质量(意味着 VBR)
`-newvideo` | 将新的视频流添加到当前输出流
`-aspect RATIO` | 纵横比(4:3、16:9 或 1.25)
`-r RATE` | 每秒帧率
`-s WIDTHxHEIGHT` | 帧大小
`-vn` | 没有视频
`-crf` | 指定编码的质量，数值越大压缩越高，一般范围是 18-28

### 码率设置

```bash
-b:v 1M      # 视频比特率(1M = 1Mbit/s)
-b:a 1M      # 音频比特率(1M = 1Mbit/s)
```

### 尺寸规格

:- | - | - | -
:- | - | - | -
`K` 或 `k` | 103 | 1000 字节 | 千字节 Kilobytes
`M` | 106 | 1000000 字节 | 兆字节 Megabytes
`G` | 109 | 1000000000 | 千兆字节 Gigabytes
`Ki` | 210 | 1024 | 千字节 Kibibyte
`Mi` | 220 | 1048576 | 兆字节 Mebibyte
`Gi` | 230 | 1073741824 | Gibibyte

### 音频参数
<!--rehype:wrap-class=col-span-2-->

:- | -
:- | -
`-ab bRate` | 设置音频比特率(单位 kbit/s)
`-aframes N` | 设置要录制的音频帧数 [-frames:a 的别名]
`-aq q` | 设置音频质量(特定于编解码器，VBR) [-q:a 的别名]
`-an` | 禁用录音
`-acodec codec` | 设置音频编解码器。[-codec:a 的别名] 使用 'copy' 复制流。
`-vol` | 以 256 的倍数更改音频音量，其中 256 = 100%(正常)音量。例如 512 = 200%
`-newaudio` | 将新的音频流添加到当前输出流
`-alang code` | 设置当前音频流的 ISO 639 语言代码(3 个字母)
`-ac nTract` | 指定立体声通道数（n个声道）。例如 nTract = 2 即2个声道

视频编辑
---
<!--rehype:body-class=cols-2-->

### 剪切视频部分
<!--rehype:wrap-class=col-span-2-->

```bash
# 从1分45秒开始剪切2分35秒
$ ffmpeg -i <input> -ss 00:01:45 -t 00:02:35 -vcodec copy -acodec copy <output>
# 从1分45秒开始剪切到第4分20秒，与上一行等效
$ ffmpeg -i <input> -ss 00:01:45 -to 00:04:20 -codec copy <output>
$ ffmpeg -ss 00:00:30 -i orginalfile.mpg -t 00:00:05 -vcodec copy -acodec copy newfile.mpg
# 从 4.5 秒开始的 5 秒长的视频
$ ffmpeg -i in.mp4 -ss 4.5 -t 5 out.mp4
```
<!--rehype:className=wrap-text -->

### 视频帧速率

```bash
$ ffmpeg -i input.avi -r 24 output.avi
```

将输出文件的帧速率强制为 24 fps

```bash
$ ffmpeg -r 1 -i input.m2v -r 24 output.avi
```

将输入文件的帧速率(仅对原始格式有效)强制为 1 fps，将输出文件的帧速率强制为 24 fps

### H265 2-pass 编码
<!--rehype:wrap-class=row-span-2-->

```bash
$ ffmpeg -y -i <input> -c:v libx265 -b:v 2600k \
  -x265-params pass=1 \
  -an -f mp4 /dev/null && \
    ffmpeg -i <input> \
        -c:v libx265 -b:v 2600k \
        -x265-params pass=2 \
        -c:a aac -b:a 128k output.mp4
```
<!--rehype:className=wrap-text -->

对于 `H265 2-pass` 编码，您需要组合 `2` 个 `ffmpeg` 调用

### 视频比特率设置

```bash
$ ffmpeg -i input.avi -b:v 64k -bufsize 64k output.avi
```

将输出文件的视频比特率设置为 64 kbit/s

### 固定旋转

```bash
$ ffmpeg -i <input> -c copy -metadata:s:v:0 rotate=90 <output>
```
<!--rehype:className=wrap-text -->

不要为旋转重新编码，而是简单地为旋转角度添加一个视频元数据字段

### 缩放到特定宽度

```bash
$ ffmpeg -i in.mp4 -filter:v scale="538:trunc(ow/a/2)*2" -c:a copy out.mp4
```

给定所需的视频宽度，例如 538 像素，您可以使用以下方法将视频调整为该宽度，同时保持宽高比

重新包装
---

### 提取音频流

```bash
$ ffmpeg -i file.mp4 -vn -c copy output.aac 
```
<!--rehype:className=wrap-text -->

`-vn` (过滤视频)，使用 `-c copy`，不会重新解码和编码，加快速度。

### 提取视频流

```bash
$ ffmpeg -i file.mp4 -an -c copy output.mp4
```

### 处理 id3 标签
<!--rehype:wrap-class=row-span-2-->

提取

```bash
$ ffmpeg -i file.mp3 -f ffmetadata metadata.txt
```
<!--rehype:className=wrap-text -->

设置

```bash
$ ffmpeg -i file.mp3 -acodec copy -metadata title="<title>" -metadata artist="<artist>" -metadata album="<album>" out.mp3
```
<!--rehype:className=wrap-text -->

更多[请查看](https://gist.github.com/eyecatchup/0757b3d8b989fe433979db2ea7d95a01)

### 重新采样/转换音频

```bash
$ ffmpeg -i file.aac -acodec mp3 -ar 44100 -ab 128000 output.mp3
```
<!--rehype:className=wrap-text -->

### 将输入文件转码为 DVD PAL 格式

```bash
$ ffmpeg -y -threads 8 -i inFile -target pal-dvd -ac 2 -aspect 16:9 -acodec mp2 -ab 224000 -vf pad=0:­0:0:0 outFile
```
<!--rehype:className=wrap-text -->

### -map 命令
<!--rehype:wrap-class=col-span-2 row-span-2-->

`-map` 命令用于指定索引文件，以及索引文件中流类型和它的索引

----

```bash
-map index:stram_type:stream_index
```

----

:- | -
:- | -
`input_file_index` | 输入的文件索引(从 0 开始)
`stream_type` | 指定文件流的类型(a -> 音频，v -> 视频，s -> 字幕)
`stream_index` | 指定流类型的索引(从 0 开始)

将第一个输入文件的第二个音频拷贝到 out.mp3

```bash
$ ffmpeg -i input.mp4 -map 0:a:1 -c copy out.mp3
```

将第一个输入文件的视频流和第二个输入文件的音频流拷贝到 out.mp4

```bash
$ ffmpeg -i i1.mp4 -i i2.mp4 -map 0:v -map 0:a -c copy out.mp4
```

#### 反向 -map 命令
<!--rehype:wrap-class=col-span-2-->

反向的 map 命令（在 map 命令的参数前加负号）。例如，`-map -0:a:0`，忽略第一个文件中的第一个音频流。
<!--rehype:className=wrap-text -->

### 切换容器(转换类型)

将容器从 `MKV` 更改为 `MP4`

```bash
$ ffmpeg -i file.mkv -acodec copy -vcodec copy file.mp4
```
<!--rehype:className=wrap-text -->

要将视频从 `.mov` 更改为 `.mp4`

```bash
$ ffmpeg -i in.mov out.mp4
```

### 音视频同步
<!--rehype:wrap-class=row-span-2-->

将音频延迟 3 秒

```bash
$ ffmpeg -i input.mov -itsoffset 3 -i input.mov -map 0:v -map 1:a -codec:a copy -codec:v copy output.mov
```
<!--rehype:className=wrap-text -->

将视频延迟 3 秒(即将音频提前 3 秒)

```bash
$ ffmpeg -i input.mov -itsoffset 3 -i input.mov -map 1:v -map 0:a -codec:a copy -codec:v copy output.mov
```
<!--rehype:className=wrap-text -->

### 图片中的视频

```bash
$ ffmpeg -f image2 -i image%d.jpg video.mp4
```
<!--rehype:className=wrap-text -->

多个编号的图像 image1.jpg、image2.jpg... 像这样从它们创建一个视频

### 将视频拆分为图像

```bash
$ ffmpeg -i video.mp4 image%d.jpg
```

### 录屏
<!--rehype:wrap-class=col-span-2 row-span-2-->

#### 查找所有可用设备

```bash
$ ffmpeg -f avfoundation -list_devices true -i ""
```
<!--rehype:className=wrap-text -->

<span style="color:red">一定要选择好设备，根据设备进行配置。</sapn>

#### windows 下录屏

```bash
$ ffmpeg -hide_banner -loglevel error -stats -f gdigrab -framerate 60 \
-offset_x 0 -offset_y 0 -video_size 1920x1080 -draw_mouse 1 -i deskop \
-c:v libx264 -r 60 -preset ultrafast -pix_fmt yuv420p -y screen_record.mp4
```

#### mac 下录屏

```bash
$ ffmpeg -f avfoundation -i 1:0 -preset ultrafast out.mkv
```

### 合并音频与图片

合并多个音频，自定义背景图片，生成视频音乐

```bash
# mylist.txt >>>
file '1.mp3'
file '2.mp3'
file '3.mp3'

# OBS: 46500 = 25:50 minutes * 60 * 30fps
# echo "00:25:50" | awk -F: '{ print (($1 * 3600) + ($2 * 60) + $3) * 30 }'
$ ffmpeg -y -loop 1 -i cover.jpg -f concat -i mylist.txt -c:v libx264 -r 30 -pix_fmt yuv420p -vframes 46500 -c:a aac -b:a 192k -strict experimental -shortest output.mp4
```
<!--rehype:className=wrap-text -->

### 转换为 Gif
<!--rehype:wrap-class=col-span-2 row-span-3-->

```bash
$ ffmpeg -ss 2 -t 28 -i input.mp4 -vf "fps=10,scale=1080:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif
```
<!--rehype:className=wrap-text -->

上面有关更多信息，请参阅 [StackOverflow 问题](https://superuser.com/a/556031)

```bash
# 转换为 GIF
$ ffmpeg -i input.mov output.gif
# 从 GIF 转换
$ ffmpeg -i input.gif output.mov
# 在非 GIF 格式之间转换
$ ffmpeg -i input.mov -codec:v copy -codec:a copy output.mp4
```

### 转换为灰度

```bash
$ ffmpeg -y -i inFile -flags gray outFile
```

### 字幕格式转换

```bash
# srt -> ass
$ ffmpeg -i subtitle.srt subtitle.ass
# ass -> vtt
$ ffmpeg -i subtitle.ass subtitle.vtt
```

srt、ass、vtt 等格式之间可以相互转换

<!--rehype:className=wrap-text -->

### 字幕
<!--rehype:wrap-class=col-span-2 row-span-2-->

将字幕写入视频

```bash
$ ffmpeg -i input.mov -filter:v 'subtitles=subtitles.srt' -codec:a copy output.mov
```

将字幕写入视频，具有自定义字幕样式

```bash
$ ffmpeg -i input.mov -filter:v "subtitles=subtitles.srt:force_style='FontName=Menlo Bold,Fontsize=18'" -codec:a copy output.mov
```
<!--rehype:className=wrap-text -->

### 制造 1 分钟的音频噪音

```bash
$ ffmpeg -ar 48000 -t 60 -f s16le -acodec pcm_s16le -i /dev/u­random -ab 64K -f mp2 -acodec mp2 -y noise.mp2
```
<!--rehype:className=wrap-text -->

### 从视频中提取图像

```bash
$ ffmpeg -i foo.avi -r 1 -s WxH -f image2 outFil­e%0­3d.png
```
<!--rehype:className=wrap-text -->

### 音量
<!--rehype:wrap-class=col-span-2 row-span-2-->

将音量减半

```bash
$ ffmpeg -i input.mov -codec:v copy -filter:a 'volume=0.5' output.mov
```

音量加倍

```bash
$ ffmpeg -i input.mov -codec:v copy -filter:a 'volume=2' output.mov
```

### 将图像文件转换为其他格式

```bash
$ ffmpeg -i foo012­2.png foo.tiff 
```

pgm, ppm, pam, pgmyuv, jpeg, gif, png, tiff, sgi

### 将图像转换为 AVI 文件

```bash
$ ffmpeg -f image2 -i foo-%0­3d.jpeg -r 12 -s WxH foo.avi
```
<!--rehype:className=wrap-text -->

### 将 WAV 文件转换为 MP3

```bash
$ ffmpeg -i source­_so­ng.wav -vn -ar 44100 -ac 2 -ab 192 -f mp3 final_­son­g.mp3
```
<!--rehype:className=wrap-text -->

### 从视频中提取音频，将其转码为 MP3

```bash
$ ffmpeg -i source.avi -vn -ar 44100 -ac 2 -ab 192 -f mp3 sound.mp3
```
<!--rehype:className=wrap-text -->

### 将 .avi 转换为 .flv

```bash
$ ffmpeg -i source.avi -ab 56 -ar 44100 -b 200 -r 15 -s 320x240 -f flv output.flv
```
<!--rehype:className=wrap-text -->

### 将图片附加到 mp3

```bash
$ ffmpeg -i input.mp3 -i cover.png -c copy -metad­ata:s:v title=­"­Album cover" -metad­ata:s:v commen­t="Cover (Front­)" out.mp3
```
<!--rehype:className=wrap-text -->

### 将视频与声音文件混合

```bash
$ ffmpeg -i song.wav -i source­_vi­deo.avi outvid­eo.mpg
```
<!--rehype:className=wrap-text -->

### 编写带有 ID3v2.3 页眉和 ID3v1 页脚的 mp3

```bash
$ ffmpeg -i inFile -id3v2­_ve­rsion 3 -write­_id3v1 1 outFil­e.mp3
```
<!--rehype:className=wrap-text -->

### 连接输入文件

```bash
$ cat inFile1 inFile2 | ffmpeg -f mpeg -i - -vcodec copy -acodec copy outFil­e.mpg
```
<!--rehype:className=wrap-text -->

### 使用比特率和 mp3 音频的编解码器对剪辑进行编码

```bash
$ ffmpeg -i clip.avi -vcodec libxvid -b 800000 -acodec libmp3lame -ab 128 new-cl­ip.avi
```
<!--rehype:className=wrap-text -->

### 将音频流与来自不同文件的视频流合并

```bash
$ ffmpeg -i audioS.mp4 -i videoS.mp4 -c copy -map 0:a -map 1:v outFil­e.mp4
```
<!--rehype:className=wrap-text -->

### 合并视频

<!--rehype:wrap-class=col-span-3 row-span-3-->

合并相同规格(解码/分辨率/帧率)视频

```bash
# mylist.txt >>>
file '1.mp4'
file '2.mp4'
file '3.mp4'

# 这些文件是相对路径，如使用绝对路径需要添加 `-safe 0` 参数
$ ffmpeg -f concat -i mylist.txt -c copy output.mp4
```
<!--rehype:className=wrap-text -->

合并当前目录下所有视频

```bash
$ ffmpeg -f concat -safe 0 -i <(for f in ./*.mp4; do echo "file '$PWD/$f'"; done) -c copy output.mp4
```
<!--rehype:className=wrap-text -->

合并不同规格视频，保证视频不变形

```bash
$ ffmpeg -i 1.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts tmp1.ts
$ ffmpeg -i 2.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts tmp2.ts
$ ffmpeg -i 3.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts tmp3.ts

$ ffmpeg -threads 2 -i "concat:tmp1.ts|tmp2.ts|tmp3.ts"  -vf "scale=720:1080:force_original_aspect_ratio=decrease,pad=720:1080:(ow-iw)/2:(oh-ih)/2" -pix_fmt yuvj420p -shortest -y output.mp4
```
<!--rehype:className=wrap-text -->

合并不同解码视频

```bash
$ ffmpeg -i input1.mp4 -i input2.webm -i input3.mov \
-filter_complex "[0:v:0][0:a:0][1:v:0][1:a:0][2:v:0][2:a:0]concat=n=3:v=1:a=1[outv][outa]" \
-map "[outv]" -map "[outa]" output.mkv
```
<!--rehype:className=wrap-text -->

合并视频并重新编码音频

```bash
$ ffmpeg -f concat -i mylist.txt -c:v copy -c:a flac -strict -2 output.mp4
```
<!--rehype:className=wrap-text -->

视频过滤器
---
<!--rehype:body-class=cols-2-->

### 格式

如果一个 fliter 有多个参数，需要使用 `,` 分隔

```bash
$ ffmpeg -i test.avi -c:v libx264 -vf "scale=1024:-1,transpose=1,crop=iw/3:ih/3" output.mp4
```

### 缩放
<!--rehype:wrap-class=row-span-2-->

```bash
$ ffmpeg -i input.mp4 -vf "scale=640:480" out.mp4
# -1 → 指根据另一个参数帮我们推断
$ ffmpeg -i input.mp4 -vf "scale=720:-1" out.mp4
# 宽度和高度
ffmpeg -i input.mp4 -vf "scale=w=800:h=600" output.mp4
# in_w\in_h 输入尺寸
ffmpeg -i input.mkv -vf "scale=w=1/2*in_w:h=1/2*in_h" output.mkv
```
<!--rehype:className=wrap-text -->

### 裁剪
<!--rehype:wrap-class=row-span-2-->

从左上角开始，复制 `x=0px` `y=0px` 的相应窗口来创建 `1280x720` 大小的输出视频

```bash
ffmpeg -i input.mp4 -vf "crop=w=1280:h=720:x=0:y=0" output.mp4
```

裁剪到宽度 360，高度 640，从坐标 (10, 20) 开始

```bash
$ ffmpeg -i input.mov -vf 'crop=360:640:10:20' output.mov
```
<!--rehype:className=wrap-text -->

### 去除水印

设置一个矩形覆盖区域 x=10:y=10:w=120:h=45

```bash
# show=1 为可选参数，设置显示边框，方便调试用的
ffmpeg -i 1.mp4 -b:v 548k -vf delogo=x=10:y=10:w=120:h=45:show=1 output.mp4
```
<!--rehype:className=wrap-text -->

### 创建缩略图

在 10 秒时创建一个缩略图

```bash
$ ffmpeg -ss 10 -i <input file> -vframes 1 -vcodec png -an thumb.png
```
<!--rehype:className=wrap-text -->

例如，要每 `n` 秒创建一次缩略图，请使用 `-vf fps=1/n`

```bash
$ ffmpeg -i <input file> -vf fps=1/60 thumbnails/thumb%03d.png
```
<!--rehype:className=wrap-text -->

### 添加水印

在视频左上方 20,20 的位置插入 logo.png 图片

```bash
# -b:v 548k 可选参数，设置视频比特率，默认 200k 最好设置与原视频一致
ffmpeg -i 1.mp4 -acodec copy -b:v 548k -vf "movie=logo.png[watermark];[in][watermark]overlay=20:20" output.mp4
```
<!--rehype:className=wrap-text -->

### 视频旋转

```bash
# 顺时针旋转 90
$ ffmpeg -i input.avi -vf "rotate=90*PI/180" out.mp4 
# 顺时针旋转 180，翻转 90
$ ffmpeg -i input.mp4 -vf "rotate=PI" out.mp4
```

### 更改视频播放速度

```bash
# 加速 2 倍
$ ffmpeg -i input.mkv -vf "setpts=0.5*PTS" output.mkv 
# 减速 2 倍
$ ffmpeg -i input.mp4 -vf "setpts=2*PTS" output.mp4
```

### 添加背景音乐

```bash
# -t 10 文件时长，单位为秒，建议取值原始视频总时长
$ ffmpeg -i 1.mp4 -i test.mp3 \
  -filter_complex "[1:a]aloop=loop=-1:size=2e+09[out];[out][0:a]amix" \
  -t 10 out.mp4
```

音频过滤器
---
<!--rehype:body-class=cols-2-->

### 调节音量

```bash
# 增大音量
$ ffmpeg -i test.mp4 -af "volumn=1.5" out.mp4
```

### 更改音频速度
<!--rehype:wrap-class=row-span-2-->

```bash
$ ffmpeg -i input.wav -af "atempo=0.75" output.wav 
# 加速 4 倍
$ ffmpeg -i input.mp3 -af "atempo=2.0,atempo=2.0" ouutput.mp3
```

`atempo` 它只接受 `0.5`(半速) 到 `2` (倍速)之间的值。为了越过这个限制，你可以链式使用这个过滤器

### 统一视频的音量

```bash
$ ffmpeg -i test.mp4 -af "loudnorm=I=-5:LRA=1" out.mp4
```

### 重新映射通道数

```bash
# 使左右耳的声音同时出现
$ ffmpeg -i input.mp3 -af "channelmap=1-0|1-1" output.mp3
```

流处理
---
<!--rehype:body-class=cols-2-->

### 拉流

```bash
# 拉取rtmp流并存储到本地
$ ffmpeg -i "rtsp://127.0.0.1/test" test.mp4
```

### 推流

```bash
# 推送test.mp4到远程
$ ffmpeg -re -i test.mp4 -f flv rtmp://127.0.0.1/test
```

### 转发
<!--rehype:wrap-class=col-span-2-->

```bash
# 拉取流并转发
$ ffmpeg -i "rtsp://127.0.0.1/test" -f mpegts -codec:v mpeg1video http://127.0.0.1/demo
```

另见
---

- [FFmpeg 官网地址](https://ffmpeg.org/) _(ffmpeg.org)_
- [FFmpeg Cheat Sheet](https://lzone.de/cheat-sheet/ffmpeg) _(lzone.de)_
- [FFmpeg Cheat Sheet](https://devhints.io/ffmpeg) _(devhints.io)_
- [FFmpeg Cheat Sheet](https://github.com/yuanqing/ffmpeg-cheatsheet) _(github.com)_
- [FFmpeg Cheat Sheet](https://cheatography.com/thetartankilt/cheat-sheets/ffmpeg/) _(cheatography.com)_
