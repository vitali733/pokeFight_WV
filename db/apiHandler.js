const axios = require('axios')

let pokedexData = 0

const fetchPokedexData = async () => { 
    if(!pokedexData){
        console.log('fetching PokemonData')
        try {
        const response = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json');
        pokedexData = response.data
        return pokedexData
      } catch (error) {
        console.log('error while fetching')
        console.error(error);
      } 
    } 
    console.log('reusing fetched data')
    return pokedexData
}

module.exports =  fetchPokedexData 

