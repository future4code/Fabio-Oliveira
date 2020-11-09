import React from 'react';
import styled from 'styled-components';
import AddSong from '../addsong/addsong'

const PlaylistName = styled.h1`
color: #F699E2;
` 

const DetailsOfTheSongs = styled.p`
color: #F699E2;
`

const ButtonStyled = styled.button `
color: #F699E2;
background-color: black;
margin-right: 1vh;

` 



class PlaylistDetails extends React.Component {



    render() {

        const songsMap = this.props.songs.map((item) => {
            return (

                <div>
                <audio src={item.url} controls/>
                <DetailsOfTheSongs>{item.name}</DetailsOfTheSongs>
                <DetailsOfTheSongs>{item.artist}</DetailsOfTheSongs>
            </div>
            )
        })
        const finalRender = this.props.quantity !== 0 ? songsMap : <DetailsOfTheSongs>Adicione músicas para começarmos a festa!</DetailsOfTheSongs>

      return (
        <div>

            <ButtonStyled onClick={this.props.goBack}>Voltar a Home</ButtonStyled>
                
                <PlaylistName>{this.props.playlistName}</PlaylistName>
                {finalRender}
                <AddSong playlistId={this.props.playlistId} playlistSongs={this.props.playlistSongs} />

        </div>
      );
    }
  }
  
  export default PlaylistDetails;