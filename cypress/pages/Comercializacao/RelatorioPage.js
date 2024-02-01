import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class RelatoriosPage {

    beforeRelatorios() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Relatórios')
            .selecionaIdioma('PT')
        return this
    }
}
export default new RelatoriosPage