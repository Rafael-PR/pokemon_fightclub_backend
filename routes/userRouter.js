const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* GET all users */
router.get('/', userController.getAllUsers);

/* GET one user by it's id */
// router.get('/:id', pokemonController.getId);

/* POST: create new user */
router.post('/', userController.createUser);

module.exports = router;