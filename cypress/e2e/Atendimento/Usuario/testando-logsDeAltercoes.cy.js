import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import cadastrar from '../../../pages/Atendimento/Usuario/cadastroPage'

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

    it.skip('Obtenha a data atual e armazene em uma constante', () => {
        const currentDate = new Date()
        const currentDay = currentDate.getDate()
        const currentMonth = currentDate.getMonth() + 1
        const currentYear = currentDate.getFullYear()
        const formattedDate = `${currentDay.toString().padStart(2, '0')}/${currentMonth.toString().padStart(2, '0')}/${currentYear}`;
        cy.log(`Data atual: ${formattedDate}`)

        componente
            .pesquisaNomeId('mamae')
            .clicaBotaoHomepesquisar()
            .clicaBotaoHomeEditar()
            .limpaData()
            .editaData('10/02/1959')
            .clicaNoDia('10')
            .selecionaStatusDiversos('Inativo')
            .selecionaStatusDiversos('Ativo')
            .excluiTipoDeUsuario()
            .limpaEditaNome()
        cadastrar
            .selecionaTipoUsuario('AUTOMAÇÃO')
        componente
            .editaNome()
            .clicaBotaoSalvar()
            .clicaBotaoModal('Salvar')
            .clicaBotao('Ver usuário')
            .clicaBotao('Logs de alterações')
            .validatexto('Histórico de alterações')
            //.validaFormattedDate(formattedDate)
    })
})