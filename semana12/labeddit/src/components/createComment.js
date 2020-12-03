import react from 'react'
import {useForm} from '../hooks/useForm'
import { createComment } from '../constants/requisitions'

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
        <div>
            <form onSubmit={handleSubmission}> 
                <input 
                placeholder="Comente aqui"
                value={form.text}
                name="text"
                onChange={handleInput}
                />
                <button type="submit">Comentar</button>
            </form>
        </div>
    )

}

export default CreateComment