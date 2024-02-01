import motivo from '../../../../pages/Comercializacao/MotivosDeSangriaPage'

describe('Criando e editando "Motivos de sangria"', () => {

    beforeEach(() => {
        motivo.beforeMotivosDeSangria()
    })

    it.skip('Criando "Motivos de Sangria Crédito", (Chamado para correções:TMOB-2887)', () => {
        motivo.CriandoMotivosDeSangriaCredito()
    })

    it.skip('Criando "Motivos de Sangria Débito" , (Chamado para correções:TMOB-2887)', () => {
        motivo.criandoMotivosDeSangriaDebito()
    })

    it('Editando "Motivos de Sangria"', () => {
        motivo.editandoMotivosDeSangria()
    })
})