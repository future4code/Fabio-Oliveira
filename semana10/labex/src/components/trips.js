import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

function TripsPage () {
    const history = useHistory()

    const goBackToAdminHome = () =>{
        history.push("/homeadmin")
    }
    return (
        <div>
            <p>Trips</p>
            <button onClick={goBackToAdminHome}>Voltar para Home do Adminstrador</button>
        </div>
    )
}

export default TripsPage