import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import linha from '../../../../pages/Transporte/LinhaPage'
import mensagem from '../../../../fixtures/mensagens.json'
import faker from 'faker-br'

describe('Criando uma nova linha', () => {

    beforeEach(() => {
        linha
            .beforeLinha()
    })

    it('Criar uma nova linha', () => {
        linha.geral()
        linha.stepTarifa()
        linha.sistemasExternos()
    })
})