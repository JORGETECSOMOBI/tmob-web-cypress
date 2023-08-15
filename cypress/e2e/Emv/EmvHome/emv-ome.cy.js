import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import emv from "../../../pages/Emv/EmvPage"

describe('Acessando EMV e validando o acesso a todos os itens do menu', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.emv()
    })

    it('Cenário: Validando o acesso a tela "Cartões"', () => {
        emv.cartoes()
    })

    it('Cenário: Validando o acesso a tela "Par"', () => {
        emv.par()
    })

    it('Cenário: validando o acesso a tela "Bin"', () => {
        emv.bin()
    })

    it('Cenário: validando o acesso a tela "Motivos de hotlist"', () => {
        emv.motivosHotlist()
    })

    it('Cenário: validando o acesso a tela "Hotlist"', () => {
        emv.hotlist()
    })

    it('Cenário: validando o acesso a tela "Hotlist par"', () => {
        emv.hotlistPar()
    })

    it('Cenário: validando o acesso a tela "Retentativa"', () => {
        emv.retentativa()
    })

    it('Cenário: validando o acesso a "Usos"', () => {
        emv.usos()
    })

    it('Cenário: validando o acesso a "produtos"', () => {
        emv.produtos()
    })

    it('Cenário: validando o acesso a "Resumo de EMV"', () => {
        emv.resumoEmv()
    })

    it('Cenário: validando o acesso a "Arquivos de midia"', () => {
        emv.arquivosMidia()
    })

    it('Cenário: validando o acesso a "Arquivos operacionais"', () => {
        emv.arquivosOperacionais()
    })

})