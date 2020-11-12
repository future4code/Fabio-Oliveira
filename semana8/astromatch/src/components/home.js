import React, { useState, useEffect } from "react"
import axios from "axios"
import { DivSpan, HomeDivButtons, ProfileDiv, ProfileImages, StyledSpan, ImageAsButton, StyledPItalic } from "../styled/styles"
import like from "../components/img/like-button.png"
import no from "../components/img/no-button.png"

function Home() {

    const [profile, setProfile] = useState({})

    useEffect(() => {
        showProfile()
    }, [])

    const showProfile = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio-jordao/person")

            .then((response) => {
                setProfile(response.data.profile)
            }).catch((error) => {
                console.log(error.message)
            })
    }

    const chooseProfile = (like) => {
        const body = {
            id: profile.id,
            choice: like
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio-jordao/choose-person", body)

            .then((response) => {
                showProfile()

            }).catch((error) => {
                console.log(error.message)
            })


    }

    return (

        
        <ProfileDiv>
            <h1>AstroMatch</h1>

            <ProfileImages src={profile.photo} />
            <DivSpan>
            <StyledSpan>{profile.name} - </StyledSpan>
            <StyledSpan>{profile.age}</StyledSpan>
            </DivSpan>
            <StyledPItalic>{profile.bio}</StyledPItalic>

            <HomeDivButtons>

                <ImageAsButton src={like} onClick={() => chooseProfile(true)}></ImageAsButton>
                <ImageAsButton src={no} onClick={() => chooseProfile(false)}></ImageAsButton>

            </HomeDivButtons>

        </ProfileDiv>
       

    )
}

export default Home