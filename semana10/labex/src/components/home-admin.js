import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

function AdminHomePage () {

    const history = useHistory()

    const goToCreateTrips = () => {
        history.push("/create")
    }

    const goToTrips = () =>{
        history.push("/trips")
    }

    const goToApproval = () =>{
        history.push("/approval")
    }

    const goToHome = () =>{
        history.push("/")
    }

    return (
        <div>
            <div>
                <button onClick={goToHome}>Voltar Para Home</button>
            </div>
            <button onClick={goToCreateTrips}>Cadastrar Novas Viagens</button>
            <button onClick={goToTrips}>Exibir suas viagens cadastradas</button>
            <button onClick={goToApproval}>Listar, aprovar ou rejeitar inscrições</button>
        </div>
    )
}

export default AdminHomePage