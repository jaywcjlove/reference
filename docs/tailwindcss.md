Tailwind CSS 备忘清单
===

使用此交互式备忘单快速查找所有类名和 CSS 属性

Layout
---

### Aspect Ratio

用于控制元素纵横比的实用程序

:-- | --
:-- | --
`aspect-auto` | <pur>aspect-ratio: auto;<pur>
`aspect-square` | <pur>aspect-ratio: 1 / 1;<pur>
`aspect-video` | <pur>aspect-ratio: 16 / 9;<pur>
<!--rehype:className=left-align-->

---

```html
<iframe
  class="w-full aspect-video ..."
  src="https://www.youtube.com/...">
</iframe>
```

### Container

设置最大宽度以匹配当前断点的最小宽度

:-- | -- | --
:-- | -- | --
container | none | <pur>width: 100%</pur>
|  | sm (640px) | <pur>max-width: 640px;</pur>
|  | md (768px) | <pur>max-width: 768px;</pur>
|  | lg (1024px) | <pur>max-width: 1024px;</pur>
|  | xl (1280px) | <pur>max-width: 1280px;</pur>
|  | 2xl (1536px) | <pur>max-width: 1536px;</pur>
<!--rehype:className=left-align-->

---

```html
<div class="md:container md:mx-auto">
  <!-- ... -->
</div>
```

### Columns
<!--rehype:wrap-class=row-span-4-->

用于控制元素中列数的实用程序

:-- | --
:-- | --
`columns-1` | <pur>columns: 1;</pur>
`columns-2` | <pur>columns: 2;</pur>
`columns-3` | <pur>columns: 3;</pur>
`columns-4` | <pur>columns: 4;</pur>
`columns-5` | <pur>columns: 5;</pur>
`columns-6` | <pur>columns: 6;</pur>
`columns-7` | <pur>columns: 7;</pur>
`columns-8` | <pur>columns: 8;</pur>
`columns-9` | <pur>columns: 9;</pur>
`columns-10` | <pur>columns: 10;</pur>
`columns-11` | <pur>columns: 11;</pur>
`columns-12` | <pur>columns: 12;</pur>
`columns-auto` | <pur>columns: auto;</pur>
`columns-3xs` | <pur>columns: 16rem;</pur> /*256px*/
`columns-2xs` | <pur>columns: 18rem;</pur> /*288px*/
`columns-xs` | <pur>columns: 20rem;</pur> /*320px*/
`columns-sm` | <pur>columns: 24rem;</pur> /*384px*/
`columns-md` | <pur>columns: 28rem;</pur> /*448px*/
`columns-lg` | <pur>columns: 32rem;</pur> /*512px*/
`columns-xl` | <pur>columns: 36rem;</pur> /*576px*/
`columns-2xl` | <pur>columns: 42rem;</pur> /*672px*/
`columns-3xl` | <pur>columns: 48rem;</pur> /*768px*/
`columns-4xl` | <pur>columns: 56rem;</pur> /*896px*/
`columns-5xl` | <pur>columns: 64rem;</pur> /*1024px*/
`columns-6xl` | <pur>columns: 72rem;</pur> /*1152px*/
`columns-7xl` | <pur>columns: 80rem;</pur> /*1280px*/
<!--rehype:className=left-align-->

### Break After

用于控制列或页面应如何在元素后断开的实用程序

:-- | --
:-- | --
`break-after-auto` | <pur>break-after: auto;</pur>
`break-after-avoid` | <pur>break-after: avoid;</pur>
`break-after-all` | <pur>break-after: all;</pur>
`break-after-avoid-page` | <pur>break-after: avoid-page;</pur>
`break-after-page` | <pur>break-after: page;</pur>
`break-after-left` | <pur>break-after: left;</pur>
`break-after-right` | <pur>break-after: right;</pur>
`break-after-column` | <pur>break-after: column;</pur>
<!--rehype:className=left-align-->

### Break Before

用于控制列或页面在元素之前应如何中断的实用程序

:-- | --
:-- | --
`break-before-auto` | <pur>break-before: auto;</pur>
`break-before-avoid` | <pur>break-before: avoid;</pur>
`break-before-all` | <pur>break-before: all;</pur>
`break-before-avoid-page` |<pur> break-before: avoid-page;</pur>
`break-before-page` | <pur>break-before: page;</pur>
`break-before-left` | <pur>break-before: left;</pur>
`break-before-right` | <pur>break-before: right;</pur>
`break-before-column` | <pur>break-before: column;</pur>
<!--rehype:className=left-align-->

### Break Inside
<!--rehype:wrap-class=row-span-2-->

用于控制列或页面在元素内的拆分方式的实用程序

:-- | --
:-- | --
`break-inside-auto` | <pur>break-inside: auto;</pur>
`break-inside-avoid` | <pur>break-inside: avoid;</pur>
`break-inside-avoid-page` | <pur>break-inside: avoid-page;</pur>
`break-inside-avoid-column` | <pur>break-inside: avoid-column;</pur>
<!--rehype:className=left-align-->

### Box Decoration Break

用于控制应如何跨多行、多列或多页呈现元素片段的实用程序

:-- | --
:-- | --
`box-decoration-clone` | <pur>box-decoration-break: clone;</pur>
`box-decoration-slice` | <pur>box-decoration-break: slice;</pur>
<!--rehype:className=left-align-->

### Box Sizing

用于控制浏览器应如何计算元素总大小的实用程序

:-- | --
:-- | --
`box-border` | <pur>box-sizing: border-box;</pur>
`box-content` | <pur>box-sizing: content-box;</pur>
<!--rehype:className=left-align-->

### Display
<!--rehype:wrap-class=row-span-3-->

用于控制元素显示框类型的实用程序

:-- | --
:-- | --
`block` | <pur>display: block;</pur>
`inline-block` | <pur>display: inline-block;</pur>
`inline` | <pur>display: inline;</pur>
`flex` | <pur>display: flex;</pur>
`inline-flex` | <pur>display: inline-flex;</pur>
`table` | <pur>display: table;</pur>
`inline-table` | <pur>display: inline-table;</pur>
`table-caption` | <pur>display: table-caption;</pur>
`table-cell` | <pur>display: table-cell;</pur>
`table-column` | <pur>display: table-column;</pur>
`table-column-group` | <pur>display: table-column-group;</pur>
`table-footer-group` | <pur>display: table-footer-group;</pur>
`table-header-group` | <pur>display: table-header-group;</pur>
`table-row-group` | <pur>display: table-row-group;</pur>
`table-row` | <pur>display: table-row;</pur>
`flow-root` | <pur>display: flow-root;</pur>
`grid` | <pur>display: grid;</pur>
`inline-grid` | <pur>display: inline-grid;</pur>
`contents` | <pur>display: contents;</pur>
`list-item` | <pur>display: list-item;</pur>
`hidden` | <pur>display: none;</pur>
<!--rehype:className=left-align-->

### Float

用于控制元素周围内容包装的实用程序

- float-right
- float-left
- float-none
<!--rehype:className=style-none cols-3-->

### Clear

用于控制元素周围内容包装的实用程序

- clear-left
- clear-right
- clear-both
- clear-none
<!--rehype:className=style-none cols-2-->

### Isolation

用于控制元素是否应显式创建新的堆叠上下文的实用程序

:-- | --
:-- | --
isolate | isolation: isolate;
isolation-auto | isolation: auto;

### Object Fit

用于控制如何调整替换元素内容大小的实用程序

- object-contain
- object-cover
- object-fill
- object-none
- object-scale-down
<!--rehype:className=style-none cols-2-->

### Top/Right/Bottom/Left
<!--rehype:wrap-class=col-span-2 row-span-7-->

用于控制定位元素放置的实用程序

