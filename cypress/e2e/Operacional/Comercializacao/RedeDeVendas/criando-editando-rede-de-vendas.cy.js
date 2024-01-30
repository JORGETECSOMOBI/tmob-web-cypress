import rede from '../../../../pages/Comercializacao/RedeDeVendasPage'

describe('Testando tela "Rede de vendas"', () => {

    beforeEach(() => {
        rede.beforeRedeDeVendas()
    })

    it('Criando uma "Rede de vendas"', () => {
        rede.criandoRedeDeVendas()
    })

    it('Editando uma "Rede de vendas"', () => {
        rede.editandoRedeDeVendas()
    })
})