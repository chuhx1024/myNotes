const fn = () => {
    let sum = 0
    let n = 100
    for (let i = 1; i <= n; i++ ) {
        let temp = 0
        for (let j = 1; j <= n; j++ ) {
            sum += i
        }
    }
    return sum
}
console.log(fn())