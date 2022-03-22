
// 思路: 直接 获取 当前item的 lastIndexOf 的值 就是下标 ; 
// 如果没有重复项 nums.lastIndexOf(nums[i]) - i 就是 0;  
// 如果有 从indexOf位开始删除(lastIndexOf-indexOf)位数据，
function removeSameItem (arrs) {
    let count = 0
    for (let i = arrs.length -1; i >= 0; i--) {
        if (arrs[i] === 9) {
            count++
        } else {
            return false
        }
    }
    return count
}
console.log(removeSameItem([1,2,3, 9]))

// /**
//  * 使用 Set()
//  */

// function arrSet (arrs) {
//     let temp = []
//     new Set(arrs).forEach(item => {
//         temp.push(item)
//     })
//     return temp
// }

// console.log(arrSet([1,2,3,4,4,6,6,6,6,7]))


