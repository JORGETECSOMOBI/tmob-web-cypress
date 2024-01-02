import grupoTerminais from '../../../../pages/Transporte/GrupoTerminaisPage'

describe('Testando Grupo de terminais', () => {

    beforeEach(() => {

        grupoTerminais.beforeGrupoTerminais()
    })

    it('Criando um novo grupo de terminais', () => {
       grupoTerminais.criandoGrupoTerminais()
    })

    it('Editando grupo de terminais "Geral"', () => {
        grupoTerminais.editandoGrupoTerminaisGeral()
    })

    it('Editando grupo de terminais "Regras de serviço"', () => {
        grupoTerminais.editandoGrupoTerminaisRegrasDeServico()
    })

    it('Editando grupo de terminais "Restrição de função"', () => {
        grupoTerminais.editandoGrupoTerminaisRestricaoDeFuncao()
    })

    it('Adicionando um item no agrupador', () => {
        grupoTerminais.adicionandoItemNoAgrupador()
    })

    it('Excluindo um grupo de terminais', () => {
        grupoTerminais.excluindoGrupoTerminais()
    })
})