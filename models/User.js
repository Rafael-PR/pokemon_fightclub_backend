const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type: String, min: 3, max: 15, required: true},
    email: {type: String, min: 5, max: 50, required: true, unique: true},
    password: {type: String, min: 3, max: 30, required: true},
    game: [{type: Schema.ObjectId, ref: 'Game'}]
})

const User = mongoose.model('User', userSchema)
module.exports = User;
