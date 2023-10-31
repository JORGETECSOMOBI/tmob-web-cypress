import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import grupoOperador from '../../../../pages/Transporte/GrupoOperadorPage'
import url from '../../../../fixtures/url.json'

describe('Testando todas as funcionalidades da home Grupo de operador', () => {

    beforeEach(() => {
        grupoOperador
            .beforeGrupoOperador()
    })

    it('Testando pesquisa por id', () => {
        componente
            .escreveDescricao('12')
        grupoOperador
            .ValidaIdgrupoOperador('12')
    })

    it('Testando status ativo', () => {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()
    })

    it('Testando status Inativo', () => {
        componente
            .selecionaStatus('Inativo')
            .validaStatusInativo()
    })

    it('Testando função Visualizar', () => {
        componente
            .escreveDescricao('12')
            .clicaBotao('Visualizar')
            .validaURL(url.visualizaGrupoOperador)
    })

    it('Testando status Inativo', () => {
        componente
            .escreveDescricao('12')
            .clicaBotao('Editar')
            .validaURL(url.editaGrupoOperador)
    })
})
