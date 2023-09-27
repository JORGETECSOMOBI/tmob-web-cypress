import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import emissor from '../../../pages/Transporte/transportePage'
import faker from 'faker-br'

describe('Testando "Consócio"', () => {

    beforeEach(() => {
        emissor.beforeEmissor()
    })

    it('Editar um emissor', () => {
        componente
            .pesquisaNomeId('99')
            .clicaBotao('Editar')
            .limpaNome()
            .escreveNome(faker.name.lastName())
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
    })
})