- inset-0
- inset-x-0
- inset-y-0
- top-0
- right-0
- bottom-0
- left-0
- inset-px
- inset-x-px
- inset-y-px
- top-px
- right-px
- bottom-px
- left-px
- inset-0.5
- inset-x-0.5
- inset-y-0.5
- top-0.5
- right-0.5
- bottom-0.5
- left-0.5
- inset-1
- inset-x-1
- inset-y-1
- top-1
- right-1
- bottom-1
- left-1
- inset-1.5
- inset-x-1.5
- inset-y-1.5
- top-1.5
- right-1.5
- bottom-1.5
- left-1.5
- inset-2
- inset-x-2
- inset-y-2
- top-2
- right-2
- bottom-2
- left-2
- inset-2.5
- inset-x-2.5
- inset-y-2.5
- top-2.5
- right-2.5
- bottom-2.5
- left-2.5
- inset-3
- inset-x-3
- inset-y-3
- top-3
- right-3
- bottom-3
- left-3
- inset-3.5
- inset-x-3.5
- inset-y-3.5
- top-3.5
- right-3.5
- bottom-3.5
- left-3.5
- inset-4
- inset-x-4
- inset-y-4
- top-4
- right-4
- bottom-4
- left-4
- inset-5
- inset-x-5
- inset-y-5
- top-5
- right-5
- bottom-5
- left-5
- inset-6
- inset-x-6
- inset-y-6
- top-6
- right-6
- bottom-6
- left-6
- inset-7
- inset-x-7
- inset-y-7
- top-7
- right-7
- bottom-7
- left-7
- inset-8
- inset-x-8
- inset-y-8
- top-8
- right-8
- bottom-8
- left-8
- inset-9
- inset-x-9
- inset-y-9
- top-9
- right-9
- bottom-9
- left-9
- inset-10
- inset-x-10
- inset-y-10
- top-10
- right-10
- bottom-10
- left-10
- inset-11
- inset-x-11
- inset-y-11
- top-11
- right-11
- bottom-11
- left-11
- inset-12
- inset-x-12
- inset-y-12
- top-12
- right-12
- bottom-12
- left-12
- inset-14
- inset-x-14
- inset-y-14
- top-14
- right-14
- bottom-14
- left-14
- inset-16
- inset-x-16
- inset-y-16
- top-16
- right-16
- bottom-16
- left-16
- inset-20
- inset-x-20
- inset-y-20
- top-20
- right-20
- bottom-20
- left-20
- inset-24
- inset-x-24
- inset-y-24
- top-24
- right-24
- bottom-24
- left-24
- inset-28
- inset-x-28
- inset-y-28
- top-28
- right-28
- bottom-28
- left-28
- inset-32
- inset-x-32
- inset-y-32
- top-32
- right-32
- bottom-32
- left-32
- inset-36
- inset-x-36
- inset-y-36
- top-36
- right-36
- bottom-36
- left-36
- inset-40
- inset-x-40
- inset-y-40
- top-40
- right-40
- bottom-40
- left-40
- inset-44
- inset-x-44
- inset-y-44
- top-44
- right-44
- bottom-44
- left-44
- inset-48
- inset-x-48
- inset-y-48
- top-48
- right-48
- bottom-48
- left-48
- inset-52
- inset-x-52
- inset-y-52
- top-52
- right-52
- bottom-52
- left-52
- inset-56
- inset-x-56
- inset-y-56
- top-56
- right-56
- bottom-56
- left-56
- inset-60
- inset-x-60
- inset-y-60
- top-60
- right-60
- bottom-60
- left-60
- inset-64
- inset-x-64
- inset-y-64
- top-64
- right-64
- bottom-64
- left-64
- inset-72
- inset-x-72
- inset-y-72
- top-72
- right-72
- bottom-72
- left-72
- inset-80
- inset-x-80
- inset-y-80
- top-80
- right-80
- bottom-80
- left-80
- inset-96
- inset-x-96
- inset-y-96
- top-96
- right-96
- bottom-96
- left-96
- inset-auto
- inset-1/2
- inset-1/3
- inset-2/3
- inset-1/4
- inset-2/4
- inset-3/4
- inset-full
- inset-x-auto
- inset-x-1/2
- inset-x-1/3
- inset-x-2/3
- inset-x-1/4
- inset-x-2/4
- inset-x-3/4
- inset-x-full
- inset-y-auto
- inset-y-1/2
- inset-y-1/3
- inset-y-2/3
- inset-y-1/4
- inset-y-2/4
- inset-y-3/4
- inset-y-full
- top-auto
- top-1/2
- top-1/3
- top-2/3
- top-1/4
- top-2/4
- top-3/4
- top-full
- right-auto
- right-1/2
- right-1/3
- right-2/3
- right-1/4
- right-2/4
- right-3/4
- right-full
- bottom-auto
- bottom-1/2
- bottom-1/3
- bottom-2/3
- bottom-1/4
- bottom-2/4
- bottom-3/4
- bottom-full
- left-auto
- left-1/2
- left-1/3
- left-2/3
- left-1/4
- left-2/4
- left-3/4
- left-full
<!--rehype:className=style-none cols-5-->

### Object Position

用于控制替换元素的内容在其容器中的定位方式的实用程序

- object-bottom
- object-center
- object-left
- object-left-bottom
- object-left-top
- object-right
- object-right-bottom
- object-right-top
- object-top
<!--rehype:className=style-none cols-2-->

### Overflow

用于控制元素如何处理对于容器来说太大的内容的实用程序

- overflow-auto
- overflow-hidden
- overflow-clip
- overflow-visible
- overflow-scroll
- overflow-x-auto
- overflow-y-auto
- overflow-x-hidden
- overflow-y-hidden
- overflow-x-clip
- overflow-y-clip
- overflow-x-visible
- overflow-y-visible
- overflow-x-scroll
- overflow-y-scroll
<!--rehype:className=style-none cols-2-->

### Visibility

用于控制元素可见性的实用程序

- visible
- invisible
- collapse
<!--rehype:className=style-none cols-2-->

### Z-index

用于控制元素堆叠顺序的实用程序

- z-0
- z-10
- z-20
- z-30
- z-40
- z-50
- z-auto
<!--rehype:className=style-none cols-3-->

### Overscroll Behavior

用于控制浏览器到达滚动区域边界时的行为方式的实用程序

- overscroll-auto
- overscroll-contain
- overscroll-none
- overscroll-y-auto
- overscroll-y-contain
- overscroll-y-none
- overscroll-x-auto
- overscroll-x-contain
- overscroll-x-none
<!--rehype:className=style-none cols-2-->

### Position

用于控制元素在 DOM 中的定位方式的实用程序

- static
- fixed
- absolute
- relative
- sticky
<!--rehype:className=style-none cols-3-->

Sizing
---

### Width
<!--rehype:wrap-class=row-span-4-->

用于设置元素宽度的实用程序

- w-0
- w-px
- w-0.5
- w-1
- w-1.5
- w-2
- w-2.5
- w-3
- w-3.5
- w-4
- w-5
- w-6
- w-7
- w-8
- w-9
- w-10
- w-11
- w-12
- w-14
- w-16
- w-20
- w-24
- w-28
- w-32
- w-36
- w-40
- w-44
- w-48
- w-52
- w-56
- w-60
- w-64
- w-72
- w-80
- w-96
- w-auto
- w-1/2
- w-1/3
- w-2/3
- w-1/4
- w-2/4
- w-3/4
- w-1/5
- w-2/5
- w-3/5
- w-4/5
- w-1/6
- w-2/6
- w-3/6
- w-4/6
- w-5/6
- w-1/12
- w-2/12
- w-3/12
- w-4/12
- w-5/12
- w-6/12
- w-7/12
- w-8/12
- w-9/12
- w-10/12
- w-11/12
- w-full
- w-screen
- w-min
- w-max
- w-fit
<!--rehype:className=style-none cols-3-->

### Min-Width

用于设置元素的最小宽度的实用程序

- min-w-0
- min-w-full
- min-w-min
- min-w-max
- min-w-fit
<!--rehype:className=style-none cols-3-->

### Max-Width
<!--rehype:wrap-class=row-span-2-->

用于设置元素最大宽度的实用程序

- max-w-0
- max-w-none
- max-w-xs
- max-w-sm
- max-w-md
- max-w-lg
- max-w-xl
- max-w-2xl
- max-w-3xl
- max-w-4xl
- max-w-5xl
- max-w-6xl
- max-w-7xl
- max-w-full
- max-w-min
- max-w-max
- max-w-fit
- max-w-prose
- max-w-screen-sm
- max-w-screen-md
- max-w-screen-lg
- max-w-screen-xl
- max-w-screen-2xl
<!--rehype:className=style-none cols-2-->

### Height
<!--rehype:wrap-class=row-span-2-->

用于设置元素高度的实用程序

- h-0
- h-px
- h-0.5
- h-1
- h-1.5
- h-2
- h-2.5
- h-3
- h-3.5
- h-4
- h-5
- h-6
- h-7
- h-8
- h-9
- h-10
- h-11
- h-12
- h-14
- h-16
- h-20
- h-24
- h-28
- h-32
- h-36
- h-40
- h-44
- h-48
- h-52
- h-56
- h-60
- h-64
- h-72
- h-80
- h-96
- h-auto
- h-1/2
- h-1/3
- h-2/3
- h-1/4
- h-2/4
- h-3/4
- h-1/5
- h-2/5
- h-3/5
- h-4/5
- h-1/6
- h-2/6
- h-3/6
- h-4/6
- h-5/6
- h-full
- h-screen
- h-min
- h-max
- h-fit
<!--rehype:className=style-none cols-4-->

