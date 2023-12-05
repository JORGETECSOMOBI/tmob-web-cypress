import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import home from '../../../pages/Home/HomePage'
import login from '../../../pages/Login/LoginPage'
import faker from "faker-br"
class OrganizacaoPage {

    beforeOrg() {
        login.go()
            .signin()
        home.usuario()
        usuario.acessandoTelaOrganizaçao()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Organização')
        return this
    }

    criaOrganização() {
        componente
            .clicaBotao('Novo')
        this
            .escreveRazaosocial()
            .escreveNomeIdfantasia()
            .escreveEmail('nova@gmail.com')
            .selecionaTipoOperadora('Empresa')
            .selecionaOperadora('AUTOMAÇÃO')
        componente
            .clicaBotao('Proximo')
        this
            .escreveCNPJ0(faker.br.cnpj())
        componente
            .clicaBotao('Proximo')
        this
            .selecionaTipoDeTelefone0('Celular')
            .selecionaCanais0('SMS')
            .escreveNumeroTelefone0('11999999009')
        componente
            .clicaBotao('Proximo')
        this
            .escreveNumero('23')
            .selecionatipoEndereco('Residencial')
            .escreveCEP('12903000')
            .complemento('loja 4')
        componente
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem('Organização foi criada com sucesso!')
        return this
    }

    TentativaDeCriarOrganizacaoCepInválido() {
        componente
                .clicaBotao('Novo')
            this
                .escreveRazaosocial('nova organizaçao')
                .escreveNomeIdfantasia('nova organizaçao')
                .escreveEmail('nova@gmail.com')
                .selecionaTipoOperadora('Empresa')
                .selecionaOperadora('AUTOMAÇÃO')
            componente
                .clicaBotao('Proximo')
            this
                .escreveCNPJ0('09.443.830/0001-68')
            componente
                .clicaBotao('Proximo')
            this
                .selecionaTipoDeTelefone0('Celular')
                .selecionaCanais0('SMS')
                .escreveNumeroTelefone0('11999999009')
            componente
                .clicaBotao('Proximo')
            this
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
                .clicaBotao('Salvar')
                .clicaBotaoModal('Sim')
                .validaMensagem('Endereço não encontrado')
        return this
    }

    escreveRazaosocial(organizacao) {
        const nome = 'AUTOMATICO'
        const nome2 = faker.name.lastName()
        organizacao = `${nome} ${nome2}`
        cy.get('#name').type(organizacao)
        return this
    }

    escreveNomeIdfantasia(fantasia) {
        const nome = 'AUTOMAÇÃO'
        const nome2 = faker.name.lastName()
        fantasia = `${nome} ${nome2}`
        cy.get('#shortName').type(fantasia)
        return this
    }

    escreveEmail(email) {
        cy.get('#mailAddress').type(email)
        return this
    }

    escreveCNPJ0(cnpj) {
        cy.get('#createManyMandatoryDocument_2147483645_value').type(cnpj)
        return this
    }
    escreveCNPJ(cnpj) {
        cy.get('#createManyMandatoryDocument_0_value').type(cnpj, { force: true })
        return this
    }

    escreveCNPJ1(cnpj) {
        cy.get('#createManyMandatoryDocument_1_value').type(cnpj)
        return this
    }

    escreveCEP(cep) {
        cy.get('#UsrAddresses_createMany_data_0_zipCode').type(cep, { force: true }).wait(3000)
        return this
    }

    escreveNumero(numerocasa) {
        cy.get('#UsrAddresses_createMany_data_0_number').type(numerocasa)
        return this
    }

    escreveNumeroTelefone0(numero) {
        cy.get('#UsrPhones_createMany_data_0_number').type(numero)
        return this
    }

    escreveNumeroTelefone1(numero) {
        cy.get('#UsrPhones_createMany_data_1_type').eq(1).type(numero)
        cy.contains()
        return this
    }

    selecionaTipoOperadora(tipoOperadora) {
        cy.get('.ant-select-selection-overflow').click()
        cy.contains(tipoOperadora).click({ force: true })
        return this
    }

    adicionaNovoContato() {
        cy.get('.ant-btn > :nth-child(2)').eq(0).click({ force: true })
        return this
    }

    selecionaOperadora(operadora) {
        cy.get('#toTransportOperator', { force: true }).type('Automação').click({ force: true })
        return this
    }

    selecionaTipoDeTelefone0(tipo) {
        cy.get('#UsrPhones_createMany_data_0_type').click()
        cy.contains(tipo).click()
        return this
    }

    selecionaTipoDeTelefone1(tipo) {
        cy.get('#UsrPhones_createMany_data_1_type', { force: true }).click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Residencial').eq(0).click({ force: true })
        return this
    }

    selecionaCanais0(canal) {
        cy.get('.ant-select-selection-overflow').click()
        cy.contains(canal).click({ force: true })
        return this
    }

    selecionaCanais1(canal) {
        cy.get('.ant-select-selection-overflow').eq(1).click()
        cy.contains(canal, { force: true }).click({ force: true })
        return this
    }

    selecionatipoEndereco(tipo) {
        cy.get('#UsrAddresses_createMany_data_0_type').click({ force: true })
        cy.contains(tipo).click()
        return this
    }

    complemento(complemento) {
        cy.get('#UsrAddresses_createMany_data_0_complement').type(complemento)
        return this
    }
}
export default new OrganizacaoPage