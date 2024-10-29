PowerShell 备忘清单
===

一种强大的命令行界面和脚本语言，主要用于自动化任务和配置管理，特别适合系统管理员和 IT 专业人士。以下是 PowerShell 常用命令的备忘清单，可帮助快速参考常用操作。

常用操作
---

### 辅助命令

**_PowerShell 的命令遵循动词-名词格式_** 一些常见的动词:

| 动词    | 描述                     |
| ------- | ------------------------ |
| Get     | 用于检索信息             |
| Set     | 用于配置或更改设置       |
| New     | 用于创建新对象实例       |
| Remove  | 用于删除或移除项目       |
| Invoke  | 用于执行特定的操作或动作 |
| Start   | 用于启动进程或操作       |
| Stop    | 用于停止或终止进程或操作 |
| Enable  | 用于激活或启用功能       |
| Disable | 用于停用或禁用功能       |
| Test    | 用于执行测试或检查       |
| Update  | 用于更新或刷新数据或配置 |

列出可用模块

```PowerShell
Get-Module --ListAvailable
```

列出可用的 cmdlet 和函数

```PowerShell
Get-Command -Module ActiveDirectory
```

列出别名及其对应的 cmdlet 名称

```PowerShell
Get-Alias | Select-Object Name, Definition
```

获取帮助

```PowerShell
Get-Help <cmd>
Get-Help <cmd> -Examples
Get-Help -Name Get-Process -Parameter Id
```

**Get-Member:** 显示对象的属性和方法

```PowerShell
Get-Process | Get-Member
```

### 对象操作

**Select-Object:** 选择对象的特定属性或自定义其显示

```PowerShell
Get-Process | Select-Object Name, CPU
```

**Where-Object:** 根据指定条件过滤对象

```PowerShell
Get-Service | Where-Object { $PSItem.Status -eq 'Running' }
#OR
Get-Service | ? { $_.Status -eq 'Running' }
```

**Measure-Object:** 计算对象属性的统计信息，如总和、平均值和计数

```PowerShell
Get-Process | Measure-Object -Property WorkingSet -Sum
```

**ForEach-Object:** 对集合中的每个对象执行操作（注意：以下命令将为当前目录中的文件/文件夹添加前缀）

```PowerShell
Get-ChildItem | ForEach-Object { Rename-Item $_ -NewName "Prefix_$_" }
```

**Sort-Object:** 按指定属性对对象进行排序

```PowerShell
Get-ChildItem | Sort-Object Length -Descending
```

**Format-Table:** 将输出格式化为带有指定列的表格

```PowerShell
Get-Service | Format-Table -AutoSize  # ft alias
```

**Format-List:** 将输出格式化为属性和值的列表

```PowerShell
Get-Process | Format-List -Property Name, CPU  # fl alias
```

### 文件系统

```PowerShell
New-Item -path file.txt -type 'file' -value 'contents'
New-Item -path file.txt -type 'dir'
Copy-Item <src> -destination <dest>
Move-Item -path  <src> -destination <dest>
Remove-Item <file>
Test-Path <path>
Rename-Item -path <path> -newname <newname>

# using .NET Base Class Library
[System.IO.File]::WriteAllText('test.txt', '')
[System.IO.File]::Delete('test.txt')

Get-Content -Path "test.txt"
Get-Process | Out-File -FilePath "processes.txt"# 输出到文件
Get-Process | Export-Csv -Path "processes.csv"  # 输出到 CSV
$data = Import-Csv -Path "data.csv"             # 从 CSV 导入
```

系统管理
---

### 获取信息

```PowerShell
# 获取 BIOS 信息
Get-CimInstance -ClassName Win32_BIOS
# 获取本地连接的物理磁盘设备信息
Get-CimInstance -ClassName Win32_DiskDrive
# 获取安装的物理内存（RAM）信息
Get-CimInstance -ClassName Win32_PhysicalMemory
# 获取安装的网络适配器（物理 + 虚拟）信息
Get-CimInstance -ClassName Win32_NetworkAdapter
# 获取安装的图形/显卡（GPU）信息
Get-CimInstance -ClassName Win32_VideoController
```

### 命名空间 & 类

```PowerShell
# 列出所有类名
Get-CimClass | Select-Object -ExpandProperty CimClassName
# 探索 root\cimv2 命名空间中的各种 WMI 类
Get-CimClass -Namespace root\cimv2
# 探索 root\cimv2 命名空间下的子 WMI 命名空间
Get-CimInstance -Namespace root -ClassName __NAMESPACE
```

### 网络管理

```PowerShell
# 测试与远程主机的网络连接
Test-Connection -ComputerName google.com

# 获取网络适配器信息
Get-NetAdapter

# 获取 IP 地址信息
Get-NetIPAddress

# 获取路由表信息
Get-NetRoute

# 测试远程主机上的端口是否开放
Test-NetConnection google.com -Port 80

```

### 用户和组管理

