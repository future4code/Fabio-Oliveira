import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Matches from ".//components/matches"
import Home from ".//components/home"

function App() {

  const [screen, setScreen] = useState(false)


  const screenSelector = () => {
    if(screen){
      return (
        <Matches />
      )
    }
    else {
      return (
     <Home/>
      )
    }
    
  }

  const changeScreen = () => {
    setScreen(!screen)
  }




  return (
    <div className="App">
      {screenSelector()}
      <button onClick={changeScreen}>Mudar Tela</button>
    </div>
  );
}

export default App;
