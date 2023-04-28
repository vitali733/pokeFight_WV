const express = require('express')
var cors = require('cors')
const app = express()
const port = 8000
const pokeRouter = require('./routes/pokeRoutes.js')
const {fetchPokemonData} = require('./controllers/pokeControllers.js')
console.log('starting server.js!')

app.use(cors()) //enable all cors requests

app.use('/pokemon', pokeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})