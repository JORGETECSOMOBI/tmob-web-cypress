import login from "../../pages/LoginPage"
import home from "../../pages/HomePage"

describe('acessando o site Tmob', () => {
    beforeEach(() => {
        login.go()
        login.signin()
    })

    it('acessando a home page e testando no header acessos recentes', () => {
        home.recentAcessTitle()
    })

    it('acessando a home page e validando no header o título "Home"', () => {
        home.hometitle()
    })

    it('acessando a home page e testando no header "Todos os serviços" ', () => {
        home.todosOsServiçosTitle()
    })

    it('acessando a home page e testando no header idioma "EN" ', () => {
        home.idiomaIngles()
    })

    it('acessando a home page e testando no header idioma "PT" ', () => {
        home.idiomaPortugues()
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
        home.dispositivos()
    })

    it('acessando a home page e testando o redirecionamento para a página "Transporte"', () => {
        home.transporte()
    })

    it('acessando a home page e testando o redirecionamento para a página "Tarifário"', () => {
        home.tarifario()
    })
    
    it('acessando a home page e testando o redirecionamento para a página "Usuário"', () => {
        home.usuario()
    })

    it('acessando a home page e testando o redirecionamento para a página "Comercialização"', () => {
        home.comercializacao()
    })

    it('acessando a home page e testando o redirecionamento para a página "Arrecadação"', () => {
        home.arrecadacao()
    })

    it('acessando a home page e testando o redirecionamento para a página "garagem"', () => {
        home.garagem()
    })

    it('acessando a home page e testando o redirecionamento para a página "AVL"', () => {
        home.avl()
    })

    it('acessando a home page e testando o redirecionamento para a página "Sistema"', () => {
        home.sistema()
    })

    it('acessando a home page e testando o redirecionamento para a página "SAM"', () => {
        home.sam()
    })

    it('acessando a home page e testando o redirecionamento para a página "facial"', () => {
        home.facial()
    })
})

