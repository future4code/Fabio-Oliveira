import {React, useEffect} from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { FormButton, Header, Login, HeaderLabel, ReturnButton, LabeX } from "./styles"
import { useInput } from "./hooks/useInput"

function LoginPage () {

    const [email, handleEmail] = useInput()
    const [password, handlePassword] = useInput()
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('token');

        if (token) {
            history.push ("/homeadmin")
        }
    })

    const goBackToHomePage = () =>{
        history.push("/")
    }

    const login = () => {
        const body = {
            email: email,
            password: password

        }

        axios
        .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-dumont/login", body
        )
        .then((res)=>{
            localStorage.setItem('token', res.data.token);
            history.push("/homeadmin")

        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const goToHome = () => {
        history.push("/")
    }
    return (
        <div>

        <Header>
            <LabeX onClick={goToHome}>Labe-X</LabeX>
            <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
            <ReturnButton onClick={goBackToHomePage}>Voltar para Home</ReturnButton>
        </Header> 

            <Login>
            <h3>Já faz parte da nossa comunidade? Faça seu login abaixo:</h3>

            <label>E-mail:</label>
            <input value={email} onChange={handleEmail} type='email'></input>

            <label>Senha:</label>
            <input type='password' value={password} onChange={handlePassword}></input>

            <FormButton onClick={login}>Entrar</FormButton>
            </Login>
            
            </div>
    )
}

export default LoginPage