import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import emissor from '../../../pages/Transporte/transportePage'
import mensagem from '../../../fixtures/mensagens.json'
import url from '../../../fixtures/url.json'
import faker from 'faker-br'

describe('Testando "Consócio"', () => {

    beforeEach(() => {
        emissor.beforeEmissor()
    })

    it('Editar um emissor', () => {
        componente
            .clicaBotao('Editar')
            .limpaNome()
            .escreveNome(faker.name.lastName())
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
    })
})