import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import { useRequestData } from '../hooks/useRequestData'
import { baseUrl } from '../constants/urls'
import CreateComment from '../components/createComment'
import { voteComment } from '../constants/requisitions'
import CommentCard from '../components/CommentCard'

const PostPage = () => {

    const params = useParams()

    const [details, setDetails] = useState([])

    const getPostDetails = (props) =>{
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
                <div>
                    <h3>{details.username}</h3>
                    <h1>{details.title}</h1>
                    <p>{details.text}</p>
                </div>

                <CreateComment id={details.id} />
           
                {details.length===0 ? <p>Carregando...</p> : details.comments.map((comment =>{

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

                        // <div>
                        //     <p>{comment.username}</p>
                        //     <p>{comment.text}</p>
                        //     <p>Votos: {comment.votesCount}</p>
                        //     {/* <p>{comment.id}</p> */}
                        //     {/* id={comment.id}
                        //     postId={params.id} */}
                        //     <p>{comment.userVoteDirection}</p>
                        // </div>
                    )

                }))}
            


        </div>
    )
}

export default PostPage