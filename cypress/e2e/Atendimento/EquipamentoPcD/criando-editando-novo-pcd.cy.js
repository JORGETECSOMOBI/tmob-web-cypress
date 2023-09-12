import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Criando e editando novo esquipamento PcD', () => {

    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .usuario()
        componente
            .validaURL('https://web.test.tmob.com.br/user')
        usuario
            .acessandoTelaEquipamentoPcD()
        componente
            .validaURL('https://web.test.tmob.com.br/user/userDisabilityEquipments')
    })

    it('Criando um novo equipamento PcD ', () => {
        componente
            .selecionaLinguagem('PT')
            .clicaBotao('Novo')
            .escreveDescricao('novo equipamento')
            .clicaBotao('Ativo')
            .clicaBotao('Salvar')
            .clicaBotao('Sim')
            .validaMensagem('Concluido')
            .clicaBotao('Ver equipamentos PcD')
            .validaURL('https://web.test.tmob.com.br/user/userDisabilityEquipments')         
    })

    it('Editando equipamento PcD ', () => {
        componente
            .selecionaLinguagem('PT')
            .selecionaStatus('Ativo')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao('Equipamento editado')
            .clicaBotao('Inativo')
            .clicaBotao('Salvar')
            .clicaBotao('Sim')
            .clicaBotao('Ver equipamentos PcD')
            .validaURL('https://web.test.tmob.com.br/user/userDisabilityEquipments')         
    })
})