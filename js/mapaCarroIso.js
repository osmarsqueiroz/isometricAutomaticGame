
var mapaCarroPickUpVerde = new MapaVeiculo("image/carro_pick_up_verde.png");
var mapaCarroSedanVermelho = new MapaVeiculo("image/carro_sedan_vermelho.png");
var mapaCarroSedanCinza = new MapaVeiculo("image/carro_sedan_cinza.png");

var mapaCarroPolicia = new MapaVeiculo("image/carro_policia.png");

mapaCarroPolicia.adicionarSegmento("00000001", new Segmento(32, 27, 5, 5));
mapaCarroPolicia.adicionarSegmento("00000010", new Segmento(32, 27, 5, 42));
mapaCarroPolicia.adicionarSegmento("00000100", new Segmento(32, 27, 5, 79));
mapaCarroPolicia.adicionarSegmento("00001000", new Segmento(32, 27, 5, 116));
mapaCarroPolicia.adicionarSegmento("00010000", new Segmento(32, 27, 5, 153));
mapaCarroPolicia.adicionarSegmento("00100000", new Segmento(32, 27, 5, 190));
mapaCarroPolicia.adicionarSegmento("01000000", new Segmento(32, 27, 5, 227));
mapaCarroPolicia.adicionarSegmento("10000000", new Segmento(32, 27, 5, 264));


var CarroMovimentacao = function (pNome, pCarro, pPosicaoX, pPosicaoY, pAngulo, imgCarro) {
    this.nome = pNome;
    this.acelerado = false;
    this.angulo = pAngulo;
    this.anguloIncremento = 10;
    this.posicaoX = pPosicaoX;
    this.posicaoY = pPosicaoY;
    this.passo = 1.5;
    this.objCarro = pCarro;
    this.objImgCarro = imgCarro;

    this.desenharCarro = function (cenario) {
        var elementoCarro = this.objCarro.listaSegmentos[this.localizarChave()];
        cenario.clearRect(this.posicaoX, this.posicaoY, elementoCarro.largura, elementoCarro.altura);
        cenario.drawImage(this.objImgCarro, elementoCarro.posicao_x, elementoCarro.posicao_y, elementoCarro.largura, elementoCarro.altura, this.posicaoX, this.posicaoY, elementoCarro.largura, elementoCarro.altura);
    };

    this.somarAngulo = function () {
        this.angulo = this.angulo + this.anguloIncremento;
        if (this.angulo > 360) {
            this.angulo = Math.abs(this.angulo) - 360;
        }
//        console.log( this.angulo);
    };

    this.subtrairAngulo = function () {
        this.angulo = this.angulo - this.anguloIncremento;
        if (this.angulo < 0) {
            this.angulo = 360 - Math.abs(this.angulo);
        }
//        console.log( this.angulo);
    };

    this.localizarChave = function () {
        var posicaoUm = Math.floor((this.angulo) / 45) + 1;
        if (posicaoUm > 8) {
            posicaoUm = 8;
        }
        var tamanhoString = 8;
        var antesZero = tamanhoString - posicaoUm;
        var depoisZero = posicaoUm - 1;
        var textoZero = '0';
        return textoZero.repeat(antesZero) + "1" + textoZero.repeat(depoisZero);

    }

};