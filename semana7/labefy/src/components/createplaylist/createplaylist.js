import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const InputStyled = styled.input `
    padding:5px; 
    border:2px solid #ccc; 
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border-color: black;
    margin-right: 1vw;
    margin-left: 1vw;
`

const ButtonStyled = styled.button `
color: #F699E2;
background-color: black;
margin-right: 1vh;

` 

const urlHeaders = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const autHeaders = {
    headers: {
        Authorization: "fabio-jordao-dumont"
    }
}

class CreatePlaylist extends React.Component {

    state = {
        name: ""
    }

    onChangeInput = (event) => {
        this.setState({name: event.target.value})
    }

    createPlaylist = () => {
        const body = {
            name: this.state.name
        }

        axios
        .post(urlHeaders,
             body,
              autHeaders)
              .then(() => {

            this.setState({ name: ""})
            window.alert("Sua playlist foi criada com sucesso! Divirta-se!")
            this.props.allPlaylists()


        }).catch((error) => {
            console.log(error.message)
            window.alert("Você não pode ter duas playlists com o mesmo nome :(")
        })
    }

    render() {
      return (
        <div>
          <InputStyled placeholder="Nome da Playlist"
                value={this.state.name}
                onChange={this.onChangeInput}/>
                <ButtonStyled onClick={this.createPlaylist}>Criar playlist</ButtonStyled>
        </div>
      );
    }
  }
  
  export default CreatePlaylist;