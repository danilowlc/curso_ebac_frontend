$(document).ready(function() {
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(99) 98888-9999'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '999.999.999-00'
    });

    $('#cep').mask('00.000-00', {
        placeholder: '99.999-00'
    });

})