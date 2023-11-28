import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import cadastro from '../../../fixtures/cadastro.json'
import mensagem from '../../../fixtures/mensagens.json'
import faker from 'faker-br'

class cadastroPage {

    simplificado() {
        componente
            .clicaBotao('Novo usuário')
        this
            .preencheDocumento0CPF(faker.br.cpf())
            .escreveDataNascimento('22/01/1959', '22')
            .preencheNomeCompleto()
            .preencheNomeSocial(cadastro.NomeSocial)
            .selecionaGenero(cadastro.GeneroF)
            .emailnovoUsuario(faker.internet.email())
            .filiacao1(cadastro.filiacao1)
            .filiacao2(cadastro.filiacao2)
            .selecionaTipoDeTelefone0('Comercial')
            .selecionaCanais0('SMS')
            .escreveNumeroTelefone0(cadastro.telefone)
            .selecionatipoEndereco("Trabalho")
            .preencheNumero(cadastro.numero)
            .preencheCEP(cadastro.cep)
        componente
            .clicaBotaoProximoCadastroSimplificado()
            .selecionaEmissor()
            .selecionaTipoMidia()
            .clicaBotaoProximoCadastroSimplificado()
            .clicaBotao('Salvar')
            .validaMensagem(mensagem.mensagemNovoCadastroSucesso)
        return this
    }

    geralIdoso() {
        componente
            .clicaBotao('Novo usuário')
            .clicaBotao('Cadastro avançado')
        this
            .escreveDataNascimento('15/12/1959', '15')
            .selecionaTipoUsuario('AAAAA Automação Idoso')
            .preencheNomeCompleto()
            .preencheNomeSocial(cadastro.nomeSocial)
            .selecionaGenero(cadastro.GeneroM)
            .emailnovoUsuario(cadastro.email)
            .filiacao1(cadastro.filiacao1)
            .filiacao2(cadastro.filiacao2)
        componente
            .selecionaStatusInativo('Inativo')
            .clicaBotao('Proximo')
            return this
    }

    geralEstudante() {
        componente
            .clicaBotao('Novo usuário')
            .clicaBotao('Cadastro avançado')
        this
            .escreveDataNascimento('15/12/1959', '15')
            .selecionaTipoUsuario('AAAA AUTOMAÇÃO ESTUDANTE')
            .preencheNomeCompleto()
            .preencheNomeSocial(cadastro.nomeSocial)
            .selecionaGenero(cadastro.GeneroM)
            .emailnovoUsuario(cadastro.email)
            .filiacao1(cadastro.filiacao1)
            .filiacao2(cadastro.filiacao2)
        componente
            .selecionaStatusInativo('Inativo')
            .clicaBotao('Proximo')
            return this
    }

    geralOperador() {
        componente
            .clicaBotao('Novo usuário')
            .clicaBotao('Cadastro avançado')
        this
            .escreveDataNascimento('15/12/1959', '15')
            .selecionaTipoUsuario('AAAAA AUTOMAÇÃO OPERADOR')
            .preencheNomeCompleto()
            .preencheNomeSocial(cadastro.nomeSocial)
            .selecionaGenero(cadastro.GeneroM)
            .emailnovoUsuario(cadastro.email)
            .filiacao1(cadastro.filiacao1)
            .filiacao2(cadastro.filiacao2)
        componente
            .selecionaStatusInativo('Inativo')
            .clicaBotao('Proximo')
            return this
    }

    geralEspecial() {
        componente
            .clicaBotao('Novo usuário')
            .clicaBotao('Cadastro avançado')
        this
            .escreveDataNascimento('15/12/1959', '15')
            .selecionaTipoUsuario('AAAAA AUTOMAÇÃO ESPECIAL')
            .preencheNomeCompleto()
            .preencheNomeSocial(cadastro.nomeSocial)
            .selecionaGenero(cadastro.GeneroM)
            .emailnovoUsuario(cadastro.email)
            .filiacao1(cadastro.filiacao1)
            .filiacao2(cadastro.filiacao2)
        componente
            .selecionaStatusInativo('Inativo')
            .clicaBotao('Proximo')
            return this
    }

