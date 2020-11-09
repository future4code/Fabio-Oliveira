import React from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Playlist from '../src/components/playlist/playlist'

const MegaDiv = styled.div `
background-color: #F699E2;
height: 100vh;
width: 100vw;
`

const Header = styled.div`
display: flex;
justify-content: space-between;
background-color: black;
color: #F699E2;
width: 100vw;
`

const PlaylistStyled = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 5vw;
margin-top: 5vh;
text-align: center;
`

const StyleThatP = styled.p`
color: #F699E2;
margin-top: 10px;
margin-left: 100px;
`

const SeePlaylists = styled.h2`
color: #F699E2;
margin-right: 120px;
`

class App extends React.Component {

  render() {
    return (
      <MegaDiv>

        <Header>
        <h1>Labefy</h1>
        <StyleThatP>O organizador de playlist favorito dos Labelunos!</StyleThatP>
        <SeePlaylists>Ver Playlists</SeePlaylists>
        </Header>

        <PlaylistStyled>
      
        
        <Playlist />

        </PlaylistStyled>

      </MegaDiv>
    );
  }
}

export default App;
