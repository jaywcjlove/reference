Chmod 备忘清单
===

这份快速参考备忘单提供了文件权限的简要概述，以及 chmod 命令的操作

入门
--------

### 语法

```shell
$ chmod [options] <permissions> <file> 
```

#### 示例

```shell
$ chmod 755 foo.txt
$ chmod +x quickref.py
$ chmod u-x quickref.py
$ chmod u=rwx,g=rx,o= quickref.sh
```

#### 递归更改文件和目录

```shell
$ chmod -R 755 my_directory
```

`chmod` 命令代表“更改模式”

### Chmod 生成器

```html preview
<div>
权限：<input type="text" id="num" placeholder="777" maxlength="3" style="padding: 0.3rem 0.3rem;" /> <input type="text" id="let" placeholder="rwxrwxrwx" maxlength="9" style="padding: 0.3rem 0.3rem;" />
</div>
```

---

&nbsp; | User | Group | Other
:- | :- | :- | :-
读 _(Read)_ | <input checked id="1" type="checkbox"></input> | <input checked id="4" type="checkbox"></input> | <input checked id="7" type="checkbox"></input>
写 _(Write)_ | <input checked id="2" type="checkbox"></input> | <input checked id="5" type="checkbox"></input> | <input checked id="8" type="checkbox"></input>
执行 _(Execute)_ | <input checked id="3" type="checkbox"></input> | <input checked id="6" type="checkbox"></input> | <input checked id="9" type="checkbox"></input>
<!--rehype:className=show-header-->

Chmod 生成器允许您以数字和符号的形式快速、直观地生成权限。

### 通用权限

命令 | s | 含义
:-|:-|:-
`400`   | r-------- | 仅所有者可读
`500`   | r-x------ | 避免改变
`600`   | rw------- | 可由用户更改
`644`   | rw-r--r-- | 由用户读取和更改
`660`   | rw-rw---- | 可由用户和组更改
`700`   | rwx------ | 只有用户具有完全访问权限
`755`   | rwxr-xr-x | 只能由用户更改
`775`   | rwxrwxr-x | 群组共享模式
`777`   | rwxrwxrwx | 每个人都可以做任何事

### 解释

```shell
$ ls -l
-rw-r--r--  1 root root 3 Jun 29 15:35 a.log
drwxr-xr-x  2 root root 2 Jun 30 18:06 dir
```

#### `dir` 的权限分析

```text
d  rwx  r-x  r-x
┬  ─┬─  ─┬─  ─┬─  
┆   ┆    ┆    ┆  
┆   ┆    ┆    ╰─ 4. Other｜5 (4+0+1)
┆   ┆    ╰────── 3. Group｜5 (4+0+1)
┆   ╰─────────── 2. User ｜7 (4+2+1)
╰─────────────── 1. File Type | directory
```

### 权限模式
<!--rehype:wrap-class=col-span-2-->

| 权限 | 描述             | 八进制 | 十进制   |
|------------|-------------------------|-------|-----------|
`---`      | 没有权限        | 000   | 0 (0+0+0)
`--x`      | 执行           | 001   | 1 (0+0+1)
`-w-`      | 写             | 010   | 2 (0+2+0)
`-wx`      | 执行和写入      | 011   | 3 (0+2+1)
`r--`      | 读             | 100   | 4 (4+0+0)
`r-x`      | 读取和执行      | 101   | 5 (4+0+1)
`rw-`      | 读和写          | 110   | 6 (4+2+0)
`rwx`      | 读取、写入和执行 | 111   | 7 (4+2+1)
<!--rehype:className=show-header-->

### Objects

| 谁（缩写）    | 含义            |
|-------------|--------------------|
| `u`         | 用户             |
| `g`         | 组            |
| `o`         | 其它           |
| `a`         | 全部，和 ugo 一样 |
<!--rehype:className=show-header-->

### 权限

