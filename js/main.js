$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true, 
        arrows: false,
    });

$('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
})

$('#Telefone').mask('(00) 00000-0000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        Telefone: {
            required: true
        },
        mensagem: {
            required: true
        },
        veiculoInteresse: {
            required: true
        }
    },
    messages: {
        nome: 'Por favor, insira o seu nome'
    },
    submitHandler: function(form){
        console.log(form)
    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
        console.log(camposIncorretos)
    }
})

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})