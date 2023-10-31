import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import sindicato from '../../../../pages/Transporte/transportePage'
import faker from 'faker-br'

describe('Testando "Sindicato"', () => {

    beforeEach(() => {
        sindicato.beforeSindicato()
    })

    it('Criar um Sindicato', () => {
        componente
            .clicaBotao('Novo')
            .escreveNomeId(faker.name.lastName())
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
    })

    it('Editar um Sindicato', () => {
        componente
            .pesquisaNomeId('19')
            .clicaBotao('Editar')
            .limpaNome()
            .escreveNomeId(faker.name.lastName())
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
    })
})