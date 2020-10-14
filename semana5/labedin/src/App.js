import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Sanji from './components/images/sanji-perfil.jpeg';
import Baratie from './components/images/baratie.jpg';
import Sunny from './components/images/sunny.jpg';
import email from './components/images/email.jpg';
import local from './components/images/sunny.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={Sanji}
          nome="Sanji"
          descricao="Meu nome é Sanji e sou chef de cozinha! Atualmente trabalho como chef do Thousand Sunny, navio de Monkey D. Luffy, futuro Rei dos Piratas"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="card-pequeno">
        <CardPequeno
          imagem={email}
          email="Email: "
          descricao=" sanji@mugiwara.com"
        />
      </div>

      <div className="card-pequeno">
        <CardPequeno
          imagem={local}
          local="Endereço: "
          descricao=" Navio Thousand Sunny"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={Baratie}
          nome="Baratie"
          descricao="Chef assistente do chef Zeff."
        />

        <CardGrande
          imagem={Sunny}
          nome="Thousand Sunny"
          descricao="Chef de cozinha do navio da Tripulação dos Chapéus de Palha."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