### Min-Height

用于设置元素的最小高度的实用程序

- min-h-0
- min-h-full
- min-h-screen
- min-h-min
- min-h-max
- min-h-fit
<!--rehype:className=style-none cols-3-->

### Max-Height
<!--rehype:wrap-class=col-span-2-->

用于设置元素最大高度的实用程序

- max-h-0
- max-h-px
- max-h-0.5
- max-h-1
- max-h-1.5
- max-h-2
- max-h-2.5
- max-h-3
- max-h-3.5
- max-h-4
- max-h-5
- max-h-6
- max-h-7
- max-h-8
- max-h-9
- max-h-10
- max-h-11
- max-h-12
- max-h-14
- max-h-16
- max-h-20
- max-h-24
- max-h-28
- max-h-32
- max-h-36
- max-h-40
- max-h-44
- max-h-48
- max-h-52
- max-h-56
- max-h-60
- max-h-64
- max-h-72
- max-h-80
- max-h-96
- max-h-full
- max-h-screen
- max-h-min
- max-h-max
- max-h-fit
<!--rehype:className=style-none cols-6-->

Borders
---

### Border Radius
<!--rehype:wrap-class=row-span-4-->

用于控制元素边界半径的实用程序

- rounded-none
- rounded-sm
- rounded
- rounded-md
- rounded-lg
- rounded-xl
- rounded-2xl
- rounded-3xl
- rounded-full
- rounded-t-none
- rounded-t-sm
- rounded-t
- rounded-t-md
- rounded-t-lg
- rounded-t-xl
- rounded-t-2xl
- rounded-t-3xl
- rounded-t-full
- rounded-r-none
- rounded-r-sm
- rounded-r
- rounded-r-md
- rounded-r-lg
- rounded-r-xl
- rounded-r-2xl
- rounded-r-3xl
- rounded-r-full
- rounded-b-none
- rounded-b-sm
- rounded-b
- rounded-b-md
- rounded-b-lg
- rounded-b-xl
- rounded-b-2xl
- rounded-b-3xl
- rounded-b-full
- rounded-l-none
- rounded-l-sm
- rounded-l
- rounded-l-md
- rounded-l-lg
- rounded-l-xl
- rounded-l-2xl
- rounded-l-3xl
- rounded-l-full
- rounded-tl-none
- rounded-tl-sm
- rounded-tl
- rounded-tl-md
- rounded-tl-lg
- rounded-tl-xl
- rounded-tl-2xl
- rounded-tl-3xl
- rounded-tl-full
- rounded-tr-none
- rounded-tr-sm
- rounded-tr
- rounded-tr-md
- rounded-tr-lg
- rounded-tr-xl
- rounded-tr-2xl
- rounded-tr-3xl
- rounded-tr-full
- rounded-br-none
- rounded-br-sm
- rounded-br
- rounded-br-md
- rounded-br-lg
- rounded-br-xl
- rounded-br-2xl
- rounded-br-3xl
- rounded-br-full
- rounded-bl-none
- rounded-bl-sm
- rounded-bl
- rounded-bl-md
- rounded-bl-lg
- rounded-bl-xl
- rounded-bl-2xl
- rounded-bl-3xl
- rounded-bl-full
<!--rehype:className=style-none cols-2-->

### Border Width

用于控制元素边框宽度的实用程序

- border-0
- border-2
- border-4
- border-8
- border
- border-x-0
- border-x-2
- border-x-4
- border-x-8
- border-x
- border-y-0
- border-y-2
- border-y-4
- border-y-8
- border-y
- border-t-0
- border-t-2
- border-t-4
- border-t-8
- border-t
- border-r-0
- border-r-2
- border-r-4
- border-r-8
- border-r
- border-b-0
- border-b-2
- border-b-4
- border-b-8
- border-b
- border-l-0
- border-l-2
- border-l-4
- border-l-8
- border-l
<!--rehype:className=style-none cols-3-->

### Border Color
<!--rehype:wrap-class=row-span-3-->

用于控制元素边框颜色的实用程序

