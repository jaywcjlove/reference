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

### 希腊和希伯来字母 Greek and Hebrew letters
<!--rehype:wrap-class=col-span-3-->

预览 | 方法 | 预览 | 方法 | 预览 | 方法 | 预览| 方法 | 预览 | 方法 | 预览 | 方法
:- | :- | :- | :- | :- | :- | :- | :- | :- | :- | :- | :-
| `KaTex:\alpha`     | <pur>`\alpha`</pur>      | `KaTex:\kappa`    | <pur>`\kappa`</pur>       | `KaTex:\psi`      | <pur>`\psi`</pur>         | `KaTex:\digamma`      | <pur>`\digamma`</pur>         | `KaTex:\Delta`    | <pur>`\Delta`</pur>       |  `KaTex:\Theta`   | <pur>`\Theta`</pur>   |
| `KaTex:\beta`      | <pur>`\beta`</pur>       | `KaTex:\lambda`   | <pur>`\lambda`</pur>      | `KaTex:\rho`      | <pur>`\rho`</pur>         | `KaTex:\varepsilon`   | <pur>`\varepsilon`</pur>      | `KaTex:\Gamma`    | <pur>`\Gamma`</pur>       |  `KaTex:\Upsilon` | <pur>`\Upsilon`</pur> |
| `KaTex:\chi`       | <pur>`\chi`</pur>        | `KaTex:\mu`       | <pur>`\mu`</pur>          | `KaTex:\sigma`    | <pur>`\sigma`</pur>       | `KaTex:\varkappa`     | <pur>`\varkappa`</pur>        | `KaTex:\Lambda`   | <pur>`\Lambda`</pur>      |  `KaTex:\Xi`      | <pur>`\Xi`</pur>      |
| `KaTex:\delta`     | <pur>`\delta`</pur>      | `KaTex:\nu`       | <pur>`\nu`</pur>          | `KaTex:\tau`      | <pur>`\tau`</pur>         | `KaTex:\varphi`       | <pur>`\varphi`</pur>          | `KaTex:\Omega`    | <pur>`\Omega`</pur>       |  |
| `KaTex:\epsilon`   | <pur>`\epsilon`</pur>    | `KaTex:o`         | <pur>`o`</pur>            | `KaTex:\theta`    | <pur>`\theta`</pur>       | `KaTex:\varpi`        | <pur>`\varpi`</pur>           | `KaTex:\Phi`      | <pur>`\Phi`</pur>         |  `KaTex:\aleph`   | <pur>`\aleph`</pur>   |
| `KaTex:\eta`       | <pur>`\eta`</pur>        | `KaTex:\omega`    | <pur>`\omega`</pur>       | `KaTex:\upsilon`  | <pur>`\upsilon`</pur>     | `KaTex:\varrho`       | <pur>`\varrho`</pur>          | `KaTex:\Pi`       | <pur>`\Pi`</pur>          |  `KaTex:\beth`    | <pur>`\beth`</pur>    |
| `KaTex:\gamma`     | <pur>`\gamma`</pur>      | `KaTex:\phi`      | <pur>`\phi`</pur>         | `KaTex:\xi`       | <pur>`\xi`</pur>          | `KaTex:\varsigma`     | <pur>`\varsigma`</pur>        | `KaTex:\Psi`      | <pur>`\Psi`</pur>         |  `KaTex:\daleth`  | <pur>`\daleth`</pur>  |
| `KaTex:\iota`      | <pur>`\iota`</pur>       | `KaTex:\pi`       | <pur>`\pi`</pur>          | `KaTex:\zeta`     | <pur>`\zeta`</pur>        | `KaTex:\vartheta`     | <pur>`\vartheta`</pur>        | `KaTex:\Sigma`    | <pur>`\Sigma`</pur>       |  `KaTex:\gimel`   | <pur>`\gimel`</pur>   |
<!--rehype:className=show-header left-align-->

### 字母和 Unicode
<!--rehype:wrap-class=col-span-3-->

