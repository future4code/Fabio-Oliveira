import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DeleteButton = styled.span`
color: red;
margin-left: 10px;
`

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

      deleteUser = (user) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user}`,
        {
          headers: {
            Authorization: "fabio-jordao-dumont"
          }
        }).then(response => {
          alert("Usuário excluído com sucesso!")
          this.userListFull()
        }).catch(error => {
          alert("Erro ao deletar usuário")
          console.log(error.message)
        })
      }


    render() {
        const renderedUsers = this.state.users.map((users) => {
            return <p 
            key={users.id}>
              {users.name}
              <DeleteButton onClick={() => this.deleteUser(users.id)}>X</DeleteButton>
              </p>
            

        })

        return (
            <div className="App">
                <h2>Usuários Cadastrados</h2>
                <ul>
                {renderedUsers}
                </ul>
            </div>
        )

    }

}

export default UserList;