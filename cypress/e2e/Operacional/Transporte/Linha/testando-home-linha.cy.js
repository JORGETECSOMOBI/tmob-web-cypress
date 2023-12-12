import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import linha from '../../../../pages/Transporte/LinhaPage'
import texto from '../../../../fixtures/textos.json'

describe('Testando todos os elementos da página Linha', () => {

    beforeEach(() => {
        linha.beforeLinha()
    })

    it("clica no botão novo", () => {
       linha.botaoNovo()
    })

    it("Pesquisa por nome", () => {
        linha.pesquisaPorNome()
    })

    it("Pesquisa por status Ativo", () => {
        linha.pesquisaPorStatusAtivo()
    })

    it("Pesquisa por status Inativo", () => {
        linha.pesquisaPorStatusInativo()
    })

    it("Pesquisa por tarifa", () => {
        linha.pesquisaPorTarifa()
    })

    it("Pesquisa por segunda tarifa", () => {
        linha.pesquisaPorSegundaTarifa()
    })

    it("Pesquisa por tarifa remuneração", () => {
        linha.pesquisaPorTarifaremuneracao()
    })

    it.skip("Pesquisa por desconto da tarifa", () => {
        linha.pesquisaPorDescontoNaTarifa()
    })

    it("Pesquisa por tipo da linha", () => {
        linha.pesquisaPorTipoDaLinha()
    })

    it("Pesquisa por detalhe do tipo da linha", () => {
        linha.PesquisaPordetalheTipoDeLinha()
    })

    it("Pesquisa por alcance da linha", () => {
        linha.pesquisaPorAlcanceDaLinha()
    })

    it("Pesquisa por grupo de linha integração", () => {
        linha.pesquisaPorGrupoDeLinhaIntegracao()
    })

    it("Acessa a página visualizar", () => {
        linha.testandoVisualizar()
    })

    it("Acessa a função de editar", () => {
        linha.testandoEditar()
    })
})