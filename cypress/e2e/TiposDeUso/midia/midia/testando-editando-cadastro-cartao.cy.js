import midia from '../../../../pages/midia/MidiaHome'

describe('Testando Cadastro de cartão', () => {

   beforeEach(() => {
      midia.beforeMidiaHome()
   })

   it('cadastrando um cartão novo', () => {
      midia.cadastraNovoCartão()
   })

   it.skip('Editar um cartão "Processado"', () => {
      midia.editaCartaoProcessado()
   })

   it('Editar um cartão "Hotlist"', () => {
      midia.editaCartaoHotlist()
   })

   it.skip('Editar um cartão "Inativo"', () => {
      midia.editaCartaoInativo()
   })

   it.skip('Editar um cartão "Pendente"', () => {
      midia.editaCartaoPendente()
   })
})