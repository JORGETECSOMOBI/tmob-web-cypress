import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class ArquivosOperacionaisPage {

    beforeArquivosOperacionais() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Arquivos Operacionais')
            .selecionaIdioma('PT')
    }
}
export default new ArquivosOperacionaisPage