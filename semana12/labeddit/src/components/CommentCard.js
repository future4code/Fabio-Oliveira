import React from 'react'
import {voteComment} from '../constants/requisitions'

const CommentCard = (props) => {

    const handleVote = (decision) => {
        const body = {
            direction: decision,
        }
        voteComment(body, props.postId, props.commentId )
    }

    return (
        <div>
            <p>Votos: {props.votesCount}</p>
            <p>{props.username}</p>
            <p>{props.text}</p>
            <button onClick={() => handleVote(1)}>Like</button>
            <button onClick={() => handleVote(-1)}>Dislike</button>
        </div>
    )

}

export default CommentCard