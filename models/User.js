const mongoose = require('mongoose')
// const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {type: String, min: 5, max: 50, required: true, unique: true},
    password: {type: String, min: 5, max: 30, required: true},
    myPokemonId: { type: Number, required: true},
    enemyPokemonId: { type: Number, required: true},
    winner: { type: Boolean, required: true },
    last_updated: {type: Date, default: Date.now }
})

// userSchema.methods.createToken = function () {
//     const payload = { _id: this._id, email: this.email }
//     const secretKey = process.env.JWT_SECRET;
//     const token = jwt.sign(payload, secretKey)
//     return token
// }

const User = mongoose.model('User', userSchema)
module.exports = User;