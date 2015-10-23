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
var EstruturaRuaMapa = function (largura, altura, posicao_x, posicao_y) {
    this.largura = largura || 10;
    this.altura = altura || 10;
    this.posicao_x = posicao_x || 0;
    this.posicao_y = posicao_y || 0;
};


var EstruturaRuaMapa = function (largura, altura, posicao_x, posicao_y) {
    this.largura = largura || 10;
    this.altura = altura || 10;
    this.posicao_x = posicao_x || 0;
    this.posicao_y = posicao_y || 0;
};
var converterRadianos = function(graus){
    return graus * (Math.PI/180)
}