| 缩写 | 权限    | 值 |
|--------------|---------------|-------|
| `r`          | 读      | 4     |
| `w`          | 写      | 2     |
| `x`          | 执行     | 1     |
| `-`          | 没有权限  | 0     |
<!--rehype:className=show-header-->

### 文件类型

| 缩写 | 文件类型    |
|--------------|----------|
| `d`          | 目录      |
| `-`          | 常规文件   |
| `l`          | 符号链接   |
<!--rehype:className=show-header-->

Chmod 示例
--------

### 操作符

| Symbol | Description |
|--------|-------------|
| `+`    | 添加         |
| `-`    | 删除      |
| `=`    | 设置        |

### chmod 600

```shell
$ chmod 600 example.txt
$ chmod u=rw,g=,o= example.txt
$ chmod a+rwx,u-x,g-rwx,o-rwx example.txt
```

### chmod 664

```shell
$ chmod 664 example.txt
$ chmod u=rw,g=rw,o=r example.txt
$ chmod a+rwx,u-x,g-x,o-wx example.txt
```

### chmod 777

```shell
$ chmod 777 example.txt
$ chmod u=rwx,g=rwx,o=rwx example.txt
$ chmod a=rwx example.txt
```

### 符号模式
<!--rehype:wrap-class=row-span-3-->

拒绝所有人的执行权限。

```shell
$ chmod a-x chmodExampleFile.txt
```

向所有人授予读取权限。

```shell
$ chmod a+r chmodExampleFile.txt
```

使文件可由组和其他人读写。

```shell
$ chmod go+rw chmodExampleFile.txt
```

使用户/所有者可执行 shell。

```shell
$ chmod u+x chmodExampleScript.sh
```

允许每个人读取、写入和执行文件并打开设置的 group-ID。

```shell
$ chmod =rwx,g+s chmodExampleScript.sh
```

### 删除权限
<!--rehype:wrap-class=row-span-3-->

要删除赋予文件的读写权限，请使用以下语法：

```shell
$ chmod o-rw example.txt
```

对于我们的文件 example.txt，我们可以通过运行以下命令使用 chmod for group 删除读写权限：

```shell
$ chmod  g-rx example.txt
```

要从组中删除 chmod 读写权限，同时向 public/others 添加读写权限，我们可以使用以下命令：

```shell
$ chmod g-rx, o+rx example.txt
```

但是，如果你想删除组和其他人的所有权限，你可以使用 go= 来代替：

```shell
$ chmod go= example.txt
```

### 可执行文件

```shell
$ chmod +x ~/example.py
$ chmod u+x ~/example.py
$ chmod a+x ~/example.py
```

### chmod 754

```shell
$ chmod 754 foo.sh
$ chmod u=rwx,g=rx,o=r foo.sh
```

Chmod 实践
---------------

### SSH 权限

```shell
$ chmod 700 ~/.ssh
$ chmod 600 ~/.ssh/authorized_keys
$ chmod 600 ~/.ssh/id_rsa
$ chmod 600 ~/.ssh/id_rsa.pub
$ chmod 400 /path/to/access_key.pem
```

### 网络权限

```shell
$ chmod -R 644 /var/www/html/
$ chmod 644 .htaccess
$ chmod 644 robots.txt
$ chmod 755 /var/www/uploads/
$ find /var/www/html -type d -exec chmod 755 {} \;
```

### 批量更改

```shell
$ chmod -R 644 /your_path
$ find /path -type d -exec chmod 755 {} \;
$ find /path -type f -exec chmod 644 {} \;
```

