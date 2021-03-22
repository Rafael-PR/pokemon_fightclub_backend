const User = require('../models/User')

exports.getAllUsers = async (req, res, next) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

exports.createUser = async (req,res,next) => {
    const { email, password, myPokemonId, enemyPokemonId, winner, last_updated } = req.body
    try {
        const createNewUser = await User.create({ email, password, myPokemonId, enemyPokemonId, winner, last_updated })
        res.json(createNewUser)
    } catch (e) {
        res.status(500).send(e.message)
    }
}