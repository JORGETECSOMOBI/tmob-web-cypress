import login from "../../pages/Login/LoginPage"
import home from "../../pages/Home/HomePage"
import componente from "../../pages/ComponentesPadrao/ComponentesPadraoPage"

class CartoesPage {

    beforeCartoes(){
        login.go()
            .signin()
        home.tiposDeUso()
            .emv()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Cartões')
    }
}
export default new CartoesPage