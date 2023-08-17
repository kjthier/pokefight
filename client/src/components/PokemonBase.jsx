import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokemonBase = () => {
    const [pokemonBase, setPokemonBase] = useState({});
    const { id } = useParams();

    useEffect( () => {
        fetch(`https://pokefight-6jjg.onrender.com/pokemon/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setPokemonBase(data))
        .catch(error => console.error('Failed to fetch Pokemon base:', error));
    }, [id]);
    
    console.log(pokemonBase);

    return (
        <div>
        <h1>Base Stats</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}> 
                {Object.entries(pokemonBase).map(([stat, value]) => (
                    <li key={stat}>
                        {stat}: {value}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonBase;