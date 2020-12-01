import React from 'react'
import { useForm } from '../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { signUp } from '../constants/requisitions'
import { useUnprotectedPage } from '../hooks/useUnprotectedPage'

const RegisterPage = () => {

    useUnprotectedPage()

    const history = useHistory()

    const { form, onChange } = useForm({ username: "", email: "", password: "" })

    const handleInput = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        signUp(form, history)
    }

    return (
        <div>
            <form onSubmit={handleSubmission}>

                <input
                    placeholder="Escolha um nome de usuário"
                    name="username"
                    value={form.username}
                    onChange={handleInput}

                />
                <input
                    placeholder="Escreva seu email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInput} />

                <input
                    placeholder="Crie uma senha"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInput} />

                <button type="submit">
                    Cadastrar
            </button>


            </form>


        </div>
    )

}

export default RegisterPage