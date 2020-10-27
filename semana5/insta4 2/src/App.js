import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';



class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'sanji',
        fotoUsuario: 'https://avatarfiles.alphacoders.com/229/thumb-229693.png',
        fotoPost: 'https://i.pinimg.com/originals/d0/a0/9a/d0a09a309f9a45cd1a6ceeac19e4870f.jpg'
      },
      {
        nomeUsuario: 'lelouch',
        fotoUsuario: 'https://i.pinimg.com/originals/8d/fb/9c/8dfb9c777fa41b1200c6b293f2d40393.jpg',
        fotoPost: 'https://miro.medium.com/max/2736/1*U37TJyZL-Qro9V8kXuzowQ.png'
      }
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoPosts = [...this.state.posts, novoPost];
    this.setState({ posts: novoPosts });
    this.setState({ valorInputUsuario: "" });
    this.setState({ valorInputFotoUsuario: "" });
    this.setState({ valorInputFotoPost: "" });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  DivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  padding:: 20px;
`

InputEstilo = styled.input`
padding: 5px;
`

BotaoEstilo = styled.button`
background-color: black;
color: white;
padding: 5px;
border-radius: 5px;
`

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (<Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />)

    })

    return (
      <div className={'app-container'}>
        <this.DivInput>
          <this.InputEstilo

            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Digite seu nome de usuário"}
          />

          <this.InputEstilo

            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Coloque aqui sua foto de usuário"}
          />

          <this.InputEstilo

            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Coloque aqui a foto que deseja publicar"}
          />
        </this.DivInput>
        <this.BotaoEstilo onClick={this.adicionaPost}>Postar</this.BotaoEstilo>

        {listaDePosts}


      </div>
    );
  }
}

export default App;
