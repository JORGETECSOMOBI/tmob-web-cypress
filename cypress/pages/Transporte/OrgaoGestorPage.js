import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'


class OrgaoGestorPage {

    beforeOrgaoGestor() {
        login.go()
            .signin()
        home.transporte()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Órgão gestor')
        return this
    }

    criaOrgaoGestor() {
        componente
            .clicaBotao('Novo')
            .escreveNomeId(faker.name.lastName())
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
        return this
    }

    ediataOrgaoGestor() {
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
export default new OrgaoGestorPage