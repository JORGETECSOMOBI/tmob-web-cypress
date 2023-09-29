import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import grupoLinha from '../../../pages/Transporte/GrupoLinhaPage'

describe('Testando todas funcionalidades da home Grupo de linha', () => {

    beforeEach(() => {
        grupoLinha.beforeGrupoLinha()
    })

    it('Testando filtro por id', () => {
        componente
            .escreveDescricao('313')
            .validaId('313')
    })

    it('Testando filtro por status ativo', () => {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()
    })

    it('Testando filtro por status inativo', () => {
        componente
            .selecionaStatus('Inativo')
            .validaStatusInativo()
    })

    it('Testando função visualizar', () => {
        componente
            .escreveDescricao('313')
            .clicaBotao('Visualizar')
            .validatexto('ID #313')
    })

    it('Testando função editar', () => {
        componente
            .escreveDescricao('313')
            .clicaBotao('Editar')
            .validatexto('ID #313')
    })

    it('Testando função limpar filtros', () => {
        componente
            .escreveDescricao('313')
            .selecionaStatus('Inativo')
            .clicaBotao('Limpar filtro')
            .validaFunçãolimparFiltro()
    })
})