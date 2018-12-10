$(function(){
    // Aparece e esconde menu
    var navegation = document.getElementById('navegation');
    var headroom = new Headroom(navegation);
    headroom.init();


    //Menu Responsive
    // Calcula a largura da página
    var largura = $(window).width(),
        enlaces = $('enlaces'),
        btnMenu = $('btn-menu'),
        icone = $('btnMenu, icone');

        if(largura < 768){
            enlaces.hide();
            icone.addClass('fa-bars');
        }
});