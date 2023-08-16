import axios from "axios";

// get all pokemon from json
export const getAllPokemon = async (req, res) => {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json');
      const pokemonList = response.data;
  
      res.json(pokemonList);
    } catch (error) {
      res.status(500).json({ error: 'An error occured fetching Pokemon data'});
    }
  };

// get a pokemon by id and retrieve name info
export const getName = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (!id) {
        res.status(400).json({ error: 'Invalid Pokemon ID' });
      }
  
      const response = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json');
      const pokemonList = response.data;
      const pokemon = pokemonList.find(p => p.id === id);
  
      if (!pokemon) {
        res.status(404).json({ error: 'Pokemon not found' });
      }
  
      const name = pokemon.name
      res.json({ name });
    } catch (error) {
      res.status(500).json({ error: 'An error occured fetching Pokemon data'});
    }
  };
  
  // get a pokemon by id
  export const getById = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (!id) {
        res.status(400).json({ error: 'Invalid Pokemon ID' });
      }
  
      const response = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json');
      const pokemonList = response.data;
      const pokemon = pokemonList.find(p => p.id === id);
  
      if (!pokemon) {
        res.status(404).json({ error: 'Pokemon not found' });
      }
  
      res.json(pokemon);
    } catch (error) {
      res.status(500).json({ error: 'An error occured fetching Pokemon data'});
    }
  };
  
  
  