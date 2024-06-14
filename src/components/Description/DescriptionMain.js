import React from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect  } from 'react';

function Description() {
    let { state } = useLocation();
    
    const nome = state.name;
    const id = state.id;


    const [habitatData, setHabitatData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/${id}/`);
                setHabitatData(response.data);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchData();
    }, []);


    return (
        <>  
            <div className='container'>
                <h5>{nome}</h5>
                <p>{habitatData.name}</p>
            </div>
        </>
    );
}

export default Description;



