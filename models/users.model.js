const { v4: uuidv4, v5: uuidv5 } = require('uuid');


const users = [
    {
        id: uuidv4(),
        username: "Rabbil Hasan",
        email: "rabbil12@yahoo.com"
    },
    {
        id: uuidv4(),
        username: "Shakil Rahman",
        email: "sk142@yahoo.com"
    }
];

module.exports = users;