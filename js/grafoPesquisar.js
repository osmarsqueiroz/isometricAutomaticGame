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

    },
    adicionarLista: function (lista, vertice) {
        console.log(lista, vertice)
    },
    adicionarListaAberta: function (vertice) {
        GrafoPesquisar.listaVerticeAberta = GrafoPesquisar.adicionarLista(GrafoPesquisar.listaVerticeAberta, vertice)
    },
    adicionarListaFechada: function (vertice) {
        GrafoPesquisar.listaVerticeFechada = GrafoPesquisar.adicionarLista(GrafoPesquisar.listaVerticeFechada, vertice)
    },
}