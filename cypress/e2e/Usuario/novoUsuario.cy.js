import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import novoUsuario from '../../pages/Usuario/NovoUsuario'

describe('Acessando a página de criação de novo ususário e testando todas as funcionalidades', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
    })

    it("Cenário: tirando uma foto ", () => {
        novoUsuario.botaoNovoUsuario()
                   .tirarFoto()
    })

    it('Cenario: clicar na opção "Usar esta foto" e incluir a foto', () => {
        novoUsuario.botaoNovoUsuario()
                   .tirarFoto()
                   .incluirFoto()
    })

    it('Cenario: clicar na opção "Usar esta foto" e excluir a foto', () => {
        novoUsuario.botaoNovoUsuario()
                   .tirarFoto()
                   .incluirFoto()
                   .excluirFoto()
    })

    it('Cenário: Preencher o campo "Nome completo', () => {
        novoUsuario.botaoNovoUsuario()
                   .preencheNomeCompleto()
    })

    it('Cenário: Preencher o campo "Nome social', () => {
        novoUsuario.botaoNovoUsuario()
                   .preencheNomeSocial()
    })

    it('Cenário: seleciona o "genêro masculino" do usuário', () => {
        novoUsuario.botaoNovoUsuario()
                   .selecionaGeneroMasculino()
    })

    it.only('Cenário: seleciona o "genêro feminino" do usuário', () => {
        novoUsuario.botaoNovoUsuario()
                   .selecionaGeneroFeminino()
    })

    it('Cenário: seleciona o "genêro outro" do usuário', () => {
        novoUsuario.botaoNovoUsuario()
                   .selecionaGeneroOutro()
    })
})