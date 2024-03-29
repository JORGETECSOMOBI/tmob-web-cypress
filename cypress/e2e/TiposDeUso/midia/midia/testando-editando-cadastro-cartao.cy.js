import midia from '../../../../pages/midia/MidiaHome'

describe('Testando Cadastro de cartão', () => {

   beforeEach(() => {
      midia.beforeMidiaHome()
   })

   it('cadastrando um cartão novo', () => {
      midia.cadastraNovoCartão()
   })

   it('Editar um cartão "Processado"', () => {
      midia.editaCartaoProcessado()
   })

   it('Editar um cartão "Hotlist"', () => {
      midia.editaCartaoHotlist()
   })

   it('Editar um cartão "Inativo"', () => {
      midia.editaCartaoInativo()
   })

   it.skip('Editar um cartão "Pendente"(Em desenvolvimento "Alonso")', () => {
      midia.editaCartaoPendente()
   })
})