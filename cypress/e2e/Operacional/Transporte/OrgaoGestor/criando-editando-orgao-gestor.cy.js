import gestor from '../../../../pages/Transporte/OrgaoGestorPage'

describe('Testando "Orgão gestor"', () => {

    beforeEach(() => {
        gestor.beforeOrgaoGestor()
    })

    it('Criar um Orgão gestor', () => {
        gestor.criaOrgaoGestor()
    })

    it('Editar um Orgão gestor', () => {
        gestor.ediataOrgaoGestor()
    })
})