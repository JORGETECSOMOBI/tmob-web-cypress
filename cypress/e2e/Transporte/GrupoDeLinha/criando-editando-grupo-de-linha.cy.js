import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import grupoLinha from '../../../pages/Transporte/GrupoLinhaPage'
import mensagem from '../../../fixtures/mensagens.json'
import faker from 'faker-br'

describe('Testando Grupo de linha', () => {

    beforeEach(() => {
        grupoLinha.beforeGrupoLinha()

    })

    it.only('Criar um novo grupo de linha incluindo linhas em lote', () => {
        componente
            .clicaBotao('Novo')
            .escreveDescricao(faker.name.firstName())
            .selecionaStatus('Inativo')
        grupoLinha
            .selecionaTodasLinhas2()
            .incluiLinhas()
        componente
            .clicaBotao('Proximo')
            .clicaBotao('Integrar Sistema')
        grupoLinha
            .selecionaSistema('TOP-Mercury')
            .escreveIdExterno('33')
            .clicaBotao('Salvar')
    })

    it('Editar um grupo habilitando uma linha', () => {
        componente
            .escreveDescricao('313')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.name.lastName())
            .selecionaStatus('Inativo')
        grupoLinha
            .escreveLinhaNomeId0('54170')
            .selecionaTodasLinhas0()
            .incluiLinhas()
            .validaInclusaoDeLinha('L09 - RINCÃO')
        componente
            .clicaBotao('Proximo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.editaGrupoLinha)
    })

    it('Editar um grupo desabilitando uma linha', () => {
        componente
            .escreveDescricao('313')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.name.lastName())
            .selecionaStatus('Inativo')
        grupoLinha
            .escreveLinhaNomeId0('54170')
            .selecionaTodasLinhas1()
            .excluiLinhas()
            .validaExclusaoDeLinha('L09 - RINCÃO')
        componente
            .clicaBotao('Proximo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.editaGrupoLinha)
    })
})