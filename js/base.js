/*
 * 
 * 
 */


var mapa = [
    [1,1,1,1,1,1,1],
    [0,0,0,1,0,0,0],
    [1,1,1,1,1,1,1],
    [1,0,0,1,0,0,1],
    [1,0,1,1,1,1,1],
    [0,0,1,0,1,0,1],
    [1,1,1,0,1,1,1],
    [0,0,1,1,1,0,0],
    [1,0,0,1,0,0,1],
    [1,1,1,1,1,1,1],
];

var EstruturaRuaCarro = function (largura, altura, posicao_x, posicao_y, imagem, nome) {
    this.imagem = imagem || "";
    this.nome = nome || "";
    this.largura = largura || 10;
    this.altura = altura || 10;
    this.posicao_x = posicao_x || 0;
    this.posicao_y = posicao_y || 0;
}

var EstruturaRuaMapa = function (largura, altura, posicao_x, posicao_y, imagem, nome) {
    this.imagem = imagem || "";
    this.nome = nome || "";
    this.largura = largura || 10;
    this.altura = altura || 10;
    this.posicao_x = posicao_x || 0;
    this.posicao_y = posicao_y || 0;
};

var EstruturaRuaMatriz = function () {
    this.matriz = []; /*9x9*/
}
//EstruturaRuaMapa.prototype.matriz = new EstruturaRuaMapa();


var ruaGrama = new EstruturaRuaMapa(132, 99, 10, 10, "./image/iso_vertical.png", "direita");
var ruaCurvaDireita = new EstruturaRuaMapa(132, 99, 10, 1438, "./image/iso_vertical.png", "direita");
var ruaDireita = new EstruturaRuaMapa(132, 99, 10, 248, "./image/iso_vertical.png", "direita");
var ruaTEsquerda = new EstruturaRuaMapa(132, 99, 10, 367, "./image/iso_vertical.png", "direitaT");
var ruaEsquerda = new EstruturaRuaMapa(132, 99, 10, 129, "./image/iso_vertical.png", "esquerda");
var ruaEsquerdaSemSaida = new EstruturaRuaMapa(132, 99, 10, 1319, "./image/iso_vertical.png", "esquerda");
var ruaCurvaEsquerda = new EstruturaRuaMapa(132, 99, 0, 1352, "./image/iso_vertical.png", "esquerda");


var ruaCarroDireitaDiagonal = new EstruturaRuaCarro(35, 30, 4, 5, "./image/carro_iso.png", "direto");
var ruaCarroDireita = new EstruturaRuaCarro(35, 30, 5, 45, "./image/carro_iso.png", "direto");
var ruaCarroEsquerdaDiagonal = new EstruturaRuaCarro(35, 30, 5, 86, "./image/carro_iso.png", "direto");
var ruaCarroDireitaDesc = new EstruturaRuaCarro(35, 30, 5, 171, "./image/carro_iso.png", "diretoDesce");
//var ruaCarroDireita = new EstruturaRuaCarro(35, 29, 4, 5, "./image/carro_iso.png", "direto");

window.onload = function () {

    var objCanvas = document.getElementById('myCanvas');
    var cenario = objCanvas.getContext("2d");
    var imagem = new Image;
    var imagemCarro = new Image();

    var desenharRua = function (EstruturaRuaMapa, posicaoTelaX, posicaoTelaY) {
        cenario.drawImage(imagem, EstruturaRuaMapa.posicao_x, EstruturaRuaMapa.posicao_y, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura, posicaoTelaX, posicaoTelaY, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura);
    }
    var desenharCarro = function (EstruturaRuaMapa, posicaoTelaX, posicaoTelaY) {
        cenario.drawImage(imagemCarro, EstruturaRuaMapa.posicao_x, EstruturaRuaMapa.posicao_y, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura, posicaoTelaX, posicaoTelaY, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura);
    }
    imagem.onload = function () {
//      150 > 214 64
//      350 > 318 32

        desenharRua(ruaGrama, 342, 190);
        desenharRua(ruaGrama, 278, 222);
        desenharRua(ruaGrama, 214, 254);
        desenharRua(ruaGrama, 150, 286);
        desenharRua(ruaGrama, 86, 318);
        desenharRua(ruaCurvaDireita, 406, 222);
        desenharRua(ruaTEsquerda, 470, 254);
        desenharRua(ruaDireita, 342, 254);
        desenharRua(ruaDireita, 278, 286);
        desenharRua(ruaDireita, 214, 318);
        desenharRua(ruaDireita, 150, 350);
        desenharRua(ruaDireita, 406, 286);
        desenharRua(ruaDireita, 342, 318);
        desenharRua(ruaEsquerda, 22, 350);
        desenharRua(ruaTEsquerda, 86, 382);
        desenharRua(ruaEsquerdaSemSaida, 278, 350);        
        desenharRua(ruaGrama, 214, 382);   
        desenharRua(ruaGrama, 150, 414);
//        desenharRua(ruaEsquerdaSemSaida, 10, 10);
        cenario.rect(10, 10, 132, 99);
        cenario.stroke();

 imagemCarro.onload = function () {

        desenharCarro(ruaCarroDireitaDesc, 398, 249);
        desenharCarro(ruaCarroDireita, 378, 277);
        desenharCarro(ruaCarroDireitaDiagonal, 453, 246);
        desenharCarro(ruaCarroEsquerdaDiagonal, 500, 249);
//        desenharCarro(ruaCarroEsquerdaDiagonal, 150, 10);
//        cenario.rect(150, 10, 35, 29);
//        cenario.stroke();
    }
    imagemCarro.src = "./image/carro_iso.png";

//       
    };

    imagem.src = "./image/iso_vertical.png";

   
};