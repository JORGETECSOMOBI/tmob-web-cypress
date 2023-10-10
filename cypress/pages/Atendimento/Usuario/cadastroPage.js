import faker from 'faker-br'

class cadastroPage {

    preencheDocumento0CPF(cpf) {
        cy.get('#createUser_UsrDocuments_createMany_data_4_value').type(cpf, { force: true })
        return this
    }

    preencheDocumento0CNPJ(cnpj) {
        cy.get('#createUser_UsrDocuments_createMany_data_0_value').type(cnpj, { force: true })
        return this
    }

    preencheDocumento1(documento) {
        cy.get('#createUser_UsrDocuments_createMany_data_1_value').type(documento)
        return this
    }

    preencheContato(contato) {
        cy.get('#createUser_UsrPhones_createMany_data_0_contact').type(contato, { force: true })
        return this
    }

    complemento1(numero) {
        cy.get('#createUser_UsrDocuments_createMany_data_1_complement').type(numero)
        return this
    }

    complementoEndereco(complemento) {
        cy.get('#createUser_UsrAddresses_createMany_data_0_complement').type(complemento, { force: true })
        return this
    }

    dataValidade1() {
        cy.get('#createUser_UsrDocuments_createMany_data_1_expirationDate').click({ force: true })
        cy.get('.ant-picker-today-btn').eq(1).click({ force: true })
        return this
    }

    dataExpedicao1(data) {
        cy.get('#createUser_UsrDocuments_createMany_data_1_expeditionDate').click({ force: true })
        cy.contains(data).click({ force: true })
        return this
    }

    documentoOpcional2(numero) {
        cy.get('#createUser_UsrDocuments_createMany_data_2_value').type(numero)
        return this
    }

    clicaBotaoCadastroAvancado() {
        cy.contains('Cadastro avançado').click({ force: true })
        return this
    }

    escreveDataNascimento(data, dia) {
        cy.get('.ant-picker-input').click({ force: true })
        cy.get('#createUser_birthdate', { force: true }).type(data, { force: true })
        cy.contains(dia, { force: true }).click({ force: true })
        return this
    }

    escreveDataRegistro(data, dia) {
        cy.get('.ant-picker-input').click({ force: true })
        cy.get('#createUser_UsrElderlies_create_0_registration').type(data)
        cy.contains(dia).click({ force: true })
        return this
    }

    selecionaDataRegistro(data) {
        cy.get('.ant-picker-input').click({ force: true })
        cy.contains(data).click({ force: true })
        return this
    }

    selecionaCanais0(canal) {
        cy.get('.ant-select-selection-overflow').eq(1).click({ force: true })
        cy.contains(canal).click({ force: true })
        return this
    }

    selecionaCanais1(canal) {
        cy.get('.ant-select-selection-overflow').eq(0).click({ force: true })
        cy.contains(canal).click({ force: true })
        return this
    }


    selecionaTipoUsuario(tipoUsuario) {
        cy.get('.ant-select-selection-overflow').click({ force: true })
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
        cy.contains(posto, ({ force: true })).click({ force: true })
        return this
    }

    selecionaPostoAtendimentoEspecial(posto) {
        cy.get('#createUser_UsrDisabilities_create_0_UsrServiceStation', { force: true }).click({ force: true })
        cy.contains(posto, ({ force: true })).click({ force: true })
        return this
    }

    selecionaGenero(genero) {
        cy.get('#createUser_gender').click({ force: true })
        cy.contains(genero).click()
        return this
    }

    selecionatipoEndereco(tipo) {
        cy.get('#createUser_UsrAddresses_createMany_data_0_type').click({ force: true })
        cy.contains(tipo, { force: true }).click({ force: true })
        return this
    }

    selecionaEscolaridade() {
        cy.get('#createUser_UsrStudents_createMany_data_0_usrStudentLevelId').click({ force: true })
        cy.contains('Primário').click({ force: true })
        return this
    }

    selecionaNomeInstituicao() {
        cy.get('#createUser_UsrStudents_createMany_data_0_usrOrganizationId').click({ force: true })
        cy.contains('jota teste').click()
        return this
    }

    escreveClasse() {
        const classe = faker.name.lastName()
        cy.get('#createUser_UsrStudents_createMany_data_0_classroom').type(classe)
        return this
    }

    escreveSerie() {
        const serie = ('Primeira')
        cy.get('#createUser_UsrStudents_createMany_data_0_grade').type(serie)
        return this
    }

    escreveRa() {
        const ra = faker.br.cpf()
        cy.get('#createUser_UsrStudents_createMany_data_0_registryDocument').type(ra)
        return this
    }

