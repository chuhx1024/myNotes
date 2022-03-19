
// 思路: 直接 获取 当前item的 lastIndexOf 的值 就是下标 ; 
// 如果没有重复项 nums.lastIndexOf(nums[i]) - i 就是 0;  
// 如果有 从indexOf位开始删除(lastIndexOf-indexOf)位数据，
function removeSameItem (arrs) {
    for (let i = 0; i < arrs.length; i++) {
        arrs.splice(i, (arrs.lastIndexOf(arrs[i]) - i) )
    }
    return arrs
}
console.log(removeSameItem([1,2,3,4,4,6,6,6,6,7]))

/**
 * 使用 Set()
 */

function arrSet (arrs) {
    let temp = []
    new Set(arrs).forEach(item => {
        temp.push(item)
    })
    return temp
}

console.log(arrSet([1,2,3,4,4,6,6,6,6,7]))