预览 | 方法 | 预览 | 方法 | 预览 | 方法 | 预览 | 方法
:- | :- | :- | :- | :- | :- | :- | :-
`KaTex:\Alpha` | <pur>`\Alpha`</pur> | `KaTex:\Beta` | <pur>`\Beta`</pur> | `KaTex:\Gamma` | <pur>`\Gamma`</pur> | `KaTex:\Delta` | <pur>`\Delta`</pur>
`KaTex:\Epsilon` | <pur>`\Epsilon`</pur> | `KaTex:\Zeta` | <pur>`\Zeta`</pur> | `KaTex:\Eta` | <pur>`\Eta`</pur> | `KaTex:\Theta` | <pur>`\Theta`</pur>
`KaTex:\Iota` | <pur>`\Iota`</pur> | `KaTex:\Kappa` | <pur>`\Kappa`</pur> | `KaTex:\Lambda` | <pur>`\Lambda`</pur> | `KaTex:\Mu` | <pur>`\Mu`</pur>
`KaTex:\Nu` | <pur>`\Nu`</pur> | `KaTex:\Xi` | <pur>`\Xi`</pur> | `KaTex:\Omicron` | <pur>`\Omicron`</pur> | `KaTex:\Pi` | <pur>`\Pi`</pur>
`KaTex:\Rho` | <pur>`\Rho`</pur> | `KaTex:\Sigma` | <pur>`\Sigma`</pur> | `KaTex:\Tau` | <pur>`\Tau`</pur> | `KaTex:\Upsilon` | <pur>`\Upsilon`</pur>
`KaTex:\Phi` | <pur>`\Phi`</pur> | `KaTex:\Chi` | <pur>`\Chi`</pur> | `KaTex:\Psi` | <pur>`\Psi`</pur> | `KaTex:\Omega` | <pur>`\Omega`</pur>
`KaTex:\varGamma` | <pur>`\varGamma`</pur> | `KaTex:\varDelta` | <pur>`\varDelta`</pur> | `KaTex:\varTheta` | <pur>`\varTheta`</pur> | `KaTex:\varLambda` | <pur>`\varLambda`</pur>
`KaTex:\varXi` | <pur>`\varXi`</pur> | `KaTex:\varPi` | <pur>`\varPi`</pur> | `KaTex:\varSigma` | <pur>`\varSigma`</pur> | `KaTex:\varUpsilon` | <pur>`\varUpsilon`</pur>
`KaTex:\varPhi` | <pur>`\varPhi`</pur> | `KaTex:\varPsi` | <pur>`\varPsi`</pur> | `KaTex:\varOmega` | <pur>`\varOmega`</pur> |
`KaTex:\alpha` | <pur>`\alpha`</pur> | `KaTex:\beta` | <pur>`\beta`</pur> | `KaTex:\gamma` | <pur>`\gamma`</pur> | `KaTex:\delta` | <pur>`\delta`</pur>
`KaTex:\epsilon` | <pur>`\epsilon`</pur> | `KaTex:\zeta` | <pur>`\zeta`</pur> | `KaTex:\eta` | <pur>`\eta`</pur> | `KaTex:\theta` | <pur>`\theta`</pur>
`KaTex:\iota` | <pur>`\iota`</pur> | `KaTex:\kappa` | <pur>`\kappa`</pur> | `KaTex:\lambda` | <pur>`\lambda`</pur> | `KaTex:\mu` | <pur>`\mu`</pur>
`KaTex:\nu` | <pur>`\nu`</pur> | `KaTex:\xi` | <pur>`\xi`</pur> | `KaTex:\omicron` | <pur>`\omicron`</pur> | `KaTex:\pi` | <pur>`\pi`</pur>
`KaTex:\rho` | <pur>`\rho`</pur> | `KaTex:\sigma` | <pur>`\sigma`</pur> | `KaTex:\tau` | <pur>`\tau`</pur> | `KaTex:\upsilon` | <pur>`\upsilon`</pur>
`KaTex:\phi` | <pur>`\phi`</pur> | `KaTex:\chi` | <pur>`\chi`</pur> | `KaTex:\psi` | <pur>`\psi`</pur> | `KaTex:\omega` | <pur>`\omega`</pur>
`KaTex:\varepsilon` | <pur>`\varepsilon`</pur> | `KaTex:\varkappa` | <pur>`\varkappa`</pur> | `KaTex:\vartheta` | <pur>`\vartheta`</pur> | `KaTex:\thetasym` | <pur>`\thetasym`</pur>
`KaTex:\varpi` | <pur>`\varpi`</pur> | `KaTex:\varrho` | <pur>`\varrho`</pur> | `KaTex:\varsigma` | <pur>`\varsigma`</pur> | `KaTex:\varphi` | <pur>`\varphi`</pur>
`KaTex:\digamma` | <pur>`\digamma`</pur>
<!--rehype:className=show-header left-align-->

### 注解
<!--rehype:wrap-class=col-span-3-->

:- | :- | :- | :- | :-
:- | :- | :- | :- | :-
`KaTex:\cancel{5}` | <pur>`\cancel{5}`</pur> | `KaTex:\overbrace{a+b+c}^{\text{note}}` | <pur>`\overbrace{a+b+c}^{\text{note}}`</pur>
`KaTex:\bcancel{5}` | <pur>`\bcancel{5}`</pur> | `KaTex:\underbrace{a+b+c}_{\text{note}}` | <pur>`\underbrace{a+b+c}_{\text{note}}`</pur>
`KaTex:\xcancel{ABC}` | <pur>`\xcancel{ABC}`</pur> | `KaTex:\not =` | <pur>`\not =`</pur>
`KaTex:\sout{abc}` | <pur>`\sout{abc}`</pur> | `KaTex:\boxed{\pi=\frac c d}` | <pur>`\boxed{\pi=\frac c d}`</pur>
`KaTex:\$a_{\angl n}` _<red>MD语法冲突</red>_ | <pur>`$a_{\angl n}`</pur> | `KaTex:a_\angln` | <pur>`a_\angln`</pur>
`KaTex:\phase{-78^\circ}` | <pur>`\phase{-78^\circ}`</pur>

<pur>\tag{hi} x+y^{2x}</pur>

```KaTex
\tag{hi} x+y^{2x}
```

<pur>\tag*{hi} x+y^{2x}</pur>

```KaTex
\tag*{hi} x+y^{2x}
```

### 垂直布局
<!--rehype:wrap-class=col-span-3-->

:- | :- | :- | :- | :- | :-
:- | :- | :- | :- | :- | :-
`KaTex:x_n` | <pur>`x_n`</pur> | `KaTex:\stackrel{!}{=}` | <pur>`\stackrel{!}{=}`</pur> | `KaTex:a \atop b` | `a \atop b`
`KaTex:e^x` | <pur>`e^x`</pur> | `KaTex:\overset{!}{=}` | <pur>`\overset{!}{=}`</pur> | `KaTex:a\raisebox{0.25em}{$b$}c` | `a\raisebox{0.25em}{$b$}c`
`KaTex:_u^o` | <pur>`_u^o`</pur> | `KaTex:\underset{!}{=}` | <pur>`\underset{!}{=}`</pur> | `KaTex:a+\left(\vcenter{\hbox{$\frac{\frac a b}c$}}\right)` | `a+\left(\vcenter{\hbox{$\frac{\frac a b}c$}}\right)`
`KaTex:\sum_{\substack{0<i<m\\0<j<n}}` | <pur>`\sum_{\substack{0<i<m\\0<j<n}}`</pur>

### 重叠和间距
<!--rehype:wrap-class=col-span-3-->

 :- | :- | :- | :-
 :- | :- | :- | :-
`KaTex:{=}\mathllap{/\,}` <pur>{=}\mathllap{/\,}</pur> | `KaTex:\left(x^{\smash{2}}\right)` | <pur>\left(x^{\smash{2}}\right)</pur>
`KaTex:\mathrlap{\,/}{=}` <pur>\mathrlap{\,/}{=}</pur> | `KaTex:\sqrt{\smash[b]{y}}` | <pur>\sqrt{\smash[b]{y}}</pur>

`\sum_{\mathclap{1\le i\le j\le n}} x_{ij}`

```KaTex
\sum_{\mathclap{1\le i\le j\le n}} x_{ij}
```

### `KaTex:\LaTeX` math constructs
<!--rehype:wrap-class=col-span-3-->

预览 | 方法 | 预览 | 方法 | 预览 | 方法
:- | :- | :- | :- | :- | :-
| `KaTex:\frac{abc}{xyz}`   | <pur>`\frac{abc}{xyz}`</pur>      | `KaTex:\overline{abc}`     | <pur>`\overline{abc}`</pur>      | `KaTex:\overrightarrow{abc}`     | <pur>`\overrightarrow{abc}`</pur>      |
| `KaTex:f'`                | <pur>`f'`</pur>                   | `KaTex:\underline{abc}`    | <pur>`\underline{abc}`</pur>     | `KaTex:\overleftarrow{abc}`      | <pur>`\overleftarrow{abc}`</pur>       |
| `KaTex:\sqrt{abc}`        | <pur>`\sqrt{abc}`</pur>           | `KaTex:\widehat{abc}`      | <pur>`\widehat{abc}`</pur>       | `KaTex:\overbrace{abc}`          | <pur>`\overbrace{abc}`</pur>           |
| `KaTex:\sqrt[n]{abc}`     | <pur>`\sqrt[n]{abc}`</pur>        | `KaTex:\widetilde{abc}`    | <pur>`\widetilde{abc}`</pur>     | `KaTex:\underbrace{abc}`         | <pur>`\underbrace{abc}`</pur>          |

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

可以使用一对表达式 `\left` `KaTeX:s_1` 和 `\right` `KaTeX:s_2` 来将分隔符 `KaTeX:s_1` 和 `KaTeX:s_2` 的高度与其内容的高度进行匹配，例如:
:- | :- | :- | :- | :- | :- | :- | :- | :- | :- | :-
:- | :- | :- | :- | :- | :- | :- | :- | :- | :- | :-
| `KaTeX:\left\|` | `KaTeX:expr` | `KaTeX:\right\|` | | `KaTeX:\left\{` |`KaTeX:expr` | `KaTeX:\right\}` | | `KaTeX:\left\Vert`| `KaTeX:expr` | `KaTeX:\right.` |

### 可变大小的符号
<!--rehype:wrap-class=col-span-3-->

预览 | 方法 | 预览 | 方法 | 预览 | 方法 | 预览| 方法 | 预览 | 方法
:- | :- | :- | :- | :- | :- | :- | :- | :- | :-
| `KaTeX:\sum`      | <pur>`\sum`</pur>         | `KaTeX:\int`  | <pur>`\int`</pur>         |  `KaTeX:\biguplus`    | <pur>`\biguplus`</pur>        | `KaTeX:\bigoplus`     | <pur>`\bigoplus`</pur>        |  `KaTeX:\bigvee`      | <pur>`\bigvee`</pur>          |
| `KaTeX:\prod`     | <pur>`\prod`</pur>        | `KaTeX:\oint` | <pur>`\oint`</pur>        |  `KaTeX:\bigcap`      | <pur>`\bigcap`</pur>          | `KaTeX:\bigotimes`    | <pur>`\bigotimes`</pur>       |  `KaTeX:\bigwedge`    | <pur>`\bigwedge`</pur>        |
| `KaTeX:\coprod`   | <pur>`\coprod`</pur>      | `KaTeX:\iint` | <pur>`\iint`</pur>        |  `KaTeX:\bigcup`      | <pur>`\bigcup`</pur>          | `KaTeX:\bigodot`      | <pur>`\bigodot`</pur>         |  `KaTeX:\bigodot`     | <pur>`\bigodot`</pur>         |
<!--rehype:className=show-header left-align-->

### 标准函数名称
<!--rehype:wrap-class=col-span-3-->

