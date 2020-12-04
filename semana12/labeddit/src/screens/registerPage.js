import React from 'react'
import { useForm } from '../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { signUp } from '../constants/requisitions'
import { useUnprotectedPage } from '../hooks/useUnprotectedPage'
import { ButtonLogout, InfoLabel, Login, StyledInput } from '../styles/styles'
import { goToLogin } from '../router/coordinator'

const RegisterPage = () => {

    useUnprotectedPage()

    const history = useHistory()

    const { form, onChange, resetForm } = useForm({ username: "", email: "", password: "" })

    const handleInput = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        signUp(form, history)
        resetForm()
    }

    return (
        <Login>

            <ButtonLogout onClick={() => goToLogin(history)}>Voltar para home</ButtonLogout>
            <form onSubmit={handleSubmission}>
                <InfoLabel>Escolha um nome de usuário</InfoLabel>
                <StyledInput
                    placeholder="Escolha um nome de usuário"
                    name="username"
                    value={form.username}
                    onChange={handleInput}

                />
                <InfoLabel>Digite seu email</InfoLabel>
                <StyledInput
                    placeholder="Escreva seu email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInput} />
                <InfoLabel>Crie uma senha</InfoLabel>
                <StyledInput
                    placeholder="Crie uma senha"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInput} />

                <ButtonLogout type="submit">
                    Cadastrar
            </ButtonLogout>


            </form>


        </Login>
    )

}

export default RegisterPage