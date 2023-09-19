import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Testando a tela de equipamento PcD ', () => {

    beforeEach(() => {
        login
            .go()
        login
            .signin()
        home
            .usuario()
        usuario
            .acessandoTelaEquipamentoPcD()
        componente
            .validaURL('https://web.test.tmob.com.br/user/userDisabilityEquipments')
            .selecionaLinguagem('PT')

    })

    it('Testando filtro por ID', () => {
        componente
            .escreveID('100')
            .validaId('100')
    })

    it('Testando pesquisa por filtro "Inativo"', () => {
        componente
            .selecionaStatus('Inativo')
            .validaStatusInativo()
    })

    it('Testando pesquisa por filtro "Ativo"', () => {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()
    })

    it('Testando pesquisa por filtro "descrição"', () => {
        componente
            .escreveDescricao('Equipamento editado')
            .validaDescricao('Equipamento editado')
    })

    it('Testando botão recarregar', () => {
        componente
            .clicaBotaoRecarregar()
    })

    it('Testa botão visualizar', () => {
        componente
            .pesquisa('102')
            .clicaBotao('Visualizar')
            .validaURL('https://web.test.tmob.com.br/user/userDisabilityEquipment/102/')
    })

    it('Testando botão "Editar"', () => {
        componente
            .pesquisa('102')
            .clicaBotao('Editar')
            .validaURL('https://web.test.tmob.com.br/user/userDisabilityEquipment/102/edit')
    })

    it('testa botão "Limpar filtro"', () => {
        componente
            .escreveDescricao('Teste limpar filtro')
            .selecionaStatus('Ativo')
            .clicaBotao('Limpar filtro')
            .validaFunçãolimparFiltro()
    })
})