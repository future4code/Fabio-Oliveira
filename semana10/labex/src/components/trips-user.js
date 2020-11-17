import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Header, LabeX, ReturnButton, FooterTrips, FooterLabel, StyledH2Div, FormButton } from "./styles"

function UserTrip () {
    const history = useHistory()

    const goBackToHome = () =>{
        history.push("/")
    }

    const goToApplicationFormPage = () => {
        history.push("/application")
    }

    return (
        <div>
            <Header>
            <LabeX>Labe-X</LabeX>
            <ReturnButton onClick={goBackToHome}>Voltar para Home</ReturnButton>
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
                <FormButton onClick={goToApplicationFormPage}>Inscreva-se!</FormButton>
                <li>
                <p>Nome:</p>
                <p>Planeta:</p>
                <p>Data de viagem:</p>
                <p>Duração da viagem:</p>
                </li>
                <FormButton onClick={goToApplicationFormPage}>Inscreva-se!</FormButton>
                </strong>
                </ol>
            </div>

            <FooterTrips>
            <FooterLabel>Desbrave o universo com a Labe-X</FooterLabel>
        </FooterTrips>
        </div>
    )
}

export default UserTrip