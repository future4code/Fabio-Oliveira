import {React, useState} from "react"
import axios from "axios"
import { useHistory, useParams } from "react-router-dom"
import { Header, LabeX, ReturnButton, HeaderLabel,  StyledPositiveSpan, StyledH2Div, StyledNegativeSpan } from "./styles"
import { useProtectedPage } from "./hooks/useProtectedPage"


function ApprovalPage() {
    const history = useHistory()

    const goBackToAdminHome = () => {
        history.push("/homeadmin")
    }

    const { id } = useParams()

    const token = localStorage.getItem('token')

    const [trip, setTrip] = useState()
    const [newCandidates, setNewCandidates] = useState([])

    const getCandidates = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-dummont/trip/${id}`, {

                headers: {
                    auth: token
                }
            })
            .then((res) => {
                setTrip(res.data.trip.name)
                setNewCandidates(res.data.trip.candidates)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const acception = (candidatesId) => {
        const body = {
            approve: true
        }

        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-dumont/trips/${id}/candidates/${candidatesId}/decide`, body, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                alert("Viajante apto para viajar com a Labe-X!")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const denial = (candidatesId) => {
        const body = {
            approve: false
        }
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-dumont/trips/${id}/candidates/${candidatesId}/decide`, body, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                alert("Viajante inapto de viajar com a Labe-X!")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useProtectedPage();
    return (
        <div>

            <Header>
                <LabeX>Labe-X</LabeX>
                <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
                <ReturnButton onClick={goBackToAdminHome}>Voltar para Home do Adminstrador</ReturnButton>
            </Header>

            <StyledH2Div>
                <h2>Lista de Candidatos</h2>
            </StyledH2Div>
                <h3>{trip}</h3>
            <div>
                {newCandidates.length === 0 ? (<p>Lista vazia.</p>) : (newCandidates.map((candidate) => {
                    return (
                        <ol>

                            <li>
                                <p>Nome do Candidato: {candidate.name}</p>
                                <p>Idade:{candidate.age}</p>
                                <p>Profissão:{candidate.profession}</p>
                                <p>Texto de inscrição:{candidate.applicationText}</p>
                                <p>País:{candidate.country}</p>
                            </li>
                            <StyledPositiveSpan onClick={acception}>Aceitar</StyledPositiveSpan> <StyledNegativeSpan onClick={denial}>Rejeitar</StyledNegativeSpan>

                        </ol>

                    )
                }))}

            </div>
        </div>


    )
}

export default ApprovalPage