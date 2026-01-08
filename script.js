let btn1v = false, btn2v = false, btn3v = false, btn4v = false
let bodyd = document.body
const centro = document.getElementById('center')
const image = document.getElementById('image')
document.getElementById('btn1').addEventListener('click', () => {name(1)})
document.getElementById('btn2').addEventListener('click', () => {name(2)})
document.getElementById('btn3').addEventListener('click', () => {name(3)})
document.getElementById('btn4').addEventListener('click', () => {name(4)})

function name(key) {
    switch (key) {
        case 1:
            btn1v = true
            break;
        case 2:
            btn2v = true
            break
        case 3:
            btn3v = true
            break
        case 4:
            btn4v = true
            break
        default:
            console.log("error")
            break;
    }
    if (btn1v && btn2v && btn3v && btn4v) {
        document.getElementById('texto').style.visibility = 'hidden'
        centro.style.visibility = 'hidden'
        image.style.visibility = 'visible'
        console.log("")
    }

}
