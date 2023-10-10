import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import grupoTerminais from '../../../pages/Transporte/GrupoTerminaisPage'
import mensagem from '../../../fixtures/mensagens.json'
import faker from 'faker-br'

describe('Testando Grupo de terminais', () => {

    beforeEach(() => {

        grupoTerminais.beforeGrupoTerminais()
    })

    it('Adicionando um item no agrupador', () => {
        grupoTerminais
            .botaoAdicionaItem()
        componente
            .escreveDescricao(faker.name.findName())
        grupoTerminais
            .selecionaTipoInstalação('Garagem')
            .remotamenteOperavel()
        componente
            .clicaBotao('OK')
            .validaMensagem(mensagem.criaGrupoTerminaisSucesso)
    })

    it('Excluindo um grupo de terminais', () => {
        grupoTerminais
            .botaoExcluiGrupo()
        componente
            .validaMensagem(mensagem.removeGrupoTerminaisSucesso)
    })
})
