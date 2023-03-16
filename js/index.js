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
		$('.btn8').toggleClass('sortUp');
	});

	$('.menu').click(function() {
		$('.menu').toggleClass('responsivo');
	});

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


      function atualizarIdade(){
      const data = 1994;
      var dataAtual = new Date();
      var ano = dataAtual.getFullYear();
      var mes = dataAtual.getMonth() + 1;
      var dia = dataAtual.getDate();
      idade = ano - data;
      if ((mes >= 6 && dia >= 11) || mes > 6){
      	document.getElementById('idade').innerHTML = 'Gabriel Estruc, ' + idade + '<br>Designer de Produto';
      } else {
      	document.getElementById('idade').innerHTML =  'Gabriel Estruc, ' + (idade - 1) + '<br>Designer de Produto';
      }
      
    }
 









