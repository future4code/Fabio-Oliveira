import react from 'react'
import {useForm} from '../hooks/useForm'
import { createComment } from '../constants/requisitions'
import { ButtonLogout, CardPosts, StyledInput } from '../styles/styles'

const CreateComment = (props) => {

    const {form, onChange, resetForm} = useForm({text: ""})

    const handleSubmission = (e) => {
        e.preventDefault()
        createComment(form, props.id)
        resetForm()
    }

    const handleInput = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    return (
        <CardPosts>
            <form onSubmit={handleSubmission}> 
                <StyledInput
                placeholder="Comente aqui"
                value={form.text}
                name="text"
                onChange={handleInput}
                />
                <ButtonLogout type="submit">Comentar</ButtonLogout>
            </form>
        </CardPosts>
    )

}

export default CreateComment