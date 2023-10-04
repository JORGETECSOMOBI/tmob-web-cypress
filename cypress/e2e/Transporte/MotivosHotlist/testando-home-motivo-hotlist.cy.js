import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import hotlist from '../../../pages/Transporte/transportePage'

describe('Testando home de hotlist', () => {

    beforeEach(() => {
        hotlist
            .beforeMotivosHotlist()
    })

    it('filtro por id', () => {
        componente
            .escreveDescricao('19')
            .validaId('19')
    })

    it.only('filtro por nome', () => {
        componente
            .escreveDescricao('Elizangela do Sul')
            .validaNome('Elizangela do Sul')
    })

    it('filtro Ativo', () => {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()
    })

    it('filtro Inativo', () => {
        componente
            .selecionaStatus('Inativo')
            .validaStatusInativo()
    })

    it('Função visualizar Ação "Bloqueado"', () => {
        componente
            .escreveDescricao('22')
            .clicaBotao('Visualizar')
            .validatexto('ID #22')
            .validatexto('Bloqueado')
    })

    it('Função visualizar Ação "Desbloqueado"', () => {
        componente
            .escreveDescricao('02')
            .clicaBotao('Visualizar')
            .validatexto('ID #2')
            .validatexto('Desbloqueado')
    })
})
