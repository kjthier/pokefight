import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PokemonDetails = () => { 
    const [pokemonDetails, setPokemonDetails] = useState({});
    const { id } = useParams();

    useEffect( () => {
        fetch(`https://pokefight-6jjg.onrender.com/pokemon/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setPokemonDetails(data))
        .catch(error => console.error('Failed to fetch Pokemon details:', error));
    }, [id]);
    
    console.log(pokemonDetails);

    if (!pokemonDetails) {
        return (<h1>Error</h1>)
    }

    return (
        <div>
            <h2>Pokemon Details</h2>
            <p>ID: {Object.values(pokemonDetails.name)}</p>
            <p>Name (English): {pokemonDetails.name?.english}</p>
            <p>(Japanese): {pokemonDetails.name?.japanese}</p>
            <p>(Chinese): {pokemonDetails.name?.chinese}</p>
            <p>(French): {pokemonDetails.name?.french}</p>


           <p>Type: {Object.values(pokemonDetails.type?.join(', '))}</p>
            <h3>
                <Link to={`/pokemon/${id}/base`}>Base Stats:</Link>
            </h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}> 
                {Object.entries(pokemonDetails.base).map(([stat, value]) => (
                    <li key={stat}>
                        {stat}: {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonDetails;