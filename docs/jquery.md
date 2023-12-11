jQuery 备忘清单
===

[jQuery](https://jquery.com/) 备忘单对于初学者和有经验的开发人员都是很好的参考

入门
-----

### 引入 jQuery

```js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```
<!--rehype:className=wrap-text-->

#### 官方 CDN

```js
<script src="https://code.jquery.com/jquery-3.5.1.min.js" crossorigin="anonymous"></script>
```
<!--rehype:className=wrap-text-->

### jQuery 语法

```js
$(selector).methodOrFunction();
```

#### 例子

```js
$('#menu').on('click', () =>{
  $(this).hide();  
});
$("body").css("background", "red");
```

### jQuery 文档准备就绪

```js
$(document).ready(function() {
  // 在加载 DOM 后运行
  alert('DOM fully loaded!');
});
```

```js
$(function(){
  // 在加载 DOM 后运行
  alert('DOM fully loaded!');
});
```

jQuery 选择器
----------

### 例子

```js
$("button").click(() => {
    $(":button").css("color", "red");
});
```

#### 组合选择器

```js
$("selector1, selector2 ...selectorn")
```

### 基本

- [*](https://api.jquery.com/all-selector/) _选择所有元素_<!--rehype:tooltips-->
- [.class](https://api.jquery.com/class-selector/) _选择具有给定类的所有元素_<!--rehype:tooltips-->
- [element](https://api.jquery.com/element-selector/) _选择具有给定标签名称的所有元素_<!--rehype:tooltips-->
- [#id](https://api.jquery.com/id-selector/) _选择具有给定 id 属性的单个元素_<!--rehype:tooltips-->
- [:hidden](https://api.jquery.com/hidden-selector/) _选择所有隐藏的元素_<!--rehype:tooltips-->
- [:visible](https://api.jquery.com/visible-selector/) _选择所有可见的元素_<!--rehype:tooltips-->
- [:contains()](https://api.jquery.com/contains-selector/) _选择包含指定文本的所有元素_<!--rehype:tooltips-->
- [:empty](https://api.jquery.com/empty-selector/) _选择所有没有子元素的元素(包括文本节点)_<!--rehype:tooltips-->
- [:has()](https://api.jquery.com/has-selector/) _选择至少包含一个与指定选择器匹配的元素的元素_<!--rehype:tooltips-->
- [:parent](https://api.jquery.com/parent-selector/) _选择具有至少一个子节点(元素或文本)的所有元素_<!--rehype:tooltips-->
- [parent &gt; child](https://api.jquery.com/child-selector/) _选择由父元素指定的子元素指定的所有直接子元素_<!--rehype:tooltips-->
- [ancestor descendant](https://api.jquery.com/descendant-selector/) _选择作为给定祖先的后代的所有元素_<!--rehype:tooltips-->
- [prev + next](https://api.jquery.com/next-adjacent-Selector/) _选择所有与 next 匹配且紧接在其前面的同级 prev 的下一个元素_<!--rehype:tooltips-->
- [prev ~ siblings](https://api.jquery.com/next-siblings-selector/) _选择 prev 元素之后的所有同级元素，具有相同的父元素，并匹配过滤同级选择器_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

### 基本过滤器

- [:animated](https://api.jquery.com/animated-selector/) _在运行选择器时选择动画进度中的所有元素_<!--rehype:tooltips-->
- [:eq()](https://api.jquery.com/eq-selector/) _选择匹配集中索引 n 处的元素_<!--rehype:tooltips-->
- [:even](https://api.jquery.com/even-selector/) _选择偶数元素，索引为零。 另见：奇数_<!--rehype:tooltips-->
- [:first](https://api.jquery.com/first-selector/) _选择第一个匹配的 DOM 元素_<!--rehype:tooltips-->
- [:gt()](https://api.jquery.com/gt-selector/) _选择匹配集中索引大于索引的所有元素_<!--rehype:tooltips-->
- [:header](https://api.jquery.com/header-selector/) _选择所有标题元素，如 h1、h2、h3 等_<!--rehype:tooltips-->
- [:lang()](https://api.jquery.com/lang-selector/) _选择指定语言的所有元素_<!--rehype:tooltips-->
- [:last](https://api.jquery.com/last-selector/) _选择最后一个匹配的元素_<!--rehype:tooltips-->
- [:lt()](https://api.jquery.com/lt-selector/) _选择匹配集中索引小于索引的所有元素_<!--rehype:tooltips-->
- [:not()](https://api.jquery.com/not-selector/) _选择与给定选择器不匹配的所有元素_<!--rehype:tooltips-->
- [:odd](https://api.jquery.com/odd-selector/) _选择奇数元素，索引为零。 另见：甚至_<!--rehype:tooltips-->
- [:root](https://api.jquery.com/root-selector/) _选择作为文档根的元素_<!--rehype:tooltips-->
- [:target](https://api.jquery.com/target-selector/) _选择由文档的 URI 的片段标识符指示的目标元素_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

### 属性

- [[name|="value"]](https://api.jquery.com/attribute-contains-prefix-selector/) _选择具有指定属性且值等于给定字符串或以该字符串开头后跟连字符 (-) 的元素_<!--rehype:tooltips-->
- [[name*="value"]](https://api.jquery.com/attribute-contains-selector/) _选择具有指定属性且值包含给定子字符串的元素_<!--rehype:tooltips-->
- [[name~="value"]](https://api.jquery.com/attribute-contains-word-selector/) _选择具有指定属性的元素，其值包含给定单词，由空格分隔_<!--rehype:tooltips-->
- [[name$="value"]](https://api.jquery.com/attribute-ends-with-selector/) _选择具有指定属性且值恰好以给定字符串结尾的元素。 比较区分大小写_<!--rehype:tooltips-->
- [[name="value"]](https://api.jquery.com/attribute-equals-selector/) _选择具有指定属性且值恰好等于特定值的元素_<!--rehype:tooltips-->
- [[name!="value"]](https://api.jquery.com/attribute-not-equal-selector/) _选择不具有指定属性或具有指定属性但不具有特定值的元素_<!--rehype:tooltips-->
- [[name^="value"]](https://api.jquery.com/attribute-starts-with-selector/) _选择具有指定属性且值恰好以给定字符串开头的元素_<!--rehype:tooltips-->
- [[name]](https://api.jquery.com/has-attribute-selector/) _选择具有指定属性和任意值的元素_<!--rehype:tooltips-->
- [[name="value"]](https://api.jquery.com/multiple-attribute-selector/) _匹配匹配所有指定属性过滤器的元素_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### 子过滤器

- [:first-child](https://api.jquery.com/first-child-selector/) _选择作为其父元素的第一个子元素的所有元素_<!--rehype:tooltips-->
- [:first-of-type](https://api.jquery.com/first-of-type-selector/) _选择具有相同元素名称的兄弟姐妹中第一个的所有元素_<!--rehype:tooltips-->
- [:last-child](https://api.jquery.com/last-child-selector/) _选择作为其父元素的最后一个子元素的所有元素_<!--rehype:tooltips-->
- [:last-of-type](https://api.jquery.com/last-of-type-selector/) _选择具有相同元素名称的兄弟中最后一个的所有元素_<!--rehype:tooltips-->
- [:nth-child()](https://api.jquery.com/nth-child-selector/) _选择作为其父元素的第 n 个子元素的所有元素_<!--rehype:tooltips-->
- [:nth-last-child()](https://api.jquery.com/nth-last-child-selector/) _选择作为其父元素的第 n 个子元素的所有元素，从最后一个元素到第一个元素计数_<!--rehype:tooltips-->
- [:nth-last-of-type()](https://api.jquery.com/nth-last-of-type-selector/) _选择所有元素，这些元素是其父元素的第 n 个子元素，相对于具有相同元素名称的兄弟元素，从最后一个元素到第一个元素计数_<!--rehype:tooltips-->
- [:nth-of-type()](https://api.jquery.com/nth-of-type-selector/) _选择所有元素，这些元素是其父元素相对于具有相同元素名称的兄弟元素的第 n 个子元素_<!--rehype:tooltips-->
- [:only-child](https://api.jquery.com/only-child-selector/) _选择作为其父元素的唯一子元素的所有元素_<!--rehype:tooltips-->
- [:only-of-type()](https://api.jquery.com/only-of-type-selector/) _选择所有没有同名元素的元素_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### Forms

- [:button](https://api.jquery.com/button-selector/) _选择所有按钮元素和按钮类型的元素_<!--rehype:tooltips-->
- [:checkbox](https://api.jquery.com/checkbox-selector/) _选择复选框类型的所有元素_<!--rehype:tooltips-->
- [:checked](https://api.jquery.com/checked-selector/) _匹配所有选中或选择的元素_<!--rehype:tooltips-->
- [:disabled](https://api.jquery.com/disabled-selector/) _选择所有禁用的元素_<!--rehype:tooltips-->
- [:enabled](https://api.jquery.com/enabled-selector/) _选择所有启用的元素_<!--rehype:tooltips-->
- [:focus](https://api.jquery.com/focus-selector/) _如果当前获得焦点，则选择元素_<!--rehype:tooltips-->
- [:file](https://api.jquery.com/file-selector/) _选择类型文件的所有元素_<!--rehype:tooltips-->
- [:image](https://api.jquery.com/image-selector/) _选择图像类型的所有元素_<!--rehype:tooltips-->
- [:input](https://api.jquery.com/input-selector/) _选择所有输入、文本区域、选择和按钮元素_<!--rehype:tooltips-->
- [:password](https://api.jquery.com/password-selector/) _选择密码类型的所有元素_<!--rehype:tooltips-->
- [:radio](https://api.jquery.com/radio-selector/) _选择无线电类型的所有元素_<!--rehype:tooltips-->
- [:reset](https://api.jquery.com/reset-selector/) _选择重置类型的所有元素_<!--rehype:tooltips-->
- [:selected](https://api.jquery.com/selected-selector/) _选择所有选中的元素_<!--rehype:tooltips-->
- [:submit](https://api.jquery.com/submit-selector/) _选择提交类型的所有元素_<!--rehype:tooltips-->
- [:text](https://api.jquery.com/text-selector/) _选择文本类型的所有输入元素_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

jQuery 属性
-----

### 例子
<!--rehype:wrap-class=row-span-2-->

```js
$('h2').css({
  color: 'blue',
  backgroundColor: 'gray',
  fontSize: '24px'
});
```

#### jQuery 添加类

```js
$('.button').addClass('active'); 
```

#### jQuery 移除类

```js
$('.button').on('mouseleave', evt => {
   let e = evt.currentTarget;
   $(e).removeClass('active');
});
```

#### jQuery 切换类

```js
$('.choice').toggleClass('highlighted');
```

### Attributes

- [.attr()](https://api.jquery.com/attr/) _获取匹配元素集中第一个元素的属性值_<!--rehype:tooltips-->
- [.prop()](https://api.jquery.com/prop/) _获取匹配元素集中第一个元素的属性值_<!--rehype:tooltips-->
- [.removeAttr()](https://api.jquery.com/removeAttr/) _从匹配元素集中的每个元素中删除一个属性_<!--rehype:tooltips-->
- [.removeProp()](https://api.jquery.com/removeProp/) _删除匹配元素集的属性_<!--rehype:tooltips-->
- [.val()](https://api.jquery.com/val/) _获取匹配元素集中第一个元素的当前值_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

#### Data

- [jQuery.data()](https://api.jquery.com/jQuery.data/) _存储与指定元素关联的任意数据。 返回设置的值_<!--rehype:tooltips-->
- [.data()](https://api.jquery.com/data/) _存储与匹配元素关联的任意数据_<!--rehype:tooltips-->
- [jQuery.hasData()](https://api.jquery.com/jQuery.hasData/) _确定一个元素是否有任何与之关联的 jQuery 数据_<!--rehype:tooltips-->
- [jQuery.removeData()](https://api.jquery.com/jQuery.removeData/) _删除以前存储的数据_<!--rehype:tooltips-->
- [.removeData()](https://api.jquery.com/removeData/) _删除以前存储的数据_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### CSS

- [.addClass()](https://api.jquery.com/addClass/) _将指定的类添加到匹配元素集中的每个元素_<!--rehype:tooltips-->
- [.hasClass()](https://api.jquery.com/hasClass/) _确定是否有任何匹配的元素被分配给给定的类_<!--rehype:tooltips-->
- [.removeClass()](https://api.jquery.com/removeClass/) _从匹配元素集中的每个元素中删除单个类、多个类或所有类_<!--rehype:tooltips-->
- [.toggleClass()](https://api.jquery.com/toggleClass/) _根据类的存在或状态参数的值，从匹配元素集中的每个元素添加或删除一个或多个类_<!--rehype:tooltips-->
- [.css()](https://api.jquery.com/css/) _获取匹配元素集中第一个元素的计算样式属性_<!--rehype:tooltips-->
- [jQuery.cssHooks](https://api.jquery.com/jQuery.cssHooks/) _直接连接到 jQuery 以覆盖特定 CSS 属性的检索或设置方式、标准化 CSS 属性命名或创建自定义属性_<!--rehype:tooltips-->
- [jQuery.cssNumber](https://api.jquery.com/jQuery.cssNumber/) _包含所有可以在没有单位的情况下使用的 CSS 属性的对象。`.css()` 方法使用此对象来查看它是否可以将 px 附加到无单位值_<!--rehype:tooltips-->
- [jQuery.escapeSelector()](https://api.jquery.com/jQuery.escapeSelector/) _转义任何在 CSS 选择器中具有特殊含义的字符_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### Dimensions

- [.height()](https://api.jquery.com/height/) _获取匹配元素集中第一个元素的当前计算高度_<!--rehype:tooltips-->
- [.innerHeight()](https://api.jquery.com/innerHeight/) _获取匹配元素集中第一个元素的当前计算高度，包括填充但不包括边框_<!--rehype:tooltips-->
- [.innerWidth()](https://api.jquery.com/innerWidth/) _获取匹配元素集中第一个元素的当前计算内部宽度，包括填充但不包括边框_<!--rehype:tooltips-->
- [.outerHeight()](https://api.jquery.com/outerHeight/) _获取匹配元素集中第一个元素的当前计算外部高度(包括填充、边框和可选的边距)_<!--rehype:tooltips-->
- [.outerWidth()](https://api.jquery.com/outerWidth/) _获取匹配元素集中第一个元素的当前计算外部宽度(包括填充、边框和可选的边距)_<!--rehype:tooltips-->
- [.width()](https://api.jquery.com/width/) _获取匹配元素集中第一个元素的当前计算宽度_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### Offset

- [.offset()](https://api.jquery.com/offset/) _获取匹配元素集中第一个元素相对于文档的当前坐标_<!--rehype:tooltips-->
- [.offsetParent()](https://api.jquery.com/offsetParent/) _获取定位的最近的祖先元素_<!--rehype:tooltips-->
- [.position()](https://api.jquery.com/position/) _获取匹配元素集中第一个元素相对于偏移父元素的当前坐标_<!--rehype:tooltips-->
- [.scrollLeft()](https://api.jquery.com/scrollLeft/) _获取匹配元素集中第一个元素的滚动条的当前水平位置_<!--rehype:tooltips-->
- [.scrollTop()](https://api.jquery.com/scrollTop/) _获取匹配元素集中第一个元素的滚动条的当前垂直位置，或为每个匹配元素设置滚动条的垂直位置_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

jQuery 操控
------------

### Examples
<!--rehype:wrap-class=row-span-3-->

```js
/*<span>Span.</span>*/
$('span').after('<p>Paragraph.</p>');
/*<span>Span.</span><p>Paragraph.</p>*/
/*<span>Span.</span>*/
$('<span>Span.</span>').replaceAll('p');
/*<p>Span.</p>*/
/*<span>This is span.</span>*/
$('span').wrap('<p></p>');
/*<p><span>This is span.</span></p>*/
```

### 复刻

- [.clone()](https://api.jquery.com/clone/) _创建匹配元素集的深层副本_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### DOM 插入，环绕

- [.wrap()](https://api.jquery.com/wrap/) _在匹配元素集中的每个元素周围包装一个 HTML 结构_<!--rehype:tooltips-->
- [.wrapAll()](https://api.jquery.com/wrapAll/) _在匹配元素集中的所有元素周围包装一个 HTML 结构_<!--rehype:tooltips-->
- [.wrapInner()](https://api.jquery.com/wrapInner/) _围绕匹配元素集中每个元素的内容包装一个 HTML 结构_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### DOM 插入，内部

- [.append()](https://api.jquery.com/append/) _在匹配的元素集中，插入由参数指定的内容插入每个元素的末尾_<!--rehype:tooltips-->
- [.appendTo()](https://api.jquery.com/appendTo/) _将匹配元素集中的每个元素插入目标末端_<!--rehype:tooltips-->
- [.html()](https://api.jquery.com/html/) _在匹配元素集中获取第一个元素的HTML内容_<!--rehype:tooltips-->
- [.prepend()](https://api.jquery.com/prepend/) _插入由参数指定的内容插入匹配元素集中每个元素的开始_<!--rehype:tooltips-->
- [.prependTo()](https://api.jquery.com/prependTo/) _将匹配元素集中的每个元素插入目标开始_<!--rehype:tooltips-->
- [.text()](https://api.jquery.com/text/) _在匹配的元素集（包括其后代）中获取每个元素的组合文本内容_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### DOM 插入，外部

- [.after()](https://api.jquery.com/after/) _在匹配元素集中的每个元素之后，插入由参数指定的内容_<!--rehype:tooltips-->
- [.before()](https://api.jquery.com/before/) _在匹配元素集中的每个元素之前，插入由参数指定的内容_<!--rehype:tooltips-->
- [.insertAfter()](https://api.jquery.com/insertAfter/) _在目标之后插入匹配元素集中的每个元素_<!--rehype:tooltips-->
- [.insertBefore()](https://api.jquery.com/insertBefore/) _在目标之前插入匹配元素集中的每个元素_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### DOM 移除

- [.detach()](https://api.jquery.com/detach/) _从DOM上删除一组匹配的元素_<!--rehype:tooltips-->
- [.empty()](https://api.jquery.com/empty/) _从DOM中删除一组匹配元素的所有子节点_<!--rehype:tooltips-->
- [.remove()](https://api.jquery.com/remove/) _从DOM上删除一组匹配的元素_<!--rehype:tooltips-->
- [.unwrap()](https://api.jquery.com/unwrap/) _从DOM上删除一组匹配元素的父母，将匹配的元素留在其位置_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### DOM 替换

- [.replaceAll()](https://api.jquery.com/replaceAll/) _用匹配的元素集替换每个目标元素_<!--rehype:tooltips-->
- [.replaceWith()](https://api.jquery.com/replaceWith/) _用提供的新内容替换一组匹配元素中的每个元素，然后返回已删除的元素集_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

jQuery 遍历
------------

### 过滤

- [.eq()](https://api.jquery.com/eq/) _将匹配的元素集减少到指定索引处的集合_<!--rehype:tooltips-->
- [.filter()](https://api.jquery.com/filter/) _将匹配的元素集减少到匹配选择器或传递函数测试的元素_<!--rehype:tooltips-->
- [.first()](https://api.jquery.com/first/) _将匹配的元素集减少到集合中的第一个_<!--rehype:tooltips-->
- [.has()](https://api.jquery.com/has/) _将匹配的元素集减少到具有与选择器或DOM元素相匹配的后代的元素_<!--rehype:tooltips-->
- [.is()](https://api.jquery.com/is/) _检查当前匹配的元素与选择器，元素或jQuery对象的元素集，如果至少其中一个元素与给定参数匹配，则返回true_<!--rehype:tooltips-->
- [.last()](https://api.jquery.com/last/) _将匹配的元素集减少到集合中的最后一个元素_<!--rehype:tooltips-->
- [.map()](https://api.jquery.com/map/) _将当前匹配的每个元素通过函数传递，从而产生包含返回值的新jQuery对象_<!--rehype:tooltips-->
- [.not()](https://api.jquery.com/not/) _从匹配元素集中删除元素_<!--rehype:tooltips-->
- [.slice()](https://api.jquery.com/slice/) _将匹配的元素集减少为由一系列索引指定的子集_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

### 杂项遍历

- [.add()](https://api.jquery.com/add/) _创建一个新的jQuery对象，其中添加到匹配元素集中的元素_<!--rehype:tooltips-->
- [.addBack()](https://api.jquery.com/addBack/) _将堆栈上的上一个元素添加到当前集合中，并由选择器进行过滤_<!--rehype:tooltips-->
- [.andSelf()](https://api.jquery.com/andSelf/) _将堆栈上的先前元素添加到当前集合中_<!--rehype:tooltips-->
- [.contents()](https://api.jquery.com/contents/) _在一组匹配元素中获取每个元素的孩子，包括文本和评论节点_<!--rehype:tooltips-->
- [.each()](https://api.jquery.com/each/) _在jQuery对象上迭代，为每个匹配的元素执行一个函数_<!--rehype:tooltips-->
- [.end()](https://api.jquery.com/end/) _结束当前链中最新的过滤操作，并将匹配元素集返回其先前状态_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

### 树遍历

- [.children()](https://api.jquery.com/children/) _在一组匹配元素中获取每个元素的孩子，并被选择器进行过滤_<!--rehype:tooltips-->
- [.closest()](https://api.jquery.com/closest/) _对于集合中的每个元素，通过测试元素本身并通过其祖先在DOM树中的祖先进行遍历来获取与选择器匹配的第一个元素_<!--rehype:tooltips-->
- [.find()](https://api.jquery.com/find/) _在当前匹配元素集中获取每个元素的后代，并由选择器，jQuery对象或元素过滤_<!--rehype:tooltips-->
- [.next()](https://api.jquery.com/next/) _在匹配的元素集中，立即获取每个元素的兄弟姐妹。 如果提供了选择器，则仅在匹配该选择器的情况下才能检索下一个兄弟姐妹_<!--rehype:tooltips-->
- [.nextAll()](https://api.jquery.com/nextAll/) _在一组匹配元素中获取每个元素的所有以下兄弟姐妹，并由选择器进行过滤_<!--rehype:tooltips-->
- [.nextUntil()](https://api.jquery.com/nextUntil/) _将每个元素的所有以下兄弟姐妹添加到，但不包括通过选择器，DOM节点或jQuery对象匹配的元素_<!--rehype:tooltips-->
- [.parent()](https://api.jquery.com/parent/) _在当前匹配元素集中获取每个元素的父，由选择器选择过滤_<!--rehype:tooltips-->
- [.parents()](https://api.jquery.com/parents/) _在当前匹配元素集中获取每个元素的祖先，并被选择器进行过滤_<!--rehype:tooltips-->
- [.parentsUntil()](https://api.jquery.com/parentsUntil/) _在当前匹配元素集中获取每个元素的祖先，直到但不包括由选择器，DOM节点或jQuery对象匹配的元素_<!--rehype:tooltips-->
- [.prev()](https://api.jquery.com/prev/) _在匹配元素集中获取每个元素的立即兄弟姐妹。 如果提供了选择器，则仅在匹配该选择器时才检索先前的同胞_<!--rehype:tooltips-->
- [.prevAll()](https://api.jquery.com/prevAll/) _在一组匹配元素中获取每个元素的所有先前兄弟姐妹，并由选择器进行过滤_<!--rehype:tooltips-->
- [.prevUntil()](https://api.jquery.com/prevUntil/) _将每个元素的所有先前兄弟姐妹添加到，但不包括由选择器，DOM节点或jQuery对象匹配的元素_<!--rehype:tooltips-->
- [.siblings()](https://api.jquery.com/siblings/) _在匹配的元素集中获取每个元素的兄弟姐妹，并被选择器进行过滤_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

jQuery 事件
------------

### Examples
<!--rehype:wrap-class=row-span-6-->

```js
// 鼠标事件“点击”
$('#menu-button').on('click', () => {
  $('#menu').show();
});
// 键盘事件“键盘”
$('#textbox').on('keyup', () => {
  $('#menu').show();
});
// 滚动事件“滚动”
$('#menu-button').on('scroll', () => {
  $('#menu').show();
});
```

#### 事件对象

```js
$('#menu').on('click', event => {
  $(event.currentTarget).hide();
});
```

#### 方法链

```js
$('#menu-btn').on('mouseenter', () => {
  $('#menu').show();
}).on('mouseleave', () => {
  $('#menu').hide();
});
```

#### 防止事件

```js
$( "p" ).click(function( event ) {
  event.stopPropagation();
  // Do something
});
```

### 浏览器事件

- [.error()](https://api.jquery.com/error/) _将事件处理程序绑定到错误 JavaScript 事件_ <!--rehype:tooltips-->
- [.resize()](https://api.jquery.com/resize/) _将事件处理程序绑定到调整大小的 JavaScript 事件，或在元素上触发该事件_ <!--rehype:tooltips-->
- [.scroll()](https://api.jquery.com/scroll/) _将事件处理程序绑定到滚动 JavaScript 事件，或在元素上触发该事件_ <!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

### 事件对象
<!--rehype:wrap-class=row-span-6-->

- [event.currentTarget](https://api.jquery.com/event.currentTarget/) _事件冒泡阶段中的当前 DOM 元素_ <!--rehype:tooltips-->
- [event.delegateTarget](https://api.jquery.com/event.delegateTarget/) _附加了当前调用的 jQuery 事件处理程序的元素_ <!--rehype:tooltips-->
- [event.data](https://api.jquery.com/event.data/) _绑定当前正在执行的处理程序时传递给事件方法的可选数据对象_ <!--rehype:tooltips-->
- [event.isDefaultPrevented()](https://api.jquery.com/event.isDefaultPrevented/) _返回是否曾在此事件对象上调用过 event.preventDefault()_ <!--rehype:tooltips-->
- [event.isImmediatePropagationStopped()](https://api.jquery.com/event.isImmediatePropagationStopped/) _返回是否曾在此事件对象上调用过 event.stopImmediatePropagation()_ <!--rehype:tooltips-->
- [event.isPropagationStopped()](https://api.jquery.com/event.isPropagationStopped/) _返回是否曾在此事件对象上调用过 event.stopPropagation()_ <!--rehype:tooltips-->
- [event.metaKey](https://api.jquery.com/event.metaKey/) _指示事件触发时是否按下了 META 键_ <!--rehype:tooltips-->
- [event.namespace](https://api.jquery.com/event.namespace/) _触发事件时指定的命名空间_ <!--rehype:tooltips-->
- [event.pageX](https://api.jquery.com/event.pageX/) _鼠标相对于文档左边缘的位置_ <!--rehype:tooltips-->
- [event.pageY](https://api.jquery.com/event.pageY/) _鼠标位置相对于文档的上边缘_ <!--rehype:tooltips-->
- [event.preventDefault()](https://api.jquery.com/event.preventDefault/) _如果调用该方法，则不会触发事件的默认动作_ <!--rehype:tooltips-->
- [event.relatedTarget](https://api.jquery.com/event.relatedTarget/) _事件中涉及的其他 DOM 元素（如果有）_ <!--rehype:tooltips-->
- [event.result](https://api.jquery.com/event.result/) _由此事件触发的事件处理程序返回的最后一个值，除非该值未定义_ <!--rehype:tooltips-->
- [event.stopImmediatePropagation()](https://api.jquery.com/event.stopImmediatePropagation/) _保持其余的处理程序不被执行，并防止事件在 DOM 树中向上冒泡_ <!--rehype:tooltips-->
- [event.stopPropagation()](https://api.jquery.com/event.stopPropagation/) _防止事件在 DOM 树中向上冒泡，从而防止任何父处理程序收到事件通知_ <!--rehype:tooltips-->
- [event.target](https://api.jquery.com/event.target/) _发起事件的 DOM 元素_ <!--rehype:tooltips-->
- [event.timeStamp](https://api.jquery.com/event.timeStamp/) _浏览器创建事件的时间与 1970 年 1 月 1 日之间的毫秒差_ <!--rehype:tooltips-->
- [event.type](https://api.jquery.com/event.type/) _描述事件的性质_ <!--rehype:tooltips-->
- [event.which](https://api.jquery.com/event.which/) _对于键或鼠标事件，此属性指示按下的特定键或按钮_ <!--rehype:tooltips-->
<!--rehype:className=style-none-->

### 文档加载

- [.load()](https://api.jquery.com/load-event/) _将事件处理程序绑定到加载 JavaScript 事件_<!--rehype:tooltips-->
- [.ready()](https://api.jquery.com/ready/) _指定在 DOM 完全加载时执行的函数_<!--rehype:tooltips-->
- [.unload()](https://api.jquery.com/unload/) _将事件处理程序绑定到卸载 JavaScript 事件_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

### 事件处理程序附件

- [.bind()](https://api.jquery.com/bind/) _将处理程序附加到元素的事件_<!--rehype:tooltips-->
- [.delegate()](https://api.jquery.com/delegate/) _基于一组特定的根元素，将处理程序附加到现在或将来与选择器匹配的所有元素的一个或多个事件_<!--rehype:tooltips-->
- [.die()](https://api.jquery.com/die/) _从元素中删除先前使用 .live() 附加的事件处理程序_<!--rehype:tooltips-->
- [.live()](https://api.jquery.com/live/) _现在和将来为所有匹配当前选择器的元素附加一个事件处理程序_<!--rehype:tooltips-->
- [.off()](https://api.jquery.com/off/) _删除事件处理程序_<!--rehype:tooltips-->
- [.on()](https://api.jquery.com/on/) _将一个或多个事件的事件处理函数附加到所选元素_<!--rehype:tooltips-->
- [.one()](https://api.jquery.com/one/) _将处理程序附加到元素的事件。 每个事件类型的每个元素最多执行一次处理程序_<!--rehype:tooltips-->
- [.trigger()](https://api.jquery.com/trigger/) _执行附加到给定事件类型的匹配元素的所有处理程序和行为_<!--rehype:tooltips-->
- [.triggerHandler()](https://api.jquery.com/triggerHandler/) _执行附加到事件元素的所有处理程序_<!--rehype:tooltips-->
- [.unbind()](https://api.jquery.com/unbind/) _从元素中删除先前附加的事件处理程序_<!--rehype:tooltips-->
- [.undelegate()](https://api.jquery.com/undelegate/) _根据一组特定的根元素，从与当前选择器匹配的所有元素的事件中删除处理程序_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

### 形式事件

- [.blur()](https://api.jquery.com/blur/) _将事件处理程序绑定到 blur JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.change()](https://api.jquery.com/change/) _将事件处理程序绑定到更改 JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.focus()](https://api.jquery.com/focus/) _将事件处理程序绑定到焦点 JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.focusin()](https://api.jquery.com/focusin/) _将事件处理程序绑定到 focusin 事件_<!--rehype:tooltips-->
- [.focusout()](https://api.jquery.com/focusout/) _将事件处理程序绑定到 focusout JavaScript 事件_<!--rehype:tooltips-->
- [.select()](https://api.jquery.com/select/) _将事件处理程序绑定到 select JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.submit()](https://api.jquery.com/submit/) _将事件处理程序绑定到提交 JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

### 键盘事件

- [.keydown()](https://api.jquery.com/keydown/) _将事件处理程序绑定到 keydown JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.keypress()](https://api.jquery.com/keypress/) _将事件处理程序绑定到按键 JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.keyup()](https://api.jquery.com/keyup/) _将事件处理程序绑定到 keyup JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

### 鼠标事件

- [.click()](https://api.jquery.com/click/) _将事件处理程序绑定到 click JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.contextMenu()](https://api.jquery.com/contextmenu/) _将事件处理程序绑定到 contextmenu JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.dblclick()](https://api.jquery.com/dblclick/) _将事件处理程序绑定到 dblclick JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.hover()](https://api.jquery.com/hover/) _将两个处理程序绑定到匹配的元素，当鼠标指针进入和离开元素时执行_<!--rehype:tooltips-->
- [.mousedown()](https://api.jquery.com/mousedown/) _将事件处理程序绑定到 mousedown JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.mouseenter()](https://api.jquery.com/mouseenter/) _绑定要在鼠标进入元素时触发的事件处理程序，或在元素上触发该处理程序_<!--rehype:tooltips-->
- [.mouseleave()](https://api.jquery.com/mouseleave/) _绑定要在鼠标离开元素时触发的事件处理程序，或在元素上触发该处理程序_<!--rehype:tooltips-->
- [.mousemove()](https://api.jquery.com/mousemove/) _将事件处理程序绑定到 mousemove JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.mouseout()](https://api.jquery.com/mouseout/) _将事件处理程序绑定到 mouseout JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.mouseover()](https://api.jquery.com/mouseover/) _将事件处理程序绑定到 mouseover JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.mouseup()](https://api.jquery.com/mouseup/) _将事件处理程序绑定到 mouseup JavaScript 事件，或在元素上触发该事件_<!--rehype:tooltips-->
- [.toggle()](https://api.jquery.com/toggle-event/) _将两个或多个处理程序绑定到匹配的元素，以在交替单击时执行_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

jQuery Effects
------------

### 例子
<!--rehype:wrap-class=row-span-2-->

```js
$('#menu-button').on('click', () => {
  // $('#menu').fadeIn(400, 'swing')
  $('#menu').fadeIn();
});
```

#### 淡出效果

```js
$('#menu-button').on('click', () => {
  // $('#menu').fadeOut(400, 'swing')
  $('#menu').fadeOut();
});
```

### 基本

- [.hide()](https://api.jquery.com/hide/) _隐藏匹配的元素_<!--rehype:tooltips-->
- [.show()](https://api.jquery.com/show/) _显示匹配的元素_<!--rehype:tooltips-->
- [.toggle()](https://api.jquery.com/toggle/) _显示或隐藏匹配的元素_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

### 滑动

- [.slideDown()](https://api.jquery.com/slideDown/) _以滑动方式显示匹配的元素_<!--rehype:tooltips-->
- [.slideToggle()](https://api.jquery.com/slideToggle/) _通过滑动显示或隐藏匹配的元素_<!--rehype:tooltips-->
- [.slideUp()](https://api.jquery.com/slideUp/) _通过滑动隐藏匹配的元素_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

### 自定义

- [.animate()](https://api.jquery.com/animate/) _执行一组 CSS 属性的自定义动画_<!--rehype:tooltips-->
- [.clearQueue()](https://api.jquery.com/clearQueue/) _从队列中删除所有尚未运行的项目_<!--rehype:tooltips-->
- [.delay()](https://api.jquery.com/delay/) _设置一个计时器来延迟队列中后续项目的执行_<!--rehype:tooltips-->
- [.dequeue()](https://api.jquery.com/dequeue/) _为匹配的元素执行队列上的下一个函数_<!--rehype:tooltips-->
- [jQuery.dequeue()](https://api.jquery.com/jQuery.dequeue/) _为匹配的元素执行队列上的下一个函数_<!--rehype:tooltips-->
- [.finish()](https://api.jquery.com/finish/) _停止当前运行的动画，移除所有排队的动画，并完成匹配元素的所有动画_<!--rehype:tooltips-->
- [jQuery.fx.interval](https://api.jquery.com/jQuery.fx.interval/) _动画触发的速率（以毫秒为单位）_<!--rehype:tooltips-->
- [jQuery.fx.off](https://api.jquery.com/jQuery.fx.off/) _全局禁用所有动画_<!--rehype:tooltips-->
- [jQuery.speed](https://api.jquery.com/jQuery.speed/) _创建一个对象，其中包含一组准备用于自定义动画定义的属性_<!--rehype:tooltips-->
- [.queue()](https://api.jquery.com/queue/) _显示要在匹配元素上执行的函数队列_<!--rehype:tooltips-->
- [jQuery.queue()](https://api.jquery.com/jQuery.queue/) _显示要在匹配元素上执行的函数队列_<!--rehype:tooltips-->
- [.stop()](https://api.jquery.com/stop/) _停止匹配元素上当前运行的动画_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

### 衰退

- [.fadeIn()](https://api.jquery.com/fadeIn/) _通过将匹配的元素淡化为不透明来显示它们_<!--rehype:tooltips-->
- [.fadeOut()](https://api.jquery.com/fadeOut/) _通过将它们淡化为透明来隐藏匹配的元素_<!--rehype:tooltips-->
- [.fadeTo()](https://api.jquery.com/fadeTo/) _调整匹配元素的不透明度_<!--rehype:tooltips-->
- [.fadeToggle()](https://api.jquery.com/fadeToggle/) _通过设置不透明度动画来显示或隐藏匹配的元素_<!--rehype:tooltips-->
<!--rehype:className=cols-3 style-none-->

jQuery Ajax
------------

### Examples
<!--rehype:wrap-class=row-span-2-->

```js
$.ajax({
  url: this.action,
  type: this.method,
  data: $(this).serialize()
}).done(function(server_data){
  console.log("success" + server_data);
}).fail(function(jqXHR, status, err){
  console.log("fail" + err);
});
```

### 全局 Ajax 事件处理程序

- [.ajaxComplete()](https://api.jquery.com/ajaxComplete/) _注册要在 Ajax 请求完成时调用的处理程序。 这是一个 AjaxEvent_<!--rehype:tooltips-->
- [.ajaxError()](https://api.jquery.com/ajaxError/) _注册一个处理程序，当 Ajax 请求完成但出现错误时调用。 这是一个 Ajax 事件_<!--rehype:tooltips-->
- [.ajaxSend()](https://api.jquery.com/ajaxSend/) _附加一个要在发送 Ajax 请求之前执行的函数。 这是一个 Ajax 事件_<!--rehype:tooltips-->
- [.ajaxStart()](https://api.jquery.com/ajaxStart/) _注册一个处理程序，在第一个 Ajax 请求开始时调用。 这是一个 Ajax 事件_<!--rehype:tooltips-->
- [.ajaxStop()](https://api.jquery.com/ajaxStop/) _注册一个处理程序，在所有 Ajax 请求完成时调用。 这是一个 Ajax 事件_<!--rehype:tooltips-->
- [.ajaxSuccess()](https://api.jquery.com/ajaxSuccess/) _附加一个要在 Ajax 请求成功完成时执行的函数。 这是一个 Ajax 事件_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### 辅助功能

- [jQuery.param()](https://api.jquery.com/jQuery.param/) _创建适合在 URL 查询字符串或 Ajax 请求中使用的数组、普通对象或 jQuery 对象的序列化表示。 如果传递了 jQuery 对象，它应该包含具有名称/值属性的输入元素_<!--rehype:tooltips-->
- [.serialize()](https://api.jquery.com/serialize/) _将一组表单元素编码为字符串以供提交_<!--rehype:tooltips-->
- [.serializeArray()](https://api.jquery.com/serializeArray/) _将一组表单元素编码为名称和值的数组_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### 底层接口

- [jQuery.ajax()](https://api.jquery.com/jQuery.ajax/) _执行异步 HTTP (Ajax) 请求_<!--rehype:tooltips-->
- [jQuery.prefilter()](https://api.jquery.com/jQuery.ajaxPrefilter/) _在发送每个请求之前和 $.ajax() 处理它们之前处理自定义 Ajax 选项或修改现有选项_<!--rehype:tooltips-->
- [jQuery.ajaxSetup()](https://api.jquery.com/jQuery.ajaxSetup/) _为将来的 Ajax 请求设置默认值。 不推荐使用它_<!--rehype:tooltips-->
- [jQuery.ajaxTransport()](https://api.jquery.com/jQuery.ajaxTransport/) _创建一个对象来处理 Ajax 数据的实际传输_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### 速记方法

- [jQuery.get()](https://api.jquery.com/jQuery.get/) _使用 HTTP GET 请求从服务器加载数据_<!--rehype:tooltips-->
- [jQuery.getJSON()](https://api.jquery.com/jQuery.getJSON/) _使用 GET HTTP 请求从服务器加载 JSON 编码的数据_<!--rehype:tooltips-->
- [jQuery.getScript()](https://api.jquery.com/jQuery.getScript/) _使用 GET HTTP 请求从服务器加载 JavaScript 文件，然后执行它_<!--rehype:tooltips-->
- [jQuery.post()](https://api.jquery.com/jQuery.post/) _使用 HTTP POST 请求将数据发送到服务器_<!--rehype:tooltips-->
- [.load()](https://api.jquery.com/load/) _从服务器加载数据并将返回的 HTML 放入匹配的元素中_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

各种各样的
------------

### jQuery 对象

- [jQuery()](https://api.jquery.com/jQuery/) _接受包含 CSS 选择器的字符串，然后用于匹配一组元_<!--rehype:tooltips-->
- [jQuery.noConflict()](https://api.jquery.com/jQuery.noConflict/) _放弃 jQuery 对 $ 变量的控_<!--rehype:tooltips-->
- [jQuery.sub()](https://api.jquery.com/jQuery.sub/) _创建一个新的 jQuery 副本，可以在不影响原始 jQuery 对象的情况下修改其属性和方_<!--rehype:tooltips-->
- [jQuery.holdReady()](https://api.jquery.com/jQuery.holdReady/) _持有或释放jQuery的就绪事件的执_<!--rehype:tooltips-->
- [jQuery.when()](https://api.jquery.com/jQuery.when/) _提供一种基于零个或多个 Thenable 对象执行回调函数的方法，通常是表示异步事件的 Deferred 对_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### 延迟对象
<!--rehype:wrap-class=row-span-2-->

- [jQuery.Deferred()](https://api.jquery.com/jQuery.Deferred/) _返回可链接实用程序对象的工厂函数，该对象具有将多个回调注册到回调队列、调用回调队列以及中继任何同步或异步函数的成功或失败状态的方法_<!--rehype:tooltips-->
- [deferred.always()](https://api.jquery.com/deferred.always/) _添加要在延迟对象被解析或拒绝时调用的处理程序_<!--rehype:tooltips-->
- [deferred.done()](https://api.jquery.com/deferred.done/) _添加要在解析延迟对象时调用的处理程序_<!--rehype:tooltips-->
- [deferred.fail()](https://api.jquery.com/deferred.fail/) _添加处理程序以在延迟对象被拒绝时调用_<!--rehype:tooltips-->
- [deferred.isRejected()](https://api.jquery.com/deferred.isRejected/) _判断一个 Deferred 对象是否被拒绝_<!--rehype:tooltips-->
- [deferred.isResolved()](https://api.jquery.com/deferred.isResolved/) _判断一个 Deferred 对象是否已经解析_<!--rehype:tooltips-->
- [deferred.notify()](https://api.jquery.com/deferred.notify/) _使用给定的 args 在 Deferred 对象上调用 progressCallbacks_<!--rehype:tooltips-->
- [deferred.notifyWith()](https://api.jquery.com/deferred.notifyWith/) _使用给定的上下文和参数调用 Deferred 对象的 progressCallbacks_<!--rehype:tooltips-->
- [deferred.pipe()](https://api.jquery.com/deferred.pipe/) _过滤和/或链接 Deferreds 的实用方法_<!--rehype:tooltips-->
- [deferred.progress()](https://api.jquery.com/deferred.progress/) _添加在 Deferred 对象生成进度通知时要调用的处理程序_<!--rehype:tooltips-->
- [deferred.promise()](https://api.jquery.com/deferred.promise/) _返回一个 Deferred 的 Promise 对象_<!--rehype:tooltips-->
- [deferred.reject()](https://api.jquery.com/deferred.reject/) _拒绝 Deferred 对象并使用给定的 args 调用任何 failCallbacks_<!--rehype:tooltips-->
- [deferred.rejectWith()](https://api.jquery.com/deferred.rejectWith/) _拒绝 Deferred 对象并使用给定的上下文和参数调用任何 failCallbacks_<!--rehype:tooltips-->
- [deferred.resolve()](https://api.jquery.com/deferred.resolve/) _解析一个 Deferred 对象并使用给定的 args 调用任何 doneCallbacks_<!--rehype:tooltips-->
- [deferred.resolveWith()](https://api.jquery.com/deferred.resolveWith/) _解析延迟对象并使用给定的上下文和参数调用任何 doneCallbacks_<!--rehype:tooltips-->
- [deferred.state()](https://api.jquery.com/deferred.state/) _确定 Deferred 对象的当前状态_<!--rehype:tooltips-->
- [deferred.then()](https://api.jquery.com/deferred.then/) _添加要在延迟对象被解析、拒绝或仍在进行中时调用的处理程序_<!--rehype:tooltips-->
- [.promise()](https://api.jquery.com/promise/) _返回一个 Promise 对象以观察绑定到集合的特定类型的所有操作（无论是否排队）何时完成_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### 公用事业
<!--rehype:wrap-class=row-span-3-->

- [jQuery.boxModel](https://api.jquery.com/jQuery.boxModel/) _说明用户浏览器中的当前页面是否正在使用 W3C CSS 盒模型呈现_<!--rehype:tooltips-->
- [jQuery.browser](https://api.jquery.com/jQuery.browser/) _包含用户代理的标志，从 navigator.userAgent 读取。 此属性在 jQuery 1.9 中被删除，只能通过 jQuery.migrate 插件使用。 请尝试改用特征检测_<!--rehype:tooltips-->
- [jQuery.contains()](https://api.jquery.com/jQuery.contains/) _检查一个 DOM 元素是否是另一个 DOM 元素的后代_<!--rehype:tooltips-->
- [jQuery.each()](https://api.jquery.com/jQuery.each/) _通用迭代器函数，可用于无缝迭代对象和数组。 具有长度属性的数组和类似数组的对象（例如函数的参数对象）按数字索引迭代，从 0 到 length-1。 其他对象通过它们的命名属性迭代_<!--rehype:tooltips-->
- [jQuery.extend()](https://api.jquery.com/jQuery.extend/) _将两个或多个对象的内容合并到第一个对象中_<!--rehype:tooltips-->
- [jQuery.globalEval()](https://api.jquery.com/jQuery.globalEval/) _全局执行一些 JavaScript 代码_<!--rehype:tooltips-->
- [jQuery.grep()](https://api.jquery.com/jQuery.grep/) _查找满足过滤功能的数组元素。 原数组不受影响_<!--rehype:tooltips-->
- [jQuery.inArray()](https://api.jquery.com/jQuery.inArray/) _在数组中搜索指定值并返回其索引（如果未找到，则返回 -1）_<!--rehype:tooltips-->
- [jQuery.isArray()](https://api.jquery.com/jQuery.isArray/) _判断参数是否为数组_<!--rehype:tooltips-->
- [jQuery.isEmptyObject()](https://api.jquery.com/jQuery.isEmptyObject/) _检查对象是否为空（不包含可枚举属性）_<!--rehype:tooltips-->
- [jQuery.isFunction()](https://api.jquery.com/jQuery.isFunction/) _确定其参数是否可作为函数调用_<!--rehype:tooltips-->
- [jQuery.isNumeric()](https://api.jquery.com/jQuery.isNumeric/) _确定其参数是否表示 JavaScript 数字_<!--rehype:tooltips-->
- [jQuery.isPlainObject()](https://api.jquery.com/jQuery.isPlainObject/) _检查对象是否为普通对象_<!--rehype:tooltips-->
- [jQuery.isWindow()](https://api.jquery.com/jQuery.isWindow/) _判断参数是否为窗口_<!--rehype:tooltips-->
- [jQuery.isXMLDoc()](https://api.jquery.com/jQuery.isXMLDoc/) _检查 DOM 节点是否在 XML 文档中（或者是 XML 文档）_<!--rehype:tooltips-->
- [jQuery.makeArray()](https://api.jquery.com/jQuery.makeArray/) _将类数组对象转换为真正的 JavaScript 数组_<!--rehype:tooltips-->
- [jQuery.map()](https://api.jquery.com/jQuery.map/) _将数组或对象中的所有项转换为新的项数组_<!--rehype:tooltips-->
- [jQuery.merge()](https://api.jquery.com/jQuery.merge/) _将两个数组的内容合并到第一个数组中_<!--rehype:tooltips-->
- [jQuery.noop()](https://api.jquery.com/jQuery.noop/) _空函数_<!--rehype:tooltips-->
- [jQuery.now()](https://api.jquery.com/jQuery.now/) _返回代表当前时间的数字_<!--rehype:tooltips-->
- [jQuery.parseHTML()](https://api.jquery.com/jQuery.parseHTML/) _将字符串解析为 DOM 节点数组_<!--rehype:tooltips-->
- [jQuery.parseJSON()](https://api.jquery.com/jQuery.parseJSON/) _获取格式正确的 JSON 字符串并返回生成的 JavaScript 值_<!--rehype:tooltips-->
- [jQuery.parseXML()](https://api.jquery.com/jQuery.parseXML/) _将字符串解析为 XML 文档_<!--rehype:tooltips-->
- [jQuery.proxy()](https://api.jquery.com/jQuery.proxy/) _接受一个函数并返回一个总是有特定上下文的新函数_<!--rehype:tooltips-->
- [jQuery.support](https://api.jquery.com/jQuery.support/) _表示存在不同浏览器功能或错误的属性集合。 用于 jQuery 的内部使用； 当内部不再需要特定属性以提高页面启动性能时，可能会删除它们。 对于您自己项目的功能检测需求，我们强烈建议使用外部库（例如 Modernizr），而不是依赖于 jQuery.support 中的属性_<!--rehype:tooltips-->
- [jQuery.trim()](https://api.jquery.com/jQuery.trim/) _删除字符串开头和结尾的空格_<!--rehype:tooltips-->
- [jQuery.type()](https://api.jquery.com/jQuery.type/) _确定对象的内部 JavaScript [[Class]]_<!--rehype:tooltips-->
- [jQuery.unique()](https://api.jquery.com/jQuery.unique/) _对 DOM 元素数组进行适当的排序，并删除重复项。 请注意，这仅适用于 DOM 元素数组，不适用于字符串或数字_<!--rehype:tooltips-->
- [jQuery.uniqueSort()](https://api.jquery.com/jQuery.uniqueSort/) _对 DOM 元素数组进行适当的排序，并删除重复项。 请注意，这仅适用于 DOM 元素数组，不适用于字符串或数字_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### DOM 元素方法

- [.get()](https://api.jquery.com/get/) _检索与 jQuery 对象匹配的元素之一_<!--rehype:tooltips-->
- [.index()](https://api.jquery.com/index/) _从匹配的元素中搜索给定的元素_<!--rehype:tooltips-->
- [.size()](https://api.jquery.com/size/) _返回 jQuery 对象中元素的数量_<!--rehype:tooltips-->
- [.toArray()](https://api.jquery.com/toArray/) _检索 jQuery 集合中包含的所有元素，作为数组_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### 内部结构

- [.jquery](https://api.jquery.com/jquery-2/) _包含 jQuery 版本号的字符串_<!--rehype:tooltips-->
- [.context](https://api.jquery.com/context/) _最初传递给 jQuery() 的 DOM 节点上下文； 如果未通过，则上下文可能是文档_<!--rehype:tooltips-->
- [jQuery.error()](https://api.jquery.com/jQuery.error/) _获取一个字符串并抛出包含它的异常_<!--rehype:tooltips-->
- [.length](https://api.jquery.com/length/) _jQuery 对象中元素的数量_<!--rehype:tooltips-->
- [.pushStack()](https://api.jquery.com/pushStack/) _将一组 DOM 元素添加到 jQuery 堆栈中_<!--rehype:tooltips-->
- [.selector](https://api.jquery.com/selector/) _代表选择器的选择器在创建原始集合时传递给 jQuery()，如果有的话_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->

### 回调对象

- [jQuery.Callbacks()](https://api.jquery.com/jQuery.Callbacks/) _一个多用途回调列表对象，提供了一种管理回调列表的强大方法_<!--rehype:tooltips-->
- [callbacks.add()](https://api.jquery.com/callbacks.add/) _将回调或回调集合添加到回调列表_<!--rehype:tooltips-->
- [callbacks.disable()](https://api.jquery.com/callbacks.disable/) _禁止回调列表做更多的事情_<!--rehype:tooltips-->
- [callbacks.disabled()](https://api.jquery.com/callbacks.disabled/) _确定回调列表是否已被禁用_<!--rehype:tooltips-->
- [callbacks.empty()](https://api.jquery.com/callbacks.empty/) _从列表中删除所有回调_<!--rehype:tooltips-->
- [callbacks.fire()](https://api.jquery.com/callbacks.fire/) _使用给定参数调用所有回调_<!--rehype:tooltips-->
- [callbacks.fired()](https://api.jquery.com/callbacks.fired/) _确定回调是否已至少被调用一次_<!--rehype:tooltips-->
- [callbacks.fireWith()](https://api.jquery.com/callbacks.fireWith/) _使用给定的上下文和参数调用列表中的所有回调_<!--rehype:tooltips-->
- [callbacks.has()](https://api.jquery.com/callbacks.has/) _确定列表是否附加了任何回调。如果回调作为参数提供，请确定它是否在列表中_<!--rehype:tooltips-->
- [callbacks.lock()](https://api.jquery.com/callbacks.lock/) _将回调列表锁定在其当前状态_<!--rehype:tooltips-->
- [callbacks.locked()](https://api.jquery.com/callbacks.locked/) _判断回调列表是否被锁定_<!--rehype:tooltips-->
- [callbacks.remove()](https://api.jquery.com/callbacks.remove/) _从回调列表中删除回调或回调集合_<!--rehype:tooltips-->
<!--rehype:className=cols-2 style-none-->
