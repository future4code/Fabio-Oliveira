import React from 'react'
import axios from 'axios'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../hooks/useRequestData'
import { baseUrl } from '../constants/urls'
import { CardPosts } from '../styles/styles'
import { newPost } from '../constants/requisitions'
import {useForm} from '../hooks/useForm'
import {goToPost} from '../router/coordinator'

const FeedPage = () => {

    useProtectedPage()

    const posts = useRequestData(`${baseUrl}/posts`, []);

    const history = useHistory()

    const { form, onChange } = useForm({ text: "", title: "" })

    const handleInput = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        newPost(form, history)
    }

    return (
        <div>

            <div>
                <form onSubmit={handleSubmission}>

                    <input
                    placeholder="Escreva o título do post"
                    name="title"
                    value={form.title}
                    onChange={handleInput}
                    />

                    <input
                    placeholder="Escreva o post"
                    name="text"
                    value={form.text}
                    onChange={handleInput}
                    />

                    <button type="submit">Enviar</button>

                </form>
            </div>

            {posts.map((post) => {

                return (
                <CardPosts key={post.id}>

                    <h2>{post.title}</h2>
                    <h4>{post.username}</h4>
                    <p>{ post.text}</p>
                    <p>{ post.userVoteDirection}</p>
                    <p>{ post.votesCount}</p>
                    <button onClick={() => goToPost(history)}>Ir para detalhes</button>
                </CardPosts>
            )})}
        </div>
    )

}

export default FeedPage