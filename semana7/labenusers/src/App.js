import React from 'react';
import styled from 'styled-components';
import UserList from './components/users';
import CreateUser from './components/newuser'

const AppContainer = styled.div`
display: flex;
justify-content: center;

`

const ButtonStyle = styled.button`
margin-top: 2px;
`

class App extends React.Component {
  state = {
    newUserScreen: true,
    button: "Lista de Usuários"

  };

  changeScreen = () => {
    if(this.state.newUserScreen){
      this.setState({newUserScreen: false})
      this.setState({button: "Cadastro de Usuários"})
    } else {
      this.setState({ newUserScreen: true });
      this.setState({button: "Lista de Usuários"}); 
    }
  }

  

  render() {
    const renderScreen = () => {
      if(this.state.newUserScreen){
        return <CreateUser />
      } else{
        return <UserList />
      }
    }
    return (
      <div>
       <ButtonStyle onClick={this.changeScreen}>{this.state.button}</ButtonStyle>
       <AppContainer>
         {renderScreen()}
       </AppContainer>
      </div>
    );
  }
}

export default App;
