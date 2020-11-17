import React from "react"
import { useHistory } from "react-router-dom"
import {Footer, FooterLabel, Header, LabeX, Main, ReturnButton, SubscribeButton} from "./styles"

function HomePage () {

    const history = useHistory();

    const goToApplicationFormPage = () => {
        history.push("/tripsuser")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }
    return (
        <div>
            <Header>
                <LabeX>Labe-X</LabeX>
                <ReturnButton onClick={goToLoginPage}>LOGIN DO ADMINISTRADOR</ReturnButton>
            </Header>

            <Main>
            <p>Deseja viajar com a Labe-X? Clique aqui!</p>
            <SubscribeButton onClick={goToApplicationFormPage}>QUERO ME INSCREVER NUMA VIAGEM ESPACIAL!</SubscribeButton>
            </Main>
        <Footer>
            <FooterLabel>Desbrave o universo com a Labe-X</FooterLabel>
        </Footer>
        </div>
    )
}

export default HomePage