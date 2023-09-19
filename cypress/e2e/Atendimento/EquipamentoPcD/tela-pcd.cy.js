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
<<<<<<< HEAD:cypress/e2e/Atendimento/EquipamentoPcD/tela-pcd.cy.js
=======

>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e:cypress/e2e/Atendimento/EquipamentoPcD/testando-todos-itens-tela-pcd.cy.js
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
<<<<<<< HEAD:cypress/e2e/Atendimento/EquipamentoPcD/tela-pcd.cy.js
            .pesquisa('102')
            .clicaBotao('Editar')
=======
            .pesquisaEquipamentoPorId('102')
        componente.clicaBotao('Editar')
>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e:cypress/e2e/Atendimento/EquipamentoPcD/testando-todos-itens-tela-pcd.cy.js
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