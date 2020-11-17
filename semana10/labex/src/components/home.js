import React from "react"
import { useHistory } from "react-router-dom"
import {Header, Main, SubscribeButton} from "./styles"

function HomePage () {

    const history = useHistory();

    const goToApplicationFormPage = () => {
        history.push("/application")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }
    return (
        <div>
            <Header>
                <h2>Labe-X</h2>
                <button onClick={goToLoginPage}>LOGIN DO ADMINISTRADOR</button>
            </Header>

            <Main>
            <p>Deseja viajar com a Labe-X? Clique aqui!</p>
            <SubscribeButton onClick={goToApplicationFormPage}>QUERO ME INSCREVER NUMA VIAGEM ESPACIAL!</SubscribeButton>
            </Main>

        </div>
    )
}

export default HomePage