var GrafoPesquisar = {
    lista: [],
    listaVertices: [],
    listaVerticeFechada: [],
    listaVerticeAberta: [],
    objetivoVertice: null,
    adicionarListaDeVertices: function (listaVertice) {
        GrafoPesquisar.listaVertices = listaVertice;
    },
    pesquisarId: function (id) {
        for (var i in GrafoPesquisar.listaVertices) {
            if (GrafoPesquisar.listaVertices[i].id === id) {
                return GrafoPesquisar.listaVertices[i];
            }
        }
        return false;
    },
    montarChave: function (vertice) {
        if (typeof vertice !== "object") {
            console.log("Não existe objeto para montar chave")
            return false;
        }
        return vertice.posicao_x + "-" + vertice.posicao_y;
    },
    pesquisarMelhorCaminho: function (idA, idB) {

        var verticeOrigem = GrafoPesquisar.pesquisarId(idA);
        var verticeDestino = GrafoPesquisar.pesquisarId(idB);

        if (verticeOrigem === false || verticeDestino === false) {
            console.log("Não existe um dos pontos")
            return false;
        }

        GrafoPesquisar.configurarInicioDaPesquisa(verticeOrigem, verticeDestino);
    },
    configurarInicioDaPesquisa: function (verticeOrigem, verticeDestino) {
        GrafoPesquisar.objetivoVertice = verticeDestino;
        GrafoPesquisar.adicionarListaAberta(verticeOrigem);
        GrafoPesquisar.verificarLoopCaminho();
    },
    verificarLoopCaminho: function () {
        var menorVertice = null;
        for (var i in GrafoPesquisar.listaVerticeAberta) {
            var vertice = GrafoPesquisar.listaVerticeAberta[i];
            if (menorVertice === null) {
                menorVertice = vertice;
            } else if (menorVertice.custo > vertice.custo) {
                menorVertice = vertice;
            }

//            console.log(vertice,menorVertice.custo , vertice.custo)
//            console.log("Achei o menor");
            var chave = GrafoPesquisar.montarChave(menorVertice);

            var verticeNovo = GrafoPesquisar.listaVertices[chave];
            verticeNovo.custo = menorVertice.custo;
            
            GrafoPesquisar.adicionarListaFechada(verticeNovo)
            GrafoPesquisar.adicionarListaAberta(verticeNovo)

//            console.log("Chave: " + chave);
//            console.log(GrafoPesquisar.listaVerticeAberta );
        }
    },
    checarChaveExiste: function (chave) {
        if (typeof GrafoPesquisar.listaVerticeAberta[chave] !== "undefined" || typeof GrafoPesquisar.listaVerticeFechada[chave] !== "undefined") {
            return true;
        }
        return false;
    },
    adicionarLista: function (lista, vertice) {
        var chave = GrafoPesquisar.montarChave(vertice);
        if (!GrafoPesquisar.checarChaveExiste( chave)) {
            lista[chave] = vertice;
        }

        return lista;

    },
    adicionarListaAberta: function (vertice) {
//        console.log(vertice.aresta);

        for (var i in vertice.vertices) {
            var verticeTemp = vertice.vertices[i];
            verticeTemp.custo = verticeTemp.aresta + vertice.aresta;
            GrafoPesquisar.listaVerticeAberta = GrafoPesquisar.adicionarLista(GrafoPesquisar.listaVerticeAberta, verticeTemp);
        }

        var chave = GrafoPesquisar.montarChave(vertice);
        console.log("Chave remove: " + chave);
//        GrafoPesquisar.listaVerticeAberta.splice("8-0",1);
         console.log(GrafoPesquisar.listaVerticeAberta.lastIndexOf());
    },
    adicionarListaFechada: function (vertice) {
//            var chave = GrafoPesquisar.montarChave(vertice.vertices[i]);        
        GrafoPesquisar.listaVerticeFechada = GrafoPesquisar.adicionarLista(GrafoPesquisar.listaVerticeFechada, vertice)
    },
}