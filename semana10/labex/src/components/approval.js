import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

function ApprovalPage () {
    const history = useHistory()

    const goBackToAdminHome = () =>{
        history.push("/homeadmin")
    }
    return (
        <div>
            <button onClick={goBackToAdminHome}>Voltar para Home do Adminstrador</button>
            <p>Sim</p>
            <p>Não</p>
        </div>
    )
}

export default ApprovalPage