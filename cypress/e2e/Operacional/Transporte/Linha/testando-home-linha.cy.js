import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import linha from '../../../../pages/Transporte/LinhaPage'
import texto from '../../../../fixtures/textos.json'

describe('Testando todos os elementos da página Linha', () => {

    beforeEach(() => {
        linha
            .beforeLinha()
    })

    it("clica no botão novo", () => {
        componente
            .clicaBotao('Novo')
            .validaMensagem(texto.textoCadastroLinha)
    })

    it("Pesquisa por nome", () => {
        componente
            .escreveDescricao('Fim do mundo')
        linha
            .validaPesquisa('Fim do mundo')
    })

    it("Pesquisa por status", () => {
        componente
            .selecionaStatus('Inativo')
            .validaStatusAusente('Ativo')
        linha
            .validaStatus('Inativo')
    })

    it("Pesquisa por tarifa", () => {
        linha
            .filtroTarifa('Tarifa Sato')
            .validaPesquisa('Tarifa Sato')
    })

    it("Pesquisa por segunda tarifa", () => {
        linha
            .filtroSegundaTarifa('Tarifa Sato')
            .validaPesquisa('Tarifa Sato')
    })

    it("Pesquisa por tarifa remuneração", () => {
        linha
            .filtroTarifaRemuneracao('E2E OPERATIONAL TEST')
            .validaPesquisaTarifaremuneração('E2E OPERATIONAL TEST')
    })

    it.skip("Pesquisa por desconto da tarifa", () => {
        linha
            .filtroDescontoTarifa('rasb')
            .validaPesquisaDescontotarifa('rasb')
    })

    it("Pesquisa por tipo da linha", () => {
        linha
            .filtroTipoDeLinha('CIRCULAR')
            .validaPesquisa('CIRCULAR')
    })

    it("Pesquisa por detalhe do tipo da linha", () => {
        linha
            .filtroDetalheTipoDeLinha('NORMAL')
            .validaPesquisa('NORMAL')
    })

    it("Pesquisa por alcance da linha", () => {
        linha
            .filtroAlcanceLinha('MUNICIPAL')
            .validaPesquisa('MUNICIPAL')
    })

    it("Pesquisa por grupo de linha integração", () => {
        linha
            .filtroGrupoIntegracaoLinha('Integração teste 1')
            .validaPesquisa('Integração teste 1')
    })

    it("Acessa a página visualizar", () => {
        componente
            .clicaBotao('Visualizar')
            .validatexto('Detalhes')
    })

    it("Acessa a função de editar", () => {
        componente
            .clicaBotao('Editar')
            .validatexto('Editar')
    })
})