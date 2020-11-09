import React from "react";
import styled from "styled-components";
import axios from "axios";
import './App.css'; 

const MegaDiv = styled.div`
  background-color: #E840CC;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SearchButton = styled.button`
display: flex;
padding: 20px;

`;

const ActivitiesDiv = styled.div`
  display: flex;
  flex-direction: column;
 
  
`;

class App extends React.Component {
  state = {
    activities: null
    };

  searchActivity = () => {
    const linkApi = "http://www.boredapi.com/api/activity/";
    axios
    .get(linkApi)
    .then((response) => {
      this.setState({ activities: response.data });
    });
  };

  render() {
    return (
      <MegaDiv>
        <h1> Seja bem vinde a Bored!</h1>
        <h3>
          Aqui nós iremos sugerir atividades aleatórias para que você possa executá-las quando o tédio estiver consumindo o seu ser!
        </h3>
        <p>
          Clica aqui embaixo para descobrir o que te espera nesse mundo de atividades aleatórias!
        </p>
        
          <div>
            <SearchButton onClick={this.searchActivity}>Descubra sua atividade aqui!</SearchButton>
          </div>

          {this.state.activities && (
            <ActivitiesDiv>
              <p>Nome: {this.state.activities.activity}</p>
              <p>Tipo: {this.state.activities.type}</p>
              <p>Acessibilidade: {this.state.activities.accessibility}</p>
              <p>
                Numero de Participantes: {this.state.activities.participants}
              </p>
              <p>Preço: {this.state.activities.price}</p>
            </ActivitiesDiv>
          )}
        </MegaDiv>
      
    );
  }
}

export default App;