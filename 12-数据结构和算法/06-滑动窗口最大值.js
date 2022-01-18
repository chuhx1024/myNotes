/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    if (k <= 1) return nums
    const result = []
    const deque = []

    deque.push(nums[0])

    let i = 1
    for(; i < k; i++) {
        while (deque.length && nums[i] > deque[deque.length -1]) {
            deque.pop()
        }
        deque.push(nums[i])
    }

    result.push(deque[0])

    // 遍历后续的数据

    const len = nums.length
    for(; i< len; i++) {
        // 删除没有用的数据
        while (deque.length && nums[i] > deque[deque.length -1]) {
            deque.pop()
        }
        // 准备好了 可以入队了
        deque.push(nums[i])

        // 处理特殊情况 如果 当前最大值在窗口外  就需要移除队列了

        if (deque[0] === nums[i-k]) {
            deque.shift()
        }

        result.push(deque[0])
    }

    return result
};