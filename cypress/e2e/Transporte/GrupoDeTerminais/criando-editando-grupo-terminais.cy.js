import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import grupoTerminais from '../../../pages/Transporte/GrupoTerminaisPage'
import mensagem from '../../../fixtures/mensagens.json'
import faker from 'faker-br'

describe('Testando Grupo de terminais', () => {

    beforeEach(() => {

        grupoTerminais.beforeGrupoTerminais()
    })

    it('Criando um novo grupo de terminais', () => {
        componente
            .clicaBotao('+ Novo grupo')
            .escreveDescricao(faker.name.findName())
            .clicaBotao('OK')
            .validaMensagem(mensagem.criaGrupoTerminaisSucesso)
    })

    it('Editando grupo de terminais "Geral"', () => {
        grupoTerminais
            .botaoEditaGrupo()
        componente
            .limpaDescricao()
            .escreveDescricao('juca Blablabla')
        grupoTerminais
            .selecionaTipoInstalação('Garagem')
            .selecionaCalendarioOperacional('Teste Augusto calendario')
        componente
            .clicaBotao('OK')
            .validaMensagem(mensagem.editaGrupoTerminaisSucesso)
    })

    it('Editando grupo de terminais "Regras de serviço"', () => {
        grupoTerminais
            .botaoEditaGrupo()
            .stepRegrassDeProduto()
            .restringir()
            .permitir()
        componente
            .clicaBotao('Adicionar restrição')
        grupoTerminais
            .tipoRestricao('QrCode')
            .subTipoRestricao('QRCODE ATM')
        componente
            .clicaBotao('OK')
            .validaMensagem(mensagem.editaGrupoTerminaisSucesso)
    })

    it('Editando grupo de terminais "Restrição de função"', () => {
        grupoTerminais
            .botaoEditaGrupo()
            .restricaoFuncao()
            .adicionaRestricao()
            .selecionaFuncao('Selecao de linha')
        componente
            .clicaBotao('OK')
            .validaMensagem(mensagem.editaGrupoTerminaisSucesso)
    })
})