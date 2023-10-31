import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import grupoOperadora from '../../../../pages/Transporte/GrupoOperadoraPage'

describe('Testando Grupo de Operadora', () => {

    beforeEach(() => {
        grupoOperadora
            .beforeGrupoOperadora()
    })

    it('pesquisa por id', () => {
        componente
            .escreveDescricao('22')
            .validaId('22')
    })

    it('pesquisa por nome', () => {
        componente
            .escreveDescricao('Nogueira')
            .validaDescricao('Nogueira')
    })

    it('Filtro Ativo', () => {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()

    })

    it('Filtro Inativo', () => {
        componente
            .selecionaStatus('Inativo')
            .validaStatusInativo()
    })

    it('função visualizar', () => {
        componente
            .escreveDescricao('22')
            .clicaBotao('Visualizar')
            .validatexto('ID #22')
    })

    it('função editar', () => {
        componente
            .escreveDescricao('22')
            .clicaBotao('Editar')
            .validatexto('ID #22')
    })
})

