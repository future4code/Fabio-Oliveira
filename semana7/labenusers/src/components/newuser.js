import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class CreateUser extends React.Component {
    state = {
        name: "",
        email: "",
        nameValue: "",
        emailValue: "",
    }
    createUser = () => {

        const body = {
          name: this.state.nameValue,
          email: this.state.emailValue
        };
        axios
          .post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            body,
            {
              headers: {
                Authorization: "fabio-jordao-dumont"
              }
            })
          .then((response) => {
            this.setState({ nameValue: "" })
            this.setState({ emailValue: "" })
            alert("Deu bom, irmão!")
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error.message)
            alert("Vish, deu ruim :(")
          });
    
      };
    
      onChangeNameValue = (event) => {
        this.setState({ nameValue: event.target.value })
      }
    
      onChangeEmailValue = (event) => {
        this.setState({ emailValue: event.target.value })
      }

      render() {
    
        return (
          <div className="App">
            <div>
              <p>Nome:</p>
              <input
                value={this.state.nameValue}
                onChange={this.onChangeNameValue}
              />
              <p>Email:</p>
              <input
                value={this.state.emailValue}
                onChange={this.onChangeEmailValue}
              />
              <button onClick={this.createUser}>Salvar</button>
              <button onClick={this.props.UserList}>Lista de Usuários Cadastrados</button>
            </div>
    
          </div>
          );
        }
}

export default CreateUser