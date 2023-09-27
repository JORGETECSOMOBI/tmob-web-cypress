import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import grupoLinha from '../../../pages/Transporte/GrupoLinhaPage'
import faker from 'faker-br'

describe('Testando Grupo de linha', () => {

    beforeEach(() => {
        grupoLinha.beforeGrupoLinha()
    })

    it('Editar um grupo de linha', () => {
        componente
            .escreveDescricao('99')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.name.lastName())
            .selecionaStatus('Inativo')
        grupoLinha
            .escreveLinhaNomeId0('115')
            .escreveLinhaNomeId01('40')
            .selecionaTodasLinhas0()
            .excluiLinhas()

        // .clicaBotao('Salvar')
        // .clicaBotaoModal('Salvar')
    })
})