```PowerShell
# 获取本地用户账户信息
Get-LocalUser

# 创建新的本地用户账户
New-LocalUser -Name NewUser -Password (ConvertTo-SecureString "Password123" -AsPlainText -Force)

# 删除本地用户账户
Remove-LocalUser -Name UserToRemove

# 获取本地组信息
Get-LocalGroup

# 将成员添加到本地组
Add-LocalGroupMember -Group Administrators -Member UserToAdd
```

### 安全性和权限

```PowerShell
# 获取文件/目录的访问控制列表
Get-Acl C:\Path\To\File.txt

# 设置文件/目录的访问控制列表
Set-Acl -Path C:\Path\To\File.txt -AclObject $aclObject
```

### 注册表管理

```PowerShell
# 获取注册表键值
Get-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*" | Select DisplayName, DisplayVersion

# 设置注册表键值
Set-ItemProperty -Path "HKLM:\Software\MyApp" -Name "SettingName" -Value "NewValue"

# 创建新的注册表键值
New-ItemProperty -Path "HKCU:\Software\MyApp" -Name "NewSetting" -Value "NewValue" -PropertyType String

# 删除注册表键值
Remove-ItemProperty -Path "HKCU:\Software\MyApp" -Name "SettingToRemove"

# 检查注册表键是否存在
Test-Path "HKLM:\Software\MyApp"
```

## 脚本

### 变量

初始化变量，指定或不指定类型：

```PowerShell
$var = 0
[int] $var = 'Trevor'         # (抛出异常)
[string] $var = 'Trevor'      # (不会抛出异常)
$var.GetType()

# 多重赋值
$a,$b,$c = 'a','b','c'

# 创建数组
$arrayvar = @('va1','va2')

# 创建字典
$dict = @{k1 = 'test'; k2 = 'best'}
```

变量命令

```PowerShell
New-Variable -Name FirstName -Value Trevor
New-Variable FirstName -Value Trevor -Option <ReadOnly/Constant>

Get-Variable
Get-Variable | ? { $PSItem.Options -contains 'constant' }
Get-Variable | ? { $PSItem.Options -contains 'readonly' }

Remove-Variable -Name firstname
# 删除只读变量
Remove-Variable -Name firstname -Force
```

变量类型：int32, int64, string, bool

### 运算符

```PowerShell
# 运算符
# (a <op> b)

= , += / -= , ++ / --
-eq / -ne , -lt / -gt , -le / -ge

$FirstName = 'Trevor'
$FirstName -like 'T*'
$true; $false # 布尔值 true/false

# 三元运算符
$FoodToEat = $BaconIsYummy ? 'bacon' : 'beets'

# -notin 或 -in
'Celery' -in @('Bacon', 'Sausage', 'Steak')

# 输出: True
5 -is [int32]

# 正则表达式匹配，可以使用数组
'Trevor' -match '^T\w*'

# 查找多个匹配项
$regex = [regex]'(\w*)'
$regex.Matches('this is test').Value

```

### Structure

#### 输入输出操作

```PowerShell
"This displays a string"

Write-Host "color" -ForegroundColor Red

$age = Read-host "Enter age"

$pwd = Read-host "password" -asSecureString

Clear-Host
```

#### 流控制

```PowerShell
IF(<#Condition#>){
<#Commands#>}ELSEIF(){}ELSE{}

Switch($var){
  "val1"{<#Commands#>; break}
    "val2"{<#Commands#>; break}
}

For($ct=0;$ct -le 3;$ct++){}

ForEach($var in $arr){}

while($var -ne 0){}

Do{}While()

```

### 函数 / 模块

#### 示例 1

```PowerShell
function funcname{

    [CmdletBinding()]
  param(
    [Parameter(Mandatory)]
    [String]$user
  )
  Write-Host "welcome " $user
    return "value"
}
$var = funcname -user pcb
```

#### 示例 2

```PowerShell
function Get-EvenNumbers {
    [CmdletBinding()]
    param (
        [Parameter(ValueFromPipeline = $true)]
        [int] $Number
    )
    begin {<#command#>}
    process {
        if ($Number % 2 -eq 0) {
            Write-Output $Number
        }
    }
    end {<#command#>}
}
1..10 | Get-EvenNumbers

```

#### 模块

```PowerShell
# PowerShell 在路径中查找模块
$env:PSModulePath

# 列出系统上安装的所有模块
Get-Module -ListAvailable
# 列出当前会话中导入的模块
Get-Module

Import-Module <moduleName>
Remove-Module <moduleName>

Find-Module -Tag cloud
Find-Module -Name ps*

# 创建一个内存中的 PowerShell 模块
New-Module -Name trevor -ScriptBlock {
  function Add($a,$b) { $a + $b } }

```

### 注意

- 在大多数语言中，转义字符是反斜杠 **\\**，而在 PowerShell 中是反引号 **`**

## 参考

- [Microsoft PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/samples/sample-scripts-for-administration?view=powershell-7.3) _(learn.microsoft.com)_
- [cheatsheets](https://cheatsheets.zip/powershell)
