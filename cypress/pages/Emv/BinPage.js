import login from "../../pages/Login/LoginPage"
import home from "../../pages/Home/HomePage"
import componente from "../../pages/ComponentesPadrao/ComponentesPadraoPage"
import faker from 'faker-br'



class BinPage {

    beforeBin() {
        login.go()
            .signin()
        home.tiposDeUso()
            .emv()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('BIN')
        return this
    }

    criandoBin() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAAA AUTOMAÇÃO BIN')
            .selecionaStatus('Ativo')
        this.escreveBin(faker.random.number())
        componente
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('BIN foi cadastrado com sucesso')
        return this
    }

    editandoBin() {
        componente
            .escreveDescricao('AAAAA AUTOMAÇÃO BIN')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAAA AUTOMAÇÃO EDITADO')
            .selecionaStatus('Inativo')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('Concluido')
        return this
    }

    pesquisaPorNumeroBin() {
        componente
            .escreveDescricao('90173')
            .validaDescricaoDataRowKey('90173')
        return this
    }

    pesquisaPorNomeBin() {
        componente
            .escreveDescricao('beline26')
            .validaDescricaoDataRowKey('beline26')
        return this
    }

    pesquisaPorStatusAtivo() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAusente('Inativo')
        return this
    }

    pesquisaPorStatusInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusAusente('Ativo')
        return this
    }

    botaoEditar() {
        componente
            .clicaBotaoEditar()
            .validatexto('Editar')
        return this
    }

    botaoVisualizar() {
        componente
            .clicaBotaoVisualizar()
            .validatexto('Editar')
        return this
    }



    escreveBin(bin) {
        cy.get('#bin').type(bin)
        return this
    }
}
export default new BinPage