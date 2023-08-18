import { useState, useEffect, useMemo } from 'react'

export default function useFetchAll() {

    const [allPokemon, setAllPokemon] = useState([])

    useEffect(() => {
        fetch('https://pokefight-6jjg.onrender.com/pokemon')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response failed')
                }
                return response.json()
            })
            .then(data => {
                setAllPokemon(data)
            })
            .catch(error => console.error('Failed to fetch all Pokemon: ', error))
    }, [])

    return useMemo(() => allPokemon, [allPokemon])
}
    