请参阅：[命令替换](https://tldp.org/LDP/abs/html/commandsub.html)

另见
----

* [使用 chmod 修改文件权限](https://www.linode.com/docs/guides/modify-file-permissions-with-chmod/) _(linode.com)_

<!--rehype:ignore:start-->
以下是 Chmod 生成器 JS 代码（代码用于网站请忽略不要删除）
---
<!--rehype:ignore:end-->

```html preview
<!-- Chmod 生成器 JS 代码 -->
<script type="text/javascript">
  const reg_num = /^[0-7]{3}$/; // 一些正则表达式来检查 num 输入
  const reg_let = /^([r\-]{1}[w\-]{1}[x\-]{1}){3}$/; // 一些正则表达式来检查文本输入
  function checkBoxHandle() {
    change_occured(true, false, false);
    // get rid of bad input classes
    document.getElementById('num').classList.remove('bad-input');
    document.getElementById('let').classList.remove('bad-input');
  }
  window.addEventListener("DOMContentLoaded", function () {
    // loop over all the check boxes
    for (let i = 1; i < 10; i++) {
      let checkBox = document.getElementById(`${i}`);
      checkBox.addEventListener('change', function () {
        change_occured(true, false, false);

        // get rid of bad input classes
        document.getElementById('num').classList.remove('bad-input');

        document.getElementById('let').classList.remove('bad-input');
      });
    }
    // the octal input
    let num_input = document.getElementById('num');
    let num_fn = function () {
      // check for bad input
      if (!reg_num.test(this.value)) {
        this.classList.add('bad-input');
      } else {
        this.classList.remove('bad-input');
        change_occured(false, true, false);
      }
    };
    num_input.addEventListener('change', num_fn);
    num_input.addEventListener('keyup', num_fn);
    // the let input
    let let_input = document.getElementById('let');
    let let_fn = function () {
      // check for bad input
      if (!reg_let.test(this.value)) {
        this.classList.add('bad-input');
      } else {
        this.classList.remove('bad-input');
        change_occured(false, false, true);
      }
    };
    let_input.addEventListener('change',let_fn);
    let_input.addEventListener('keyup',let_fn);
  });
  /* SETUP
  r-4-1  r-4-4  r-4-7
  w-2-2  w-2-5  w-2-8
  x-1-3  x-1-6  x-1-9
  */
  // define a function that runs when a change occures
  function change_occured(caller_was_check, caller_was_num, caller_was_let) {
    let num1 = 0, num2 = 0, num3 = 0; // these are the three numbers for the octal
    let perm_string = ''; // holds the permision string ex. rw-x--r--
    if (caller_was_check) {
      // loop over all the check boxes and get the permisions
      for (let i = 1; i < 10; i++) {
        let checkBox = document.getElementById(`${i}`);
        if (checkBox.checked) { // if checked
          let current_perm = check_to_octal_and_text(i);
          perm_string += `${current_perm.perm_let}`;
          if (i <= 3) {
            num1 += current_perm.perm_num;
          } else if (i <= 6) {
            num2 += current_perm.perm_num;
          } else {
            num3 += current_perm.perm_num;
          }
        } else { // if not checked
          perm_string += '-';
        }
      }
      // set the permision input text
      document.getElementById('let').value = perm_string;
      document.getElementById('num').value = `${num1}${num2}${num3}`;
    } else if (caller_was_num) {
      // get the individual numbers
      let num_input_val = document.getElementById('num').value;
      num1 = num_input_val.substring(0, 1);
      num2 = num_input_val.substring(1, 2);
      num3 = num_input_val.substring(2, 3);
      // set the checkboxes and get the perm string
      perm_string += octal_to_check_and_txt(num1, 0); //Owner
      perm_string += octal_to_check_and_txt(num2, 1); //Owner
      perm_string += octal_to_check_and_txt(num3, 2); //Owner
      // set the permision input text
      document.getElementById('let').value = perm_string;
    } else if (caller_was_let) {
      // get the text input
      let perm_text = document.getElementById('let').value;
      num1 = text_to_check_and_octal(perm_text.substring(0, 3), 0)
      num2 = text_to_check_and_octal(perm_text.substring(3, 6), 3)
      num3 = text_to_check_and_octal(perm_text.substring(6, 9), 6)
      // set the octal value
      document.getElementById('num').value = `${num1}${num2}${num3}`;
    }
  }
  // define a function to converts the checkbox # to the respective permissions
  // returns perm_num, perm_let
  function check_to_octal_and_text(check_num) {
    let perm_num = 0;
    let perm_let = '-';
    switch (check_num) {
      case 1:
      case 4:
      case 7:
        perm_num = 4;
        perm_let = 'r';
        break;
      case 2:
      case 5:
      case 8:
        perm_num = 2;
        perm_let = 'w';
        break;
      case 3:
      case 6:
      case 9:
        perm_num = 1;
        perm_let = 'x';
        break;
      default:
        perm_num = 0;
        perm_let = '-';
    }
    // return values
    return {
      perm_num,
      perm_let
    };
  }
  /**
   Takes a number 1-7 and which class it is in:
   0 = owner
   1 = Group
   2 = Public
   Returns: perm text (ex. "rwx") and sets the appropriate checkboxes
   */
  function octal_to_check_and_txt(octal_num, class_num) {
    let perm_text = '';
    let offset = class_num * 3;
    switch (octal_num) {
      case '1':
        document.getElementById(`${1 + offset}`).checked = false;
        document.getElementById(`${2 + offset}`).checked = false;
        document.getElementById(`${3 + offset}`).checked = true;
        perm_text = '--x';
        break;
      case '2':
        document.getElementById(`${1 + offset}`).checked = false;
        document.getElementById(`${2 + offset}`).checked = true;
        document.getElementById(`${3 + offset}`).checked = false;
        perm_text = '-w-';
        break;
      case '3':
        document.getElementById(`${1 + offset}`).checked = false;
        document.getElementById(`${2 + offset}`).checked = true;
        document.getElementById(`${3 + offset}`).checked = true;
        perm_text = '-wx';
        break;
      case '4':
        document.getElementById(`${1 + offset}`).checked = true;
        document.getElementById(`${2 + offset}`).checked = false;
        document.getElementById(`${3 + offset}`).checked = false;
        perm_text = 'r--';
        break;
      case '5':
        document.getElementById(`${1 + offset}`).checked = true;
        document.getElementById(`${2 + offset}`).checked = false;
        document.getElementById(`${3 + offset}`).checked = true;
        perm_text = 'r-x';
        break;
      case '6':
        document.getElementById(`${1 + offset}`).checked = true;
        document.getElementById(`${2 + offset}`).checked = true;
        document.getElementById(`${3 + offset}`).checked = false;
        perm_text = 'rw-';
        break;
      case '7':
        document.getElementById(`${1 + offset}`).checked = true;
        document.getElementById(`${2 + offset}`).checked = true;
        document.getElementById(`${3 + offset}`).checked = true;
        perm_text = 'rwx';
        break;
      default:
        document.getElementById(`${1 + offset}`).checked = false;
        document.getElementById(`${2 + offset}`).checked = false;
        document.getElementById(`${3 + offset}`).checked = false;
        perm_text = '---';
    }
    return perm_text;
  }
  /**
   Takes 3 letters (r, w, x, -    ex. 'rw-') and an offset (0,3,6)
   Returns the octal num and sets the appropriate checkboxes
   */
  function text_to_check_and_octal(letters, offset) {
    let perm_num = 0; // the octal number to return
    // add up the oct num and set the check boxes
    for (let i = 0; i < 3; i++) {
      current_let = letters.substring(i, i + 1);
      if (current_let == 'r') {
        document.getElementById(`${i + 1 + offset}`).checked = true;
        perm_num += 4;
      } else if (current_let == 'w') {
        document.getElementById(`${i + 1 + offset}`).checked = true;
        perm_num += 2;
      } else if (current_let == 'x') {
        document.getElementById(`${i + 1 + offset}`).checked = true;
        perm_num += 1;
      } else {
        document.getElementById(`${i + 1 + offset}`).checked = false;
      }
    }
    return perm_num;
  }
</script>
```
