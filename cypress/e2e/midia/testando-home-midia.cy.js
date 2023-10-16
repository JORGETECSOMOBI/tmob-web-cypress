import midia from '../../pages/midia/MidiaHome'

describe('Testando "Midia', () => {

    beforeEach(() => {
        midia.beforeMidiaHome()
    })

    it('testando filtro por id', () => { 
        midia.pesquisarMidiaId('1709')
    })

    it('testando filtro por nome', () => { 
        midia.pesquisarMidiaNome('MARIA BALBINA NASCIMENTO DOS SANTOS') 
    })  
    
    it('testando filtro por Status "Processado"', () => { 
        midia.pesquisaMidiaPorStatus('Processado')
        midia.validaStatusMidiaAusente('Inativo, Hotlist, Pendente') 
    })

    it('testando filtro por Status "Inativo"', () => { 
        midia.pesquisaMidiaPorStatus('Inativo')
        midia.validaStatusMidiaAusente('Processado, Hotlist, Pendente') 
    })

    it('testando filtro por Status "Pendente"', () => { 
        midia.pesquisaMidiaPorStatus('Pendente')
        midia.validaStatusMidiaAusente('Inativo, Hotlist, Processado') 
    })

    it('testando filtro por Status "Hotlist"', () => { 
        midia.pesquisaMidiaPorStatus('Hotlist')
        midia.validaStatusMidiaAusente('Inativo, Processado, Pendente') 
    })

    it('testando filtro por tipo de cartão', () => {
        midia.pesquisaPorTipoDeCartao('VTComum')
    })
})