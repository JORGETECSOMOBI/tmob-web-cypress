import login from '../../../pages/Login/LoginPage'
import home from '../../../pages/Home/HomePage'
import novoUsuarioGeral from '../../../pages/Usuario/NovoUsuarioGeralPage'

describe('Acessando a página de criação de novo ususário e testando todas as funcionalidades', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
    })

    it('Cenário: Seleciona data de criação do usuário', () =>{
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .selecionaDataCriacaoUsuario()
    })

    it('Cenário: Seleciona tipo do usuário', () =>{
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .selecionaTipoUsuario
    })

    it("Cenário: tirando uma foto ", () => {
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .tirarFoto()
    })

    it('Cenario: clicar na opção "Usar esta foto" e incluir a foto', () => {
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .tirarFoto()
                        .incluirFoto()
    })

    it('Cenario: clicar na opção "Usar esta foto" e excluir a foto', () => {
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .tirarFoto()
                        .incluirFoto()
                        .excluirFoto()
    })

    it('Cenário: Preencher o campo "Nome completo', () => {
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .preencheNomeCompleto()
    })

    it('Cenário: Preencher o campo "Nome social', () => {
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .preencheNomeSocial()
    })

    it('Cenário: seleciona o "genêro masculino" do usuário', () => {
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .selecionaGeneroMasculino()
    })

    it('Cenário: seleciona o "genêro feminino" do usuário', () => {
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .selecionaGeneroFeminino()
    })

    it('Cenário: seleciona o "genêro outro" do usuário', () => {
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .selecionaGeneroOutro()
    })

    it('Cenário: edita o email do novo usuário', () => {
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .emailnovoUsuarioGeral()
    })

    it('Cenário: edita o nome da filiação 1', () =>{
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .filiacao1()
    })

    it('Cenário: edita o nome da filiação 2', () =>{
        novoUsuarioGeral.botaonovoUsuarioGeral()
                   .filiacao2()
    })

    it('Cenário: atribui ao usuário o status "Ativo', () =>{
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .statusAtivo()
    })
    
    it('Cenário: atribui ao usuário o status "Inativo', () =>{
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .statusInativo()
    })

    it('Cenário: tentativa de clicar no botão de "Próximo" sem preencher os campos obrigatórios', () =>{
        novoUsuarioGeral.botaonovoUsuarioGeral()
                        .botaoProximoErroCamposObrigatorios()
    })

})