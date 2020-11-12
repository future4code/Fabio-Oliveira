import React, { useEffect, useState } from "react"
import axios from "axios"
import {DivMatches, ImageAsButton, MatchesImages, ScreenButtonDiv} from "../styled/styles"
import clearMatches from "../components/img/clear-button.png"

function Matches() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        showMatches()
    }, [])

    const showMatches = () => {

        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio-jordao/matches")

            .then((response) => {
                setMatches(response.data.matches)
            }).catch((error) => {
                console.log(error.message)
            })

    }

    const onClickClearMatches = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio-jordao/clear")
            .then(() => {
                alert("Matches limpos com sucesso!")
                showMatches()
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const renderMatches = matches.length ? matches.map((profile)=> {
        return <li key={profile.id}> <MatchesImages src={profile.photo}/> {profile.name} </li>
    }) : <p>Você não tem nenhum match :(</p>
    return (
        <div>
            
            <DivMatches>

                <h2>
                    Lista de Matches:
                </h2>
            {renderMatches}

           

            </DivMatches>

            <ScreenButtonDiv>
            <ImageAsButton src={clearMatches} onClick={onClickClearMatches}></ImageAsButton>
            </ScreenButtonDiv>

        </div>
    )
}

export default Matches