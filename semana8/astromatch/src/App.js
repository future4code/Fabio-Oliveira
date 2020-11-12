import React, { useState } from "react"
import Matches from ".//components/matches"
import Home from ".//components/home"
import {MegaDiv, ChangeScreenButton, ScreenButtonDiv, ImageAsButton} from ".//styled/styles"
import heart from "./components/img/matches-button.png"

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
    <MegaDiv>
       <ScreenButtonDiv>
      <ImageAsButton src={heart} onClick={changeScreen}></ImageAsButton >
      </ScreenButtonDiv>
      {screenSelector()}
     
    </MegaDiv>
  );
}

export default App;
