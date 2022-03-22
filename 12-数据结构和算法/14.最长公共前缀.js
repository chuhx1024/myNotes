function longestCommonPrefix (strs) {
    
    if (strs.length === 0) return ''
    // 假设 strs 第一项为 最长公共前缀
    let ans = strs[0]

    for (let i = 1; i< strs.length; i++) {
        let j = 0
        for (; j< strs[i].length; j++) {
            if (ans[j] !== strs[i][j]) {
                break;
            }
        }
        ans = ans.substr(0,j)
    }
    return ans
}

console.log(longestCommonPrefix(['jkl123', 'jkl44', 'jkli99'])) // jkl