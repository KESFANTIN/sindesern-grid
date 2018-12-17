$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    animateOut: 'fadeOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:90,
    stagePadding:0,
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[10000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})