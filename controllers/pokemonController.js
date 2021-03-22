const pokeData = require('../pokemonData.json')

exports.getAll = (req, res) => {
    res.json(pokeData)
}

exports.getId = (req, res) => {
    const { id } = req.params
    try {
        const pokemon = pokeData.find(poke => poke.id === parseInt(id, 10)) 
        res.json(pokemon)
    } catch (e) {
        return res.status(404).send('That pokemon is not in the database' + e.message)
    }
}

// get pokemon by name doens't work
exports.getName = (req, res) => {
    const { name } = req.params
    const findName = pokeData.findOne(poke => poke.name.english === name)
    res.json(findName)
}