class novoUsuario {

    clicaBotaoCadastroAvancado() {
        cy.contains('Cadastro avançado').click({ force: true })
        return this
    }

    selecionaDataNascimento(data) {
        cy.get('.ant-picker-input').click({ force: true })
        cy.get('.ant-picker-cell-inner').contains(data).click()
        return this
    }

    selecionaDataRegistro(data) {
        cy.get('.ant-picker-input').click({ force: true })
        cy.contains(data).click({ force: true })
        return this
    }

    selecionaCanais0(canal) {
        cy.get('.ant-select-selection-overflow').click({ force: true })
        cy.contains(canal).click({ force: true })
        return this
    }

    selecionaTipoUsuario(tipoUsuario) {
        cy.get('#createUser > div > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(2) > div > div > div > div > div > div > div').click({ force: true })
        cy.contains(tipoUsuario).click()
        cy.get('.ant-col-lg-9').click()
        return this
    }

    selecionaTipoDeTelefone0(tipo) {
        cy.get('#createUser_UsrPhones_createMany_data_0_type').click({ force: true })
        cy.contains(tipo).click({ force: true })
        return this
    }

    selecionaPostoAtendimento(posto) {
        cy.get('#createUser_UsrElderlies_create_0_UsrServiceStation_connect').click()
        cy.contains(posto).click()
    }

    selecionaGenero(genero) {
        cy.get('#createUser_gender').click({ force: true })
        cy.contains(genero).click()
        return this
    }

    selecionatipoEndereco(tipo) {
        cy.get('#createUser_UsrAddresses_createMany_data_0_type').click({ force: true })
        cy.contains(tipo).click()
        return this
    }

    tirarFoto() {
        cy.get('.ant-btn > .ant-row > [style="padding-left: 5px; padding-right: 5px;"]').click({ force: true })
        cy.get('.ant-modal-wrap').click({ force: true })
        return this
    }

    incluirFoto() {
        cy.get('[style=""]').click()
        return this
    }

    excluirFoto() {
        cy.wait(1000)
        cy.get('svg[data-icon="delete"]').click({ force: true })
        return this
    }

    preencheNomeCompleto(nomeCompleto) {
        cy.get('#createUser_name').type(nomeCompleto, { force: true })
        return this
    }

    preencheNomeSocial(nomeSocial) {
        cy.get('#createUser_socialName').type(nomeSocial, { force: true })
        return this
    }

    escreveNumeroTelefone0(numero) {
        cy.get('#createUser_UsrPhones_createMany_data_0_number').type(numero, { force: true })
        return this
    }

    preencheCEP(cep) {
        cy.get('#createUser_UsrAddresses_createMany_data_0_zipCode').type(cep, { force: true })
        return this
    }

    preencheNumero(numero) {
        cy.get('#createUser_UsrAddresses_createMany_data_0_number').type(numero, { force: true })
        return this
    }

    preencheDocumento0CNPJ(cnpj) {
        cy.get('#createUser_UsrDocuments_createMany_data_0_value',).type(cnpj, { force: true })
        return this
    }

    preencheDocumento0CPF(cpf) {
        cy.get('#createUser_UsrDocuments_createMany_data_0_value',).type(cpf, { force: true })
        return this
    }

    preencheDocumento1(documento) {
        cy.get('#createUser_UsrDocuments_createMany_data_1_value',).type(documento, { force: true })
        return this
    }

    documentoOpcional2(numero) {
        cy.get('#createUser_UsrDocuments_createMany_data_2_value').type(numero)
        return this
    }

    emailnovoUsuario(email) {
        cy.get('#createUser_mailAddress').type(email, { force: true })
        return this
    }

    filiacao1(filiacao1) {
        cy.get('#createUser_filiation1').type(filiacao1, { force: true })
        return this
    }

    filiacao2(filiacao2) {
        cy.get('#createUser_filiation2').type(filiacao2, { force: true })
        return this
    }

    complemento1(numero) {
        cy.get('#createUser_UsrDocuments_createMany_data_1_complement').type(numero)
        return this
    }

    dataValidade1() {
        cy.get('#createUser_UsrDocuments_createMany_data_1_expirationDate').click({ force: true })
        cy.get('.ant-picker-today-btn').eq(1).click({ force: true })
        return this
    }

    documentoOpcional2(numero) {
        cy.get('#createUser_UsrDocuments_createMany_data_2_value').type(numero)
        return this
    }

    statusAtivo() {
        cy.get('#createUser_isActive > :nth-child(1) > :nth-child(2)').click()
        return this
    }

    statusInativo0() {
        cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').eq(0).click({ force: true })
        return this
    }

    statusInativo1() {
        cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').eq(1).click({ force: true })
        return this
    }
    
    dataExpedicao1(data) {
        cy.get('#createUser_UsrDocuments_createMany_data_1_expeditionDate').click({ force: true })
        cy.contains(data).click({ force: true })
        return this
    }

    matricula(matricula) {
        cy.get('#createUser_UsrOperators_create_0_hrid').type(matricula)
        return this
    }

    dataDeAdmissao(data) {
        cy.get('#createUser_UsrOperators_create_0_admissionDate').click({ force: true })
        cy.contains(data).click()
        return this
    }

    dataDeDemissao(data) {
        cy.get('#createUser_UsrOperators_create_0_resignDate').contains(data).click()
        return this
    }

    operadora(operadora) {
        cy.get('#createUser_UsrOperators_create_0_toTransportOperatorId').click()
        cy.contains(operadora).click()
        return this
    }

    grupoOperadora(grupoOperadora) {
        cy.get('#createUser_UsrOperators_create_0_toTransportOperatorGroupId').click()
        cy.contains(grupoOperadora).click()
        return this
    }

    grupoOperador(grupoOperador) {
        cy.get('#createUser_UsrOperators_create_0_toOperatorGroupId').click()
        cy.contains(grupoOperador).click()
        return this
    }
}
export default new novoUsuario