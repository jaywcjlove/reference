HTML Canvas 备忘清单
===

这份 HTML Canvas 快速参考备忘单列出了常见的 HTML5 Canvas 设计标签，以易读的格式呈现。

入门
---
<!--rehype:body-class=cols-4-->

### 基本设置
<!--rehype:wrap-class=col-span-2-->

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Canvas 示例</title>
  </head>
  <body>
    <canvas id="myCanvas" width="500" height="400"
      style="border:1px solid #000000;">
    </canvas>
    <script src="script.js"></script>
  </body>
</html>
```

### 获取上下文
<!--rehype:wrap-class=col-span-2-->

```js
const canvas = document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");
```

绘制形状
---

### 矩形
<!--rehype:wrap-class=col-span-2-->

```js
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 150, 100); // x, y, 宽度, 高度

ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.strokeRect(200, 10, 150, 100); // x, y, 宽度, 高度

ctx.clearRect(15, 15, 30, 30); // x, y, 宽度, 高度
```

路径
---

### 线条

```js
ctx.beginPath();
ctx.moveTo(50, 50); // 起始点
ctx.lineTo(200, 50); // 结束点
ctx.lineTo(200, 200); // 下一个线条结束点
ctx.closePath(); // 将结束点连接到起始点
ctx.stroke();
```

### 圆形

```js
ctx.beginPath();
// x, y, 半径, 起始角度, 结束角度
ctx.arc(150, 150, 75, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();
```

### 弧

```js
ctx.beginPath();
// x, y, 半径, 起始角度, 结束角度
ctx.arc(150, 150, 75, 0, Math.PI);
ctx.stroke();
```

贝塞尔曲线和二次曲线
---

### 二次曲线

```js
ctx.beginPath();
ctx.moveTo(50, 250);
// cpX, cpY, 终点X, 终点Y
ctx.quadraticCurveTo(200, 100, 400, 250); 
ctx.stroke();
```

### 贝塞尔曲线

```js
ctx.beginPath();
ctx.moveTo(50, 300);
// cp1X, cp1Y, cp2X, cp2Y, 终点X, 终点Y
ctx.bezierCurveTo(150, 100, 350, 500, 450, 300); 
ctx.stroke();
```

### 文本

```js
ctx.font = "30px Arial";
ctx.fillStyle = "black";
// 文本, x, y
ctx.fillText("Hello Canvas", 10, 50); 
// 文本, x, y
ctx.strokeText("Hello Canvas", 10, 100); 
```

### 图像
<!--rehype:wrap-class=col-span-3-->

```js
const img = new Image();
img.src = "path/to/image.jpg";
img.onload = () => {
  ctx.drawImage(img, 10, 10); // img, x, y
  ctx.drawImage(img, 50, 50, 100, 100); // img, x, y, 宽度, 高度
  ctx.drawImage(img, 100, 100, 100, 100, 150, 150, 200, 200); // img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
};
```

变换
---

### 平移

```js
ctx.translate(100, 100); // x, y
ctx.fillRect(0, 0, 50, 50);
```

### 旋转

```js
// 角度（以弧度为单位）
ctx.rotate((Math.PI / 180) * 45);
ctx.fillRect(100, 100, 50, 50);
```

### 缩放

```js
ctx.scale(2, 2); // x, y
ctx.fillRect(50, 50, 50, 50);
```

渐变
---

### 线性渐变
<!--rehype:wrap-class=col-span-2-->

```js
const linearGradient = ctx.createLinearGradient(0, 0, 200, 0); // x0, y0, x1, y1
linearGradient.addColorStop(0, "red");
linearGradient.addColorStop(1, "blue");
ctx.fillStyle = linearGradient;
ctx.fillRect(10, 10, 200, 100);
```

### 径向渐变

```js
const radialGradient = ctx.createRadialGradient(75, 50, 5, 90, 60, 100); // x0, y0, r0, x1, y1, r1
radialGradient.addColorStop(0, "red");
radialGradient.addColorStop(1, "blue");
ctx.fillStyle = radialGradient;
ctx.fillRect(10, 10, 200, 100);
```

### 图案
<!--rehype:wrap-class=col-span-2-->

```js
const img = new Image();
img.src = "path/to/image.jpg";
img.onload = () => {
  // 'repeat', 'repeat-x', 'repeat-y', 'no-repeat'
  const pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 300);
};
```

### 阴影

```js
ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;

ctx.fillStyle = "red";
ctx.fillRect(100, 100, 100, 100);
```

合成
---

### 全局透明度

```js
ctx.globalAlpha = 0.5;
ctx.fillStyle = "red";
ctx.fillRect(100, 100, 100, 100);

ctx.fillStyle = "blue";
ctx.fillRect(150, 150, 100, 100);
```

### 全局合成操作

```js
ctx.globalCompositeOperation = "source-over"; // 默认
ctx.fillStyle = "red";
ctx.fillRect(100, 100, 100, 100);

ctx.globalCompositeOperation = "destination-over";
ctx.fillStyle = "blue";
ctx.fillRect(150, 150, 100, 100);
```

### 动画

```js
let x = 0;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(x, 100, 50, 50);
  x += 2;
  requestAnimationFrame(draw);
}
draw();
```

参考阅读
---

- [MDN 文档](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
