import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import gestor from '../../../pages/Transporte/transportePage'
import faker from 'faker-br'

describe('Testando "Orgão gestor"', () => {

    beforeEach(() => {
        gestor.beforeOrgaoGestor()
    })

    it('Criar um Orgão gestor', () => {
        componente
            .clicaBotao('Novo')
            .escreveNome(faker.name.lastName())
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
    })

    it('Editar um Orgão gestor', () => {
        componente
            .pesquisaNomeId('19')
            .clicaBotao('Editar')
            .limpaNome()
            .escreveNome(faker.name.lastName())
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
    })
})