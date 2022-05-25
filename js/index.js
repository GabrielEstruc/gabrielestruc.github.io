$(document).ready(function(){

	$('.btn1').click(function() {
		$('.texto1').toggleClass('responsivo');
	});

	$('.btn2').click(function() {
		$('.texto2').toggleClass('responsivo');
		$('.btn2').toggleClass('sortUp');

	});

	$('.btn3').click(function() {
		$('.texto3').toggleClass('responsivo');

	});

	$('.btn4').click(function() {
		$('.texto4').toggleClass('responsivo');
		$('.btn4').toggleClass('sortUp');

	});

	$('.btn5').click(function() {
		$('.texto5').toggleClass('responsivo');

	});
	$('.btn6').click(function() {
		$('.menu').toggleClass('responsivo');
	});

	$('.btn7').click(function() {
		$('.texto6').toggleClass('responsivo');

	});
	
		$('.btn8').click(function() {
		$('.texto8').toggleClass('responsivo');
	});

	$('.menu').click(function() {
		$('.menu').toggleClass('responsivo');
	});

});

var nav = $('.solto');

$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		nav.addClass("fixo");
	} else {
		nav.removeClass("fixo");
	}
});

var i = 0;
		var p = 0;
		setInterval(function mudar(){
			i++;
			if (i <= 100){
				p++;
				document.getElementById('cor').style = 'background: linear-gradient(' + (i*1.8) + 'deg, rgb(131,58,180)' + p + '%, rgb(253,29,29)' + (100 + p) + '%)';
				document.getElementById('cor2').style = 'background: linear-gradient(' + (i*1.8) + 'deg, rgb(131,58,180)' + p + '%, rgb(253,29,29)' + (100 + p) + '%)';
			} else if (i <= 200) {
				p--;
				document.getElementById('cor').style = 'background: linear-gradient(' + (i*1.8) + 'deg, rgb(131,58,180)' + p + '%, rgb(253,29,29)' + (100 + p) + '%)';
				document.getElementById('cor2').style = 'background: linear-gradient(' + (i*1.8) + 'deg, rgb(131,58,180)' + p + '%, rgb(253,29,29)' + (100 + p) + '%)';
			} else {
				return i = 0;
			}
		},100);










