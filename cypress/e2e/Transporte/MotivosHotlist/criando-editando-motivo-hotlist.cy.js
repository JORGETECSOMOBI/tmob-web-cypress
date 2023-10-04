import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import hotlist from '../../../pages/Transporte/transportePage'
import mensagem from '../../../fixtures/mensagens.json'
import faker from 'faker-br'

describe('Criando e editando motivos de hotlist', () => {

    beforeEach(() => {
        hotlist
            .beforeMotivosHotlist()
    })

    it('Criar um novo motivo de hotlist', () => {
        componente
            .clicaBotao('Novo')
            .escreveDescricao(faker.address.city())
            .selecionaAcao('Bloquear')
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.cadastraMotivoHotlist)
    })

    it('Editar um motivo de hotlist', () => {
        componente
            .escreveDescricao('19')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.address.city())
            .selecionaAcao('Bloquear')
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.editaMotivoHotlist)
    })
})