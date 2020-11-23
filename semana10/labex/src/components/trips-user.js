import { React, useEffect, useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Header, LabeX, ReturnButton, HeaderLabel, StyledH2Div, FormButton } from "./styles"

function UserTrip() {
    const history = useHistory()

    const goBackToHome = () => {
        history.push("/")
    }

    const goToApplicationFormPage = (id) => {
        history.push(`/application/${id}`)
    }

    const [tripsUser, setTripsUser] = useState([])

    const getTripsUser = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-dumont/trips")

            .then((res) => {
                setTripsUser(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getTripsUser()
    }, [])

    const goToHome = () => {
        history.push("/")
    }

    return (
        <div>
            <Header>
                <LabeX onClick={goToHome}>Labe-X</LabeX>
                <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
                <ReturnButton onClick={goBackToHome}>Voltar para Home</ReturnButton>
            </Header>

            <div>

                <StyledH2Div>
                    <h2>Lista de Viagens</h2>
                </StyledH2Div>

                {tripsUser.length === 0 ? (<p>Só um minutinho...</p>) : (tripsUser.map(trip =>
                    <div>
                        <strong>
                            <p>Nome: {trip.name}</p>
                            <p>Planeta: {trip.planet}</p>
                            <p>Data de viagem: {trip.date}</p>
                            <p>Duração da viagem: {trip.durationInDays} dias</p>
                            <p>Descrição da viagem: {trip.description}</p>
                            <FormButton onClick={() => goToApplicationFormPage(trip.id)}>Inscreva-se!</FormButton>
                        </strong>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserTrip