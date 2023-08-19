import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import equipamentoPcD from "../../../pages/Usuario/EquipamentoPcdPage"
import usuario from '../../../pages/Usuario/UsuarioHomePage'
import editar from '../../../pages/Usuario/EditandoEquipamentoPcdPage'

describe('Criando um novo esquipamento PcD', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
    })

    it('Cenáro: mudando o status de um equipamento "ativo" para "inativo"', () => {
        usuario.acessandoTelaEquipamentoPcD()
        equipamentoPcD.filtroStatus()
                      .selecionaFiltroAtivo()
                      .validaBuscaSomenteStatusAtivo()
                      .iconeEditar()
        editar.botaoInativo()
              .botaoSalvar()
              .botaoConfirmarmodificaçoes()
              .validaMensagemSucessoEdicao('Equipamento PcD foi editado com sucesso!')
              .clicaBotaoVerEquipamentoPcD()
           
    })

    it('Cenáro: mudando o status de um equipamento "Inativo" para "Ativo"', () => {
        usuario.acessandoTelaEquipamentoPcD()
        equipamentoPcD.filtroStatus()
                      .selecionaFiltroInativo()
                      .validaBuscaSomenteStatusInativo()
                      .iconeEditar()
        editar.botaoAtivo()
              .botaoSalvar()
              .botaoConfirmarmodificaçoes()
              .validaMensagemSucessoEdicao('Equipamento PcD foi editado com sucesso!')
              .clicaBotaoVerEquipamentoPcD()          
    })
})