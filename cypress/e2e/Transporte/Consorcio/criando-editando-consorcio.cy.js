import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import consorcio from '../../../pages/Transporte/transportePage'
import mensagem from '../../../fixtures/mensagens.json'
import url from '../../../fixtures/url.json'
import faker from 'faker-br'

describe('Testando "Consócio"', () => {

    beforeEach(() => {
        consorcio.beforeConsorcio()
    })

    it('Criando um novo consórcio', () => {
        componente
            .clicaBotao('Consórcio')
            .clicaBotao('Novo')
            .escreveNome(faker.name.lastName())
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.cadastroConsorcioSucesso)
    })

    it('Edita um consórcio', () => {
        componente
            .clicaBotao('Consórcio')
            .pesquisaId('53')
            .clicaBotao('Editar')
            .limpaNome()
            .escreveNome(faker.name.lastName())
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.editaConsorcioSucesso)
    })

    it('Visualiza um consórcio', () => {
        componente
            .clicaBotao('Consórcio')
            .pesquisaId('53')
            .clicaBotao('Visualizar')
            .validaURL(url.visualizaConsorcioId53)
    })
})