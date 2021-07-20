# JS字符串方法总结

## 1. length 属性返回字符串的长度
```js
const str = '1234567'
console.log(str.length)
```

## 2. indexOf()     方法返回字符串中指定文本 首次 出现的索引
## 3. lastIndexOf() 方法返回字符串中指定文本 最后 出现的索引
## 4. includes()    方法返回 true false
```js
const str = "China"
const result0 = str.indexOf('China')  // 0
const result1 = str.indexOf('C')      // 0
const result2 = str.indexOf('w')      // 不包含 返回 -1
const result3 = str.indexOf()
// 两种方法都接受作为检索起始位置的第二个参数 缩小搜查范围
var str = "The full name of is the People's Republic of China."
const result0 = str.indexOf("China"))     // 45   
const result1 = str.indexOf("China", 11)) // 45

```

## 5. 有三种提取字符串的方法
- slice(start, end)
- substring(start, end) // 类似于 slice() 不同之处在于 substring() 无法接受负的索引。
- substr(start, length) // 类似于 slice() 不同之处在于第二个参数规定被提取部分的长度。 省略截取到最后
```js
const str = '0123456789'
const result = str.slice(1, 4)   // 123  // 注意包括 前 不包括后 [ )
cosnt result = str.slice(1, -1)  // 12345678  // 负值从左数 -1 不包含9
const result = str.slice(1);     // 123456789  // 不写 就接到最后了  
const result = str.slice(-5);    // 56789  // 简单记忆 截取后五位 
```

## 6. split() 把字符串转换为数组
```js
const str = 'a,b,c,d,e,f'
const arr = str.split(',') // ['a', 'b', 'c', 'd', 'e', 'f']
// 反过来  用的是数组的 join(',') 
```

## 7. replace() 方法不会改变调用他的字符串, 它返回一个新的字符串
- 默认地, replace() 只替换首个匹配
```
const str = 'Please visit Microcoft and Microcoft!'
const n = str.replace('Microcoft', 'W3cScholl') //  "Please visit W3School and Microsoft!"
```
- 默认地，replace() 对大小写敏感
```js
const str = "Please visit Microsoft and Microsoft!" 
const n = str.replace("microsoft", "W3School") //  "Please visit Microsoft and Microsoft!"
```
- 如需替换所有匹配，请使用正则表达式的 g 标志（用于全局搜索)
```js
const str = "Please visit Microsoft and Microsoft!" 
const n = str.replace(/Microsoft/g, "W3School") //  "Please visit W3School and W3School!"
```
- 
# 正则相关
### 字符串的方法
- match()
对字符串进行正则匹配 返回匹配的结果
```js
var str = 'hello world'
undefined
str.match(/l/)
=>> ["l", index: 2, input: "hello world", groups: undefined]
str.match(/l/g)
=>>["l", "l", "l"]
str.match(/a/g)
=>>null
```
- search()
返回第一个满足条件的匹配结果在整个字符串中的位置 , 如果没有任何匹配, 返回 -1
```js
var str = 'hello world'
undefined
str.search(/l/)
=>> 2
str.search(/llo/)
=>> 2
str.match(/l/g)
=>>2
str.match(/a/)
=>>-1
```

- replace(regexp/substr,replacement)
可以替换匹配的值, 它接受两个参数,
    - 第一参数是正则表达式或字符串(表示搜索模式), 
    - 第二个是匹配的内容 一个字符串值。替换文本的函数(要有return)
        - 在这种情况下，每个匹配都调用该函数，它返回的字符串将作为替换文本使用。该函数的第一个参数是匹配模式的字符串。接下来的参数是与模式中的子表达式匹配的字符串，可以有 0 个或多个这样的参数。接下来的参数是一个整数，声明了匹配在 stringObject 中出现的位置。最后一个参数是 stringObject 本身。


```js
'2019.10.05'.replace(/\./g, '-')
=>> '2019-10-05'

let data = {
    name: '小明',
    message: '消息'
}
let str = "<p>{{name}}-{{message}}</p>"
let exp = /\{\{(.+?)(\})\}/g
let result = str.replace(exp, (a, $1, $2, index, strObj) => {
    // 根据 str 的特征 此回调调用两次 注意 $1, $2 .... 和 正则的分组要一致
    console.log(a)  // {{name}} {{message}}
    console.log($1) // name message
    console.log($2) // } }
    console.log(index) // 3 12
    console.log(strObj) // "<p>{{name}}-{{message}}</p>" "<p>{{name}}-{{message}}</p>"
    return data[$1] // 返回值就是要替换的
})
console.log(str)    // <p>{{name}}-{{message}}</p>
console.log(result) // <p>小明-消息</p>
```

## 8. 大小写转换 
- toUpperCase() 把字符串转换为大写
- toLowerCase() 把字符串转换为小写
```js
const str = 'Hello World'
cosnt result = str.toUpperCase() // 'HELLO WORLD'
```

## 9. concat() 拼接一个或多个字符串

```js
const str0 = 'Hello'
cosnt str1 = 'World'
const result = str0.concat(' ', str1) // 'Hello World'
```

## 10. trim() 截掉首尾的空白符
```js
 
const str = "       Hello World!        ";
cosnt result = str.trim();  //  Hello World!

// Internet Explorer 8 或更低版本不支持 trim() 方法 
// 如需支持 IE 8，您可搭配正则表达式使用 replace() 方法代替：
// var str = "       Hello World!        ";
// alert(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
```

## 11. 通过下标 提取字符串 charAt(position) charCodeAt(position)
```js
var str = "HELLO WORLD";
str.charAt(0);            // 返回 H
str.charCodeAt(0);         // 返回 72   这是'H'的 unicode 编码

// 最好还是使用 str[0] // 更加直观
* 使用属性访问有点不太靠谱：

  * 不适用 Internet Explorer 7 或更早的版本
  * 它让字符串看起来像是数组（其实并不是）
  * 如果找不到字符，[ ] 返回 undefined，而 charAt() 返回空字符串。
  * 它是只读的。str[0] = "A" 不会产生错误（但也不会工作！） 赋值是无效的
```

## 12. 检测以...开头 以... 结尾 startWith() endWith() 返回 true false
```js
```
## 13. 补位方法 padStart() padEnd()
```js
```
## 12. 字符串中加空格
```js
const str = 'something' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'something';
```
