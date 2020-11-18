import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Header, LabeX, ReturnButton, HeaderLabel, CreateTrips, TextBox } from "./styles"
import { useProtectedPage } from "./hooks/useProtectedPage"

function CreateTripsPage () {

    const history = useHistory()

    const goBackToAdminHome = () =>{
        history.push("/homeadmin")
    }

    // const createTrip = () =>{

    //     const token = localStorage.getItem('token')


    //     axios
    //     .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-dumont/trips"), {
    //         headers: {token}
    //     }
    //     .then((res)=>{
    //         console.log(res)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    // }



    useProtectedPage();
    return (

        <div>
        <Header>
            <LabeX>Labe-X</LabeX>
            <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
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

        </div>
    )
}

export default CreateTripsPage