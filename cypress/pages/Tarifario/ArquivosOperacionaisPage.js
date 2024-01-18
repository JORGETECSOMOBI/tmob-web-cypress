import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class ArquivosOperacionaisPage {

    beforeArquivosOperacionais() {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .tarifario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Arquivos Operacionais')
        return this
    }
}
export default new ArquivosOperacionaisPage