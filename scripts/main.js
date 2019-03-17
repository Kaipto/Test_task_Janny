$(document).ready(function(){
	$('a.menu-link.hover-menu').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100 }, 700);
        if(window.innerWidth <= 768 ) {
        	$('.menu').slideUp(200);
        }
        
    });
	$('.burger img').click(function(){
		if ($('.menu').is(':hidden')) {
			$('.menu').slideDown(300);
			$('header').addClass('bx-shadow');
		} else {
			$('.menu').slideUp(200);
			$('header').removeClass('bx-shadow');
		}
		
	});
});

$(window).scroll(function(){
	if ($(this).scrollTop() > 0) {
		$('header').addClass('sticky');
	} else {
		$('header').removeClass('sticky bx-shadow');
	}
});