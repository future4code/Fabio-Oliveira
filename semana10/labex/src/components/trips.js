import React, { useState, useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Header, LabeX, ReturnButton,  HeaderLabel, StyledH2Div, FormButton } from "./styles"
import { useProtectedPage } from "./hooks/useProtectedPage"

function TripsPage () {
    const history = useHistory()

    const goBackToAdminHome = () =>{
        history.push("/homeadmin")
    }

    const goToApproval = (tripId) => {
        history.push(`/approval/${tripId}`)
    }

    const [trips, setTrips] = useState([])

    const getTrips = () =>{
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-dumont/trips")

        .then((res)=>{
            setTrips(res.data.trips)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getTrips()
    }, [])

    const goToHome = () => {
        history.push("/")
    }

    useProtectedPage();
    return (
        <div>
            <Header>
            <LabeX onClick={goToHome}>Labe-X</LabeX>
            <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
            <ReturnButton onClick={goBackToAdminHome}>Voltar para Home do Adminstrador</ReturnButton>
            </Header>

            <div>

                <StyledH2Div>
                <h2>Lista de Viagens</h2>
                </StyledH2Div>

                {trips.length === 0 ? (<p>Nenhuma viagem cadastrada</p>) : (trips.map(trip => 
                <div>
                <strong>
                
                <p>Nome: {trip.name}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração da viagem: {trip.durationInDays} dias</p>
                <p>Data da viagem: {trip.date}</p>
                <p>Descrição: {trip.description}</p>
                <FormButton onClick={() => goToApproval(trip.id)}>Ver mais</FormButton>
                <br></br>
                </strong>
                
                </div>))}
            </div>
        </div>
    )
}

export default TripsPage