预览 | 方法 | 预览 | 方法 | 预览 | 方法 | 预览| 方法
:- | :- | :- | :- | :- | :- | :- | :-
| `KaTeX:\arccos`   | <pur>`\arccos`</pur>  | `KaTeX:\arcsin`   | <pur>`\arcsin`</pur>  | `KaTeX:\arcsin`   | <pur>`\arcsin`</pur>  | `KaTeX:\arg`      | <pur>`\arg`</pur>     |
| `KaTeX:\cos`      | <pur>`\cos`</pur>     | `KaTeX:\cosh`     | <pur>`\cosh`</pur>    | `KaTeX:\cot`      | <pur>`\cot`</pur>     | `KaTeX:\coth`     | <pur>`\coth`</pur>    |
| `KaTeX:\csc`      | <pur>`\csc`</pur>     | `KaTeX:\deg`      | <pur>`\deg`</pur>     | `KaTeX:\det`      | <pur>`\det`</pur>     | `KaTeX:\dim`      | <pur>`\dim`</pur>     |
| `KaTeX:\exp`      | <pur>`\exp`</pur>     | `KaTeX:\gcd`      | <pur>`\gcd`</pur>     | `KaTeX:\hom`      | <pur>`\hom`</pur>     | `KaTeX:\inf`      | <pur>`\inf`</pur>     |
| `KaTeX:\ker`      | <pur>`\ker`</pur>     | `KaTeX:\lg`       | <pur>`\lg`</pur>      | `KaTeX:\lim`      | <pur>`\lim`</pur>     | `KaTeX:\liminf`   | <pur>`\liminf`</pur>  |
| `KaTeX:\limsup`   | <pur>`\limsup`</pur>  | `KaTeX:\ln`       | <pur>`\ln`</pur>      | `KaTeX:\log`      | <pur>`\log`</pur>     | `KaTeX:\max`      | <pur>`\max`</pur>     |
| `KaTeX:\min`      | <pur>`\min`</pur>     | `KaTeX:\Pr`       | <pur>`\Pr`</pur>      | `KaTeX:\sec`      | <pur>`\sec`</pur>     | `KaTeX:\sin`      | <pur>`\sin`</pur>     |
| `KaTeX:\sinh`     | <pur>`\sinh`</pur>    | `KaTeX:\sup`      | <pur>`\sup`</pur>     | `KaTeX:\tan`      | <pur>`\tan`</pur>     | `KaTeX:\tanh`     | <pur>`\tanh`</pur>    |
<!--rehype:className=show-header left-align-->

函数名应该用罗马字体，而不是斜体，例如:

:- | :- | :- | :-
:- | :- | :- | :-
| Correct: |  <pur>`\tan(at-n\pi)`</pur> | `KaTeX:\rightarrow` | `KaTeX:\tan(at-n\pi)`|
| Incorrect: | <pur>`tan(at-n\pi)`</pur> | `katex:\rightarrow` | `KaTeX:tan(at-n\pi)` |

### 逻辑与集合论
<!--rehype:wrap-class=col-span-3-->

:- | :- | :- | :- | :- | :- | :- | :-
:- | :- | :- | :- | :- | :- | :- | :-
`KaTeX:\forall`  | <pur>`\forall`</pur> | `KaTeX:\complement` | <pur>`\complement`</pur> | `KaTeX:\therefore` | <pur>`\therefore`</pur> | `KaTeX:\emptyset` | <pur>`\emptyset`</pur>
`KaTeX:\exists`  | <pur>`\exists`</pur> | `KaTeX:\subset` | <pur>`\subset`</pur> | `KaTeX:\because` | <pur>`\because`</pur> | `KaTeX:\empty` | <pur>`\empty`</pur>
`KaTeX:\exist`   | <pur>`\exist`</pur> | `KaTeX:\supset` | <pur>`\supset`</pur> | `KaTeX:\mapsto` | <pur>`\mapsto`</pur> | `KaTeX:\varnothing` | <pur>`\varnothing`</pur>
`KaTeX:\nexists` | <pur>`\nexists`</pur> | `KaTeX:\mid` | <pur>`\mid`</pur> | `KaTeX:\to` | <pur>`\to`</pur> | `KaTeX:\implies` | <pur>`\implies`</pur>
`KaTeX:\in`      | <pur>`\in`</pur> | `KaTeX:\land` | <pur>`\land`</pur> | `KaTeX:\gets` | <pur>`\gets`</pur> | `KaTeX:\impliedby` | <pur>`\impliedby`</pur>
`KaTeX:\isin`    | <pur>`\isin`</pur> | `KaTeX:\lor` | <pur>`\lor`</pur> | `KaTeX:\leftrightarrow` | <pur>`\leftrightarrow`</pur> | `KaTeX:\iff` | <pur>`\iff`</pur>
`KaTeX:\notin`   | <pur>`\notin`</pur> | `KaTeX:\ni` | <pur>`\ni`</pur> | `KaTeX:\notni` | <pur>`\notni`</pur> | `KaTeX:\neg` `KaTeX:\lnot` | <pur>`\neg`</pur> 或 <pur>`\lnot`</pur>

---

:- | :- | :- | :-
:- | :- | :- | :-
`KaTeX:\Set{ x \| x<\frac 1 2 }` | <pur>\Set{ x \| x<\frac 1 2 }</pur> | `KaTeX:\set{x\|x<5}` | <pur>\set{x\|x<5}</pur>

运算符
---

### 数学运算符
<!--rehype:wrap-class=col-span-3 row-span-2-->

:- | :- | :- | :- | :- | :- | :- | :-
:- | :- | :- | :- | :- | :- | :- | :-
`KaTex:\arcsin` | <pur>`\arcsin`</pur> | `KaTex:\cosec` | <pur>`\cosec`</pur> | `KaTex:\deg` | <pur>`\deg`</pur> | `KaTex:\sec` | <pur>`\sec`</pur>
`KaTex:\arccos` | <pur>`\arccos`</pur> | `KaTex:\cosh` | <pur>`\cosh`</pur> | `KaTex:\dim` | <pur>`\dim`</pur> | `KaTex:\sin` | <pur>`\sin`</pur>
`KaTex:\arctan` | <pur>`\arctan`</pur> | `KaTex:\cot` | <pur>`\cot`</pur> | `KaTex:\exp` | <pur>`\exp`</pur> | `KaTex:\sinh` | <pur>`\sinh`</pur>
`KaTex:\arctg` | <pur>`\arctg`</pur> | `KaTex:\cotg` | <pur>`\cotg`</pur> | `KaTex:\hom` | <pur>`\hom`</pur> | `KaTex:\sh` | <pur>`\sh`</pur>
`KaTex:\arcctg` | <pur>`\arcctg`</pur> | `KaTex:\coth` | <pur>`\coth`</pur> | `KaTex:\ker` | <pur>`\ker`</pur> | `KaTex:\tan` | <pur>`\tan`</pur>
`KaTex:\arg` | <pur>`\arg`</pur> | `KaTex:\csc` | <pur>`\csc`</pur> | `KaTex:\lg` | <pur>`\lg`</pur> | `KaTex:\tanh` | <pur>`\tanh`</pur>
`KaTex:\ch` | <pur>`\ch`</pur> | `KaTex:\ctg` | <pur>`\ctg`</pur> | `KaTex:\ln` | <pur>`\ln`</pur> | `KaTex:\tg` | <pur>`\tg`</pur>
`KaTex:\cos` | <pur>`\cos`</pur> | `KaTex:\cth` | <pur>`\cth`</pur> | `KaTex:\log` | <pur>`\log`</pur> | `KaTex:\th` | <pur>`\th`</pur>
`KaTex:\operatorname{f}` | <pur>`\operatorname{f}`</pur> |
`KaTex:\argmax` | <pur>`\argmax`</pur> | `KaTex:\injlim` | <pur>`\injlim`</pur> | `KaTex:\min` | <pur>`\min`</pur> | `KaTex:\varinjlim` | <pur>`\varinjlim`</pur>
`KaTex:\argmin` | <pur>`\argmin`</pur> | `KaTex:\lim` | <pur>`\lim`</pur> | `KaTex:\plim` | <pur>`\plim`</pur> | `KaTex:\varliminf` | <pur>`\varliminf`</pur>
`KaTex:\det` | <pur>`\det`</pur> | `KaTex:\liminf` | <pur>`\liminf`</pur> | `KaTex:\Pr` | <pur>`\Pr`</pur> | `KaTex:\varlimsup` | <pur>`\varlimsup`</pur>
`KaTex:\gcd` | <pur>`\gcd`</pur> | `KaTex:\limsup` | <pur>`\limsup`</pur> | `KaTex:\projlim` | <pur>`\projlim`</pur> | `KaTex:\varprojlim` | <pur>`\varprojlim`</pur>
`KaTex:\inf` | <pur>`\inf`</pur> | `KaTex:\max` | <pur>`\max`</pur> | `KaTex:\sup` | <pur>`\sup`</pur> | `KaTex:\operatorname*{f}` | <pur>`\operatorname*{f}`</pur>
`KaTex:\operatornamewithlimits{f}` | <pur>`\operatornamewithlimits{f}`</pur> |

