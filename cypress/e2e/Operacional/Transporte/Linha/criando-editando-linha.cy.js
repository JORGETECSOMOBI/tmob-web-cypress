import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import linha from '../../../../pages/Transporte/LinhaPage'
import mensagem from '../../../../fixtures/mensagens.json'
import faker from 'faker-br'

describe('Criando uma nova linha', () => {

    beforeEach(() => {
        linha
            .beforeLinha()
    })

    it.skip('Criar uma nova linha', () => {
        linha.geral()
        linha.stepTarifa()
        linha.sistemasExternos()
    })

    it.skip('Editar uma nova linha', () => {
        linha.editaGeral()
        // linha.editaStepTarifa()
        // linha.editaSistemasExternos()
    })
})