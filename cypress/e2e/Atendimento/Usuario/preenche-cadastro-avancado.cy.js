import login from '../../../pages/Login/LoginPage'
import home from '../../../pages/Home/HomePage'
import novoUsuario from '../../../pages/Atendimento/Usuario/NovoUsuarioPage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'


describe('Preenche cadastro avançado com sucesso', () => {

    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .usuario()
        componente
            .clicaBotao('Novo usuário')
        componente
            .selecionaIdioma('PT')
    })

    it('Criando usuário "Operador" com documentação não obrigatória', () => {
        novoUsuario
            .clicaBotaoCadastroAvancado()
            .selecionaDataNascimento('1')
            .selecionaTipoUsuario('Operador')
            .preencheNomeCompleto('José da Silva Teste')
            .preencheNomeSocial('nome social')
            .selecionaGenero('Feminino')
            .emailnovoUsuario('jose@gmail.com')
            .filiacao1('Maria da Silva')
            .filiacao2('João da Silva')
            .statusInativo0()
            .statusAtivo()
        componente
            .clicaBotao('Proximo')
        novoUsuario
            .preencheDocumento0CPF('948.914.160-76')
            .preencheDocumento1('18.287.762-0')
            .dataExpedicao1('Hoje')
        componente
            .clicaBotao('Proximo')
        novoUsuario
            .dataDeAdmissao('Hoje')
    })

    it('Preenche "Cadastro avançado" com sucesso para "tipo Usuário", "Idoso", documento obrigatório', () => {
        componente
            .clicaBotao('Cadastro avançado')
            .selecionadata('10/12/1958', '10')
        novoUsuario
            .selecionaTipoUsuario('Automação Idoso')
            .tirarFoto()
            .preencheNomeCompleto('João Velho')
            .preencheNomeSocial('Velho')
            .selecionaGenero('Masculino')
            .emailnovoUsuario('velho@gmail.com')
            .filiacao1('mamãe')
            .filiacao2('papai')
        componente
            .clicaBotao('Ativo')
            .clicaBotao('Proximo')
        novoUsuario
            .preencheDocumento0CPF('972.335.130-74')
            .preencheDocumento1('12345678')
            .dataExpedicao1('Hoje')
        componente
            .clicaBotao('Proximo')
            .clicaBotao('Inativo')
        novoUsuario
            .selecionaDataRegistro('Hoje')
            .selecionaPostoAtendimento('Teste Automático')
        componente
            .clicaBotao('Proximo')
        novoUsuario
            .selecionaTipoDeTelefone0('Comercial')
            .selecionaCanais0('SMS')
            .escreveNumeroTelefone0('11111111111')
            .selecionatipoEndereco('Trabalho')
            .preencheNumero('200')
            .preencheCEP('12903443')
    })
})
