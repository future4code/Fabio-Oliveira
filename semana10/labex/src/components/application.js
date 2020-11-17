import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import {Form, FormButton, Header, FooterForm, FooterLabel, LabeX, ReturnButton, TextBox} from "./styles"
import Countries from "./assets/countries"


function ApplicationFormPage () {
    const history = useHistory()

const goToTrips = () =>{
    history.push("/tripsuser")
}

    return (
        <div>
            <Header>
                <LabeX>Labe-X</LabeX>
                <ReturnButton onClick={goToTrips}>Voltar para Viagens</ReturnButton>
            </Header>

            <Form>
            <h3>Formulário de Inscrição</h3>
            
            <label>Nome:</label>
            <input></input>

            <label>Idade:</label>
            <input></input>

            <label>Por que você merece viajar com a Labe-X?</label>
            <TextBox></TextBox>

            <label>Profissão:</label>
            <input></input>

            <label>País:</label>
            <Countries />

            <FormButton>Cadastrar</FormButton>

            </Form>

            <FooterForm>
            <FooterLabel>Desbrave o universo com a Labe-X</FooterLabel>
        </FooterForm>
            
        </div>
    )
}

export default ApplicationFormPage