### 大运算符
<!--rehype:wrap-class=col-span-2-->

:- | :- | :- | :- | :- | :- | :- | :-
:- | :- | :- | :- | :- | :- | :- | :-
`KaTex:\sum` | <pur>`\sum`</pur> | `KaTex:\prod` | <pur>`\prod`</pur> | `KaTex:\bigotimes` | <pur>`\bigotimes`</pur> | `KaTex:\bigvee` | <pur>`\bigvee`</pur>
`KaTex:\int` | <pur>`\int`</pur> | `KaTex:\coprod` | <pur>`\coprod`</pur> | `KaTex:\bigoplus` | <pur>`\bigoplus`</pur> | `KaTex:\bigwedge` | <pur>`\bigwedge`</pur>
`KaTex:\iint` | <pur>`\iint`</pur> | `KaTex:\intop` | <pur>`\intop`</pur> | `KaTex:\bigodot` | <pur>`\bigodot`</pur> | `KaTex:\bigcap` | <pur>`\bigcap`</pur>
`KaTex:\iiint` | <pur>`\iiint`</pur> | `KaTex:\smallint` | <pur>`\smallint`</pur> | `KaTex:\biguplus` | <pur>`\biguplus`</pur> | `KaTex:\bigcup` | <pur>`\bigcup`</pur>

### 分数和二项式
<!--rehype:wrap-class=row-span-2-->

:- | :- | :- | :-
:- | :- | :- | :-
`KaTex:\frac{a}{b}` | <pur>`\frac{a}{b}`</pur> | `KaTex:\tfrac{a}{b}` | <pur>`\tfrac{a}{b}`</pur>
`KaTex:{a \over b}` | <pur>`{a \over b}`</pur> | `KaTex:\dfrac{a}{b}` | <pur>`\dfrac{a}{b}`</pur>
`KaTex:\genfrac ( ] {2pt}{1}a{a+1}` | <pur>`\genfrac ( ] {2pt}{1}a{a+1}`</pur> | `KaTex:{a \above{2pt} b+1}` | <pur>`{a \above{2pt} b+1}`</pur>
`KaTex:a/b` | <pur>`a/b`</pur> | `KaTex:\cfrac{a}{1 + \cfrac{1}{b}}` | <pur>`\cfrac{a}{1 + \cfrac{1}{b}}`</pur>

:- | :- | :- | :-
:- | :- | :- | :-
`KaTex:\binom{n}{k}` | <pur>`\binom{n}{k}`</pur> | `KaTex:\dbinom{n}{k}` | <pur>`\dbinom{n}{k}`</pur>
`KaTex:{n\brace k}` | <pur>`{n\brace k}`</pur> | `KaTex:{n \choose k}` | <pur>`{n \choose k}`</pur>
`KaTex:\tbinom{n}{k}` | <pur>`\tbinom{n}{k}`</pur> | `KaTex:{n\brack k}` | <pur>`{n\brack k}`</pur>

### \sqrt

:- | :- | :- | :-
:- | :- | :- | :-
`KaTex:\sqrt{x}` | <pur>`\sqrt{x}`</pur> | `KaTex:\sqrt[3]{x}` | <pur>`\sqrt[3]{x}`</pur>

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
<!--rehype:style=flex:1;-->

```LaTeX
\begin{matrix}
   a & b \\
   c & d
\end{matrix}
```
<!--rehype:style=flex:1;-->

### Environments 2
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{array}{cc}
   a & b \\
   c & d
\end{array}
```
<!--rehype:style=flex:1;-->

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
<!--rehype:style=flex:1;-->

```LaTeX
\begin{pmatrix}
   a & b \\
   c & d
