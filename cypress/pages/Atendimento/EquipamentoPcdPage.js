import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import usuario from './UsuarioPage'


class EquipamentoPcdPage {

    beforePcd() {
        login.go()
            .signin()
        home.usuario()
        usuario.acessandoTelaEquipamentoPcD()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Equipamento PcD')
        return this
    }

    novoPcd() {
        componente
            .clicaBotao('Novo')
            .escreveDescricao('novo equipamento')
            .clicaBotao('Ativo')
            .clicaBotao('Salvar')
            .clicaBotao('Sim')
            .validaMensagem('Concluido')
            .clicaBotao('Ver equipamentos PcD')
        return this
    }

    editaPcd() {
        componente
            .selecionaStatus('Ativo')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao('Equipamento editado')
            .clicaBotao('Inativo')
            .clicaBotao('Salvar')
            .clicaBotao('Sim')
            .clicaBotao('Ver equipamentos PcD')
        return this
    }

    filtroId() {
        componente
            .escreveID('100')
            .validaId('100')
        return this
    }

    filtroStatusAtivo() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()
        return this
    }

    filtroStatusInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusInativo()
        return this
    }

    filtroDescricao() {
        componente
            .escreveDescricao('Equipamento editado')
            .validaDescricao('Equipamento editado')
        return this
    }

    botaoRecarregar() {
        componente
            .clicaBotaoRecarregar()
        return this
    }

    botaoVisualizar() {
        componente
            .pesquisa('102')
            .clicaBotao('Visualizar')
        return this
    }

    botaoEditar() {
        componente
            .pesquisa('102')
            .clicaBotao('Editar')
        return this
    }

    botaoLimparFiltro() {
        componente
            .escreveDescricao('Teste limpar filtro')
            .selecionaStatus('Ativo')
            .clicaBotao('Limpar filtro')
            .validaFunçãolimparFiltro()
        return this
    }
}
export default new EquipamentoPcdPage