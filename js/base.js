
var PesquisarEstrutura = {
    validaPosicao: function (matriz, posicao_x, posicao_y) {
        if (posicao_x < 0 || posicao_y < 0) {
            return 0;
        }
        if (typeof matriz[posicao_y] === 'undefined' || typeof matriz[posicao_y][posicao_x] === 'undefined') {
            return 0;
        }
        return matriz[posicao_y][posicao_x];
    },
    verificarPontoChave: function (matriz, posicao_x, posicao_y) {
        
        var p5 = PesquisarEstrutura.validaPosicao(matriz, posicao_x, posicao_y);
        if(p5 == 0){
            return "0000";
        }
        var p2 = PesquisarEstrutura.validaPosicao(matriz, posicao_x, posicao_y - 1);
        var p4 = PesquisarEstrutura.validaPosicao(matriz, posicao_x - 1, posicao_y);
        var p6 = PesquisarEstrutura.validaPosicao(matriz, posicao_x + 1, posicao_y);
        var p8 = PesquisarEstrutura.validaPosicao(matriz, posicao_x, posicao_y + 1);


        return p2 + "" + p6  + "" + p8 + "" + p4;
    }
};

var Segmento = function (largura, altura, posicao_x, posicao_y) {
    this.largura = largura || 10;
    this.altura = altura || 10;
    this.posicao_x = posicao_x || 0;
    this.posicao_y = posicao_y || 0;
};

var MapaRua = function (imagem) {
    this.imagem = imagem || null;
    this.listaSegmentos = [];
    this.adicionarSegmento = function (id, segmento) {
        this.listaSegmentos[id] = segmento;
    }
}
var MapaVeiculo = function (imagem) {
    this.imagem = imagem || null;
    this.listaSegmentos = [];
    this.adicionarSegmento = function (id, segmento) {
        this.listaSegmentos[id] = segmento;
    }
}


var mapa = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
];


var mapaRuaIsometrico = new MapaRua("image/iso_vertical_city.png");

mapaRuaIsometrico.adicionarSegmento("0000", new Segmento(132, 100, 0, 1));
mapaRuaIsometrico.adicionarSegmento("0100", new Segmento(132, 100, 0, 107));
mapaRuaIsometrico.adicionarSegmento("0010", new Segmento(132, 100, 0, 213));
mapaRuaIsometrico.adicionarSegmento("0001", new Segmento(132, 100, 0, 319));
mapaRuaIsometrico.adicionarSegmento("1000", new Segmento(132, 100, 0, 425));

mapaRuaIsometrico.adicionarSegmento("0101", new Segmento(132, 100, 0, 531));
mapaRuaIsometrico.adicionarSegmento("1010", new Segmento(132, 100, 0, 637));

mapaRuaIsometrico.adicionarSegmento("1101", new Segmento(132, 100, 0, 743));
mapaRuaIsometrico.adicionarSegmento("1110", new Segmento(132, 100, 0, 849));
mapaRuaIsometrico.adicionarSegmento("0111", new Segmento(132, 100, 0, 955));
mapaRuaIsometrico.adicionarSegmento("1011", new Segmento(132, 100, 0, 1061));
mapaRuaIsometrico.adicionarSegmento("1111", new Segmento(132, 100, 0, 1167));
mapaRuaIsometrico.adicionarSegmento("0110", new Segmento(132, 100, 0, 1273));
mapaRuaIsometrico.adicionarSegmento("0011", new Segmento(132, 100, 0, 1379));
mapaRuaIsometrico.adicionarSegmento("1100", new Segmento(132, 100, 0, 1485));
mapaRuaIsometrico.adicionarSegmento("1001", new Segmento(132, 100, 0, 1591));

//var mapaCaminhaoLixo = new MapaVeiculo("image/iso_vertical_city.png");

var mapaCarroPickUpVerde = new MapaVeiculo("image/carro_pick_up_verde.png");
var mapaCarroSedanVermelho = new MapaVeiculo("image/carro_sedan_vermelho.png");
var mapaCarroSedanCinza = new MapaVeiculo("image/carro_sedan_cinza.png");

mapaCarroPickUpVerde.adicionarSegmento("0000", new Segmento(32, 27, 0, 0))
mapaCarroPickUpVerde.adicionarSegmento("0001", new Segmento(32, 27, 0, 0))
mapaCarroPickUpVerde.adicionarSegmento("0001", new Segmento(32, 27, 0, 0))





var EstruturaRuaCarro = function (largura, altura, posicao_x, posicao_y, imagem, nome) {
    this.imagem = imagem || "";
    this.nome = nome || "";
    this.largura = largura || 10;
    this.altura = altura || 10;
    this.posicao_x = posicao_x || 0;
    this.posicao_y = posicao_y || 0;
}

var EstruturaRuaMapa = function (largura, altura, posicao_x, posicao_y) {
    this.largura = largura || 10;
    this.altura = altura || 10;
    this.posicao_x = posicao_x || 0;
    this.posicao_y = posicao_y || 0;
};

var EstruturaRuaMatriz = function () {
    this.matriz = []; /*9x9*/
}


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


        var ruaGrama = new EstruturaRuaMapa(132, 100, 0, 424, "./image/iso_vertical.png", "direita");
//        desenharRua(ruaGrama, 10, 10);
//        cenario.rect(10, 10, 132, 100);
//        cenario.stroke();

        var baseX = 450;
        var baseY = 50;
        for (var y in mapa) {
            y = parseInt(y);
            baseX = 450 + (y * 64);
            baseY = 50 + (y * 32);
            
            for (var x in mapa[y]) {
                x = parseInt(x);
                var elementoMapa = PesquisarEstrutura.verificarPontoChave(mapa, x, y);
                console.log(elementoMapa)
                desenharRua(mapaRuaIsometrico.listaSegmentos[elementoMapa], baseX, baseY);
                baseX -= 64;
                baseY += 32;
            }
//            return false;
        }


//        imagemCarro.onload = function () {

//        desenharCarro(ruaCarroDireitaDesc, 398, 249);
//        desenharCarro(ruaCarroDireita, 378, 277);
//        desenharCarro(ruaCarroDireitaDiagonal, 453, 246);
//        desenharCarro(ruaCarroEsquerdaDiagonal, 500, 249);
//            desenharCarro(ruaCarroEsquerdaDiagonal, 150, 10);
//            cenario.rect(150, 10, 35, 29);
//            cenario.stroke();
//        }
//        imagemCarro.src = "./image/carro_iso.png";

//       
    };

    imagem.src = "image/iso_vertical_city.png";


};