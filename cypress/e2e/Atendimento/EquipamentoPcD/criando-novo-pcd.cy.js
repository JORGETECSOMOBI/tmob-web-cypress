import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import equipamentoPcD from "../../../pages/Atendimento/EquipamentoPCD/EquipamentoPcdPage"
import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import novoEquipamentoPcD from '../../../pages/Atendimento/equipamentoPcD/NovoEquipamentoPcdPage'
import clica from '../../../pages/ComponentesPadrao/botoesPage'

describe('Criando um novo esquipamento PcD', () => {

    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .usuario()
        usuario
            .acessandoTelaEquipamentoPcD()
    })

    it('Criando um novo equipamento PcD ativo', () => {
        clica.
            clicaBotao('Novo')
        equipamentoPcD
            .validaRedirecionamentoPaginaNovoPcD()
        novoEquipamentoPcD
            .descricaoNovoEquipamentoPcd('Muleta teste novo equipamento')
            .salvaEdiçãoNovoEquipamentoPcd()
            .confirmaCadastroDeNovoEquipamentoPcd()
            .validaMensagemDeSucessoCadastroNovoEquipamentoPcd()
    })

})