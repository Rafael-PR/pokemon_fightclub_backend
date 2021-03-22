const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController')

/* GET all pokemons */
router.get('/', pokemonController.getAll);

/* GET one pokemon by it's id */
router.get('/:id', pokemonController.getId);

//doesn't work
/* GET one pokemon by it's name */
// router.get('/:name', pokemonController.getName);

module.exports = router;
