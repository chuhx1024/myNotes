### 1. 浮动引起元素变成行内块元素-display:inline-block
```
<div style="width: 400px;height: 200px;">
    <span style="float:left;width: auto;height: 100%;">
        <i style="position: absolute;float: left; width: 100px;height: 50px;">
            hello
        </i>
    </span>
</div>
```
>效果：
>div正常宽高
>span{width:0;height:200px}
>i{width:100px;height:50px}
>
>所有元素经过浮动变为行内块元素 -- span不是块级元素，不支持宽高,浮动后支持宽高，height:100% 即是200px。i中绝对定位，脱离文档流，不占父级空间，所以span的width:0;
>上面解析：W3C中，float会使元素产生块级框，可以理解为inline-block;但是inline-block元素之间会默认产生空白符，而flaot之间没有。虽然float脱离了文档流，但是div仍然是span的父元素，因此height:100%;也就是继承了父元素div的高度200px。i设置了postion，脱离了文档流，并不影响父元素,所以span的width:0px;
### 2. 显示不全的文字 ... 表示
```
.ellipsis {
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
}

.mulEllipsis {
    overflow: hidden;            // 溢出隐藏
    text-overflow: ellipsis;     // 溢出用省略号显示
    display:-webkit-box;         // 作为弹性伸缩盒子模型显示。
    -webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
    -webkit-line-clamp:3;        // 显示的行数
}
```
### 3. 关于水平对齐及垂直对齐的总结
#### 水平居中：
1. 父元素是块元素，子元素是行内元素。

　　对父元素使用text-again:center 来设定行内元素水平居中。

2. 父元素是块元素，子元素是块元素且宽度已经设定。

  解法1：给子元素添加margin：0 auto；

  解法2：当父元素和子元素宽度都已知的情况下，给父元素设定padding-left或padding-rigt，或者给子元素设定margin-left或margin-right，长度为（父元素宽度-子元素宽度）/2，给父元素和子元素设定为box-sizing:border-box;可方便计算，否则得加上父元素和子元素的边框宽度。

  解法3：子元素相对父元素的决定定位来解决 (子元素 left:50%,margin-left 为负 自身的一半)
  解法4：利用给父元素设置flex
```
  .father {
     display: flex;
     flex-direction: row;
     justify-content: center;
   }
```
#### 垂直居中 : 设定父元素是块级元素 且高度是已经确定的
1. 子元素是行内元素
  给父元素或者子元素 设定line-height且其高度等于父元素的高度
2. 子元素是块级元素且高度已经设定
  利用父元素的padding 或者 子元素的margin 
3. 子元素是块级元素且高度已经设定
```
  .father {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
```

### 4. 画一个三角形
```js
width: 0;
height: 0;
border-width: 100px;
border-style: solid;
border-color: transparent transparent pink transparent;
```

### 5. 伪元素和伪类的区别总结
1. 伪元素操作的是新生成的 DOM 元素 !! 伪类操作的是已存在的 DOM 元素
2. 伪元素:
    - :before :after :first-letter :first-line
3. 伪类:
    - :link :hover :first-child :last-child
### 5. 清除浮动的集中方式, 及原理
#### 方案一
```
父元素中, 追加空子元素, 并设置其 clear 属性为 both
```
#### 方案二
```
设置父元素浮动
```
#### 方案三
```
overflow: hidden or auto
```
#### 方案四
```
父元素设置 display: table;
优势：不影响结构与表现的分离，语义化正确，代码量少
弊端：盒模型属性已经改变，会造成其他问题
```

#### 方案五
- 使用内容生成的方式清除浮动
```
.clearfix:after {
   content:""; 
   display: block; 
   clear:both; 
}
```

#### 方案六
```
.cf:before,.cf:after {
   content:"";
   display:table;
}
.cf:after { clear:both; }
```


### 7. 塌陷
1. 其实是比较疑惑的 子元素浮动了 怎么会影响父元素
2. 如果父元素只包含浮动的元素, 那么父元素的高度就会塌陷为0, 如果父元素没有背景 就很难发现

### 8. background 属性
```
background:background-color ||background-image || background-repeat || background-attachment || background-position||background-size

background-image:url("图片的网址"); 背景图 
background: url(" 图片的网址 "); 背景 
background-color:#色码; 背景色彩 
background-position：默认值：0%  0%，可能值：top left ，center left等
background-repeat：默认值：repeat
scroll 拉动卷轴时，背景图片会跟着移动（缺省值） 
fixed 拉动卷轴时，背景图片不会跟着移动 
repeat 背景图片并排 
background-size：是css3规定的属性，50%为缩放图片；100px 50px：把图片调整到100像素宽，50像素高；cover：拉大图片，使其完全填满背景区；container：缩放图片，使其恰好适合背景区
```

### 9. 行内(inline) 元素的一些属性
- 行内元素不能设置宽高 都是内容撑开的 但是高度可以通过 line-height 调节
- 行内元素的padding 属性 只可以用 padding-left padding-right 生效; padding-top padding-bottom 会改变元素的范围,但是不会对其他元素造成影响
- 行内元素的margin属性只有 margin-left margin-right 生效; margin-top margin-bottom 不生效
- 行内元素的 overflow 无效
- vertical-align 属性无效(height 无效)

### 10. 关于盒子模型
- box-sizing:
    - content-box; 默认值 只计算内容的宽度 
    - padding-box; padding 计算在内
    - border-box; border 和 padding  都计算在再内

### 11. z-index属性在下列情况下会失效：

- 父元素position为relative时，子元素的z-index失效。解决：父元素position改为absolute或static；
- 元素没有设置position属性为非static属性。解决：设置该元素的position属性为relative，absolute或是fixed中的一种；
- 元素在设置z-index的同时还设置了float浮动。解决：float去除，改为display：inline-block；

### 12. flex 布局强化
- 容器属性
    - flex-direction属性决定主轴的方向（即项目的排列方向）。
    - flex-wrap属性定义，如果一条轴线排不下，如何换行。
    - flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
    - justify-content属性定义了项目在主轴上的对齐方式。
    - align-items属性定义项目在交叉轴上如何对齐。
    - align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
- 项目属性
    - order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
    - flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
    - flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
    - flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
    - flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。
    - align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

