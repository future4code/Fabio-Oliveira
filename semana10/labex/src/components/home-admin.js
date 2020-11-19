import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { Header, LabeX, ReturnButton, AdminHome,  HeaderLabel, HomeAdminButtons, AdminButtons } from "./styles"
import { useProtectedPage } from "./hooks/useProtectedPage"

function AdminHomePage() {

    const history = useHistory()

    const goToCreateTrips = () => {
        history.push("/create")
    }

    const goToTrips = () => {
        history.push("/trips")
    }

    const goToApproval = (tripId) => {
        history.push(`/approval/${tripId}`)
    }

    const goToHome = () => {
        history.push("/")
    }

    useProtectedPage()

    return (
        <div>
            <Header>
                <LabeX>Labe-X</LabeX>
                <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
                <ReturnButton onClick={goToHome}>Voltar Para Home</ReturnButton>
            </Header>

            <AdminHome>
                <h2>Seja bem vindo a tela de controle, administrador! Aqui você poderá visualizar as viagens já cadastradas, criar novas viagens para os usuários e aceitar ou rejeitas as solicitaçãos realizadas.</h2>
                <HomeAdminButtons>
                <AdminButtons onClick={goToCreateTrips}>Cadastrar Novas Viagens</AdminButtons>
                <AdminButtons onClick={goToTrips}>Exibir suas viagens cadastradas</AdminButtons>
                </HomeAdminButtons>
            </AdminHome>

        </div>
    )
}

export default AdminHomePage