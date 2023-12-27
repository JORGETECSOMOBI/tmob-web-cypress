import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class MensagemDisplayPage {

    beforeArquivosOperacionais() {
        login.go()
        login.signin()
        home.dispositivos()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Arquivos operacionais')
    }
}
export default new MensagemDisplayPage