import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllPokemon = () => {
    const [allPokemon, setAllPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokefight-6jjg.onrender.com/')
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => setAllPokemon(data))
          .catch(error => console.error('Failed to fetch all Pokemon:', error));
    }, []);

    return (
        <div>
            <h2>All Pokemon</h2>
            <ul>
                {allPokemon.map((pokemon, index) => (
                    <li key={index}>
                        <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllPokemon;