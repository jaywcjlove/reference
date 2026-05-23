Excel 函数备忘清单
===

这是 Excel 按类别（例如逻辑函数或文本函数）列出所有 Excel 函数。

Excel 函数
---
<!--rehype:body-class=cols-2-->

### 10 个特色函数

| 函数 | 说明 |
| --- | --- |
| [SUM](https://support.microsoft.com/zh-cn/office/sum-%E5%87%BD%E6%95%B0-043e1c7d-7726-4e80-8f32-07b23e057f89) | 此函数用于对单元格中的值求和。 |
| [IF](https://support.microsoft.com/zh-cn/office/if-%E5%87%BD%E6%95%B0-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2) | 此函数用于在条件为真时返回一个值，条件为假时返回另一个值。 |
| [SUMIFS](https://support.microsoft.com/zh-cn/office/sumifs-%E5%87%BD%E6%95%B0-c9e748f5-7ea7-455d-9406-611cebce642b) | 如果需要在满足多个条件的区域中添加单元格，请使用此函数。 |
| [XLOOKUP](https://support.microsoft.com/zh-cn/office/xlookup-%E5%87%BD%E6%95%B0-b7fd680e-6d10-43e6-84f9-88eae8bf5929) | 需要搜索区域或数组，并返回与其找到的第一个匹配项对应的项时，请使用此函数。如果不存在匹配项，则 XLOOKUP 可返回最接近（近似值）的匹配项。 |
| [COUNTIFS](https://support.microsoft.com/zh-cn/office/countifs-%E5%87%BD%E6%95%B0-dda3dc6e-f74e-4aee-88bc-aa8c2a866842) | 使用此函数可计算区域中满足多个条件的单元格数。 |
| [COUNT](https://support.microsoft.com/zh-cn/office/count-%E5%87%BD%E6%95%B0-a59cd7fc-b623-4d93-87a4-d23bf411294c) | 使用此函数可计算参数列表中的数字数。可以使用 [COUNTA](https://support.microsoft.com/zh-cn/office/counta-%E5%87%BD%E6%95%B0-7dc98875-d5c1-46f1-9a82-53f3219e2509) 计算参数列表中的值数。 |
| [LET](https://support.microsoft.com/zh-cn/office/let-%E5%87%BD%E6%95%B0-34842dd8-b92b-4d3f-b325-b8b8f9908999) | 使用此函数可向计算结果分配名称。 |
| [FILTER](https://support.microsoft.com/zh-cn/office/filter-%E5%87%BD%E6%95%B0-f4f7cb66-82eb-4767-8f7c-4877ad80c759) | 使用此函数可以根据定义的条件筛选一系列数据。 |
| [UNIQUE](https://support.microsoft.com/zh-cn/office/unique-%E5%87%BD%E6%95%B0-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e) | 使用此函数可返回列表或区域中唯一值的列表。 |
| [TEXTBEFORE](https://support.microsoft.com/zh-cn/office/textbefore-%E5%87%BD%E6%95%B0-d099c28a-dba8-448e-ac6c-f086d0fa1b29) | 使用此函数可返回出现在给定字符或字符串之前的文本。可以使用 [TEXTAFTER](https://support.microsoft.com/zh-cn/office/textafter-%E5%87%BD%E6%95%B0-c8db2546-5b51-416a-9690-c7e6722e90b4) 返回给定字符或字符串之后出现的文本。 |
<!--rehype:className=style-list-arrow squarefill-->

### 兼容性函数
<!--rehype:wrap-class=row-span-3-->

| 函数 | 说明 |
| --- | --- |
| [BETADIST](https://support.microsoft.com/zh-cn/office/betadist-%E5%87%BD%E6%95%B0-49f1b9a9-a5da-470f-8077-5f1730b5fd47) | 返回 beta 累积分布函数 |
| [BETAINV](https://support.microsoft.com/zh-cn/office/betainv-%E5%87%BD%E6%95%B0-8b914ade-b902-43c1-ac9c-c05c54f10d6c) | 返回指定 beta 分布的累积分布函数的反函数 |
| [BINOMDIST](https://support.microsoft.com/zh-cn/office/binomdist-%E5%87%BD%E6%95%B0-506a663e-c4ca-428d-b9a8-05583d68789c) | 返回一元二项式分布的概率 |
| [CHIDIST](https://support.microsoft.com/zh-cn/office/chidist-%E5%87%BD%E6%95%B0-c90d0fbc-5b56-4f5f-ab57-34af1bf6897e) | 返回 $\chi^2$ 分布的单尾概率 |
| [CHIINV](https://support.microsoft.com/zh-cn/office/chiinv-%E5%87%BD%E6%95%B0-cfbea3f6-6e4f-40c9-a87f-20472e0512af) | 返回 $\chi^2$ 分布的单尾概率的反函数 |
| [CHITEST](https://support.microsoft.com/zh-cn/office/chitest-%E5%87%BD%E6%95%B0-981ff871-b694-4134-848e-38ec704577ac) | 返回独立性检验值 |
| [CONCATENATE](https://support.microsoft.com/zh-cn/office/concatenate-%E5%87%BD%E6%95%B0-8f8ae884-2ca8-4f7a-b093-75d702bea31d) | 将 2 个或多个文本字符串联接成 1 个字符串 |
| [CONFIDENCE](https://support.microsoft.com/zh-cn/office/confidence-%E5%87%BD%E6%95%B0-75ccc007-f77c-4343-bc14-673642091ad6) | 返回总体平均值的置信区间 |
| [COVAR](https://support.microsoft.com/zh-cn/office/covar-%E5%87%BD%E6%95%B0-50479552-2c03-4daf-bd71-a5ab88b2db03) | 返回协方差（成对偏差乘积的平均值） |
| [CRITBINOM](https://support.microsoft.com/zh-cn/office/critbinom-%E5%87%BD%E6%95%B0-eb6b871d-796b-4d21-b69b-e4350d5f407b) | 返回使累积二项式分布小于或等于临界值的最小值 |
| [EXPONDIST](https://support.microsoft.com/zh-cn/office/expondist-%E5%87%BD%E6%95%B0-68ab45fd-cd6d-4887-9770-9357eb8ee06a) | 返回指数分布 |
| [FDIST](https://support.microsoft.com/zh-cn/office/fdist-%E5%87%BD%E6%95%B0-ecf76fba-b3f1-4e7d-a57e-6a5b7460b786) | 返回 F 概率分布 |
| [FINV](https://support.microsoft.com/zh-cn/office/finv-%E5%87%BD%E6%95%B0-4d46c97c-c368-4852-bc15-41e8e31140b1) | 返回 F 概率分布的反函数 |
| [FLOOR](https://support.microsoft.com/zh-cn/office/floor-%E5%87%BD%E6%95%B0-14bb497c-24f2-4e04-b327-b0b4de5a8886) | 向绝对值减小的方向舍入数字 |
| [FORECAST](https://support.microsoft.com/zh-cn/office/forecast-%E5%92%8C-forecast-linear-%E5%87%BD%E6%95%B0-50ca49c9-7b40-4892-94e4-7ad38bbeda99) | 根据现有值计算或预测未来值。 |
| [FTEST](https://support.microsoft.com/zh-cn/office/ftest-%E5%87%BD%E6%95%B0-4c9e1202-53fe-428c-a737-976f6fc3f9fd) | 返回 F 检验的结果 |
| [GAMMADIST](https://support.microsoft.com/zh-cn/office/gammadist-%E5%87%BD%E6%95%B0-7327c94d-0f05-4511-83df-1dd7ed23e19e) | 返回 $\gamma$ 分布 |
| [GAMMAINV](https://support.microsoft.com/zh-cn/office/gammainv-%E5%87%BD%E6%95%B0-06393558-37ab-47d0-aa63-432f99e7916d) | 返回 $\gamma$ 累积分布函数的反函数 |
| [HYPGEOMDIST](https://support.microsoft.com/zh-cn/office/hypgeomdist-%E5%87%BD%E6%95%B0-23e37961-2871-4195-9629-d0b2c108a12e) | 返回超几何分布 |
| [LOGINV](https://support.microsoft.com/zh-cn/office/loginv-%E5%87%BD%E6%95%B0-0bd7631a-2725-482b-afb4-de23df77acfe) | 返回对数累积分布函数的反函数 |
| [LOGNORMDIST](https://support.microsoft.com/zh-cn/office/lognormdist-%E5%87%BD%E6%95%B0-f8d194cb-9ee3-4034-8c75-1bdb3884100b) | 返回对数累积分布函数 |
| [MODE](https://support.microsoft.com/zh-cn/office/mode-%E5%87%BD%E6%95%B0-e45192ce-9122-4980-82ed-4bdc34973120) | 返回在数据集内出现次数最多的值 |
| [NEGBINOMDIST](https://support.microsoft.com/zh-cn/office/negbinomdist-%E5%87%BD%E6%95%B0-f59b0a37-bae2-408d-b115-a315609ba714) | 返回负二项式分布 |
| [NORMDIST](https://support.microsoft.com/zh-cn/office/normdist-%E5%87%BD%E6%95%B0-126db625-c53e-4591-9a22-c9ff422d6d58) | 返回正态累积分布 |
| [NORMINV](https://support.microsoft.com/zh-cn/office/norminv-%E5%87%BD%E6%95%B0-87981ab8-2de0-4cb0-b1aa-e21d4cb879b8) | 返回正态累积分布的反函数 |
| [NORMSDIST](https://support.microsoft.com/zh-cn/office/normsdist-%E5%87%BD%E6%95%B0-463369ea-0345-445d-802a-4ff0d6ce7cac) | 返回标准正态累积分布 |
| [NORMSINV](https://support.microsoft.com/zh-cn/office/normsinv-%E5%87%BD%E6%95%B0-8d1bce66-8e4d-4f3b-967c-30eed61f019d) | 返回标准正态累积分布函数的反函数 |
| [PERCENTILE](https://support.microsoft.com/zh-cn/office/percentile-%E5%87%BD%E6%95%B0-91b43a53-543c-4708-93de-d626debdddca) | 返回区域中数值的第 $k$ 个百分点的值 |
| [PERCENTRANK](https://support.microsoft.com/zh-cn/office/percentrank-%E5%87%BD%E6%95%B0-f1b5836c-9619-4847-9fc9-080ec9024442) | 返回数据集中值的百分比排位 |
| [POISSON](https://support.microsoft.com/zh-cn/office/poisson-%E5%87%BD%E6%95%B0-d81f7294-9d7c-4f75-bc23-80aa8624173a) | 返回泊松分布 |
| [QUARTILE](https://support.microsoft.com/zh-cn/office/quartile-%E5%87%BD%E6%95%B0-93cf8f62-60cd-4fdb-8a92-8451041e1a2a) | 返回一组数据的四分位点 |
| [RANK](https://support.microsoft.com/zh-cn/office/rank-%E5%87%BD%E6%95%B0-6a2fc49d-1831-4a03-9d8c-c279cf99f723) | 返回一列数字的数字排位 |
| [STDEV](https://support.microsoft.com/zh-cn/office/stdev-%E5%87%BD%E6%95%B0-51fecaaa-231e-4bbb-9230-33650a72c9b0) | 基于样本估算标准偏差 |
| [STDEVP](https://support.microsoft.com/zh-cn/office/stdevp-%E5%87%BD%E6%95%B0-1f7c1c88-1bec-4422-8242-e9f7dc8bb195) | 基于整个样本总体计算标准偏差 |
| [TDIST](https://support.microsoft.com/zh-cn/office/tdist-%E5%87%BD%E6%95%B0-630a7695-4021-4853-9468-4a1f9dcdd192) | 返回学生 t-分布 |
| [TINV](https://support.microsoft.com/zh-cn/office/tinv-%E5%87%BD%E6%95%B0-a7c85b9d-90f5-41fe-9ca5-1cd2f3e1ed7c) | 返回学生 t-分布的反函数 |
| [TTEST](https://support.microsoft.com/zh-cn/office/ttest-%E5%87%BD%E6%95%B0-1696ffc1-4811-40fd-9d13-a0eaad83c7ae) | 返回与学生 t-检验相关的概率 |
| [VAR](https://support.microsoft.com/zh-cn/office/var-%E5%87%BD%E6%95%B0-1f2b7ab2-954d-4e17-ba2c-9e58b15a7da2) | 基于样本估算方差 |
| [VARP](https://support.microsoft.com/zh-cn/office/varp-%E5%87%BD%E6%95%B0-26a541c4-ecee-464d-a731-bd4c575b1a6b) | 计算基于样本总体的方差 |
| [WEIBULL](https://support.microsoft.com/zh-cn/office/weibull-%E5%87%BD%E6%95%B0-b83dc2c6-260b-4754-bef2-633196f6fdcc) | 返回 Weibull 分布 |
| [ZTEST](https://support.microsoft.com/zh-cn/office/ztest-%E5%87%BD%E6%95%B0-8f33be8a-6bd6-4ecc-8e3a-d9a4420c4a6a) | 返回 z 检验的单尾概率值 |
<!--rehype:className=left-align-->

在较新版本的 Excel 中，这些函数已被替换为更准确、名称更贴切的新函数。虽然保留了向后兼容功能，但建议逐步改用新函数。

### 多维数据集函数

| 函数 | 说明 |
| --- | --- |
| [CUBEKPIMEMBER](https://support.microsoft.com/zh-cn/office/cubekpimember-%E5%87%BD%E6%95%B0-744608bf-2c62-42cd-b67a-a56109f4b03b) | 返回重要性能指示器 (KPI) 属性，并在单元格中显示 KPI 名称。 KPI 是一种用于监控单位绩效的可计量度量值，如每月总利润或季度员工调整。 |
| [CUBEMEMBER](https://support.microsoft.com/zh-cn/office/cubemember-%E5%87%BD%E6%95%B0-0f6a15b9-2c18-4819-ae89-e1b5c8b398ad) | 返回多维数据集中的成员或元组。 用于验证多维数据集内是否存在成员或元组。 |
| [CUBEMEMBERPROPERTY](https://support.microsoft.com/zh-cn/office/cubememberproperty-%E5%87%BD%E6%95%B0-001e57d6-b35a-49e5-abcd-05ff599e8951) | 返回多维数据集中成员属性的值。 用于验证多维数据集内是否存在某个成员名并返回此成员的指定属性。 |
| [CUBERANKEDMEMBER](https://support.microsoft.com/zh-cn/office/cuberankedmember-%E5%87%BD%E6%95%B0-07efecde-e669-4075-b4bf-6b40df2dc4b3) | 返回集合中的第 n 个或排在一定名次的成员。 用来返回集合中的一个或多个元素，如业绩最好的销售人员或前 10 名的学生。 |
| [CUBESET](https://support.microsoft.com/zh-cn/office/cubeset-%E5%87%BD%E6%95%B0-5b2146bd-62d6-4d04-9d8f-670e993ee1d9) | 定义成员或元组的计算集。方法是向服务器上的多维数据集发送一个集合表达式，此表达式创建集合，并随后将该集合返回到 Microsoft Excel。 |
| [CUBESETCOUNT](https://support.microsoft.com/zh-cn/office/cubesetcount-%E5%87%BD%E6%95%B0-c4c2a438-c1ff-4061-80fe-982f2d705286) | 返回集合中的项目数。 |
| [CUBEVALUE](https://support.microsoft.com/zh-cn/office/cubevalue-%E5%87%BD%E6%95%B0-8733da24-26d1-4e34-9b3a-84a8f00dcbe0) | 从多维数据集中返回汇总值。 |
<!--rehype:className=style-list-arrow squarefill-->

### 数据库函数

| 函数 | 说明 |
| --- | --- |
| [DAVERAGE](https://support.microsoft.com/zh-cn/office/daverage-%E5%87%BD%E6%95%B0-a6a2d5ac-4b4b-48cd-a1d8-7b37834e5aee) | 返回所选数据库条目的平均值 |
| [DCOUNT](https://support.microsoft.com/zh-cn/office/dcount-%E5%87%BD%E6%95%B0-c1fc7b93-fb0d-4d8d-97db-8d5f076eaeb1) | 计算数据库中包含数字的单元格的数量 |
| [DCOUNTA](https://support.microsoft.com/zh-cn/office/dcounta-%E5%87%BD%E6%95%B0-00232a6d-5a66-4a01-a25b-c1653fda1244) | 计算数据库中非空单元格的数量 |
| [DGET](https://support.microsoft.com/zh-cn/office/dget-%E5%87%BD%E6%95%B0-455568bf-4eef-45f7-90f0-ec250d00892e) | 从数据库提取符合指定条件的单个记录 |
| [DMAX](https://support.microsoft.com/zh-cn/office/dmax-%E5%87%BD%E6%95%B0-f4e8209d-8958-4c3d-a1ee-6351665d41c2) | 返回所选数据库条目的最大值 |
| [DMIN](https://support.microsoft.com/zh-cn/office/dmin-%E5%87%BD%E6%95%B0-4ae6f1d9-1f26-40f1-a783-6dc3680192a3) | 返回所选数据库条目的最小值 |
| [DPRODUCT](https://support.microsoft.com/zh-cn/office/dproduct-%E5%87%BD%E6%95%B0-4f96b13e-d49c-47a7-b769-22f6d017cb31) | 将数据库中符合条件的记录的特定字段中的值相乘 |
| [DSTDEV](https://support.microsoft.com/zh-cn/office/dstdev-%E5%87%BD%E6%95%B0-026b8c73-616d-4b5e-b072-241871c4ab96) | 基于所选数据库条目的样本估算标准偏差 |
| [DSTDEVP](https://support.microsoft.com/zh-cn/office/dstdevp-%E5%87%BD%E6%95%B0-04b78995-da03-4813-bbd9-d74fd0f5d94b) | 基于所选数据库条目的样本总体计算标准偏差 |
| [DSUM](https://support.microsoft.com/zh-cn/office/dsum-%E5%87%BD%E6%95%B0-53181285-0c4b-4f5a-aaa3-529a322be41b) | 对数据库中符合条件的记录的字段列中的数字求和 |
| [DVAR](https://support.microsoft.com/zh-cn/office/dvar-%E5%87%BD%E6%95%B0-d6747ca9-99c7-48bb-996e-9d7af00f3ed1) | 基于所选数据库条目的样本估算方差 |
| [DVARP](https://support.microsoft.com/zh-cn/office/dvarp-%E5%87%BD%E6%95%B0-eb0ba387-9cb7-45c8-81e9-0394912502fc) | 基于所选数据库条目的样本总体计算方差 |
<!--rehype:className=left-align-->

### 日期和时间函数

| 函数 | 说明 |
| --- | --- |
| [DATE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/date-%25E5%2587%25BD%25E6%2595%25B0-e36c0c8c-4104-4efc-a011-7a662fb76c14) | 返回特定日期的序列号 |
| [DATEDIF](https://support.microsoft.com/zh-cn/office/datedif-%E5%87%BD%E6%95%B0-25dba1a4-2812-480b-84dd-8b32a451b35c) | 计算两个日期之间的天数、月数或年数。此函数在用于计算年龄的公式中很有用。 |
| [DATEVALUE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/datevalue-%25E5%2587%25BD%25E6%2595%25B0-df8b0047-614a-4ffc-a643-cd8b369c5485) | 将文本格式的日期转换为序列号 |
| [DAY](https://support.microsoft.com/zh-cn/office/day-%E5%87%BD%E6%95%B0-8a7d1cbb-6c7d-4ba1-8aea-25c134d03101) | 将序列号转换为月份日期 |
| [DAYS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/days-%25E5%2587%25BD%25E6%2595%25B0-57727a5f-7be0-4ef7-99b5-995bb67e15c8) (2013) | 返回两个日期之间的天数 |
| [DAYS360](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/days360-%25E5%2587%25BD%25E6%2595%25B0-b9a50974-a469-4eb3-9653-83979bfb445a) | 以一年 360 天为基准计算两个日期间的天数 |
| [EDATE](https://support.microsoft.com/zh-cn/office/edate-%E5%87%BD%E6%95%B0-3c920eb2-6e66-44e7-a1f5-753ae47ee4f5) | 返回用于表示开始日期之前或之后月数的日期的序列号 |
| [EOMONTH](https://support.microsoft.com/zh-cn/office/eomonth-%E5%87%BD%E6%95%B0-7314ffa1-2bc9-4005-9d66-f49db127d628) | 返回指定月数之前或之后的月份的最后一天的序列号 |
| [HOUR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/hour-%25E5%2587%25BD%25E6%2595%25B0-a3579d7b-de17-4a31-a069-9b1572d520a5) | 将序列号转换为小时 |
| [ISOWEEKNUM](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/isoweeknum-%25E5%2587%25BD%25E6%2595%25B0-1c2d0eb3-75a0-4ab8-9e17-e4963ef9d448) (2013) | 返回给定日期在全年中的 ISO 周数 |
| [MINUTE](https://support.microsoft.com/zh-cn/office/minute-%E5%87%BD%E6%95%B0-af728df0-05c4-4b07-9eed-a84801a60589) | 将序列号转换为分钟 |
| [MONTH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/month-%25E5%2587%25BD%25E6%2595%25B0-579a2881-199b-48bc-a879-ac241522746b) | 将序列号转换为月 |
| [NETWORKDAYS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/networkdays-%25E5%2587%25BD%25E6%2595%25B0-48e717bf-a7a3-495f-955e-bec1616fe135) | 返回两个日期间的完整工作日的天数 |
| [NETWORKDAYS.INTL](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/networkdays-intl-%25E5%2587%25BD%25E6%2595%25B0-71a64939-a7b2-4497-af2e-859431e327fd) (2010) | 返回两个日期之间的完整工作日的天数（使用参数指明周末有几天并指明是哪几天） |
| [NOW](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/now-%25E5%2587%25BD%25E6%2595%25B0-03316d57-004d-4f30-a2e4-44c3839902ec) | 返回当前日期和时间的序列号 |
| [SECOND](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/second-%25E5%2587%25BD%25E6%2595%25B0-740d9905-17f4-4199-81bc-a7abec977051) | 将序列号转换为秒 |
| [TIME](https://support.microsoft.com/zh-cn/office/time-%E5%87%BD%E6%95%B0-9a5aff99-8f7d-4611-845e-747d0b8d5457) | 返回特定时间的序列号 |
| [TIMEVALUE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/timevalue-%25E5%2587%25BD%25E6%2595%25B0-0b615c12-33d8-4431-ad3d-f3ddee6b1fef) | 将文本格式的时间转换为序列号 |
| [TODAY](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/today-%25E5%2587%25BD%25E6%2595%25B0-5eb307c4-a610-4151-90a6-be8d36f696cd) | 返回今天日期的序列号 |
| [WEEKDAY](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/weekday-%25E5%2587%25BD%25E6%2595%25B0-60e44483-2ed1-4322-a568-ad1695a628e4) | 将序列号转换为星期日期 |
| [WEEKNUM](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/weeknum-%25E5%2587%25BD%25E6%2595%25B0-e5c43a03-b4ab-44c1-b0d1-9a135117aab6) | 将序列号转换为代表该星期为一年中第几周的数字 |
| [WORKDAY](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/workday-%25E5%2587%25BD%25E6%2595%25B0-f764a5b7-05fc-4491-83c3-aa60dff4de7c) | 返回指定的若干个工作日之前或之后的日期的序列号 |
| [WORKDAY.INTL](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/workday-intl-%25E5%2587%25BD%25E6%2595%25B0-a378391c-907d-411f-a26a-ab4d7bfa7aea) (2010) | 返回日期在指定的工作日天数之前或之后的序列号（使用参数指明周末有几天并指明是哪几天） |
| [YEAR](https://support.microsoft.com/zh-cn/office/year-%E5%87%BD%E6%95%B0-c64f017a-1354-490d-981f-578e8ec8d3b9) | 将序列号转换为年 |
| [YEARFRAC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/yearfrac-%25E5%2587%25BD%25E6%2595%25B0-3844141f-366b-48c5-8994-b864d97760ab) | 返回代表 start_date 和 end_date 之间整天天数的年分数 |
<!--rehype:className=left-align-->

### 工程函数
<!--rehype:wrap-class=row-span-2-->

| 函数 | 说明 |
| --- | --- |
| [BESSELI](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/besseli-%25E5%2587%25BD%25E6%2595%25B0-8d33855c-6a4d-4da0-bfac-cd787edb69be) | 返回修正的贝赛耳函数 $I_n(x)$ |
| [BESSELJ](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/besselj-%25E5%2587%25BD%25E6%2595%25B0-839cb181-48de-4087-9d52-bd961cbafb49) | 返回贝赛耳函数 $J_n(x)$ |
| [BESSELK](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/besselk-%25E5%2587%25BD%25E6%2595%25B0-606d11bc-06d3-4444-a65c-a6a1ce064aee) | 返回修正的贝赛耳函数 $K_n(x)$ |
| [BESSELY](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/bessely-%25E5%2587%25BD%25E6%2595%25B0-f3a21248-0ee9-4009-99c0-a7445293433e) | 返回贝赛耳函数 $Y_n(x)$ |
| [BIN2DEC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/bin2dec-%25E5%2587%25BD%25E6%2595%25B0-0b0b3030-10f5-442b-98ca-a2b1bf386c64) | 将二进制数转换为十进制数 |
| [BIN2HEX](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/bin2hex-%25E5%2587%25BD%25E6%2595%25B0-1522836e-f33f-4f62-abef-95b9d8d19efc) | 将二进制数转换为十六进制数 |
| [BIN2OCT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/bin2oct-%25E5%2587%25BD%25E6%2595%25B0-0a4e01ba-05c3-4999-a312-35d1b1fcac76) | 将二进制数转换为八进制数 |
| [BITAND](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/bitand-%25E5%2587%25BD%25E6%2595%25B0-8a2be3d7-91c3-4b48-951d-b87c16cda845) (2013) | 返回两个数的“按位与” |
| [BITLSHIFT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/bitlshift-%25E5%2587%25BD%25E6%2595%25B0-c55bb7e2-7935-4326-90c7-ee24f202456c) (2013) | 返回左移 shift_amount 位的计算值接收数 |
| [BITOR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/bitor-%25E5%2587%25BD%25E6%2595%25B0-f6ead7c8-5b98-4c9e-9053-834791dcae3a) (2013) | 返回两个数的“按位或” |
| [BITRSHIFT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/bitrshift-%25E5%2587%25BD%25E6%2595%25B0-274d699b-f402-4ff1-932a-fa1367a45536) (2013) | 返回右移 shift_amount 位的计算值接收数 |
| [BITXOR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/bitxor-%25E5%2587%25BD%25E6%2595%25B0-c81306a1-03f9-4def-acf4-f2babcfacda9) (2013) | 返回两个数的按位“异或” |
| [COMPLEX](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/complex-%25E5%2587%25BD%25E6%2595%25B0-f0b8f3a9-51cc-4d6d-86fb-3a9931aacab4) | 将实系数和虚系数转换为复数 |
| [CONVERT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/convert-%25E5%2587%25BD%25E6%2595%25B0-d785bef1-808e-4aac-bdcd-666c810f9af7) | 将数字从一种度量系统转换为另一种度量系统 |
| [DEC2BIN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/dec2bin-%25E5%2587%25BD%25E6%2595%25B0-0a63e670-ed7b-4d5a-b709-00ef5a15aee4) | 将十进制数转换为二进制数 |
| [DEC2HEX](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/dec2hex-%25E5%2587%25BD%25E6%2595%25B0-43302be8-5287-4389-973a-142deccd42d6) | 将十进制数转换为十六进制数 |
| [DEC2OCT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/dec2oct-%25E5%2587%25BD%25E6%2595%25B0-b94a3ab0-3036-40eb-adae-b4ee94391ea9) | 将十进制数转换为八进制数 |
| [DELTA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/delta-%25E5%2587%25BD%25E6%2595%25B0-2d7b5c97-a4c2-4b41-a16d-8bdc4b1b965c) | 检验两个值是否相等 |
| [ERF](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/erf-%25E5%2587%25BD%25E6%2595%25B0-c53c7e7b-a429-451f-9503-48ed38e76be1) | 返回误差函数 |
| [ERF.PRECISE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/erf-precise-%25E5%2587%25BD%25E6%2595%25B0-1d89856f-683a-4933-9fb2-ac8ec53aa6a7) (2010) | 返回误差函数 |
| [ERFC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/erfc-%25E5%2587%25BD%25E6%2595%25B0-736e9034-734d-44a1-b8ae-72365bf3f8e0) | 返回互补误差函数 |
| [ERFC.PRECISE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/erfc-precise-%25E5%2587%25BD%25E6%2595%25B0-7da61519-ae50-4869-95a7-96a6dfb8d003) (2010) | 返回从 x 到无穷大积分的互补 ERF 函数 |
| [GESTEP](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/gestep-%25E5%2587%25BD%25E6%2595%25B0-f1ee7272-bfa4-4696-a197-0ec99f1fa0ca) | 检验数字是否大于阈值 |
| [HEX2BIN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/hex2bin-%25E5%2587%25BD%25E6%2595%25B0-a13aafaa-57ff-49d4-b009-cb01b05a5024) | 将十六进制数转换为二进制数 |
| [HEX2DEC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/hex2dec-%25E5%2587%25BD%25E6%2595%25B0-c5850e8e-898a-4d34-a16f-7e8c3b7a863b) | 将十六进制数转换为十进制数 |
| [HEX2OCT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/hex2oct-%25E5%2587%25BD%25E6%2595%25B0-1c0da8b3-34e8-4b3d-abf4-5dcb6dafcbc5) | 将十六进制数转换为八进制数 |
| [IMABS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imabs-%25E5%2587%25BD%25E6%2595%25B0-6f02896d-3575-4fc1-b0db-da55959da64f) | 返回复数的绝对值（模数） |
| [IMAGINARY](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imaginary-%25E5%2587%25BD%25E6%2595%25B0-dd5952f1-5b94-40da-ab35-6aa004d67352) | 返回复数的虚系数 |
| [IMARGUMENT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imargument-%25E5%2587%25BD%25E6%2595%25B0-cedce597-90c7-4ab9-a29d-400a40237fa4) | 返回参数 $\theta$，即以弧度表示的角 |
| [IMCONJUGATE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imconjugate-%25E5%2587%25BD%25E6%2595%25B0-449e37fc-36c4-4b57-9d7a-cb7676648792) | 返回复数的共轭复数 |
| [IMCOS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imcos-%25E5%2587%25BD%25E6%2595%25B0-dad3402e-9da3-4bf5-b9b5-68f7f9035ef2) | 返回复数的余弦 |
| [IMCOSH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imcosh-%25E5%2587%25BD%25E6%2595%25B0-e3276610-dca0-4be6-8806-25869ee38b30) (2013) | 返回复数的双曲余弦值 |
| [IMCOT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imcot-%25E5%2587%25BD%25E6%2595%25B0-fa9fc87d-8fb0-4573-b26a-9f5cf81e59bc) (2013) | 返回复数的余切值 |
| [IMCSC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imcsc-%25E5%2587%25BD%25E6%2595%25B0-dc3f3458-971c-4389-9800-47401df42129) (2013) | 返回复数的余割值 |
| [IMCSCH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imcsch-%25E5%2587%25BD%25E6%2595%25B0-b06297ee-3ab0-4960-9118-2fe901c0c2db) (2013) | 返回复数的双曲余割值 |
| [IMDIV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imdiv-%25E5%2587%25BD%25E6%2595%25B0-dc1e0892-04ca-43eb-8e99-f4728590c8b9) | 返回两个复数的商 |
| [IMEXP](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imexp-%25E5%2587%25BD%25E6%2595%25B0-d8a4369e-55c9-4674-8bcf-bb6368da20ff) | 返回复数的指数 |
| [IMLN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imln-%25E5%2587%25BD%25E6%2595%25B0-3ecd3035-2420-42cf-9060-f463273e8fa9) | 返回复数的自然对数 |
| [IMLOG10](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imlog10-%25E5%2587%25BD%25E6%2595%25B0-bf8b0f81-79e0-40e8-97cb-2e11e3b3a6fc) | 返回复数的以 10 为底的对数 |
| [IMLOG2](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imlog2-%25E5%2587%25BD%25E6%2595%25B0-4614ff73-7e45-4afb-bc6b-c744f4541bf6) | 返回复数的以 2 为底的对数 |
| [IMPOWER](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/impower-%25E5%2587%25BD%25E6%2595%25B0-36a5da2e-13c5-4303-9118-62283da70fb6) | 返回复数的整数幂 |
| [IMPRODUCT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/improduct-%25E5%2587%25BD%25E6%2595%25B0-20098dfc-e092-4217-bfd8-11f879659b9e) | 返回从 2 到 255 的复数的乘积 |
| [IMREAL](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imreal-%25E5%2587%25BD%25E6%2595%25B0-e69f809a-4c28-4efc-8e07-6b45d2925b42) | 返回复数的实系数 |
| [IMSEC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imsec-%25E5%2587%25BD%25E6%2595%25B0-f703e39c-70e2-45e0-9426-53896504a742) (2013) | 返回复数的正割值 |
| [IMSECH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imsech-%25E5%2587%25BD%25E6%2595%25B0-fedfbda7-950a-4712-ba22-823793df6581) (2013) | 返回复数的双曲正割值 |
| [IMSIN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imsin-%25E5%2587%25BD%25E6%2595%25B0-19efb569-8088-4c8d-8be9-e09da418feac) | 返回复数的正弦 |
| [IMSINH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imsinh-%25E5%2587%25BD%25E6%2595%25B0-8dc04364-5858-45e8-bdc1-74404fc3fcf0) (2013) | 返回复数的双曲正弦值 |
| [IMSQRT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imsqrt-%25E5%2587%25BD%25E6%2595%25B0-aa82da69-583b-4836-8cf9-c3b28b6d8b67) | 返回复数的平方根 |
| [IMSUB](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imsub-%25E5%2587%25BD%25E6%2595%25B0-c659695d-79e0-478a-a4ea-c0fa168122d2) | 返回两个复数的差 |
| [IMSUM](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imsum-%25E5%2587%25BD%25E6%2595%25B0-6d45fcbc-4c86-4f7f-85f8-de9756bcf3af) | 返回多个复数的和 |
| [IMTAN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/imtan-%25E5%2587%25BD%25E6%2595%25B0-5a3d463d-4299-4674-8db6-e9dfcb777b73) (2013) | 返回复数的正切值 |
| [OCT2BIN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/oct2bin-%25E5%2587%25BD%25E6%2595%25B0-7f28943e-a894-436d-9b76-b601675bf283) | 将八进制数转换为二进制数 |
| [OCT2DEC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/oct2dec-%25E5%2587%25BD%25E6%2595%25B0-67dfb4f3-1ee2-4b24-9b2f-981880e61d8b) | 将八进制数转换为十进制数 |
| [OCT2HEX](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/oct2hex-%25E5%2587%25BD%25E6%2595%25B0-449e75c6-9da7-4cb2-b43a-6ee6ed7927aa) | 将八进制数转换为十六进制数 |
<!--rehype:className=left-align-->

### 财务函数
<!--rehype:wrap-class=row-span-2-->

| 函数 | 说明 |
| --- | --- |
| [ACCRINT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/accrint-%25E5%2587%25BD%25E6%2595%25B0-fe45d089-6f69-4031-9a45-6b9fdf1d05d0) | 返回定期支付利息的债券的应计利息 |
| [ACCRINTM](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/accrintm-%25E5%2587%25BD%25E6%2595%25B0-f62f01f9-5f13-41a3-905b-4c40aa62f796) | 返回在到期日支付利息的债券的应计利息 |
| [AMORDEGRC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/amordegrc-%25E5%2587%25BD%25E6%2595%25B0-a100f503-cb39-4402-9a3d-3b95133604f5) | 使用折旧系数返回每个记帐期的折旧值 |
| [AMORLINC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/amorlinc-%25E5%2587%25BD%25E6%2595%25B0-7d56e07a-9833-4f93-baf6-8349b1a87152) | 返回每个记帐期的折旧值 |
| [COUPDAYBS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/coupdaybs-%25E5%2587%25BD%25E6%2595%25B0-5abf7d3d-691a-4f9e-bbcf-5401306b6fca) | 返回从票息期开始到结算日之间的天数 |
| [COUPDAYS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/coupdays-%25E5%2587%25BD%25E6%2595%25B0-cc64380b-31d5-41e9-9049-d37cc0b9aa45) | 返回包含结算日的票息期天数 |
| [COUPDAYSNC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/coupdaysnc-%25E5%2587%25BD%25E6%2595%25B0-ea961537-97ef-4b01-a113-90c74fb1c53e) | 返回从结算日到下一票息支付日之间的天数 |
| [COUPNCD](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/coupncd-%25E5%2587%25BD%25E6%2595%25B0-410fb716-e274-4b5a-9bf4-118fbda0c58e) | 返回结算日之后的下一个票息支付日 |
| [COUPNUM](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/coupnum-%25E5%2587%25BD%25E6%2595%25B0-44979bc5-46aa-4303-9d97-b6480ed5f865) | 返回结算日与到期日之间可支付的票息数 |
| [COUPPCD](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/couppcd-%25E5%2587%25BD%25E6%2595%25B0-df15340f-ae52-4fe0-94a1-e12480e60938) | 返回结算日之前的上一票息支付日 |
| [CUMIPMT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/cumipmt-%25E5%2587%25BD%25E6%2595%25B0-17ed758a-6242-4ee5-8d2a-e331bc5a98e4) | 返回两个付款期之间累积支付的利息 |
| [CUMPRINC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/cumprinc-%25E5%2587%25BD%25E6%2595%25B0-94a4594d-f278-4999-9f51-2cc31595e1e4) | 返回两个付款期之间为贷款累积支付的本金 |
| [DB](https://support.microsoft.com/zh-cn/office/db-%E5%87%BD%E6%95%B0-354e7d28-5f93-4ff1-8a52-eb4ee549d9d7) | 使用固定余额递减法，返回一笔资产在给定期间内的折旧值 |
| [DDB](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/ddb-%25E5%2587%25BD%25E6%2595%25B0-515afb99-43c1-4113-b354-2d9dcafd83f9) | 使用双倍余额递减法或其他指定方法，返回一笔资产在给定期间内的折旧值 |
| [DISC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/disc-%25E5%2587%25BD%25E6%2595%25B0-71fce9fb-3f1d-43be-b3aa-96da03ed1da0) | 返回债券的贴现率 |
| [DOLLARDE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/dollarde-%25E5%2587%25BD%25E6%2595%25B0-db085452-a669-4af9-a316-ab326d8717b5) | 将以分数表示的价格转换为以小数表示的价格 |
| [DOLLARFR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/dollarfr-%25E5%2587%25BD%25E6%2595%25B0-083cd26c-3e7b-400e-a9b1-ec1ac1a6fde2) | 将以小数表示的价格转换为以分数表示的价格 |
| [DURATION](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/duration-%25E5%2587%25BD%25E6%2595%25B0-b2fc8656-65be-40cf-b2f1-62d4ed141b5f) | 返回定期支付利息的债券的每年期限 |
| [EFFECT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/effect-%25E5%2587%25BD%25E6%2595%25B0-9160244b-6b2a-464a-95ee-6fb2aa564b19) | 返回年有效利率 |
| [FV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/fv-%25E5%2587%25BD%25E6%2595%25B0-2eef9f44-a9e4-43c3-b324-0c1b7683a326) | 返回一笔投资的未来值 |
| [FVSCHEDULE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/fvschedule-%25E5%2587%25BD%25E6%2595%25B0-119fc719-afbe-4f7d-bc2b-e1b30ea425f4) | 返回应用一系列复利率计算的初始本金的未来值 |
| [INTRATE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/intrate-%25E5%2587%25BD%25E6%2595%25B0-78ac2377-aab6-474d-9653-b09b457e3f8a) | 返回完全投资型债券的利率 |
| [IPMT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/ipmt-%25E5%2587%25BD%25E6%2595%25B0-5cce0ad6-8402-4be9-9d38-94db7a5be5b9) | 返回一笔投资在给定期间内支付的利息 |
| [IRR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/irr-%25E5%2587%25BD%25E6%2595%25B0-64be624e-c6c4-4af5-b5e2-5f3292643fa3) | 返回一系列现金流的内部收益率 |
| [ISPMT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/ispmt-%25E5%2587%25BD%25E6%2595%25B0-fa58abd3-8cf9-4d91-8999-859346342b04) | 计算特定投资期内要支付的利息 |
| [MDURATION](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/mduration-%25E5%2587%25BD%25E6%2595%25B0-b378627c-9aa2-4c62-a662-de9ad9190203) | 返回假设面值为 ￥100 的有价证券的 Macauley 修正期限 |
| [MIRR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/mirr-%25E5%2587%25BD%25E6%2595%25B0-b020f038-74d3-4911-ab20-a9102b40d990) | 返回正和负现金流以不同利率进行计算的内部收益率 |
| [NOMINAL](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/nominal-%25E5%2587%25BD%25E6%2595%25B0-cc967ce3-3130-49d5-a64b-a4b007534099) | 返回年度的名义利率 |
| [NPER](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/nper-%25E5%2587%25BD%25E6%2595%25B0-240535b5-a7c5-487e-878d-c75ff4ef9ef5) | 返回投资的期数 |
| [NPV](https://support.microsoft.com/zh-cn/office/npv-%E5%87%BD%E6%95%B0-8672cb67-2576-4d07-b67b-ac28acf2a568) | 返回基于一系列定期的现金流和贴现率计算的投资的净现值 |
| [ODDFPRICE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/oddfprice-%25E5%2587%25BD%25E6%2595%25B0-d4d73cf0-adda-40da-9ff7-bd9aa0180016) | 返回每张票面为 ￥100 且第一期为奇数的债券的现价 |
| [ODDFYIELD](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/oddfyield-%25E5%2587%25BD%25E6%2595%25B0-66bc42f2-f1f4-43ba-8379-bc21557d53db) | 返回第一期为奇数的债券的收益 |
| [ODDLPRICE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/oddlprice-%25E5%2587%25BD%25E6%2595%25B0-fb6577de-06ef-44d9-a058-2780cf7df235) | 返回每张票面为 ￥100 且最后一期为奇数的债券的现价 |
| [ODDLYIELD](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/oddlyield-%25E5%2587%25BD%25E6%2595%25B0-c87281ef-2058-49cd-907f-7576f3d17d05) | 返回最后一期为奇数的债券的收益 |
| [PDURATION](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/pduration-%25E5%2587%25BD%25E6%2595%25B0-44e33460-52a5-4ae2-ad00-ced4dcf45645) (2013) | 返回投资到达指定值所需的期数 |
| [PMT](https://support.microsoft.com/zh-cn/office/pmt-%E5%87%BD%E6%95%B0-0214da64-9a63-4996-bc20-214433fa6441) | 返回年金的定期支付金额 |
| [PPMT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/ppmt-%25E5%2587%25BD%25E6%2595%25B0-c370d638-df5c-4f84-a702-0da21980746c) | 返回一笔投资在给定期间内偿还的本金 |
| [PRICE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/price-%25E5%2587%25BD%25E6%2595%25B0-0ad3594d-20bc-4595-97c4-27574510b1a5) | 返回每张票面为 ￥100 且定期支付利息的债券的现价 |
| [PRICEDISC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/pricedisc-%25E5%2587%25BD%25E6%2595%25B0-d06a0909-bca7-4867-b18f-8f320571031d) | 返回每张票面为 ￥100 的已贴现债券的现价 |
| [PRICEMAT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/pricemat-%25E5%2587%25BD%25E6%2595%25B0-52b314d1-724a-43ae-a1a7-810ee3fdf9b3) | 返回每张票面为 ￥100 且在到期日支付利息的债券的现价 |
| [PV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/pv-%25E5%2587%25BD%25E6%2595%25B0-243d2310-a74d-425c-9d74-2c1318d47451) | 返回投资的现值 |
| [RATE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/rate-%25E5%2587%25BD%25E6%2595%25B0-99d36541-9958-442d-b5b3-ec14e6006947) | 返回年金的各期利率 |
| [RECEIVED](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/received-%25E5%2587%25BD%25E6%2595%25B0-7a3fecba-e0da-423d-b844-01de31814713) | 返回完全投资型债券在到期日收回的金额 |
| [RRI](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/rri-%25E5%2587%25BD%25E6%2595%25B0-94ecac19-ac24-4d94-aafe-aa6053a637f5) (2013) | 返回某项投资增长的等效利率 |
| [SLN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sln-%25E5%2587%25BD%25E6%2595%25B0-cdb04d0d-cd2f-49ee-b2d9-1158c345af87) | 返回固定资产的每期线性折旧费 |
| [SYD](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/syd-%25E5%2587%25BD%25E6%2595%25B0-0e413005-acc3-41e1-b766-4199147ef311) | 返回某项固定资产按年限总和折旧法计算的每期折旧金额 |
| [TBILLEQ](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/tbilleq-%25E5%2587%25BD%25E6%2595%25B0-2abf4140-e1ca-436f-b27a-bd0d66acbc41) | 返回国库券的等价债券收益 |
| [TBILLPRICE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/tbillprice-%25E5%2587%25BD%25E6%2595%25B0-e13e0d11-913a-4da2-9844-139e866ee0cb) | 返回面值 ￥100 的国库券的价格 |
| [TBILLYIELD](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/tbillyield-%25E5%2587%25BD%25E6%2595%25B0-6d331235-95e0-4a26-8728-9d43ec0dfd6b) | 返回国库券的收益率 |
| [VDB](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/vdb-%25E5%2587%25BD%25E6%2595%25B0-cade4e34-3223-4e58-971e-3934384d4fe4) | 使用余额递减法，返回一笔资产在给定期间或部分期间内的折旧值 |
| [XIRR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/xirr-%25E5%2587%25BD%25E6%2595%25B0-de1242ec-6477-445b-b11b-a321dcd398a3) | 返回一组现金流的内部收益率，这些现金流不一定定期发生 |
| [XNPV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/xnpv-%25E5%2587%25BD%25E6%2595%25B0-1b42bba6-37a1-4196-9608-ef402b4d326a) | 返回一组现金流的净现值，这些现金流不一定定期发生 |
| [YIELD](https://support.microsoft.com/zh-cn/office/yield-%E5%87%BD%E6%95%B0-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe) | 返回定期支付利息的债券的收益 |
| [YIELDDISC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/yielddisc-%25E5%2587%25BD%25E6%2595%25B0-a9db95cd-2854-4f83-a725-7e37740bc590) | 返回已贴现债券的年收益；例如，短期国库券 |
| [YIELDMAT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/yieldmat-%25E5%2587%25BD%25E6%2595%25B0-ba7d84e1-75ed-454c-becd-a27be1ad3e01) | 返回在到期日支付利息的债券的年收益 |
<!--rehype:className=left-align-->

### 信息函数

| 函数 | 说明 |
| --- | --- |
| [CELL](https://support.microsoft.com/zh-cn/office/cell-%E5%87%BD%E6%95%B0-51bd39a5-f338-4dbe-a33f-955d67c2b2cf) | 返回有关单元格格式、位置或内容的信息 |
| [ERROR.TYPE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/error-type-%25E5%2587%25BD%25E6%2595%25B0-10950f77-735f-4e26-bdf3-7bd7499dfdb1) | 返回对应于错误类型的数字 |
| [INFO](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/info-%25E5%2587%25BD%25E6%2595%25B0-725f259a-9e4d-4de4-ba90-52562b4e2ec1) | 返回有关当前操作 environment 的信息。注意：此函数在 Excel 网页版 中不可用。 |
| [ISBLANK](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/is%25E5%2587%25BD%25E6%2595%25B0-0f2d7971-6019-40a0-a171-f2d869135665) | 如果值为空，则返回 TRUE |
| [ISERR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/is%25E5%2587%25BD%25E6%2595%25B0-0f2d7971-6019-40a0-a171-f2d869135665) | 如果值为除 #N/A 以外的任何错误值，则返回 TRUE |
| [ISERROR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/is%25E5%2587%25BD%25E6%2595%25B0-0f2d7971-6019-40a0-a171-f2d869135665) | 如果值为任何错误值，则返回 TRUE |
| [ISEVEN](https://support.microsoft.com/zh-cn/office/iseven-%E5%87%BD%E6%95%B0-aa15929a-d77b-4fbb-92f4-2f479af55356) | 如果数字为偶数，则返回 TRUE |
| [ISFORMULA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/isformula-%25E5%2587%25BD%25E6%2595%25B0-e4d1355f-7121-4ef2-801e-3839d986b000) (2013) | 如果有对包含公式的单元格的引用，则返回 TRUE |
| [ISLOGICAL](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/is%25E5%2587%25BD%25E6%2595%25B0-0f2d7971-6019-40a0-a171-f2d869135665) | 如果值为逻辑值，则返回 TRUE |
| [ISNA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/is%25E5%2587%25BD%25E6%2595%25B0-0f2d7971-6019-40a0-a171-f2d869135665) | 如果值为错误值 #N/A，则返回 TRUE |
| [ISNONTEXT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/is%25E5%2587%25BD%25E6%2595%25B0-0f2d7971-6019-40a0-a171-f2d869135665) | 如果值不是文本，则返回 TRUE |
| [ISNUMBER](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/is%25E5%2587%25BD%25E6%2595%25B0-0f2d7971-6019-40a0-a171-f2d869135665) | 如果值为数字，则返回 TRUE |
| [ISODD](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/is%25E5%2587%25BD%25E6%2595%25B0-0f2d7971-6019-40a0-a171-f2d869135665) | 如果数字为奇数，则返回 TRUE |
| [ISOMITTED](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/isomitted-%25E5%2587%25BD%25E6%2595%25B0-831d6f51-9056-4a95-a4f6-860e4982da58) (2024) | 检查 LAMBDA 中是否缺少值，并返回 TRUE 或 FALSE |
| [ISREF](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/is%25E5%2587%25BD%25E6%2595%25B0-0f2d7971-6019-40a0-a171-f2d869135665) | 如果值为引用值，则返回 TRUE |
| [ISTEXT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/is%25E5%2587%25BD%25E6%2595%25B0-0f2d7971-6019-40a0-a171-f2d869135665) | 如果值为文本，则返回 TRUE |
| [N](https://support.microsoft.com/zh-cn/office/n-%E5%87%BD%E6%95%B0-a624cad1-3635-4208-b54a-29733d1278c9) | 返回转换为数字的值 |
| [NA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/na-%25E5%2587%25BD%25E6%2595%25B0-5469c2d1-a90c-4fb5-9ab4-4458ae59db61) | 返回错误值 #N/A |
| [SHEET](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sheet-%25E5%2587%25BD%25E6%2595%25B0-4471bb9f-ee58-4ee9-9229-63320bf669af) (2013) | 返回引用工作表的工作表编号 |
| [SHEETS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sheets-%25E5%2587%25BD%25E6%2595%25B0-7cd28c0b-513c-4268-a2c7-6b1df849999d) (2013) | 返回引用中的工作表数 |
| [STOCKHISTORY](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/stockhistory-%25E5%2587%25BD%25E6%2595%25B0-1ac96c61-ad2f-4d7b-8fbc-90536efb27d1) (Microsoft 365) | 检索有关金融工具的历史数据 |
| [TYPE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/type-%25E5%2587%25BD%25E6%2595%25B0-4566b37c-94c8-4541-ab73-38f7182d77d3) | 返回表示值的数据类型的数字 |
<!--rehype:className=left-align-->

### 逻辑函数

| 函数 | 说明 |
| --- | --- |
| [AND](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/and-%25E5%2587%25BD%25E6%2595%25B0-5f19b2e8-e1df-44be-8bb8-27765624190e) | 如果其所有参数均为 TRUE，则返回 TRUE |
| [BYCOL](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/bycol-%25E5%2587%25BD%25E6%2595%25B0-58463999-7de5-49ee-8f9f-fdd5604402fe) (2024) | 对每一列应用 LAMBDA 并返回结果数组 |
| [BYROW](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/byrow-%25E5%2587%25BD%25E6%2595%25B0-2e04c677-78c8-4e64-a604-7a5bbfd111d4) (2024) | 对每一行应用 LAMBDA 并返回结果数组 |
| [FALSE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/false-%25E5%2587%25BD%25E6%2595%25B0-2d58df54-a1ca-444a-91d1-91008212624a) | 返回逻辑值 FALSE |
| [IF](https://support.microsoft.com/zh-cn/office/if-%E5%87%BD%E6%95%B0-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2) | 指定要执行的逻辑检测 |
| [IFERROR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/iferror-%25E5%2587%25BD%25E6%2595%25B0-c1da2663-71a0-4b83-9127-b74df507721d) | 如果公式的计算结果错误，则返回您指定的值；否则返回公式的结果 |
| [IFNA](https://support.microsoft.com/zh-cn/office/ifna-%E5%87%BD%E6%95%B0-6626c961-a569-42fc-a49d-79b4951fd461) (2013) | 如果该表达式解析为 #N/A，则返回指定值；否则返回该表达式的结果 |
| [IFS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/ifs-%25E5%2587%25BD%25E6%2595%25B0-36329a26-37b2-4d90-ab4d-15494ef539d4) (2019) | 检查是否满足一个或多个条件，且是否返回与第一个 TRUE 条件对应的值。 |
| [LAMBDA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/lambda-%25E5%2587%25BD%25E6%2595%25B0-bd212d27-1cd1-4321-a34a-ccbf007b8b69) (2024) | 创建自定义、可重用的函数，并通过友好名称调用它们 |
| [LET](https://support.microsoft.com/zh-cn/office/let-%E5%87%BD%E6%95%B0-34842dd8-b92b-4d3f-b325-b8b8f9908999) (2021) | 将名称分配给计算结果 |
| [MAKEARRAY](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/makearray-%25E5%2587%25BD%25E6%2595%25B0-b80da5ad-b338-4149-a189-7b3600454f25) (2024) | 通过应用 LAMBDA 返回指定行和列大小的计算数组 |
| [MAP](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/map-%25E5%2587%25BD%25E6%2595%25B0-48006093-fe97-400a-8c35-ae98f988f86f) (2024) | 通过应用 LAMBDA 创建新值，返回通过将数组中每个值映射到新值所形成的数组 |
| [NOT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/not-%25E5%2587%25BD%25E6%2595%25B0-9cfc6011-a05a-40c4-9d10-7e3334d9bcee) | 对其参数的逻辑求反 |
| [OR](https://support.microsoft.com/zh-cn/office/or-%E5%87%BD%E6%95%B0-7d17ad14-8700-4281-b308-00b131e22af0) | 如果任一参数为 TRUE，则返回 TRUE |
| [REDUCE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/reduce-%25E5%2587%25BD%25E6%2595%25B0-42e39945-b4cd-483e-83a4-be0cd0c550fd) (2024) | 通过将 LAMBDA 应用于每个值并在累加器中返回总值，将数组减小为累积值 |
| [SCAN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/scan-%25E5%2587%25BD%25E6%2595%25B0-d58dfd11-9ef9-4ad3-84ef-98ee6da40e57) (2024) | 通过将 LAMBDA 应用于每个值来扫描数组，并返回具有每个中间值的数组 |
| [SWITCH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/switch-%25E5%2587%25BD%25E6%2595%25B0-47fa33c3-48ee-4046-bf0d-6d48c7db3d64) (2016) | 根据值列表计算表达式，并返回与第一个匹配值对应的结果。如果不匹配，则可能返回可选默认值。 |
| [TRUE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/true-%25E5%2587%25BD%25E6%2595%25B0-76cd65d3-2a1f-4c30-a0d2-48bb1f46afbd) | 返回逻辑值 TRUE |
| [XOR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/xor-%25E5%2587%25BD%25E6%2595%25B0-15474b26-3760-4c79-915f-79dfd9d1ae14) (2013) | 返回所有参数的逻辑“异或”值 |
<!--rehype:className=left-align-->

### 查找和引用函数
<!--rehype:wrap-class=row-span-2-->

| 函数 | 说明 |
| --- | --- |
| [ADDRESS](https://support.microsoft.com/zh-cn/office/address-%E5%87%BD%E6%95%B0-d0c26c0d-3991-446b-8de4-ab46431d4f89) | 以文本形式将引用值返回到工作表的单个单元格 |
| [AREAS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/areas-%25E5%2587%25BD%25E6%2595%25B0-9a5b99c4-949e-43bb-a8cd-2d16f7a836be) | 返回引用中涉及的区域个数 |
| [CHOOSE](https://support.microsoft.com/zh-cn/office/choose-%E5%87%BD%E6%95%B0-fc5c184f-cb62-4ec7-a46e-38653b98f5bc) | 从值的列表中选择值 |
| [CHOOSECOLS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/choosecols-%25E5%2587%25BD%25E6%2595%25B0-8c10a015-4758-4a40-a2d7-b92176c39659) (2024) | 返回数组中的指定列 |
| [CHOOSEROWS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/chooserows-%25E5%2587%25BD%25E6%2595%25B0-51cdfe68-dfb0-4a94-81d3-815cd9395ac0) (2024) | 返回数组中的指定行 |
| [COLUMN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/column-%25E5%2587%25BD%25E6%2595%25B0-44e8c754-7711-43ef-98f7-988b7fa347a5) | 返回引用的列号 |
| [COLUMNS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/columns-%25E5%2587%25BD%25E6%2595%25B0-4e8e7b4e-e603-43e8-b177-386a53b74d7f) | 返回引用中包含的列数 |
| [DROP](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/drop-%25E5%2587%25BD%25E6%2595%25B0-1be4c158-a100-479d-bbbb-014f24683867) (2024) | 从数组的开头或结尾排除指定数量的行或列 |
| [EXPAND](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/expand-%25E5%2587%25BD%25E6%2595%25B0-7433fba5-4bd1-4de5-8c17-e9d7c71f813a) (2024) | 将数组展开或填充到指定的行和列维度 |
| [FILTER](https://support.microsoft.com/zh-cn/office/filter-%E5%87%BD%E6%95%B0-f4f7cb66-82eb-4767-8f7c-4877ad80c759) (2021) | FILTER 函数可以基于定义的条件筛选一系列数据。 |
| [FORMULATEXT](https://support.microsoft.com/zh-cn/office/formulatext-%E5%87%BD%E6%95%B0-0a786771-54fd-4ae2-96ee-09cda35439c8) (2013) | 将给定引用的公式返回为文本 |
| [GETPIVOTDATA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/getpivotdata-%25E5%2587%25BD%25E6%2595%25B0-8c083b99-a922-4ca0-af5e-8581159376d3) | 返回存储在数据透视表中的数据 |
| [GROUPBY](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/groupby-%25E5%2587%25BD%25E6%2595%25B0-4299b407-6800-443f-b847-92ccafe301f6) (Microsoft 365) | 帮助用户根据指定的字段对数据进行分组、聚合、排序和筛选 |
| [HLOOKUP](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/hlookup-%25E5%2587%25BD%25E6%2595%25B0-a3034eec-b719-4ba3-bb65-e1ad6629a959) | 查找数组的首行，并返回指定单元格的值 |
| [HSTACK](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/hstack-%25E5%2587%25BD%25E6%2595%25B0-98c4ab76-7cf1-4b0d-9624-83a7a4f5119f) (2024) | 按顺序水平追加数组，以返回更大的数组 |
| [HYPERLINK](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/hyperlink-%25E5%2587%25BD%25E6%2595%25B0-333c7ce6-c5ae-4164-9c47-739e7621db18) | 创建快捷方式或跳转，以打开存储在网络服务器、Intranet 或 Internet 上的文档 |
| [IMAGE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/image-%25E5%2587%25BD%25E6%2595%25B0-4e11119f-b8d8-4c3e-b3ae-d2e8e479c3b1) (2024) | 返回来自给定源的图像 |
| [INDEX](https://support.microsoft.com/zh-cn/office/index-%E5%87%BD%E6%95%B0-a5dcf0dd-996d-40a4-a822-b56b061328bd) | 使用索引从引用或数组中选择值 |
| [INDIRECT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/indirect-%25E5%2587%25BD%25E6%2595%25B0-474b3a3a-8a26-4f44-b491-02b655f2f4f2) | 返回由文本值指定的引用 |
| [LOOKUP](https://support.microsoft.com/zh-cn/office/lookup-%E5%87%BD%E6%95%B0-446d94af-663b-451d-8251-369d5e3864cb) | 在向量或数组中查找值 |
| [MATCH](https://support.microsoft.com/zh-cn/office/match-%E5%87%BD%E6%95%B0-e8dffd45-c762-47d6-bf89-533f4a37673a) | 在引用或数组中查找值 |
| [OFFSET](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/offset-%25E5%2587%25BD%25E6%2595%25B0-c8de19c8-7f97-402e-a9b2-2b2e254c6de2) | 从给定引用中返回引用偏移量 |
| [PIVOTBY](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/pivotby-%25E5%2587%25BD%25E6%2595%25B0-1ce6611f-366b-486a-9f50-f84daacb2a8d) (Microsoft 365) | 帮助用户根据指定的行和列字段对数据进行分组、聚合、排序和筛选 |
| [ROW](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/row-%25E5%2587%25BD%25E6%2595%25B0-3a63574a-7947-4986-9490-c226ab3ce90a) | 返回引用的行号 |
| [ROWS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/rows-%25E5%2587%25BD%25E6%2595%25B0-b592593e-3fc2-47f2-bec1-b4950117560a) | 返回引用中的行数 |
| [RTD](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/rtd-%25E5%2587%25BD%25E6%2595%25B0-996b007d-f78c-408a-9c64-07d11d103543) | 从支持 COM 自动化的程序中检索实时数据 |
| [SORT](https://support.microsoft.com/zh-cn/office/sort-%E5%87%BD%E6%95%B0-22f63bd0-ccc8-492f-953d-c20e8e44b86c) (2021) | 对区域或数组的内容进行排序 |
| [SORTBY](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sortby-%25E5%2587%25BD%25E6%2595%25B0-cd26302a-6397-47e5-9119-a9f9d2ab8771) (2021) | 根据相应区域或数组中的值对区域或数组的内容进行排序 |
| [TAKE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/take-%25E5%2587%25BD%25E6%2595%25B0-25b967d1-1665-4339-be3b-74d9e95fe793) (2024) | 从数组的开头或结尾返回指定数量的连续行或列 |
| [TOCOL](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/tocol-%25E5%2587%25BD%25E6%2595%25B0-228399a9-781a-4d0a-b837-d18482895a9e) (2024) | 返回单列中的数组 |
| [TOROW](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/torow-%25E5%2587%25BD%25E6%2595%25B0-a96d1174-cef9-4cfc-a117-d15999e32412) (2024) | 返回单行中的数组 |
| [TRANSPOSE](https://support.microsoft.com/zh-cn/office/transpose-%E5%87%BD%E6%95%B0-ed039415-ed8a-4a81-93e9-4b6dfac76027) | 返回数组的转置 |
| [TRIMRANGE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/trimrange-%25E5%2587%25BD%25E6%2595%25B0-f703e39c-70e2-45e0-9426-53896504a742) (Microsoft 365) | 从区域或数组的边缘扫描，直到找到非空白单元格（或值），然后排除这些空白行或列 |
| [UNIQUE](https://support.microsoft.com/zh-cn/office/unique-%E5%87%BD%E6%95%B0-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e) (2021) | 返回列表或区域的唯一值列表 |
| [VLOOKUP](https://support.microsoft.com/zh-cn/office/vlookup-%E5%87%BD%E6%95%B0-0bbc8083-26fe-4963-8ab8-93a18ad188a1) | 在数组第一列中查找，然后在行之间移动以返回单元格的值 |
| [VSTACK](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/vstack-%25E5%2587%25BD%25E6%2595%25B0-a4b86897-be0f-48fc-adca-468acfc9d4b9) (2024) | 按顺序垂直追加数组，以返回更大的数组 |
| [WRAPCOLS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/wrapcols-%25E5%2587%25BD%25E6%2595%25B0-d44a1111-b88d-4c3e-b3ae-d118eee9e0b4) (2024) | 在指定数量的元素之后，将按列提供的值的行或列换行 |
| [WRAPROWS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/wraprows-%25E5%2587%25BD%25E6%2595%25B0-7911119f-b8d8-4c3e-b3ae-d118eee9e1b4) (2024) | 在指定数量的元素之后，将按行提供的值的行或列换行 |
| [XLOOKUP](https://support.microsoft.com/zh-cn/office/xlookup-%E5%87%BD%E6%95%B0-b7fd680e-6d10-43e6-84f9-88eae8bf5929) (2021) | 搜索区域或数组，并返回与之找到的第一个匹配项对应的项。如果不存在匹配项，则 XLOOKUP 可返回最接近（近似值）的匹配项。 |
| [XMATCH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/xmatch-%25E5%2587%25BD%25E6%2595%25B0-d9d5952f-5b94-40da-ab35-6aa004d67352) (2021) | 返回项目在数组或单元格区域中的相对位置。 |
<!--rehype:className=left-align-->

### 数学和三角函数
<!--rehype:wrap-class=row-span-3-->

| 函数 | 说明 |
| --- | --- |
| [ABS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/abs-%25E5%2587%25BD%25E6%2595%25B0-6f02896d-3575-4fc1-b0db-da55959da64f) | 返回数字的绝对值 |
| [ACOS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/acos-%25E5%2587%25BD%25E6%2595%25B0-15de73c8-7d97-4508-af39-a3b1e738119a) | 返回数字的反余弦值 |
| [ACOSH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/acosh-%25E5%2587%25BD%25E6%2595%25B0-e3276610-dca0-4be6-8806-25869ee38b30) | 返回数字的反双曲余弦值 |
| [ACOT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/acot-%25E5%2587%25BD%25E6%2595%25B0-dc3f3458-971c-4389-9800-47401df42129) (2013) | 返回数字的反余切值 |
| [ACOTH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/acoth-%25E5%2587%25BD%25E6%2595%25B0-b06297ee-3ab0-4960-9118-2fe901c0c2db) (2013) | 返回数字的双曲反余切值 |
| [AGGREGATE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/aggregate-%25E5%2587%25BD%25E6%2595%25B0-43439e68-a900-414c-972c-2b34e4f33d97) | 返回列表或数据库中的聚合 |
| [ARABIC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/arabic-%25E5%2587%25BD%25E6%2595%25B0-9a8da418-c11d-4403-a4c3-04d23835011c) | 将罗马数字转换为阿拉伯数字 |
| [ASIN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/asin-%25E5%2587%25BD%25E6%2595%25B0-94a369e5-b0d4-4f8a-92d8-c20e8e44b867) | 返回数字的反正弦值 |
| [ASINH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/asinh-%25E5%2587%25BD%25E6%2595%25B0-8dc04364-5858-45e8-bdc1-74404fc3fcf0) | 返回数字的反双曲正弦值 |
| [ATAN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/atan-%25E5%2587%25BD%25E6%2595%25B0-50d3616b-d317-4568-a4d1-81d1999233f1) | 返回数字的反正切值 |
| [ATAN2](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/atan2-%25E5%2587%25BD%25E6%2595%25B0-c04592ab-b9e3-4908-91a9-2602de67db94) | 返回 X 和 Y 坐标的反正切值 |
| [ATANH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/atanh-%25E5%2587%25BD%25E6%2595%25B0-a4369e55-55c9-4674-8bcf-bb6368da20ff) | 返回数字的反双曲正切值 |
| [BASE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/base-%25E5%2587%25BD%25E6%2595%25B0-2ef614e1-a46f-4ac9-ac79-68784b29f9cc) (2013) | 将数字转换为具备给定基数 (base) 的文本表示 |
| [CEILING](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/ceiling-%25E5%2587%25BD%25E6%2595%25B0-0a5cd7c8-7f97-402e-a9b2-2b2e254c6de2) | 将数字舍入为最接近的整数或最接近的指定基数的倍数 |
| [CEILING.MATH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/ceiling-math-%25E5%2587%25BD%25E6%2595%25B0-80f5cd7c-7f97-402e-a9b2-2b2e254c6de2) (2013) | 将数字向上舍入为最接近的整数或最接近的指定基数的倍数 |
| [CEILING.PRECISE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/ceiling-precise-%25E5%2587%25BD%25E6%2595%25B0-faaccd7c-7f97-402e-a9b2-2b2e254c6de2) | 将数字舍入为最接近的整数或最接近的指定基数的倍数。无论该数字的符号如何，该数字都向上舍入。 |
| [COMBIN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/combin-%25E5%2587%25BD%25E6%2595%25B0-12a3f3a9-51cc-4d6d-86fb-3a9931aacab4) | 返回给定数目对象的组合数 |
| [COMBINA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/combina-%25E5%2587%25BD%25E6%2595%25B0-efb569e5-b0d4-4f8a-92d8-c20e8e44b867) (2013) | 返回给定数目对象具有重复项的组合数 |
| [COS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/cos-%25E5%2587%25BD%25E6%2595%25B0-0e7fc87d-8fb0-4573-b26a-9f5cf81e59bc) | 返回数字的余弦值 |
| [COSH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/cosh-%25E5%2587%25BD%25E6%2595%25B0-dad3402e-9da3-4bf5-b9b5-68f7f9035ef2) | 返回数字的双曲余弦值 |
| [COT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/cot-%25E5%2587%25BD%25E6%2595%25B0-041fc87d-8fb0-4573-b26a-9f5cf81e59bc) (2013) | 返回角度的余切值 |
| [COTH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/coth-%25E5%2587%25BD%25E6%2595%25B0-f703e39c-70e2-45e0-9426-53896504a742) (2013) | 返回数字的双曲余切值 |
| [CSC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/csc-%25E5%2587%25BD%25E6%2595%25B0-15474b26-3760-4c79-915f-79dfd9d1ae14) (2013) | 返回角度的余割值 |
| [CSCH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/csch-%25E5%2587%25BD%25E6%2595%25B0-e73c87d1-4403-4afb-bc6b-c744f4541bf6) (2013) | 返回角度的双曲余割值 |
| [DECIMAL](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/decimal-%25E5%2587%25BD%25E6%2595%25B0-ee99147ef311-0e41-4300-b766-4199147ef311) (2013) | 将给定基数内的数的文本表示转换为十进制数 |
| [DEGREES](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/degrees-%25E5%2587%25BD%25E6%2595%25B0-b020f038-74d3-4911-ab20-a9102b40d990) | 将弧度转换为度 |
| [EVEN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/even-%25E5%2587%25BD%25E6%2595%25B0-197b5c97-a4c2-4b41-a16d-8bdc4b1b965c) | 将数字向上舍入到最接近的偶数 |
| [EXP](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/exp-%25E5%2587%25BD%25E6%2595%25B0-c5744f45-4afb-bc6b-c744f4541bf6) | 返回 *e* 的 n 次方 |
| [FACT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/fact-%25E5%2587%25BD%25E6%2595%25B0-a3ecd303-2420-42cf-9060-f463273e8fa9) | 返回数字的阶乘 |
| [FACTDOUBLE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/factdouble-%25E5%2587%25BD%25E6%2595%25B0-e73c87d1-4403-4afb-bc6b-c744f4541bf6) | 返回数字的双倍阶乘 |
| [FLOOR](https://support.microsoft.com/zh-cn/office/floor-%E5%87%BD%E6%95%B0-14bb497c-24f2-4e04-b327-b0b4de5a8886) | 向绝对值减小的方向舍入数字 |
| [FLOOR.MATH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/floor-math-%25E5%2587%25BD%25E6%2595%25B0-c4404fc3-fcf0-45e8-bdc1-74404fc3fcf0) (2013) | 将数字向下舍入为最接近的整数或最接近的指定基数的倍数 |
| [FLOOR.PRECISE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/floor-precise-%25E5%2587%25BD%25E6%2595%25B0-f764a5b7-05fc-4491-83c3-aa60dff4de7c) | 将数字向下舍入为最接近的整数或最接近的指定基数的倍数。无论该数字的符号如何，该数字都向下舍入。 |
| [GCD](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/gcd-%25E5%2587%25BD%25E6%2595%25B0-d11f8796-55c9-4674-8bcf-bb6368da20ff) | 返回最大公约数 |
| [INT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/int-%25E5%2587%25BD%25E6%2595%25B0-a624cad1-3635-4208-b54a-29733d1278c9) | 将数字向下舍入到最接近的整数 |
| [ISO.CEILING](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/iso-ceiling-%25E5%2587%25BD%25E6%2595%25B0-e73c87d1-4403-4afb-bc6b-c744f4541bf6) (2013) | 返回一个数字，该数字向上舍入为最接近的整数或最接近的有效位的倍数 |
| [LCM](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/lcm-%25E5%2587%25BD%25E6%2595%25B0-714ff454-1bf6-4614-bc6b-c744f4541bf6) | 返回最小公倍数 |
| [LET](https://support.microsoft.com/zh-cn/office/let-%E5%87%BD%E6%95%B0-34842dd8-b92b-4d3f-b325-b8b8f9908999) (2021) | 将名称分配给计算结果，以允许将中间计算、值或定义名称存储在公式内 |
| [LN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/ln-%25E5%2587%25BD%25E6%2595%25B0-81d19992-3174-4568-a4d1-81d1999233f1) | 返回数字的自然对数 |
| [LOG](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/log-%25E5%2587%25BD%25E6%2595%25B0-4e8e7b4e-e603-43e8-b177-386a53b74d7f) | 返回数字的以指定底为底的对数 |
| [LOG10](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/log10-%25E5%2587%25BD%25E6%2595%25B0-c4404fc3-fcf0-45e8-bdc1-74404fc3fcf0) | 返回数字的以 10 为底的对数 |
| [MDETERM](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/mdeterm-%25E5%2587%25BD%25E6%2595%25B0-e73c87d1-4403-4afb-bc6b-c744f4541bf6) | 返回数组的矩阵行列式的值 |
| [MINVERSE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/minverse-%25E5%2587%25BD%25E6%2595%25B0-11f87965-9b76-4cb2-b43a-6ee6ed7927aa) | 返回数组的逆矩阵 |
| [MMULT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/mmult-%25E5%2587%25BD%25E6%2595%25B0-40535b5a-7c5f-487e-878d-c75ff4ef9ef5) | 返回两个数组的矩阵乘积 |
| [MOD](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/mod-%25E5%2587%25BD%25E6%2595%25B0-9b6cd7fc-b623-4d93-87a4-d23bf411294c) | 返回除法的余数 |
| [MROUND](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/mround-%25E5%2587%25BD%25E6%2595%25B0-c279cf99-f723-4a03-9d8c-c279cf99f723) | 返回一个舍入到所需倍数的数字 |
| [MULTINOMIAL](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/multinomial-%25E5%2587%25BD%25E6%2595%25B0-ca212d27-1cd1-4321-a34a-ccbf007b8b69) | 返回一组数字的多项式 |
| [MUNIT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/munit-%25E5%2587%25BD%25E6%2595%25B0-c81306a1-03f9-4def-acf4-f2babcfacda9) (2013) | 返回单位矩阵或指定维度 |
| [ODD](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/odd-%25E5%2587%25BD%25E6%2595%25B0-a624cad1-3635-4208-b54a-29733d1278c9) | 将数字向上舍入为最接近的奇数 |
| [PERCENTOF](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/percentof-%25E5%2587%25BD%25E6%2595%25B0-efb569e5-b0d4-4f8a-92d8-c20e8e44b867) (Microsoft 365) | 对子集中的值求和并将其除以所有值 |
| [PI](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/pi-%25E5%2587%25BD%25E6%2595%25B0-26b83458-971c-4389-9800-47401df42129) | 返回 pi 的值 |
| [POWER](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/power-%25E5%2587%25BD%25E6%2595%25B0-d78b0047-614a-4ffc-a643-cd8b369c5485) | 返回数的乘幂 |
| [PRODUCT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/product-%25E5%2587%25BD%25E6%2595%25B0-8e6b7d1d-796b-4d21-b69b-e4350d5f407b) | 将其参数相乘 |
| [QUOTIENT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/quotient-%25E5%2587%25BD%25E6%2595%25B0-9f7c1c88-1bec-4422-8242-e9f7dc8bb195) | 返回除法的整数部分 |
| [RADIANS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/radians-%25E5%2587%25BD%25E6%2595%25B0-ac241522-746b-48bc-a879-ac241522746b) | 将度转换为弧度 |
| [RAND](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/rand-%25E5%2587%25BD%25E6%2595%25B0-eae1ede1-0d14-4fc1-b0db-da55959da64f) | 返回 0 和 1 之间的一个随机数 |
| [RANDARRAY](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/randarray-%25E5%2587%25BD%25E6%2595%25B0-21610a14-231e-4bbb-9230-33650a72c9b0) (2021) | 返回 0 和 1 之间的随机数字数组。可以指定要填充的行数和列数、最小值和最大值，以及是否返回整个数字或小数值。 |
| [RANDBETWEEN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/randbetween-%25E5%2587%25BD%25E6%2595%25B0-4f7c1c88-1bec-4422-8242-e9f7dc8bb195) | 返回位于两个指定数之间的一个随机数 |
| [ROMAN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/roman-%25E5%2587%25BD%25E6%2595%25B0-d4d73cf0-adda-40da-9ff7-bd9aa0180016) | 将阿拉伯数字转换为文本式罗马数字 |
| [ROUND](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/round-%25E5%2587%25BD%25E6%2595%25B0-c04592ab-b9e3-4908-91a9-2602de67db94) | 将数字按指定位数舍入 |
| [ROUNDDOWN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/rounddown-%25E5%2587%25BD%25E6%2595%25B0-2ef614e1-a46f-4ac9-ac79-68784b29f9cc) | 向绝对值减小的方向舍入数字 |
| [ROUNDUP](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/roundup-%25E5%2587%25BD%25E6%2595%25B0-f764a5b7-05fc-4491-83c3-aa60dff4de7c) | 向绝对值增大的方向舍入数字 |
| [SECH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sech-%25E5%2587%25BD%25E6%2595%25B0-303e39c4-9426-5389-6504-a742fedfbda7) (2013) | 返回角度的双曲正割值 |
| [SERIESSUM](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/seriessum-%25E5%2587%25BD%25E6%2595%25B0-a3b1e738-119a-4508-af39-a3b1e738119a) | 返回基于公式的幂级数的和 |
| [SEQUENCE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sequence-%25E5%2587%25BD%25E6%2595%25B0-57463999-7de5-49ee-8f9f-fdd5604402fe) (2021) | SEQUENCE 函数可在数组中生成一系列连续数字，例如，1、2、3、4。 |
| [SIGN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sign-%25E5%2587%25BD%25E6%2595%25B0-11d23835-04d2-4403-a4c3-04d23835011c) | 返回数字的符号 |
| [SIN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sin-%25E5%2587%25BD%25E6%2595%25B0-1d89856f-683a-4933-9fb2-ac8ec53aa6a7) | 返回给定角度的正弦值 |
| [SINH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sinh-%25E5%2587%25BD%25E6%2595%25B0-8dc04364-5858-45e8-bdc1-74404fc3fcf0) | 返回数字的双曲正弦值 |
| [SQRT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sqrt-%25E5%2587%25BD%25E6%2595%25B0-65be-40cf-b2f1-62d4ed141b5f) | 返回正平方根 |
| [SQRTPI](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sqrtpi-%25E5%2587%25BD%25E6%2595%25B0-b378627c-9aa2-4c62-a662-de9ad9190203) | 返回某数与 $\pi$ 乘积的平方根 |
| [SUBTOTAL](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/subtotal-%25E5%2587%25BD%25E6%2595%25B0-7b42-46d2-9bd1-63f26a86c0eb) | 返回列表或数据库中的分类汇总 |
| [SUM](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sum-%25E5%2587%25BD%25E6%2595%25B0-043c1411-3f1d-43be-b3aa-96da03ed1da0) | 求参数的和 |
| [SUMIF](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sumif-%25E5%2587%25BD%25E6%2595%25B0-1617fbfa-11f8-4573-b26a-9f5cf81e59bc) | 按给定条件对指定单元格求和 |
| [SUMIFS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sumifs-%25E5%2587%25BD%25E6%2595%25B0-c9e727a5-7be0-4ef7-99b5-995bb67e15c8) (2019) | 在区域中添加满足多个条件的单元格 |
| [SUMPRODUCT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sumproduct-%25E5%2587%25BD%25E6%2595%25B0-1672cb67-2576-4d07-b67b-ac28acf2a568) | 返回对应的数组元素的乘积和 |
| [SUMSQ](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sumsq-%25E5%2587%25BD%25E6%2595%25B0-e331bc5a-98e4-42ee-8d2a-e331bc5a98e4) | 返回参数的平方和 |
| [SUMX2MY2](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sumx2my2-%25E5%2587%25BD%25E6%2595%25B0-9e4d-4de4-ba90-52562b4e2ec1) | 返回两数组中对应值平方差之和 |
| [SUMX2PY2](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sumx2py2-%25E5%2587%25BD%25E6%2595%25B0-1b42bba6-37a1-4196-9608-ef402b4d326a) | 返回两数组中对应值平方和之和 |
| [SUMXMY2](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/sumxmy2-%25E5%2587%25BD%25E6%2595%25B0-4471bb9f-ee58-4ee9-9229-63320bf669af) | 返回两个数组中对应值差的平方和 |
| [TAN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/tan-%25E5%2587%25BD%25E6%2595%25B0-3e7b-400e-a9b1-ec1ac1a6fde2) | 返回数字的正切值 |
| [TANH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/tanh-%25E5%2587%25BD%25E6%2595%25B0-dad3402e-9da3-4bf5-b9b5-68f7f9035ef2) | 返回数字的双曲正切值 |
| [TRUNC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/trunc-%25E5%2587%25BD%25E6%2595%25B0-8b378627-c624-4c62-a662-de9ad9190203) | 将数字截尾取整 |
<!--rehype:className=left-align-->

### 统计函数
<!--rehype:wrap-class=row-span-7-->

| 函数 | 说明 |
| --- | --- |
| [AVEDEV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/avedev-%25E5%2587%25BD%25E6%2595%25B0-58fe8d65-2a55-45a4-8468-58fe8d652a55) | 返回数据点与它们的平均值的绝对偏差平均值 |
| [AVERAGE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/average-%25E5%2587%25BD%25E6%2595%25B0-047e6ef7-c919-4a02-83e8-83e8047e6ef7) | 返回其参数的平均值 |
| [AVERAGEA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/averagea-%25E5%2587%25BD%25E6%2595%25B0-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe) | 返回其参数的平均值，包括数字、文本和逻辑值 |
| [AVERAGEIF](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/averageif-%25E5%2587%25BD%25E6%2595%25B0-faec8e2e-0ec9-4674-a4a1-12480e60938d) | 返回区域中满足给定条件的所有单元格的平均值（算术平均值） |
| [AVERAGEIFS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/averageifs-%25E5%2587%25BD%25E6%2595%25B0-48910c45-140a-4a02-83e8-83e8047e6ef7) (2019) | 返回满足多个条件的所有单元格的平均值（算术平均值） |
| [BETA.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/beta-dist-%25E5%2587%25BD%25E6%2595%25B0-11119f-b8d8-4c3e-b3ae-d2e8e479c3b1) (2010) | 返回 beta 累积分布函数 |
| [BETA.INV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/beta-inv-%25E5%2587%25BD%25E6%2595%25B0-7911119f-b8d8-4c3e-b3ae-d118eee9e1b4) (2010) | 返回指定 beta 分布的累积分布函数的反函数 |
| [BINOM.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/binom-dist-%25E5%2587%25BD%25E6%2595%25B0-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e) (2010) | 返回一元二项式分布的概率 |
| [BINOM.DIST.RANGE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/binom-dist-range-%25E5%2587%25BD%25E6%2595%25B0-a4b86897-be0f-48fc-adca-468acfc9d4b9) (2013) | 使用二项式分布返回试验结果的概率 |
| [BINOM.INV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/binom-inv-%25E5%2587%25BD%25E6%2595%25B0-d44a1111-b88d-4c3e-b3ae-d118eee9e0b4) (2010) | 返回使累积二项式分布小于或等于临界值的最小值 |
| [CHISQ.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/chisq-dist-%25E5%2587%25BD%25E6%2595%25B0-ba7d84e1-75ed-454c-becd-a27be1ad3e01) (2010) | 返回累积 beta 概率密度函数 |
| [CHISQ.DIST.RT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/chisq-dist-rt-%25E5%2587%25BD%25E6%2595%25B0-a9db95cd-2854-4f83-a725-7e37740bc590) (2010) | 返回 $\chi^2$ 分布的单尾概率 |
| [CHISQ.INV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/chisq-inv-%25E5%2587%25BD%25E6%2595%25B0-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe) (2010) | 返回累积 beta 概率密度函数的反函数 |
| [CHISQ.INV.RT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/chisq-inv-rt-%25E5%2587%25BD%25E6%2595%25B0-faec8e2e-0ec9-4674-a4a1-12480e60938d) (2010) | 返回 $\chi^2$ 分布的单尾概率的反函数 |
| [CHISQ.TEST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/chisq-test-%25E5%2587%25BD%25E6%2595%25B0-48910c45-140a-4a02-83e8-83e8047e6ef7) (2010) | 返回独立性检验值 |
| [CONFIDENCE.NORM](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/confidence-norm-%25E5%2587%25BD%25E6%2595%25B0-11119f-b8d8-4c3e-b3ae-d2e8e479c3b1) (2010) | 返回总体平均值的置信区间 |
| [CONFIDENCE.T](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/confidence-t-%25E5%2587%25BD%25E6%2595%25B0-7911119f-b8d8-4c3e-b3ae-d118eee9e1b4) (2010) | 返回总体平均值的置信区间（使用学生 $t$ 分布） |
| [CORREL](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/correl-%25E5%2587%25BD%25E6%2595%25B0-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e) | 返回两个数据集之间的相关系数 |
| [COUNT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/count-%25E5%2587%25BD%25E6%2595%25B0-a4b86897-be0f-48fc-adca-468acfc9d4b9) | 计算参数列表中数字的个数 |
| [COUNTA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/counta-%25E5%2587%25BD%25E6%2595%25B0-d44a1111-b88d-4c3e-b3ae-d118eee9e0b4) | 计算参数列表中值的个数 |
| [COUNTBLANK](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/countblank-%25E5%2587%25BD%25E6%2595%25B0-ba7d84e1-75ed-454c-becd-a27be1ad3e01) | 计算区域内空白单元格的个数 |
| [COUNTIF](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/countif-%25E5%2587%25BD%25E6%2595%25B0-a9db95cd-2854-4f83-a725-7e37740bc590) | 计算区域内符合给定条件的单元格的数量 |
| [COUNTIFS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/countifs-%25E5%2587%25BD%25E6%2595%25B0-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe) (2019) | 计算区域内符合多个条件的单元格的数量 |
| [COVARIANCE.P](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/covariance-p-%25E5%2587%25BD%25E6%2595%25B0-faec8e2e-0ec9-4674-a4a1-12480e60938d) (2010) | 返回总体协方差，即两个数据集之间成对偏差乘积的平均值 |
| [COVARIANCE.S](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/covariance-s-%25E5%2587%25BD%25E6%2595%25B0-48910c45-140a-4a02-83e8-83e8047e6ef7) (2010) | 返回样本协方差，即两个数据集之间成对偏差乘积的平均值 |
| [DEVSQ](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/devsq-%25E5%2587%25BD%25E6%2595%25B0-11119f-b8d8-4c3e-b3ae-d2e8e479c3b1) | 返回偏差的平方和 |
| [EXPON.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/expon-dist-%25E5%2587%25BD%25E6%2595%25B0-7911119f-b8d8-4c3e-b3ae-d118eee9e1b4) (2010) | 返回指数分布 |
| [F.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/f-dist-%25E5%2587%25BD%25E6%2595%25B0-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e) (2010) | 返回 $F$ 概率分布 |
| [F.DIST.RT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/f-dist-rt-%25E5%2587%25BD%25E6%2595%25B0-a4b86897-be0f-48fc-adca-468acfc9d4b9) (2010) | 返回 $F$ 概率分布的右尾 |
| [F.INV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/f-inv-%25E5%2587%25BD%25E6%2595%25B0-d44a1111-b88d-4c3e-b3ae-d118eee9e0b4) (2010) | 返回 $F$ 概率分布的反函数 |
| [F.INV.RT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/f-inv-rt-%25E5%2587%25BD%25E6%2595%25B0-ba7d84e1-75ed-454c-becd-a27be1ad3e01) (2010) | 返回 $F$ 概率分布的反函数右尾 |
| [F.TEST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/f-test-%25E5%2587%25BD%25E6%2595%25B0-a9db95cd-2854-4f83-a725-7e37740bc590) (2010) | 返回 $F$ 检验的结果 |
| [FISHER](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/fisher-%25E5%2587%25BD%25E6%2595%25B0-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe) | 返回 Fisher 变换值 |
| [FISHERINV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/fisherinv-%25E5%2587%25BD%25E6%2595%25B0-faec8e2e-0ec9-4674-a4a1-12480e60938d) | 返回 Fisher 变换的反函数值 |
| [FORECAST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/forecast-%25E5%2592%258C-forecast-linear-%25E5%2587%25BD%25E6%2595%25B0-50ca49c9-7b23-47c3-989d-a41e97608d3d) | 根据线性趋势预测未来值。注意：在 Excel 2016 中，此函数已由 FORECAST.LINEAR 取代，但仍保留以实现向后兼容性。 |
| [FORECAST.ETS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/forecast-ets-%25E5%2587%25BD%25E6%2595%25B0-11119f-b8d8-4c3e-b3ae-d2e8e479c3b1) (2016) | 通过使用指数平滑 (ETS) 的 AAA 版本的现有（历史）值预测未来值 |
| [FORECAST.ETS.CONFINT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/forecast-ets-confint-%25E5%2587%25BD%25E6%2595%25B0-7911119f-b8d8-4c3e-b3ae-d118eee9e1b4) (2016) | 返回指定目标日期的预测值的置信区间 |
| [FORECAST.ETS.SEASONALITY](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/forecast-ets-seasonality-%25E5%2587%25BD%25E6%2595%25B0-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e) (2016) | 返回针对指定时间序列 Excel 检测到的重复模式的长度 |
| [FORECAST.ETS.STAT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/forecast-ets-stat-%25E5%2587%25BD%25E6%2595%25B0-a4b86897-be0f-48fc-adca-468acfc9d4b9) (2016) | 返回作为时间序列预测结果的统计值 |
| [FORECAST.LINEAR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/forecast-%25E5%2592%258C-forecast-linear-%25E5%2587%25BD%25E6%2595%25B0-50ca49c9-7b23-47c3-989d-a41e97608d3d) (2016) | 根据现有值预测未来值 |
| [FREQUENCY](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/frequency-%25E5%2587%25BD%25E6%2595%25B0-d44a1111-b88d-4c3e-b3ae-d118eee9e0b4) | 返回作为垂直数组的频率分布 |
| [GAMMA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/gamma-%25E5%2587%25BD%25E6%2595%25B0-ba7d84e1-75ed-454c-becd-a27be1ad3e01) (2013) | 返回 Gamma 函数值 |
| [GAMMA.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/gamma-dist-%25E5%2587%25BD%25E6%2595%25B0-a9db95cd-2854-4f83-a725-7e37740bc590) (2010) | 返回伽玛分布 |
| [GAMMA.INV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/gamma-inv-%25E5%2587%25BD%25E6%2595%25B0-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe) (2010) | 返回伽玛累积分布函数的反函数 |
| [GAMMALN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/gammaln-%25E5%2587%25BD%25E6%2595%25B0-faec8e2e-0ec9-4674-a4a1-12480e60938d) | 返回 $\Gamma(x)$ 的自然对数 |
| [GAMMALN.PRECISE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/gammaln-precise-%25E5%2587%25BD%25E6%2595%25B0-48910c45-140a-4a02-83e8-83e8047e6ef7) (2010) | 返回 $\Gamma(x)$ 的自然对数 |
| [GAUSS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/gauss-%25E5%2587%25BD%25E6%2595%25B0-11119f-b8d8-4c3e-b3ae-d2e8e479c3b1) (2013) | 返回比标准正态累积分布减去 0.5 小的值 |
| [GEOMEAN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/geomean-%25E5%2587%25BD%25E6%2595%25B0-7911119f-b8d8-4c3e-b3ae-d118eee9e1b4) | 返回几何平均值 |
| [GROWTH](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/growth-%25E5%2587%25BD%25E6%2595%25B0-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e) | 根据指数趋势预测未来值 |
| [HARMEAN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/harmean-%25E5%2587%25BD%25E6%2595%25B0-a4b86897-be0f-48fc-adca-468acfc9d4b9) | 返回调和平均值 |
| [HYPGEOM.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/hypgeom-dist-%25E5%2587%25BD%25E6%2595%25B0-d44a1111-b88d-4c3e-b3ae-d118eee9e0b4) | 返回超几何分布 |
| [INTERCEPT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/intercept-%25E5%2587%25BD%25E6%2595%25B0-ba7d84e1-75ed-454c-becd-a27be1ad3e01) | 返回线性回归线截距 |
| [KURT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/kurt-%25E5%2587%25BD%25E6%2595%25B0-a9db95cd-2854-4f83-a725-7e37740bc590) | 返回数据集的峰值 |
| [LARGE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/large-%25E5%2587%25BD%25E6%2595%25B0-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe) | 返回数据集中第 k 个最大值 |
| [LINEST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/linest-%25E5%2587%25BD%25E6%2595%25B0-faec8e2e-0ec9-4674-a4a1-12480e60938d) | 返回线性趋势的参数 |
| [LOGEST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/logest-%25E5%2587%25BD%25E6%2595%25B0-48910c45-140a-4a02-83e8-83e8047e6ef7) | 返回指数趋势的参数 |
| [LOGNORM.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/lognorm-dist-%25E5%2587%25BD%25E6%2595%25B0-11119f-b8d8-4c3e-b3ae-d2e8e479c3b1) (2010) | 返回对数正态累积分布函数 |
| [LOGNORM.INV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/lognorm-inv-%25E5%2587%25BD%25E6%2595%25B0-7911119f-b8d8-4c3e-b3ae-d118eee9e1b4) (2010) | 返回对数正态累积分布反函数 |
| [MAX](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/max-%25E5%2587%25BD%25E6%2595%25B0-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e) | 返回参数列表中的最大值 |
| [MAXA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/maxa-%25E5%2587%25BD%25E6%2595%25B0-a4b86897-be0f-48fc-adca-468acfc9d4b9) | 返回参数列表中的最大值，包括数字、文本和逻辑值 |
| [MAXIFS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/maxifs-%25E5%2587%25BD%25E6%2595%25B0-d44a1111-b88d-4c3e-b3ae-d118eee9e0b4) (2019) | 返回由一组给定条件或标准指定的单元格之间的最大值 |
| [MEDIAN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/median-%25E5%2587%25BD%25E6%2595%25B0-ba7d84e1-75ed-454c-becd-a27be1ad3e01) | 返回给定数值的中位数 |
| [MIN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/min-%25E5%2587%25BD%25E6%2595%25B0-a9db95cd-2854-4f83-a725-7e37740bc590) | 返回参数列表中的最小值 |
| [MINA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/mina-%25E5%2587%25BD%25E6%2595%25B0-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe) | 返回参数列表中的最小值，包括数字、文本和逻辑值 |
| [MINIFS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/minifs-%25E5%2587%25BD%25E6%2595%25B0-faec8e2e-0ec9-4674-a4a1-12480e60938d) (2019) | 返回由一组给定条件或标准指定的单元格之间的最小值 |
| [MODE.MULT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/mode-mult-%25E5%2587%25BD%25E6%2595%25B0-48910c45-140a-4a02-83e8-83e8047e6ef7) (2010) | 返回一组数据或数据区域中最常出现或重复的值的垂直数组 |
| [MODE.SNGL](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/mode-sngl-%25E5%2587%25BD%25E6%2595%25B0-11119f-b8d8-4c3e-b3ae-d2e8e479c3b1) (2010) | 返回数据集中最常用的值 |
| [NEGBINOM.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/negbinom-dist-%25E5%2587%25BD%25E6%2595%25B0-7911119f-b8d8-4c3e-b3ae-d118eee9e1b4) (2010) | 返回负二项式分布 |
| [NORM.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/norm-dist-%25E5%2587%25BD%25E6%2595%25B0-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e) (2010) | 返回正态累积分布 |
| [NORM.INV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/norm-inv-%25E5%2587%25BD%25E6%2595%25B0-a4b86897-be0f-48fc-adca-468acfc9d4b9) (2010) | 返回正态累积分布的反函数 |
| [NORM.S.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/norm-s-dist-%25E5%2587%25BD%25E6%2595%25B0-d44a1111-b88d-4c3e-b3ae-d118eee9e0b4) (2010) | 返回标准正态累积分布 |
| [NORM.S.INV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/norm-s-inv-%25E5%2587%25BD%25E6%2595%25B0-ba7d84e1-75ed-454c-becd-a27be1ad3e01) (2010) | 返回标准正态累积分布反函数 |
| [PEARSON](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/pearson-%25E5%2587%25BD%25E6%2595%25B0-a9db95cd-2854-4f83-a725-7e37740bc590) | 返回 Pearson 乘积矩相关系数 |
| [PERCENTILE.EXC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/percentile-exc-%25E5%2587%25BD%25E6%2595%25B0-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe) (2010) | 返回区域中第 k 个百分比值（不包含 0 和 1） |
| [PERCENTILE.INC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/percentile-inc-%25E5%2587%25BD%25E6%2595%25B0-faec8e2e-0ec9-4674-a4a1-12480e60938d) (2010) | 返回区域中第 k 个百分比值（包含 0 和 1） |
| [PERCENTRANK.EXC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/percentrank-exc-%25E5%2587%25BD%25E6%2595%25B0-48910c45-140a-4a02-83e8-83e8047e6ef7) (2010) | 返回数据集中值的排位的百分比（不包含 0 和 1） |
| [PERCENTRANK.INC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/percentrank-inc-%25E5%2587%25BD%25E6%2595%25B0-11119f-b8d8-4c3e-b3ae-d2e8e479c3b1) (2010) | 返回数据集中值的排位的百分比（包含 0 和 1） |
| [PERMUT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/permut-%25E5%2587%25BD%25E6%2595%25B0-7911119f-b8d8-4c3e-b3ae-d118eee9e1b4) | 返回给定数目对象的排列数 |
| [PERMUTATIONA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/permutationa-%25E5%2587%25BD%25E6%2595%25B0-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e) (2013) | 返回可从总对象中选择的给定数目对象（具有重复项）的排列数 |
| [PHI](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/phi-%25E5%2587%25BD%25E6%2595%25B0-a4b86897-be0f-48fc-adca-468acfc9d4b9) (2013) | 返回标准正态分布的密度函数值 |
| [POISSON.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/poisson-dist-%25E5%2587%25BD%25E6%2595%25B0-d44a1111-b88d-4c3e-b3ae-d118eee9e0b4) (2010) | 返回泊松分布 |
| [PROB](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/prob-%25E5%2587%25BD%25E6%2595%25B0-ba7d84e1-75ed-454c-becd-a27be1ad3e01) | 返回区域中的值落在两个限制之间的概率 |
| [QUARTILE.EXC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/quartile-exc-%25E5%2587%25BD%25E6%2595%25B0-a9db95cd-2854-4f83-a725-7e37740bc590) (2010) | 返回数据集的四分位数（不包含 0 和 1） |
| [QUARTILE.INC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/quartile-inc-%25E5%2587%25BD%25E6%2595%25B0-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe) (2010) | 返回数据集的四分位数（包含 0 和 1） |
| [RANK.AVG](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/rank-avg-%25E5%2587%25BD%25E6%2595%25B0-faec8e2e-0ec9-4674-a4a1-12480e60938d) (2010) | 返回一列数字中的一个数字的排位：如果多个值具有相同的排位，则返回平均排位 |
| [RANK.EQ](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/rank-eq-%25E5%2587%25BD%25E6%2595%25B0-48910c45-140a-4a02-83e8-83e8047e6ef7) (2010) | 返回一列数字中的一个数字的排位 |
| [RSQ](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/rsq-%25E5%2587%25BD%25E6%2595%25B0-11119f-b8d8-4c3e-b3ae-d2e8e479c3b1) | 返回 Pearson 乘积矩相关系数的平方 |
| [SKEW](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/skew-%25E5%2587%25BD%25E6%2595%25B0-7911119f-b8d8-4c3e-b3ae-d118eee9e1b4) | 返回分布的偏斜度 |
| [SKEW.P](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/skew-p-%25E5%2587%25BD%25E6%2595%25B0-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e) (2013) | 基于总体返回分布的偏斜度 |
| [SLOPE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/slope-%25E5%2587%25BD%25E6%2595%25B0-a4b86897-be0f-48fc-adca-468acfc9d4b9) | 返回线性回归线的斜率 |
| [SMALL](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/small-%25E5%2587%25BD%25E6%2595%25B0-d44a1111-b88d-4c3e-b3ae-d118eee9e0b4) | 返回数据集中的第 k 个最小值 |
| [STANDARDIZE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/standardize-%25E5%2587%25BD%25E6%2595%25B0-ba7d84e1-75ed-454c-becd-a27be1ad3e01) | 返回正态化数值 |
| [STDEV.P](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/stdev-p-%25E5%2587%25BD%25E6%2595%25B0-a9db95cd-2854-4f83-a725-7e37740bc590) (2010) | 基于整个总体计算标准偏差 |
| [STDEV.S](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/stdev-s-%25E5%2587%25BD%25E6%2595%25B0-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe) (2010) | 基于样本计算标准偏差 |
| [STDEVA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/stdeva-%25E5%2587%25BD%25E6%2595%25B0-faec8e2e-0ec9-4674-a4a1-12480e60938d) | 基于样本计算标准偏差，包括数字、文本和逻辑值 |
| [STDEVPA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/stdevpa-%25E5%2587%25BD%25E6%2595%25B0-48910c45-140a-4a02-83e8-83e8047e6ef7) | 基于整个总体计算标准偏差，包括数字、文本和逻辑值 |
| [STEYX](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/steyx-%25E5%2587%25BD%25E6%2595%25B0-11119f-b8d8-4c3e-b3ae-d2e8e479c3b1) | 返回回归中每个 x 的因变量预测值的标准误差 |
| [T.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/t-dist-%25E5%2587%25BD%25E6%2595%25B0-7911119f-b8d8-4c3e-b3ae-d118eee9e1b4) (2010) | 返回学生 $t$ 分布的百分点（概率） |
| [T.DIST.2T](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/t-dist-2t-%25E5%2587%25BD%25E6%2595%25B0-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e) (2010) | 返回学生 $t$ 分布的百分点（概率）（双尾） |
| [T.DIST.RT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/t-dist-rt-%25E5%2587%25BD%25E6%2595%25B0-a4b86897-be0f-48fc-adca-468acfc9d4b9) (2010) | 返回学生 $t$ 分布 |
| [T.INV](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/t-inv-%25E5%2587%25BD%25E6%2595%25B0-d44a1111-b88d-4c3e-b3ae-d118eee9e0b4) (2010) | 作为概率和自由度的函数返回学生 $t$ 分布的 $t$ 值 |
| [T.INV.2T](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/t-inv-2t-%25E5%2587%25BD%25E6%2595%25B0-ba7d84e1-75ed-454c-becd-a27be1ad3e01) (2010) | 返回学生 $t$ 分布的反函数（双尾） |
| [T.TEST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/t-test-%25E5%2587%25BD%25E6%2595%25B0-a9db95cd-2854-4f83-a725-7e37740bc590) (2010) | 返回与学生 $t$ 检验相关的概率 |
| [TREND](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/trend-%25E5%2587%25BD%25E6%2595%25B0-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe) | 返回沿线性趋势的值 |
| [TRIMMEAN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/trimmean-%25E5%2587%25BD%25E6%2595%25B0-faec8e2e-0ec9-4674-a4a1-12480e60938d) | 返回数据集的内部平均值 |
| [VAR.P](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/var-p-%25E5%2587%25BD%25E6%2595%25B0-48910c45-140a-4a02-83e8-83e8047e6ef7) (2010) | 基于整个总体计算方差 |
| [VAR.S](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/var-s-%25E5%2587%25BD%25E6%2595%25B0-11119f-b8d8-4c3e-b3ae-d2e8e479c3b1) (2010) | 基于样本估算方差 |
| [VARA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/vara-%25E5%2587%25BD%25E6%2595%25B0-7911119f-b8d8-4c3e-b3ae-d118eee9e1b4) | 基于样本估算方差，包括数字、文本和逻辑值 |
| [VARPA](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/varpa-%25E5%2587%25BD%25E6%2595%25B0-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e) | 基于整个总体计算方差，包括数字、文本和逻辑值 |
| [WEIBULL.DIST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/weibull-dist-%25E5%2587%25BD%25E6%2595%25B0-a4b86897-be0f-48fc-adca-468acfc9d4b9) (2010) | 返回韦伯分布 |
| [Z.TEST](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/z-test-%25E5%2587%25BD%25E6%2595%25B0-d44a1111-b88d-4c3e-b3ae-d118eee9e0b4) (2010) | 返回 z 检验的单尾概率值 |
<!--rehype:className=left-align-->

### 文本函数
<!--rehype:wrap-class=row-span-3-->

| 函数 | 说明 |
| --- | --- |
| [ASC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/asc-%25E5%2587%25BD%25E6%2595%25B0-0b6ab944-a65c-4ac9-ac79-68784b29f9cc) | 将字符串中的全角（双字节）英文字母或片假名更改为半角（单字节）字符 |
| [ARRAYTOTEXT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/arraytotext-%25E5%2587%25BD%25E6%2595%25B0-9a5aff99-8f7d-4611-845e-747d0b8d5457) (2021) | 返回来自任何指定区域的文本值数组 |
| [BAHTTEXT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/bahttext-%25E5%2587%25BD%25E6%2595%25B0-df8b0047-614a-4ffc-a643-cd8b369c5485) | 使用泰语 (Baht) 货币格式将数字转换为文本 |
| [CHAR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/char-%25E5%2587%25BD%25E6%2595%25B0-8a7d1cbb-6c7d-4ba1-8aea-25c134d03101) | 返回由代码数字指定的字符 |
| [CLEAN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/clean-%25E5%2587%25BD%25E6%2595%25B0-57727a5f-7be0-4ef7-99b5-995bb67e15c8) | 删除文本中所有非打印字符 |
| [CODE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/code-%25E5%2587%25BD%25E6%2595%25B0-b9a50974-a469-4eb3-9653-83979bfb445a) | 返回文本字符串中第一个字符的数字代码 |
| [CONCAT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/concat-%25E5%2587%25BD%25E6%2595%25B0-3c920eb2-6e66-44e7-a1f5-753ae47ee4f5) (2016) | 将多个区域和/或字符串的文本组合起来，但不提供分隔符或 IgnoreEmpty 参数。 |
| [CONCATENATE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/concatenate-%25E5%2587%25BD%25E6%2595%25B0-7314ffa1-2bc9-4005-9d66-f49db127d628) | 将多个文本项连接到一个文本项中 |
| [DBCS](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/dbcs-%25E5%2587%25BD%25E6%2595%25B0-a3579d7b-de17-4a31-a069-9b1572d520a5) | 将字符串中的半角（单字节）英文字母或片假名更改为全角（双字节）字符 |
| [DOLLAR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/dollar-%25E5%2587%25BD%25E6%2595%25B0-1c2d0eb3-75a0-4ab8-9e17-e4963ef9d448) | 使用货币格式将数字转换为文本 |
| [EXACT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/exact-%25E5%2587%25BD%25E6%2595%25B0-af728df0-05c4-4b07-9eed-a84801a60589) | 检查两个文本字符串是否完全相同 |
| [FIND, FINDB](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/find-%25E5%2592%258C-findb-%25E5%2587%25BD%25E6%2595%25B0-579a2881-199b-48bc-a879-ac241522746b) | 在一个文本值中查找另一个文本值（区分大小写） |
| [FIXED](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/fixed-%25E5%2587%25BD%25E6%2595%25B0-48e717bf-a7a3-495f-955e-bec1616fe135) | 将数字格式设置为具有固定小数位数的文本 |
| [LEFT, LEFTB](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/left-%25E5%2592%258C-leftb-%25E5%2587%25BD%25E6%2595%25B0-71a64939-a7b2-4497-af2e-859431e327fd) | 返回文本值最左边的字符 |
| [LEN, LENB](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/len-%25E5%2592%258C-lenb-%25E5%2587%25BD%25E6%2595%25B0-03316d57-004d-4f30-a2e4-44c3839902ec) | 返回文本字符串中的字符个数 |
| [LOWER](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/lower-%25E5%2587%25BD%25E6%2595%25B0-740d9905-17f4-4199-81bc-a7abec977051) | 将文本转换为小写 |
| [MID, MIDB](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/mid-%25E5%2592%258C-midb-%25E5%2587%25BD%25E6%2595%25B0-9a5aff99-8f7d-4611-845e-747d0b8d5457) | 从文本字符串中的指定位置开始返回特定数目的字符 |
| [NUMBERVALUE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/numbervalue-%25E5%2587%25BD%25E6%2595%25B0-0b615c12-33d8-4431-ad3d-f3ddee6b1fef) (2013) | 以与区域设置无关的方式将文本转换为数字 |
| [PHONETIC](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/phonetic-%25E5%2587%25BD%25E6%2595%25B0-5eb307c4-a610-4151-90a6-be8d36f696cd) | 提取文本字符串中的拼音（注音）字符 |
| [PROPER](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/proper-%25E5%2587%25BD%25E6%2595%25B0-60e44483-2ed1-4322-a568-ad1695a628e4) | 将文本值的每个单词的首字母大写 |
| [REPLACE, REPLACEB](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/replace-%25E5%2592%258C-replaceb-%25E5%2587%25BD%25E6%2595%25B0-e5c43a03-b4ab-44c1-b0d1-9a135117aab6) | 替换文本中的字符 |
| [REPT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/rept-%25E5%2587%25BD%25E6%2595%25B0-f764a5b7-05fc-4491-83c3-aa60dff4de7c) | 按给定次数重复文本 |
| [RIGHT, RIGHTB](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/right-%25E5%2592%258C-rightb-%25E5%2587%25BD%25E6%2595%25B0-a378391c-907d-411f-a26a-ab4d7bfa7aea) | 返回文本值最右边的字符 |
| [SEARCH, SEARCHB](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/search-%25E5%2592%258C-searchb-%25E5%2587%25BD%25E6%2595%25B0-c64f017a-1354-490d-981f-578e8ec8d3b9) | 在一个文本值中查找另一个文本值（不区分大小写） |
| [SUBSTITUTE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/substitute-%25E5%2587%25BD%25E6%2595%25B0-3844141f-366b-486a-9f50-f84daacb2a8d) | 在文本字符串中用新文本替换旧文本 |
| [T](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/t-%25E5%2587%25BD%25E6%2595%25B0-0b6ab944-a65c-4ac9-ac79-68784b29f9cc) | 将其参数转换为文本 |
| [TEXT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/text-%25E5%2587%25BD%25E6%2595%25B0-201503e7-7867-4d07-b67b-ac28acf2a568) | 设置数字格式并将其转换为文本 |
| [TEXTAFTER](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/textafter-%25E5%2587%25BD%25E6%2595%25B0-c8de19c8-7f97-402e-a9b2-2b2e254c6de2) (2024) | 返回在给定字符或字符串之后出现的文本 |
| [TEXTBEFORE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/textbefore-%25E5%2587%25BD%25E6%2595%25B0-b592593e-3fc2-47f2-bec1-b4950117560a) (2024) | 返回在给定字符或字符串之前出现的文本 |
| [TEXTJOIN](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/textjoin-%25E5%2587%25BD%25E6%2595%25B0-3a63574a-7947-4986-9490-c226ab3ce90a) (2016) | 将多个区域和/或字符串的文本组合起来，并包括在要组合的每个文本值之间指定的分隔符。 |
| [TEXTSPLIT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/textsplit-%25E5%2587%25BD%25E6%2595%25B0-996b007d-f78c-408a-9c64-07d11d103543) (2024) | 使用列和行分隔符拆分文本字符串 |
| [TRIM](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/trim-%25E5%2587%25BD%25E6%2595%25B0-22f63bd0-ccc8-492f-953d-c20e8e44b86c) | 删除文本中的空格 |
| [UNICHAR](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/unichar-%25E5%2587%25BD%25E6%2595%25B0-cd26302a-6397-47e5-9119-a9f9d2ab8771) (2013) | 返回给定数值引用的 Unicode 字符 |
| [UNICODE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/unicode-%25E5%2587%25BD%25E6%2595%25B0-25b967d1-1665-4339-be3b-74d9e95fe793) (2013) | 返回对应于文本第一个字符的数字（Unicode 字符） |
| [UPPER](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/upper-%25E5%2587%25BD%25E6%2595%25B0-228399a9-781a-4d0a-b837-d18482895a9e) | 将文本转换为大写 |
| [VALUE](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/value-%25E5%2587%25BD%25E6%2595%25B0-a96d1174-cef9-4cfc-a117-d15999e32412) | 将文本参数转换为数字 |
| [VALUETOTEXT](https://www.google.com/search?q=https://support.microsoft.com/zh-cn/office/valuetotext-%25E5%2587%25BD%25E6%2595%25B0-ed039415-ed8a-4a81-93e9-4b6dfac76027) (2021) | 返回来自任何指定值的文本 |
<!--rehype:className=left-align-->

### 与加载项一起安装的用户定义的函数

| 函数 | 说明 |
| --- | --- |
| [呼叫](https://support.microsoft.com/zh-cn/office/call-%E5%87%BD%E6%95%B0-32d58445-e646-4ffd-8d5e-b45077a5e995) | 调用动态链接库或代码源中的过程 |
| [EUROCONVERT](https://support.microsoft.com/zh-cn/office/euroconvert-%E5%87%BD%E6%95%B0-79c8fd67-c665-450c-bb6c-15fc92f8345c) | 用于将数字转换为欧元形式，将数字由欧元形式转换为欧元成员国货币形式，或利用欧元作为中间货币将数字由某一欧元成员国货币转化为另一欧元成员国货币形式（三角转换关系） |
| [REGISTER.ID](https://support.microsoft.com/zh-cn/office/register-id-%E5%87%BD%E6%95%B0-f8f0af0f-fd66-4704-a0f2-87b27b175b50) | 返回已注册过的指定动态链接库 (DLL) 或代码源的注册号 |
<!--rehype:className=left-align-->

⚠️ **注意：** 用户定义函数 (UDF) 在 Excel 网页版 中不可用。

### Web 函数

| 函数 | 说明 |
| --- | --- |
| [ENCODEURL](https://support.microsoft.com/zh-cn/office/encodeurl-%E5%87%BD%E6%95%B0-07c7fb90-7c60-4bff-8687-fac50fe33d0e) (2013) | 返回 URL 编码的字符串 |
| [FILTERXML](https://support.microsoft.com/zh-cn/office/filterxml-%E5%87%BD%E6%95%B0-4df72efc-11ec-4951-86f5-c1374812f5b7) (2013) | 通过使用指定的 XPath，返回 XML 内容中的特定数据 |
| [WEBSERVICE](https://support.microsoft.com/zh-cn/office/webservice-%E5%87%BD%E6%95%B0-0546a35a-ecc6-4739-aed7-c0b7ce1562c4) (2013) | 返回 Web 服务中的数据。 |
<!--rehype:className=left-align-->

> *注：版本标记表示介绍函数的 Excel 版本。这些函数在早期版本中不可用。*
