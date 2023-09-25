import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import organizacao from '../../../pages/Atendimento/Organizacao/OrganizacaoPge'

describe('Testando a tela "Usuário"', () => {

    beforeEach(() => {
        usuario.beforeOrg()
    })

    it.only('Cria nova organização com sucesso', () => {
        componente
            .clicaBotao('Novo')
        organizacao
            .escreveRazaosocial('nova organizaçao')
            .escreveNomefantasia('nova organizaçao')
            .escreveEmail('nova@gmail.com')
            .selecionaTipoOperadora('Empresa')
            .selecionaOperadora('METRO')
        componente
            .clicaBotao('Proximo')
        organizacao
            .escreveCNPJ0('09.443.830/0001-68')
        componente
            .clicaBotao('Proximo')
        organizacao
            .selecionaTipoDeTelefone0('Celular')
            .selecionaCanais0('SMS')
            .escreveNumeroTelefone0('11999999009')
        componente
            .clicaBotao('Proximo')
        organizacao
            .escreveNumero('23')
            .selecionatipoEndereco('Residencial')
            .escreveCEP('12903000')
        cy.wait(1000)
        componente
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
        //.validaMensagem('Endereço não encontrado')
    })

    it('Tentativa de criar nova organização com cep inválido', () => {
        componente
            .clicaBotao('Novo')
        organizacao
            .escreveRazaosocial('nova organizaçao')
            .escreveNomefantasia('nova organizaçao')
            .escreveEmail('nova@gmail.com')
            .selecionaTipoOperadora('Empresa')
            .selecionaOperadora('METRO')
        componente
            .clicaBotao('Proximo')
        organizacao
            .escreveCNPJ0('09.443.830/0001-68')
        componente
            .clicaBotao('Proximo')
        organizacao
            .selecionaTipoDeTelefone0('Celular')
            .selecionaCanais0('SMS')
            .escreveNumeroTelefone0('11999999009')
        componente
            .clicaBotao('Proximo')
        organizacao
            .escreveNumero('23')
            .selecionatipoEndereco('Residencial')
            .escreveCEP('000')
        componente
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem('Campo obrigatório')
            .escreveNumero('23')
            .selecionatipoEndereco('Residencial')
            .escreveCEP('12903')
        componente
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem('Endereço não encontrado')
    })
})