import React from "react";
import './SectionMain.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

import PokemonCard from "../PokemonCard";


const Section = () => {

    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for(var i = 1; i <= 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        };
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((response) => setPokemons(response));
        return response;

        
        ///axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
        ///.then((res) => setPokemons(res.data.results))
        //.catch((err) => console.log(err));
    };

    
    return (
        <>
            <div className="container">
                <h2 style={{textAlign : 'center'}}>Pokemons</h2>
                <div className="row">
                    {pokemons.map((pokemon, index) => (
                        <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                            <PokemonCard name={pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1)} types={pokemon.data.types} image={pokemon.data.sprites.front_default} abilities={pokemon.data.abilities} id={pokemon.data.id}/>
                        </div>
                    ))};
                </div>
            </div>
        </>
    );
};

export default Section;