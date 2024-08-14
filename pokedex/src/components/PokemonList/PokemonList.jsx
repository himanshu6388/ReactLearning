import { useEffect, useState } from "react";
import './PokemonList.css';
import axios from 'axios';

function PokemonList(){
    
    async function downlaodPokemons(params) {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        console.log(response);
    }

    useEffect(()=>{
            downlaodPokemons();
    }, [])


    return (

        <div className="pokemon-list-wrapper">
            Pokemon List
        </div>
    )
}

export default PokemonList;