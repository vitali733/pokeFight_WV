const express = require('express')
const app = express()
const port = 3000
const pokeRouter = require('./routes/pokeRoutes.js')
const {fetchPokemonData} = require('./controllers/pokeControllers.js')
console.log('starting server.js!')

//fetchPokemonData()
//console.log(getPokedexData())


app.use('/pokemon', pokeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})