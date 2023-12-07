import bin from '../../../../pages/Emv/BinPage'

describe('Criando e editando BIN', ()=>{

    beforeEach(()=>{
        bin.beforeBin()
    })
   
    it('Criando BIN', () => {
        bin.criandoBin()
    })

    it('Editando BIN', () => {
        bin.editandoBin()
    })
})
