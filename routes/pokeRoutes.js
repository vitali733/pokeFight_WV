const express = require('express');
const pokeRouter = express.Router();

const  {getAllPokemon, getPokemonById, getAllPokemonFromAPI}  = require('../controllers/pokeControllers.js')


pokeRouter.get('/', getAllPokemon);
pokeRouter.get('/:id', getPokemonById);

module.exports = pokeRouter;