    escreveQuota() {
        const quota = faker.name.lastName()
        cy.get('#createUser_UsrStudents_createMany_data_0_medQuotaId').type(quota)
        return this
    }

    selecionaPeriodo(periodo) {
        cy.get('#createUser_UsrStudents_createMany_data_0_usrStudentPeriodId').click()
        cy.contains(periodo).click()
        return this
    }

    selecionaTipoEstudante(tipo) {
        cy.get('#createUser_UsrStudents_createMany_data_0_usrStudentTypeId').click()
        cy.contains(tipo).click()
        return this
    }

    selecionaDataInicial(data) {
        cy.get('#createUser_UsrStudents_createMany_data_0_admissionDate').click({ force: true })
        cy.contains(data).click()
        return this
    }

    selecionaDataFinal(data) {
        cy.get('#createUser_UsrStudents_createMany_data_0_resignDate').click({ force: true })
        cy.contains(data, { force: true }).click({ force: true })
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

    preencheNomeCompleto() {
        const nome = 'Automação'
        const sobrenome = faker.name.lastName()
        const nomeCompleto = `${nome} ${sobrenome}`
        cy.get('#createUser_name').type(nomeCompleto, { force: true })
        return this
    }

    limpaNomeCompleto(nome) {
        cy.get('#editUser_name').clear(nome, { force: true })
        return this
    }

    editaNomeCompleto(nome) {
        cy.get('#editUser_name').type(nome, { force: true })
        return this
    }

    selecionaTipoEditar(tipo) {
        cy.get('.ant-select-selection-overflow').click({ force: true })
        cy.contains(tipo, { force: true }).click({ force: true })
        return this
    }

    selecionaOperadora(operadora) {
        cy.get('#createUser_UsrOperators_create_0_toTransportOperatorId').click({ force: true })
        cy.contains(operadora).click({ force: true })
        return this
    }

    selecionaDescricaoCID(descricao) {
        cy.get('#createUser_UsrDisabilities_create_0_UsrIcd_connect').click({ force: true })
        cy.contains(descricao).click({ force: true })
        return this
    }

    selecionaTipoAprovacao(tipo) {
        cy.get('#createUser_UsrDisabilities_create_0_approvalType').click({ force: true })
        cy.contains(tipo).click({ force: true })
        return this
    }


    selecionaPostoAtendimento(posto) {
        cy.get('#createUser_UsrElderlies_create_0_UsrServiceStation_connect').click({ force: true })
        cy.contains(posto, { force: true }).click({ force: true })
        return this
    }

    escreveNomeDoMedico() {
        const nome = faker.name.findName()
        cy.get('#createUser_UsrDisabilities_create_0_doctorName', { force: true }).type(nome, { force: true })
        return this
    }

    escreveCRM() {
        const crm = faker.br.cpf()
        cy.get('#createUser_UsrDisabilities_create_0_doctorRegistration').type(crm)
        return this
    }

    escreveNomeAcompanhante() {
        const nome = faker.name.findName()
        cy.get('#createUser_createAttendants_name', { force: true }).type(nome, { force: true })
        return this
    }

    documentoAcompanhante() {
        const documento = faker.br.cpf()
        cy.get('#createUser_createAttendants_document').type(documento)
        return this
    }

    validadedoLaudo(data) {
        cy.get('#createUser_UsrDisabilities_create_0_validity', { force: true }).click({ force: true })
        cy.contains(data).click({ force: true })
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

    escreveMatriculaOperador() {
        const matricula = faker.br.rg()
        cy.get('#createUser_UsrOperators_create_0_hrid').type(matricula)
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
        cy.get('#createUser_UsrDocuments_createMany_data_2147483646_value').type(cpf, { force: true })
        return this
    }

    preencheDocumento1(documento) {
        cy.get('#createUser_UsrDocuments_createMany_data_105_value').type(documento, { force: true })
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
        cy.get('#createUser_UsrDocuments_createMany_data_2147483647_expeditionDate').click({ force: true })
        cy.contains(data).click({ force: true })
        return this
    }

    matricula(matricula) {
        cy.get('#createUser_UsrOperators_create_0_hrid').type(matricula)
        return this
    }

    dataDeAdmissao(data) {
        cy.get('#createUser_UsrOperators_create_0_admissionDate').click({ force: true })
        cy.contains(data, { force: true }).click({ force: true })
        return this
    }

    dataDeDemissao(data) {
        cy.get('#createUser_UsrOperators_create_0_resignDate', { force: true }).click({ force: true })
        cy.contains(data, { force: true }).click({ force: true })
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
export default new cadastroPage