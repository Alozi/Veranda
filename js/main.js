"use strict";

jQuery('document').ready(function($) {
	//smooth scroll
	$('.btn-scroll, .acnhor').click(function () {
		var elementClick = $(this).attr('href');
		var destination = $(elementClick).offset().top;
		$('html, body').animate({scrollTop: destination}, 1000);
	});

	function setHeiHeight() {
		if($(window).width() >= 768) {
			$('.main-screen, .screen-2, .screen__img--big').css({
				height: $(window).height() + 'px'
			});
			setFrameForImg();
		} else {
			$('.screen-1').css({
				height: $(window).height() + 'px'
			});
			$('.screen__img--big').css({
				height: '100px'
			});
		}
	}
	setHeiHeight(); 
	$(window).resize( setHeiHeight);

	function setFrameForImg() {
		var frame = document.getElementById('frame');
		var ctx = frame.getContext('2d');
		var w = $('.screen__img--big').width();
		var h = $('.screen__img--big').height();
		frame.width = w;
		frame.height = h;
		w -= 20;
		h -= 20;
		ctx.strokeStyle = '#FFFFFF';
		ctx.strokeRect(10, 10, w, h);

		$('#band-wrapper').css({
			height: $('body').height() * 0.75 + 'px'
		});

		var band = document.getElementById('band');
		var ctx = band.getContext('2d');
		band.width = 20;
		band.height = $('body').height() * 0.45;
		ctx.strokeStyle = '#FFFFFF';
		

		ctx.beginPath();
			ctx.arc(80, 100, 56, 3/4 * Math.PI, 1/4 * Math.PI, true);
			ctx.fill(); // *14
			ctx.moveTo(7, 0);
			ctx.lineTo(7, $('body').height() * 0.45);
			ctx.stroke(); // *22
	}

});