    geralFuncionario() {
        componente
            .clicaBotao('Novo usuário')
            .clicaBotao('Cadastro avançado')
        this
            .escreveDataNascimento('15/12/1959', '15')
            .selecionaTipoUsuario('AAAAA AUTOMAÇÃO FUNCIONÁRIO')
            .preencheNomeCompleto()
            .preencheNomeSocial(cadastro.nomeSocial)
            .selecionaGenero(cadastro.GeneroM)
            .emailnovoUsuario(cadastro.email)
            .filiacao1(cadastro.filiacao1)
            .filiacao2(cadastro.filiacao2)
        componente
            .selecionaStatusInativo('Inativo')
            .clicaBotao('Proximo')
            return this
    }


    documentacao() {
        this
            .preencheDocumento0CPF(faker.br.cpf())
        componente
            .clicaBotao('Proximo')
            return this
    }

    tipoDeUsuarioIdoso() {
        this
            .selecionaDataRegistro('Hoje')
            .selecionaPostoAtendimento()
        componente
            .clicaBotao('Proximo')
            return this
    }

    tipoDeUsuarioFuncionario() {
        this
            .selecionaInstituicao('TESTE WEB')
            .selecionaDataAdmissao()
            .selecionaDataDemissao()
            .escreveCargo()
        componente
            .clicaBotao('Proximo')
            return this
    }

    tipoDeUsuarioEstudante() {
        componente
            .clicaBotao('Adicionar')
        this
            .selecionaEscolaridade()
            .selecionaNomeInstituicao()
            .escreveClasse()
            .escreveQuota()
            .escreveRa()
            .escreveSerie()
            .selecionaPeriodo('Gabriel teste')
            .selecionaTipoEstudante('Estudante')
            .selecionaDataInicial('Hoje')
            .selecionaDataFinal('Hoje')
        componente
            .clicaBotao('Proximo')
            return this
    }

    tipoDeUsuarioOperador() {
        this
            .escreveMatriculaOperador()
            .dataDeAdmissao('20/10/2018', '20')
            .dataDeDemissao('26/08/2023', '26')
            .selecionaOperadora('Moraes')
        componente
            .clicaBotao('Proximo')
            return this
    }

    tipoDeUsuarioEspecial() {
        this
            .selecionaDescricaoCID('A000')
            .selecionaTipoAprovacao('Aprovado')
            .selecionaPostoAtendimentoEspecial('AAAAA')
            .selecionaEquipamentoPcd('Equipamento editado')
            .escreveCRM()
            .escreveNomeDoMedico()
            .validadedoLaudo('Hoje')
            .escreveNomeAcompanhante()
            .tipoDocumentoAcompanhante('RNE')
            .documentoAcompanhante()
        componente
            .clicaBotao('Salvar acompanhante')
            .clicaBotao('Proximo')
            return this
    }

    contato() {
        this
            .selecionaTipoDeTelefone0("Comercial")
            .selecionaCanais1('SMS')
            .escreveNumeroTelefone0('11996553128')
            .selecionatipoEndereco('Trabalho')
            .preencheNumero('1000')
            .preencheCEP("12903000")
            .preencheContato('contato')
            .complementoEndereco('Ap 12B')
            return this
    }

    criaçãoDeCartao() {
        componente
            .clicaBotaoProximoCadastroSimplificado()
            .selecionaEmissor()
            .selecionaTipoMidia()
            .clicaBotaoProximoCadastroSimplificado()
            .clicaBotao('Salvar')
            .validaMensagem(mensagem.mensagemNovoCadastroSucesso)
            return this
    }

