<!--
index: 1
title: 快速上手
resource:
  jsFiles:
    - ${url.f2}
-->

# F2快速上手

## 安装

### 浏览器引入

既可以通过将脚本下载到本地也可以直接引入在线资源；


```html
<!-- 引入在线资源 -->
<script src="{{ url.f2 }}"></script>
```

```html
<!-- 引入本地脚本 -->
<script src="./f2.js"></script>
```

### 通过 npm 安装
<a href="https://www.npmjs.com/package/@antv/f2" target="_blank"><img src="https://img.shields.io/npm/v/@antv/f2.svg?style=flat-square"></a>

我们提供了 F2 npm 包，通过下面的命令即可完成安装

```bash
npm install @antv/f2 --save
```
成功安装完成之后，即可使用 `import` 或 `require` 进行引用。

```js
const F2 = require('@antv/f2');
```

## 开始使用

在 F2 引入页面后，我们就已经做好了创建第一个图表的准备了。

下面是以一个基础的柱状图为例开始我们的第一个图表创建。

### 浏览器引入方式

#### 1. 创建 `canvas` 标签

在页面上创建一个 canvas 并指定 `id`：

```html
<canvas id="c1"></canvas>
```

#### 2. 编写图表绘制代码

创建 `canvas` 标签后，我们就可以进行简单的图表绘制:

1. 创建 Chart 图表对象，指定图表 ID、指定图表的宽高、边距等信息；
2. 载入图表数据源；
3. 使用图形语法进行图表的绘制；
4. 渲染图表。

```js
// F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
const data = [ 
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

// Step 1: 创建 Chart 对象
const chart = new F2.Chart({
  id: 'c1', // 指定图表容器 ID
  width: 500, // 指定图表宽度
  height: 300 // 指定图表高度    
});

// Step 2: 载入数据源
chart.source(data);

// Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
chart.interval().position('genre*sold').color('genre');

// Step 4: 渲染图表
chart.render();
```

完成上述两步之后，保存文件并用浏览器打开，一张柱状图就绘制成功了：

<canvas id="c1" width="500" height="300"></canvas>

```js-
  var data = [
    {genre: 'Sports', sold: 275},
    {genre: 'Strategy', sold: 115},
    {genre: 'Action', sold: 120},
    {genre: 'Shooter', sold: 350},
    {genre: 'Other', sold: 150},
  ];
  var chart = new F2.Chart({
    id: 'c1',
    pixelRatio: window.devicePixelRatio
  });
  chart.source(data);
  chart.interval().position('genre*sold').color('genre')
  chart.render();
```

### 更多示例

更多的示例直接查看 [Demo](../demo/index.html)
