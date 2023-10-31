import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import linha from '../../../../pages/Transporte/GrupoLinhaPage'
import operadora from '../../../../pages/Transporte/OperadoraPage'
import mensagem from '../../../../fixtures/mensagens.json'
import faker from 'faker-br'

describe('Testando Grupo de Operadora', () => {

    beforeEach(() => {
        operadora
            .beforeOperadora()
    })

    it('Criando uma nova operadora', () => {
        componente
            .clicaBotao('Novo')
            .escreveNomeId(faker.name.lastName())
        operadora
            .selecionaConsorcio('teste')
            .selecionaGrupoOperadora('Grupo de Operadora')
            .selecionaSindicato('Autopass Sindicato')
        componente
            .clicaBotao('Proximo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.cadastroOperadoraSucesso)
    })

    it('Editando uma operadora', () => {
        componente
            .escreveNomeId('146')
            .clicaBotao('Editar')
            .limpaNome()
            .escreveNomeId(faker.name.firstName())
        operadora
            .selecionaConsorcio('teste 123reasde')
            .selecionaGrupoOperadora('Grupo de Operadora')
            .selecionaSindicato('Autopass Sindicato')
        componente
            .clicaBotao('Proximo')
            .clicaBotao('+ Integrar Sistema')
        linha
            .selecionaSistema('TOP-Mercury')
        componente
            .clicaBotao('Salvar')
    })
})