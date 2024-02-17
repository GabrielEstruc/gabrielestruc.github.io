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

  function abrirPrototipoMonkey(){
    const largura = window.innerWidth;
    if (protMonkey.childElementCount <= 1 & largura >= 768){
      document.getElementById("tela").style = "display: none";
      var prot = document.createElement("iframe");
      prot.setAttribute("allowfullscreen", "true");
      prot.setAttribute("src","https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLYdH3999zmcgteoD1rxwQr%2FMonkeyPlay%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D67%252C434%252C0.23%26t%3DLNfQ7YTvTUsNjGYP-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26mode%3Ddesign")
      document.getElementById("protMonkey").appendChild(prot);
    } else {
      window.open('https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLYdH3999zmcgteoD1rxwQr%2FMonkeyPlay%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D67%252C434%252C0.23%26t%3DLNfQ7YTvTUsNjGYP-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26mode%3Ddesign');
    }
    
    }

    function abrirPrototipoSnack(){
      const largura = window.innerWidth;
      if (protSnack.childElementCount <= 1 & largura >= 768){
      document.getElementById("tela2").style = "display: none";
      var prot = document.createElement("iframe");
      prot.setAttribute("src","https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxUaAl9KrNc84CIpIb236Iv%2FRedesign-SnackTrem%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D289%252C295%252C0.26%26t%3DZ1dCYviAZ64qQeQn-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26mode%3Ddesign")
      prot.setAttribute("allowfullscreen", "true");
      document.getElementById("protSnack").appendChild(prot);
      } else {
        window.open('https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxUaAl9KrNc84CIpIb236Iv%2FRedesign-SnackTrem%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D289%252C295%252C0.26%26t%3DZ1dCYviAZ64qQeQn-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26mode%3Ddesign')
      }
    }
