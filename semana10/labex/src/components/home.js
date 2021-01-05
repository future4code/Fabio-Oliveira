import React from "react"
import { useHistory } from "react-router-dom"
import { HeaderLabel, Header, LabeX, Main, ReturnButton, SubscribeButton} from "./styles"

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
                <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
                <ReturnButton onClick={goToLoginPage}>LOGIN DO ADMINISTRADOR</ReturnButton>
            </Header>

            <Main>
            <h1>Deseja viajar com a Labe-X? Clique aqui!</h1>
            <SubscribeButton onClick={goToApplicationFormPage}>QUERO ME INSCREVER NUMA VIAGEM ESPACIAL!</SubscribeButton>
            </Main>
        </div>
    )
}

export default HomePage