import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { useHistory, useParams } from 'react-router-dom'
import { baseUrl } from '../constants/urls'
import CreateComment from '../components/createComment'
import CommentCard from '../components/CommentCard'
import { ButtonLogout, CardPosts, InfoH1, InfoH3, InfoP } from '../styles/styles'
import { goToFeed } from '../router/coordinator'

const PostPage = () => {

    const params = useParams()
    
    const history = useHistory()

    const [details, setDetails] = useState([])

    const getPostDetails = () =>{
        axios
        .get(`${baseUrl}/posts/${params.id}`, {headers:{
            Authorization: localStorage.getItem('token')
        }})

        .then((res)=>{
            setDetails(res.data.post)
        })

        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getPostDetails()
    },[details])
    
    useProtectedPage()

    return (

        <div>
                <CardPosts>
                    <ButtonLogout onClick={() => goToFeed(history)}>Voltar para home</ButtonLogout>
                    <InfoH3>{details.username}</InfoH3>
                    <InfoH1>{details.title}</InfoH1>
                    <InfoP>{details.text}</InfoP>
                </CardPosts>

                <CreateComment id={details.id} />
           
                {details.length===0 ? <InfoP>Carregando...</InfoP> : details.comments.map((comment =>{

                    return ( 

                        <CommentCard 

                        commentId={comment.id}
                        postId={params.id}
                        id={comment.id}
                        text={comment.text}
                        username={comment.username}
                        userVoteDirection={comment.userVoteDirection}
                        votesCount={comment.votesCount}
                        
                        />
                    )

                }))}
            


        </div>
    )
}

export default PostPage