import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import equipamentoPcD from "../../../pages/Usuario/EquipamentoPcdPage"
import usuario from '../../../pages/Usuario/UsuarioHomePage'

describe('Acessando a tela de equipamento PcD e etestando todos os itens', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
    })

    it('Cenário: validando o acesso à pagina equipamento PcD', () => {
        usuario.acessandoTelaEquipamentoPcD()
        equipamentoPcD.validaPaginaEquipamentoPcd()
    })

    it('Cenário: validando a pesquiza por ID do PcD', () => {
        usuario.acessandoTelaEquipamentoPcD()
        equipamentoPcD.pesquisaEquipamentoPorId()
                      .validaItemPesquisaPorId()
    })

    it('Cenário: testando o icone "visualizar"', () => {
        usuario.acessandoTelaEquipamentoPcD()
        equipamentoPcD.pesquisaEquipamentoPorId()
                      .iconeVisualizar()
                      .validaPaginaDetalhes()
    })

    it('Cenário: testando o ícone de "Editar"', () => {
        usuario.acessandoTelaEquipamentoPcD()
        equipamentoPcD.pesquisaEquipamentoPorId()
                      .iconeEditar() 
                      .validaPaginaEditar()
    })
    
    it('Cenário: testando pesquiza por status "Ativo"', () => {
        usuario.acessandoTelaEquipamentoPcD()
        equipamentoPcD.filtroStatus()
                      .selecionaFiltroAtivo()
                      .validaBuscaSomenteStatusAtivo()
    })

    it('Cenário: testando pesquiza por status "Inativo"', () => {
        usuario.acessandoTelaEquipamentoPcD()    
        equipamentoPcD.filtroStatus()
                      .selecionaFiltroInativo()
                      .validaBuscaSomenteStatusInativo()
    })

    it('Cenário: testando funcionalidade "Limpar filtro"', () => {
        usuario.acessandoTelaEquipamentoPcD() 
        equipamentoPcD.pesquisaEquipamentoPorId()
                      .BotaoLimparFiltro()
                      .validaFunçãolimparFiltro()
    })
})