import bin from '../../../../pages/Emv/BinPage'

describe('Testando a tela BIN', ()=>{

    beforeEach(()=>{
        bin.beforeBin()
    })
   
    it('Pesquisando por número do BIN', () => {
        bin.pesquisaPorNumeroBin()
    })

    it('Pesquisando por nome do Bim', () => {
        bin.pesquisaPorNomeBin()
    })

    it('Pesquisando por nome do status Ativo', () => {
        bin.pesquisaPorStatusAtivo()
    })

    it('Pesquisando por nome do status Inativo', () => {
        bin.pesquisaPorStatusInativo()
    })

    it('Testando botão visualizar', () => {
        bin.botaoVisualizar()
    })

    it('Testando botão Editar', () => {
        bin.botaoEditar()
    })
})