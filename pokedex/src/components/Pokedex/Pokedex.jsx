import { ImMap } from "react-icons/im";
import Search from "../Search/Search";

// CSS Import
import './Pokedex.css';
import PokemonList from "../PokemonList/PokemonList";

function Pokedex(){


    return (
        <div className="pokedex-wrapper">
             <h1 id="pokedex-heading">Pokedex:</h1>
            <Search />
            <PokemonList />
        </div>
    )
}

export default Pokedex;