import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const InputStyled = styled.input `
    padding:5px; 
    border:2px solid #ccc; 
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border-color: black;
`

const ButtonStyled = styled.button `
color: #F699E2;
background-color: black;
margin-right: 1vh;
` 

const  urlHeaders = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const autHeaders = {
    headers: {
        Authorization: "fabio-jordao-dumont"
    }
}

class AddSong extends React.Component {

    state = {
        name: "",
        artist: "",
        url: "",
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value})
    }

    onChangeArtist = (event) => {
        this.setState({artist: event.target.value})
    }

    onChangeUrl = (event) => {
        this.setState({url: event.target.value})
    };

    addSong = (id) =>{

    const body = {
        name: this.state.name,
        artist: this.state.artist,
        url: this.state.url
    }

    axios
    .post(`${urlHeaders}/${id}/tracks`,
     body, 
     autHeaders)
     .then(() => {
        this.setState({ name: "", artist: "", url: ""})


        this.props.PlaylistSongs()
    }).catch((error) => {
        console.log(error.message)
    })
}

    render() {
      return (
        <div>
            <InputStyled placeholder="Nome da música"
                value={this.state.name}
                onChange={this.onChangeName}/>
                <InputStyled placeholder="Artista"
                value={this.state.artist}
                onChange={this.onChangeArtist}/>
                <InputStyled placeholder="Url da música"
                value={this.state.url}
                onChange={this.onChangeUrl}/>
                <ButtonStyled onClick={() => this.addSong(this.props.playlistId)}>Adicionar música</ButtonStyled>           
          
        </div>
      );
    }
  }
  
  export default AddSong;