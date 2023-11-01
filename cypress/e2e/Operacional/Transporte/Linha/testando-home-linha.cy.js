import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import linha from '../../../../pages/Transporte/LinhaPage'
import mensagem from '../../../../fixtures/mensagens.json'
import faker from 'faker-br'

describe('Testando todos os elementos da página Linha', () => {

    beforeEach(() => {
        linha
            .beforeLinha()
    })

    it("clica no botão novo", () => {
        componente.clicaBotao('Novo')
    })
})