import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import equipamentoPcD from "../../../pages/Atendimento/EquipamentoPCD/EquipamentoPcdPage"
import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'

describe('Testando a tela de equipamento PcD ', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
    })

    it(' Validando o acesso à pagina equipamento PcD', () => {
        usuario
            .acessandoTelaEquipamentoPcD()
        equipamentoPcD
            .validaPaginaEquipamentoPcd()
    })

    it(' Validando a pesquisa por ID do PcD', () => {
        usuario
            .acessandoTelaEquipamentoPcD()
        equipamentoPcD
            .pesquisaEquipamentoPorId()
            .validaItemPesquisaPorId()
    })

    it(' Testando o icone "visualizar"', () => {
        usuario
            .acessandoTelaEquipamentoPcD()
        equipamentoPcD
            .pesquisaEquipamentoPorId()
            .iconeVisualizar()
            .validaPaginaDetalhes()
    })

    it(' Testando o ícone de "Editar"', () => {
        usuario
            .acessandoTelaEquipamentoPcD()
        equipamentoPcD
            .pesquisaEquipamentoPorId()
            .iconeEditar()
            .validaPaginaEditar()
    })

    it(' Testando pesquisa por status "Ativo"', () => {
        usuario
            .acessandoTelaEquipamentoPcD()
        equipamentoPcD
            .filtroStatus()
            .selecionaFiltroAtivo()
            .validaBuscaSomenteStatusAtivo()
    })

    it(' Testando pesquisa por status "Inativo"', () => {
        usuario
            .acessandoTelaEquipamentoPcD()
        equipamentoPcD
            .filtroStatus()
            .selecionaFiltroInativo()
            .validaBuscaSomenteStatusInativo()
    })

    it(' Testando funcionalidade "Limpar filtro"', () => {
        usuario.
            acessandoTelaEquipamentoPcD()
        equipamentoPcD
            .pesquisaEquipamentoPorId()
            .BotaoLimparFiltro()
            .validaFunçãolimparFiltro()
    })

    it(' Testando funcionalidade recarregar a página', () => {
        const tempo = '5m'
        usuario
            .acessandoTelaEquipamentoPcD()
        equipamentoPcD
            .pesquisaEquipamentoPorId()
            .recarregaPagina()
            .configuraTimeRecarregar(tempo)
            .validaTimeRecargaConfigurado(tempo)
    })

    it(' Testando e Validando o redirecionamento para a página de criação de novo PcD', () => {
        usuario
            .acessandoTelaEquipamentoPcD()
        equipamentoPcD
            .pesquisaEquipamentoPorId()
            .acessaPaginaCriacaoNovoPcd()
            .validaRedirecionamentoPaginaNovoPcD()
    })
})