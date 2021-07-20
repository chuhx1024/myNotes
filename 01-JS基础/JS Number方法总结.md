# JS 数值方法总结

## 1. toString() 转字符串
```js
const num = 123
const result num.toString() // '123'
```

## toFixed() 返回指定位数的小数  遵循四舍五入 位数不够补0 注意返回的是字符串 (参数为小数的个数)
```js
const num = 4.34567
num.toFixed()   // '4' // 不传参 返回整数
num.toFixed(0)  // '4' // 类似不传参
num.toFixed(1)  // '4.3'
num.toFixed(2)  // '4.35'
num.toFixed(6)  // '4.345670'
```

## toPrecision() 返回指定长度的数字 遵循四舍五入 位数不够补0 注意返回的是字符串 (参数为整数加小数的位数)
```js
var x = 9.656;
x.toPrecision();        // 返回 9.656
x.toPrecision(2);       // 返回 9.7
x.toPrecision(4);       // 返回 9.656
x.toPrecision(6);       // 返回 9.65600

const num = 9999
num.toPrecision()  // '9999' // 不处理 返回原值
num.toPrecision(0)  // 报错
num.toPrecision(3) // '1.00e+4'
```

## valueOf() 以数值返回数值  感觉没什么鸟用 没有理由在代码中使用它。 
```js
var x = 123;
x.valueOf();            // 从变量 x 返回 123
(123).valueOf();        // 从文本 123 返回 123
(100 + 23).valueOf();   // 从表达式 100 + 23 返回 123
```
> 所有 JavaScript 数据类型都有 valueOf() 和 toString() 方法。

## 把变量转换成为数字 
- Number()
- parseInt()
- parseFloat()
> 这些方法并非数字方法，而是全局 JavaScript 方法

> 这些是在处理数字时最相关的方法：
- Number() 返回数字 由其参数转换而来
```js
x = true;
Number(x);        // 返回 1
x = false;     
Number(x);        // 返回 0
x = new Date();
Number(x);        // 返回 1404568027739
x = "10"
Number(x);        // 返回 10
x = "10 20"
Number(x);        // 返回 NaN
x = "10ccc"
Number(x);        // 返回 NaN

Number(new Date("2019-04-15"));    // 返回 1506729600000
```

- parseInt() 解析一段字符串并返回数值。允许空格。只返回首个数字：
```js
parseInt("10");         // 返回 10
parseInt("10.33");      // 返回 10
parseInt("10 20 30");   // 返回 10
parseInt("10 years");   // 返回 10
parseInt("years 10");   // 返回 NaN
```
- parseFloat() 解析一段字符串并返回数值。允许空格。只返回首个数字：
```js
parseFloat("10");        // 返回 10
parseFloat("10.33");     // 返回 10.33
parseFloat("10 20 30");  // 返回 10
parseFloat("10 years");  // 返回 10
parseFloat("years 10");  // 返回 NaN
```

## 返回 js 中最大的数字
```js
Number.MIN_VALUE // 1.7976931348623157e+308
```
