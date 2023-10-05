import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Edita usuário', () => {
        componente
            .clicaBotaoHomeEditar()
    })

    it('Visualizar usuário', () => {
        componente
            .clicaBotaoHomeVisualizar()
    })

    it('Filtro inativo', () => {
        componente
            .selecionaStatus('Inativo')
            .clicaBotaoHomepesquisar()
            .validaStatusInativo()
    })

    it('Filtro ativo', () => {
        componente
            .selecionaStatus('Ativo')
            .clicaBotaoHomepesquisar()
            .validaStatusAtivo()
    })

    it('Filtro por nome', () => {
        componente
            .selecionaStatus('Ativo')
            .escreveNome('João')
            .clicaBotaoHomepesquisar()    
    })

    it('Limpar filtro por nome', () => {
        componente
            .selecionaStatus('Ativo')
            .escreveNome('João')
            .clicaBotao('Limpar filtro') 
            .validaFunçãolimparFiltroNome()      
    })
})