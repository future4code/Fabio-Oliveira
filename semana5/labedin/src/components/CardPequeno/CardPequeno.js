import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
        return (
            <div className="card-pequeno-css">
                <img src={ props.imagem } />
                <div>
                    <h4>{ props.email }</h4>
                    <h4>{ props.local } </h4>
                    <p>{ props.descricao }</p>
                </div>
            </div>
        )
    }
    
    export default CardPequeno;