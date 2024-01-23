import taxa from '../../../../pages/Comercializacao/TaxaDeAdministracaoPage'

describe('Criando e editando "Taxa de administração"', () => {

    beforeEach(() => {
        taxa.beforeTaxaDeAdministracao()
    })

    it('Criando "Taxa de Administração Porcentagem"', () => {
        taxa.criandoTaxaAdministracaoPorcentagem()
    })

    it('Criando "Taxa de Administração valor"', () => {
        taxa.criandoTaxaAdministracaoValor()
    })

    it('Editando "Taxa de Administração"', () => {
        taxa.editandoTaxaAdministracao()
    })
})