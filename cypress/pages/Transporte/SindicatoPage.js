import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'

class SindicatoPage {

    beforeSindicato() {
        login.go()
            .signin()
        home.transporte()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Sindicato')
        return this
    }

    criaSindicato() {
        componente
            .clicaBotao('Novo')
            .escreveNomeId(faker.name.lastName())
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
        return this
    }

    editaSindicato() {
        componente
            .pesquisaNomeId('19')
            .clicaBotao('Editar')
            .limpaNome()
            .escreveNomeId(faker.name.lastName())
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
        return this
    }
}
export default new SindicatoPage