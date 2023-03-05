$(document).ready(function() {

    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endPoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        fetch(endPoint)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;

            $('#endereco').val(logradouro);
            $('#bairro').val(bairro);
            $('#cidade').val(cidade);
            $('#estado').val(estado);
        })
        .catch(function(erro) {
            alert("Ocorreu um erro ao buscar o endereço")
        })
        .finally(function(){
            $(botao).find('i').removeClass('d-none');
            $(botao).find('span').addClass('d-none');
        })

        $('#formulario-pedido').submit(function(event) {
            event.preventDefault();
            
            if($('#nome').val().length == 0) {
                throw new Error('Digite o nome');
            }
        })
    })
})