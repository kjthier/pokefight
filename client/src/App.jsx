import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AllPokemon from './components/AllPokemon.jsx'
import PokemonDetails from './components/PokemonDetails.jsx'
// import PokemonName from './components/PokemonName.jsx'

export default function App() {
  
  return (
    <Router>
      <div>

        <Routes>
          <Route path="pokemon/:id" element={<PokemonDetails />} />
          <Route path="/" element={<AllPokemon />} />
        </Routes>
      </div>
    </Router>
  )
}

