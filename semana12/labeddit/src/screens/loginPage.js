import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { login } from '../constants/requisitions'
import { goToRegister } from '../router/coordinator'
import {useUnprotectedPage} from '../hooks/useUnprotectedPage'

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
        <div>

            <h1>Bem vinde ao LabEddit</h1>

            <h3>Faça seu login!</h3>

            <form onSubmit={handleSubmission}>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInput} />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInput} />

                <button type="submit">
                    Login
            </button>

            </form>

            <p>Ainda não é cadastrado no LabEddit?</p>
            <span onClick={() => goToRegister(history)}>Cadastre-se!</span>

        </div>
    )

}

export default LoginPage