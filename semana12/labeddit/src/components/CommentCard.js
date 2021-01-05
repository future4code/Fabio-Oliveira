import React from 'react'
import {voteComment} from '../constants/requisitions'
import { ButtonLogout, CardPosts, InfoP } from '../styles/styles'

const CommentCard = (props) => {

    const handleVote = (decision) => {
        const body = {
            direction: decision,
        }
        voteComment(body, props.postId, props.commentId )
    }

    return (
        <CardPosts>
            <InfoP>Votos: {props.votesCount}</InfoP>
            <InfoP>{props.username}</InfoP>
            <InfoP>{props.text}</InfoP>
            <ButtonLogout onClick={() => handleVote(1)}>Like</ButtonLogout>
            <ButtonLogout onClick={() => handleVote(-1)}>Dislike</ButtonLogout>
        </CardPosts>
    )

}

export default CommentCard