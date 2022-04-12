# css 优化
## 加载性能:
- （1）css压缩：将写好的css进行打包压缩，可以减小文件体积。
- （2）css单一样式：当需要下边距和左边距的时候，很多时候会选择使用 margin:top 0 bottom 0；但margin-bottom:bottom;margin-left:left;执行效率会更高。

## 选择器性能：
- 尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过三层，更多的使用类来关联每一个标签元素。
- 了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。
    - 可以继承的属性
        - 字体系列属性
            - font-family：字体系列
            - font-weight：字体的粗细
            - font-size：字体的大小
            - font-style：字体的风格
        - 文本系列属性
            - text-indent：文本缩进
            - text-align：文本水平对齐
            - line-height：行高
            - word-spacing：单词之间的间距
            - letter-spacing：中文或者字母之间的间距
            - text-transform：控制文本大小写（就是uppercase、lowercase、capitalize这三个）
            - color：文本颜色
        -元素可见性
            - visibility：控制元素显示隐藏
        - 列表布局属性
            - list-style：列表风格，包括list-style-type、list-style-image等
        - 光标属性
            - cursor：光标显示为何种形态
- 尽量少的去对标签进行选择，而是用class