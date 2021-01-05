import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { login } from '../constants/requisitions'
import { goToRegister } from '../router/coordinator'
import {useUnprotectedPage} from '../hooks/useUnprotectedPage'
import {InfoH1, InfoH3, InfoP, Login} from '../styles/styles'
import {Register} from '../styles/styles'

const LoginPage = () => {

    useUnprotectedPage()

    const history = useHistory()

    const { form, onChange, resetForm } = useForm({ email: "", password: "" })

    const handleInput = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history)
        resetForm()
    }

    return (
        <Login>

            <InfoH1>Bem vinde ao LabEddit</InfoH1>

            <InfoH3>Faça seu login!</InfoH3>

            <form onSubmit={handleSubmission}>
                <input
                    placeholder="Digite seu email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInput} />
                <input
                    placeholder="Digite sua senha"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInput} />

                <button type="submit">
                    Login
            </button>

            </form>

            <InfoP>Ainda não é cadastrado no LabEddit?</InfoP>
            <Register onClick={() => goToRegister(history)}>Cadastre-se!</Register>

        </Login>
    )

}

export default LoginPage