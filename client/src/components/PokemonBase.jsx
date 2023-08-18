import useFetchDetails from '../hooks/useFetchDetails';
import { useParams } from 'react-router-dom';

export default function PokemonBase() {
    const { id } = useParams();
    const pokemonDetails = useFetchDetails(id);

    console.log("pokemonDetails:", pokemonDetails); // Check the content of pokemonDetails

    if (!pokemonDetails || !pokemonDetails.base) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Base Stats</h1>
            <ul style={{ 
                listStyleType: 'none', 
                padding: 0 
            }}> 
                {Object.entries(pokemonDetails.base).map(([stat, value]) => (
                    <li key={stat}>
                        {stat}: {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}
