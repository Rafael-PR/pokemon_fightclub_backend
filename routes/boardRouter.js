const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardController');

/* GET all users */
router.get('/', boardController.getAllUsers);

/* GET one user by it's id */
// router.get('/:id', pokemonController.getId);

/* POST: create new user */
router.post('/', boardController.createUser);

/* GET all games */
router.get('/game', boardController.getAllGames);

/* POST: create new game */
router.post('/game', boardController.createGame);

module.exports = router;