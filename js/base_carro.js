/*
 * 
 * Animation frame
 * 
 *  animacao dos segmentos
 * 
 *  Desenhar o ponteiro do sentido
 Definir pontos    
 * 
 */





var GerarChaveElemento = {
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

        var p5 = GerarChaveElemento.validaPosicao(matriz, posicao_x, posicao_y);
        if (p5 == 0) {
            return "0000";
        }
        var p2 = GerarChaveElemento.validaPosicao(matriz, posicao_x, posicao_y - 1);
        var p4 = GerarChaveElemento.validaPosicao(matriz, posicao_x - 1, posicao_y);
        var p6 = GerarChaveElemento.validaPosicao(matriz, posicao_x + 1, posicao_y);
        var p8 = GerarChaveElemento.validaPosicao(matriz, posicao_x, posicao_y + 1);

        return p2 + "" + p6 + "" + p8 + "" + p4;
    }
};




var mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
];


var EstruturaRuaMatriz = function () {
    this.matriz = []; /*9x9*/
}

var radiano = function (grau) {
    return grau * (Math.PI / 180);
}
window.onload = function () {
    var mapaCache = null;
    var objCanvas = document.getElementById('myCanvas');
    var cenario = objCanvas.getContext("2d");
    var imagemCarro = new Image();
    var desenharRua = function (EstruturaRuaMapa, posicaoTelaX, posicaoTelaY) {
        cenario.drawImage(imagem, EstruturaRuaMapa.posicao_x, EstruturaRuaMapa.posicao_y, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura, posicaoTelaX, posicaoTelaY, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura);
    }

    var desenharCarro = function (EstruturaRuaMapa, posicaoTelaX, posicaoTelaY) {
        cenario.drawImage(imagemCarro, EstruturaRuaMapa.posicao_x, EstruturaRuaMapa.posicao_y, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura, posicaoTelaX, posicaoTelaY, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura);
    }



    imagemCarro.onload = function () {         
    chave = 10000000 
        desenharCarro(mapaCarroPickUpVerde.listaSegmentos[chave], 200, 200);
    }

    imagemCarro.src = mapaCarroPickUpVerde.imagem;

   


};

