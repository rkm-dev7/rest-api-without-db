const { v4: uuidv4, v5: uuidv5 } = require('uuid');
let users = require('../models/users.model');

const getAllUsers = (req, res) => {
    res.json({users})
};

const createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email
    };
    users.push(newUser);    
    res.status(200).json(users);
};

const updateUser = (req, res) => {
    const userId = req.params.id;
    const {username, email} = req.body
    users.filter(user => user.id == userId).map(selectedUser => {
        selectedUser.username = username;
        selectedUser.email = email;
    });  
    res.status(200).json(
        {
            message: "user update successfull",
            users,
        }
    )
}

const deleteUser = (req, res) => {
    const userId = req.params.id;
    users = users.filter(user => user.id !== userId)
    
    res.status(200).json(
        {
            message: "user deleted successfull",
            users,
        }
    )
}



module.exports = {getAllUsers, createUser, updateUser, deleteUser};