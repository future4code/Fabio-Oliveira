import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

function Home () {

    const [profile, setProfile] = useState({})
    const [likebutton, setLikeButton] = useState(false)

    useEffect(()=>{
        showProfile()
    },[])

    const showProfile = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio-jordao/person")

        .then((response) => {
            setProfile(response.data.profile)
        }).catch((error) =>{
            window.alert("Show de erro")
        })
    }

    const chooseProfile = () => {
        const body = {
            id: profile.id,
            choice: true
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio-jordao/choose-person", body)

        .then((response) => {
            showProfile()
            console.log("deu bom")

        }).catch((error)=>{
            window.alert("Erro de escolha")
        })

        
    }
    const onClickLike = () => {
        setLikeButton(true)
        chooseProfile()

    }

    const onClickDislike = () => {
        setLikeButton(false)
        chooseProfile()
    }
    return(
    <div>
        <div>
        <img src={profile.photo}/>
        <p>{profile.name}</p>
        <p>{profile.age}</p>
        <p>{profile.bio}</p>
        <button onClick={onClickLike}>DÁ LIKE NESSA PORRA</button>
        <button onClick={onClickDislike}>CHUTA QUE É MACUMBA</button>
        </div>
        <p>Tela Principal</p>
    </div>
    )
}

export default Home