import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

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

        <div>
            <button onClick={goBackToHomePage}>Voltar</button>
        </div> 

            <button onClick={goToAdminHomePage}>Entrar</button>

            </div>
    )
}

export default LoginPage