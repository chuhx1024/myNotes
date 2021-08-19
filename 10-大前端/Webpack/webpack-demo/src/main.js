import creatHeading from './heading.js'
import './main.css'
import icon from './icon.png'
import min from './min.png'
const heading = creatHeading()
document.body.append(heading)
console.log(1)
console.log(1)
console.log(1)
alert(1)

const img = new Image()
img.src = icon
document.body.append(img)
const img0 = new Image()
img0.src = min
document.body.append(img0)