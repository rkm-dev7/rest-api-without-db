const express = require('express');
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/users.controller');
const router = express.Router();




// Route to get all users
router.get('/', getAllUsers);

// Route to create a user
router.post('/', createUser);

// Route to update user
router.put('/:id', updateUser);

// Route to delete auser
router.delete('/:id', deleteUser);

module.exports = router;