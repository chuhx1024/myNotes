#### baseCompile 中的 parse 函数
- 把 模板字符串转换成 AST 对象(抽象语法树)
- 过程比较复杂 借鉴一个开源库(simplehtmlparser.js) 解析html
- 参数 (template.trim(), options) 模板 和 合并后的选项
- 返回解析好的 AST 对象

#### baseCompile 中的 optimize 函数
- parse 处理后生成 AST
- optimize 就是对 AST 的优化
- 优化的目的是标记抽象语法树上的静态节点(就是永远不会发生变化, 比如一个div 里边是纯文本)
    - 主要根据 AST 的type 属性 判断 type === 3 text

#### baseCompile 中的 generate 
- 把优化好的 AST 转换成 字符串形式的 js 代码




