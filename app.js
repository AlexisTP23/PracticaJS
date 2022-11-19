function moverPosicionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divSaluda = document.getElementsByClassName("saludar")[0]

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target
    )});


btnSi.addEventListener('click', function(e) {
    alert('Holi:)')

    divSaluda.style.display = 'block';
    const cancion = new Audio('');
    cancion.play();
})