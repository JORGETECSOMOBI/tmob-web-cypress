import cadastrar from '../../../pages/Atendimento/Usuario/cadastroPage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import cadastro from '../../../fixtures/cadastro.json'
import mensagem from '../../../fixtures/mensagens.json'
import texto from '../../../fixtures/textos.json'
import faker from 'faker-br'

class FormulariosPage {

    simplificado() {
        componente
            .clicaBotao('Novo usuário')
        cadastrar
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
            .clicaBotaoProximo()
            .clicaBotao('Salvar')
            .validaMensagem(mensagem.mensagemNovoCadastroSucesso)
            .validatexto(texto.textoCadastroCartão)
        return this
    }

    geralIdoso() {
        componente
            .clicaBotao('Novo usuário')
            .clicaBotao('Cadastro avançado')
        cadastrar
            .escreveDataNascimento('15/12/1959', '15')
            .selecionaTipoUsuario('AAA Automação')
            .preencheNomeCompleto()
            .preencheNomeSocial(cadastro.nomeSocial)
            .selecionaGenero(cadastro.GeneroM)
            .emailnovoUsuario(cadastro.email)
            .filiacao1(cadastro.filiacao1)
            .filiacao2(cadastro.filiacao2)
        componente
            .clicaBotao('Proximo')
    }

    geralEstudante() {
        componente
            .clicaBotao('Novo usuário')
            .clicaBotao('Cadastro avançado')
        cadastrar
            .escreveDataNascimento('15/12/1959', '15')
            .selecionaTipoUsuario('AAAA AUTOMAÇÃO ESTUDANTE')
            .preencheNomeCompleto()
            .preencheNomeSocial(cadastro.nomeSocial)
            .selecionaGenero(cadastro.GeneroM)
            .emailnovoUsuario(cadastro.email)
            .filiacao1(cadastro.filiacao1)
            .filiacao2(cadastro.filiacao2)
        componente
            .clicaBotao('Proximo')
    }

    geralOperador() {
        componente
            .clicaBotao('Novo usuário')
            .clicaBotao('Cadastro avançado')
        cadastrar
            .escreveDataNascimento('15/12/1959', '15')
            .selecionaTipoUsuario('AAAA Operador')
            .preencheNomeCompleto()
            .preencheNomeSocial(cadastro.nomeSocial)
            .selecionaGenero(cadastro.GeneroM)
            .emailnovoUsuario(cadastro.email)
            .filiacao1(cadastro.filiacao1)
            .filiacao2(cadastro.filiacao2)
        componente
            .clicaBotao('Proximo')
    }

    geralEspecial() {
        componente
            .clicaBotao('Novo usuário')
            .clicaBotao('Cadastro avançado')
        cadastrar
            .escreveDataNascimento('15/12/1959', '15')
            .selecionaTipoUsuario('AAAAA ATOMAÇÃO ESPECIAL')
            .preencheNomeCompleto()
            .preencheNomeSocial(cadastro.nomeSocial)
            .selecionaGenero(cadastro.GeneroM)
            .emailnovoUsuario(cadastro.email)
            .filiacao1(cadastro.filiacao1)
            .filiacao2(cadastro.filiacao2)
        componente
            .clicaBotao('Proximo')
    }

    geralFuncionario() {
        componente
            .clicaBotao('Novo usuário')
            .clicaBotao('Cadastro avançado')
        cadastrar
            .escreveDataNascimento('15/12/1959', '15')
            .selecionaTipoUsuario('AAAAA AUTOMAÇÃO FUNCIONÁRIO')
            .preencheNomeCompleto()
            .preencheNomeSocial(cadastro.nomeSocial)
            .selecionaGenero(cadastro.GeneroM)
            .emailnovoUsuario(cadastro.email)
            .filiacao1(cadastro.filiacao1)
            .filiacao2(cadastro.filiacao2)
        componente
            .clicaBotao('Proximo')
    }


    documentacao() {
        cadastrar
            .preencheDocumento0CPF(faker.br.cpf())
            .preencheDocumento1(faker.br.rg())
        componente
            .clicaBotao('Proximo')
    }

    tipoDeUsuarioIdoso() {
        cadastrar
            .selecionaDataRegistro('Hoje')
            .selecionaPostoAtendimento()
        componente
            .clicaBotao('Proximo')
    }

    tipoDeUsuarioFuncionario() {
        cadastrar
            .selecionaInstituicao('TESTE WEB')
            .selecionaDataAdmissao()
            .selecionaDataDemissao()
            .escreveCargo()
        componente
            .clicaBotao('Proximo')
    }

    tipoDeUsuarioEstudante() {
        componente
            .clicaBotao('Adicionar')
        cadastrar
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
    }

    tipoDeUsuarioOperador() {
        cadastrar
            .escreveMatriculaOperador()
            .dataDeAdmissao('3')
            .dataDeDemissao('26')
            .selecionaOperadora('Moraes')
        componente
            .clicaBotao('Proximo')
    }

    tipoDeUsuarioEspecial() {
        cadastrar
            .selecionaDescricaoCID('A000')
            .selecionaTipoAprovacao('Aprovado')
            .selecionaPostoAtendimentoEspecial()
            .escreveCRM()
            .escreveNomeDoMedico()
            .validadedoLaudo('Hoje')
            .escreveNomeAcompanhante()
            .documentoAcompanhante()
        componente
            .clicaBotao('Salvar acompanhante')
            .clicaBotao('Proximo')
    }

    contato() {
        cadastrar
            .selecionaTipoDeTelefone0("Comercial")
            .selecionaCanais1('SMS')
            .escreveNumeroTelefone0('11996553128')
            .selecionatipoEndereco('Trabalho')
            .preencheNumero('1000')
            .preencheCEP("12903000")
            .preencheContato('contato')
            .complementoEndereco('Ap 12B')
        componente
            .clicaBotao('Salvar')
            .validatexto(texto.textoCadastroCartão)
    }
}
export default new FormulariosPage()
