import postotoAtendimento from "../../../../pages/Atendimento/PostoAtendimentoPage"

describe('Criando e editando Postos de Atendimento', () => {

    beforeEach(() => {
        postotoAtendimento.beforePostosAtendimento()
    })

    it(' Criando e salvando com sucesso a criação de um novo"Posto de atendimento"', () => {
        postotoAtendimento.criaPostodeAtendimento()
    })

    it('Editando e salvando com sucesso a criação de um novo"Posto de atendimento"', () => {
        postotoAtendimento.editaPostodeAtendimento()
    })
})      