import axios from 'axios'
import { baseUrl } from './urls'
import {goToFeed} from '../router/coordinator'

export const login = (body, history) =>{

    axios
    .post(`${baseUrl}/login`, body)

    .then((response)=>{
        localStorage.setItem("token", response.data.token)
        goToFeed(history)
    })

    .catch((error)=>{
        alert("Erro ou senha inválido.")
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