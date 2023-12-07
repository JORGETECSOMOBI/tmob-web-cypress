import pcd from '../../../../pages/Atendimento/EquipamentoPcdPage'

describe('Criando e editando novo esquipamento PcD', () => {

    beforeEach(() => {
        pcd.beforePcd()
    })

    it('Criando um novo equipamento PcD ', () => {
        pcd.novoPcd()
    })

    it('Editando equipamento PcD ', () => {
        pcd.editaPcd()
    })
})