import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import equipamentoPcD from "../../../pages/Atendimento/EquipamentoPCD/EquipamentoPcdPage"
import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import novoEquipamentoPcD from '../../../pages/Atendimento/equipamentoPcD/NovoEquipamentoPcdPage'

describe('Criando um novo esquipamento PcD', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
        usuario.acessandoTelaEquipamentoPcD()
    })

    it('Cenário: criando um novo equipamento PcD ativo', () => {
        equipamentoPcD.acessaPaginaCriacaoNovoPcd()
                      .validaRedirecionamentoPaginaNovoPcD()
        novoEquipamentoPcD.descricaoNovoEquipamentoPcd('Muleta teste novo equipamento')
                          .salvaEdiçãoNovoEquipamentoPcd()
                          .confirmaCadastroDeNovoEquipamentoPcd()
                          .validaMensagemDeSucessoCadastroNovoEquipamentoPcd()
    })

})