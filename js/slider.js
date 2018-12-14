$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    animateOut: 'fadeOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:40,
    stagePadding:20,
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})