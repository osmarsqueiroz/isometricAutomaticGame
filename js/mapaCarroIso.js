//var Desenhar = function (ctx, cor) {
//    this.ctx = ctx;
//    this.cor = cor;
//    this.largura = 30;
//    this.altura = 30;
//    this.desenhar = function (posicaoX, posicaoY, texto) {
//        var label = texto || "0";
//        this.ctx.lineWidth = "2";
//        this.ctx.lineJoin = "miter";
//        this.ctx.fillStyle = this.cor;
//        this.ctx.strokeStyle = "#ccc";
//        this.ctx.fillRect(this.largura * posicaoX, this.altura * posicaoY, this.largura, this.altura);
//        this.ctx.rect(this.largura * posicaoX, this.altura * posicaoY, this.largura, this.altura);
//        this.ctx.stroke();
//        this.ctx.fillStyle = "#fff";
//        this.ctx.font = "16px Arial";
//        this.ctx.fillText(label, this.largura * (posicaoX + 1) - (this.largura / 1.3), this.altura * (posicaoY + 1) - (this.altura / 3));
//    }
//}

//var mapaCaminhaoLixo = new MapaVeiculo("image/iso_vertical_city.png");

var mapaCarroPickUpVerde = new MapaVeiculo("image/carro_pick_up_verde.png");
var mapaCarroSedanVermelho = new MapaVeiculo("image/carro_sedan_vermelho.png");
var mapaCarroSedanCinza = new MapaVeiculo("image/carro_sedan_cinza.png");

mapaCarroPickUpVerde.adicionarSegmento("10000000", new Segmento(33, 26, 263, 0))
mapaCarroPickUpVerde.adicionarSegmento("01000000", new Segmento(18, 24, 236, 0))
mapaCarroPickUpVerde.adicionarSegmento("00100000", new Segmento(32, 27, 194, 0))
mapaCarroPickUpVerde.adicionarSegmento("00010000", new Segmento(31, 23, 28, 0))
mapaCarroPickUpVerde.adicionarSegmento("00001000", new Segmento(33, 26, 68, 0))
mapaCarroPickUpVerde.adicionarSegmento("00000100", new Segmento(17, 24, 0, 0))
mapaCarroPickUpVerde.adicionarSegmento("00000010", new Segmento(32, 25, 111, 0))
mapaCarroPickUpVerde.adicionarSegmento("00000001", new Segmento(31, 23, 153, 0))
