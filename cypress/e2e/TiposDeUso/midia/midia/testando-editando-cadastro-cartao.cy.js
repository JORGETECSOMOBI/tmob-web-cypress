import midia from '../../../../pages/midia/MidiaHome'

describe('Testando Cadastro de cartão', () => {

    beforeEach(() => {
        midia.beforeMidiaHome()
    })

    it('cadastrando um cartão novo', () => {
        midia.cadastraNovoCartão()
    })

    it.skip('Editar um cartão ', () => {
       midia.editaCartao()
    })
})