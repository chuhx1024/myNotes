// 冒泡排序
const bubbleSort = (arr) => {
    for (var i = 0; i < arr.length -1; i++) {
        for (var j = 0; j< arr.length - 1 -i; j++) {
            if( arr[j] > arr[j + 1]) {
                // 使用结构赋值 实现两个项互换
                [ arr[j], arr[j+1] ] = [ arr[j + 1], arr[j] ]
            }
        }
    }
    return arr
}

console.log(bubbleSort([4,5,3,1,9, 100]))



function bubbleSort1 (arr) {
    arr.forEach((item, index) => {
        for (let i = 0; i < arr.length - index; i ++) {
            if (arr[i] > arr[i + 1]) { // 根据这里判断是稳定排序
                // 使用解构赋值 实现两个变量互换 
                // 这里还使用了闭包缓存  
                [ arr[i], arr[i+1] ] = [ arr[i + 1], arr[i] ]
            }
        }
    })
    console.log(arr)
}
bubbleSort1([4,5,3,1,9, 100])
