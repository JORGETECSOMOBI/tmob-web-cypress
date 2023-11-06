import terminal from "../../../../pages/Transporte/TerminalPage"
import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'

describe('Criando um novo terminal', () => {

    beforeEach(() => {
        terminal.beforeTerminal()
    })

    it('Criando um terminal', () => {
        terminal
            .clicarEmCriarTerminal()
        componente
            .selecionaOperadora('Operadora Autopass')
        terminal
            .escreveNumeroTerminal()
            .selecionaGrupoterminal('Automação Teste')
            .selecionaCalendarioOperacional('Teste Augusto calendario')
        componente
            .escreveDescricao(faker.name.findName())
            .selecionaStatus('Inativo')
            .clicaBotao('OK')
            .validaMensagem('Terminal criado com sucesso')
    })
})