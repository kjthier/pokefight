import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './App.css'
import useFetch from './hooks/useFetchDetails'
import AllPokemon from './components/AllPokemon.jsx'
import PokemonDetails from './components/PokemonDetails.jsx'
import PokemonBase from './components/PokemonBase.jsx'

export default function App() {
  const pokemonDetails = useFetch()

  return (
    <Router>
      <div>
        <Routes>
          <Route path="pokemon/:id/base" element={<PokemonBase pokemonDetails={pokemonDetails} />} />
          <Route path="pokemon/:id" element={<PokemonDetails pokemonDetails={pokemonDetails} />} />
          <Route path="/" element={<AllPokemon pokemonDetails={pokemonDetails} />} />
        </Routes>
      </div>
    </Router>
  )
}

// middleware error handling


