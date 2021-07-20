# JS数组方法总结

## 改变原数组的：
- push：向数组末尾添加元素，并返回新的长度
- pop：删除最后一个并返回删除的元素
- unshift：向数组开头添加元素，并返回新的长度
- shift：将第一个元素删除并且返回删除元素，空即为undefined
- splice:splice(start,length,item[可以是多个])删，增，替换数组元素，返回被删除数组，无删除则不返回
- reverse：颠倒数组顺序
- sort：对数组排序

## 不改变原数组的：
- concat：连接多个数组，返回新的数组
- join：将数组中所有元素以参数作为分隔符放入一个字符
- slice：slice(start,end)，返回选定元素
- reduce 累加
- map,filter,forEach,some,every等不改变原数组
## 数组方法详细总结
- Array.push()，向数组的末尾添加一个或多个元素，并返回新的数组长度。原数组改变。
```js
var arr = [1, 2, 3, 4]
var result = arr.push(5,6,7)  // 可以是一个可以是多个
// arr = [1,2,3,4,5,6,7]
// result = 7
```
- Array.pop()，删除并返回数组的最后一个元素，若该数组为空，则返回undefined。原数组改变。
```js
var arr = [1,2,3,4,5,6,7]
var del = arr.pop()
// del = 7
// arr = [1,2,3,4,5,6]
```
- Array.unshift(), 向数组的开头添加一个或者多个元素, 并返回新的数组长度, 原数组改变
- Array.shift(), 删除并返回数组的第一个元素，若该数组为空，则返回undefined。原数组改变。
- Array.splice(index, num, item0, item1, item2) 删除元素并替换 可实现曾,删,改
    - 从 index(下标) 位置开始删除 num 个元素，并将item0、item1、item2...数据从index位置依次插入
    - num 为 0 不删除 从 index 后添加
    - 没有 item, 则删除不添加

- Array.reverse() 将数组倒序 改变原数组
```js
var arr = [1,2,3,4,5,6]
arr.reverse()
// arr = [6,5,4,3,2,1]
```

- Array.sort() 对数组排序 按照字符串的 Unicode码排序 原数组改变
```js
// 从小到大
arr.sort((a,b) => {
    return a-b
})

// 从大到小
arr.sort((a,b) => {
    return b-a
})

// 按照数组对象的某个值进行排序
var arr = [
    {name: '张三', age: 17}
    {name: '张四', age: 16}
    {name: '张五', age: 22}
    {name: '张六', age: 18}
]
 
arr.sort((a,b) => {
    return a.age - b.age
})

// arr = [
    {name: '张四', age: 16}
    {name: '张三', age: 17}
    {name: '张六', age: 18}
    {name: '张五', age: 22}
]

```


- Array.concat(arr1, arr2), 合并两个或者多个数组生成一个新的数组, 原数组不变
```js
var arr = [1,2,3,4,5,6,7]
var arr1 = ['a','b','c']
var arr2 = ['q','e','r']
var result = arr.concat(arr1, arr2)
// res = [1,2,3,4,5,6,7,'a','b','c','q','e','r']
// arr = [1,2,3,4,5,6,7]
```
- Array.join() 将数组拼成字符串 (还原用 String.split)
```js
var arr = [1,2,3,4,5]
var str0 = arr.join()
var str1 = arr.join('-')
// str0 = '1,2,3,4,5'
// str1 = '1-2-3-4-5'
```


- Array.slice(start, end): 
    - 从start开始到end不包含end 如果不给end 截取到最后
    - start 可以是负值 -1 是最后一个 -2 是倒数第二个 和 正值一样 也是 包含前 不包含后
    - 不改变原数组 返回选定数据
```js
var arr = [1,2,3,4,5,6]
var result0 = arr.slice(1,3) // [2,3]
var result1 = arr.slice(-3,-1) // [4,5] (顾前不顾后 所以不包含 6)
```

- Array.forEach(function) 
    - 用于调用数组的每个元素，并将元素传递给回调函数。原数组不变。
    - 没法接收 结果为 undefined
- Array.map(function) 
    - map和forEach的区别  后者没有返回值    
    - 若案例改为forEach   则 abc为underfined
```js
// 注意:若数组的每项为对象  map 和forEach方法则会改变原数组  
 var arr=[
    {name:"小明",age:15},
    {name:"小华",age:16},
    ];
 var abc=arr.map((item,index,arr)=>{
    item.sex="男"
    return item;
  });
  console.log(arr);//[{name: "小明", age: 15, sex: "男"},{name: "小华", age: 16, sex: "男"}]
  console.log(abc);//[{name: "小明", age: 15, sex: "男"},{name: "小华", age: 16, sex: "男"}]
```
- Array.filter(()=>{}) 过滤数组中 符合条件的元素并返回一个新数组 (不改变原数组 要接收)
```js
var arr = [1,2,3,4,5]
var newArr = arr.filter((item)=> {
    return item > 3
})
// newArr = [4,5]
```
- Array.every(()=>{}) 对数组的每项都判断 如果都返回 true 则整体结果为 true
- Array.some(()=>{}) 对数组的每项都判断 如果有一个满足条件返回 true 则整体结果为 true

- Array.reduce((total, item, index, arr) => {}, initialValue) 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
    - total 必需。初始值, 或者计算结束后的返回值。
    - item 必需 当前元素
    - index 可选 当前索引
    - arr 可选 当前元素所属的数组对象
    - initialValue 可选 传递给函数的初始值
```js
// 求和
var arr = [1,2,3,4,5]
var result0 = arr.reduce((total, item) => {
    return total + item // 每次循环都把item 累加到 total 循环结束就返回了 所有的累加值
})
// result0 = 15

var result1 = arr.reduce((total, item) => {
    return total + item 
}, 10)
// result1 = 25 // 因为加了初始值

// 拓展 可以在累加前 操作整理 item
return total + Math.round(item) // 四舍五入后求和


```


 