- border-inherit
- border-current
- border-transparent
- border-black
- border-white
- border-slate-50
- border-slate-100
- border-slate-200
- border-slate-300
- border-slate-400
- border-slate-500
- border-slate-600
- border-slate-700
- border-slate-800
- border-slate-900
- border-gray-50
- border-gray-100
- border-gray-200
- border-gray-300
- border-gray-400
- border-gray-500
- border-gray-600
- border-gray-700
- border-gray-800
- border-gray-900
- border-zinc-50
- border-zinc-100
- border-zinc-200
- border-zinc-300
- border-zinc-400
- border-zinc-500
- border-zinc-600
- border-zinc-700
- border-zinc-800
- border-zinc-900
- border-neutral-50
- border-neutral-100
- border-neutral-200
- border-neutral-300
- border-neutral-400
- border-neutral-500
- border-neutral-600
- border-neutral-700
- border-neutral-800
- border-neutral-900
- border-stone-50
- border-stone-100
- border-stone-200
- border-stone-300
- border-stone-400
- border-stone-500
- border-stone-600
- border-stone-700
- border-stone-800
- border-stone-900
- border-red-50
- border-red-100
- border-red-200
- border-red-300
- border-red-400
- border-red-500
- border-red-600
- border-red-700
- border-red-800
- [...](https://tailwindcss.com/docs/border-color)
<!--rehype:className=style-none cols-2-->

### Border Style

用于控制元素边框样式的实用程序

- border-solid
- border-dashed
- border-dotted
- border-double
- border-hidden
- border-none
<!--rehype:className=style-none cols-2-->

### Divide Width

用于控制元素之间的边框宽度的实用程序

- divide-x-0 > \* + \*
- divide-x-2 > \* + \*
- divide-x-4 > \* + \*
- divide-x-8 > \* + \*
- divide-x > \* + \*
- divide-y-0 > \* + \*
- divide-y-2 > \* + \*
- divide-y-4 > \* + \*
- divide-y-8 > \* + \*
- divide-y > \* + \*
- divide-y-reverse > \* + \*
- divide-x-reverse > \* + \*
<!--rehype:className=style-none cols-2-->

### Divide Color
<!--rehype:wrap-class=col-span-2 row-span-2-->

用于控制元素之间的边框颜色的实用程序

- divide-inherit > \* + \*
- divide-current > \* + \*
- divide-transparent > \* + \*
- divide-black > \* + \*
- divide-white > \* + \*
- divide-slate-50 > \* + \*
- divide-slate-100 > \* + \*
- divide-slate-200 > \* + \*
- divide-slate-300 > \* + \*
- divide-slate-400 > \* + \*
- divide-slate-500 > \* + \*
- divide-slate-600 > \* + \*
- divide-slate-700 > \* + \*
- divide-slate-800 > \* + \*
- divide-slate-900 > \* + \*
- divide-gray-50 > \* + \*
- divide-gray-100 > \* + \*
- divide-gray-200 > \* + \*
- divide-gray-300 > \* + \*
- divide-gray-400 > \* + \*
- divide-gray-500 > \* + \*
- divide-gray-600 > \* + \*
- divide-gray-700 > \* + \*
- divide-gray-800 > \* + \*
- divide-gray-900 > \* + \*
- divide-zinc-50 > \* + \*
- divide-zinc-100 > \* + \*
- divide-zinc-200 > \* + \*
- divide-zinc-300 > \* + \*
- divide-zinc-400 > \* + \*
- divide-zinc-500 > \* + \*
- divide-zinc-600 > \* + \*
- divide-zinc-700 > \* + \*
- divide-zinc-800 > \* + \*
- divide-zinc-900 > \* + \*
- [<kbd>...</kbd>](https://tailwindcss.com/docs/divide-color)
<!--rehype:className=style-none cols-3-->

### Divide Style

用于控制元素之间的边框样式的实用程序

- divide-solid > \* + \*
- divide-dashed > \* + \*
- divide-dotted > \* + \*
- divide-double > \* + \*
- divide-none > \* + \*
<!--rehype:className=style-none cols-2-->

### Outline Width

用于控制元素轮廓宽度的实用程序

- outline-0
- outline-1
- outline-2
- outline-4
- outline-8
<!--rehype:className=style-none cols-3-->

### Outline Color
<!--rehype:wrap-class=row-span-2-->

用于控制元素轮廓颜色的实用程序

- outline-inherit
- outline-current
- outline-transparent
- outline-black
- outline-white
- outline-slate-50
- outline-slate-100
- outline-slate-200
- outline-slate-300
- outline-slate-400
- outline-slate-500
- outline-slate-600
- outline-slate-700
- outline-slate-800
- outline-slate-900
- outline-gray-50
- outline-gray-100
- [<kbd>...</kbd>](https://tailwindcss.com/docs/outline-color)
<!--rehype:className=cols-2 style-none-->

### Outline Style

用于控制元素轮廓样式的实用程序

- outline-none
- outline
- outline-dashed
- outline-dotted
- outline-double
<!--rehype:className=cols-2 style-none-->

### Outline Offset

用于控制元素轮廓偏移的实用程序

- outline-offset-0
- outline-offset-1
- outline-offset-2
- outline-offset-4
- outline-offset-8
<!--rehype:className=cols-2 style-none-->

### Ring Width

用于创建带有框阴影的轮廓环的实用程序

- ring-0
- ring-1
- ring-2
- ring
- ring-4
- ring-8
- ring-inset
<!--rehype:className=cols-3 style-none-->

### Ring Color

用于设置轮廓环颜色的实用程序

- ring-inherit
- ring-current
- ring-transparent
- ring-black
- ring-white
- ring-slate-50
- ring-slate-100
- ring-slate-200
- ring-slate-300
- ring-slate-400
- ring-slate-500
- ring-slate-600
- ring-slate-700
- ring-slate-800
- ring-slate-900
- ring-gray-50
- ring-gray-100
- ring-gray-200
- ring-gray-300
- ring-gray-400
- ring-gray-500
- ring-gray-600
- ring-gray-700
- ring-gray-800
- [<kbd>...</kbd>](https://tailwindcss.com/docs/ring-color)
<!--rehype:className=cols-3 style-none-->

### Ring Offset Width

添加轮廓环时模拟偏移的实用程序

- ring-offset-0
- ring-offset-1
- ring-offset-2
- ring-offset-4
- ring-offset-8
<!--rehype:className=cols-3 style-none-->

### Ring Offset Color

用于设置轮廓环偏移颜色的实用程序

- ring-offset-inherit
- ring-offset-current
- ring-offset-transparent
- ring-offset-black
- ring-offset-white
- ring-offset-slate-50
- ring-offset-slate-100
- ring-offset-slate-200
- ring-offset-slate-300
- ring-offset-slate-400
- ring-offset-slate-500
- ring-offset-slate-600
- ring-offset-slate-700
- ring-offset-slate-800
- ring-offset-slate-900
- ring-offset-gray-50
- ring-offset-gray-100
- ring-offset-gray-200
- ring-offset-gray-300
- ring-offset-gray-400
- ring-offset-gray-500
- [<kbd>...</kbd>](https://tailwindcss.com/docs/ring-offset-color)
<!--rehype:className=cols-2 style-none-->

Transitions & Animation
---

### Transition Property

用于控制哪些 CSS 属性转换的实用程序

- transition-none
- transition-all
- transition
- transition-colors
- transition-opacity
- transition-shadow
- transition-transform
<!--rehype:className=cols-2 style-none-->

### Transition Duration

用于控制 CSS 过渡持续时间的实用程序

- duration-75
- duration-100
- duration-150
- duration-200
- duration-300
- duration-500
- duration-700
- duration-1000
<!--rehype:className=cols-2 style-none-->

### Transition Timing Function

用于控制 CSS 过渡缓动的实用程序

- ease-linear
- ease-in
- ease-out
- ease-in-out
<!--rehype:className=cols-2 style-none-->

### Transition Delay

用于控制 CSS 转换延迟的实用程序

- delay-75
- delay-100
- delay-150
- delay-200
- delay-300
- delay-500
- delay-700
- delay-1000
<!--rehype:className=cols-3 style-none-->

### Animation

使用 CSS 动画对元素进行动画处理的实用程序

- animate-none
- animate-spin
- animate-ping
- animate-pulse
- animate-bounce
<!--rehype:className=cols-2 style-none-->

Tables
---

### Border Collapse

- border-collapse
- border-separate
<!--rehype:className=cols-2 style-none-->

用于控制表格边框是折叠还是分开的实用程序

### Border Spacing
<!--rehype:wrap-class=row-span-2 col-span-2-->

用于控制表格边框间距的实用程序

- border-spacing-0
- border-spacing-x-0
- border-spacing-y-0
- border-spacing-px
- border-spacing-x-px
- border-spacing-y-px
- border-spacing-0.5
- border-spacing-x-0.5
- border-spacing-y-0.5
- border-spacing-1
- border-spacing-x-1
- border-spacing-y-1
- border-spacing-1.5
- border-spacing-x-1.5
- border-spacing-y-1.5
- border-spacing-2
- border-spacing-x-2
- border-spacing-y-2
- border-spacing-2.5
- border-spacing-x-2.5
- border-spacing-y-2.5
- border-spacing-3
- border-spacing-x-3
- border-spacing-y-3
- border-spacing-3.5
- [<kbd>...</kbd>](https://tailwindcss.com/docs/border-spacing)
<!--rehype:className=cols-3 style-none-->

### Table Layout

- table-auto
- table-fixed
<!--rehype:className=cols-2 style-none-->

用于控制表布局算法的实用程序

Backgrounds
---

### Background Attachment

用于控制背景图像在滚动时的行为方式的实用程序

- bg-fixed
- bg-local
- bg-scroll
<!--rehype:className=cols-2 style-none-->

### Background Color
<!--rehype:wrap-class=row-span-2 col-span-2-->

用于控制元素背景颜色的实用程序

- bg-inherit
- bg-current
- bg-transparent
- bg-black
- bg-white
- bg-slate-50
- bg-slate-100
- bg-slate-200
- bg-slate-300
- bg-slate-400
- bg-slate-500
- bg-slate-600
- bg-slate-700
- bg-slate-800
- bg-slate-900
- bg-gray-50
- bg-gray-100
- bg-gray-200
- bg-gray-300
- bg-gray-400
- bg-gray-500
- bg-gray-600
- [<kbd>...</kbd>](https://tailwindcss.com/docs/background-color)
<!--rehype:className=cols-4 style-none-->

### Background Clip

用于控制元素背景边界框的实用程序

- bg-clip-border
- bg-clip-padding
- bg-clip-content
- bg-clip-text
<!--rehype:className=cols-2 style-none-->

### Background Origin

用于控制元素背景相对于边框、填充和内容的定位方式的实用程序

- bg-origin-border
- bg-origin-padding
- bg-origin-content
<!--rehype:className=cols-2 style-none-->

### Background Position

用于控制元素背景图像位置的实用程序

- bg-bottom
- bg-center
- bg-left
- bg-left-bottom
- bg-left-top
- bg-right
- bg-right-bottom
- bg-right-top
- bg-top
<!--rehype:className=cols-2 style-none-->

### Background Repeat

用于控制元素背景图像重复的实用程序

- bg-repeat
- bg-no-repeat
- bg-repeat-x
- bg-repeat-y
- bg-repeat-round
- bg-repeat-space
<!--rehype:className=cols-2 style-none-->

### Background Size

用于控制元素背景图像的背景大小的实用程序

- bg-auto
- bg-cover
- bg-contain
<!--rehype:className=cols-2 style-none-->

### Gradient Color Stops
<!--rehype:wrap-class=row-span-2 col-span-2-->

用于控制背景渐变色标的实用程序

- from-inherit
- from-current
- from-transparent
- from-black
- from-white
- from-slate-50
- from-slate-100
- from-slate-200
- from-slate-300
- from-slate-400
- from-slate-500
- from-slate-600
- from-slate-700
- from-slate-800
- from-slate-900
- from-gray-50
- from-gray-100
- from-gray-200
- [<kbd>...</kbd>](https://tailwindcss.com/docs/gradient-color-stops)
<!--rehype:className=cols-4 style-none-->

### Background Image

用于控制元素背景图像的实用程序

- bg-none
- bg-gradient-to-t
- bg-gradient-to-tr
- bg-gradient-to-r
- bg-gradient-to-br
- bg-gradient-to-b
- bg-gradient-to-bl
- bg-gradient-to-l
- bg-gradient-to-tl
<!--rehype:className=cols-2 style-none-->

Spacing
---

### Padding

用于控制元素填充的实用程序

- p-0
- px-0
- py-0
- pt-0
- pr-0
- pb-0
- pl-0
- p-px
- px-px
- py-px
- pt-px
- pr-px
- pb-px
- pl-px
- p-0.5
- px-0.5
- py-0.5
- pt-0.5
- pr-0.5
- pb-0.5
- pl-0.5
- [<kbd>...</kbd>](https://tailwindcss.com/docs/padding)
<!--rehype:className=cols-3 style-none-->

### Margin

用于控制元素边距的实用程序

- m-0
- mx-0
- my-0
- mt-0
- mr-0
- mb-0
- ml-0
- m-px
- mx-px
- my-px
- mt-px
- mr-px
- mb-px
- ml-px
- m-0.5
- mx-0.5
- my-0.5
- mt-0.5
- mr-0.5
- mb-0.5
- ml-0.5
- [<kbd>...</kbd>](https://tailwindcss.com/docs/margin)
<!--rehype:className=cols-3 style-none-->

### Space Between

用于控制子元素之间空间的实用程序

- space-x-0 > \* + \*
- space-y-0 > \* + \*
- space-x-0.5 > \* + \*
- space-y-0.5 > \* + \*
- space-x-1 > \* + \*
- space-y-1 > \* + \*
- space-x-1.5 > \* + \*
- space-y-1.5 > \* + \*
- space-x-2 > \* + \*
- space-y-2 > \* + \*
- space-x-2.5 > \* + \*
- space-y-2.5 > \* + \*
- space-x-3 > \* + \*
- space-y-3 > \* + \*
- space-x-3.5 > \* + \*
- space-y-3.5 > \* + \*
- space-x-4 > \* + \*
- space-y-4 > \* + \*
- space-x-5 > \* + \*
- space-y-5 > \* + \*
- space-x-6 > \* + \*
- space-y-6 > \* + \*
- space-x-7 > \* + \*
- space-y-7 > \* + \*
- [<kbd>...</kbd>](https://tailwindcss.com/docs/space)
<!--rehype:className=cols-2 style-none-->

SVG
---

### Fill

用于样式化 SVG 元素填充的实用程序

- fill-none
- fill-inherit
- fill-current
- fill-transparent
- fill-black
- fill-white
- fill-slate-50
- fill-slate-100
- fill-slate-200
- fill-slate-300
- fill-slate-400
- fill-slate-500
- fill-slate-600
- fill-slate-700
- fill-slate-800
- fill-slate-900
- fill-gray-50
- fill-gray-100
- [<kbd>...</kbd>](https://tailwindcss.com/docs/fill)
<!--rehype:className=cols-2 style-none-->

### Stroke

用于设置 SVG 元素笔划样式的实用程序

- stroke-none
- stroke-inherit
- stroke-current
- stroke-transparent
- stroke-black
- stroke-white
- stroke-slate-50
- stroke-slate-100
- stroke-slate-200
- stroke-slate-300
- stroke-slate-400
- stroke-slate-500
- stroke-slate-600
- stroke-slate-700
- stroke-slate-800
- stroke-slate-900
- stroke-gray-50
- stroke-gray-100
- [<kbd>...</kbd>](https://tailwindcss.com/docs/fill)
<!--rehype:className=cols-2 style-none-->

### Stroke Width

用于设置 SVG 元素笔划宽度样式的实用程序

- stroke-0
- stroke-1
- stroke-2

Typography
---

### Font Family
<!--rehype:wrap-class=row-span-2-->

用于控制元素字体系列的实用程序

- font-sans
- font-serif
- font-mono
<!--rehype:className=cols-3 style-none-->

### Font Size
<!--rehype:wrap-class=row-span-2-->

用于控制元素字体大小的实用程序

- text-xs
- text-sm
- text-base
- text-lg
- text-xl
- text-2xl
- text-3xl
- text-4xl
- text-5xl
- text-6xl
- text-7xl
- text-8xl
- text-9xl
<!--rehype:className=cols-3 style-none-->

### Font Smoothing

用于控制元素字体平滑的实用程序

- antialiased
- subpixel-antialiased
<!--rehype:className=cols-2 style-none-->

### Font Style

用于控制文本样式的实用程序

- italic
- not-italic
<!--rehype:className=cols-2 style-none-->

### Font Weight

用于控制元素字体粗细的实用程序

- font-thin
- font-extralight
- font-light
- font-normal
- font-medium
- font-semibold
- font-bold
- font-extrabold
- font-black
<!--rehype:className=cols-2 style-none-->

### Font Variant Numeric

用于控制数字变体的实用程序

- normal-nums
- ordinal
- slashed-zero
- lining-nums
- oldstyle-nums
- proportional-nums
- tabular-nums
- diagonal-fractions
- stacked-fractions
<!--rehype:className=cols-2 style-none-->

### Letter Spacing

用于控制元素的跟踪（字母间距）的实用程序

- tracking-tighter
- tracking-tight
- tracking-normal
- tracking-wide
- tracking-wider
- tracking-widest
<!--rehype:className=cols-2 style-none-->

### Line Height
<!--rehype:wrap-class=row-span-2-->

用于控制元素行距（行高）的实用程序

- leading-3
- leading-4
- leading-5
- leading-6
- leading-7
- leading-8
- leading-9
- leading-10
- leading-none
- leading-tight
- leading-snug
- leading-normal
- leading-relaxed
- leading-loose
<!--rehype:className=cols-2 style-none-->

### List Style Type

用于控制列表的项目符号/编号样式的实用程序

- list-none
- list-disc
- list-decimal
<!--rehype:className=cols-3 style-none-->

### List Style Position

用于控制列表中项目符号/编号位置的实用程序

- list-inside
- list-outside
<!--rehype:className=cols-2 style-none-->

### Text Align

用于控制文本对齐的实用程序

- text-left
- text-center
- text-right
- text-justify
- text-start
- text-end
<!--rehype:className=cols-3 style-none-->

### Text Decoration

用于控制文本装饰的实用程序

- underline
- overline
- line-through
- no-underline
<!--rehype:className=cols-2 style-none-->

### Text Color
<!--rehype:wrap-class=row-span-2-->

用于控制元素文本颜色的实用程序

- text-inherit
- text-current
- text-transparent
- text-black
- text-white
- text-slate-50
- text-slate-100
- text-slate-200
- text-slate-300
- text-slate-400
- text-slate-500
- text-slate-600
- text-slate-700
- text-slate-800
- text-slate-900
- text-gray-50
- text-gray-100
- text-gray-200
- text-gray-300
- text-gray-400
- text-gray-500
- [<kbd>...</kbd>](https://tailwindcss.com/docs/text-color)
<!--rehype:className=cols-2 style-none-->

### Text Decoration Color
<!--rehype:wrap-class=row-span-2-->

用于控制文本装饰颜色的实用程序

- decoration-inherit
- decoration-current
- decoration-transparent
- decoration-black
- decoration-white
- decoration-slate-50
- decoration-slate-100
- decoration-slate-200
- decoration-slate-300
- decoration-slate-400
- decoration-slate-500
- decoration-slate-600
- decoration-slate-700
- decoration-slate-800
- decoration-slate-900
- decoration-gray-50
- decoration-gray-100
- decoration-gray-200
- decoration-gray-300
- decoration-gray-400
- decoration-gray-500
- [<kbd>...</kbd>](https://tailwindcss.com/docs/text-decoration-color)
<!--rehype:className=cols-2 style-none-->

### Text Decoration Style

用于控制文本装饰样式的实用程序

- decoration-solid
- decoration-double
- decoration-dotted
- decoration-dashed
- decoration-wavy
<!--rehype:className=cols-2 style-none-->

### Text Decoration Thickness

用于控制文本装饰厚度的实用程序

- decoration-auto
- decoration-from-font
- decoration-0
- decoration-1
- decoration-2
- decoration-4
- decoration-8
<!--rehype:className=cols-2 style-none-->

### Text Underline Offset

用于控制文本下划线偏移量的实用程序

- underline-offset-auto
- underline-offset-0
- underline-offset-1
- underline-offset-2
- underline-offset-4
- underline-offset-8
<!--rehype:className=cols-2 style-none-->

### Text Transform

用于控制文本转换的实用程序

- uppercase
- lowercase
- capitalize
- normal-case
<!--rehype:className=cols-2 style-none-->

### Text Overflow

用于控制元素中文本溢出的实用程序

- truncate
- text-ellipsis
- text-clip
<!--rehype:className=cols-2 style-none-->

### Text Indent
<!--rehype:wrap-class=row-span-2-->

用于控制块中文本前显示的空白空间量的实用程序

- indent-0
- indent-px
- indent-0.5
- indent-1
- indent-1.5
- indent-2
- indent-2.5
- indent-3
- indent-3.5
- indent-4
- indent-5
- indent-6
- indent-7
- indent-8
- indent-9
- indent-10
- indent-11
- indent-12
- indent-14
- indent-16
- indent-20
- indent-24
- indent-28
- indent-32
- indent-36
- indent-40
- indent-44
- indent-48
- indent-52
- indent-56
- indent-60
- indent-64
- indent-72
- indent-80
- indent-96
<!--rehype:className=cols-4 style-none-->

### Vertical Align

用于控制内联或表格单元格框的垂直对齐的实用程序

- align-baseline
- align-top
- align-middle
- align-bottom
- align-text-top
- align-text-bottom
- align-sub
- align-super
<!--rehype:className=cols-2 style-none-->

### Whitespace

用于控制元素的空白属性的实用程序

- whitespace-normal
- whitespace-nowrap
- whitespace-pre
- whitespace-pre-line
- whitespace-pre-wrap
<!--rehype:className=cols-2 style-none-->

### Word Break

用于控制元素中的分词的实用程序

- break-normal
- break-words
- break-all
- break-keep
<!--rehype:className=cols-2 style-none-->

### Content

用于控制前后伪元素内容的实用程序

- content-none
<!--rehype:className=cols-2 style-none-->

Transforms
---

### Scale

使用变换缩放元素的实用程序

- scale-0
- scale-x-0
- scale-y-0
- scale-50
- scale-x-50
- scale-y-50
- scale-75
- scale-x-75
- scale-y-75
- scale-90
- scale-x-90
- scale-y-90
- scale-95
- scale-x-95
- scale-y-95
- scale-100
- scale-x-100
- scale-y-100
- scale-105
- scale-x-105
- scale-y-105
- scale-110
- scale-x-110
- scale-y-110
- scale-125
- scale-x-125
- scale-y-125
- scale-150
- scale-x-150
- scale-y-150
<!--rehype:className=cols-2 style-none-->

### Rotate

使用变换旋转元素的实用程序

- rotate-0
- rotate-1
- rotate-2
- rotate-3
- rotate-6
- rotate-12
- rotate-45
- rotate-90
- rotate-180
<!--rehype:className=cols-3 style-none-->

### Translate
<!--rehype:wrap-class=row-span-2-->

使用 transform 翻译元素的实用程序

- translate-x-0
- translate-y-0
- translate-x-px
- translate-y-px
- translate-x-0.5
- translate-y-0.5
- translate-x-1
- translate-y-1
- translate-x-1.5
- translate-y-1.5
- translate-x-2
- translate-y-2
- translate-x-2.5
- translate-y-2.5
- translate-x-3
- translate-y-3
- translate-x-3.5
- translate-y-3.5
- translate-x-4
- translate-y-4
- translate-x-5
- translate-y-5
- translate-x-6
- translate-y-6
- translate-x-7
- translate-y-7
- translate-x-8
- translate-y-8
- translate-x-9
- translate-y-9
- translate-x-10
- translate-y-10
- translate-x-11
- translate-y-11
- translate-x-12
- translate-y-12
- translate-x-14
- translate-y-14
- translate-x-16
- translate-y-16
- translate-x-20
- translate-y-20
- translate-x-24
- translate-y-24
- translate-x-28
- translate-y-28
- translate-x-32
- translate-y-32
- translate-x-36
- translate-y-36
- translate-x-40
- translate-y-40
- translate-x-44
- translate-y-44
- translate-x-48
- translate-y-48
- translate-x-52
- translate-y-52
- translate-x-56
- translate-y-56
- translate-x-60
- translate-y-60
- translate-x-64
- translate-y-64
- translate-x-72
- translate-y-72
- translate-x-80
- translate-y-80
- translate-x-96
- translate-y-96
- translate-x-1/2
- translate-x-1/3
- translate-x-2/3
- translate-x-1/4
- translate-x-2/4
- translate-x-3/4
- translate-x-full
- translate-y-1/2
- translate-y-1/3
- translate-y-2/3
- translate-y-1/4
- translate-y-2/4
- translate-y-3/4
- translate-y-full
<!--rehype:className=cols-3 style-none-->

### Skew

使用变换倾斜元素的实用程序

- skew-x-0
- skew-y-0
- skew-x-1
- skew-y-1
- skew-x-2
- skew-y-2
- skew-x-3
- skew-y-3
- skew-x-6
- skew-y-6
- skew-x-12
- skew-y-12
<!--rehype:className=cols-2 style-none-->

### Transform Origin

用于指定元素转换原点的实用程序

- origin-center
- origin-top
- origin-top-right
- origin-right
- origin-bottom-right
- origin-bottom
- origin-bottom-left
- origin-left
- origin-top-left
<!--rehype:className=cols-2 style-none-->

Interactivity
---

### Accent Color
<!--rehype:wrap-class=col-span-2 row-span-2-->

用于控制表单控件强调色的实用程序

- accent-inherit
- accent-current
- accent-transparent
- accent-black
- accent-white
- accent-slate-50
- accent-slate-100
- accent-slate-200
- accent-slate-300
- accent-slate-400
- accent-slate-500
- accent-slate-600
- accent-slate-700
- accent-slate-800
- accent-slate-900
- accent-gray-50
- accent-gray-100
- accent-gray-200
- accent-gray-300
- accent-gray-400
- accent-gray-500
- accent-gray-600
- [<kbd>...</kbd>](https://tailwindcss.com/docs/text-decoration-color)
<!--rehype:className=cols-4 style-none-->

### Appearance

用于抑制本机表单控件样式的实用程序

- appearance-none

### Pointer Events

用于控制元素是否响应指针事件的实用程序

- pointer-events-none
- pointer-events-auto
<!--rehype:className=cols-2 style-none-->

### Cursor
<!--rehype:wrap-class=row-span-5-->

将鼠标悬停在元素上时控制光标样式的实用程序

- cursor-auto
- cursor-default
- cursor-pointer
- cursor-wait
- cursor-text
- cursor-move
- cursor-help
- cursor-not-allowed
- cursor-none
- cursor-context-menu
- cursor-progress
- cursor-cell
- cursor-crosshair
- cursor-vertical-text
- cursor-alias
- cursor-copy
- cursor-no-drop
- cursor-grab
- cursor-grabbing
- cursor-all-scroll
- cursor-col-resize
- cursor-row-resize
- cursor-n-resize
- cursor-e-resize
- cursor-s-resize
- cursor-w-resize
- cursor-ne-resize
- cursor-nw-resize
- cursor-se-resize
- cursor-sw-resize
- cursor-ew-resize
- cursor-ns-resize
- cursor-nesw-resize
- cursor-nwse-resize
- cursor-zoom-in
- cursor-zoom-out
<!--rehype:className=cols-2 style-none-->

### Caret Color
<!--rehype:wrap-class=row-span-5-->

用于控制文本输入光标颜色的实用程序

- caret-inherit
- caret-current
- caret-transparent
- caret-black
- caret-white
- caret-slate-50
- caret-slate-100
- caret-slate-200
- caret-slate-300
- caret-slate-400
- caret-slate-500
- caret-slate-600
- caret-slate-700
- caret-slate-800
- caret-slate-900
- caret-gray-50
- caret-gray-100
- caret-gray-200
- caret-gray-300
- caret-gray-400
- caret-gray-500
- caret-gray-600
- caret-gray-700
- caret-gray-800
- caret-gray-900
- caret-zinc-50
- caret-zinc-100
- caret-zinc-200
- caret-zinc-300
- caret-zinc-400
- caret-zinc-500
- caret-zinc-600
- caret-zinc-700
- caret-zinc-800
- caret-zinc-900
- caret-neutral-50
- caret-neutral-100
- caret-neutral-200
- caret-neutral-300
- caret-neutral-400
- caret-neutral-500
- caret-neutral-600
- caret-neutral-700
- caret-neutral-800
- [<kbd>...</kbd>](https://tailwindcss.com/docs/caret-color)
<!--rehype:className=cols-2 style-none-->

### Resize

用于控制如何调整元素大小的实用程序

- resize-none
- resize-y
- resize-x
- resize
<!--rehype:className=cols-2 style-none-->

### Scroll Behavior

用于控制元素滚动行为的实用程序

- scroll-auto
- scroll-smooth
<!--rehype:className=cols-2 style-none-->

### Scroll Snap Align

用于控制元素的滚动对齐对齐的实用程序

- snap-start
- snap-end
- snap-center
- snap-align-none
<!--rehype:className=cols-2 style-none-->

### Scroll Snap Stop

用于控制您是否可以跳过可能的对齐位置的实用程序

- snap-normal
- snap-always
<!--rehype:className=cols-2 style-none-->

### Scroll Snap Type

用于控制在捕捉容器中强制执行捕捉点的严格程度的实用程序

- snap-none
- snap-x
- snap-y
- snap-both
- snap-mandatory
- snap-proximity
<!--rehype:className=cols-2 style-none-->

### Scroll Margin
<!--rehype:wrap-class=row-span-3-->

用于控制快照容器中项目周围滚动偏移的实用程序

- scroll-m-0
- scroll-mx-0
- scroll-my-0
- scroll-mt-0
- scroll-mr-0
- scroll-mb-0
- scroll-ml-0
- scroll-m-px
- scroll-mx-px
- scroll-my-px
- scroll-mt-px
- scroll-mr-px
- scroll-mb-px
- scroll-ml-px
- scroll-m-0.5
- scroll-mx-0.5
- scroll-my-0.5
- scroll-mt-0.5
- scroll-mr-0.5
- scroll-mb-0.5
- scroll-ml-0.5
- scroll-m-1
- scroll-mx-1
- scroll-my-1
- scroll-mt-1
- scroll-mr-1
- scroll-mb-1
- scroll-ml-1
- [<kbd>...</kbd>](https://tailwindcss.com/docs/scroll-margin)
<!--rehype:className=cols-2 style-none-->

### Scroll Padding
<!--rehype:wrap-class=row-span-3-->

用于控制元素在 snap 容器中的滚动偏移的实用程序

- scroll-p-0
- scroll-px-0
- scroll-py-0
- scroll-pt-0
- scroll-pr-0
- scroll-pb-0
- scroll-pl-0
- scroll-p-px
- scroll-px-px
- scroll-py-px
- scroll-pt-px
- scroll-pr-px
- scroll-pb-px
- scroll-pl-px
- scroll-p-0.5
- scroll-px-0.5
- scroll-py-0.5
- scroll-pt-0.5
- scroll-pr-0.5
- scroll-pb-0.5
- scroll-pl-0.5
- scroll-p-1
- scroll-px-1
- scroll-py-1
- scroll-pt-1
- scroll-pr-1
- scroll-pb-1
- scroll-pl-1
- [<kbd>...</kbd>](https://tailwindcss.com/docs/scroll-padding)
<!--rehype:className=cols-2 style-none-->

### Touch Action

用于控制元素如何在触摸屏上滚动和缩放的实用程序

- touch-auto
- touch-none
- touch-pan-x
- touch-pan-left
- touch-pan-right
- touch-pan-y
- touch-pan-up
- touch-pan-down
- touch-pinch-zoom
- touch-manipulation
<!--rehype:className=cols-2 style-none-->

### User Select

用于控制用户是否可以选择元素中的文本的实用程序

- select-none
- select-text
- select-all
- select-auto
<!--rehype:className=cols-2 style-none-->

### Will Change

用于优化即将发生变化的元素动画的实用程序

- will-change-auto
- will-change-scroll
- will-change-contents
- will-change-transform
<!--rehype:className=cols-2 style-none-->

Filters
---

### Blur

将模糊滤镜应用于元素的实用程序

- blur-none
- blur-sm
- blur
- blur-md
- blur-lg
- blur-xl
- blur-2xl
- blur-3xl
<!--rehype:className=cols-3 style-none-->

### Brightness

将亮度过滤器应用于元素的实用程序

- brightness-0
- brightness-50
- brightness-75
- brightness-90
- brightness-95
- brightness-100
- brightness-105
- brightness-110
- brightness-125
- brightness-150
- brightness-200
<!--rehype:className=cols-2 style-none-->

### Contrast

用于将对比滤镜应用于元素的实用程序

- contrast-0
- contrast-50
- contrast-75
- contrast-100
- contrast-125
- contrast-150
- contrast-200
<!--rehype:className=cols-3 style-none-->

### Drop Shadow

用于将阴影滤镜应用于元素的实用程序

- drop-shadow-sm
- drop-shadow
- drop-shadow-md
- drop-shadow-lg
- drop-shadow-xl
- drop-shadow-2xl
- drop-shadow-none
<!--rehype:className=cols-2 style-none-->

### Grayscale

用于将灰度滤镜应用于元素的实用程序

- grayscale-0
- grayscale
<!--rehype:className=cols-2 style-none-->

### Hue Rotate

用于将色调旋转滤镜应用于元素的实用程序

- hue-rotate-0
- hue-rotate-15
- hue-rotate-30
- hue-rotate-60
- hue-rotate-90
- hue-rotate-180
<!--rehype:className=cols-2 style-none-->

### Invert

用于将反转过滤器应用于元素的实用程序

- invert-0
- invert
<!--rehype:className=cols-2 style-none-->

### Saturate

用于将饱和过滤器应用于元素的实用程序

- saturate-0
- saturate-50
- saturate-100
- saturate-150
- saturate-200
<!--rehype:className=cols-3 style-none-->

### Sepia

将棕褐色滤镜应用于元素的实用程序

- sepia-0
- sepia
<!--rehype:className=cols-2 style-none-->

### Backdrop Blur

将背景模糊滤镜应用于元素的实用程序

- backdrop-blur-none
- backdrop-blur-sm
- backdrop-blur
- backdrop-blur-md
- backdrop-blur-lg
- backdrop-blur-xl
- backdrop-blur-2xl
- backdrop-blur-3xl
<!--rehype:className=cols-2 style-none-->

### Backdrop Brightness
<!--rehype:wrap-class=row-span-2-->

将背景亮度滤镜应用于元素的实用程序

- backdrop-brightness-0
- backdrop-brightness-50
- backdrop-brightness-75
- backdrop-brightness-90
- backdrop-brightness-95
- backdrop-brightness-100
- backdrop-brightness-105
- backdrop-brightness-110
- backdrop-brightness-125
- backdrop-brightness-150
- backdrop-brightness-200

### Backdrop Contrast

用于将背景对比度滤镜应用于元素的实用程序

- backdrop-contrast-0
- backdrop-contrast-50
- backdrop-contrast-75
- backdrop-contrast-100
- backdrop-contrast-125
- backdrop-contrast-150
- backdrop-contrast-200
<!--rehype:className=cols-2 style-none-->

### Backdrop Grayscale

用于将背景灰度滤镜应用于元素的实用程序

- backdrop-grayscale-0
- backdrop-grayscale
<!--rehype:className=cols-2 style-none-->

### Backdrop Hue Rotate

将背景色调旋转滤镜应用于元素的实用程序

- backdrop-hue-rotate-0
- backdrop-hue-rotate-15
- backdrop-hue-rotate-30
- backdrop-hue-rotate-60
- backdrop-hue-rotate-90
- backdrop-hue-rotate-180
<!--rehype:className=cols-2 style-none-->

### Backdrop Invert

将背景反转滤镜应用于元素的实用程序

- backdrop-invert-0
- backdrop-invert
<!--rehype:className=cols-2 style-none-->

### Backdrop Opacity
<!--rehype:wrap-class=row-span-2-->

用于将背景不透明度过滤器应用于元素的实用程序

- backdrop-opacity-0
- backdrop-opacity-5
- backdrop-opacity-10
- backdrop-opacity-20
- backdrop-opacity-25
- backdrop-opacity-30
- backdrop-opacity-40
- backdrop-opacity-50
- backdrop-opacity-60
- backdrop-opacity-70
- backdrop-opacity-75
- backdrop-opacity-80
- backdrop-opacity-90
- backdrop-opacity-95
- backdrop-opacity-100
<!--rehype:className=cols-2 style-none-->

### Backdrop Saturate

用于将背景饱和度滤镜应用于元素的实用程序

- backdrop-saturate-0
- backdrop-saturate-50
- backdrop-saturate-100
- backdrop-saturate-150
- backdrop-saturate-200
<!--rehype:className=cols-2 style-none-->

### Backdrop Sepia

将背景棕褐色过滤器应用于元素的实用程序

- backdrop-sepia-0
- backdrop-sepia
<!--rehype:className=cols-2 style-none-->

Flexbox & Grid
---

### Flex Basis
<!--rehype:wrap-class=col-span-2 row-span-4-->

用于控制弹性项目初始大小的实用程序

- basis-0
- basis-1
- basis-2
- basis-3
- basis-4
- basis-5
- basis-6
- basis-7
- basis-8
- basis-9
- basis-10
- basis-11
- basis-12
- basis-14
- basis-16
- basis-20
- basis-24
- basis-28
- basis-32
- basis-36
- basis-40
- basis-44
- basis-48
- basis-52
- basis-56
- basis-60
- basis-64
- basis-72
- basis-80
- basis-96
- basis-auto
- basis-px
- basis-0.5
- basis-1.5
- basis-2.5
- basis-3.5
- basis-1/2
- basis-1/3
- basis-2/3
- basis-1/4
- basis-2/4
- basis-3/4
- basis-1/5
- basis-2/5
- basis-3/5
- basis-4/5
- basis-1/6
- basis-2/6
- basis-3/6
- basis-4/6
- basis-5/6
- basis-1/12
- basis-2/12
- basis-3/12
- basis-4/12
- basis-5/12
- basis-6/12
- basis-7/12
- basis-8/12
- basis-9/12
- basis-10/12
- basis-11/12
- basis-full
<!--rehype:className=cols-5 style-none-->

### Flex Direction

用于控制弹性项目方向的实用程序

- flex-row
- flex-row-reverse
- flex-col
- flex-col-reverse
<!--rehype:className=cols-2 style-none-->

### Flex Wrap

用于控制弹性项目包装方式的实用程序

- flex-wrap
- flex-wrap-reverse
- flex-nowrap
<!--rehype:className=cols-2 style-none-->

### Flex

用于控制弹性项目如何增长和收缩的实用程序

- flex-1
- flex-auto
- flex-initial
- flex-none
<!--rehype:className=cols-4 style-none-->

### Flex Grow

用于控制弹性项目增长方式的实用程序

- grow
- grow-0
<!--rehype:className=cols-3 style-none-->

### Flex Shrink

用于控制弹性项目收缩方式的实用程序

- shrink
- shrink-0
<!--rehype:className=cols-2 style-none-->

### Order

用于控制弹性和网格项目顺序的实用程序

- order-1
- order-2
- order-3
- order-4
- order-5
- order-6
- order-7
- order-8
- order-9
- order-10
- order-11
- order-12
- order-first
- order-last
- order-none
<!--rehype:className=cols-3 style-none-->

### Grid Template Columns

用于指定网格布局中的列的实用程序

- grid-cols-1
- grid-cols-2
- grid-cols-3
- grid-cols-4
- grid-cols-5
- grid-cols-6
- grid-cols-7
- grid-cols-8
- grid-cols-9
- grid-cols-10
- grid-cols-11
- grid-cols-12
- grid-cols-none
<!--rehype:className=cols-2 style-none-->

### Grid Column Start/End
<!--rehype:wrap-class=row-span-3-->

用于控制元素如何调整大小和跨网格列放置的实用程序

- col-auto
- col-span-1
- col-span-2
- col-span-3
- col-span-4
- col-span-5
- col-span-6
- col-span-7
- col-span-8
- col-span-9
- col-span-10
- col-span-11
- col-span-12
- col-span-full
- col-start-1
- col-start-2
- col-start-3
- col-start-4
- col-start-5
- col-start-6
- col-start-7
- col-start-8
- col-start-9
- col-start-10
- col-start-11
- col-start-12
- col-start-13
- col-start-auto
- col-end-1
- col-end-2
- col-end-3
- col-end-4
- col-end-5
- col-end-6
- col-end-7
- col-end-8
- col-end-9
- col-end-10
- col-end-11
- col-end-12
- col-end-13
- col-end-auto
<!--rehype:className=cols-3 style-none-->

### Grid Template Rows

用于指定网格布局中的行的实用程序

- grid-rows-1
- grid-rows-2
- grid-rows-3
- grid-rows-4
- grid-rows-5
- grid-rows-6
- grid-rows-none
<!--rehype:className=cols-2 style-none-->

### Grid Row Start/End
<!--rehype:wrap-class=row-span-3-->

用于控制元素如何调整大小和跨网格行放置的实用程序

- row-auto
- row-span-1
- row-span-2
- row-span-3
- row-span-4
- row-span-5
- row-span-6
- row-span-full
- row-start-1
- row-start-2
- row-start-3
- row-start-4
- row-start-5
- row-start-6
- row-start-7
- row-start-auto
- row-end-1
- row-end-2
- row-end-3
- row-end-4
- row-end-5
- row-end-6
- row-end-7
- row-end-auto
<!--rehype:className=cols-2 style-none-->

### Grid Auto Flow

用于控制网格中元素如何自动放置的实用程序

- grid-flow-row
- grid-flow-col
- grid-flow-dense
- grid-flow-row-dense
- grid-flow-col-dense
<!--rehype:className=cols-2 style-none-->

### Grid Auto Columns

用于控制隐式创建的网格列大小的实用程序

- auto-cols-auto
- auto-cols-min
- auto-cols-max
- auto-cols-fr
<!--rehype:className=cols-2 style-none-->

### Grid Auto Rows

用于控制隐式创建的网格行大小的实用程序

- auto-rows-auto
- auto-rows-min
- auto-rows-max
- auto-rows-fr
<!--rehype:className=cols-2 style-none-->

### Gap
<!--rehype:wrap-class=row-span-5-->

用于控制网格和 flexbox 项目之间的间距的实用程序

- gap-x-0
- gap-y-0
- gap-px
- gap-x-px
- gap-y-px
- gap-0.5
- gap-x-0.5
- gap-y-0.5
- gap-1
- gap-x-1
- gap-y-1
- gap-1.5
- gap-x-1.5
- gap-y-1.5
- gap-2
- gap-x-2
- gap-y-2
- gap-2.5
- gap-x-2.5
- gap-y-2.5
- gap-3
- gap-x-3
- gap-y-3
- gap-3.5
- gap-x-3.5
- gap-y-3.5
- gap-4
- gap-x-4
- gap-y-4
- gap-5
- gap-x-5
- gap-y-5
- gap-6
- gap-x-6
- gap-y-6
- gap-7
- gap-x-7
- gap-y-7
- gap-8
- gap-x-8
- gap-y-8
- gap-9
- gap-x-9
- gap-y-9
- gap-10
- gap-x-10
- gap-y-10
- gap-11
- gap-x-11
- gap-y-11
- gap-12
- gap-x-12
- gap-y-12
- gap-14
- gap-x-14
- gap-y-14
- gap-16
- gap-x-16
- gap-y-16
- gap-20
- gap-x-20
- gap-y-20
- gap-24
- gap-x-24
- gap-y-24
- gap-28
- gap-x-28
- gap-y-28
- gap-32
- gap-x-32
- gap-y-32
- gap-36
- gap-x-36
- gap-y-36
- gap-40
- gap-x-40
- gap-y-40
- gap-44
- gap-x-44
- gap-y-44
- gap-48
- gap-x-48
- gap-y-48
- gap-52
- gap-x-52
- gap-y-52
- gap-56
- gap-x-56
- gap-y-56
- gap-60
- gap-x-60
- gap-y-60
- gap-64
- gap-x-64
- gap-y-64
- gap-72
- gap-x-72
- gap-y-72
- gap-80
- gap-x-80
- gap-y-80
- gap-96
- gap-x-96
- gap-y-96
<!--rehype:className=cols-3 style-none-->

### Justify Content

用于控制 flex 和 grid 项目如何沿容器的主轴定位的实用程序

- justify-start
- justify-end
- justify-center
- justify-between
- justify-around
- justify-evenly
<!--rehype:className=cols-2 style-none-->

### Justify Items

用于控制网格项目如何沿其内联轴对齐的实用程序

- justify-items-start
- justify-items-end
- justify-items-center
- justify-items-stretch
<!--rehype:className=cols-2 style-none-->

### Justify Self

用于控制单个网格项目如何沿其内联轴对齐的实用程序

- justify-self-auto
- justify-self-start
- justify-self-end
- justify-self-center
- justify-self-stretch
<!--rehype:className=cols-2 style-none-->

### Align Content

用于控制行在多行 flex 和网格容器中的定位方式的实用程序

- content-center
- content-start
- content-end
- content-between
- content-around
- content-evenly
- content-baseline
<!--rehype:className=cols-2 style-none-->

### Align Items

用于控制 flex 和 grid 项目如何沿容器的横轴定位的实用程序

- items-start
- items-end
- items-center
- items-baseline
- items-stretch
<!--rehype:className=cols-2 style-none-->

### Align Self

用于控制单个弹性或网格项目如何沿其容器的横轴定位的实用程序

- self-auto
- self-start
- self-end
- self-center
- self-stretch
- self-baseline
<!--rehype:className=cols-2 style-none-->

### Place Content

用于控制内容如何同时对齐和对齐的实用程序

- place-content-center
- place-content-start
- place-content-end
- place-content-between
- place-content-around
- place-content-evenly
- place-content-baseline
- place-content-stretch
<!--rehype:className=cols-2 style-none-->

### Place Items

用于控制项目如何同时对齐和对齐的实用程序

- place-items-start
- place-items-end
- place-items-center
- place-items-baseline
- place-items-stretch
<!--rehype:className=cols-2 style-none-->

### Place Self

用于控制单个项目如何同时对齐和对齐的实用程序

- place-self-auto
- place-self-start
- place-self-end
- place-self-center
- place-self-stretch
<!--rehype:className=cols-2 style-none-->

Accessibility
---

### Screen Readers

用于提高屏幕阅读器可访问性的实用程序

- sr-only
- not-sr-only
<!--rehype:className=cols-2 style-none-->
