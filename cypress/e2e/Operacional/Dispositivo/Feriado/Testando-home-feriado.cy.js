import feriado from '../../../../pages/Dispositivo/FeriadoPage'

describe('Testando home de feriado', () => {

    beforeEach(() => {
        feriado.beforeFeriado()
    })

    it('Pesquisa pelo "ID"', ()=>{
        feriado.pesquisaPorId()
    })

    it('Pesquisa pelo "Nome"', ()=>{
        feriado.pesquisaPorNome()
    })

    it('Pesquisa pelo "Tipo Extra"', ()=>{
        feriado.pesquisaPorTipoExtra()
    })

    it('Pesquisa pelo "Tipo Municipal"', ()=>{
        feriado.pesquisaPorTipoMunicipal()
    })

    it('Pesquisa pelo "Tipo Estadual"', ()=>{
        feriado.pesquisaPorTipoEstadual()
    })

    it('Pesquisa pelo "Tipo Federal"', ()=>{
        feriado.pesquisaPorTipoFederal()
    })

    it('Pesquisa pelo "Status Ativo"', ()=>{
        feriado.pesquisaPorStatusAtivo()
    })

    it('Pesquisa pelo "Status Inativo"', ()=>{
        feriado.pesquisaPorStatusInativo()
    })

    it('Botão "Novo feriado"', ()=>{
        feriado.NovoFeriado()
    })

    it('Botão "Visualizar"', ()=>{
        feriado.visualizar()
    })

    it('Botão "Editar"', ()=>{
        feriado.editar() 
    })

    it('Botão "Limpa filtros"', ()=>{
        feriado.limpaFiltro()
    })   
})
