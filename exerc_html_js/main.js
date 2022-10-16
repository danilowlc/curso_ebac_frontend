const form = document.getElementById('form-validar');
const numA = document.getElementById('numA');
const numB = document.getElementById('numB');
let numeroValido = false;

function validarNumero(numA, numB){
    return numA < numB;
}


form.addEventListener('submit', function(e){
    
    e.preventDefault();

    const successMessage = `O valor de B <b>(${numB.value})</b> é maior do que o valor de A <b>(${numA.value})</b>`;
    const errorMessage = `O valor de A <b>(${numA.value})</b> é maior ou igual do que o valor de B <b>(${numB.value})</b>`;

    numeroValido = validarNumero(numA.value, numB.value);

    if(numeroValido){

        const mensagemDeSucesso = document.getElementById('result-message');
        mensagemDeSucesso.style.display = 'block';
        mensagemDeSucesso.style.backgroundColor = '#27ae60';
        mensagemDeSucesso.classList.add('success-message');
        mensagemDeSucesso.innerHTML = successMessage;

    } else {

        const mensagemDeErro = document.getElementById('result-message');
        mensagemDeErro.style.display = 'block';
        mensagemDeErro.style.backgroundColor = 'red';
        mensagemDeErro.classList.add('error-message');
        mensagemDeErro.innerHTML = errorMessage;

    }
    
});


