import express from 'express';
import { getAllPokemon, getById, getName } from '../controllers/pokemonController.js';

const router = express.Router()

router.get('/', getAllPokemon);
router.get('/:id', getById);
router.get('/:id/name', getName);

export default router;