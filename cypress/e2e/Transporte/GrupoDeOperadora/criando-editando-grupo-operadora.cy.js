import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import grupoOperadora from '../../../pages/Transporte/GrupoOperadoraPage'
import mensagem from '../../../fixtures/mensagens.json'
import faker from 'faker-br'

describe('Testando Grupo de Operadora', () => {

    beforeEach(() => {
        grupoOperadora
            .beforeGrupoOperadora()
    })

    it('Criando um novo grupo de operadora', () => {
        componente
            .clicaBotao('Novo')
            .escreveDescricao(faker.name.lastName())
            .clicaBotao('Salvar')
            .clicaBotao('Sim')
            .validaMensagem(mensagem.cadastraGrupoOperadoraSucesso)
    })

    it('Editando um  grupo de operadora', () => {

        componente
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.name.lastName())
        grupoOperadora
            .alteraStatus()
            .interoperabilidade()
        componente
            .clicaBotao('Salvar')
            .clicaBotao('Sim')
            .validaMensagem(mensagem.editaGrupoOperadoraSucesso)
    })


})