import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'

class EmissorPage{

    beforeEmissor() {
        login.go()
            .signin()
        home.transporte()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Emissor')
        return this
    }

    editarEmissor() {
        componente
        .pesquisaNomeId('99')
        .clicaBotao('Editar')
        .limpaNome()
        .escreveNomeId(faker.name.lastName())
        .selecionaStatus('Inativo')
        .clicaBotao('Salvar')
        .clicaBotaoModal('Salvar')
        return this
    }
}
export default new EmissorPage