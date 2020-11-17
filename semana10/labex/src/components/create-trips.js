import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

function CreateTripsPage () {

    const history = useHistory()

    const goBackToAdminHome = () =>{
        history.push("/homeadmin")
    }
    return (
        <div>
            <p>Create Your Trips</p>
            <button onClick={goBackToAdminHome}>Voltar para Home do Administrador</button>
        </div>
    )
}

export default CreateTripsPage