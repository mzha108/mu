$(document).ready(function () {

// hamburger menu animation
    $('#toggleMenu').click(function () {
        $(this).toggleClass('toggleMenu_open');
        $('#navListItem').toggleClass('navListItem_open');
    });

// smooth scroll
    $('#navLogo').click(function() {
		$('body').animate({
			scrollTop: $('#firstAnchor').offset().top
		}, 1000);
		return false;
	});

    $('#link1').click(function() {
		$('body').animate({
			scrollTop: $('#firstAnchor').offset().top
		}, 1000);
		return false;
	});

	$('#link2').click(function() {
		$('body').animate({
			scrollTop: $('#abilities').offset().top - 60
		}, 1000);
		return false;
	});

    $('#link3').click(function() {
		$('body').animate({
			scrollTop: $('#experience').offset().top
		}, 1000);
		return false;
	});

	$('#link4').click(function() {
		$('body').animate({
			scrollTop: $('#contact').offset().top
		}, 1000);
		return false;
	});

// section about animation
	$(window).scroll(function() {
		/* Act on the event */
		var top = $(this).scrollTop();
		var container_top = $('#about').position().top;
		var container_height = $('#about').height();

		if (top >= container_top + container_height - 60) {
			$('#about').removeClass('bounceInLeft');
			$('#about p').removeClass('bounceInDown');
		} else {
			$('#about').addClass('bounceInLeft');
			$('#about  p').addClass('bounceInDown');
		}
	});


//parallax background image
	$(window).scroll(function() {
		/* Act on the event */
		var top = $(this).scrollTop();
		$('#first-image').css('top', -(top * 0.3) + 'px');
	});
	
	$(window).scroll(function() {
		/* Act on the event */
		var top = $(this).scrollTop();
		$('#second-image').css('top', (top * 0.15) + 'px');
	});

})
