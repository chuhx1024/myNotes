function isValid (str) {
    // 如果是奇数 直接 false
    if (str.length % 2 === 1) return false

    const obj = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    
    // 使用数组简单用一下 stack
    const stack = []

    for (let item of str) {
        if (item === '(' || item === '[' || item === '{')  {
            stack.push(item)
        } else {
            if (item === obj[stack[stack.length-1]]) {
                stack.pop()
            }
        }

    }
    return !stack.length
}

console.log(isValid('}{()[]}'))