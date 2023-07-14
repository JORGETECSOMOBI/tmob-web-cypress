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
        home.operacional()
    })

    it('acessando a home page e testando o redirecionamento para a página "Dispositivos"', () => {
        home.operacional()
        cy.wait(4000)
        home.dispositivos()
    })

    it('acessando a home page e testando o redirecionamento para a página "Transporte"', () => {
        home.operacional()
        cy.wait(7000)
        home.transporte()
    })
})

