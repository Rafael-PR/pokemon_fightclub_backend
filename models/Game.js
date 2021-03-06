const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    myPokemonName: { type: String, required: true},
    enemyPokemonName: { type: String, required: true},
    winner: { type: Boolean, required: true },
    last_updated: {type: Date, default: Date.now }
})

const Game = mongoose.model('Game', gameSchema)

module.exports = Game