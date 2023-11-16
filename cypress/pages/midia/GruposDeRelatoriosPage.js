import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class GruposDeRelatoriosPage {
    beforeGruposDeRelatorios() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Grupos de Relatório')
        return this
    }

    pesquisaPorDescricao() {
        componente
            .escreveDescricao('GRUPO RELATORIO')
            .validaDescriçãoTitle('GRUPO RELATORIO ')
    }
}
export default new GruposDeRelatoriosPage