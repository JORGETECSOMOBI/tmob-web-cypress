import usuario from '../../../../pages/Atendimento/Usuario/UsuarioHomePage'
import pcd from '../../../../pages/Atendimento/PCD/EquipamentoPcdPage'

describe('Criando e editando novo esquipamento PcD', () => {

    beforeEach(() => {
        usuario.beforePcd()
    })

    it('Criando um novo equipamento PcD ', () => {
        pcd.novoPcd()
    })

    it('Editando equipamento PcD ', () => {
        pcd.editaPcd()
    })
})