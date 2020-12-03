import react from 'react'
import { useHistory } from 'react-router-dom'
import { votePost } from '../constants/requisitions'
import { goToPost } from '../router/coordinator'
import { CardPosts } from '../styles/styles'

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
                    <button onClick={() => handleVote(1)}>Votar</button>
                    <p>Votos: {props.votesCount}</p>
                    <p>Comentários: {props.commentsCount}</p>
                </div>

            )

        } else if (props.direction === 1) {
            return (
                <div>
                    <button onClick={() => handleVote(0)}>Votar</button>
                    <p>Votos: {props.votesCount}</p>
                    <p>Comentários: {props.commentsCount}</p>
                </div>
            )
        } else {
            <div>
                <button onClick={() => handleVote(1)}>Votar</button>
                <p>Votos: {props.votesCount}</p>
                <p>Comentários: {props.commentsCount}</p>
            </div>
        }
    }

    return (
        <CardPosts>
            <h3>{props.username}</h3>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            {like()}
            <button onClick={() => goToPost(history, props.id)}>Ver mais</button>
        </CardPosts>
    )
}

export default PostCard