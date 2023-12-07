import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import grupoTerminais from '../../../../pages/Transporte/GrupoTerminaisPage'
import mensagem from '../../../../fixtures/mensagens.json'
import faker from 'faker-br'

describe('Testando Grupo de terminais', () => {

    beforeEach(() => {

        grupoTerminais.beforeGrupoTerminais()
    })

    it('Criando um novo grupo de terminais', () => {
        componente
            .clicaBotao('+ Novo grupo')
            .escreveDescricao('Criando Terminal')
            .clicaBotao('OK')
            .validaMensagem(mensagem.criaGrupoTerminaisSucesso)
    })

    it('Editando grupo de terminais "Geral"', () => {
        grupoTerminais
            .pesquisarNoGrupo('Criando Terminal')
            .botaoEditaGrupo()
        componente
            .limpaDescricao()
            .escreveDescricao('Automação Teste')
        grupoTerminais
            .selecionaTipoInstalação('Garagem')
            .selecionaCalendarioOperacional('Teste Augusto calendario')
        componente
            .clicaBotao('OK')
            .validaMensagem(mensagem.editaGrupoTerminaisSucesso)
    })

    it('Editando grupo de terminais "Regras de serviço"', () => {
        grupoTerminais
            .pesquisarNoGrupo('Automação Teste')
            .botaoEditaGrupo()
            .stepRegrassDeProduto()
            .restringir()
            .permitir()
        componente
            .clicaBotao('Adicionar permissão')
        grupoTerminais
            .tipoRestricao('QrCode')
            .subTipoRestricao('QRCODE ATM')
        componente
            .clicaBotao('OK')
            .validaMensagem(mensagem.editaGrupoTerminaisSucesso)
    })

    it('Editando grupo de terminais "Restrição de função"', () => {
        grupoTerminais
            .pesquisarNoGrupo('Automação Teste')
            .botaoEditaGrupo()
            .restricaoFuncao()
            .adicionaRestricao()
            .selecionaFuncao('Selecao de linha')
        componente
            .clicaBotao('OK')
            .validaMensagem(mensagem.editaGrupoTerminaisSucesso)
    })

    it('Adicionando um item no agrupador', () => {
        grupoTerminais
            .pesquisarNoGrupo('Automação Teste')
            .botaoAdicionaItem()
        componente
            .escreveDescricao(faker.name.findName())
        grupoTerminais
            .selecionaTipoInstalação('Garagem')
            .remotamenteOperavel()
        componente
            .clicaBotao('OK')
            .validaMensagem(mensagem.criaGrupoTerminaisSucesso)
    })

    it.skip('Excluindo um grupo de terminais', () => {
        grupoTerminais
            .pesquisarNoGrupo('Automação Teste')
            .botaoMais()
        //.botaoExcluiGrupo()
        //     .botaoExcluiAgupador()
        // componente
        //     .validaMensagem(mensagem.removeGrupoTerminaisSucesso)
    })
})