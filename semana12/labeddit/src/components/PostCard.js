import react from 'react'
import { useHistory } from 'react-router-dom'
import { votePost } from '../constants/requisitions'
import { goToPost } from '../router/coordinator'
import { ButtonLogout, CardPosts, InfoH1, InfoH3, InfoP } from '../styles/styles'

const PostCard = (props) => {

    const history = useHistory()

    const handleVote = (decision) => {
        const body = {
            direction: decision
        }

        votePost(body, props.id)
    }

    const like = () => {
        if (props.direction === 0) {
            return (
                <div>
                    <ButtonLogout onClick={() => handleVote(1)}>Votar</ButtonLogout>
                    <InfoP>Votos: {props.votesCount}</InfoP>
                    <InfoP>Comentários: {props.commentsCount}</InfoP>
                </div>

            )

        } else if (props.direction === 1) {
            return (
                <div>
                    <ButtonLogout onClick={() => handleVote(0)}>Votar</ButtonLogout>
                    <InfoP>Votos: {props.votesCount}</InfoP>
                    <InfoP>Comentários: {props.commentsCount}</InfoP>
                </div>
            )
        } else {
            <div>
                <ButtonLogout onClick={() => handleVote(1)}>Votar</ButtonLogout>
                <InfoP>Votos: {props.votesCount}</InfoP>
                <InfoP>Comentários: {props.commentsCount}</InfoP>
            </div>
        }
    }

    return (
        <CardPosts>
            <InfoH3>Usuário: {props.username}</InfoH3>
            <InfoH1>{props.title}</InfoH1>
            <InfoP>{props.text}</InfoP>
            {like()}
            <ButtonLogout onClick={() => goToPost(history, props.id)}>Ver mais</ButtonLogout>
        </CardPosts>
    )
}

export default PostCard