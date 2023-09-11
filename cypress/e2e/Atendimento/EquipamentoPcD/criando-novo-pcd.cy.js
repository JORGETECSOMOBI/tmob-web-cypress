import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import equipamentoPcD from "../../../pages/Atendimento/EquipamentoPCD/EquipamentoPcdPage"
import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import novoEquipamentoPcD from '../../../pages/Atendimento/EquipamentoPCD/NovoEquipamentoPcdPage'
import clica from '../../../pages/ComponentesPadrao/botoesPage'
import seleciona from '../../../pages/ComponentesPadrao/selectpage'

describe('Criando um novo esquipamento PcD', () => {

    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .usuario()
            .validaURL('https://web.test.tmob.com.br/user')
        usuario
            .acessandoTelaEquipamentoPcD()
        home
            .validaURL('https://web.test.tmob.com.br/user/userDisabilityEquipments')

    })

    it('Criando um novo equipamento PcD ativo', () => {
        seleciona.
            selectLinguagem('PT')
        clica.
            clicaBotao('Novo')
        novoEquipamentoPcD
            .descricaoNovoEquipamentoPcd('Muleta teste novo equipamento')
            .salvaEdiçãoNovoEquipamentoPcd()
            .confirmaCadastroDeNovoEquipamentoPcd()
            .validaMensagemDeSucessoCadastroNovoEquipamentoPcd()
    })
})