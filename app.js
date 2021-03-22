require('dotenv').config()
require('./database/client')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')


var indexRouter = require('./routes/indexRouter');
const pokemonsRouter = require('./routes/pokemonRouter');
const userRouter = require('./routes/userRouter')

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/pokemons', pokemonsRouter);
app.use('/users', userRouter)

module.exports = app;
