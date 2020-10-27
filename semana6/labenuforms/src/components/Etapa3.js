import React from 'react';

class Etapa3 extends React.Component {
    render(){
    return (
      <div>
          <h3>Informações Gerais de Ensino</h3>
          <div>

            <p>5. Por que você não terminou um curso de graduação?</p>
            <input></input>
            </div>

            <div>
            <p>6. Você fez algum curso complementar?</p>
            <select>
            <option value="Nenhum">Nenhum</option>
            <option value="Curso Técnico">Curso Técnico</option>
            <option value="Curso de Inglês">Curso de Inglês</option>
            </select>
            </div>
      </div>
    );
  }
}
  
  export default Etapa3;