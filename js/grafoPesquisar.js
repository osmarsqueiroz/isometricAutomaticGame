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
        for(var i in GrafoPesquisar.listaVerticeAberta){
            var vertice = GrafoPesquisar.listaVerticeAberta[i];          
            if(menorVertice == null){
                menorVertice = vertice;
            }
        }
    },
    checarChaveExiste: function (lista, chave) {
        return typeof lista[chave] !== "undefined";
    },
    adicionarLista: function (lista, vertice) {
        var chave = GrafoPesquisar.montarChave(vertice);
        if (!GrafoPesquisar.checarChaveExiste(lista, chave)) {
            lista[chave] = vertice;
        }

        return lista;

    },
    adicionarListaAberta: function (vertice) {
        for (var i in vertice.vertices) {
            var chave = GrafoPesquisar.montarChave(vertice.vertices[i]);
            var verticeTemp = GrafoPesquisar.listaVertices[chave];
            GrafoPesquisar.listaVerticeAberta = GrafoPesquisar.adicionarLista(GrafoPesquisar.listaVerticeAberta, verticeTemp);

        }
    },
    adicionarListaFechada: function (vertice) {
//            var chave = GrafoPesquisar.montarChave(vertice.vertices[i]);        
        GrafoPesquisar.listaVerticeFechada = GrafoPesquisar.adicionarLista(GrafoPesquisar.listaVerticeFechada, vertice)
    },
}