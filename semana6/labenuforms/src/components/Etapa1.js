import React from 'react';

class Etapa1 extends React.Component {
    render(){
    return (
        <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <div>
            <p>1. Qual seu nome?</p>
            <input></input>
            </div>

            <div>
            <p>2. Qual sua idade?</p>
            <input></input>
            </div>

            <div>
            <p>3. Qual seu email?</p>
            <input></input>
            </div>

            <div>
            <p>4. Qual sua escolaridade?</p>
            <select>
                <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                <option value="Ensino Superior Completo">Ensino Superior Completo</option>
            </select>
            </div>


        </div>
    );
}
}

export default Etapa1;