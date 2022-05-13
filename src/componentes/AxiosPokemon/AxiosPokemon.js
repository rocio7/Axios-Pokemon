import React, {useEffect, useState} from "react";
import axios from "axios";

const AxiosPokemon = () => 
{
    const [consulta, setConsulta] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const ConsultarAPI = () => 
    {
        setConsulta(true);
    }


    useEffect(() => {
        if(consulta === true)
        {
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response =>  
                setPokemons(response.data.results)
            )
        }
    },[consulta]);

    return(
        <div>
            <button className="btn btn-secondary" onClick={ConsultarAPI}>Fetch Pokemon</button>
            <div>
            {pokemons.length > 0 && pokemons.map((pokemon, index)=>
            {
                return (<li key={index}>{pokemon.name}</li>)
            })}
            </div>
        </div>
    )
}

export default AxiosPokemon;