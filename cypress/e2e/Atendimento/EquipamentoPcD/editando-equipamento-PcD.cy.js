import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import equipamentoPcD from "../../../pages/Atendimento/EquipamentoPCD/EquipamentoPcdPage"
import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import editar from '../../../pages/Atendimento/EquipamentoPCD/EditandoEquipamentoPcdPage'

describe('editando um novo esquipamento PcD', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
        usuario.acessandoTelaEquipamentoPcD()
    })

    it('Mudando o status de um equipamento "ativo" para "inativo"', () => {
        equipamentoPcD
            .filtroStatus()
            .selecionaFiltroAtivo()
            .validaBuscaSomenteStatusAtivo()
            .iconeEditar()
        editar
            .botaoInativo()
            .botaoSalvar()
            .botaoConfirmarmodificaçoes()
            .validaMensagemSucessoEdicao('Equipamento PcD foi editado com sucesso!')
            .clicaBotaoVerEquipamentoPcD()
    })

    it('Mudando o status de um equipamento "Inativo" para "Ativo"', () => {
        equipamentoPcD
            .filtroStatus()
            .selecionaFiltroInativo()
            .validaBuscaSomenteStatusInativo()
            .iconeEditar()
        editar
            .botaoAtivo()
            .botaoSalvar()
            .botaoConfirmarmodificaçoes()
            .validaMensagemSucessoEdicao('Equipamento PcD foi editado com sucesso!')
            .clicaBotaoVerEquipamentoPcD()
    })
})