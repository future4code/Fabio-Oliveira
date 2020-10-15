import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'sanji'}
          fotoUsuario={'https://avatarfiles.alphacoders.com/229/thumb-229693.png'}
          fotoPost={'https://i.pinimg.com/originals/d0/a0/9a/d0a09a309f9a45cd1a6ceeac19e4870f.jpg'}
        />

        <Post
          nomeUsuario={'lelouch'}
          fotoUsuario={'https://i.pinimg.com/originals/8d/fb/9c/8dfb9c777fa41b1200c6b293f2d40393.jpg'}
          fotoPost={'https://miro.medium.com/max/2736/1*U37TJyZL-Qro9V8kXuzowQ.png'}
        />
      </div>
    );
  }
}

export default App;
