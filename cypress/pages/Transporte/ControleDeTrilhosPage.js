import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'

class ControleDeTrilhosPage {

    beforeControleDeTrilhos() {
        login.go()
            .signin()
        home.transporte()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Controle de trilhos')
    }
}
export default new ControleDeTrilhosPage