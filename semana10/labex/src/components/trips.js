import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Header, LabeX, ReturnButton, FooterTrips, FooterLabel, StyledH2Div } from "./styles"
import { useProtectedPage } from "./hooks/useProtectedPage"

function TripsPage () {
    const history = useHistory()

    const goBackToAdminHome = () =>{
        history.push("/homeadmin")
    }
    useProtectedPage();
    return (
        <div>
            <Header>
            <LabeX>Labe-X</LabeX>
            <ReturnButton onClick={goBackToAdminHome}>Voltar para Home do Adminstrador</ReturnButton>
            </Header>

            <div>

                <StyledH2Div>
                <h2>Lista de Viagens</h2>
                </StyledH2Div>
                <ol>
                <strong>
                <li>
                <p>Nome:</p>
                <p>Planeta:</p>
                <p>Data de viagem:</p>
                <p>Duração da viagem:</p>
                </li>
                <li>
                <p>Nome:</p>
                <p>Planeta:</p>
                <p>Data de viagem:</p>
                <p>Duração da viagem:</p>
                </li>
                </strong>
                </ol>
            </div>

            <FooterTrips>
            <FooterLabel>Desbrave o universo com a Labe-X</FooterLabel>
        </FooterTrips>
        </div>
    )
}

export default TripsPage