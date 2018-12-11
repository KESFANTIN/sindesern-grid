$(function () {
    // Aparece e esconde menu
    let navegation = document.getElementById('navegation');
    let headroom = new Headroom(navegation);
    headroom.init();


    //Menu Responsive
    // Calcula a largura da página
    let largura = $(window).width(),
        paginas = $('#paginas'),
        btnMenu = $('#btn-menu'),
        icone = $('#btn-menu .icone');

    if (largura < 700) {
        paginas.hide();
        icone.addClass('fa-bars');
    }

    btnMenu.on('click', function (e) {
        paginas.slideToggle();
        icone.toggleClass('fa-bars');
        icone.toggleClass('fa-times');
    });

    $(window).on('resize', function () {
        if ($(this).width() > 700) {
            paginas.show();
            // icone.addClass('fa-times');
            // icone.removeClass('fa-bars');
        } else {
            paginas.hide();
            icone.addClass('fa-bars');
            icone.removeClass('fa-times');
        }
    });
});