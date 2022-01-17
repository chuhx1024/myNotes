
var dailyTemperatures = function(T) {
    const stack = [0]
    let count = 1


    const len = T.length
    const arr = new Array(len).fill(0)

    for (let i= 1; i < len; i++) {
        let item = T[i]
        console.log(item)

        while (count && item > T[stack[count -1]]) {
            let index = stack.pop() 
            count--
            console.log(index, 'index')
            console.log(i, 'i')
            arr[index] = i-index
        }
        console.log('..........')

        stack.push(i)
        count++
        console.log(stack)
        console.log(arr)

       
        
    }
    
    return arr


    
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))