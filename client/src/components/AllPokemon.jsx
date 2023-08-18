import useFetchAll from '../hooks/useFetchAll'
import { Link } from 'react-router-dom'

export default function AllPokemon() {
    const allPokemon = useFetchAll() 
    
    return (
        <div>
            <h2>All Pokemon</h2>
            <ul>
                {allPokemon.map(pokemon => (
                    <li key={pokemon.id}>
                        <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name.english}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}