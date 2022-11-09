$(document).ready(function() {


    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        const novoItem = $('<div class="tarefa"></div>');
        $(`<li>${nomeTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        $('.tarefa').click(function() {
            $(this).css('text-decoration', 'line-through');
        })    
    })
    

})