document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMax = document.getElementById('numero-max').value;
        numeroMax = parseInt(numeroMax);

        let numeroAleatorio = Math.random() * numeroMax;
        
        document.getElementById('resultado-valor').innerText = Math.floor(numeroAleatorio + 1);
        document.querySelector('.resultado').style.display = 'block';
    })
});