import useFetchDetails from '../hooks/useFetchDetails'
import { Link, useParams } from 'react-router-dom'

export default function PokemonDetails() { 
    const { id } = useParams()
    const pokemonDetails = useFetchDetails(id)

    return (
        <div>
            <h2>Pokemon Details</h2>
            <p>ID: {id}</p>
            <p>Name (English): {pokemonDetails[id]?.name?.english}</p>
            <p>(Japanese): {pokemonDetails[id]?.name?.japanese}</p>
            <p>(Chinese): {pokemonDetails[id]?.name?.chinese}</p>
            <p>(French): {pokemonDetails[id]?.name?.french}</p>
            <p>Type: {pokemonDetails[id]?.type?.join(', ')}</p>
            <p>
                <Link to={`/pokemon/${id}/base`}>Base Stats</Link>
            </p> 
        </div>
    )
}