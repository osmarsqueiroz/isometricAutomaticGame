var Desenhar = function (ctx, cor) {
    this.ctx = ctx;
    this.cor = cor;
    this.largura = 30;
    this.altura = 30;
    this.desenhar = function (posicaoX, posicaoY, texto) {
        var label = texto || "0";
        this.ctx.lineWidth = "2";
        this.ctx.lineJoin = "miter";
        this.ctx.fillStyle = this.cor;
        this.ctx.strokeStyle = "#ccc";
        this.ctx.fillRect(this.largura * posicaoX, this.altura * posicaoY, this.largura, this.altura);
        this.ctx.rect(this.largura * posicaoX, this.altura * posicaoY, this.largura, this.altura);
        this.ctx.stroke();
        this.ctx.fillStyle = "#fff";
        this.ctx.font = "16px Arial";
        this.ctx.fillText(label, this.largura * (posicaoX+1)- (this.largura/1.3), this.altura * (posicaoY+1) - (this.altura/3));
    }
}


var Vertice = function (posicao_x, posicao_y, aresta) {
    this.id = null;
    this.posicao_x = posicao_x;
    this.posicao_y = posicao_y;
    this.aresta = aresta || 0;
    this.custo = 0;
    this.vertices = [];

}
/*
 * Identificar os quadros chaves
 */
var Grafo = {
    id: 1,
    log: 0,
    matrizX: 0,
    matrizY: 0,
    matriz: [],
    listaVertices: [],
    listaReferenciaChave: [],
    showLog: function (texto) {
        if (Grafo.log) {
            console.log(texto);
        }
    },
    validaPosicao: function (matriz, posicao_x, posicao_y) {
        if (posicao_x < 0 || posicao_y < 0) {
            return 0;
        }
        if (typeof matriz[posicao_y] === 'undefined' || typeof matriz[posicao_y][posicao_x] === 'undefined') {
            return 0;
        }
        return matriz[posicao_y][posicao_x];
    },
    checarPonto: function (matriz, posicao_x, posicao_y) {

        if (matriz[posicao_y][posicao_x] === 1) {
            var tipoVertice = Grafo.verificarPontoChave(matriz, posicao_x, posicao_y);
            if (tipoVertice) {
                Grafo.adicionarVertice(posicao_x, posicao_y);
            }
        }
    },
    verificarPontoChave: function (matriz, posicao_x, posicao_y) {

        var p2 = Grafo.validaPosicao(matriz, posicao_x, posicao_y - 1);
        var p4 = Grafo.validaPosicao(matriz, posicao_x - 1, posicao_y);
        var p6 = Grafo.validaPosicao(matriz, posicao_x + 1, posicao_y);
        var p8 = Grafo.validaPosicao(matriz, posicao_x, posicao_y + 1);

        if (p2 === 0 && p4 === 0 && p6 === 0 && p8 === 0) {
            Grafo.showLog("Ponto Solitário")
            return false;
        } else if (p2 === 1 && p4 === 1 && p6 === 1 && p8 === 1) {
            Grafo.showLog("Ponto chave + cruz")
            return true;
        } else if (
                p2 === 1 && p4 === 0 && p6 === 0 && p8 === 0 ||
                p2 === 0 && p4 === 1 && p6 === 0 && p8 === 0 ||
                p2 === 0 && p4 === 0 && p6 === 1 && p8 === 0 ||
                p2 === 0 && p4 === 0 && p6 === 0 && p8 === 1
                ) {
            Grafo.showLog("Ponto chave Reto")
            return true;
        } else if (
                p2 === 1 && p4 === 1 && p6 === 1 && p8 === 0 ||
                p2 === 0 && p4 === 1 && p6 === 1 && p8 === 1 ||
                p2 === 1 && p4 === 0 && p6 === 1 && p8 === 1 ||
                p2 === 1 && p4 === 1 && p6 === 0 && p8 === 1
                ) {
            Grafo.showLog("Ponto chave T")
            return true;
        } else if (
                p2 === 1 && p4 === 1 && p6 === 0 && p8 === 0 ||
                p4 === 1 && p8 === 1 && p2 === 0 && p6 === 0 ||
                p8 === 1 && p6 === 1 && p4 === 0 && p2 === 0 ||
                p6 === 1 && p2 === 1 && p8 === 0 && p4 === 0
                ) {
            Grafo.showLog("Ponto chave L")
            return true;
        }
        return false;
    },
    adicionarVertice: function (posicao_x, posicao_y) {
        Grafo.listaVertices.push(new Vertice(posicao_x, posicao_y));

        var id = Grafo.listaVertices.length;
        Grafo.listaVertices[id - 1].id = id;
        Grafo.listaReferenciaChave[posicao_x + "-" + posicao_y] = (id - 1);

    },
    ligarListaVertices: function () {
        for (var v in Grafo.listaVertices) {
            Grafo.listaVertices[v] = Grafo.buscarPercurso(Grafo.listaVertices[v]);
        }
    },
    buscarPercurso: function (vertice) {

        for (var i = 0; i < 4; i++) {
            var novoVertice = Grafo.procurarDirecaoVertice(vertice.posicao_x, vertice.posicao_y, i);

            if (novoVertice !== false) {
                vertice.vertices.push(novoVertice)
            }
        }
        return vertice;

    },
    procurarDirecaoVertice: function (posicao_x, posicao_y, direcao) {
        var achou = false;
        var passos = 0;
        var achouPonto = 0;
        while (achou == false) {
            switch (direcao) {
                case 0: //cima
                    Grafo.showLog("Cima")
                    posicao_y = posicao_y - 1;
                    break;
                case 1: //direita
                    Grafo.showLog("direita")
                    posicao_x = posicao_x + 1;
                    break;
                case 2: //baixo
                    Grafo.showLog("baixo")
                    posicao_y = posicao_y + 1;
                    break;
                case 3: //esquerda
                    Grafo.showLog("esquerda")
                    posicao_x = posicao_x - 1;
                    break;
            }

            achouPonto = Grafo.validaPosicao(Grafo.matriz, posicao_x, posicao_y);
          
            if (achouPonto) {
                passos++;
                var idVertice = Grafo.buscaChavePorPosicao(posicao_x, posicao_y);
                if (idVertice !== false) {
                    var id = Grafo.listaVertices[idVertice].id;
                    var tempVertice = new Vertice(posicao_x, posicao_y, passos);
                    tempVertice.id = id;
                    return tempVertice;
                }
            } else {
                achou = true;
            }
        }
        return false;
    },
    buscaChavePorPosicao: function (posicao_x, posicao_y) {
        if (typeof Grafo.listaReferenciaChave[posicao_x + "-" + posicao_y] == "number") {
            return Grafo.listaReferenciaChave[posicao_x + "-" + posicao_y];
        }
        return false;
    },
    processarMatriz: function (matriz) {
        Grafo.matriz = matriz;
        for (var y in matriz) {
            y = parseInt(y);
            for (var x in matriz[y]) {
                x = parseInt(x);
                Grafo.checarPonto(matriz, x, y);
            }
        }
        Grafo.ligarListaVertices();


    },
    adicionarPonto: function (posicao_x, posicao_y) {
        Grafo.adicionarVertice(posicao_x, posicao_y);
        var id = Grafo.buscaChavePorPosicao(posicao_x ,posicao_y)
        var vertice = Grafo.listaVertices[id];
        console.log(id,vertice);
//
//        vertice = Grafo.buscarPercurso(vertice);
//        Grafo.listaVertices[id] = vertice;
//        for (var i in vertice.vertices) {
//            var tempVertice = vertice.vertices[i];
//            Grafo.listaVertices[tempVertice.posicao_x + "-" + tempVertice.posicao_y] = Grafo.ligarVertices(tempVertice)
//        }
    },
    desenharGrafo: function (desenho) {
//        console.log(Grafo.listaVertices)
        for (var id in Grafo.listaVertices) {
            var vertice = Grafo.listaVertices[id];
            desenho.desenhar(vertice.posicao_x, vertice.posicao_y, vertice.id);
        }
    },
    balancearPonto: function () {

    },
}



