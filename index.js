var data = new Date();
var nasc = 1994;
var ano = data.getFullYear();
var mes = data.getMonth();
var dia = data.getDay();
function atualizarIdade(){
if (mes <= 5 && dia < 10){
  idade = (ano - nasc) - 1;
} else {
  idade = ano - nasc;
}
document.getElementById("idade").innerHTML = " " + idade + ".";
}


function traduzirEN(){
  for(var i = 0; i<lang.en.length; i++){
    document.getElementById("#" + i).innerHTML = lang.en[i];
  }
  document.getElementById("journey").src = "imagens/jornada_en.svg";
}
function traduzirPT(){
 for(var i = 0; i<lang.pt.length; i++){
    document.getElementById("#" + i).innerHTML = lang.pt[i];
  }
    document.getElementById("journey").src = "imagens/jornada.svg";
}
