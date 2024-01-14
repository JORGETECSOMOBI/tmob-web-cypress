import organizacao from '../../../../pages/Atendimento/OrganizacaoPge'

describe('Testando a tela "Organização"', () => {

    beforeEach(() => {
        organizacao.beforeOrg()
    })

    it('Cria nova organização com sucesso', () => {
        organizacao.criaOrganização()
    })

    it('Tentativa de criar nova organização com cep inválido', () => {
        organizacao.TentativaDeCriarOrganizacaoCepInválido()
    })
})