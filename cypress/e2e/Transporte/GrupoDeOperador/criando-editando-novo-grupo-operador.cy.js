import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import grupoOperador from '../../../pages/Transporte/GrupoOperadorPage'
import mensagem from '../../../fixtures/mensagens.json'
import faker from 'faker-br'

describe('Testando Grupo de Operador', () => {

    beforeEach(() => {
        grupoOperador
            .beforeGrupoOperador()
    })

    it('Criando um novo Grupo de Operador "Admin"', () => {
        componente
            .clicaBotao('Novo')
            .escreveDescricao(faker.name.lastName())
            .selecionaStatus('Inativo')
        grupoOperador
            .operadorAdmin()
            .selecionaFuncaoOperadorPorId('30')
            .selecionaTodasFuncoesIncluir()
            .incluiFuncao()
        componente
            .clicaBotao('Proximo')
            .selecionaOperadora('Operadora Autopass')
        grupoOperador
            .selecionaFuncaoOperadorPorId('20')
            .selecionaTodasFuncoesIncluir()
            .incluiFuncao()
        componente
            .clicaBotao('Gravar')
            .clicaBotao('Proximo')
            .clicaBotao('+ Integrar Sistema')
        grupoOperador
            .selecionaSistema('TOP-Mercury')
            .escreveIdExterno('12')
            .clicaBotao('Salvar')
        componente
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.cadastraGrupoOperadorSucesso)
    })

    it('Editando um Grupo de Operador', () => {
        componente
            .escreveDescricao('30')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.name.lastName())
            .clicaBotao('Proximo')
            .clicaBotao('Proximo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.editaGrupoOperadorSucesso)
    })

    it('Editando um Grupo de Operador incluindo funções por lote', () => {
        componente
            .escreveDescricao('30')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.name.lastName())
        grupoOperador
            .selecionaTodasFuncoesIncluir()
            .incluiFuncao()
        componente
            .clicaBotao('Proximo')
            .clicaBotao('Proximo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.editaGrupoOperadorSucesso)
    })

    it('Editando um Grupo de Operador excluindo funções por lote', () => {
        componente
            .escreveDescricao('30')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.name.lastName())
        grupoOperador
            .selecionaTodasFuncoesExcluir()
            .excluiFuncao()
        componente
            .clicaBotao('Proximo')
            .clicaBotao('Proximo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.editaGrupoOperadorSucesso)
    })
})