\end{pmatrix}
```
<!--rehype:style=flex:1;-->

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
<!--rehype:style=flex:1;-->

```LaTeX
\begin{vmatrix}
   a & b \\
   c & d
\end{vmatrix}
```
<!--rehype:style=flex:1;-->

### Environments 6
<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{Vmatrix}
   a & b \\
   c & d
\end{Vmatrix}
```
<!--rehype:style=flex:1;-->

```LaTeX
\begin{Vmatrix}
   a & b \\
   c & d
\end{Vmatrix}
```
<!--rehype:style=flex:1;-->

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
<!--rehype:style=flex:1;-->

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
<!--rehype:style=flex:1;-->

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
<!--rehype:style=flex:1;-->

```LaTeX
\sum_{
\begin{subarray}{l}
   i\in\Lambda\\
   0<j<n
\end{subarray}}
```

### Environments 13
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

### Environments 14
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

### Environments 15
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

### Environments 16
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

### Environments 17
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

样式、颜色、大小和字体
---

### Color 颜色

:- | :-
:- | :-
`KaTex:\color{blue} F=ma` | <pur>`\color{blue} F=ma`</pur>
`KaTex:\textcolor{blue}{F=ma}` | <pur>`\textcolor{blue}{F=ma}`</pur>
`KaTex:\textcolor{#228B22}{F=ma}` | <pur>`\textcolor{#228B22}{F=ma}`</pur>
`KaTex:\colorbox{aqua}{$F=ma$}` | <pur>`\colorbox{aqua}{$F=ma$}`</pur>
`KaTex:\fcolorbox{red}{aqua}{$F=ma$}` | <pur>`\fcolorbox{red}{aqua}{$F=ma$}`</pur>

### Font 字体
<!--rehype:wrap-class=col-span-2-->

:- | :- | :- | :- | :- | :-
:- | :- | :- | :- | :- | :-
`KaTex:\Huge AB` | <pur>`\Huge AB`</pur> | `KaTex:\normalsize AB` | <pur>`\normalsize AB`</pur> | `KaTex:\normalsize AB` | <pur>\normalsize AB</pur>
`KaTex:\huge AB` | <pur>`\huge AB`</pur> | `KaTex:\huge AB` | <pur>`\huge AB`</pur> | `KaTex:\small AB` | <pur>\small AB</pur>
`KaTex:\LARGE AB` | <pur>`\LARGE AB`</pur> | `KaTex:\LARGE AB` | <pur>`\LARGE AB`</pur> | `KaTex:\footnotesize AB` | <pur>\footnotesize AB</pur>
`KaTex:\Large AB` | <pur>`\Large AB`</pur> | `KaTex:\Large AB` | <pur>`\Large AB`</pur> | `KaTex:\scriptsize AB` | <pur>\scriptsize AB</pur>
`KaTex:\large AB` | <pur>`\large AB`</pur> | `KaTex:\large AB` | <pur>`\large AB`</pur> | `KaTex:\tiny AB` | <pur>\tiny AB</pur>

### Style 样式
<!--rehype:wrap-class=col-span-3-->

:- | :- | :- | :-
:- | :- | :- | :-
`KaTex:\displaystyle\sum_{i=1}^n` | <pur>\displaystyle\sum_{i=1}^n</pur> | `KaTex:\textstyle\sum_{i=1}^n` | <pur>\textstyle\sum_{i=1}^n</pur>
`KaTex:\scriptstyle x` | <pur>\scriptstyle x</pur> | `KaTex:\scriptscriptstyle x` | <pur>\scriptscriptstyle x</pur>
`KaTex:\lim\limits_x` | <pur>\lim\limits_x</pur> | `KaTex:\lim\nolimits_x` | <pur>\lim\nolimits_x</pur>
`KaTex:\verb!x^2!` | <pur>\verb!x^2!</pur>

另见
----

- [LaTeX 官网](https://www.latex-project.org/) _(latex-project.org)_
- [KaTeX 官网](https://katex.org/) _(katex.org)_
- [symbols.pdf](https://www.cmor-faculty.rice.edu/~heinken/latex/symbols.pdf) _(cmor-faculty.rice.edu)_
