import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UserList from './components/users';
import CreateUser from './components/newuser'

class App extends React.Component {
  state = {
    newUserScreen: true,
    // button 

  };

  getUserList = () => {
    this.setState({getUserList: false})
  }

  render() {
    
    return (
      <div className="App">
       <CreateUser />
      </div>
    );
  }
}

export default App;
