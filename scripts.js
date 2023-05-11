const horas = document.getElementById('Horas');
const minutos = document.getElementById('Minutos');
const segundos = document.getElementById('Segundos');

const relogio = setInterval(function() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})
