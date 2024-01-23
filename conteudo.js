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

const lang = {
            "en":["Contact","<br>A musicians app","MonkeyPlay is the solution designed to provide more dynamic and customizable ways to follow your favorite songs when playing!<br><br>With a layout designed to facilitate reading and learning, build your music library, adjust them to your taste, and hit play!","Access Prototype","<strong>Bruno, 35</strong><br><br>He is married and has two young children. He used to play the guitar when he was young, but lately, he has been very tired due to work. Nowadays, the dormant passion has awakened, and now he wants to practice more and improve his guitar skills.","<strong>Luiza, 27</strong><br><br>She lives alone. During free time, spends a lot of time on the phone.Has been feeling very stressed lately. Decides to start activities that would improve her body and mind health. Begins to look for ways to learn to play the guitar.","User Journey","Research","61% of the audience is +30","Guitar and acoustic guitar are mentioned twice as much as other instruments.","73% use it as a hobby or for pleasure, followed by 21% for practice, and 6% professionally.","88% are interested in learning from scratch or improving their skills.","Smartphones are the most used devices to follow lyrics.","<br>Design Undergraduate Project, Federal University of Rio de Janeiro","SnackTrem was conceived and designed to be a more affordable, streamlined, and aligned with the world of Internet of Things(IoT), combining technology and design. <br><br>  Inspired by the business model of automated sales within trains and high-speed trains in countries like Japan and Italy, the project utilizes automation and interaction with mobile devices to modernize the way snacks are purchased. This approach aims to reduce manufacturing costs and the dimensions of the machinery while enhancing security for the owner by eliminating the storage of cash and coins in the vending machine.","Theater Company","Webpage project using mobile-first and responsiveness for multiple devices.<br><br>Implemented with HTML 5, CSS 3, JavaScript, jQuery, and framework Bootstrap.","Access Website","Access Prototype"],

            "pt": ["Contato","<br>O app para músicos","MonkeyPlay é aquela solução que tem o propósito de oferecer formas mais dinâmicas e customizáveis de acompanhar suas músicas favoritas na hora de tocar!<br><br> Com um layout pensado para facilitar a leitura e aprendizado, monte sua biblioteca de músicas, ajuste-as de acordo com seu gosto e dê o play!","Acesse o Protótipo","<strong>Bruno, 35</strong><br><br>É casado e tem dois filhos pequenos. Costumava tocar violão quando jovem, mas ultimamente anda muito cansado devido ao trabalho. Hoje em dia a paixão adormecida tem voltado e agora quer praticar mais e melhorar suas habilidades no violão.","<strong>Luiza, 27</strong><br><br>Mora sozinha. Nas horas vagas passa bastante tempo no celular. Tem se sentido muito estressada ultimamente. Decide iniciar atividades que melhorassem sua saúde física e mental. Começa a buscar formas de aprender a tocar.","Jornada do Usuário", "Pesquisa", "61% do público é 30+", "Violão e guitarra são citados o dobro, comparados a outros instrumentos.", "73% utilizam como hobby/prazer, seguidos de 21% por prática e 6% profissionalmente.", "88% tem interesse em aprender do zero ou melhorar.","Smartphones são o aparelhos mais ultilizados para acompanhar.", "<br>Projeto de Graduação em Desenho Industrial, UFRJ", "SnackTrem foi idealizado e projetado para ser uma solução de vending machine mais barata, enxuta e contemporânea ao mundo da IoT (Internet of Things), aliando tecnologia e design. <br><br> Inspirado no modelo de negócio de vendas automatizadas dentro de trens e trens-bala de países como Japão e Itália, o projeto utiliza os recursos da automação e interação com os dispositivos móveis para modernizar a forma de comprar snacks e reduzir os custos de fabricação e dimensões do maquinário, bem como aumentar a segurança para o proprietário retirando da máquina a armazenagem de cédulas e moedas.", "Cia de Teatro", "Projeto de webpage utilizando o método de mobile first e responsividade para os diversos dispositivos da atualidade.<br><br> Através do uso de HTML 5, CSS 3, JavaScript, Jquery e a framework Bootstrap.", "Acesse o Website","Acesse o Protótipo"]
          };

function traduzirEN(){
  for(var i = 0; i<=18; i++){
    document.getElementById("#" + i).innerHTML = lang.en[i];
  }
  document.getElementById("journey").src = "imagens/jornada_en.svg";
}
function traduzirPT(){
 for(var i = 0; i<=18; i++){
    document.getElementById("#" + i).innerHTML = lang.pt[i];
  }
    document.getElementById("journey").src = "imagens/jornada.svg";
}