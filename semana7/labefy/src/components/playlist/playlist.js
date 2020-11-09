import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CreatePlaylist from '../createplaylist/createplaylist';
import PlaylistDetails from '../playlistdetails/playlistdetails';


const urlHeaders = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const autHeaders = {
    headers: {
        Authorization: "fabio-jordao-dumont"
    }
}

const DeleteSpan = styled.span`
margin-left: 1vw;
color: red;
`

const PlaylistStyle = styled.span`
color: #F699E2;
font-weight: bold;
`

const SongsDiv = styled.div`
margin-bottom: 10px;
margin-top: 10px;

`

const PlaylistDiv = styled.div`
background-color: black;
height: 93vh;
margin-top: -33px;
`

class Playlist extends React.Component {

    state = {
        playlists: [],
        details: false,
        songs: [],
        playlistName: '',
        playlistId: '',
        songsQuantity: ''
    }

    componentDidMount() {
        this.allPlaylists()
    }

    renderDetails = () => {
        this.setState({ details: !this.state.details })
    }

    playlistSongs = (id, name) => {
        this.renderDetails()

        axios
            .get(`${urlHeaders}/${id}/tracks`,
                autHeaders)
            .then((response) => {

                const quantity = response.data.result.quantity
                const list = response.data.result.tracks
                console.log(list)
                this.setState({ songs: list })
                this.setState({ playlistName: name })
                this.setState({ playlistId: id })
                this.setState({ songsQuantity: quantity })

            }).catch((error) => {
                console.log(error.message)
            })
    }

    allPlaylists = () => {
        axios
            .get(urlHeaders,
                autHeaders)

            .then((response) => {
                const list = response.data.result.list
                this.setState({ playlists: list })

            }).catch((error) => {
                console.log(error.message)
            })
    }

    deletePlaylist = (id) => {
        axios.delete(`${urlHeaders}/${id}`,
            autHeaders)

            .then(() => {
                this.allPlaylists()
            }).catch((error) => {
                console.log(error.message)
            })
    }



    render() {
        const renderPlaylists = this.state.playlists.map((item) => {

            return (
                
                <SongsDiv key={item.id}>
                    <PlaylistStyle onClick={() => this.playlistSongs(item.id, item.name)}>{item.name}</PlaylistStyle>
                    <DeleteSpan onClick={() => this.deletePlaylist(item.id)}>X</DeleteSpan>
                </SongsDiv>)
                

        })

        return (
            <PlaylistDiv>
                {renderPlaylists}

                {this.state.details ? <PlaylistDetails goBack={this.renderDetails}
                    playlistName={this.state.playlistName}
                    songs={this.state.songs}
                    playlistId={this.state.playlistId}
                    playlistSongs={this.playlistSongs}
                    quantity={this.state.songsQuantity} /> : ""}
                <CreatePlaylist allPlaylists={this.allPlaylists} />
            </PlaylistDiv>
        );
    }
}

export default Playlist;