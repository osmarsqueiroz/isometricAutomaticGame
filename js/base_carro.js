
var radiano = function (grau) {
    return grau * (Math.PI / 180);
}

window.onload = function () {

    var objCanvas = document.getElementById('myCanvas');
    var cenario = objCanvas.getContext("2d");
    var imagemCarro = new Image();

    imagemCarro.onload = function () {

        var carro = new CarroMovimentacao("S-10", mapaCarroPolicia, 100, 100, 0, imagemCarro);
        var carro2 = new CarroMovimentacao("S-15", mapaCarroPolicia, 150, 150, 0, imagemCarro);

//        setInterval(function () {
//            carro.somarAngulo();
//            carro2.subtrairAngulo();
//
//            carro.desenharCarro(cenario);
//            carro2.desenharCarro(cenario);
//        }, 100);
    }
    imagemCarro.src = mapaCarroPolicia.imagem;




};