    tipoDocumentoAcompanhante(tipo) {
        cy.get('#createUser_createAttendants_usrDocumentTypeId').click({ force: true })
        cy.get('[title]').contains(tipo,{ force: true }).click({ force: true })
        return this
        
    }

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
        cy.contains(tipoUsuario).click({ force: true })
        cy.get('.ant-col-lg-9').eq(0).click({ force: true })
        return this
    }

    selecionaDataAdmissao() {
        const data = 'Hoje'
        cy.get('#createUser_UsrEmployees_createMany_data_0_admissionDate').click({ force: true })
        cy.contains(data).click({ force: true })
        return this
    }

    selecionaDataDemissao() {
        const data = 'Hoje'
        cy.get('#createUser_UsrEmployees_createMany_data_0_resignDate').click({ force: true })
        cy.contains(data).click({ force: true })
        return this
    }


    selecionaInstituicao(instituicao) {
        cy.get('#createUser_UsrEmployees_createMany_data_0_usrOrganizationId').click({ force: true })
        cy.contains(instituicao, { force: true }).click({ force: true })
        return this
    }

    selecionaTipoDeTelefone0(tipo) {
        cy.get('#createUser_UsrPhones_createMany_data_0_type').click({ force: true })
        cy.contains(tipo).click({ force: true })
        return this
    }

    selecionaPostoAtendimento() {
        cy.get('#createUser_UsrElderlies_create_0_UsrServiceStation_connect').click({ force: true })
        cy.get('.ant-select-item-option-content', { force: true }).eq(2).click({ force: true })
        return this
    }

    selecionaPostoAtendimentoEspecial(posto) {
        cy.get('#createUser_UsrDisabilities_create_0_UsrServiceStation', { force: true }).click({ force: true })
        cy.get('.ant-select-item-option-content', { force: true }).contains(posto).click({ force: true })
        return this
    }

    selecionaEquipamentoPcd(equipamento) {
        cy.get('#createUser_UsrDisabilities_create_0_UsrDisabilityEquipment').click({ force: true })
        cy.get('.ant-select-item-option-content', { force: true }).contains(equipamento).click({ force: true })
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

    escreveCargo() {
        const cargo = 'Motorista'
        cy.get('#createUser_UsrEmployees_createMany_data_0_position').type(cargo)
        return this
    }

    escreveClasse() {
        const classe = faker.name.lastName()
        cy.get('#createUser_UsrStudents_createMany_data_0_classroom', { force: true }).type(classe, { force: true })
        return this
    }

    escreveSerie() {
        const serie = ('Primeira')
        cy.get('#createUser_UsrStudents_createMany_data_0_grade', { force: true }).type(serie, { force: true })
        return this
    }

    escreveRa() {
        const ra = faker.br.cpf()
        cy.get('#createUser_UsrStudents_createMany_data_0_registryDocument', { force: true }).type(ra, { force: true })
        return this
    }

    escreveQuota() {
        const quota = faker.name.lastName()
        cy.get('#createUser_UsrStudents_createMany_data_0_medQuotaId', { force: true }).type(quota, { force: true })
        return this
    }

    selecionaPeriodo(periodo) {
        cy.get('#createUser_UsrStudents_createMany_data_0_usrStudentPeriodId', { force: true }).click({ force: true })
        cy.contains(periodo).click()
        return this
    }

    selecionaTipoEstudante(tipo) {
        cy.get('#createUser_UsrStudents_createMany_data_0_usrStudentTypeId', { force: true }).click({ force: true })
        cy.contains(tipo).click()
        return this
    }

    selecionaDataInicial(data) {
        cy.get('#createUser_UsrStudents_createMany_data_0_admissionDate', { force: true }).click({ force: true })
        cy.contains(data).click()
        return this
    }

    selecionaDataFinal(data) {
        cy.get('#createUser_UsrStudents_createMany_data_0_resignDate', { force: true }).click({ force: true })
        cy.contains(data, { force: true }).click({ force: true })
        return this
    }

    tirarFoto() {
        cy.get('.ant-btn > .ant-row > [style="padding-left: 5px; padding-right: 5px;"]', { force: true }).click({ force: true })
        cy.wait(5000)
        cy.get('.ant-modal-wrap').click({ force: true })
        return this
    }

    incluirFoto() {
        cy.get('[style=""]', { force: true }).click({ force: true })
        return this
    }

    excluirFoto() {
        cy.wait(1000)
        cy.get('svg[data-icon="delete"]', { force: true }).click({ force: true })
        return this
    }

    preencheNomeCompleto() {
        const nome = 'Automação'
        const sobrenome = faker.name.lastName()
        const nomeCompleto = `${nome} ${sobrenome}`
        cy.get('#createUser_name', { force: true }).type(nomeCompleto, { force: true })
        return this
    }

    limpaNomeCompleto(nome) {
        cy.get('#editUser_name', { force: true }).clear(nome, { force: true })
        return this
    }

    editaNomeCompleto() {
        const nome = 'Geraldo'
        const sobrenome = faker.name.lastName()
        const nomeCompleto = `${nome} ${sobrenome}`
        cy.get('#editUser_name', { force: true }).type(nomeCompleto, { force: true })
        return this
    }

    selecionaTipoEditar(tipo) {
        cy.get('.ant-select-selection-overflow').click({ force: true })
        cy.contains(tipo, { force: true }).click({ force: true })
        return this
    }

    selecionaOperadora() {
        cy.get('#createUser_UsrOperators_create_0_toTransportOperatorId').click({ force: true })
        cy.get('.ant-select-item-option-content').eq(3).click({ force: true })
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

    escreveNomeDoMedico() {
        const nome = faker.name.findName()
        cy.get('#createUser_UsrDisabilities_create_0_doctorName', { force: true }).type(nome, { force: true })
        return this
    }

    escreveCRM() {
        const crm = faker.br.cpf()
        cy.get('#createUser_UsrDisabilities_create_0_doctorRegistration').type(crm, { force: true })
        return this
    }

    escreveNomeAcompanhante() {
        const nome = faker.name.findName()
        cy.get('#createUser_createAttendants_name', { force: true }).type(nome, { force: true })
        return this
    }

    documentoAcompanhante() {
        const documento = faker.br.cpf()
        cy.get('#createUser_createAttendants_document', { force: true }).type(documento, { force: true })
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
        cy.get('#createUser_UsrPhones_createMany_data_0_number', { force: true }).type(numero, { force: true })
        return this
    }

    escreveMatriculaOperador() {
        const matricula = faker.br.rg()
        cy.get('#createUser_UsrOperators_create_0_hrid', { force: true }).type(matricula, { force: true })
        return this
    }

    preencheCEP(cep) {
        cy.get('#createUser_UsrAddresses_createMany_data_0_zipCode', { force: true }).type(cep, { force: true })
        return this
    }

    preencheNumero(numero) {
        cy.get('#createUser_UsrAddresses_createMany_data_0_number', { force: true }).type(numero, { force: true })
        return this
    }

    preencheDocumento0CNPJ(cnpj) {
        cy.get('#createUser_UsrDocuments_createMany_data_0_value', { force: true }).type(cnpj, { force: true })
        return this
    }

    preencheDocumento0CPF(cpf) {
        cy.get('#createUser_UsrDocuments_createMany_data_2147483646_value', { force: true }).type(cpf, { force: true })
        return this
    }

    preencheDocumento1(documento) {
        cy.get('#createUser_UsrDocuments_createMany_data_105_value', { force: true }).type(documento, { force: true })
        return this
    }

    documentoOpcional2(numero) {
        cy.get('#createUser_UsrDocuments_createMany_data_2_value', { force: true }).type(numero)
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

    dataDeAdmissao(data, dia) {
        cy.get('#createUser_UsrOperators_create_0_admissionDate', { force: true }).type(data, { force: true })
        cy.get('.ant-picker-body').contains(dia).click({ force: true })
        return this
    }

    dataDeDemissao(data, dia) {
        cy.get('#createUser_UsrOperators_create_0_resignDate', { force: true }).type(data, { force: true })
        cy.get('.ant-picker-body').contains(dia).click({ force: true })
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

    cadastroIdoso() {
        this
            .geralIdoso()
            .documentacao()
            .tipoDeUsuarioIdoso()
            .contato()
            .criaçãoDeCartao()
        return this
    }

    cadastroFuncionario() {
        this
            .geralFuncionario()
            .documentacao()
            .tipoDeUsuarioFuncionario()
            .contato()
            .criaçãoDeCartao()
        return this
    }

    cadastroEstudante() {
        this
            .geralEstudante()
            .documentacao()
            .tipoDeUsuarioEstudante()
            .contato()
            .criaçãoDeCartao()
        return this
    }

    cadastroEspecial() {
        this
            .geralEspecial()
            .documentacao()
            .tipoDeUsuarioEspecial()
            .contato()
            .criaçãoDeCartao()
        return this
    }

    cadastroOperador() {
        this
            .geralOperador()
            .documentacao()
            .tipoDeUsuarioOperador()
            .contato()
            .criaçãoDeCartao()
        return this
    }
}
export default new cadastroPage