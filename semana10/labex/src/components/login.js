import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { FormButton, Header, Login, FooterLogin, FooterLabel, ReturnButton, LabeX } from "./styles"

function LoginPage () {

    const history = useHistory()

    const goBackToHomePage = () =>{
        history.push("/")
    }

    const goToAdminHomePage = () => {
        history.push ("/homeadmin")
    }
    return (
        <div>

        <Header>
            <LabeX>Labe-X</LabeX>
            <ReturnButton onClick={goBackToHomePage}>Voltar para Home</ReturnButton>
        </Header> 

            <Login>
            <h3>Já faz parte da nossa comunidade? Faça seu login abaixo:</h3>

            <label>E-mail:</label>
            <input></input>

            <label>Senha:</label>
            <input></input>

            <FormButton onClick={goToAdminHomePage}>Entrar</FormButton>
            </Login>
            
            <FooterLogin>
            <FooterLabel>Desbrave o universo com a Labe-X</FooterLabel>
        </FooterLogin>
            </div>
    )
}

export default LoginPage