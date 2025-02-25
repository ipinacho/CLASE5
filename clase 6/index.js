document.addEventListener("DOMContentLoaded", () => {
console.log("contenido cargado");
const path = document.querySelector('.line_path');
const pathLength = path.getTotalLength();
console.log(pathLength)
path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

});


