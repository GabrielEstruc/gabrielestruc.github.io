//Botão EN e PT (variáveis para controle de estado, ativo e inativo)
var btnEN = 0
var btnPT = 0

//Função para carregar conteúdo em inglês e a imagem de acordo com a dimensão do display
function traduzirEN(){
 btnEN = 1
 btnPT = 0
 const largura = window.innerWidth;
 for(var i = 0; i<lang.en.length; i++){
  document.getElementById("#" + i).innerHTML = lang.en[i];
 }
 if (largura <= 768){
  document.getElementById("journey").src = "imagens/jornada_en_mobile.svg";
 } else {
  document.getElementById("journey").src = "imagens/jornada_en.svg";
 }
}

//Função para carregar conteúdo em português e a imagem de acordo com a dimensão do display
function traduzirPT(){
 btnEN = 0
 btnPT = 1
 const largura = window.innerWidth;
 for(var i = 0; i<lang.pt.length; i++){
  document.getElementById("#" + i).innerHTML = lang.pt[i];
 }
 if (largura <= 768){
  document.getElementById("journey").src = "imagens/jornada_mobile.svg";
 } else {
  document.getElementById("journey").src = "imagens/jornada.svg";
 }
}

//Constante que verifica e armazena o idioma atual do navegador
const l = navigator.language.toLowerCase();

//Função para carregar o conteúdo de acordo com o idioma do navegador. Opções: inglês ou português
const loadLang = () => l.includes("pt")?traduzirPT():traduzirEN();

//Função para carregar o conteúdo de acordo com as dimensões do display. Chama as funções anteriores de carregamento de conteúdo. Opções: inglês ou português
const resizeIMG = () => btnEN === 1?traduzirEN():traduzirPT(); 

// Função para abrir o protótipo do figma. Para dispositivos grandes a tela mostra um feedback de carregamento e depois carrega um novo elemento iframe. Possui tratamento para não haver duplicações. Em displays pequenos, abre o link em uma nova aba.  
function abrirPrototipoMonkey(){
 const largura = window.innerWidth;
 if (protMonkey.childElementCount <= 1 & largura >= 991){
  document.getElementById("tela").innerHTML = "loading...";
  document.getElementById("tela").style = " background-image: url(''); animation: color-change 2s linear 15; position: absolute;text-align: center; line-height: 500px; z-index: -1;"
  var prot = document.createElement("iframe");
  prot.setAttribute("allowfullscreen", "true");
  prot.setAttribute("src","https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLYdH3999zmcgteoD1rxwQr%2FMonkeyPlay%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D67%252C434%252C0.23%26t%3DLNfQ7YTvTUsNjGYP-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26mode%3Ddesign")
  document.getElementById("protMonkey").appendChild(prot);
 } if(largura < 991){
  window.open('https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLYdH3999zmcgteoD1rxwQr%2FMonkeyPlay%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D67%252C434%252C0.23%26t%3DLNfQ7YTvTUsNjGYP-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26mode%3Ddesign');
 }

}

// Função para abrir o protótipo do figma. Para dispositivos grandes a tela mostra um feedback de carregamento e depois carrega um novo elemento iframe. Possui tratamento para não haver duplicações. Em displays pequenos, abre o link em uma nova aba.
function abrirPrototipoSnack(){
 const largura = window.innerWidth;
 if (protSnack.childElementCount <= 1 & largura >= 991){
  document.getElementById("tela2").innerHTML = "loading...";
  document.getElementById("tela2").style = " background-image: url(''); animation: color-change 2s linear 15;position: absolute;text-align: center; line-height: 500px; z-index: -1;"
  var prot = document.createElement("iframe");
  prot.setAttribute("src","https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxUaAl9KrNc84CIpIb236Iv%2FRedesign-SnackTrem%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D289%252C295%252C0.26%26t%3DZ1dCYviAZ64qQeQn-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26mode%3Ddesign")
  prot.setAttribute("allowfullscreen", "true");
  document.getElementById("protSnack").appendChild(prot);
 } if(largura < 991){
  window.open('https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxUaAl9KrNc84CIpIb236Iv%2FRedesign-SnackTrem%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D289%252C295%252C0.26%26t%3DZ1dCYviAZ64qQeQn-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26mode%3Ddesign')
 }
}
