import login from '../../../pages/Login/LoginPage'
import home from '../../../pages/Home/HomePage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Testando "Arquivos Operacionais', () => {

    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .transporte()
        componente
            .validaURL('https://web.test.tmob.com.br/transport')
            .selecionaIdioma('PT')
            .clicaBotao('Calendário operacional')
    })

    it('testando filtro por id', () => {
        componente
            .pesquisa('18')
            .selecionaStatus('Ativo')
    })

    it('testando filtro por status', () => {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAusente('Inativo')
    })

    it('testando botão "Visualizar"', () => {
        componente
            .pesquisa('18')
            .clicaBotao('Visualizar')
            .validaURL('https://web.test.tmob.com.br/transport/fleetSchedule/18')
    })

    it('testando botão "Editar"', () => {
        componente
            .pesquisa('18')
            .clicaBotao('Editar')
            .validaURL('https://web.test.tmob.com.br/transport/fleetSchedule/18/edit')
    })

    it('testando botão "Limpar filtro"', () => {
        componente
            .pesquisa('Automação')
            .selecionaStatus('Inativo')
            .clicaBotao('Limpar filtro')
            .validaFunçãolimparFiltro()
    })
})