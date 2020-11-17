import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import {Header} from "./styles"


function ApplicationFormPage () {
    const history = useHistory()

const goToHome = () =>{
    history.push("/")
}

    return (
        <div>
            <Header>
                <h2>Labe-X</h2>
                <button onClick={goToHome}>Voltar para a Home</button>
            </Header>
            <p>Formulário de Inscrição</p>
        </div>
    )
}

export default ApplicationFormPage