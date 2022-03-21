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

console.log(bubbleSort([4,5,3,1,9,100]))



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
bubbleSort1([4,5,3,1,9,100])


// 快速排序: 一开始找一个中介, 然后把比它小的放左边 比它大的放右边 然后对中介值两遍的值 重新找中介值 如此循环
// 快排的时间复杂度是 O(nlong), 线性对数阶 属于不稳定排序

function quickSort (arr) {
    if (arr.length <=1) return arr
    let pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr.splice(pivotIndex,1)[0]
    let left = []
    let right = []
    arr.forEach(item => {
        if (item < pivot) {
            left.push(item)
        } else {
            right.push(item)
        }
    })
    left = quickSort(left)
    right = quickSort(right)
    return left.concat(pivot, right)
}

console.log(quickSort([4,5,3,1,9,100,50]))

// 选择排序: 循环 数组 找到最小的 放第一位 , 第二次剩余最小的放第二位...

function selectSort (arr) {
    arr.forEach((item, index) => {
        let min = item
        for(let i = index + 1; i < arr.length; i ++) {
            if (min > arr[i]) {
                let temp = min
                min = arr[i]
                arr[i] = temp
            }
        }
        arr[index] = min

    })
    return arr
}
console.log(selectSort([1,4,900,2,100,4,6,7]))