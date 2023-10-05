import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import grupoTerminais from '../../../pages/Transporte/transportePage'
import mensagem from '../../../fixtures/mensagens.json'
import faker from 'faker-br'

describe('Testando Grupo de Operadora', () => {

    beforeEach(() => {
        
            grupoTerminais.beforeGrupoTerminais()
    })

    it('Criando um novo grupo de terminais', () => {
        componente
            .clicaBotao('+ Novo grupo')
            .escreveDescricao(faker.name.lastName())
            .clicaBotao('OK')
            .validaMensagem(mensagem.criaGrupoTerminaisSucesso)
    })
})