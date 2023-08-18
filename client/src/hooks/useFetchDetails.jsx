import { useState, useEffect } from 'react'

export default function useFetchDetails(id) {
    const [pokemonDetails, setPokemonDetails] = useState({});

    useEffect(() => {
        if (!id) {
            return; // No need to fetch if id is not provided
        }

        fetch(`https://pokefight-6jjg.onrender.com/pokemon/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response failed')
                }
                return response.json()
            })
            .then(data => {
                setPokemonDetails(data);
            })
            .catch(error => console.error(`Failed to fetch Pokemon details for ID ${id}:`, error))
    }, [id])

    return pokemonDetails
}
