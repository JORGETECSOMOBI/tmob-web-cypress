import limite from '../../../../pages/midia/LimiteDeUso'

describe('Testando todos os elementos em Home limites de uso', () => {

    beforeEach(() => {
        limite.beforeLimiteUso()
    })

    it('pesquisando por Id', () => {
        limite.pesquisaPorId('126')
    })

    it('Pesquisando pela descrição do limite de uso', () => {
        limite.pesquisaPorDescricao('Geraldo')
    })

    it('Testando filtro por status Ativo', () => {
        limite.pesquisaPorStatus('Ativo')
    })

    it('Testando botão visualizar', () => {
        limite.visualizar('126', 'ID #126')
    })

    it('Testando filtro botão editar', () => {
        limite.editar('Mensagem Importante!Você não pode editar esse limite de uso completamente')
    })

    it('Testando filtro botão novo', () => {
        limite.novo()
    })
})