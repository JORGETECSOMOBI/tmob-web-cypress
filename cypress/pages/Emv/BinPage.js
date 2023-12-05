import login from "../../../../pages/Login/LoginPage"
import home from "../../../../pages/Home/HomePage"
import cartoes from "../../../../pages/Emv/CartoesPage"
import emvPage from "../../../../pages/Emv/EmvPage"
import componente from "../../pages/ComponentesPadrao/ComponentesPadraoPage"

class CartoesPage {

    beforeBin(){
        login.go()
            .signin()
        home.tiposDeUso()
            .emv()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Bin')           
    }
}
export default new CartoesPage