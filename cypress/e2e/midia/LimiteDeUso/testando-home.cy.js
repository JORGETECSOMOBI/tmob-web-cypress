import limite from '../../../pages/midia/LimiteDeUso'
import componentes from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Testando Cadastro de cartão', () => {

    beforeEach(() => {
        limite.beforeLimiteUso()
    })

    it('cadastrando um cartão novo', () => {
        componentes
            .clicaBotaoNovo()
    })
})