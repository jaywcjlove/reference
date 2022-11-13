LaTeX 备忘清单
===

本备忘单总结了 [LaTeX](https://www.latex-project.org/) 常用显示数学符号的参考列表和一些 [KaTeX](https://katex.org/) 的应用示例。

入门
---

### 介绍

[LaTeX](https://www.latex-project.org/) 基于 TEX 的排版系统，适用于生成高印刷质量的科技和数学、物理文档。

- [LaTeX 官网](https://www.latex-project.org/) _(latex-project.org)_
- [KaTeX 官网](https://katex.org/) _(katex.org)_

而 [KaTeX](https://katex.org/) 只处理 LaTeX 的数学符号的一个更小的子集，用于 web 上展示

### 示例

```KaTeX
% \f is defined as #1f(#2) using the macro
f\relax(x) = \int_{-\infty}^\infty
    f\hat\xi\,e^{2 \pi i \xi x}
    \,d\xi
```

---

```LaTeX
% \f is defined as #1f(#2) using the macro
f\relax(x) = \int_{-\infty}^\infty
    f\hat\xi\,e^{2 \pi i \xi x}
    \,d\xi
```

### 行内展示

```markdown
基于 KaTeX 在一行
展示示例： `KaTeX:\int_0^\infty x^2 dx`
```

基于 KaTeX 在一行展示示例： `KaTeX:\int_0^\infty x^2 dx`

Supported Functions
---

### Accents
<!--rehype:wrap-class=col-span-2 row-span-2-->

:- | :- | :-
:- | :- | :-
`KaTeX:a'` <pur>`a'`</pur> | `KaTeX:\tilde{a}` <pur>`\tilde{a}`</pur> | `KaTeX:\mathring{g}` <pur>`\mathring{g}`</pur>
`KaTeX:a''` <pur>`a''`</pur> | `KaTeX:\widetilde{ac}` <pur>`\widetilde{ac}`</pur> | `KaTeX:\overgroup{AB}` <pur>`\overgroup{AB}`</pur>
`KaTeX:a^{\prime}` <pur>`a^{\prime}`</pur> | `KaTeX:\utilde{AB}` <pur>`\utilde{AB}`</pur> | `KaTeX:\undergroup{AB}` <pur>`\undergroup{AB}`</pur>
`KaTeX:\acute{a}` <pur>`\acute{a}`</pur> | `KaTeX:\vec{F}` <pur>`\vec{F}`</pur> | `KaTeX:\Overrightarrow{AB}` <pur>`\Overrightarrow{AB}`</pur>
`KaTeX:\bar{y}` <pur>`\bar{y}`</pur> | `KaTeX:\overleftarrow{AB}` <pur>`\overleftarrow{AB}`</pur> | `KaTeX:\overrightarrow{AB}` <pur>`\overrightarrow{AB}`</pur>
`KaTeX:\breve{a}` <pur>`\breve{a}`</pur> | `KaTeX:\underleftarrow{AB}` <pur>`\underleftarrow{AB}`</pur> | `KaTeX:\underrightarrow{AB}` <pur>`\underrightarrow{AB}`</pur>
`KaTeX:\check{a}` <pur>`\check{a}`</pur> | `KaTeX:\overleftharpoon{ac}` <pur>`\overleftharpoon{ac}`</pur> | `KaTeX:\overrightharpoon{ac}` <pur>`\overrightharpoon{ac}`</pur>
`KaTeX:\dot{a}` <pur>`\dot{a}`</pur> | `KaTeX:\overleftrightarrow{AB}` <pur>`\overleftrightarrow{AB}`</pur> | `KaTeX:\overbrace{AB}` <pur>`\overbrace{AB}`</pur>
`KaTeX:\ddot{a}` <pur>`\ddot{a}`</pur> | `KaTeX:\underleftrightarrow{AB}` <pur>`\underleftrightarrow{AB}`</pur> | `KaTeX:\underbrace{AB}` <pur>`\underbrace{AB}`</pur>
`KaTeX:\grave{a}` <pur>`\grave{a}`</pur> | `KaTeX:\overline{AB}` <pur>`\overline{AB}`</pur> | `KaTeX:\overlinesegment{AB}` <pur>`\overlinesegment{AB}`</pur>
`KaTeX:\hat{\theta}` <pur>`\hat{\theta}`</pur> | `KaTeX:\underline{AB}` <pur>`\underline{AB}`</pur> | `KaTeX:\underlinesegment{AB}` <pur>`\underlinesegment{AB}`</pur>
`KaTeX:\widehat{ac}` <pur>`\widehat{ac}`</pur> | `KaTeX:\widecheck{ac}` <pur>`\widecheck{ac}`</pur> | `KaTeX:\underbar{X}` <pur>`\underbar{X}`</pur>

### \text｛…｝中的强调功能

:- | :- | :-
:- | :- | :-
`KaTeX:\'{a}` <pur>`\'{a}`</pur> | `KaTeX:\~{a}` <pur>`\~{a}`</pur> |
`KaTeX:\.{a}` <pur>`\.{a}`</pur> | `KaTeX:\H{a}` <pur>`\H{a}`</pur> |
``KaTeX:\\\`{a}`` <pur><code>\\&#96;{a}</code></pur> | `KaTeX:\={a}` <pur>`\={a}`</pur> |
`KaTeX:\"{a}` <pur>`\"{a}`</pur> | `KaTeX:\v{a}` <pur>`\v{a}`</pur> |
`KaTeX:\^{a}` <pur>`\^{a}`</pur> | `KaTeX:\u{a}` <pur>`\u{a}`</pur> |
`KaTeX:\r{a}` <pur>`\r{a}`</pur> |

### Delimiter Sizing

:-  |  :-
:-  |  :-
`KaTeX:\left(\LARGE{AB}\right)` | <pur>`\left(\LARGE{AB}\right)`</pur>
`KaTeX:( \big( \Big( \bigg( \Bigg(`| <pur>`( \big( \Big( \bigg( \Bigg(`</pur>

---

:- | :- | :- | :- | :-
:- | :- | :- | :- | :-
`\left`   | `\big`  | `\bigl`  | `\bigm`  | `\bigr`
`\middle` | `\Big`  | `\Bigl`  | `\Bigm`  | `\Bigr`
`\right`  | `\bigg` | `\biggl` | `\biggm` | `\biggr`
`` | `\Bigg` | `\Biggl` | `\Biggm` | `\Biggr`

### 分隔符 Delimiters
<!--rehype:wrap-class=col-span-3-->

预览 | 方法 | 预览 | 方法 | 预览 | 方法 | 预览| 方法 | 预览 | 方法
:- | :- | :- | :- | :- | :- | :- | :- | :- | :-
| `KaTeX:()` | <pur>`()`</pur>                  | `KaTeX:\lparen \rparen` | <pur>`\lparen` `\rparen`</pur>           | `KaTex:⌈ ⌉` | <pur>`⌈ ⌉`</pur>       | `KaTex:\lceil \rceil` | <pur>`\lceil` `\rceil`</pur>              | `KaTex:\uparrow` | <pur>`\uparrow`</pur>             |
| `KaTeX:[]` | <pur>`[]`</pur>                  | `KaTeX:\lbrack \rbrack` | <pur>`\lbrack` `\rbrack`</pur>           | `KaTex:⌊ ⌋` | <pur>`⌊ ⌋`</pur>       | `KaTex:\lfloor \rfloor` | <pur>`\lfloor` `\rfloor`</pur>          | `KaTex:\downarrow` | <pur>`\downarrow`</pur>         |
| `KaTeX:\{ \}` | <pur>`{}`</pur>               | `KaTex:\lbrace \rbrace` | <pur>`\lbrace` `\rbrace`</pur>   | `KaTex:⎰⎱` | <pur>`⎰⎱`</pur>      | `KaTex:\lmoustache  \rmoustache` | <pur>`\lmoustache` `\rmoustache`</pur>  | `KaTex:\updownarrow` | <pur>`\updownarrow`</pur>     |
| `KaTeX:⟨ ⟩` | <pur>`⟨⟩`</pur>                 | `KaTex:\langle \rangle` | <pur>`\langle` `\rangle`</pur>   | `KaTex:⟮ ⟯` | <pur>`⟮ ⟯`</pur>         | `KaTex:\lgroup \rgroup` | <pur>`\lgroup` `\rgroup`</pur>                   | `KaTex:\Uparrow` | <pur>`\Uparrow`</pur>             |
| `KaTeX:∣`  | <pur>`\|`</pur>                  | `KaTex:\vert` | <pur>`\vert`</pur>                                 | `KaTex:┌ ┐` | <pur>`┌ ┐`</pur>       | `KaTex:\ulcorner \urcorner` | <pur>`\ulcorner` `\urcorner`</pur>   | `KaTex:\Downarrow` | <pur>`\Downarrow`</pur>         |
| `KaTeX:\|` _(<red>MD语法冲突</red>)_ | <pur><code>\\&#124;</code></pur> | `KaTex:\Vert` | <pur>`\Vert`</pur>            | `KaTex:└ ┘` | <pur>`└ ┘`</pur>       | `KaTex:\llcorner \lrcorner` | <pur>`\llcorner` `\lrcorner`</pur>   | `KaTex:\Updownarrow` | <pur>`\Updownarrow`</pur>     |
| `KaTeX:∣ ∣` | <pur>`\lvert` `\rvert`</pur>    | `KaTex:\lVert \rVert` | <pur>`\lVert` `\rVert`</pur>       |  | <pur>`\left.`</pur> |  | <pur>`\right.`</pur> | `KaTex:\backslash` | <pur>`\backslash`</pur> |
| `KaTeX:\lang` `KaTeX:\rang` | <pur>`\lang` `\rang`<pur>   | `KaTeX:\lt \gt` | <pur>`\lt \gt`</pur>                 | `KaTex:⟦ ⟧` | <pur>`⟦ ⟧`</pur>  | `KaTex:\llbracket \rrbracket` | <pur>`\llbracket` `\rrbracket`</pur> | `KaTex:\lBrace \rBrace` | <pur>`\lBrace \rBrace`</pur> |
<!--rehype:className=show-header left-align-->

Environments
---

### Environments 1
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{matrix}
   a & b \\
   c & d
\end{matrix}
```

```LaTeX
\begin{matrix}
   a & b \\
   c & d
\end{matrix}
```

### Environments 2
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{array}{cc}
   a & b \\
   c & d
\end{array}
```

```LaTeX
\begin{array}{cc}
   a & b \\
   c & d
\end{array}
```

### Environments 3
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{pmatrix}
   a & b \\
   c & d
\end{pmatrix}
```

```LaTeX
\begin{pmatrix}
   a & b \\
   c & d
\end{pmatrix}
```

### Environments 4
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{bmatrix}
   a & b \\
   c & d
\end{bmatrix}
```

```LaTeX
\begin{bmatrix}
   a & b \\
   c & d
\end{bmatrix}
```

### Environments 5
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{vmatrix}
   a & b \\
   c & d
\end{vmatrix}
```

```LaTeX
\begin{vmatrix}
   a & b \\
   c & d
\end{vmatrix}
```

### Environments 6
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{Vmatrix}
   a & b \\
   c & d
\end{Vmatrix}
```

```LaTeX
\begin{Vmatrix}
   a & b \\
   c & d
\end{Vmatrix}
```

### Environments 7
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{Bmatrix}
   a & b \\
   c & d
\end{Bmatrix}
```

```LaTeX
\begin{Bmatrix}
   a & b \\
   c & d
\end{Bmatrix}
```

### Environments 8
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\def\arraystretch{1.5}
   \begin{array}{c:c:c}
   a & b & c \\ \hline
   d & e & f \\
   \hdashline
   g & h & i
\end{array}
```

```LaTeX
\def\arraystretch{1.5}
   \begin{array}{c:c:c}
   a & b & c \\ \hline
   d & e & f \\
   \hdashline
   g & h & i
\end{array}
```

### Environments 9
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
x = \begin{cases}
   a &\text{if } b \\
   c &\text{if } d
\end{cases}
```

```LaTeX
x = \begin{cases}
   a &\text{if } b \\
   c &\text{if } d
\end{cases}
```

### Environments 10
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{rcases}
   a &\text{if } b \\
   c &\text{if } d
\end{rcases}⇒…
```

```LaTeX
\begin{rcases}
   a &\text{if } b \\
   c &\text{if } d
\end{rcases}⇒…
```

### Environments 11
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{smallmatrix}
   a & b \\
   c & d
\end{smallmatrix}
```

```LaTeX
\begin{smallmatrix}
   a & b \\
   c & d
\end{smallmatrix}
```

### Environments 12
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\sum_{
\begin{subarray}{l}
   i\in\Lambda\\
   0<j<n
\end{subarray}}
```

```LaTeX
\sum_{
\begin{subarray}{l}
   i\in\Lambda\\
   0<j<n
\end{subarray}}
```

### Environments 12
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{equation}
\begin{split}  a &=b+c\\
      &=e+f
\end{split}
\end{equation}
```
<!--rehype:style=flex:1;-->

```LaTeX
\begin{equation}
\begin{split}  a &=b+c\\
      &=e+f
\end{split}
\end{equation}
```

### Environments 12
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{align}
   a&=b+c \\
   d+e&=f
\end{align}
```
<!--rehype:style=flex:1;-->

```LaTeX
\begin{align}
   a&=b+c \\
   d+e&=f
\end{align}
```

### Environments 12
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{gather}
   a=b \\
   e=b+c
\end{gather}
```
<!--rehype:style=flex:1;-->

```LaTeX
\begin{gather}
   a=b \\
   e=b+c
\end{gather}
```

### Environments 12
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{alignat}{2}
   10&x+&3&y=2\\
   3&x+&13&y=4
\end{alignat}
```
<!--rehype:style=flex:1;-->

```LaTeX
\begin{alignat}{2}
   10&x+&3&y=2\\
   3&x+&13&y=4
\end{alignat}
```

### Environments 12
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{CD}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{CD}
```
<!--rehype:style=flex:1;-->

```LaTeX
\begin{CD}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{CD}
```

另见
----

- [LaTeX 官网](https://www.latex-project.org/) _(latex-project.org)_
- [KaTeX 官网](https://katex.org/) _(katex.org)_
