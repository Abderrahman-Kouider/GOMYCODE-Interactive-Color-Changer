//Dom loaded check

document.body.addEventListener("DOMContentLoaded", callback())

function callback() {
    var colorBtn = document.getElementById('change-color-btn')
    var colorBox = document.getElementById('color-box')
    
    colorBtn.addEventListener('click', randomColor)
    
//Generating a random color
    function randomColor() {
        const colorGenerator = Math.floor(Math.random()*16777215).toString(16)
        console.log(colorGenerator)
        colorBox.style.backgroundColor = "#" + colorGenerator;

    }  
}



