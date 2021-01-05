import React from 'react'
import axios from 'axios'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../hooks/useRequestData'
import { baseUrl } from '../constants/urls'
import { ButtonLogout, CardPosts, FeedDiv, FeedInput, InfoLabel, InfoP } from '../styles/styles'
import { newPost } from '../constants/requisitions'
import {useForm} from '../hooks/useForm'
import {goToPost} from '../router/coordinator'
import PostCard from '../components/PostCard'

const FeedPage = (props) => {

    useProtectedPage()

    const posts = useRequestData(`${baseUrl}/posts`, []);

    const history = useHistory()

    const { form, onChange, resetForm } = useForm({ text: "", title: "" })

    const handleInput = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        newPost(form, history)
        resetForm()
    }

    return (
        <div>

            <FeedDiv>
                <form onSubmit={handleSubmission}>
                    <InfoLabel>Crie seu post e compartilhe com seus amigos :D</InfoLabel>
                    <FeedInput
                    placeholder="Escreva o título do post"
                    name="title"
                    value={form.title}
                    onChange={handleInput}
                    />

                    <FeedInput
                    placeholder="Escreva o post"
                    name="text"
                    value={form.text}
                    onChange={handleInput}
                    />

                    <ButtonLogout type="submit">Enviar</ButtonLogout>

                </form>
            </FeedDiv>

            {!posts ? <InfoP>Carregando...</InfoP> : posts.map((post) => {

                return <PostCard

                    id={post.id} title={post.title} text={post.text} username={post.username} votesCount={post.votesCount} direction={post.userVoteDirection} commentsCount={post.commentsCount}

                    />
            })
            }
        </div>
    )

}

export default FeedPage