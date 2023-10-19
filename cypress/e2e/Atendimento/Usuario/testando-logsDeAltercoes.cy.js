import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Acessando ususário e Testando Logs de alterações', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Visualizando "Logs de alterações"', () => {
        componente
            .clicaBotaoHomeVisualizar()
            .clicaBotao('Logs de alterações')
            .validatexto('Histórico de alterações')
    })

    it('Obtenha a data atual e armazene em uma constante', () => {
        const currentDate = new Date()
        const currentDay = currentDate.getDate()
        const currentMonth = currentDate.getMonth() + 1
        const currentYear = currentDate.getFullYear()
        const formattedDate = `${currentDay.toString().padStart(2, '0')}/${currentMonth.toString().padStart(2, '0')}/${currentYear}`;
        cy.log(`Data atual: ${formattedDate}`)

        componente
            .pesquisaNomeId('56')
            .clicaBotaoHomeEditar()
            .limpaEditaNome()
            .editaNome()
            .clicaBotaoSalvar()
            .clicaBotaoModal('Salvar')
            .clicaBotao('Ver usuário')
            .clicaBotao('Logs de alterações')
            .validatexto('Histórico de alterações')
            .validatexto(formattedDate)
    })
})