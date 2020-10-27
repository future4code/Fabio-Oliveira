import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class UserList extends React.Component {
    state = {
        users: []
    };

    componentDidMount = () => {
        this.userListFull()
    }

    userListFull = () => {
        axios
        .get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          {
            headers: {
              Authorization: "fabio-jordao-dumont"
            }
          }
        )
        .then((response) => {
          this.setState({users: response.data})
    
          }
        ).catch((error) => {
          alert("Ih, cadê os usuários? :(")
        })
      }


    render() {
        const renderedUsers = this.state.users.map((users) => {
            return <p key={users.id}>{users.name}</p>

        })

        return (
            <div className="App">
                {renderedUsers}
            </div>
        )

    }

}

export default UserList;