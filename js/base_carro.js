
var radiano = function (grau) {
    return grau * (Math.PI / 180);
}

window.onload = function () {
    
    var objCanvas = document.getElementById('myCanvas');
    var cenario = objCanvas.getContext("2d");
    var imagemCarro = new Image();

    var desenharCarro = function (EstruturaRuaMapa, posicaoTelaX, posicaoTelaY) {
        cenario.drawImage(imagemCarro, EstruturaRuaMapa.posicao_x, EstruturaRuaMapa.posicao_y, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura, posicaoTelaX, posicaoTelaY, EstruturaRuaMapa.largura, EstruturaRuaMapa.altura);
    }

    imagemCarro.onload = function () {         
        chave = 10000000;
        desenharCarro(mapaCarroPickUpVerde.listaSegmentos[chave], 200, 200);
    }
    imagemCarro.src = mapaCarroPickUpVerde.imagem;

   


};

