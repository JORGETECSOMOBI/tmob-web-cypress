import grupoLinha from '../../../../pages/Transporte/GrupoLinhaPage'

describe('Testando Grupo de linha', () => {

    beforeEach(() => {
        grupoLinha.beforeGrupoLinha()
    })

    it('Criar um novo grupo de linha incluindo linhas em lote', () => {
       grupoLinha.criaGrupoDeLinhaEmLote()
    })

    it('Editar um grupo habilitando uma linha', () => {
        grupoLinha.habilitaLinha()
    })

    it('Editar um grupo desabilitando uma linha', () => {
       grupoLinha.desabilitaLinha()
    })
})