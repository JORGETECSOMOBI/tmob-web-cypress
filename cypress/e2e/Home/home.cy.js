import login from "../../pages/LoginPage"
import home from "../../pages/HomePage"

describe('acessando o site Tmob', () => {
    beforeEach(() => {
        login.go()
        login.signin()
    })

    it('acessando a home page e testando o header', () => {
        home.recentAcessTitle()
        home.hometitle()
        home.todosOsServiçosTitle()
    })

    it('acessando a home page e testando os menus "Tipos de uso" e "Operacional"', () => {
        home.tiposDeUso()
            .operacional()
    })

    it('acessando a home page e testando o redirecionamento para "QR Code"', () => {
        home.tiposDeUso()
        home.qrCode()
    })

    it('acessando a home page e testando o redirecionamento para "Midia"', () => {
        home.tiposDeUso()
        home.midia()
    })

    it('acessando a home page e testando o redirecionamento para "EMV"', () => {
        home.tiposDeUso()
        home.emv()
    })

    it('acessando a home page e testando o redirecionamento para "ABT"', () => {
        home.tiposDeUso()
        home.abt()
    })

    it('acessando a home page e testando o redirecionamento para a página "Dispositivos"', () => {
        home.operacional()
            .dispositivos()
    })

    it('acessando a home page e testando o redirecionamento para a página "Transporte"', () => {
        home.operacional()
            .transporte()
    })

    it('acessando a home page e testando o redirecionamento para a página "Tarifário"', () => {
        home.operacional()
            .tarifario()
    })

    it('acessando a home page e testando o redirecionamento para a página "Usuário"', () => {
        home.operacional()
            .usuario()
    })

    it.only('acessando a home page e testando o redirecionamento para a página "Comercialização"', () => {
        home.operacional()
            .comercializacao()
    })

    it('acessando a home page e testando o redirecionamento para a página "Arrecadação"', () => {
        home.operacional()
            .arrecadacao()
    })

    it('acessando a home page e testando o redirecionamento para a página "garagem"', () => {
        home.operacional()
            .garagem()
    })

    it('acessando a home page e testando o redirecionamento para a página "AVL"', () => {
        home.operacional()
            .avl()
    })

    it('acessando a home page e testando o redirecionamento para a página "Sistema"', () => {
        home.operacional()
            .sistema()
    })

    it('acessando a home page e testando o redirecionamento para a página "SAM"', () => {
        home.operacional()   
            .sam()
    })

    it('acessando a home page e testando o redirecionamento para a página "facial"', () => {
        home.operacional()
            .facial()
    })
})

