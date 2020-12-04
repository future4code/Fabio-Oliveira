import axios from 'axios'
import { baseUrl } from './urls'
import {goToFeed} from '../router/coordinator'
import {goToLogin} from '../router/coordinator'

export const login = (body, history) =>{

    axios
    .post(`${baseUrl}/login`, body)

    .then((response)=>{
        localStorage.setItem("token", response.data.token)
        goToFeed(history)
    })

    .catch((error)=>{
        alert("Email ou senha inválido.")
        console.log(error.message)
    })

}

export const signUp = (body, history) =>{
    axios
    .post(`${baseUrl}/signup`, body)

    .then((res)=>{
        localStorage.setItem('token', res.data.token)
        goToFeed(history)
    })

    .catch((error)=>{
        console.log(error.message)
    })
}

export const newPost = (body, history) =>{

    const token = localStorage.getItem('token')
    axios
    .post(`${baseUrl}/posts`, body, {
        headers: {
            Authorization: token
        }
    })

    .then(()=>{
        alert('Post criado com sucesso!')
        goToFeed(history)
    })

    .catch((error)=>{
        alert("Erro ao criar post.")
        console.log(error.message)
    })
}

export const createComment = (body, postId) =>{

    const token = localStorage.getItem('token')
    axios
    .post(`${baseUrl}/posts/${postId}/comment`, body, 
    {headers: 
        {Authorization: token}
    
    })
    .then (()=>{
        alert("Comentário enviado com sucesso!")
    })
    .catch((err)=>{
        alert("Errado!")
        console.log(err.message)
    })
}

export const votePost = (body, postId) => {
    const token = localStorage.getItem('token') 
    axios
    .put(`${baseUrl}/posts/${postId}/vote`, body, {headers: 
        {Authorization: token}
    
    })

    .then(()=>{
        alert("Foi!")
    })
    .catch((err)=>{
        alert("Deu erro")
        console.log(err)
    })
}

export const voteComment = (body, postId, commentId) => {
    const token = localStorage.getItem('token')
    axios
    .put (`${baseUrl}/posts/${postId}/comment/${commentId}/vote`, body, {headers: 
        {Authorization: token}
    
    })

    .then(()=>{
        alert("Foi!")
    })

    .catch((err)=>{
        alert("Não foi!")
        console.log(err)
    })
}

export const logout = (history) =>{
    localStorage.removeItem("token")
    goToLogin(history)
  }
  