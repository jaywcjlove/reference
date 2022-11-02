FFmpeg 备忘清单
===

本备忘清单是 [FFmpeg](https://ffmpeg.org/) 中常见视频处理操作的备忘清单

参数参考
---

### 常用开关

```bash
-codecs   # 列出编解码器
-c:v      # 视频编解码器(-vcodec)-'copy'复制流
-c:a      # 音频编解码器(-acodec)
-fs SIZE  # 限制文件大小（字节）
```

### 音频

```bash
-aq QUALITY  # 音频质量（特定于编解码器）
-ar 44100    # 音频采样率 (Hz)
-ac 1        # 音频通道（1=单声道，2=立体声）
-an          # 没有音频
-vol N       # 音量（256=正常）
```

### 比特率

```bash
-b:v 1M      # 视频比特率（1M = 1Mbit/s）
-b:a 1M      # 音频比特率
```

#### 视频

```bash
-aspect RATIO    # 纵横比（4:3、16:9 或 1.25）
-r RATE          # 每秒帧率
-s WIDTHxHEIGHT  # 帧大小
-vn              # 没有视频
```

视频编辑
---
<!--rehype:body-class=cols-2-->

### 裁剪
<!--rehype:wrap-class=row-span-2-->

```bash
$ ffmpeg -i <input> -filter:v "crop=640:480:100:25" <output>
```
<!--rehype:className=wrap-text -->

通过从输入视频中复制偏移 `x=100px` `y=25px` 的相应窗口来创建 `640x480` 大小的输出视频

```bash
# 裁剪到宽度 360，高度 640
$ ffmpeg -i input.mov -filter:v 'crop=360:640:0:0' -codec:a copy output.mov
```
<!--rehype:className=wrap-text -->

裁剪到宽度 360，高度 640，从坐标 (10, 20) 开始

```bash
$ ffmpeg -i input.mov -filter:v 'crop=360:640:10:20' -codec:a copy output.mov
```
<!--rehype:className=wrap-text -->

### 缩放

```bash
$ ffmpeg -i <输入> -vf scale=640:480 <输出>
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

将输入文件的帧速率（仅对原始格式有效）强制为 1 fps，将输出文件的帧速率强制为 24 fps

### 剪切视频部分
<!--rehype:wrap-class=col-span-2-->

```bash
$ ffmpeg -i <input> -ss 00:01:45 -t 00:02:35 -vcodec copy -acodec copy <output>
$ ffmpeg -ss 00:00:30 -i orginalfile.mpg -t 00:00:05 -vcodec copy -acodec copy newfile.mpg
# 从 4.5 秒开始的 5 秒长的视频
$ ffmpeg -i in.mp4 -ss 4.5 -t 5 out.mp4
```
<!--rehype:className=wrap-text -->

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

### 放慢视频速度

```bash
$ ffmpeg -i in.mp4 -filter:v "setpts=4.0*PTS" out.mp4
```

使用过滤器减慢视频。 此示例将视频减慢四倍

### 缩放到特定宽度

```bash
$ ffmpeg -i in.mp4 -filter:v scale="538:trunc(ow/a/2)*2" -c:a copy out.mp4
```

给定所需的视频宽度，例如 538 像素，您可以使用以下方法将视频调整为该宽度，同时保持宽高比

重新包装
---

### 提取音频流

```bash
$ ffmpeg -i file.mp4 -vn -acodec copy output.aac 
```
<!--rehype:className=wrap-text -->

将`-vn`（无视频）与 `-acodec copy` 结合起来。请注意，输出文件扩展名必须与输入文件中的音频编解码器匹配，`-acodec copy` 才能工作。

### 创建缩略图
<!--rehype:wrap-class=row-span-2-->

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

### 切换容器(转换类型)
<!--rehype:wrap-class=row-span-2-->

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

将视频延迟 3 秒（即将音频提前 3 秒）

```bash
$ ffmpeg -i input.mov -itsoffset 3 -i input.mov -map 1:v -map 0:a -codec:a copy -codec:v copy output.mov
```
<!--rehype:className=wrap-text -->


### 图片中的视频

如果您有多个编号的图像 image1.jpg、image2.jpg... 像这样从它们创建一个视频

```bash
$ ffmpeg -f image2 -i image%d.jpg video.mp4
```
<!--rehype:className=wrap-text -->

### 将视频拆分为图像

```bash
$ ffmpeg -i video.mp4 image%d.jpg
```

### 转换为 Gif
<!--rehype:wrap-class=col-span-3-->

```bash
$ ffmpeg -ss 2 -t 28 -i input.mp4 \
    -vf "fps=10,scale=1080:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
    -loop 0 output.gif
```
<!--rehype:className=wrap-text -->

有关更多信息，请参阅 [StackOverflow 问题](https://superuser.com/a/556031)

另见
---

- [FFmpeg 官网地址](https://ffmpeg.org/) _(ffmpeg.org)_
- [FFmpeg Cheat Sheet](https://lzone.de/cheat-sheet/ffmpeg) _(lzone.de)_
- [FFmpeg Cheat Sheet](https://devhints.io/ffmpeg) _(devhints.io)_