const myBox = document.getElementById('my-box');

function changeColor(color) {
   
   myBox.style.backgroundColor = color;
}

function resize() {
    // plus 10 to the width every click
    // plus 10 to the height every click
}
function onClick(){ 
    changeColor("blue");
    resize();
}

myBox.addEventListener('click', onClick);
