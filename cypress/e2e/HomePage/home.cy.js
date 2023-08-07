import login from "../../pages/Login/LoginPage"
import home from "../../pages/Home/HomePage"

describe('acessando o site Tmob e validando a Home Page', () => {
    beforeEach(() => {
        login.go()
        login.signin()
    })

    it('Cenário: acessando a home page e testando no header acessos recentes', () => {
        home.recentAcessTitle()
    })

    it('Cenário: acessando a home page e validando no header o título "Home"', () => {
        home.hometitle()
    })

    it('Cenário: acessando a home page e testando no header "Todos os serviços" ', () => {
        home.todosOsServiçosTitle()
    })

    it('Cenário: acessando a home page e testando no header idioma "EN" ', () => {
        home.idiomaIngles()
    })

    it('Cenário: acessando a home page e testando no header idioma "PT" ', () => {
        home.idiomaPortugues()
    })

    it('Cenário: acessando a home page e testando os menus "Tipos de uso" e "Operacional"', () => {
        home.tiposDeUso()
            .operacional()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para "QR Code"', () => {
        home.tiposDeUso()
        home.qrCode()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para "Midia"', () => {
        home.tiposDeUso()
        home.midia()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para "EMV"', () => {
        home.tiposDeUso()
        home.emv()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para "ABT"', () => {
        home.tiposDeUso()
        home.abt()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para a página "Dispositivos"', () => {
        home.dispositivos()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para a página "Transporte"', () => {
        home.transporte()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para a página "Tarifário"', () => {
        home.tarifario()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para a página "Usuário"', () => {
        home.usuario()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para a página "Comercialização"', () => {
        home.comercializacao()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para a página "Arrecadação"', () => {
        home.arrecadacao()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para a página "garagem"', () => {
        home.garagem()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para a página "AVL"', () => {
        home.avl()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para a página "Sistema"', () => {
        home.sistema()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para a página "SAM"', () => {
        home.sam()
    })

    it('Cenário: acessando a home page e testando o redirecionamento para a página "facial"', () => {
        home.facial()
    })
})

