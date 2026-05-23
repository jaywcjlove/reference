Google 搜索
===

这份速查表汇总了 Google 高级搜索运算符。

快速开始
---
<!--rehype:body-class=cols-2-->

### Google 高级搜索运算符
<!--rehype:wrap-class=row-span-2-->

| Operator    | Description                                                                                                   | Category   |
| ----------- | ------------------------------------------------------------------------------------------------------------- | ---------- |
| `""`        | 搜索特定短语，精确匹配。单词级别匹配可避免同义词替换。                                                                 | 基础, 邮件  |
| `OR`/`AND`  | 布尔搜索。Google 默认词间为 AND；若要使用 OR/AND 必须大写。                                                          | 基础, 邮件  |
| `\`         | 实现 OR 逻辑。                                                                                                 | 基础       |
| `()`        | 对运算符分组，控制搜索逻辑顺序。                                                                              | 基础, 邮件  |
| `-`         | 从结果中排除某个词。                                                                                          | 基础, 邮件  |
| `*`         | 通配符，可匹配任意词或短语。                                                                                   | 基础       |
| `#..#`      | 这里 `#` 表示数字，用于查找数字区间。                                                                           | 基础       |
| `$`         | 搜索美元金额。                                                                                                 | 基础       |
| `€`         | 搜索欧元金额。                                                                                                 | 基础       |
| `in`        | 用于单位换算搜索（货币、单位或度量）。                                                                          | 基础       |
| `~`         | 前缀，包含同义词（可能已废弃）。                                                                                | 基础       |
| `+`         | 前缀，强制单个短语精确匹配。                                                                                    | 基础, 邮件  |
| `AROUND(X)` | 夹在两个词之间，`X` 表示两词之间允许的最大间隔词数。例如 `AROUND(4)` 表示两个关键词需在 4 个词范围内出现。      | 高级       |
| `_`         | 用于自动补全的通配符。                                                                                         | 高级       |
<!--rehype:className=left-align wrap-text-->

### 按 URL 搜索

| Operator    | Description                                                                                 | Category |
| ----------- | --------------------------------------------------------------------------------------------- | -------- |
| `inurl:`    | 仅返回 URL 中包含查询关键词的结果。                                                         | 高级     |
| `allinurl:` | 与上面类似，但要求 URL 中包含所有指定词。                                                   | 高级     |
| `blogurl:`  | 查找某个域名下的博客 URL。该运算符曾用于 Google 博客搜索，在普通搜索中也可能返回部分结果。  | 高级     |
| `site:`     | 将结果限定在某一个站点内。                                                                  | 高级     |
| `related:`  | 查找与指定域名相似的网站。                                                                  | 高级     |
<!--rehype:className=left-align-->

### 按日期搜索

| Operator     | Description                                                | Category   |
| ------------ | ---------------------------------------------------------- | ---------- |
| `daterange:` | 返回指定时间范围内的结果（需使用儒略日日期）。               | 高级       |
| `after:`     | 在 Drive 或 Mail 中搜索某日期之后修改的文件或收发的邮件。    | 云端硬盘, 邮件 |
| `before:`    | 在 Drive 或 Mail 中搜索某日期之前修改的文件或收发的邮件。    | 云端硬盘, 邮件 |
| `older:`     | 搜索早于某日期的邮件。                                     | 邮件       |
| `newer:`     | 搜索晚于某日期的邮件。                                     | 邮件       |
<!--rehype:className=left-align-->

### 文件搜索

| Operator        | Description                                                 | Category   |
| --------------- | ----------------------------------------------------------- | ---------- |
| `filename:`     | 搜索带有特定类型附件的邮件，或按文件精确名称搜索。             | 邮件       |
| `type:`         | 在 Drive 中按文件类型搜索。                                 | 云端硬盘    |
| `owner:`        | 在 Drive 中按文件或文件夹所有者搜索。                         | 云端硬盘    |
| `to:`           | 在 Drive 中搜索与指定人员共享的文件。                         | 云端硬盘    |
| `title:`        | 在 Drive 中仅按标题关键词搜索文件。                           | 云端硬盘    |
| `source:domain` | 搜索在企业域内向所有人共享的文件或文件夹。                     | 云端硬盘    |
| `filetype:`     | 仅返回与关键词相关的指定文件类型结果。                         | 高级       |
| `ext:`          | 与上面类似，但按扩展名筛选。                                 | 高级       |
| `after:`        | 在 Drive 或 Mail 中搜索某日期之后修改的文件或收发的邮件。     | 云端硬盘, 邮件 |
| `before:`       | 在 Drive 或 Mail 中搜索某日期之前修改的文件或收发的邮件。     | 云端硬盘, 邮件 |
| `is:trashed`    | 在 Drive 回收站中搜索项目。                                   | 云端硬盘    |
<!--rehype:className=left-align-->

### 按页面内容搜索

| Operator       | Description                                               | Category |
| -------------- | --------------------------------------------------------- | -------- |
| `link:`        | 查找链接到目标域名的页面。                                 | 高级     |
| `inanchor:`    | 查找以指定锚文本/短语作为链接文本的页面。该数据采样较重。   | 高级     |
| `allinanchor:` | 查找入站锚文本中包含 `inanchor:` 后所有词项的页面。         | 高级     |
| `intitle:`     | 返回标题中出现搜索词的页面。                               | 高级     |
| `allintitle:`  | 类似 `intitle:`，但要求标题中包含所有词。                 | 高级     |
| `inposttile:`  | 查找文章标题中包含关键词的页面（常用于博客研究）。           | &nbsp;   |
| `intext:`      | 查找页面正文中提及关键词的页面。                            | 高级     |
| `allintext:`   | 类似 `intext:`，但仅返回页面中包含所有指定词的结果。        | 高级     |
<!--rehype:className=left-align-->

### 关键词

| Operator          | Description                                                                                      | Category |
| ----------------- | ------------------------------------------------------------------------------------------------ | -------- |
| `Business`        | 输入如 cafe、restaurant、bar 等，会返回附近相关商家。                                              | 地图     |
| `Petrol/Charging` | 输入 EV charging station near me 或 petrol station near me 会返回附近站点。                       | 地图     |
| `Search`          | 搜索带有 Google Sheets 附件的邮件。                                                               | 邮件     |
| `Search`          | 搜索带有 Google Slides/Presentation 附件的邮件。                                                  | 邮件     |
<!--rehype:className=left-align-->

### 邮件搜索
<!--rehype:wrap-class=row-span-3-->

| Operator           | Description                                                    | Category   |
| ------------------ | -------------------------------------------------------------- | ---------- |
| `+`                | 前缀，强制单个短语精确匹配。                                     | 基础, 邮件  |
| `()`               | 对运算符分组，控制搜索逻辑顺序。                                 | 基础, 邮件  |
| `-`                | 从结果中排除某个词。                                             | 基础, 邮件  |
| `""`               | 搜索特定短语，精确匹配；可避免同义词扩展。                         | 基础, 邮件  |
| `OR`/`AND`         | 布尔搜索。Google 默认词间为 AND；若要使用 OR/AND 必须大写。       | 基础, 邮件  |
| `after:`           | 在 Drive 或 Mail 中搜索某日期之后修改的文件或收发的邮件。         | 云端硬盘, 邮件 |
| `before:`          | 在 Drive 或 Mail 中搜索某日期之前修改的文件或收发的邮件。         | 云端硬盘, 邮件 |
| `is:starred`       | 仅搜索被加星标的项目。                                            | 云端硬盘, 邮件 |
| `from:`            | 在 Gmail 中按发件人搜索。                                         | 邮件       |
| `to:`              | 在 Gmail 中按收件人搜索。                                         | 邮件       |
| `cc:`              | 按抄送收件人搜索邮件。                                            | 邮件       |
| `bcc:`             | 按密送收件人搜索邮件。                                            | 邮件       |
| `older:`           | 搜索早于某日期的邮件。                                            | 邮件       |
| `newer:`           | 搜索晚于某日期的邮件。                                            | 邮件       |
| `Search`           | 搜索带有 Google Sheets 附件的邮件。                                | 邮件       |
| `Search`           | 搜索带有 Google Slides/Presentation 附件的邮件。                   | 邮件       |
| `AROUND`           | 类似普通 Google 搜索，可查找彼此接近出现的关键词。                   | 邮件       |
| `subject:`         | 按主题行关键词搜索。                                              | 邮件       |
| `{}`               | 在邮件搜索中可用作 OR（替代 OR 关键字）。                           | 邮件       |
| `label:`           | 搜索带有指定标签的邮件。                                          | 邮件       |
| `has:attachment`   | 搜索带有附件的邮件。                                              | 邮件       |
| `has:drive`        | 搜索包含 Google Drive 附件的邮件。                                 | 邮件       |
| `has:document`     | 搜索包含 Google Docs 附件的邮件。                                  | 邮件       |
| `has:youtube`      | 搜索包含 YouTube 视频的邮件。                                      | 邮件       |
| `list:`            | 搜索来自特定邮件列表的所有邮件。                                    | 邮件       |
| `in:anywhere`      | 在所有文件夹中搜索（含垃圾邮件和回收站）。                           | 邮件       |
| `is:important`     | 搜索被标记为重要的邮件。                                           | 邮件       |
| `label:important`  | 与 `is:important` 相同。                                          | 邮件       |
| `is:snoozed`       | 搜索被稍后提醒（Snooze）的邮件。                                     | 邮件       |
| `is:unread`        | 搜索未读邮件。                                                    | 邮件       |
| `is:read`          | 仅搜索已读邮件。                                                  | 邮件       |
| `has:yellow-star`  | 搜索带黄色星标图标的邮件。                                          | 邮件       |
| `has:blue-info`    | 搜索带蓝色信息图标的邮件。                                          | 邮件       |
| `is:chat`          | 搜索来自聊天的消息。                                              | 邮件       |
| `deliveredto:`     | 按投递到的邮箱地址搜索邮件。                                        | 邮件       |
| `category:`        | 按分类搜索邮件。冒号后接分类名，例如 `category:primary`。            | 邮件       |
| `size:`            | 搜索大于某个字节大小的邮件。                                        | 邮件       |
| `larger:`          | 搜索大于某个字节大小的邮件。                                        | 邮件       |
| `smaller:`         | 搜索小于某个字节大小的邮件。                                        | 邮件       |
| `has:userlabels`   | 搜索带有自定义用户标签的邮件。                                      | 邮件       |
| `has:nouserlabels` | 搜索没有自定义用户标签的邮件。                                      | 邮件       |
<!--rehype:className=left-align-->

### 其他实用搜索运算符

| Operator    | Description                                                                    | Category |
| ----------- | ------------------------------------------------------------------------------ | -------- |
| `define:`   | 调用 Google 的词典卡片，显示单词或短语的定义。                                    | 高级     |
| `cache:`    | 返回某个已索引网页的最新缓存版本。                                              | 高级     |
| `weather:`  | 显示某地天气的精选摘要。                                                        | 高级     |
| `stocks:`   | 返回指定股票代码的行情信息。                                                    | 高级     |
| `map:`      | 强制显示与查询相关的 Google 地图结果。                                         | 高级     |
| `movie:`    | 查找指定电影的信息（对片名歧义场景尤其有用）。若仍在上映，还可能返回放映时间。     | 高级     |
| `source:`   | 用于 Google 新闻，返回指定新闻来源的结果。                                      | 高级     |
| `loc:`      | 返回特定地点的结果。                                                            | 高级     |
| `location:` | 与上类似，但用于 Google 新闻。                                                  | 高级     |
| `info:`     | 返回与某域名相关的信息（含域名文本页面、站内相似页面、缓存等）。                   | 高级     |
| `near`      | Google 地图中的就近搜索语法，如 book shops near work。                           | 地图     |
<!--rehype:className=left-align-->

## 另请参阅

- [Google Search Operators Cheat Sheet](https://static.semrush.com/blog/uploads/files/39/12/39121580a18160d3587274faed6323e2.pdf)
  _(static.semrush.com)_
