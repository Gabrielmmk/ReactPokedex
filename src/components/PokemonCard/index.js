import React from 'react';
import {useNavigate } from 'react-router-dom';

export default function PokemonCard({name, image, types, abilities, id}){
    //console.log(`Nome ${name} Tipo: ${types}`);
    //console.log(types);

    const navigate = useNavigate();

    const typeHandler = () => {
        if(types[1]){
            return types[0].type.name + ' | ' + types[1].type.name;
        }
        return types[0].type.name;
        
        
    };

    const abilitesPoke = () => {
        if (abilities.length === 0) {
            return 'Nenhuma habilidade disponível';
        } else if (abilities.length === 1) {
            return abilities[0].ability.name;
        } else if (abilities.length === 2) {
            return abilities[0].ability.name + ' | ' + abilities[1].ability.name;
        } else if (abilities.length === 3) {
            return abilities[0].ability.name + ' | ' + abilities[1].ability.name + ' | ' + abilities[2].ability.name;
        }
    };

    const nameDescription = (name, id) => {
        console.log(name + id);
        navigate('/description', { state: {name, id}});
    };
    

    
    return (
        <>  
            <div className='container mt-3' >
                <div className="card " style={{ width: '20rem' }}>
                    <div className='col'>
                            <div className="card-body">
                                <h3 className="card-title">{name}</h3>
                                <h5>{typeHandler()}</h5>
                                <img className='card-img-top' src={image} alt={`Imagem do pokemon ${name}`} style={{width: "150px"}}/>
                                <p className="card-text">As principais habilidades são: {abilitesPoke()}</p>
                                <button className="btn btn-primary" onClick={() => nameDescription(name, id)}>Ler Mais</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}