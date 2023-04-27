const fetchPokedexData = require('../db/apiHandler.js')

const getAllPokemon = async (req, res, next) => {
    console.log('executing getPokemon')
    data = await fetchPokedexData()
     return res.send(data)
  }

  const getPokemonById = async (req, res, next) => {
    console.log('executing getPokemonById')
    try {
        data = await fetchPokedexData()
        const { id } = req.params
        foundPokemon = data.find(e => e.id == id)
        return res.send(foundPokemon)
    } catch(error) {
        next(error)
    }
  }

  module.exports = { getAllPokemon, getPokemonById } 