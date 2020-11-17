import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Header, LabeX, ReturnButton, FooterLabel, FooterCreate, CreateTrips, TextBox } from "./styles"

function CreateTripsPage () {

    const history = useHistory()

    const goBackToAdminHome = () =>{
        history.push("/homeadmin")
    }
    return (

        <div>
        <Header>
            <LabeX>Labe-X</LabeX>
            <ReturnButton onClick={goBackToAdminHome}>Voltar para Home do Administrador</ReturnButton>
        </Header>
        

        <CreateTrips>

        <h2>Cadastrar uma nova viagem</h2>
        <label>Nome:</label>
        <input />
        <label>Planeta:</label>
        <input />
        <label>Data da viagem:</label>
        <input />
        <label>Duração:</label>
        <input />
        <label>Descrição da viagem:</label>
        <TextBox />

        </CreateTrips>

        <FooterCreate>
            <FooterLabel>Desbrave o universo com a Labe-X</FooterLabel>
        </FooterCreate>
        </div>
    )
}

export default CreateTripsPage