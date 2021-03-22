const mongoose = require('mongoose')
// const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type: String, min: 3, max: 15, required: true},
    email: {type: String, min: 5, max: 50, required: true, unique: true},
    password: {type: String, min: 3, max: 30, required: true},
    game: [{type: Schema.ObjectId, ref: 'Game'}]
})

// userSchema.methods.createToken = function () {
//     const payload = { _id: this._id, email: this.email }
//     const secretKey = process.env.JWT_SECRET;
//     const token = jwt.sign(payload, secretKey)
//     return token
// }

const User = mongoose.model('User', userSchema)
module.exports = User;