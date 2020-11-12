import React, { Profiler, useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"

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
            }).catch(() => {
                window.alert("DEU RUIM, VIADO")
            })

    }

    const onClickClearMatches = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio-jordao/clear")
            .then(() => {
                alert("Matches limpos com sucesso!")
                showMatches()
            })
            .catch((error) => {
                console.log("Erro ao limpar matches.")
                console.log(error.message)
            })
    }

    const renderMatches = matches.length ? matches.map((profile)=> {
        return <li key={profile.id}> <img src={profile.photo}/> {profile.name} </li>
    }) : <p>Carentão alone</p>
    return (
        <div>
            
            {renderMatches}

            <button onClick={onClickClearMatches}>VAZA FDP</button>

        </div>
    )
}

export default Matches