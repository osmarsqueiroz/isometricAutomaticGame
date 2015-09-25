var GrafoPesquisar = {
    lista: [],
    listaVertices: [],
    listaVerticeFechada: [],
    listaVerticeAberta: [],
    objetivoVertice: null,
    adicionarListaDeVertices: function (listaVertice) {
        GrafoPesquisar.listaVertices = listaVertice;
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
    pesquisarId: function (id) {
        /*sempre o id é fixo ao id da lista geral */
        id = parseInt(id) - 1;
        if (typeof GrafoPesquisar.listaVertices[id] !== "undefined") {
            return GrafoPesquisar.listaVertices[id];
        }

//        for (var i in GrafoPesquisar.listaVertices) {
//            if (GrafoPesquisar.listaVertices[i].id === id) {
//               
//            }
//        }
        return false;
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
            
            var chave = GrafoPesquisar.montarChave(menorVertice);

            var verticeNovo = GrafoPesquisar.listaVertices[chave];
            verticeNovo.custo = menorVertice.custo;

            GrafoPesquisar.adicionarListaFechada(verticeNovo)
            GrafoPesquisar.adicionarListaAberta(verticeNovo)


        }
    },
    adicionarListaAberta: function (vertice) {
        
        for (var i in vertice.vertices) {
            var verticeTemp = vertice.vertices[i];
            verticeTemp.custo = verticeTemp.aresta + vertice.aresta;
            GrafoPesquisar.listaVerticeAberta = GrafoPesquisar.adicionarLista(GrafoPesquisar.listaVerticeAberta, verticeTemp);
        }

//        var chave = GrafoPesquisar.montarChave(vertice);
//        console.log("Chave remove: " + chave);
//        GrafoPesquisar.listaVerticeAberta.splice("8-0",1);
//        console.log(GrafoPesquisar.listaVerticeAberta.lastIndexOf());
    },
    adicionarLista: function (lista, vertice) {
        console.log(vertice);
        var chave = GrafoPesquisar.montarChave(vertice);
        if (!GrafoPesquisar.checarChaveExiste(chave)) {
            lista[chave] = vertice;
        }

        return lista;

    },
    adicionarListaFechada: function (vertice) {
//            var chave = GrafoPesquisar.montarChave(vertice.vertices[i]);        
        GrafoPesquisar.listaVerticeFechada = GrafoPesquisar.adicionarLista(GrafoPesquisar.listaVerticeFechada, vertice)
    },
    montarChave: function (vertice) {
        if (typeof vertice !== "object") {
            console.log("Não existe objeto para montar chave")
            return false;
        }
        return vertice.id - 1;

    },
    checarChaveExiste: function (chave) {
        if (typeof GrafoPesquisar.listaVerticeAberta[chave] !== "undefined" || typeof GrafoPesquisar.listaVerticeFechada[chave] !== "undefined") {
            return true;
        }
        return false;
    },
}