import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../../fixtures/url.json'

class EquipamentoPcdPage{

    novoPcd() {
        componente
        .clicaBotao('Novo')
        .escreveDescricao('novo equipamento')
        .clicaBotao('Ativo')
        .clicaBotao('Salvar')
        .clicaBotao('Sim')
        .validaMensagem('Concluido')
        .clicaBotao('Ver equipamentos PcD')
        .validaURL(url.pcd)    
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
        .validaURL(url.pcd)    
    }
}
export default new EquipamentoPcdPage