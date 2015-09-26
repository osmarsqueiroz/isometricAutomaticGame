var GrafoPesquisar = {
    lista: [],
    listaVertices: [],
    listaVerticeFechada: [],
    listaVerticeAberta: [],
    achouObjetivo: false,
    listaFinal: [],
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

       return GrafoPesquisar.configurarInicioDaPesquisa(verticeOrigem, verticeDestino);
    },
    pesquisarId: function (id) {
        /*sempre o id é fixo ao id da lista geral */
        id = parseInt(id) - 1;
        if (typeof GrafoPesquisar.listaVertices[id] !== "undefined") {
            return GrafoPesquisar.listaVertices[id];
        }

        return false;
    },
    configurarInicioDaPesquisa: function (verticeOrigem, verticeDestino) {
        GrafoPesquisar.objetivoVertice = verticeDestino;
        GrafoPesquisar.adicionarListaAberta(verticeOrigem);

        GrafoPesquisar.verificarLoopCaminho();

        return GrafoPesquisar.retornarMelhorCaminho();
    },
    verificarLoopCaminho: function () {       
        while (GrafoPesquisar.listaAbertaCheia()) {
            if (GrafoPesquisar.verificarListaAbertaObjetivo()) {
                return true;
            }
            var menorVertice = null;
            for (var i in GrafoPesquisar.listaVerticeAberta) {
                if (GrafoPesquisar.listaVerticeAberta[i] !== null) {
                    var vertice = GrafoPesquisar.listaVerticeAberta[i];
                    if (menorVertice === null) {
                        menorVertice = vertice;
                    } else if (menorVertice.custo > vertice.custo) {
                        menorVertice = vertice;
                    }
                }
            }

            var chave = GrafoPesquisar.montarChave(menorVertice);
            var verticeNovo = GrafoPesquisar.listaVertices[chave];
            verticeNovo.custo = menorVertice.custo;

            GrafoPesquisar.removerListaAberta(menorVertice.id)
            GrafoPesquisar.adicionarListaAberta(verticeNovo);
//            console.log("total:" + GrafoPesquisar.listaVerticeAberta.length);



        }
//        console.log(GrafoPesquisar.listaVerticeAberta)
//        console.log(GrafoPesquisar.listaVerticeFechada)
    },
    listaAbertaCheia: function () {
        return GrafoPesquisar.listaVerticeAberta.length > 0;
    },
    verificarListaAbertaObjetivo: function () {
        return GrafoPesquisar.achouObjetivo;
    },
    removerListaAberta: function (id) {
        for (var i in GrafoPesquisar.listaVerticeAberta) {
            if (GrafoPesquisar.listaVerticeAberta[i].id === id) {
                GrafoPesquisar.listaVerticeAberta.splice(i, 1);
                return true;
            }
        }
    },
    checarElementoExisteNaLista: function (lista, id) {
        for (var i in lista) {
            if (lista[i].id === id) {
                return i;
            }
        }
        return false;
    },
    retornarMelhorCaminho: function () {
        GrafoPesquisar.listaFinal = [];
        if (GrafoPesquisar.achouObjetivo) {
//            console.log("Achou! eba!")
            GrafoPesquisar.listaVerticeFechada.reverse();
            GrafoPesquisar.listaFinal.push(GrafoPesquisar.listaVerticeFechada[0]);
            GrafoPesquisar.pesquisaDeProfundidadeListaFechada(0);
        }
        GrafoPesquisar.listaFinal.reverse()
        return GrafoPesquisar.listaFinal;

    },
    pesquisaDeProfundidadeListaFechada: function (id) {
        GrafoPesquisar.listaVerticeFechada[id];
        var elementoMenor = null;
        var elementoMenorValor = null;
        var elementoIdNovo = null;
        var custoBase = elementoMenorValor = GrafoPesquisar.listaVerticeFechada[id].custo;
        var chave = GrafoPesquisar.montarChave(GrafoPesquisar.listaVerticeFechada[id]);
        var vertices = GrafoPesquisar.listaVertices[chave].vertices;
        if(custoBase == 0){
           return false;
        }


        for (var j in vertices) {
            var idTemp = GrafoPesquisar.checarElementoExisteNaLista(GrafoPesquisar.listaVerticeFechada, vertices[j].id);
            if (idTemp !== false) {
                if (elementoMenorValor > GrafoPesquisar.listaVerticeFechada[idTemp].custo) {
                    elementoMenorValor = GrafoPesquisar.listaVerticeFechada[idTemp].custo;
                    elementoMenor = GrafoPesquisar.listaVerticeFechada[idTemp];
                    elementoIdNovo = idTemp;
                }
            }
        }
        GrafoPesquisar.listaFinal.push(elementoMenor);
//        console.log(elementoMenorValor, elementoMenor);
        GrafoPesquisar.pesquisaDeProfundidadeListaFechada(elementoIdNovo);


    },
    adicionarListaAberta: function (vertice) {
        GrafoPesquisar.adicionarListaFechada(vertice);
//        console.log(vertice);
//        console.log("ID item:" + vertice.id);
        for (var i in vertice.vertices) {
            var verticeTemp = vertice.vertices[i];
            verticeTemp.custo = verticeTemp.aresta + vertice.custo;
            if (verticeTemp.id === GrafoPesquisar.objetivoVertice.id) {
                GrafoPesquisar.achouObjetivo = true;
                GrafoPesquisar.adicionarListaFechada(verticeTemp);
            } else {
                GrafoPesquisar.listaVerticeAberta = GrafoPesquisar.adicionarLista(GrafoPesquisar.listaVerticeAberta, verticeTemp);

            }
        }
    },
    adicionarLista: function (lista, vertice) {
        if (!GrafoPesquisar.checarChaveExiste(vertice)) {
            lista.push(vertice);
        } else {
            var posicaoLista = GrafoPesquisar.checarElementoExisteNaLista(lista, vertice.id);

            if (posicaoLista !== false) {
                if (lista[posicaoLista].custo > vertice.custo) {
                    console.log("ID: " + lista[posicaoLista].id);
                    console.log("antes: " + lista[posicaoLista].custo);
                    console.log("despois: " + vertice.custo);
                    lista[posicaoLista] = vertice;
                }
            }
        }
        return lista;
    },
    adicionarListaFechada: function (vertice) {
        GrafoPesquisar.listaVerticeFechada.push(vertice);
    },
    montarChave: function (vertice) {
        if (typeof vertice !== "object") {
            console.log("Não existe objeto para montar chave")
            return false;
        }
        return vertice.id - 1;
    },
    checarChaveExiste: function (vertice) {
        if (GrafoPesquisar.checarElementoExisteNaLista(GrafoPesquisar.listaVerticeAberta, vertice.id) === false && GrafoPesquisar.checarElementoExisteNaLista(GrafoPesquisar.listaVerticeFechada, vertice.id) === false) {
            return false;
        }
        return true;
    },
}