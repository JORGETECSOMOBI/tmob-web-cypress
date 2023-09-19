import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import componente from "../../../pages/ComponentesPadrao/ComponentesPadraoPage"
import icd from "../../../pages/Atendimento/ICD/IcdPage"

describe('Testando a tela "Usuário"', () => {

    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .usuario()
        usuario
            .acessandoTelaPostosDeAtendimento()
            .acessandoTelaICD()
        componente
            .selecionaLinguagem('PT')
    })

    it('Criando um novo item "ICD"', () => {
        componente
            .clicaBotao('Novo')
            .escreveNome('novo ICD')
            .escreveDescricao('Novo ICD')
        icd
            .escreveCodigo('1000')
            .validade('28')
            .confirmaAcompanhante('Não')
            .beneficioAprovado('Não')
        componente
            .escreveComentario('Blá, Blá, Blá, Blá, Blá, Blá, Blá, Blá, ')
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
        icd
            .clicaBotaoModal('Sim')
        componente
            .validaMensagem('ICD cadastrado com sucesso')
            .clicaBotao('Ver ICD')
            .validaURL('https://web.test.tmob.com.br/user/usericds')
    })

    it.only('Editando um item "ICD"', () => {

        componente
            .escreveNome('novo ICD')
            .clicaBotao('Editar')
        icd
            .clicaEmNome()
        componente
            .limpaNome()
        icd
            .clicaEmDescricao()
        componente
            .limpaDescricao()
            .limpaCodigo()
            .escreveComentario('Blá, blá')
            .escreveDescricao('ICD editado')
        icd
            .escreveCodigo('01')
        componente
            .escreveNome('ICD editado')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem('ICD editado com sucesso')
    })
})