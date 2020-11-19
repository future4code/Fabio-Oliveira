import React, { useState } from "react"
import axios from "axios"
import { useHistory, useParams } from "react-router-dom"
import {Form, FormButton, Header, HeaderLabel, LabeX, ReturnButton, TextBox} from "./styles"
import Countries from "./assets/countries"
import {useForm} from "../components/hooks/useForm"




function ApplicationFormPage () {

    
    const { form, onChange } = useForm({name: "", age:"", applicationText:"", profession:"", country: ""})

    const onChangeInput = (event) =>{
        const {value, name} = event.target;
        onChange(value, name)
    }

    const history = useHistory()

    const {id} = useParams();

    const onSubmitForm = (event) => {
        event.preventDefault();
        userApplication();
    }
    

    const userApplication = () => {
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-dumont/trips/${id}/apply`, form)

        .then((res)=>{
            alert(res.data.message)
            console.log(form)
        })
        .catch((err)=>{
            alert(err)
            console.log(err.message)
        })
        
    }

const goToTrips = () =>{
    history.push("/tripsuser")
}

    return (
        <div>
            <Header>
                <LabeX>Labe-X</LabeX>
                <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
                <ReturnButton onClick={goToTrips}>Voltar para Viagens</ReturnButton>
            </Header>

            
            <Form onSubmit={onSubmitForm}>
            <h3>Formulário de Inscrição</h3>
            
            <label>Nome:</label>
            <input
            required
            name="name"
            value={form.name}
            type="text"
            pattern="[A-Za-z ]{3,}"
            onChange={onChangeInput}
            ></input>

            <label>Idade:</label>
            <input
            required
            name="age"
            value={form.age}
            type="number"
            min="18"
            onChange={onChangeInput}
            ></input>

            <label>Por que você merece viajar com a Labe-X?</label>
            <TextBox
            required
            name="applicationText"
            value={form.applicationText}
            type="text"
            pattern="[A-Za-z ]{30,}"
            onChange={onChangeInput}
            ></TextBox>

            <label>Profissão:</label>
            <input
            required
            name="profession"
            value={form.profession}
            type="text"
            pattern="[A-Za-z ]{10,}"
            onChange={onChangeInput}
            ></input>

            <label>País:</label>
            <Countries onChangeInput={onChangeInput} country={form.country} />

            <FormButton type="submit">Cadastrar</FormButton>
            </Form>
            
            
        </div>
    )
}

export default ApplicationFormPage