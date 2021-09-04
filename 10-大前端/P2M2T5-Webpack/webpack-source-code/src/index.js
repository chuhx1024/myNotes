
const obtn = document.querySelector('#btn')
console.log('我是index.js 的内容')
obtn.addEventListener('click', () => {
    import(/*webpackChunkName: 'login'*/'./login.js').then(login => {
        console.log(login)
    })
})
