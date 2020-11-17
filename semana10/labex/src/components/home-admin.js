import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Header, LabeX, ReturnButton, AdminHome, FooterAdmin, FooterLabel, HomeAdminButtons, AdminButtons } from "./styles"

function AdminHomePage() {

    const history = useHistory()

    const goToCreateTrips = () => {
        history.push("/create")
    }

    const goToTrips = () => {
        history.push("/trips")
    }

    const goToApproval = () => {
        history.push("/approval")
    }

    const goToHome = () => {
        history.push("/")
    }

    return (
        <div>
            <Header>
                <LabeX>Labe-X</LabeX>
                <ReturnButton onClick={goToHome}>Voltar Para Home</ReturnButton>
            </Header>

            <AdminHome>
                <h2>Seja bem vindo a tela de controle, administrador! Aqui você poderá visualizar as viagens já cadastradas, criar novas viagens para os usuários e aceitar ou rejeitas as solicitaçãos realizadas.</h2>
                <HomeAdminButtons>
                <AdminButtons onClick={goToCreateTrips}>Cadastrar Novas Viagens</AdminButtons>
                <AdminButtons onClick={goToTrips}>Exibir suas viagens cadastradas</AdminButtons>
                <AdminButtons onClick={goToApproval}>Listar, aprovar ou rejeitar inscrições</AdminButtons>
                </HomeAdminButtons>
            </AdminHome>

            <FooterAdmin>
            <FooterLabel>Desbrave o universo com a Labe-X</FooterLabel>
        </FooterAdmin>

        </div>
    )
}

export default AdminHomePage