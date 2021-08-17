
export default () => {
    const element = document.createElement('h1')
    element.textContent = "Hello World"
    element.addEventListener('click', () => {
        alert('Hello World')
    })
    return element
}