window.onload = function () {
    var mapa = [
        [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
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


    var objCanvas = document.getElementById('myCanvas');
    var cenario = objCanvas.getContext("2d");
    var boxbranco = new Desenhar(cenario, "white");
    var boxVerde = new Desenhar(cenario, "#5b1");
    var boxCinza = new Desenhar(cenario, "#eee");
    var boxVermelho = new Desenhar(cenario, "red");

    for (var y in mapa) {
        for (var x in mapa[y]) {
            if (mapa[y][x] == 1) {
                boxCinza.desenhar(x, y);
            } else {
                boxbranco.desenhar(x, y);
            }
        }
    }

    Grafo.processarMatriz(mapa);
//
//    Grafo.adicionarPonto(5, 11);
//    Grafo.adicionarPonto(1, 9);


//    console.log(Grafo.listaVertices);

    Grafo.desenharGrafo(boxVerde);
    GrafoPesquisar.adicionarListaDeVertices(Grafo.listaVertices)
    var listaMelhorCaminho = GrafoPesquisar.pesquisarMelhorCaminho(1, 26)
//    
    for(var i in listaMelhorCaminho){
        boxVermelho.desenhar(listaMelhorCaminho[i].posicao_x, listaMelhorCaminho[i].posicao_y, listaMelhorCaminho[i].custo);
    }
};